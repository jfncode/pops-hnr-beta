# Sorteio de 30 POPs por colaborador — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir a trilha "todos os POPs do setor" por um sorteio fixo de 30 POPs por colaborador (15 etapa 1 + 15 etapa 2), persistido, com 2 seções progressivas.

**Architecture:** Lógica de sorteio determinística (semente por matrícula) vive em `js/core.js` (módulo UMD testável em Node). O resultado é persistido no perfil do colaborador — coluna `sorteio jsonb` no Supabase (produção) e `localStorage` no modo demo. `index.html` lê o sorteio do colaborador logado e o usa na trilha e nos certificados; o painel do gestor usa o sorteio de cada colaborador.

**Tech Stack:** HTML/JS vanilla (UMD modules), Supabase JS v2, GitHub Pages. Testes: Node + `assert` nativo (sem framework).

## Global Constraints

- Sem dependências novas. JS vanilla, módulos UMD `(root, factory)`.
- O campo `p.etapa` permanece intrínseco ao POP e governa a **dificuldade do quiz** (`drawQuiz(..., popEtapa(p)===2?3:2)`) e o bloqueio da Etapa 2. **O quiz engine NÃO muda.**
- Sorteio: 15 etapa 1 + 15 etapa 2. Semente = `matricula` se preenchida, senão `id` do usuário.
- Persistido uma vez (1º login) e reusado → imune a mudanças no acervo.
- Commits frequentes, mensagem em pt-BR, convenção `feat:`/`refactor:`/`test:`, terminar com `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- Validação que deve continuar passando: `node -e "require('./data/pops.js')"`.

---

### Task 1: Lógica de sorteio determinística em `POPCore`

**Files:**
- Modify: `js/core.js` (adicionar funções antes do `return {...}`)
- Test: `tests/sorteio.test.js` (criar)

**Interfaces:**
- Produces:
  - `POPCore.hashString(str) -> uint32`
  - `POPCore.mulberry32(seedInt) -> () => float[0,1)`
  - `POPCore.seededShuffle(arr, rng) -> novo array embaralhado`
  - `POPCore.sortear(idsE1, idsE2, seed, n=15) -> { e1: string[], e2: string[] }`

- [ ] **Step 1: Escrever o teste que falha** — criar `tests/sorteio.test.js`:

```js
const assert = require('assert');
const POPCore = require('../js/core.js');

const e1 = Array.from({ length: 40 }, (_, i) => 'a' + i);
const e2 = Array.from({ length: 30 }, (_, i) => 'b' + i);

// determinismo: mesma semente → mesmo resultado
const r1 = POPCore.sortear(e1, e2, '1000');
const r2 = POPCore.sortear(e1, e2, '1000');
assert.deepStrictEqual(r1, r2, 'mesma semente deve dar o mesmo sorteio');

// tamanho 15 + 15
assert.strictEqual(r1.e1.length, 15, 'e1 deve ter 15');
assert.strictEqual(r1.e2.length, 15, 'e2 deve ter 15');

// sem repetição dentro de cada seção
assert.strictEqual(new Set(r1.e1).size, 15, 'e1 sem repetição');
assert.strictEqual(new Set(r1.e2).size, 15, 'e2 sem repetição');

// pertencem aos candidatos da etapa certa
assert.ok(r1.e1.every((id) => e1.includes(id)), 'e1 só de candidatos da etapa 1');
assert.ok(r1.e2.every((id) => e2.includes(id)), 'e2 só de candidatos da etapa 2');

// semente diferente → sorteio diferente (alta probabilidade)
const r3 = POPCore.sortear(e1, e2, '2000');
assert.notDeepStrictEqual(r1.e1, r3.e1, 'semente diferente deve mudar o e1');

// fallback: menos de 15 candidatos → pega todos
const f = POPCore.sortear(['x', 'y'], e2, '1000');
assert.strictEqual(f.e1.length, 2, 'menos de 15 candidatos → pega todos os disponíveis');

console.log('OK Task 1 — sorteio determinístico');
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `node tests/sorteio.test.js`
Expected: FAIL — `TypeError: POPCore.sortear is not a function`

- [ ] **Step 3: Implementar no `js/core.js`** — inserir estas funções dentro do `factory`, logo antes da linha `return { shuffle, sample, drawQuiz, scoreQuiz, aprovou, isLocked };`:

```js
  // --- sorteio determinístico (semente por colaborador) ---
  function hashString(str) {
    str = String(str);
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function sortear(idsE1, idsE2, seed, n) {
    n = n || 15;
    const rng = mulberry32(hashString(seed));
    return {
      e1: seededShuffle(idsE1 || [], rng).slice(0, n),
      e2: seededShuffle(idsE2 || [], rng).slice(0, n),
    };
  }
```

E atualizar o `return` para exportar as novas funções:

```js
  return { shuffle, sample, drawQuiz, scoreQuiz, aprovou, isLocked, hashString, mulberry32, seededShuffle, sortear };
```

- [ ] **Step 4: Rodar o teste e confirmar que passa**

Run: `node tests/sorteio.test.js`
Expected: PASS — imprime `OK Task 1 — sorteio determinístico`

- [ ] **Step 5: Confirmar que o pops.js ainda carrega**

Run: `node -e "require('./data/pops.js'); console.log('pops ok')"`
Expected: `pops ok`

- [ ] **Step 6: Commit**

```bash
git add js/core.js tests/sorteio.test.js
git commit -m "feat(sorteio): logica deterministica de sorteio em POPCore

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 2: Persistência (migração SQL + backends)

**Files:**
- Create: `MIGRACAO-SORTEIO.sql`
- Modify: `js/supabase-backend.js`
- Modify: `js/local-backend.js`

**Interfaces:**
- Consumes: nada de tasks anteriores.
- Produces:
  - `POPApi.salvarSorteio(sorteio) -> Promise` — grava `{e1,e2}` no perfil do colaborador logado.
  - `POPApi.getSorteio() -> Promise<{e1,e2}|null>` — lê o sorteio salvo (ou null).
  - `fetchPerfil()`/perfil passa a incluir `sorteio`.
  - `getResultados().colaboradores[i].sorteio` disponível para o gestor.

- [ ] **Step 1: Criar `MIGRACAO-SORTEIO.sql`** (rodada manualmente no painel — ver Task 5):

```sql
-- POPs HNR — adiciona a coluna do sorteio de 30 POPs por colaborador.
-- Rodar no SQL Editor do Supabase (projeto POP NEREU).
alter table colaboradores add column if not exists sorteio jsonb;
```

- [ ] **Step 2: Supabase backend — incluir `sorteio` na leitura do perfil**

Em `js/supabase-backend.js`, no `fetchPerfil` (linha ~22), adicionar `sorteio` ao select:

```js
    const { data, error } = await sb.from('colaboradores').select('id,nome,setor,matricula,email,is_gestor,sorteio').eq('id', s.session.user.id).maybeSingle();
```

E no retorno de fallback da mesma função (linha ~23), incluir `sorteio: null`:

```js
    if (error || !data) return { id: s.session.user.id, nome: '', setor: '', matricula: '', email: s.session.user.email, is_gestor: false, sorteio: null };
```

- [ ] **Step 3: Supabase backend — adicionar `salvarSorteio` e `getSorteio`**

Em `js/supabase-backend.js`, logo após a definição de `POPApi.currentProfile = fetchPerfil;` (linha ~60), adicionar:

```js
  POPApi.salvarSorteio = async function (sorteio) {
    const { data: s } = await sb.auth.getSession();
    if (!s || !s.session) return { ok: false };
    const { error } = await sb.from('colaboradores').update({ sorteio }).eq('id', s.session.user.id);
    return { ok: !error };
  };
  POPApi.getSorteio = async function () {
    const p = await fetchPerfil();
    return (p && p.sorteio) || null;
  };
```

- [ ] **Step 4: Supabase backend — incluir `sorteio` nos dados do gestor**

Em `js/supabase-backend.js`, no `getResultados` (linha ~92), adicionar `sorteio` ao select de colaboradores e ao map (linha ~97-98):

```js
      sb.from('colaboradores').select('id,nome,setor,matricula,is_gestor,sorteio'),
```
```js
    const colaboradores = (colab.data || []).filter((c) => !c.is_gestor)
      .map((c) => ({ matricula: c.matricula || c.id, nome: c.nome, setor: c.setor, sorteio: c.sorteio || null }));
```

- [ ] **Step 5: Demo backend — `salvarSorteio`, `getSorteio` e `sorteio` no gestor**

Em `js/local-backend.js`, antes de `POPApi.flushPendentes`, adicionar (a chave de sessão demo é a matrícula da sessão atual, lida do `localStorage`):

```js
  function matSessao() {
    try { return (JSON.parse(localStorage.getItem('pops_sessao') || 'null') || {}).matricula || null; }
    catch { return null; }
  }
  POPApi.salvarSorteio = async function (sorteio) {
    const mat = matSessao(); if (!mat) return { ok: false };
    const db = load();
    db.colaboradores[mat] = db.colaboradores[mat] || {};
    db.colaboradores[mat].sorteio = sorteio;
    save(db);
    return { ok: true };
  };
  POPApi.getSorteio = async function () {
    const mat = matSessao(); if (!mat) return null;
    const db = load();
    return (db.colaboradores[mat] && db.colaboradores[mat].sorteio) || null;
  };
