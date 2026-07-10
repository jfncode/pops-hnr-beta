# Portal do Colaborador — hub com POPs, Regimentos, Protocolos e Cursos + cadastro único — Design

**Projeto:** pops-hnr-beta (Hospital Nereu Ramos)
**Data:** 2026-07-08
**Status:** aprovado, pronto para plano de implementação

## Objetivo

Hoje o botão **"Área do colaborador"** da landing leva direto ao sistema de POPs: o
colaborador loga e cai na trilha de procedimentos. O portal vai crescer para 4 áreas —
**POPs, Regimentos, Protocolos e Cursos** — então o fluxo passa a ter uma tela
intermediária ("duas telas"): login → **HUB** com as 4 áreas → seção escolhida.

Junto, o cadastro vira **único e controlado**: a conta serve para as 4 áreas e o
cadastro só completa para quem está na **lista oficial de colaboradores**
(matrícula + e-mail + nome completo) que o Jefferson vai subir no Supabase.

## Decisões de design (acordadas em 2026-07-08)

1. **Modelo misto de conteúdo:** POPs continua como está (leitura + avaliação +
   certificado). **Regimentos** e **Protocolos** são bibliotecas de leitura/consulta
   (sem prova). **Cursos** são trilhas com avaliação e certificado, reaproveitando o
   motor dos POPs.
2. **Cadastro = lista oficial + senha própria:** no cadastro a pessoa digita
   matrícula + e-mail; só passa se o par existir na lista oficial. O **nome vem da
   lista** (sem erro de digitação). Ela cria uma senha e o login continua
   e-mail + senha. **Enquanto a lista estiver vazia, o cadastro segue aberto como
   hoje** — nada quebra até a lista ser carregada.
3. **Merge antes:** a branch `feat/sorteio-30-pops` é mergeada na main **antes** do
   hub começar (evita conflito grande no `index.html`).
4. **Hub dentro do app atual:** nova tela no SPA `pops-hnr-beta`. Uma sessão só,
   mesmo design system. Telas novas ficam em `js/hub.js` para não inchar o
   `index.html` (140 KB). A landing não muda (o botão já aponta pro app).

## Navegação e telas

### Estado
- `screen` ganha os valores `'hub'`, `'biblioteca'` e `'cursos'` (além dos atuais
  `list/reader/quiz/result/cert/busca`).
- Novo estado `bibliotecaKind: 'regimentos' | 'protocolos'` diz qual coleção a tela
  de biblioteca mostra.
- Colaborador logado cai em `screen='hub'` (era `'list'`). Gestora **não passa pelo
  hub na Fase 1**: continua caindo no painel dela, com o atalho "Buscar POPs" atual
  (acesso da gestora às bibliotecas/cursos entra na Fase 2).

### Tela HUB (`renderHub`)
- Saudação com o nome ("Olá, {nome}") + subtítulo institucional.
- Grid 2×2 no desktop, empilhado no mobile. Cards no design system atual
  (radius 16, shadow, Fraunces nos títulos, fade-up sequencial, tema claro/escuro):
  - **POPs** — progresso real da trilha (barra + "X/15" da seção atual; com o
    sorteio-30 mergeado, a trilha é 15+15 sorteados).
  - **Regimentos** — nº de documentos disponíveis.
  - **Protocolos** — nº de documentos disponíveis.
  - **Cursos** — badge "Em breve" enquanto não houver curso cadastrado.
- Card clicável inteiro; seção vazia mostra estado "em preparação" ao entrar.

### Topbar
- Botão **"Início"** (colaborador, visível quando `screen !== 'hub'`) volta ao hub.
- `backToList()` continua voltando à lista de POPs dentro da seção POPs.

### Bibliotecas (`renderBiblioteca`) — Regimentos e Protocolos
- Uma tela genérica para as duas coleções: lista de documentos (código, título,
  origem) + **busca própria** reaproveitando `normTxt`/índice dos POPs.
- Documento abre no leitor existente (`renderReader`) em **modo consulta** (leitura
  livre, sem gate de leitura, sem quiz, sem trava de certificados).
- Empty-state elegante enquanto não houver documentos.

### Cursos (`renderCursos`)
- Fase 1: tela com empty-state "Em breve" + formato de dados definido (abaixo).
- Fase 2 (quando o 1º curso entrar): lista de cursos → módulos com leitura + quiz
  cronometrado (mesmas regras: 5 questões, aprova com 3, 60 s/questão) →
  certificado do curso quando todos os módulos estiverem aprovados.

## Dados (arquivos estáticos, mesmo padrão do `data/pops.js`)

- `data/regimentos.js` → `window.REGIMENTOS = [...]`
- `data/protocolos.js` → `window.PROTOCOLOS = [...]`
- `data/cursos.js` → `window.CURSOS = [...]`

Documento de biblioteca = mesmo objeto do POP **sem `pool`** (id, code, title,
version/emission opcionais, origem, `sections[]`). Curso = `{id, code, titulo,
descricao, modulos: [{id, title, sections[], pool[]}]}`.

**Prefixos de id reservados** (não colidem com `pop-*`): `doc-reg-*`, `doc-prot-*`,
`curso-*` (módulo: `curso-<slug>-m<n>`).

- Lookup generalizado: `docById(id)` procura em POPs + regimentos + protocolos +
  módulos de cursos (o leitor usa o mesmo shape de objeto).
- Resultado de módulo de curso (Fase 2) é salvo pelos **RPCs existentes**
  (`salvar_resultado` com `pop_id = id do módulo`, `pop_codigo = code do curso`) —
  zero mudança de schema. A regra "não regride aprovação" já vale.
