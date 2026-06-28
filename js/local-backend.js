/* Modo local (beta sem servidor): substitui o POPApi por uma implementação
   que guarda tudo no localStorage do navegador. Ativa apenas quando
   window.POPS_LOCAL_MODE === true. Os dados ficam restritos àquele aparelho. */
(function () {
  if (typeof window === 'undefined' || !window.POPS_LOCAL_MODE) return;
  if (typeof POPApi === 'undefined') return;

  const KEY = 'pops_db_local';
  const DEMO_SENHA = window.POPS_DEMO_SENHA || 'gestor123';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { colaboradores: {}, resultados: {} }; }
    catch { return { colaboradores: {}, resultados: {} }; }
  }
  function save(db) { localStorage.setItem(KEY, JSON.stringify(db)); }

  POPApi.cadastrar = async function (c) {
    const db = load();
    db.colaboradores[c.matricula] = { nome: c.nome, setor: c.setor };
    save(db);
    return { ok: true };
  };

  POPApi.salvar = async function (r) {
    const db = load();
    db.colaboradores[r.matricula] = { nome: r.nome, setor: r.setor };
    const k = r.matricula + '|' + r.pop_id;
    const atual = db.resultados[k];
    if (atual && atual.status === 'aprovado') {
      atual.tentativas = (atual.tentativas || 1) + 1; // não regride aprovação
    } else if (atual) {
      Object.assign(atual, {
        pop_codigo: r.pop_codigo, status: r.status, score: r.score,
        acertos: r.acertos, total: r.total, tentativas: (atual.tentativas || 1) + 1, detalhe: r.detalhe,
      });
    } else {
      db.resultados[k] = {
        matricula: r.matricula, pop_id: r.pop_id, pop_codigo: r.pop_codigo,
        status: r.status, score: r.score, acertos: r.acertos, total: r.total, tentativas: 1, detalhe: r.detalhe,
      };
    }
    save(db);
    return { ok: true };
  };

  POPApi.status = async function (matricula) {
    const db = load();
    const aprovados = Object.values(db.resultados)
      .filter((x) => x.matricula === matricula && x.status === 'aprovado')
      .map((x) => x.pop_id);
    return { aprovados };
  };

  POPApi.gestorLogin = async function (senha) {
    if (senha === DEMO_SENHA) { sessionStorage.setItem('pops_gestor_ok', '1'); return { ok: true }; }
    return { ok: false, erro: 'senha inválida' };
  };

  POPApi.getResultados = async function () {
    if (sessionStorage.getItem('pops_gestor_ok') !== '1') {
      return { erro: 'não autorizado', colaboradores: [], resultados: [] };
    }
    const db = load();
    const colaboradores = Object.entries(db.colaboradores)
      .map(([matricula, v]) => ({ matricula, nome: v.nome, setor: v.setor, sorteio: v.sorteio || null }));
    const resultados = Object.values(db.resultados);
    return { colaboradores, resultados };
  };

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

  POPApi.flushPendentes = async function () { /* nada a sincronizar no modo local */ };
})();
