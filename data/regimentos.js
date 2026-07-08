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