```

E no `getResultados` do local-backend (map de colaboradores), incluir o `sorteio`:

```js
    const colaboradores = Object.entries(db.colaboradores)
      .map(([matricula, v]) => ({ matricula, nome: v.nome, setor: v.setor, sorteio: v.sorteio || null }));
```

- [ ] **Step 6: Sanidade de sintaxe dos backends**

Run: `node -e "require('./js/core.js'); console.log('core ok')"`
(Os backends usam `window`/`sb`, não rodam em Node; a verificação real é no browser na Task 5. Aqui só garantimos que o core segue íntegro.)
Expected: `core ok`

- [ ] **Step 7: Commit**

```bash
git add MIGRACAO-SORTEIO.sql js/supabase-backend.js js/local-backend.js
git commit -m "feat(sorteio): persistencia do sorteio (coluna jsonb + localStorage)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 3: Integração na trilha e no gestor (`index.html`)

**Files:**
- Modify: `js/seed-demo.js` NÃO (é a Task 4). Aqui só `index.html`.
- Modify: `index.html`

**Interfaces:**
- Consumes: `POPCore.sortear`, `POPApi.salvarSorteio`, `POPApi.getSorteio`, perfil com `sorteio`.
- Produces (funções internas do `index.html`):
  - `let sorteio` (estado global do colaborador logado)
  - `seedColaborador()`, `candidatosEtapaIds(setor,e)`, `garantirSorteio()`
  - `secaoIds(col,e)`, `trilhaEtapa(e)`
  - assinaturas alteradas: `metaEtapa(col,e)`, `aprovadosEtapaSet(col,e,aprovSet)`, `etapaDoneSet(col,e,aprovSet)`

- [ ] **Step 1: Adicionar estado e helpers do sorteio**

Em `index.html`, após `let aprovadosServidor = [];` (linha ~588), adicionar:

```js
let sorteio = null;   // {e1:[ids], e2:[ids]} do colaborador logado (30 POPs sorteados)
```

Após `const byCode = ...` (linha ~615), adicionar os helpers:

```js
function seedColaborador(){ return (session && session.matricula && session.matricula!=='—') ? session.matricula : (session && (session.id||session.email||'anon')) || 'anon'; }
function candidatosEtapaIds(setor, e){ return popsDoSetor(setor).filter(p=>popEtapa(p)===e).sort(byCode).map(p=>p.id); }
function sorteioValido(s){ return s && Array.isArray(s.e1) && Array.isArray(s.e2) && s.e1.length>0 && s.e2.length>0; }
async function garantirSorteio(){
  if(!session || session.role!=='colaborador'){ sorteio=null; return; }
  let s = sorteioValido(sorteio) ? sorteio : null;
  if(!s && POPApi.getSorteio){ try{ s = await POPApi.getSorteio(); }catch{ s=null; } }
  if(!sorteioValido(s)){
    s = POPCore.sortear(candidatosEtapaIds(session.setor,1), candidatosEtapaIds(session.setor,2), seedColaborador(), 15);
    if(POPApi.salvarSorteio){ try{ await POPApi.salvarSorteio(s); }catch{} }
  }
  sorteio = s;
}
```

- [ ] **Step 2: Refatorar a camada de etapas para usar o sorteio**

Em `index.html`, substituir o bloco das linhas ~622-632 (de `const popEtapa` até `function temEtapa2`) por:

```js
const popEtapa = p => (p && p.etapa===2) ? 2 : 1;
// pool de candidatos do setor por etapa (usado no sorteio e no fallback do gestor)
function popsEtapa(setor, e){ return popsDoSetor(setor).filter(p => popEtapa(p)===e).sort(byCode); }
// ids da seção (15 sorteados) de um colaborador {setor, sorteio}
function secaoIds(col, e){
  const s = col && col.sorteio, key = e===1?'e1':'e2';
  if(s && Array.isArray(s[key]) && s[key].length) return s[key];
  return [];
}
// POPs da seção do colaborador LOGADO, em objetos, ordenados por código
function trilhaEtapa(e){ return secaoIds({setor:(session&&session.setor), sorteio}, e).map(pop).filter(Boolean).sort(byCode); }
function metaEtapa(col, e){ return secaoIds(col, e).length; }
function aprovadosEtapaSet(col, e, aprovSet){ return secaoIds(col,e).filter(id=>aprovSet.has(id)).length; }
function aprovadosEtapa(e){ const set=new Set(aprovadosServidor); return aprovadosEtapaSet({setor:(session&&session.setor), sorteio}, e, set); }
function etapaDoneSet(col, e, aprovSet){ const meta=metaEtapa(col,e); return meta>0 && aprovadosEtapaSet(col,e,aprovSet) >= meta; }
function etapaDone(e){ const meta=metaEtapa({setor:(session&&session.setor), sorteio}, e); return meta>0 && aprovadosEtapa(e) >= meta; }
function etapa2Unlocked(){ return etapaDone(1); }
function temEtapa2(){ return trilhaEtapa(2).length>0; }
```

- [ ] **Step 3: Atualizar as chamadas do gestor (passar `col` em vez de `setor`)**

Em `index.html`, nas linhas ~1394-1397, dentro do `.forEach(col=>...)`:

```js
    const e1=etapaDoneSet(col,1,aprov);
    const e2pops=secaoIds(col,2);
    if(e1) cert1++;
    if(e1 && (e2pops.length===0 || etapaDoneSet(col,2,aprov))) certFinal++;
```

Nas linhas ~1415-1417:

```js
    const e1=etapaDoneSet(col,1,aprovCol);
    const e2pops=secaoIds(col,2);
    const finalOk=e1 && (e2pops.length===0 || etapaDoneSet(col,2,aprovCol));
```

Na linha ~1641:

```js
  const e1done = etapaDoneSet(col,1,aprov), e2done = etapaDoneSet(col,2,aprov);
```

(Onde `aprov`/`aprovCol` já são `Set`s de pop_ids aprovados daquele colaborador — manter como estão. Onde antes havia `popsEtapa(col.setor,2)` para contar a Etapa 2, trocar por `secaoIds(col,2)`.)

- [ ] **Step 4: Renderização da trilha usar `trilhaEtapa`**

Em `index.html`, na função de render da trilha (linha ~974), trocar:

```js
  const ps=trilhaEtapa(e);
```
(antes: `const ps=popsEtapa(session.setor, e);`)

E na linha ~977, a meta:

```js
  const meta=metaEtapa({setor:session.setor, sorteio}, e);
```
(antes: `const meta=metaEtapa(session.setor, e);`)

- [ ] **Step 5: Chamar `garantirSorteio` em todos os caminhos de entrada do colaborador**

Em `index.html`, adicionar `await garantirSorteio();` logo após cada `await carregarAprovados();` nos caminhos de colaborador:
- `entrarColaborador` (linha ~667)
- `loginColaborador` (linha ~680)
- `criarConta` (linha ~693)
- bootstrap auto-resume (linha ~1793 e ~1798)

Exemplo (entrarColaborador):

```js
  salvarSessao(); carregarProgressoLocal();
  await carregarAprovados();
  await garantirSorteio();
  screen='list'; render(); window.scrollTo(0,0);
```

No `logout` (linha ~711), zerar o sorteio: adicionar `sorteio=null;` junto aos outros resets.

- [ ] **Step 6: Verificar no navegador (modo demo) — fluxo do colaborador**

Subir local: `python -m http.server 8777 --bind 127.0.0.1` (em background) e abrir `http://127.0.0.1:8777/index.html?demo=1`.
Entrar como colaborador (nome qualquer, matrícula `7777`, setor UTI). Verificar:
- A trilha "Meus procedimentos" mostra **15 POPs na Seção 1** e a **Seção 2 bloqueada**.
- No console: `JSON.stringify(JSON.parse(localStorage.getItem('pops_db_local')).colaboradores['7777'].sorteio)` retorna `{e1:[15], e2:[15]}`.
- Sair e entrar de novo com matrícula `7777` → **mesmos 15** (sorteio persistido).
Expected: comportamento acima confirmado.

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "refactor(sorteio): trilha e certificados usam os 30 POPs sorteados

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 4: Modo demo — usuários de exemplo aprovam o sorteio deles (`js/seed-demo.js`)

**Files:**
- Modify: `js/seed-demo.js`

**Interfaces:**
- Consumes: `POPCore.sortear`, `candidatosEtapaIds` (reimplementado localmente no seed, pois o seed roda antes do `index.html`).

