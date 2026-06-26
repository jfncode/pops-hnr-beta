// Config do sistema POPs HNR.
// PRODUÇÃO (Supabase) por padrão; modo DEMO (dados no navegador) com ?demo=1 na URL.
(function () {
  var params = new URLSearchParams(location.search);
  window.POPS_LOCAL_MODE = params.has('demo');               // ?demo=1 → demo local (portfólio)
  window.SUPABASE_URL = 'https://ezkohniydtijcycqevqj.supabase.co';
  window.SUPABASE_KEY = 'sb_publishable_ur6YVHSauhBePuCOhKi1iA_2SxQhZLo'; // chave pública (segura no front)
  window.POPS_GESTOR_EMAIL = 'gestora@hnr.br';               // e-mail do login da gestora no Supabase Auth
})();