- Painel da gestora (Fase 1): resultados com id `curso-*` são **filtrados** dos
  relatórios de POPs para não poluir; visão de cursos entra na Fase 2.

## Cadastro único (Supabase) — `MIGRACAO-LISTA-OFICIAL.sql`

### Tabela
```sql
create table lista_oficial (
  matricula text primary key,
  nome      text not null,
  email     text not null,
  setor     text            -- opcional; se vier, o cadastro força este setor
);
alter table lista_oficial enable row level security;
-- nenhuma policy de select/insert/update para anon/authenticated (deny-all):
-- leitura/validação SÓ pelas funções security definer abaixo.
```

### Validação (UX do formulário)
```sql
create function validar_matricula(p_matricula text, p_email text)
returns jsonb security definer ...
```
- Lista **vazia** → `{"aberto": true}` (cadastro livre, como hoje).
- Match exato (matrícula + e-mail, case-insensitive/trim no e-mail) →
  `{"ok": true, "nome": ..., "setor": ...}`.
- Sem match → `{"ok": false}` (não revela qual campo errou).
- `grant execute` para `anon` (roda antes de existir conta).

### Enforcement real (camada de dados)
Trigger `before insert or update of matricula, email, nome, setor on colaboradores`
(função security definer): se a `lista_oficial` **não** estiver vazia, exige par
matrícula+e-mail presente na lista e **força o `nome` da lista** na linha (e o
`setor`, apenas quando preenchido na lista; senão vale o escolhido no formulário).
Sem isso, a allowlist seria só cosmética (qualquer cliente poderia dar upsert
direto em `colaboradores`). Com lista vazia o trigger não interfere.

### Fluxo no front (produção)
Tela "Criar conta" passa a 2 passos:
1. Matrícula + e-mail → chama `validar_matricula`.
   - `aberto` → formulário atual (nome/setor manuais + senha).
   - `ok` → mostra **nome oficial** (somente leitura; setor da lista se houver,
     senão select de setor) + campo de senha.
   - `!ok` → "Matrícula e e-mail não conferem com a lista oficial — procure a
     Educação Continuada." (card com shake, padrão atual de erro)
2. `signUp` + upsert do perfil como hoje (o trigger valida de novo no servidor).

Login, recuperação de senha, gestora e modo demo (`?demo=1`) **não mudam**.

### Quando a lista for carregada (SQL no mesmo arquivo, seção comentada)
1. Limpar contas de teste conhecidas (matrícula 2525 duplicada etc. — Jefferson
   confirma a lista de e-mails antes do delete).
2. `create unique index on colaboradores (matricula)` — fecha o bug latente de
   matrícula duplicada.
3. `insert` da lista oficial (Jefferson fornece matrícula/nome/e-mail; setor se tiver).

## Identidade

- `<title>` e OG: de "POPs HNR — Leitura e Avaliação" para
  **"Portal do Colaborador · Hospital Nereu Ramos"**; descrição cita as 4 áreas.
- `og:url` corrigida para `https://pops.hospitalnereuramos.com.br/` (hoje aponta
  pro github.io). A imagem `og-card.jpg` atual permanece (regerar fica fora de escopo).

## Fases

- **Fase 0 — pré-requisito:** merge `feat/sorteio-30-pops` → main; aplicar no
  Supabase `alter table colaboradores add column if not exists sorteio jsonb;`
  (conferir se já existe antes).
- **Fase 1 — esta entrega:** hub + topbar "Início" + bibliotecas (tela genérica,
  busca, leitor em consulta, empty-states) + tela de cursos (empty-state) +
  `docById` + arquivos `data/*.js` (vazios, formato documentado) + SQL da lista
  oficial (seguro com lista vazia) + fluxo de cadastro em 2 passos + título/OG +
  filtro `curso-*` no painel da gestora.
- **Fase 2 — quando o conteúdo chegar:** documentos de Regimentos/Protocolos em
  lotes (transcrição dos PDFs não-POP da pasta `popnereu`: código de ética,
  regimento da enfermagem, protocolos do CC…), 1º curso ligado ao motor de prova +
  certificado, visão de cursos no painel da gestora, carga da lista oficial +
  UNIQUE de matrícula + limpeza de contas de teste.

## Erros e casos-borda

- RPC de validação indisponível → "Não foi possível validar agora — tente de novo
  em instantes." (não cria conta às cegas).
- Matrícula da lista já usada por outra conta → o `signUp` falha no e-mail
  duplicado do Auth ou o UNIQUE (Fase 2) bloqueia; mensagem clara.
- Bibliotecas/cursos vazios → empty-state institucional (sem tela quebrada).
- Demo (`?demo=1`): hub aparece com dados demo; cadastro demo (nome+matrícula+setor)
  inalterado; bibliotecas leem os mesmos `data/*.js`.
- Colaborador com setor vazio/legado: hub mostra a trilha como hoje (fallback
  existente `popsDoSetor`).

## Testes

1. **Demo local** (servidor estático + `?demo=1`): hub, navegação entre as 4 seções,
   voltar ao hub, leitor em consulta nas bibliotecas com doc de exemplo temporário.
2. **Produção (conta de teste):** cadastro com lista vazia (fluxo aberto) →
   inserir 1 registro fake na `lista_oficial` → cadastro com par certo (nome vem da
   lista) e com par errado (bloqueia) → upsert direto em `colaboradores` com
   matrícula fora da lista falha (trigger) → `select` anônimo na `lista_oficial`
   falha (RLS) → apagar registro fake + conta de teste.
3. **Regressão:** login/trilha/quiz/certificado de POPs, painel e busca da gestora,
   relatórios sem itens `curso-*`.