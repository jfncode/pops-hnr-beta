const assert = require('assert');
const POPCore = require('../js/core.js');

// Monta um pool com dificuldades controladas. Codifica a dificuldade no
// enunciado (d=N) para poder inspecionar a preferência no resultado sorteado.
function mkPool(dificuldades) {
  return dificuldades.map((d, i) => ({
    q: 'd=' + d + ' #' + i,
    o: ['a', 'b', 'c', 'd'],
    a: 0,
    d,
  }));
}
const difDe = (item) => Number(item.q.match(/d=(\d+)/)[1]);

// --- Regressão do bug do quiz travado (POP-ENF-03) ---
// Pool de 5 com só 1 questão na faixa exigida (d>=2). A UI anuncia QUIZ_SIZE=5,
// então drawQuiz DEVE devolver 5 (completando com o resto), senão o avanço
// estoura em quizState.list[i] === undefined e a tela congela.
const poolPobre = mkPool([1, 1, 1, 1, 2]); // 4 fáceis + 1 média
const draw = POPCore.drawQuiz(poolPobre, 5, 2);
assert.strictEqual(draw.length, 5, 'drawQuiz deve devolver n=5 mesmo com poucas questões na faixa');
assert.strictEqual(new Set(draw.map((x) => x.q)).size, draw.length, 'sem perguntas repetidas');
draw.forEach((x, i) => {
  assert.ok(x && typeof x.q === 'string', 'item ' + i + ' tem enunciado');
  assert.ok(Array.isArray(x.o) && x.o.length >= 2, 'item ' + i + ' tem alternativas');
  assert.ok(typeof x.a === 'number' && x.a >= 0 && x.a < x.o.length, 'item ' + i + ' tem gabarito válido');
});
// A única questão d>=2 disponível SEMPRE entra (degradação mínima usa as mais difíceis).
assert.ok(draw.some((x) => difDe(x) === 2), 'a questão mais difícil disponível deve estar no sorteio');

// --- Preferência preservada quando HÁ folga na faixa exigida ---
// Etapa 2 (minD=3): com 5+ questões d>=3, só devem sair questões d>=3.
const poolFolgado = mkPool([1, 1, 2, 3, 3, 3, 3, 3]); // 5 altas disponíveis
const drawHard = POPCore.drawQuiz(poolFolgado, 5, 3);
assert.strictEqual(drawHard.length, 5, 'com folga, devolve n=5');
assert.ok(drawHard.every((x) => difDe(x) >= 3), 'com folga de d>=3, só sorteia questões altas');

// Etapa 1 (minD=2): com folga de d>=2, nunca sorteia fáceis.
const poolMedio = mkPool([1, 1, 1, 2, 2, 2, 2, 2]); // 5 médias/altas
const drawMed = POPCore.drawQuiz(poolMedio, 5, 2);
assert.ok(drawMed.every((x) => difDe(x) >= 2), 'com folga de d>=2, nunca sorteia fáceis');

// --- Degradação: completa das mais difíceis para as mais fáceis ---
// Faixa exigida vazia (nenhuma d>=3), resto = [2,2,1,1,1]. Deve pegar as duas d=2
// antes de qualquer d=1.
const poolSemAltas = mkPool([1, 1, 1, 2, 2]);
const drawDeg = POPCore.drawQuiz(poolSemAltas, 3, 3);
assert.strictEqual(drawDeg.length, 3, 'pool=5 sempre completa até n=3');
const qtdMedias = drawDeg.filter((x) => difDe(x) === 2).length;
assert.strictEqual(qtdMedias, 2, 'degradação usa as 2 médias antes das fáceis');

// --- Pool menor que n → devolve todas as disponíveis (não estoura) ---
const drawCurto = POPCore.drawQuiz(mkPool([2, 2, 2]), 5, 2);
assert.strictEqual(drawCurto.length, 3, 'pool<n devolve todas as questões disponíveis');

console.log('OK drawQuiz — completa até n, prioriza dificuldade exigida, degrada pelas mais difíceis');
