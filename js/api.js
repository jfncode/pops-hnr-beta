(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.POPApi = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  const FILA = 'pops_pendentes';

  function lerFila() {
    try { return JSON.parse(localStorage.getItem(FILA)) || []; }
    catch { return []; }
  }
  function gravarFila(arr) { localStorage.setItem(FILA, JSON.stringify(arr)); }
  function enfileirar(resultado) {
    const fila = lerFila();
    fila.push(resultado);
    gravarFila(fila);
  }

  async function salvar(resultado) {
    try {
      const res = await fetch('api/salvar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resultado),
      });
      if (!res.ok) throw new Error('salvar falhou: ' + res.status);
      return await res.json();
    } catch (e) {
      enfileirar(resultado);
      throw e;
    }
  }

  async function status(matricula) {
    const res = await fetch('api/status.php?matricula=' + encodeURIComponent(matricula));
    if (!res.ok) throw new Error('status falhou: ' + res.status);
    return await res.json();
  }

  async function gestorLogin(senha) {
    const res = await fetch('api/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senha }),
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, ...body };
  }

  async function cadastrar(colaborador) {
    const res = await fetch('api/cadastrar.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(colaborador),
    });
    if (!res.ok) throw new Error('cadastrar falhou: ' + res.status);
    return await res.json();
  }

  async function getResultados() {
    const res = await fetch('api/resultados.php');
    if (res.status === 401) return { erro: 'não autorizado', colaboradores: [], resultados: [] };
    if (!res.ok) throw new Error('resultados falhou: ' + res.status);
    return await res.json();
  }

  async function flushPendentes() {
    let fila = lerFila();
    const restantes = [];
    for (const item of fila) {
      try {
        const res = await fetch('api/salvar.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!res.ok) restantes.push(item);
      } catch {
        restantes.push(item);
      }
    }
    gravarFila(restantes);
  }

  return { salvar, status, cadastrar, gestorLogin, getResultados, flushPendentes };
}));
