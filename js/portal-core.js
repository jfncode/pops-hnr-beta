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