- [ ] **Step 1: Adicionar helper de sorteio e gravar o `sorteio` de cada colaborador demo**

Em `js/seed-demo.js`, dentro do primeiro IIFE (o que monta `colaboradores`/`resultados`), substituir a função `aprovarN` e suas chamadas (linhas ~86-101) por uma versão que sorteia 30 e aprova os ids sorteados, gravando também o `sorteio` no colaborador:

```js
  const byCodeNum = function (a, b) { return (a.code || '').localeCompare(b.code || '', 'pt-BR', { numeric: true }); };
  function candIds(setor, etapa) {
    return (window.POPS || [])
      .filter(function (p) { return Array.isArray(p.setores) && p.setores.includes(setor) && ((p.etapa || 1) === etapa); })
      .sort(byCodeNum).map(function (p) { return p.id; });
  }
  function sorteioDe(mat, setor) {
    return window.POPCore.sortear(candIds(setor, 1), candIds(setor, 2), mat, 15);
  }
  // Aprova as primeiras `nE1` da Seção 1 e `nE2` da Seção 2 do sorteio do colaborador,
  // e grava o sorteio no registro do colaborador. nE2<0 → nenhuma da Seção 2.
  function aprovarSorteio(mat, setor, nE1, nE2) {
    const s = sorteioDe(mat, setor);
    colaboradores[mat] = colaboradores[mat] || { nome: colaboradores[mat] && colaboradores[mat].nome, setor: setor };
    colaboradores[mat].sorteio = s;
    const aprovar = function (ids) {
      ids.forEach(function (id, i) {
        const p = (window.POPS || []).find(function (x) { return x.id === id; });
        if (!p) return;
        const ac = 3 + (i % 3);
        resultados[mat + '|' + id] = { matricula: mat, pop_id: id, pop_codigo: p.code, status: 'aprovado', score: ac, acertos: ac, total: 5, tentativas: 1, detalhe: null };
      });
    };
    aprovar(s.e1.slice(0, nE1));
    if (nE2 > 0) aprovar(s.e2.slice(0, nE2));
  }
  // Ana (UTI): Seção 1 completa → 1º certificado
  aprovarSorteio('4471', 'uti', 15, 0);
  // Carlos (CC): trilha completa → certificado final
  aprovarSorteio('3892', 'cc', 15, 15);
  // Beatriz (Ambulatório): Seção 1 completa → 1º certificado
  aprovarSorteio('6033', 'ambulatorio', 15, 0);
  // Juliana, Marcos, Roberto: garantir o sorteio mesmo em andamento (gestor mostra X/15)
  aprovarSorteio('5120', 'assistencial', 0, 0);
  aprovarSorteio('2765', 'assistencial', 0, 0);
  aprovarSorteio('4408', 'uti', 0, 0);
```

(Remover o array `provas` manual e o `forEach` que o consumia, nas linhas ~58-82, e os mapas `CODE`/`ID` das linhas ~22-53 que ficam sem uso — o seed passa a depender só de `sorteioDe`.)

- [ ] **Step 2: Atualizar o usuário de teste Jefferson para aprovar o sorteio dele**

Em `js/seed-demo.js`, no segundo IIFE `ensureTestUser`, substituir `aprovarTodos(1)/aprovarTodos(2)` (linhas ~123-137) por:

```js
  const byCodeNum = function (a, b) { return (a.code || '').localeCompare(b.code || '', 'pt-BR', { numeric: true }); };
  function candIds(etapa) {
    return (window.POPS || [])
      .filter(function (p) { return Array.isArray(p.setores) && p.setores.includes(SETOR) && ((p.etapa || 1) === etapa); })
      .sort(byCodeNum).map(function (p) { return p.id; });
  }
  const s = window.POPCore.sortear(candIds(1), candIds(2), MAT, 15);
  db.colaboradores[MAT] = { nome: 'Jefferson Tavares', setor: SETOR, sorteio: s };
  s.e1.concat(s.e2).forEach(function (id, i) {
    const p = (window.POPS || []).find(function (x) { return x.id === id; });
    if (!p) return;
    const ac = 3 + (i % 3);
    db.resultados[MAT + '|' + id] = { matricula: MAT, pop_id: id, pop_codigo: p.code, status: 'aprovado', score: ac, acertos: ac, total: 5, tentativas: 1, detalhe: null };
  });
```

(`POPCore` está disponível porque `core.js` é carregado antes de `seed-demo.js` no `index.html` — confirmar a ordem dos `<script>` na Task 5.)

