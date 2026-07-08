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

  // --- sorteio determinístico (semente por colaborador) ---
  function hashString(str) {
    str = String(str);
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function sortear(idsE1, idsE2, seed, n) {
    n = n || 15;
    const rng = mulberry32(hashString(seed));
    return {
      e1: seededShuffle(idsE1 || [], rng).slice(0, n),
      e2: seededShuffle(idsE2 || [], rng).slice(0, n),
    };
  }

  return { shuffle, sample, drawQuiz, scoreQuiz, aprovou, isLocked, hashString, mulberry32, seededShuffle, sortear };
}));
