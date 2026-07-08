# Portal do Colaborador (hub 4 áreas + cadastro único) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o app de POPs no Portal do Colaborador: após o login, um HUB com 4 áreas (POPs, Regimentos, Protocolos, Cursos) + cadastro único validado contra a lista oficial no Supabase.

**Architecture:** SPA existente (`index.html` + módulos em `js/`). Telas novas em `js/hub.js`; lógica pura (lookup/busca genéricos) em `js/portal-core.js` (UMD, testável em Node). Coleções novas em `data/*.js` (UMD, mesmo padrão do `data/pops.js`). Allowlist no Supabase: tabela `lista_oficial` (RLS deny-all) + RPC `validar_matricula` (UX) + trigger em `colaboradores` (enforcement real). Spec: `docs/superpowers/specs/2026-07-08-hub-colaborador-design.md`.

**Tech Stack:** HTML/JS vanilla (módulos UMD), Supabase JS v2, GitHub Pages. Testes: Node + `assert` nativo (sem framework).

## Global Constraints

- Sem dependências novas. JS vanilla; módulos compartilháveis no padrão UMD `(root, factory)`.
- Prefixos de id RESERVADOS: POPs `pop-*` (existente), regimentos `doc-reg-*`, protocolos `doc-prot-*`, cursos `curso-*` (módulo `curso-<slug>-m<n>`).
- Coleções vazias NUNCA quebram tela — sempre empty-state.
- Gestora NÃO passa pelo hub (painel como hoje). Modo demo `?demo=1` continua funcionando (ganha o hub, resto idêntico).
- Textos de UI em pt-BR com acentuação correta.
- Repo: `C:\Users\PICHAU\.openclaw\workspace\repos\pops-hnr-beta`, branch de trabalho `feat/hub-colaborador`. Deploy = GitHub Pages na `main` (produção real: pops.hospitalnereuramos.com.br) — **merge na main SÓ no Task 9 com OK explícito do Jefferson**.
- Supabase produção: projeto `ezkohniydtijcycqevqj` (sa-east-1). Chave publishable já está em `js/config.js`. NUNCA usar/colar service_role.
- Testes Node devem passar ao fim de cada task que os toque: `node tests/sorteio.test.js` e `node tests/portal-core.test.js`.
- Commits: conventional commits em pt-BR (`feat:`/`fix:`/`test:`/`docs:`), terminando com `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- As âncoras de edição abaixo são STRINGS EXATAS do arquivo (números de linha mudam após o Task 1 — não confie neles).

## File Structure

- `js/portal-core.js` (novo) — normTxt, docById, docIndex, searchDocs (puro, UMD, Node-testável)
- `tests/portal-core.test.js` (novo) — testes do PortalCore
- `data/regimentos.js`, `data/protocolos.js`, `data/cursos.js` (novos) — coleções UMD vazias com formato documentado
- `js/hub.js` (novo) — renderHub/renderBiblioteca/renderCursos + navegação (browser-only)
- `js/supabase-backend.js` — + `POPApi.validarMatricula`
- `index.html` — script tags, estado, dispatch do `render()`, topbar, login→hub, leitor generalizado, cadastro 2 passos, título/OG, CSS do hub
- `MIGRACAO-LISTA-OFICIAL.sql` (novo) — tabela + RPC + trigger + seção Fase 2 comentada

---

### Task 1: Fase 0 — sorteio-30 em produção e branch atualizada

**Files:**
- Nenhum arquivo novo. Operações git + SQL no Supabase.

**Interfaces:**
- Produces: main contém a feature sorteio-30 (globais `sorteio`, `garantirSorteio()`, `trilhaEtapa(e)`, `secaoIds(col,e)`, `metaEtapa(col,e)` com assinatura `(col, e)` onde `col = {setor, sorteio}`); branch `feat/hub-colaborador` rebased nisso. Tasks seguintes DEPENDEM dessas assinaturas.

- [ ] **Step 1: Aplicar a coluna do sorteio no Supabase (idempotente, inofensiva pro código antigo)**

No SQL Editor do Supabase (projeto POP NEREU `ezkohniydtijcycqevqj`, via browser — Jefferson já tem sessão logada no Chrome), rodar:

```sql
alter table colaboradores add column if not exists sorteio jsonb;
select column_name from information_schema.columns
 where table_name='colaboradores' and column_name='sorteio';
```

Expected: 1 linha retornada (`sorteio`). Se o browser não estiver logado no Supabase, PARAR e pedir ao Jefferson.

- [ ] **Step 2: Merge da sorteio-30 na main**

```bash
cd "C:/Users/PICHAU/.openclaw/workspace/repos/pops-hnr-beta"
git checkout main
git pull origin main
git merge --no-ff origin/feat/sorteio-30-pops -m "merge: sorteio de 30 POPs por colaborador (feat/sorteio-30-pops)"
```

Expected: merge SEM conflitos (a branch foi criada de um ancestral da main atual; os commits pós-branch na main — sitemap e segurança — tocam trechos diferentes). Se houver conflito em `index.html`, resolver mantendo AMBAS as mudanças (segurança usa `esc()`; sorteio muda trilha) e conferir com `git diff`.

- [ ] **Step 3: Rodar o teste do sorteio**

Run: `node tests/sorteio.test.js`
Expected: `OK Task 1 — sorteio determinístico`

- [ ] **Step 4: Push da main (DEPLOY do sorteio em produção)**

```bash
git push origin main
```

- [ ] **Step 5: Verificar produção**

Aguardar o build do GitHub Pages (~2 min). No browser:
1. `https://pops.hospitalnereuramos.com.br/?demo=1` → entrar como colaborador demo (nome `Teste Sorteio`, matrícula `7777`, setor `UTI`) → a trilha mostra **Etapa 1 com 15 POPs** (sorteados) e Etapa 2 bloqueada. Console sem erros.
2. `https://pops.hospitalnereuramos.com.br/` (produção) → tela de login carrega, console sem erros.

- [ ] **Step 6: Atualizar a branch do hub**

```bash
git checkout feat/hub-colaborador
git merge main -m "merge: main (sorteio-30 + seguranca) na branch do hub"
```

Expected: sem conflitos (a branch só tem o spec).

---

### Task 2: PortalCore — lookup e busca genéricos (UMD + testes)

**Files:**
- Create: `js/portal-core.js`
- Test: `tests/portal-core.test.js`
- Modify: `index.html` (script tag + normTxt vira alias)

**Interfaces:**
- Produces:
  - `PortalCore.normTxt(s) -> string` (minúsculas, sem acentos)
  - `PortalCore.docById(collections, id) -> {kind, doc, curso?} | null` — `collections = [{kind, items}]`; para `kind:'curso'` procura nos `modulos` e devolve o módulo em `doc` + o curso em `curso`
  - `PortalCore.docIndex(doc) -> string` (índice de conteúdo, cache em `doc._idx`)
  - `PortalCore.searchDocs(items, q) -> doc[]` (rank título > código > conteúdo; `q` < 2 letras → `[]`)

- [ ] **Step 1: Escrever o teste que falha** — criar `tests/portal-core.test.js`:

```js
const assert = require('assert');
const PortalCore = require('../js/portal-core.js');

// normTxt: minúsculas e sem acentos
assert.strictEqual(PortalCore.normTxt('Órtese e PRÓTESE'), 'ortese e protese');

const pops = [{ id: 'pop-01', code: 'POP-ENF-01', title: 'Higiene das mãos', sections: [{ h: 'Objetivo', items: ['Reduzir infecção'] }] }];
const regimentos = [{ id: 'doc-reg-01', code: 'REG-01', title: 'Regimento interno da enfermagem', sections: [] }];
const cursos = [{ id: 'curso-nr32', code: 'CURSO-NR32', titulo: 'NR-32 Básico', modulos: [{ id: 'curso-nr32-m1', title: 'Módulo 1', sections: [], pool: [] }] }];
const cols = [
  { kind: 'pop', items: pops },
  { kind: 'regimento', items: regimentos },
  { kind: 'curso', items: cursos },
];

// docById acha em cada coleção
assert.strictEqual(PortalCore.docById(cols, 'pop-01').kind, 'pop');
assert.strictEqual(PortalCore.docById(cols, 'doc-reg-01').kind, 'regimento');
const m = PortalCore.docById(cols, 'curso-nr32-m1');
assert.strictEqual(m.kind, 'curso');
assert.strictEqual(m.doc.id, 'curso-nr32-m1');
assert.strictEqual(m.curso.id, 'curso-nr32');
assert.strictEqual(PortalCore.docById(cols, 'nao-existe'), null);

// searchDocs: <2 letras → []; rank título > código > conteúdo; acento-insensível
assert.deepStrictEqual(PortalCore.searchDocs(pops, 'h'), []);
assert.strictEqual(PortalCore.searchDocs(pops, 'higiene')[0].id, 'pop-01');
assert.strictEqual(PortalCore.searchDocs(pops, 'POP-ENF')[0].id, 'pop-01');
assert.strictEqual(PortalCore.searchDocs(pops, 'infecção').length, 1);
assert.strictEqual(PortalCore.searchDocs(regimentos, 'REGIMENTO').length, 1);
assert.strictEqual(PortalCore.searchDocs([], 'qualquer').length, 0);

console.log('OK portal-core — normTxt, docById e searchDocs');
```

- [ ] **Step 2: Rodar e confirmar que falha**

Run: `node tests/portal-core.test.js`
Expected: FAIL — `Cannot find module '../js/portal-core.js'`

- [ ] **Step 3: Implementar** — criar `js/portal-core.js`:

```js
/* Núcleo puro do Portal do Colaborador (UMD, testável em Node).
   Lookup e busca genéricos sobre as coleções (POPs, regimentos, protocolos, cursos). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PortalCore = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  // normalização de texto pt-BR (minúsculas, sem acentos)
  const normTxt = (s) => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  // Coleções = [{kind:'pop'|'regimento'|'protocolo'|'curso', items:[...]}]
  // Cursos têm .modulos[] — o lookup acha o MÓDULO (retorna o curso junto).
  function docById(collections, id) {
    for (const col of collections || []) {
      for (const item of col.items || []) {
        if (col.kind === 'curso') {
          for (const m of item.modulos || []) {
            if (m.id === id) return { kind: 'curso', doc: m, curso: item };
          }
        } else if (item.id === id) {
          return { kind: col.kind, doc: item };
        }
      }
    }
    return null;
  }

  // índice de conteúdo do documento (lazy, cacheado em doc._idx)
  function docIndex(d) {
    if (d._idx) return d._idx;
    const secs = (d.sections || []).map((s) =>
      (s.h || '') + ' ' + (s.sub || '') + ' ' + (s.note || '') + ' ' + ((s.items || []).join(' '))
    ).join(' ');
    d._idx = normTxt([d.code, d.title, d.executantes, d.origem, secs].filter(Boolean).join(' '));
    return d._idx;
  }

  // busca rankeada (título 0 > código 1 > conteúdo 2); q < 2 letras → []
  function searchDocs(items, q) {
    const nq = normTxt(q).trim();
    if (nq.length < 2) return [];
    return (items || [])
      .map((d) => {
        const nt = normTxt(d.title), nc = normTxt(d.code);
        let rank;
        if (nt.includes(nq)) rank = 0;
        else if (nc.includes(nq)) rank = 1;
        else if (docIndex(d).includes(nq)) rank = 2;
        else return null;
        return { d, rank };
      })
      .filter(Boolean)
      .sort((a, b) => a.rank - b.rank || (a.d.code || '').localeCompare(b.d.code || '', 'pt-BR', { numeric: true }))
      .map((x) => x.d);
  }

  return { normTxt, docById, docIndex, searchDocs };
}));
```

- [ ] **Step 4: Rodar e confirmar que passa**

Run: `node tests/portal-core.test.js`
Expected: `OK portal-core — normTxt, docById e searchDocs`

- [ ] **Step 5: Ligar no index.html** — 2 edits:

(a) Script tag — trocar a âncora:

```html
<script src="./js/core.js"></script>
```

por:

```html
<script src="./js/core.js"></script>
<script src="./js/portal-core.js"></script>
```

(b) `normTxt` vira alias (uma fonte só) — trocar a linha:

```js
const normTxt = s => (s||'').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
```

por:

```js
const normTxt = PortalCore.normTxt;
```

ATENÇÃO: a linha antiga contém combining characters invisíveis dentro do `[...]` — se o Edit por string falhar, localizar por `const normTxt` (é a única ocorrência).

- [ ] **Step 6: Verificar que a busca do gestor continua ok (demo rápido)**

```bash
cd "C:/Users/PICHAU/.openclaw/workspace/repos/pops-hnr-beta"
python -m http.server 8080
```

No browser: `http://localhost:8080/?demo=1` → "Acesso da gestão" → senha `gestor123` → botão "🔍 Buscar POPs" → digitar `higiene` → resultados aparecem, console sem erros.

- [ ] **Step 7: Commit**