- [ ] **Step 3: Verificar a ordem dos scripts**

Run: `grep -nE "core.js|seed-demo.js" index.html`
Expected: `js/core.js` aparece ANTES de `js/seed-demo.js`. (Se não, mover o `<script src="./js/core.js">` para antes do seed.)

- [ ] **Step 4: Verificar no navegador (demo) — gestor e Jefferson**

Limpar o estado: no console `localStorage.clear()` e recarregar `?demo=1`.
- Entrar como gestor (`gestor123`): o painel mostra Ana, Carlos e Beatriz com Etapa 1/certificados coerentes (Carlos com certificado final).
- Entrar como Jefferson (matrícula `1000`, Assistencial): os **2 certificados concluídos** e o **buscador liberado**.
Expected: comportamento acima confirmado.

- [ ] **Step 5: Commit**

```bash
git add js/seed-demo.js
git commit -m "feat(sorteio): seed demo aprova os 30 sorteados de cada colaborador

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 5: Migração em produção, verificação E2E e deploy

**Files:** nenhum (operacional).

- [ ] **Step 1: Rodar a migração SQL no Supabase**

No painel (projeto POP NEREU), SQL Editor, colar e rodar o conteúdo de `MIGRACAO-SORTEIO.sql`:
```sql
alter table colaboradores add column if not exists sorteio jsonb;
```
Expected: "Success. No rows returned".

- [ ] **Step 2: Confirmar a coluna via API pública**

Run:
```bash
curl -s "https://ezkohniydtijcycqevqj.supabase.co/rest/v1/colaboradores?select=sorteio&limit=1" -H "apikey: sb_publishable_ur6YVHSauhBePuCOhKi1iA_2SxQhZLo" -H "Authorization: Bearer sb_publishable_ur6YVHSauhBePuCOhKi1iA_2SxQhZLo"
```
Expected: `[]` (sem erro `column ... does not exist`).

- [ ] **Step 3: Push e deploy**

```bash
git push origin main
```
Aguardar o rebuild do GitHub Pages (~1 min).

- [ ] **Step 4: E2E em produção (Playwright/Chrome)**

Abrir `https://jfncode.github.io/pops-hnr-beta/`, criar uma conta de teste (setor UTI), verificar:
- A trilha mostra 15 na Seção 1, Seção 2 bloqueada.
- Concluir os 15 da Seção 1 (provas) → Seção 2 desbloqueia e o 1º certificado aparece.
- No Supabase (Table Editor → colaboradores) a linha do usuário tem `sorteio` preenchido com `{e1,e2}`.
- Logout/login → mesmos 15 (persistido).
Depois **apagar o usuário de teste** via `delete from auth.users where email='<teste>'`.
Expected: comportamento acima confirmado; usuário de teste removido.

- [ ] **Step 5: Atualizar a memória do projeto**

Atualizar `C:\Users\PICHAU\.claude\projects\C--Users-PICHAU\memory\project_pops_sorteio_30.md`: marcar a feature do sorteio como **IMPLEMENTADA e no ar** (substitui a regra "quaisquer 15"); registrar a coluna `sorteio jsonb`, a semente por matrícula, persistência, e o spec/plano em `docs/superpowers/`.

---

## Self-Review (preenchido)

**1. Spec coverage:**
- Modelo de dados (coluna `sorteio`, localStorage) → Task 2. ✓
- Algoritmo determinístico (semente, split por etapa, persistido) → Task 1 + `garantirSorteio` Task 3. ✓
- Integração na trilha (trilhaEtapa, etapaDone exigindo os 15, quiz inalterado) → Task 3. ✓
- Gestor por colaborador (consequência de "só os 30 contam") → Task 3 steps 3. ✓
- Modo demo → Task 4. ✓
- Rollout (SQL, deploy, e2e) → Task 5. ✓
- Testes (unidade do sorteio + integração manual) → Task 1 (Node) + Tasks 3/4/5 (browser). ✓

**2. Placeholder scan:** sem TBD/TODO; todos os steps têm código/comando concretos. ✓

**3. Type consistency:** assinaturas unificadas — `metaEtapa(col,e)`, `aprovadosEtapaSet(col,e,set)`, `etapaDoneSet(col,e,set)` recebem `col` (objeto `{setor,sorteio}`); `secaoIds(col,e)` e `trilhaEtapa(e)` consistentes entre trilha e gestor; `POPCore.sortear(idsE1,idsE2,seed,n)` igual em core, index e seed. ✓
