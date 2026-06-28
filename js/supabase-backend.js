/* Backend REAL (produção) via Supabase + Auth (e-mail/senha).
   Ativa quando NÃO está em modo demo (?demo=1 usa o local-backend).
   Sobrescreve o POPApi e expõe métodos de auth (signUp/signIn/resetPassword/currentProfile). */
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

  // lê o perfil do usuário logado (colaboradores 1:1 com auth.users)
  async function fetchPerfil() {
    const { data: s } = await sb.auth.getSession();
    if (!s || !s.session) return null;
    const { data, error } = await sb.from('colaboradores').select('id,nome,setor,matricula,email,is_gestor,sorteio').eq('id', s.session.user.id).maybeSingle();
    if (error || !data) return { id: s.session.user.id, nome: '', setor: '', matricula: '', email: s.session.user.email, is_gestor: false, sorteio: null };
    return data;
  }

  // ---- AUTH (expostos ao app) ----
  POPApi.signUp = async function (d) {
    const { data, error } = await sb.auth.signUp({
      email: d.email, password: d.senha,
      options: { data: { nome: d.nome, setor: d.setor, matricula: d.matricula } },
    });
    if (error) return { ok: false, erro: error.message };
    // confirmação desligada → já vem sessão; ligada → precisa confirmar e-mail
    const hasSession = !!(data && data.session);
    // cria o perfil do colaborador (há sessão → RLS permite inserir o próprio)
    if (hasSession && data.user) {
      const { error: pe } = await sb.from('colaboradores').upsert({
        id: data.user.id, nome: d.nome, setor: d.setor, matricula: d.matricula, email: d.email,
      });
      if (pe) return { ok: false, erro: 'conta criada, mas falhou ao salvar o perfil: ' + pe.message };
    }
    return { ok: true, hasSession, profile: { id: data.user && data.user.id, nome: d.nome, setor: d.setor, matricula: d.matricula, email: d.email, is_gestor: false } };
  };

  POPApi.signIn = async function (email, senha) {
    const { error } = await sb.auth.signInWithPassword({ email, password: senha });
    if (error) return { ok: false, erro: 'e-mail ou senha inválidos' };
    const profile = await fetchPerfil();
    return { ok: true, profile };
  };

  POPApi.resetPassword = async function (email) {
    const url = location.origin + location.pathname;
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: url });
    if (error) return { ok: false, erro: error.message };
    return { ok: true };
  };

  POPApi.currentProfile = fetchPerfil;   // usado no auto-resume e no check de gestor

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

  // ---- POPApi clássico ----
  // o perfil é criado por trigger no signup; aqui é no-op (mantém compatibilidade)
  POPApi.cadastrar = async function () { return { ok: true }; };

  POPApi.salvar = async function (r) {
    const { error } = await sb.rpc('salvar_resultado', { r });
    if (error) { const f = lerFila(); f.push(r); gravarFila(f); throw new Error(error.message); }
    return { ok: true };
  };

  POPApi.status = async function () {
    const { data, error } = await sb.rpc('status_colaborador');
    if (error) throw new Error(error.message);
    return { aprovados: Array.isArray(data) ? data : [] };
  };

  POPApi.gestorLogin = async function (senha, email) {
    const e = (email || window.POPS_GESTOR_EMAIL || '').trim();
    if (!e) return { ok: false, erro: 'informe o e-mail do gestor' };
    const { error } = await sb.auth.signInWithPassword({ email: e, password: senha });
    if (error) return { ok: false, erro: 'e-mail ou senha inválidos' };
    const perfil = await fetchPerfil();
    if (!perfil || !perfil.is_gestor) { await sb.auth.signOut(); return { ok: false, erro: 'esta conta não é de gestor' }; }
    return { ok: true };
  };

  POPApi.getResultados = async function () {
    const { data: s } = await sb.auth.getSession();
    if (!s || !s.session) return { erro: 'não autorizado', colaboradores: [], resultados: [] };
    const [colab, res] = await Promise.all([
      sb.from('colaboradores').select('id,nome,setor,matricula,is_gestor,sorteio'),
      sb.from('resultados').select('user_id,pop_id,pop_codigo,status,score,acertos,total,tentativas,detalhe'),
    ]);
    if (colab.error || res.error) throw new Error((colab.error && colab.error.message) || (res.error && res.error.message));
    const byId = {}; (colab.data || []).forEach((c) => { byId[c.id] = c; });
    const colaboradores = (colab.data || []).filter((c) => !c.is_gestor)
      .map((c) => ({ matricula: c.matricula || c.id, nome: c.nome, setor: c.setor, sorteio: c.sorteio || null }));
    const resultados = (res.data || []).map((r) => ({
      matricula: (byId[r.user_id] && byId[r.user_id].matricula) || r.user_id,
      pop_id: r.pop_id, pop_codigo: r.pop_codigo, status: r.status,
      score: r.score, acertos: r.acertos, total: r.total, tentativas: r.tentativas, detalhe: r.detalhe,
    }));
    return { colaboradores, resultados };
  };

  POPApi.flushPendentes = async function () {
    const fila = lerFila(); const restantes = [];
    for (const item of fila) {
      const { error } = await sb.rpc('salvar_resultado', { r: item });
      if (error) restantes.push(item);
    }
    gravarFila(restantes);
  };

  window.popsSupabaseLogout = async function () { try { await sb.auth.signOut(); } catch {} };
})();