```bash
git add js/portal-core.js tests/portal-core.test.js index.html
git commit -m "feat: PortalCore com docById e busca genérica (UMD + testes)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Coleções novas — data/regimentos.js, data/protocolos.js, data/cursos.js

**Files:**
- Create: `data/regimentos.js`, `data/protocolos.js`, `data/cursos.js`
- Modify: `index.html` (script tags)

**Interfaces:**
- Produces: globais `window.REGIMENTOS = []`, `window.PROTOCOLOS = []`, `window.CURSOS = []` (arrays UMD, Node-requiráveis). Formato dos objetos documentado no cabeçalho de cada arquivo — é o contrato da Fase 2 (conteúdo).

- [ ] **Step 1: Criar `data/regimentos.js`**

```js
/* Regimentos institucionais — Hospital Nereu Ramos.
   Formato de cada documento (igual ao POP, SEM pool de questões):
   { id:'doc-reg-XX', code:'REG-XX', title:'…',
     version:'1.0', emission:'dd/mm/aaaa',           // opcionais
     origem:'…', executantes:'…',                    // opcionais
     sections:[ { n:1, h:'Título', sub:'…', note:'…', items:['…'] } ] }
   Prefixo de id RESERVADO: 'doc-reg-'. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.REGIMENTOS = factory();
}(typeof self !== "undefined" ? self : this, function () {
  return [];
}));
```

- [ ] **Step 2: Criar `data/protocolos.js`** (mesmo shell; muda o global e o prefixo)

```js
/* Protocolos assistenciais e manuais — Hospital Nereu Ramos.
   Formato de cada documento (igual ao POP, SEM pool de questões):
   { id:'doc-prot-XX', code:'PROT-XX', title:'…',
     version:'1.0', emission:'dd/mm/aaaa',           // opcionais
     origem:'…', executantes:'…',                    // opcionais
     sections:[ { n:1, h:'Título', sub:'…', note:'…', items:['…'] } ] }
   Prefixo de id RESERVADO: 'doc-prot-'. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PROTOCOLOS = factory();
}(typeof self !== "undefined" ? self : this, function () {
  return [];
}));
```

- [ ] **Step 3: Criar `data/cursos.js`**

```js
/* Cursos — trilhas de capacitação (o motor de prova liga na Fase 2).
   Formato de cada curso:
   { id:'curso-<slug>', code:'CURSO-XX', titulo:'…', descricao:'…',
     modulos:[ { id:'curso-<slug>-m1', title:'…',
                 sections:[ …igual ao POP… ], pool:[ …igual ao POP… ] } ] }
   O resultado de um módulo será salvo pelos RPCs existentes
   (salvar_resultado com pop_id = id do módulo, pop_codigo = code do curso).
   Prefixo de id RESERVADO: 'curso-'. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.CURSOS = factory();
}(typeof self !== "undefined" ? self : this, function () {
  return [];
}));
```

- [ ] **Step 4: Script tags no index.html** — trocar a âncora:

```html
<script src="./data/pops.js"></script>
```

por:

```html
<script src="./data/pops.js"></script>
<script src="./data/regimentos.js"></script>
<script src="./data/protocolos.js"></script>
<script src="./data/cursos.js"></script>
```

- [ ] **Step 5: Verificar em Node**

Run: `node -e "const R=require('./data/regimentos.js'),P=require('./data/protocolos.js'),C=require('./data/cursos.js');console.log(Array.isArray(R)&&Array.isArray(P)&&Array.isArray(C)?'OK colecoes':'FAIL')"`
Expected: `OK colecoes`

- [ ] **Step 6: Commit**

```bash
git add data/regimentos.js data/protocolos.js data/cursos.js index.html
git commit -m "feat: coleções de regimentos, protocolos e cursos (formato documentado)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Tela HUB + telas de biblioteca/cursos + navegação

**Files:**
- Create: `js/hub.js`
- Modify: `index.html` (CSS, estado, login→hub, logout, renderTopRight, dispatch do render(), script tag)

**Interfaces:**
- Consumes: `PortalCore.searchDocs` (Task 2); `window.REGIMENTOS/PROTOCOLOS/CURSOS` (Task 3); globais pós-merge `sorteio`, `metaEtapa({setor,sorteio}, e)`, `aprovadosEtapa(e)`, `etapaDone(e)`, `temEtapa2()`.
- Produces (globais definidos em `js/hub.js`, usados pelo `render()` e Task 5):
  - `renderHub() -> html`, `renderBiblioteca() -> html`, `renderCursos() -> html`, `wireBibSearch()`
  - `goHub()`, `goPops()`, `goBiblioteca(kind)`, `goCursos()`, `abrirDocBiblioteca(id)`
  - `portalCols() -> [{kind, items}]`, `docById(id) -> {kind, doc, curso?} | null`
  - Novos estados no index.html: `bibKind`, `bibQuery`, `consultaOrigem`

- [ ] **Step 1: CSS do hub no index.html** — inserir ANTES da âncora `  /* ---- layout ---- */`:

```css
  /* ---- hub (Portal do Colaborador) ---- */
  .hub-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:18px}
  @media(max-width:720px){.hub-grid{grid-template-columns:1fr}}
  .hubcard{position:relative;display:flex;flex-direction:column;gap:10px;text-align:left;
    background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);
    padding:22px;box-shadow:var(--shadow);cursor:pointer;font-family:inherit;color:var(--ink);
    transition:transform .15s,border-color .15s;animation:fadeUp .3s ease both}
  .hubcard:hover{transform:translateY(-2px);border-color:var(--primary)}
  .hubcard .hc-ic{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;flex:none}
  .hubcard .hc-ic svg{width:22px;height:22px}
  .hc-blue{background:var(--primary-soft);color:var(--primary)}
  .hc-green{background:var(--success-soft);color:var(--success)}
  .hc-gold{background:var(--gold-soft);color:var(--gold)}
  .hc-red{background:var(--accent-soft);color:var(--accent)}
  .hubcard h3{font-family:'Fraunces',serif;font-weight:600;font-size:20px}
  .hubcard p{margin:0;color:var(--muted);font-size:13.5px;flex:1;line-height:1.45}
  .hubcard .hc-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;
    border-top:1px solid var(--line);padding-top:12px;font-size:12.5px;color:var(--faint)}
  .hubcard .hc-cta{font-weight:700;color:var(--primary)}
  .hub-bar{height:6px;background:var(--line);border-radius:99px;overflow:hidden;margin-top:2px}
  .hub-bar i{display:block;height:100%;background:var(--primary);border-radius:99px}
  .badge-soon{font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
    background:var(--warn-soft);color:var(--warn);padding:4px 10px;border-radius:999px;flex:none}
  .bib-empty{background:var(--surface);border:1px dashed var(--line-strong);border-radius:var(--radius);
    padding:46px 20px;text-align:center;color:var(--muted)}
  .bib-empty .big{font-size:34px;margin-bottom:8px}
  .bib-empty b{display:block;color:var(--ink);font-size:16px;margin-bottom:4px}
```

- [ ] **Step 2: Estado novo no index.html** — trocar a âncora:

```js
let sorteio = null;   // {e1:[ids], e2:[ids]} do colaborador logado (30 POPs sorteados)
```

por:

```js
let sorteio = null;   // {e1:[ids], e2:[ids]} do colaborador logado (30 POPs sorteados)
let bibKind = null;            // qual biblioteca está aberta ('regimentos'|'protocolos')
let bibQuery = '';             // termo da busca da biblioteca
let consultaOrigem = 'busca';  // de onde a consulta abriu ('busca'|'biblioteca')
```

- [ ] **Step 3: Colaborador cai no hub** — 3 edits no index.html:

(a) Trocar `let screen = 'list';` por `let screen = 'hub';`

(b) Trocar (replace_all — aparece 3×: entrarColaborador, loginColaborador, criarConta):

```js
  await garantirSorteio();
  screen='list'; render(); window.scrollTo(0,0);
```

por:

```js
  await garantirSorteio();
  screen='hub'; render(); window.scrollTo(0,0);
```

(c) No `logout()`, trocar `authView='home'; screen='list';` por `authView='home'; screen='hub';`

- [ ] **Step 4: Botão Início na topbar** — trocar a função `renderTopRight()` inteira por:

```js
function renderTopRight(){
  if(!session) return '';
  let nm,sub;
  if(session.role==='gestor'){ nm='Gestor'; sub='Educação Continuada'; }
  else { nm=session.nome; sub=setorLabel(session.setor)+' · mat. '+esc(session.matricula); }
  const home = (session.role==='colaborador' && screen!=='hub')
    ? `<button class="logout" onclick="goHub()">⌂ Início</button>` : '';
  return `<div class="who2"><div class="avatar">${initials(nm)}</div>
      <div class="nm"><b>${esc(nm)}</b><small>${sub}</small></div></div>
    ${home}<button class="logout" onclick="logout()">Sair</button>`;
}
```

- [ ] **Step 5: Dispatch no render()** — trocar o bloco do colaborador:

```js
  else{
    if(screen==='list')html=renderColabList();
    else if(screen==='reader')html=renderReader();
    else if(screen==='quiz')html=renderQuiz();
    else if(screen==='result')html=renderResult();
    else if(screen==='cert')html=renderCert();
  }
```

por:

```js
  else{
    if(screen==='hub')html=renderHub();
    else if(screen==='biblioteca')html=renderBiblioteca();
    else if(screen==='cursos')html=renderCursos();
    else if(screen==='list')html=renderColabList();
    else if(screen==='reader')html=renderReader();
    else if(screen==='quiz')html=renderQuiz();
    else if(screen==='result')html=renderResult();
    else if(screen==='cert')html=renderCert();
  }
```

E logo abaixo, trocar:

```js
  if(screen==='busca'||(session.role==='colaborador'&&screen==='list'))wireSearch();
```

por:

```js
  if(screen==='busca'||(session.role==='colaborador'&&screen==='list'))wireSearch();
  if(session.role==='colaborador'&&screen==='biblioteca')wireBibSearch();
```

- [ ] **Step 6: Criar `js/hub.js`** (arquivo completo):

```js
/* Telas do Portal do Colaborador: hub, bibliotecas (regimentos/protocolos) e cursos.
   Usa os globais do index.html (session, screen, render, esc, …) — resolvidos em runtime. */

const HUB_ICONS = {
  pops: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>',
  regimentos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  protocolos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>',
  cursos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>'
};

function portalCols(){
  return [
    { kind:'pop',       items: db.pops },
    { kind:'regimento', items: window.REGIMENTOS || [] },
    { kind:'protocolo', items: window.PROTOCOLOS || [] },
    { kind:'curso',     items: window.CURSOS || [] },
  ];
}
function docById(id){ return PortalCore.docById(portalCols(), id); }

/* ---------- navegação ---------- */
function goHub(){ clearQuizTimer(); consulta=false; activePop=null; screen='hub'; render(); window.scrollTo(0,0); }
function goPops(){ screen='list'; render(); window.scrollTo(0,0); }
function goBiblioteca(kind){ bibKind=kind; bibQuery=''; screen='biblioteca'; render(); window.scrollTo(0,0); }
function goCursos(){ screen='cursos'; render(); window.scrollTo(0,0); }

