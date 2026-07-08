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
