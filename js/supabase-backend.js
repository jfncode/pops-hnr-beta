/* Backend REAL (produção) via Supabase. Sobrescreve o POPApi para gravar/ler no
   banco. Ativa quando NÃO está em modo demo (window.POPS_LOCAL_MODE falso) e há
   URL/chave configuradas. O modo demo (?demo=1) continua usando o local-backend. */
(function () {
  if (typeof window === 'undefined') return;
  if (window.POPS_LOCAL_MODE) return;                 // demo → local-backend cuida
  if (typeof POPApi === 'undefined') return;
  if (!window.SUPABASE_URL || !window.SUPABASE_KEY) { console.error('[POPs] Supabase não configurado.'); return; }
  if (typeof supabase === 'undefined' || !supabase.createClient) { console.error('[POPs] supabase-js não carregado.'); return; }

  const sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY);
  window._sb = sb;

  const FILA = 'pops_pendentes';
  const lerFila = () => { try { return JSON.parse(localStorage.getItem(FILA)) || []; } catch { return []; } };
  const gravarFila = (a) => localStorage.setItem(FILA, JSON.stringify(a));

  // cadastra/atualiza o colaborador na identificação
  POPApi.cadastrar = async function (c) {
    const { error } = await sb.rpc('cadastrar_colaborador', { p_matricula: c.matricula, p_nome: c.nome, p_setor: c.setor });
    if (error) throw new Error(error.message);
    return { ok: true };
  };

  // salva o resultado da prova (a função no banco não regride aprovação); fila offline em caso de erro
  POPApi.salvar = async function (r) {
    const { error } = await sb.rpc('salvar_resultado', { r });
    if (error) { const f = lerFila(); f.push(r); gravarFila(f); throw new Error(error.message); }
    return { ok: true };
  };

  // pops aprovados do colaborador (array de pop_id)
  POPApi.status = async function (matricula) {
    const { data, error } = await sb.rpc('status_colaborador', { p_matricula: matricula });
    if (error) throw new Error(error.message);
    return { aprovados: Array.isArray(data) ? data : [] };
  };

  // login do gestor via Supabase Auth (e-mail digitado, ou o padrão do config)
  POPApi.gestorLogin = async function (senha, email) {
    const e = (email || window.POPS_GESTOR_EMAIL || '').trim();
    if (!e) return { ok: false, erro: 'informe o e-mail do gestor' };
    const { error } = await sb.auth.signInWithPassword({ email: e, password: senha });
    if (error) return { ok: false, erro: 'e-mail ou senha inválidos' };
    return { ok: true };
  };

  // painel do gestor: lê todos os colaboradores e resultados (exige sessão autenticada)
  POPApi.getResultados = async function () {
    const { data: s } = await sb.auth.getSession();
    if (!s || !s.session) return { erro: 'não autorizado', colaboradores: [], resultados: [] };
    const [colab, res] = await Promise.all([
      sb.from('colaboradores').select('matricula,nome,setor'),
      sb.from('resultados').select('*'),
    ]);
    if (colab.error || res.error) throw new Error((colab.error && colab.error.message) || (res.error && res.error.message));
    return { colaboradores: colab.data || [], resultados: res.data || [] };
  };

  // reenvia resultados que ficaram na fila offline
  POPApi.flushPendentes = async function () {
    const fila = lerFila(); const restantes = [];
    for (const item of fila) {
      const { error } = await sb.rpc('salvar_resultado', { r: item });
      if (error) restantes.push(item);
    }
    gravarFila(restantes);
  };

  // encerra também a sessão do Supabase ao sair (chamado pelo logout do app, se existir)
  window.popsSupabaseLogout = async function () { try { await sb.auth.signOut(); } catch {} };
})();