/* ---------- HUB ---------- */
function hubProgressoPops(){
  const col={setor:session.setor, sorteio};
  if(!etapaDone(1)){
    const now=aprovadosEtapa(1), meta=metaEtapa(col,1);
    if(!meta) return {label:'Sua trilha de procedimentos', pct:0};
    return {label:`Etapa 1 · ${Math.min(now,meta)}/${meta}`, pct:Math.round(Math.min(now,meta)/meta*100)};
  }
  if(temEtapa2() && !etapaDone(2)){
    const now=aprovadosEtapa(2), meta=metaEtapa(col,2);
    return {label:`Etapa 2 · ${Math.min(now,meta)}/${meta}`, pct:meta?Math.round(Math.min(now,meta)/meta*100):0};
  }
  return {label:'Trilha concluída 🏆', pct:100};
}
function hubCardHTML(o, idx){
  return `<button class="hubcard" style="animation-delay:${idx*60}ms" onclick="${o.onclick}">
    <span class="hc-ic ${o.ic}">${o.icon}</span>
    <h3>${o.title}</h3><p>${o.desc}</p>
    ${o.bar!=null?`<div class="hub-bar"><i style="width:${o.bar}%"></i></div>`:''}
    <span class="hc-foot"><span>${o.foot}</span><span class="hc-cta">Entrar →</span></span>
  </button>`;
}
function renderHub(){
  const primeiro=esc((session.nome||'').trim().split(/\s+/)[0]||'colaborador');
  const pr=hubProgressoPops();
  const nReg=(window.REGIMENTOS||[]).length, nProt=(window.PROTOCOLOS||[]).length, nCur=(window.CURSOS||[]).length;
  const cards=[
    { onclick:'goPops()', ic:'hc-blue', icon:HUB_ICONS.pops, title:'POPs',
      desc:'Procedimentos Operacionais Padrão do seu setor — leia, faça as avaliações e emita seus certificados.',
      bar:pr.pct, foot:pr.label },
    { onclick:"goBiblioteca('regimentos')", ic:'hc-gold', icon:HUB_ICONS.regimentos, title:'Regimentos',
      desc:'Regimentos e normas institucionais do hospital, para leitura e consulta.',
      bar:null, foot: nReg? `${nReg} documento${nReg>1?'s':''}` : 'Em preparação' },
    { onclick:"goBiblioteca('protocolos')", ic:'hc-green', icon:HUB_ICONS.protocolos, title:'Protocolos',
      desc:'Protocolos assistenciais e manuais técnicos, para leitura e consulta.',
      bar:null, foot: nProt? `${nProt} documento${nProt>1?'s':''}` : 'Em preparação' },
    { onclick:'goCursos()', ic:'hc-red', icon:HUB_ICONS.cursos, title:'Cursos',
      desc:'Trilhas de capacitação com avaliação e certificado.',
      bar:null, foot: nCur? `${nCur} curso${nCur>1?'s':''}` : 'Em breve' },
  ];
  return `<div class="pagehead fade-up"><h2>Olá, ${primeiro} 👋</h2>
      <p>Bem-vindo à Área do Colaborador do Hospital Nereu Ramos. O que você quer acessar?</p></div>
    <div class="hub-grid">${cards.map(hubCardHTML).join('')}</div>`;
}

/* ---------- bibliotecas (regimentos / protocolos) ---------- */
const BIB_META = {
  regimentos:{ titulo:'Regimentos', sub:'Regimentos e normas institucionais — leitura livre.',
               colecao:()=>window.REGIMENTOS||[], vazio:'Os regimentos estão sendo preparados pela Educação Continuada e aparecerão aqui.' },
  protocolos:{ titulo:'Protocolos', sub:'Protocolos assistenciais e manuais — leitura livre.',
               colecao:()=>window.PROTOCOLOS||[], vazio:'Os protocolos estão sendo preparados pela Educação Continuada e aparecerão aqui.' },
};
function bibDocCardHTML(d, idx){
  return `<div class="popcard" style="animation-delay:${idx*45}ms">
    <span class="code mono">${esc(d.code||'')}</span>
    <div class="meta"><h3>${esc(d.title||'')}</h3>
      <div class="sub">${esc(d.origem||'Hospital Nereu Ramos')}</div></div>
    <button class="btn ghost" onclick="abrirDocBiblioteca('${d.id}')">Ler</button>
  </div>`;
}
function bibListaHTML(){
  const meta=BIB_META[bibKind]; if(!meta) return '';
  const docs=meta.colecao();
  if(!docs.length)
    return `<div class="bib-empty fade-up"><div class="big">📚</div>
      <b>Em preparação</b><p>${meta.vazio}</p></div>`;
  const list = bibQuery.trim().length>=2 ? PortalCore.searchDocs(docs, bibQuery) : docs.slice();
  if(!list.length)
    return `<div class="empty"><div class="ic">🗂</div><b>Nada encontrado.</b><p>Tente outro termo ou verifique a grafia.</p></div>`;
  return `<div class="grid">${list.map(bibDocCardHTML).join('')}</div>`;
}
function renderBiblioteca(){
  const meta=BIB_META[bibKind]; if(!meta) return renderHub();
  const docs=meta.colecao();
  const busca = docs.length ? `<div class="popsearch"><div class="sb">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input id="bib-search" type="text" autocomplete="off" placeholder="Buscar por nome, código ou assunto…" value="${bibQuery.replace(/"/g,'&quot;')}">
    </div></div>` : '';
  return `
    <div class="readtop no-print"><div class="row">
      <button class="back" onclick="goHub()">← Início</button>
      <span class="label">${meta.titulo}</span>
    </div></div>
    <div class="pagehead fade-up"><h2>${meta.titulo}</h2><p>${meta.sub}</p></div>
    ${busca}
    <div id="bib-list">${bibListaHTML()}</div>`;
}
function wireBibSearch(){
  const inp=document.getElementById('bib-search'); if(!inp) return;
  inp.addEventListener('input', ()=>{
    bibQuery=inp.value;
    const box=document.getElementById('bib-list');
    if(box) box.innerHTML=bibListaHTML();
  });
}
function abrirDocBiblioteca(id){
  clearQuizTimer(); activePop=id; consulta=true; consultaOrigem='biblioteca';
  screen='reader'; render(); window.scrollTo(0,0);
}

/* ---------- cursos ---------- */
function renderCursos(){
  const cursos=window.CURSOS||[];
  const corpo = cursos.length
    ? `<div class="grid">${cursos.map((c,i)=>`
        <div class="popcard" style="animation-delay:${i*45}ms">
          <span class="code mono">${esc(c.code||'')}</span>
          <div class="meta"><h3>${esc(c.titulo||'')}</h3>
            <div class="sub">${esc(c.descricao||'')} · ${(c.modulos||[]).length} módulo${(c.modulos||[]).length>1?'s':''}</div></div>
          <span class="badge-soon">Disponível em breve</span>
        </div>`).join('')}</div>`
    : `<div class="bib-empty fade-up"><div class="big">🎓</div>
        <b>Em breve</b><p>As trilhas de capacitação com avaliação e certificado estão em preparação pela Educação Continuada.</p></div>`;
  return `
    <div class="readtop no-print"><div class="row">
      <button class="back" onclick="goHub()">← Início</button>
      <span class="label">Cursos</span>
    </div></div>
    <div class="pagehead fade-up"><h2>Cursos</h2><p>Trilhas de capacitação com avaliação e certificado.</p></div>
    ${corpo}`;
}
```

- [ ] **Step 7: Script tag do hub.js** — trocar a âncora:

```html
<script src="./js/seed-demo.js"></script>
```

por:

```html
<script src="./js/seed-demo.js"></script>
<script src="./js/hub.js"></script>
```

- [ ] **Step 8: Verificar no browser (demo)**

Com o servidor do Task 2 rodando (`python -m http.server 8080`):
1. `http://localhost:8080/?demo=1` → login colaborador demo (nome `Teste Hub`, matrícula `8888`, setor `Assistencial`).
2. Cai no **HUB**: saudação "Olá, Teste 👋", 4 cards; card POPs com barra e rótulo "Etapa 1 · 0/15"; Regimentos/Protocolos com "Em preparação"; Cursos "Em breve".
3. Card POPs → lista "Meus procedimentos" (intacta) → botão **⌂ Início** na topbar volta ao hub.
4. Card Regimentos → tela com empty-state "Em preparação" → ← Início volta.
5. Card Cursos → empty-state "Em breve" → ← Início volta.
6. Sair → tela de login. Logar de novo → hub. Console SEM erros em todo o fluxo.
7. Gestor (`gestor123`) → cai no PAINEL direto (sem hub, sem botão Início).

