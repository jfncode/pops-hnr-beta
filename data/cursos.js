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
