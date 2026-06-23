(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.POPCore = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(a, n) {
    return shuffle(a).slice(0, n);
  }

  // Sorteia n questões do pool e embaralha as alternativas, recalculando o
  // índice da correta. O gabarito (índice) fica no objeto retornado — correção
  // é no cliente (ver spec).
  function drawQuiz(pool, n, minD) {
    // Sorteia questões com dificuldade >= minD (padrão 2 = média). A etapa 2
    // usa minD=3 (somente alta). Nunca sorteia questões fáceis (d<2).
    const floor = Math.max(2, minD || 2);
    let eligible = pool.filter((q) => (q.d == null ? 2 : q.d) >= floor);
    if (eligible.length < n) eligible = pool.filter((q) => (q.d == null ? 2 : q.d) >= 2);
    return sample(eligible, n).map((q) => {
      const order = shuffle(q.o.map((t, i) => ({ t, ok: i === q.a })));
      return { q: q.q, o: order.map((x) => x.t), a: order.findIndex((x) => x.ok) };
    });
  }

  function scoreQuiz(list, answers) {
    const hits = list.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0);
    return { hits, total: list.length };
  }

  function aprovou(hits, passMin) {
    return hits >= passMin;
  }

  function isLocked(popId, aprovados) {
    return Array.isArray(aprovados) && aprovados.includes(popId);
  }

  return { shuffle, sample, drawQuiz, scoreQuiz, aprovou, isLocked };
}));