- [ ] **Step 9: Commit**

```bash
git add js/hub.js index.html
git commit -m "feat: hub do Portal do Colaborador (4 áreas) + telas de biblioteca e cursos

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Leitor generalizado (bibliotecas abrem no modo consulta)

**Files:**
- Modify: `index.html` (renderReader, backToList, consultarPop)

**Interfaces:**
- Consumes: `docById(id)` (Task 4), estado `consultaOrigem` (Task 4).
- Produces: leitor renderiza qualquer documento das coleções; `backToList()` devolve à biblioteca quando a consulta veio de lá.

- [ ] **Step 1: Origem da consulta na busca de POPs** — trocar (função `consultarPop`):

```js
  clearQuizTimer(); activePop=id; consulta=true; screen='reader'; render(); window.scrollTo(0,0);
```

por:

```js
  clearQuizTimer(); activePop=id; consulta=true; consultaOrigem='busca'; screen='reader'; render(); window.scrollTo(0,0);
```

- [ ] **Step 2: backToList com origem** — trocar a função inteira:

```js
function backToList(){ clearQuizTimer(); consulta=false; screen=(session&&session.role==='gestor')?'busca':'list'; activePop=null; render(); window.scrollTo(0,0); }
```

por:

```js
function backToList(){
  clearQuizTimer();
  if(consulta && consultaOrigem==='biblioteca'){ consulta=false; consultaOrigem='busca'; screen='biblioteca'; activePop=null; render(); window.scrollTo(0,0); return; }
  consulta=false; screen=(session&&session.role==='gestor')?'busca':'list'; activePop=null; render(); window.scrollTo(0,0);
}
```

- [ ] **Step 3: renderReader generalizado** — trocar o INÍCIO da função (da linha `function renderReader(){` até o fim do template do `stamp-row`, inclusive):

```js
function renderReader(){
  const p=pop(activePop);
  const readtop = consulta
    ? `<div class="readtop no-print"><div class="row">
        <button class="back" onclick="backToList()">← Voltar à busca</button>
        <span class="label">📖 Modo consulta</span>
      </div></div>`
    : `<div class="readtop no-print"><div class="row">
        <button class="back" onclick="backToList()">← Voltar</button>
        <div class="readbar"><i id="readfill"></i></div>
        <span class="label" id="readpct">0% lido</span>
      </div></div>`;
  return `
    ${readtop}
    <article class="article" id="article">
      <div class="stamp">
        <div class="stamp-grid">
          <div class="stamp-logo"><img src="${LOGO()}" alt="HNR" onerror="logoFail(this)"><small>HOSPITAL<br>NEREU RAMOS</small></div>
          <div class="stamp-title"><small>POP · Procedimento Operacional Padrão</small><h2>${p.title}</h2></div>
          <div class="stamp-meta"><span class="stamp-code mono">${p.code}</span>
            <div><b>Emissão:</b> ${p.emission}</div><div><b>Versão:</b> ${p.version}</div></div>
          <div class="stamp-row"><span><b>Origem:</b> ${p.origem}</span><span><b>Executante(s):</b> ${p.executantes}</span></div>
        </div>
      </div>
```

por:

```js
function renderReader(){
  const hit=docById(activePop);
  const p=hit?hit.doc:pop(activePop);
  const kind=hit?hit.kind:'pop';
  const TIPO={pop:'POP · Procedimento Operacional Padrão', regimento:'Regimento institucional',
              protocolo:'Protocolo assistencial', curso:'Curso · módulo'};
  const voltarLabel = (consulta && consultaOrigem==='biblioteca') ? '← Voltar' : '← Voltar à busca';
  const readtop = consulta
    ? `<div class="readtop no-print"><div class="row">
        <button class="back" onclick="backToList()">${voltarLabel}</button>
        <span class="label">📖 Modo consulta</span>
      </div></div>`
    : `<div class="readtop no-print"><div class="row">
        <button class="back" onclick="backToList()">← Voltar</button>
        <div class="readbar"><i id="readfill"></i></div>
        <span class="label" id="readpct">0% lido</span>
      </div></div>`;
  return `
    ${readtop}
    <article class="article" id="article">
      <div class="stamp">
        <div class="stamp-grid">
          <div class="stamp-logo"><img src="${LOGO()}" alt="HNR" onerror="logoFail(this)"><small>HOSPITAL<br>NEREU RAMOS</small></div>
          <div class="stamp-title"><small>${TIPO[kind]||TIPO.pop}</small><h2>${p.title}</h2></div>
          <div class="stamp-meta"><span class="stamp-code mono">${p.code||''}</span>
            ${p.emission?`<div><b>Emissão:</b> ${p.emission}</div>`:''}${p.version?`<div><b>Versão:</b> ${p.version}</div>`:''}</div>
          <div class="stamp-row"><span><b>Origem:</b> ${p.origem||'Hospital Nereu Ramos'}</span>${p.executantes?`<span><b>Executante(s):</b> ${p.executantes}</span>`:''}</div>
        </div>
      </div>
```

- [ ] **Step 4: Gate de consulta para documento de biblioteca** — na MESMA função, trocar:

```js
    ${consulta ? `
    <div class="quizgate no-print" id="gate">
      <div class="lock">📖 Consulta — leitura livre deste POP</div>
```

por:

```js
    ${consulta && kind!=='pop' ? `
    <div class="quizgate no-print" id="gate">
      <div class="lock">📖 Leitura livre — ${TIPO[kind]||''}</div>
      <button class="btn block" style="margin-top:10px" onclick="backToList()">← Voltar</button>
    </div>` : consulta ? `
    <div class="quizgate no-print" id="gate">
      <div class="lock">📖 Consulta — leitura livre deste POP</div>
```

(o restante do bloco `consulta` original — "Este POP é do seu setor" etc. — permanece igual, agora dentro do ramo `consulta ?`).

- [ ] **Step 5: Verificar com documento temporário (NÃO commitar o doc)**

Editar `data/regimentos.js` trocando `return [];` por:

```js
  return [{
    id:'doc-reg-99', code:'REG-99', title:'Documento de teste do leitor',
    origem:'Teste local', sections:[{ n:1, h:'Seção de teste', items:['Linha um do teste.','Linha dois do teste.'] }]
  }];
```

No browser (`http://localhost:8080/?demo=1`, colaborador demo): hub → Regimentos → card "REG-99 · Documento de teste do leitor" aparece; busca por `teste` filtra; **Ler** → leitor abre com selo "Regimento institucional", SEM barra de leitura obrigatória, SEM quiz, com bloco "📖 Leitura livre"; **← Voltar** retorna à biblioteca (não à busca de POPs). Buscar POP no fluxo normal continua ok (gestor `gestor123` → Buscar POPs → ler um POP → voltar à busca).

Depois REVERTER o arquivo:

```bash
git checkout -- data/regimentos.js
```

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: leitor genérico — bibliotecas abrem em modo consulta com retorno correto

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Painel da gestora ignora resultados de cursos

**Files:**
- Modify: `index.html` (carregarResultadosGestor)

**Interfaces:**
- Consumes: prefixo reservado `curso-*` (Task 3).
- Produces: `resultadosGestor` nunca contém itens `curso-*` (painel e relatórios de POPs não poluem na Fase 2).

- [ ] **Step 1: Filtro no carregamento** — trocar:

```js
async function carregarResultadosGestor(){
  try{ const r=await POPApi.getResultados(); resultadosGestor=r.resultados||[]; colaboradoresGestor=r.colaboradores||[]; }
  catch{ resultadosGestor=[]; colaboradoresGestor=[]; }
}
```

por:

```js
async function carregarResultadosGestor(){
  try{ const r=await POPApi.getResultados();
    // resultados de módulos de curso (id 'curso-*') ficam fora dos relatórios de POPs
    resultadosGestor=(r.resultados||[]).filter(x=>!String(x.pop_id||'').startsWith('curso-'));
    colaboradoresGestor=r.colaboradores||[]; }
  catch{ resultadosGestor=[]; colaboradoresGestor=[]; }
}
```

- [ ] **Step 2: Verificar (demo)**

`http://localhost:8080/?demo=1` → gestor `gestor123` → painel carrega com a tabela de colaboradores normal, console sem erros.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: relatórios da gestora filtram resultados de cursos (prefixo curso-)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Cadastro único — lista oficial no Supabase + fluxo em 2 passos

**Files:**
- Create: `MIGRACAO-LISTA-OFICIAL.sql`
- Modify: `js/supabase-backend.js` (novo método), `index.html` (estado + validarCadastro + renderAuth colab-signup + criarConta + goAuth)

**Interfaces:**
- Consumes: RPC Supabase `validar_matricula(p_matricula, p_email) -> jsonb`.
- Produces:
  - `POPApi.validarMatricula(matricula, email) -> {aberto?:true} | {ok:true, nome, setor} | {ok:false} | {erro}`
  - Estado global `signupCheck = null | {aberto:true, matricula, email} | {ok:true, matricula, email, nome, setor}`
  - `validarCadastro()` (passo 1 do formulário)

- [ ] **Step 1: Criar `MIGRACAO-LISTA-OFICIAL.sql`**

```sql
-- ============================================================
-- Portal do Colaborador HNR — LISTA OFICIAL (cadastro único)
-- Rodar o bloco 1 no SQL Editor JÁ (seguro com a lista vazia: nada muda
-- no cadastro até inserir linhas). O bloco 2 (comentado) roda só quando
-- o Jefferson subir a lista real.
-- ============================================================

-- ---------- BLOCO 1 · estrutura (rodar agora) ----------
create table if not exists lista_oficial (
  matricula text primary key,
  nome      text not null,
  email     text not null,
  setor     text            -- opcional; quando preenchido, o cadastro força este setor
);
alter table lista_oficial enable row level security;
-- deny-all: nenhuma policy de select/insert/update/delete para anon/authenticated.
revoke all on lista_oficial from anon, authenticated;

-- lista está ativa? (vazia = cadastro aberto como hoje)
create or replace function lista_ativa() returns boolean
language sql security definer stable as $$
  select exists(select 1 from lista_oficial); $$;
revoke all on function lista_ativa() from public;

-- validação de UX no formulário (roda ANTES de existir conta → grant a anon).
-- Não revela qual campo errou; só responde no match exato do PAR matrícula+e-mail.
create or replace function validar_matricula(p_matricula text, p_email text)
returns jsonb language plpgsql security definer stable as $$
declare reg lista_oficial%rowtype;
begin
  if not lista_ativa() then return jsonb_build_object('aberto', true); end if;
  select * into reg from lista_oficial
   where matricula = trim(p_matricula)
     and lower(email) = lower(trim(p_email));
  if not found then return jsonb_build_object('ok', false); end if;
  return jsonb_build_object('ok', true, 'nome', reg.nome, 'setor', coalesce(reg.setor,''));
end $$;
revoke all on function validar_matricula(text,text) from public;
grant execute on function validar_matricula(text,text) to anon, authenticated;

-- ENFORCEMENT real na camada de dados: sem isto a allowlist seria só cosmética
-- (o cliente tem grant de insert/update em colaboradores e poderia pular o RPC).
create or replace function colaboradores_valida_lista()
returns trigger language plpgsql security definer as $$
declare reg lista_oficial%rowtype;
begin
  if new.is_gestor then return new; end if;          -- contas de gestão são criadas por migração
  if not lista_ativa() then return new; end if;      -- lista vazia = comportamento atual
  select * into reg from lista_oficial
   where matricula = trim(coalesce(new.matricula,''))
     and lower(email) = lower(trim(coalesce(new.email,'')));
  if not found then
    raise exception 'matrícula e e-mail não constam na lista oficial de colaboradores';
  end if;
  new.nome := reg.nome;                               -- nome oficial, sem erro de digitação
  if reg.setor is not null and reg.setor <> '' then new.setor := reg.setor; end if;
  return new;
end $$;
revoke all on function colaboradores_valida_lista() from public;
drop trigger if exists colaboradores_lista_check on colaboradores;
create trigger colaboradores_lista_check
  before insert or update of matricula, email, nome, setor on colaboradores
  for each row execute function colaboradores_valida_lista();

-- ---------- BLOCO 2 · carga da lista (rodar QUANDO a lista chegar) ----------
-- 1) limpar contas de teste (JEFFERSON CONFIRMA os e-mails antes):
-- delete from auth.users where email in ('<email-teste-1>', '<email-teste-2>');
-- 2) matrícula única (fecha o bug da matrícula 2525 duplicada — limpar antes):
-- create unique index if not exists colaboradores_matricula_uq
--   on colaboradores (matricula) where matricula is not null and matricula <> '' and not is_gestor;
-- 3) inserir a lista oficial (modelo):
-- insert into lista_oficial (matricula, nome, email, setor) values
--   ('1234', 'Nome Completo', 'email@exemplo.com', 'uti'),
--   ('5678', 'Outra Pessoa', 'outra@exemplo.com', null);
```

- [ ] **Step 2: Aplicar o BLOCO 1 no Supabase e verificar**

No SQL Editor (projeto `ezkohniydtijcycqevqj`), rodar o BLOCO 1 inteiro. Expected: "Success". Verificações no próprio editor:

```sql
select validar_matricula('qualquer','x@y.z');
```

Expected: `{"aberto": true}` (lista vazia).

Verificar RLS por fora (terminal — chave publishable de `js/config.js`):

```bash
curl -s "https://ezkohniydtijcycqevqj.supabase.co/rest/v1/lista_oficial?select=*" -H "apikey: sb_publishable_ur6YVHSauhBePuCOhKi1iA_2SxQhZLo"
```

Expected: NENHUMA linha de dados — `[]` ou erro de permissão (`permission denied`). Qualquer coisa diferente disso = PARAR e revisar RLS.

- [ ] **Step 3: `POPApi.validarMatricula` no supabase-backend.js** — inserir após o bloco `POPApi.currentProfile = fetchPerfil;   // usado no auto-resume e no check de gestor`:

```js
  // valida matrícula+e-mail contra a lista oficial (passo 1 do cadastro)
  POPApi.validarMatricula = async function (matricula, email) {
    const { data, error } = await sb.rpc('validar_matricula', { p_matricula: matricula, p_email: email });
    if (error) return { erro: error.message };
    return data || { ok: false };
  };
```

- [ ] **Step 4: Estado + passo 1 no index.html** — inserir logo APÓS a função `fval` (âncora `function fval(sel){const e=document.querySelector(sel);return e?e.value.trim():'';}`):

```js
let signupCheck=null; // cadastro 2 passos: null=passo 1 | {aberto:true,...} | {ok:true,nome,setor,...}
async function validarCadastro(){
  const matricula=fval('#cs-matricula'), email=fval('#cs-email');
  if(!matricula||!email){ authErr('Informe matrícula e e-mail.'); return; }
  let r=null;
  try{ r=await POPApi.validarMatricula(matricula, email); }catch{}
  if(!r || r.erro){ authErr('Não foi possível validar agora — tente de novo em instantes.'); return; }
  if(r.aberto){ signupCheck={aberto:true, matricula, email}; }
  else if(r.ok){ signupCheck={ok:true, matricula, email, nome:r.nome, setor:r.setor||''}; }
  else { authErr('Matrícula e e-mail não conferem com a lista oficial — procure a Educação Continuada.'); return; }
  render();
}
```

E trocar a função `goAuth` (âncora `function goAuth(v){ authView=v; render(); }`) por:

```js
function goAuth(v){ authView=v; if(v!=='colab-signup') signupCheck=null; render(); }
```

- [ ] **Step 5: Tela "Criar conta" em 2 passos** — trocar o bloco inteiro do `colab-signup` no `renderAuth()`:

```js
    if(authView==='colab-signup'){
      return shell(`
        <div class="auth-head"><h2>Criar conta</h2><p>Colaborador · HNR</p></div>
        <div class="auth-err" id="auth-err"></div>
        <div class="field"><label>Nome completo</label><input id="cs-nome" type="text" placeholder="Seu nome completo" autocomplete="name"></div>
        <div class="field"><label>Setor</label><select id="cs-setor">${SETOR_OPTS}</select></div>
        <div class="field"><label>Matrícula</label><input id="cs-matricula" type="text" inputmode="numeric" placeholder="Sua matrícula"><small class="hint-cert">Aparece no seu certificado.</small></div>
        <div class="field"><label>E-mail</label><input id="cs-email" type="email" placeholder="voce@exemplo.com" autocomplete="email"></div>
        <div class="field"><label>Senha</label><input id="cs-pass" type="password" placeholder="mínimo 6 caracteres" autocomplete="new-password" onkeydown="if(event.key==='Enter')criarConta()"></div>
        <button class="btn block" onclick="criarConta()">Criar conta</button>
        <button class="auth-back" onclick="goAuth('colab')">← Já tenho conta</button>`);
    }
```

por:

```js
    if(authView==='colab-signup'){
      const q = s => String(s||'').replace(/"/g,'&quot;');
      if(!signupCheck){
        // PASSO 1 — identificar na lista oficial
        return shell(`
          <div class="auth-head"><h2>Criar conta</h2><p>Passo 1 de 2 · Identificação</p></div>
          <div class="auth-err" id="auth-err"></div>
          <div class="field"><label>Matrícula</label><input id="cs-matricula" type="text" inputmode="numeric" placeholder="Sua matrícula"></div>
          <div class="field"><label>E-mail</label><input id="cs-email" type="email" placeholder="voce@exemplo.com" autocomplete="email" onkeydown="if(event.key==='Enter')validarCadastro()"></div>
          <button class="btn block" onclick="validarCadastro()">Continuar →</button>
          <button class="auth-back" onclick="goAuth('colab')">← Já tenho conta</button>`);
      }
      if(signupCheck.ok){
        // PASSO 2 — nome veio da lista oficial (somente leitura)
        const setorField = signupCheck.setor
          ? `<div class="field"><label>Setor</label><input type="text" value="${q(SETOR_LABELS[signupCheck.setor]||signupCheck.setor)}" disabled></div>`
          : `<div class="field"><label>Setor</label><select id="cs-setor">${SETOR_OPTS}</select></div>`;
        return shell(`
          <div class="auth-head"><h2>Criar conta</h2><p>Passo 2 de 2 · Confirmação</p></div>
          <div class="auth-err" id="auth-err"></div>
          <div class="field"><label>Nome completo (lista oficial)</label><input type="text" value="${q(signupCheck.nome)}" disabled></div>
          <div class="field"><label>Matrícula</label><input type="text" value="${q(signupCheck.matricula)}" disabled></div>
          <div class="field"><label>E-mail</label><input type="text" value="${q(signupCheck.email)}" disabled></div>
          ${setorField}
          <div class="field"><label>Senha</label><input id="cs-pass" type="password" placeholder="mínimo 6 caracteres" autocomplete="new-password" onkeydown="if(event.key==='Enter')criarConta()"></div>
          <button class="btn block" onclick="criarConta()">Criar conta</button>
          <button class="auth-back" onclick="signupCheck=null;render()">← Corrigir dados</button>`);
      }
      // PASSO 2 — lista vazia (cadastro aberto, formulário completo como hoje)
      return shell(`
        <div class="auth-head"><h2>Criar conta</h2><p>Passo 2 de 2 · Seus dados</p></div>
        <div class="auth-err" id="auth-err"></div>
        <div class="field"><label>Nome completo</label><input id="cs-nome" type="text" placeholder="Seu nome completo" autocomplete="name"></div>
        <div class="field"><label>Setor</label><select id="cs-setor">${SETOR_OPTS}</select></div>
        <div class="field"><label>Matrícula</label><input id="cs-matricula" type="text" inputmode="numeric" value="${q(signupCheck.matricula)}"><small class="hint-cert">Aparece no seu certificado.</small></div>
        <div class="field"><label>E-mail</label><input id="cs-email" type="email" value="${q(signupCheck.email)}" autocomplete="email"></div>
        <div class="field"><label>Senha</label><input id="cs-pass" type="password" placeholder="mínimo 6 caracteres" autocomplete="new-password" onkeydown="if(event.key==='Enter')criarConta()"></div>
        <button class="btn block" onclick="criarConta()">Criar conta</button>
        <button class="auth-back" onclick="signupCheck=null;render()">← Voltar</button>`);
    }
```

- [ ] **Step 6: criarConta usa os dados validados** — trocar o início da função:

```js
async function criarConta(){
  const nome=fval('#cs-nome'), setor=fval('#cs-setor'), matricula=fval('#cs-matricula'),
        email=fval('#cs-email'), senha=fval('#cs-pass');
  if(!nome||!setor||!email||!senha){ authErr('Preencha nome, setor, e-mail e senha.'); return; }
```

por:

```js
async function criarConta(){
  const ok = signupCheck && signupCheck.ok;
  // ok=true → dados oficiais da lista (read-only); modo aberto → formulário (editável)
  const nome = ok ? signupCheck.nome : fval('#cs-nome');
  const setor = (ok && signupCheck.setor) ? signupCheck.setor : fval('#cs-setor');
  const matricula = ok ? signupCheck.matricula : fval('#cs-matricula');
  const email = ok ? signupCheck.email : fval('#cs-email');
  const senha = fval('#cs-pass');
  if(!nome||!setor||!email||!senha){ authErr('Preencha nome, setor, e-mail e senha.'); return; }
```

E no SUCESSO do cadastro (mesma função), trocar:

```js
  aplicarPerfil(r.profile);
  salvarSessao(); carregarProgressoLocal();
  await carregarAprovados();
  await garantirSorteio();
  screen='hub'; render(); window.scrollTo(0,0);
```

por:

```js
  signupCheck=null;
  aplicarPerfil(r.profile);
  salvarSessao(); carregarProgressoLocal();
  await carregarAprovados();
  await garantirSorteio();
  screen='hub'; render(); window.scrollTo(0,0);
```

- [ ] **Step 7: Testar em PRODUÇÃO (com registro fake, depois limpar)**

Servir local apontando pro Supabase real: `http://localhost:8080/` (SEM `?demo=1`).

1. **Lista vazia (fluxo aberto):** Criar conta → passo 1 (matrícula `TESTE-HUB-1`, e-mail `jfntavares91+hubteste@gmail.com`) → "Continuar" → passo 2 mostra o FORMULÁRIO COMPLETO (nome/setor livres). NÃO criar a conta ainda.
2. **Inserir registro fake na lista** (SQL Editor):
```sql
insert into lista_oficial (matricula, nome, email, setor)
values ('TESTE-HUB-1', 'Colaborador Teste Hub', 'jfntavares91+hubteste@gmail.com', 'uti');
```
3. **Par errado bloqueia:** passo 1 com matrícula `TESTE-HUB-1` + e-mail `errado@x.com` → mensagem "não conferem com a lista oficial".
4. **Par certo valida:** matrícula `TESTE-HUB-1` + e-mail `jfntavares91+hubteste@gmail.com` → passo 2 mostra "Colaborador Teste Hub" (read-only) e setor UTI travado → senha `teste123` → Criar conta → cai no HUB.
5. **Trigger bloqueia bypass:** no console do browser (logado com a conta de teste):
```js
await _sb.from('colaboradores').update({ matricula: '9999-INVENTADA' }).eq('id', (await _sb.auth.getUser()).data.user.id)
```
Expected: erro contendo `matrícula e e-mail não constam na lista oficial`.
6. **Limpeza** (SQL Editor):
```sql
delete from auth.users where email = 'jfntavares91+hubteste@gmail.com';
delete from lista_oficial where matricula = 'TESTE-HUB-1';
select validar_matricula('TESTE-HUB-1','jfntavares91+hubteste@gmail.com');
```
Expected: última query retorna `{"aberto": true}` (lista vazia de novo).

- [ ] **Step 8: Commit**

```bash
git add MIGRACAO-LISTA-OFICIAL.sql js/supabase-backend.js index.html
git commit -m "feat: cadastro único em 2 passos validado na lista oficial (RPC + trigger)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: Identidade — Portal do Colaborador (título, OG, textos)

**Files:**
- Modify: `index.html` (head + topbar estática + main estático + renderAuth home/IDENT)

**Interfaces:**
- Produces: título/OG/brand novos. Nenhum código dependente.

- [ ] **Step 1: Head/meta** — substituições exatas no `<head>`:

| De | Para |
|---|---|
| `<title>POPs HNR — Leitura e Avaliação</title>` | `<title>Portal do Colaborador · Hospital Nereu Ramos</title>` |
| `<meta name="description" content="Portal de Protocolos Operacionais Padrão de Enfermagem do Hospital Nereu Ramos — leia, faça as avaliações e certifique-se.">` | `<meta name="description" content="Portal do Colaborador do Hospital Nereu Ramos — POPs, regimentos, protocolos e cursos. Leia, faça as avaliações e certifique-se.">` |
| `<meta property="og:site_name" content="POPs HNR">` | `<meta property="og:site_name" content="Portal HNR">` |
| `<meta property="og:url" content="https://jfncode.github.io/pops-hnr-beta/">` | `<meta property="og:url" content="https://pops.hospitalnereuramos.com.br/">` |
| `<meta property="og:title" content="Portal de Protocolos · Hospital Nereu Ramos">` | `<meta property="og:title" content="Portal do Colaborador · Hospital Nereu Ramos">` |
| `<meta property="og:description" content="Leia os Procedimentos Operacionais Padrão, faça as avaliações e certifique-se. Educação Permanente em Enfermagem · SES-SC.">` | `<meta property="og:description" content="POPs, regimentos, protocolos e cursos — Educação Permanente em Enfermagem · SES-SC.">` |
| `<meta property="og:image" content="https://jfncode.github.io/pops-hnr-beta/assets/og-card.jpg">` | `<meta property="og:image" content="https://pops.hospitalnereuramos.com.br/assets/og-card.jpg">` |
| `<meta property="og:image:secure_url" content="https://jfncode.github.io/pops-hnr-beta/assets/og-card.jpg">` | `<meta property="og:image:secure_url" content="https://pops.hospitalnereuramos.com.br/assets/og-card.jpg">` |
| `<meta name="twitter:title" content="Portal de Protocolos · Hospital Nereu Ramos">` | `<meta name="twitter:title" content="Portal do Colaborador · Hospital Nereu Ramos">` |
| `<meta name="twitter:description" content="Leia, avalie e certifique-se — Educação Permanente em Enfermagem · HNR.">` | `<meta name="twitter:description" content="POPs, regimentos, protocolos e cursos — Educação Permanente · HNR.">` |
| `<meta name="twitter:image" content="https://jfncode.github.io/pops-hnr-beta/assets/og-card.jpg">` | `<meta name="twitter:image" content="https://pops.hospitalnereuramos.com.br/assets/og-card.jpg">` |

- [ ] **Step 2: Topbar estática** — trocar:

```html
      <div><b>POPs HNR</b><span>Hospital Nereu Ramos · Enfermagem</span></div>
```

por:

```html
      <div><b>Portal do Colaborador</b><span>Hospital Nereu Ramos</span></div>
```

- [ ] **Step 3: Placeholder estático do `<main>`** — trocar:

```html
        <h2>Portal de POPs</h2><p>Hospital Nereu Ramos · Enfermagem</p></div>
```

por:

```html
        <h2>Portal do Colaborador</h2><p>Hospital Nereu Ramos</p></div>
```

E no mesmo bloco estático, trocar:

```html
          <span><b>Sou colaborador</b><small>Ler POPs e fazer as avaliações</small></span>
```

por:

```html
          <span><b>Sou colaborador</b><small>POPs, regimentos, protocolos e cursos</small></span>
```

- [ ] **Step 4: Tela de login (renderAuth)** — 3 trocas:

(a)

```js
      <p class="lede">Leia os Procedimentos Operacionais Padrão, faça as avaliações e registre sua certificação.</p>
```

por:

```js
      <p class="lede">POPs, regimentos, protocolos e cursos — leia, faça as avaliações e registre sua certificação.</p>
```

(b)

```js
      <div class="auth-head"><h2>Acesse sua conta</h2><p>Portal de protocolos</p></div>
```

por:

```js
      <div class="auth-head"><h2>Acesse sua conta</h2><p>Portal do Colaborador</p></div>
```

(c)

```js
          <span><b>Sou colaborador</b><small>Ler POPs e fazer as avaliações</small></span>
```

por:

```js
          <span><b>Sou colaborador</b><small>POPs, regimentos, protocolos e cursos</small></span>
```

- [ ] **Step 5: Verificar**

`http://localhost:8080/?demo=1`: aba do browser mostra "Portal do Colaborador · Hospital Nereu Ramos"; login mostra os textos novos; topbar logada mostra "Portal do Colaborador". Console sem erros.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: identidade Portal do Colaborador (título, OG e textos)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: Regressão final, push e deploy (com checkpoint)

**Files:**
- Nenhum novo. Verificação + git.

- [ ] **Step 1: Testes Node**

Run: `node tests/sorteio.test.js && node tests/portal-core.test.js && node -e "const R=require('./data/regimentos.js'),P=require('./data/protocolos.js'),C=require('./data/cursos.js');require('./data/pops.js');console.log('OK data')"`
Expected: `OK Task 1 — sorteio determinístico`, `OK portal-core — normTxt, docById e searchDocs`, `OK data`

- [ ] **Step 2: Regressão completa no demo** (`http://localhost:8080/?demo=1`)

Colaborador novo (nome `Regressão Final`, matrícula `6060`, setor `CME`):
1. Login → HUB (4 cards, POPs "Etapa 1 · 0/15").
2. POPs → abrir um POP → ler até o fim → quiz abre → responder as 5 → resultado salvo → voltar → card atualizado.
3. ⌂ Início → Regimentos (vazio) → Início → Protocolos (vazio) → Início → Cursos (vazio).
4. Sair. Gestor `gestor123` → painel normal, relatório geral imprime (Ctrl+P preview ok), Buscar POPs funciona, ler POP e voltar à busca.
5. Console SEM erros em todo o fluxo.

- [ ] **Step 3: Push da branch**

```bash
git push -u origin feat/hub-colaborador
```

- [ ] **Step 4: CHECKPOINT — PARAR e pedir OK do Jefferson para o deploy**

Mostrar resumo do que vai ao ar (hub + bibliotecas vazias + cursos em breve + cadastro 2 passos com lista vazia = comportamento atual). SÓ CONTINUAR com aprovação explícita.

- [ ] **Step 5: Merge na main + deploy (após OK)**

```bash
git checkout main
git merge --no-ff feat/hub-colaborador -m "feat: Portal do Colaborador — hub com POPs, regimentos, protocolos e cursos + cadastro único"
git push origin main
git checkout feat/hub-colaborador
```

- [ ] **Step 6: Smoke em produção (~2 min após o push)**

1. `https://pops.hospitalnereuramos.com.br/` → título novo na aba, login carrega, console limpo.
2. `https://pops.hospitalnereuramos.com.br/?demo=1` → login demo → HUB aparece, POPs intactos.
3. Criar conta (produção) → passo 1 → "Continuar" com dados quaisquer → formulário completo (lista vazia = aberto). NÃO criar a conta — só confirmar a tela e voltar.
