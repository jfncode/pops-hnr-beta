# Sorteio aleatório de 30 POPs por colaborador — Design

**Projeto:** pops-hnr-beta (Hospital Nereu Ramos · sistema de POPs)
**Data:** 2026-06-28
**Status:** aprovado, pronto para plano de implementação

## Objetivo

Hoje a trilha do colaborador mostra **todos** os POPs do seu setor: a Etapa 1 conclui ao
aprovar **quaisquer 15** POPs de etapa 1 (`ETAPA1_MIN`) e a Etapa 2 ao aprovar **todos** os
de etapa 2. Com o acervo agora grande (50–125 POPs/setor), isso é inviável.

A feature substitui essa seleção por um **sorteio de 30 POPs obrigatórios e específicos
por colaborador**, fixo e estável, dividido em 2 seções progressivas de 15. Cada colaborador
faz um subconjunto diferente; só esses 30 contam para os 2 certificados.

## Decisões de design (acordadas)

1. **Divisão por etapa:** Seção 1 = 15 POPs sorteados entre os de **etapa 1** do setor
   (fundamentos, quiz mais fácil); Seção 2 = 15 sorteados entre os de **etapa 2** (avançado,
   quiz mais difícil). Preserva a dificuldade e o sentido Fundamentos → Avançado.
2. **Persistência dos 30 ids:** o sorteio é computado uma vez (1º login) e salvo no perfil do
   colaborador (Supabase). Leituras seguintes usam o valor salvo → **imune a futuras
   mudanças no acervo**. A semente determinística serve apenas como base reproduzível da
   1ª computação.

## Pré-requisito (verificado)

Todo setor tem ≥15 POPs em **cada** etapa, então o split 15+15 é sempre possível:

| setor | total | etapa 1 | etapa 2 |
|---|---|---|---|
| assistencial | 66 | 43 | 23 |
| uti | 68 | 42 | 26 |
| cc | 50 | 32 | 18 |
| ambulatorio | 56 | 32 | 24 |
| cme | 125 | 21 | 104 |

## Modelo de dados

### Supabase (produção)
Nova coluna na tabela `colaboradores`:
```sql
alter table colaboradores add column sorteio jsonb;
```
Formato do valor:
```json
{ "e1": ["pop-08","pop-21", ... 15 ids], "e2": ["pop-50","pop-67", ... 15 ids] }
```
- `null` = colaborador ainda não sorteou (1ª vez).
- RLS já permite o colaborador atualizar a própria linha (`colab_upd`: `id = auth.uid()`).

### Demo (`?demo=1`)
Persistido no `localStorage`, chave `pops_sorteio_<matricula>`, mesmo formato `{e1, e2}`.

## Algoritmo do sorteio

```
sortear(setor, seed):
  rng = mulberry32(hashString(seed))          # PRNG determinístico
  e1 = shuffle(candidatosEtapa(setor, 1), rng).slice(0, 15)   # ids
  e2 = shuffle(candidatosEtapa(setor, 2), rng).slice(0, 15)   # ids
  return { e1, e2 }
```
- `candidatosEtapa(setor, e)` = POPs do setor com `p.etapa===e` (etapa 1 = `p.etapa!==2`),
  ordenados por código (ordem-base estável).
- `shuffle` = Fisher-Yates usando o `rng` seedado.
- **Semente:** `matricula` se preenchida; senão `user id` (produção) — no demo a matrícula é
  sempre exigida no login. Como o resultado é persistido, a semente só importa na 1ª vez.
- **Fallback:** se `candidatosEtapa` tiver <15, usa todos os disponíveis (não ocorre hoje).

### Fluxo de obtenção (`garantirSorteio`)
1. Após login, o perfil traz `sorteio`.
2. Se `sorteio` é `null`/ausente → `sortear(setor, seed)` → persiste
   (`POPApi.salvarSorteio` em produção; `localStorage` no demo) → usa.
3. Se presente → usa direto.

## Backend (`js/supabase-backend.js`)
- `fetchPerfil`: adicionar `sorteio` ao `select` de `colaboradores`.
- Nova função:
  ```js
  POPApi.salvarSorteio = async (sorteio) => {
    const { data: s } = await sb.auth.getSession();
    return sb.from('colaboradores').update({ sorteio }).eq('id', s.session.user.id);
  };
  ```
- No modo demo (`local-backend.js`): `salvarSorteio` grava no `localStorage`; `currentProfile`
  devolve o `sorteio` salvo localmente (ou `null`).

## Integração na trilha (`index.html`)

A camada de etapas passa a ler o **sorteio do colaborador** em vez de "todos os POPs do setor":

- Estado novo: `let sorteio = null;` (`{e1:[ids], e2:[ids]}` do colaborador logado).
- `trilhaEtapa(e)` (novo): retorna os objetos POP cujos ids estão em `sorteio[e===1?'e1':'e2']`,
  ordenados por código. Substitui o uso de `popsEtapa(setor,e)` na renderização da trilha.
- `metaEtapa` na trilha = `trilhaEtapa(e).length` (15). `etapaDone(e)` = todos os POPs de
  `trilhaEtapa(e)` aprovados (aprovar **os 15**, não "quaisquer 15").
- `popEtapa(p)` (campo intrínseco) permanece governando: bloqueio da Etapa 2 e
  **dificuldade do quiz** (`drawQuiz(..., popEtapa(p)===2?3:2)`). **Quiz engine inalterado.**
- POPs fora dos 30 não aparecem na trilha; continuam acessíveis como **leitura livre** pelo
  buscador, que já libera após os 2 certificados (`buscadorLiberado`).
- `popsEtapa(setor,e)` original é mantido como pool de candidatos do sorteio (e para
  estatísticas do gestor, se aplicável).

## Modo demo (`js/seed-demo.js`)
- O usuário de teste (Jefferson · mat. 1000 · Assistencial · 2 certificados) deve aprovar
  **os 30 sorteados dele**. `ensureTestUser`/`aprovarN` passam a computar o mesmo
  `sortear('assistencial', '1000')` e aprovar os ids de `e1` e `e2`, em vez de POPs arbitrários.
- Gestor demo (`gestor123`) inalterado.

## Rollout
1. Rodar a migração SQL no painel Supabase (coluna `sorteio`).
2. Deploy do front (GitHub Pages).
3. Colaboradores novos sorteiam no 1º login e persistem. Sem migração de aprovações antigas
   (usuários de teste já foram limpos).

## Testes
- **Unidade (lógica de sorteio):** determinismo (mesma matrícula → mesmos 30); tamanho
  (15+15); pertencem ao setor e à etapa corretos; estabilidade ao adicionar POP fictício
  ao acervo **depois** de persistido (não muda).
- **Integração (fluxo):** 1º login computa e persiste; 2º login lê o persistido; concluir os 15
  da Seção 1 desbloqueia a Seção 2; concluir as duas emite o 2º certificado e libera o buscador.
- **Demo:** `?demo=1` com Jefferson mostra os 2 certificados a partir dos 30 sorteados.
- Validação `node -e "require('./data/pops.js')"` continua passando.

## Fora de escopo (YAGNI)
- Re-sorteio manual / reset do sorteio pelo gestor.
- Configurar o tamanho (30) ou a divisão (15/15) via UI.
- Migração de aprovações de colaboradores legados (não há).
