# Roteiro — Migrar POPs HNR para Supabase

Plano passo a passo para tirar o sistema do `localStorage` (beta) e colocá-lo
no ar com **dados reais e compartilhados** (cadastros, e-mails, avaliações).
Nada aqui foi executado ainda — é o roteiro para quando decidirmos partir pra isso.

> **Por que é tranquilo:** o app já isola o backend em `js/api.js` (`POPApi`, 6 funções).
> Migrar = reescrever só o miolo dessas 6 funções. Telas, quiz, certificados e o
> buscador **não mudam**. Os POPs continuam em `data/pops.js` (são conteúdo, não dado de usuário).

---

## Visão geral das 6 funções a migrar (`POPApi`)
| Função | O que faz hoje (local) | Vira no Supabase |
|---|---|---|
| `cadastrar(c)` | grava colaborador | upsert em `colaboradores` |
| `salvar(r)` | grava resultado da prova, **sem regredir aprovação** | RPC `salvar_resultado` (lógica no banco) |
| `status(mat)` | lista pop_ids aprovados do colaborador | select em `resultados` |
| `getResultados()` | tudo (só gestor) | select (perfil gestor autenticado) |
| `gestorLogin(senha)` | confere senha demo | Supabase Auth (e-mail/senha) |
| `flushPendentes()` | reenvia fila offline | reenvia fila via RPC |

---

## Fase 1 — Projeto e banco (1–2h)
1. Criar conta/projeto no Supabase (free). Guardar `Project URL` e `anon key`.
2. Criar as **2 tabelas** (SQL no editor do Supabase):

```sql
create table colaboradores (
  matricula text primary key,
  nome text not null,
  setor text not null,
  email text,
  created_at timestamptz default now()
);

create table resultados (
  id uuid primary key default gen_random_uuid(),
  matricula text references colaboradores(matricula) on delete cascade,
  pop_id text not null,
  pop_codigo text,
  status text not null check (status in ('aprovado','reprovado')),
  score int, acertos int, total int,
  tentativas int default 1,
  detalhe jsonb,
  updated_at timestamptz default now(),
  unique (matricula, pop_id)
);
```

3. Função que **não regride aprovação** (espelha a regra do `local-backend.js`):

```sql
create or replace function salvar_resultado(r jsonb)
returns void language plpgsql security definer as $$
begin
  insert into colaboradores(matricula, nome, setor)
  values (r->>'matricula', r->>'nome', r->>'setor')
  on conflict (matricula) do update set nome=excluded.nome, setor=excluded.setor;

  insert into resultados(matricula,pop_id,pop_codigo,status,score,acertos,total,tentativas,detalhe)
  values (r->>'matricula', r->>'pop_id', r->>'pop_codigo', r->>'status',
          (r->>'score')::int,(r->>'acertos')::int,(r->>'total')::int,1,r->'detalhe')
  on conflict (matricula,pop_id) do update set
    tentativas = resultados.tentativas + 1,
    -- só atualiza nota/status se ainda NÃO estava aprovado
    status   = case when resultados.status='aprovado' then resultados.status else excluded.status end,
    score    = case when resultados.status='aprovado' then resultados.score  else excluded.score  end,
    acertos  = case when resultados.status='aprovado' then resultados.acertos else excluded.acertos end,
    total    = case when resultados.status='aprovado' then resultados.total  else excluded.total  end,
    detalhe  = case when resultados.status='aprovado' then resultados.detalhe else excluded.detalhe end,
    updated_at = now();
end $$;
```

## Fase 2 — Segurança (RLS) (1–2h)
Ativar Row Level Security e criar políticas:
- **colaboradores / resultados:** escrita só via a função `salvar_resultado` (security definer) e `cadastrar`. Leitura ampla (todos os colaboradores/resultados) **apenas** para o papel autenticado (gestor).
- Colaborador usa a `anon key`; gestor faz login (Fase 4) e ganha leitura total.
- Nunca expor a `service_role key` no front (só `anon key`).

## Fase 3 — Reescrever o `POPApi` (2–4h)
1. Incluir o cliente: `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`.
2. Criar `js/supabase-backend.js` (espelho do `local-backend.js`, mas chamando o Supabase):
   - `cadastrar` → `upsert` em `colaboradores`
   - `salvar` → `rpc('salvar_resultado', { r })` (com fila offline igual hoje em caso de erro)
   - `status(mat)` → `select pop_id from resultados where matricula=mat and status='aprovado'`
   - `getResultados` → `select` de colaboradores + resultados (exige sessão de gestor)
   - `flushPendentes` → reenvia a fila `pops_pendentes` (já existe em `api.js`)
3. Em `js/config.js`: desligar `POPS_LOCAL_MODE` e apontar URL/anon key. Carregar `supabase-backend.js` no lugar do `local-backend.js`.

## Fase 4 — Login do gestor (1–2h)
- Criar 1 usuário gestor no **Supabase Auth** (e-mail + senha).
- `gestorLogin` → `supabase.auth.signInWithPassword`. Sessão do gestor habilita a leitura total (RLS).
- Remover a senha demo `gestor123` do fluxo de produção.

## Fase 5 — Dados, testes e LGPD (3–5h)
1. **Migrar/seed:** opcional importar os colaboradores demo; em produção começa limpo.
2. **Testes end-to-end:**
   - colaborador cadastra (matrícula/nome/setor) → aparece no painel do gestor
   - faz prova → resultado salvo; refazer aprovado **não regride**
   - `status` reflete aprovados; etapas/certificados/buscador continuam corretos
   - gestor loga e vê todos os resultados; sem login não vê nada
   - offline: prova feita sem rede entra na fila e sincroniza depois
3. **LGPD:** aviso de privacidade no rodapé, finalidade (treinamento/certificação),
   revisar RLS (cada um só vê o que deve), e definir retenção dos dados.
4. **Deploy:** front continua no GitHub Pages chamando o Supabase. Domínio próprio opcional.

---

## Estimativa
- **Núcleo funcionando:** ~meio dia a 1 dia (4–8h)
- **Tudo redondo (testes + LGPD + deploy):** ~1 a 2 dias
- **Custo:** R$ 0 (plano grátis do Supabase)

## 2 decisões que abrem/fecham escopo
1. **Login do colaborador:** hoje é só matrícula (sem senha). Manter = rápido.
   Para dado de saúde com LGPD "de verdade", o ideal é matrícula **+ senha/e-mail** (+2–4h).
2. **Acesso do gestor:** Supabase Auth com e-mail (recomendado) vs. senha simples.

---
_Referência interna: este sistema é o pops-hnr-beta; a porta de entrada é o botão
"Área do colaborador" da landing-nereu-ramos._
