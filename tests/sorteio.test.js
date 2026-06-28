const assert = require('assert');
const POPCore = require('../js/core.js');

const e1 = Array.from({ length: 40 }, (_, i) => 'a' + i);
const e2 = Array.from({ length: 30 }, (_, i) => 'b' + i);

// determinismo: mesma semente → mesmo resultado
const r1 = POPCore.sortear(e1, e2, '1000');
const r2 = POPCore.sortear(e1, e2, '1000');
assert.deepStrictEqual(r1, r2, 'mesma semente deve dar o mesmo sorteio');

// tamanho 15 + 15
assert.strictEqual(r1.e1.length, 15, 'e1 deve ter 15');
assert.strictEqual(r1.e2.length, 15, 'e2 deve ter 15');

// sem repetição dentro de cada seção
assert.strictEqual(new Set(r1.e1).size, 15, 'e1 sem repetição');
assert.strictEqual(new Set(r1.e2).size, 15, 'e2 sem repetição');

// pertencem aos candidatos da etapa certa
assert.ok(r1.e1.every((id) => e1.includes(id)), 'e1 só de candidatos da etapa 1');
assert.ok(r1.e2.every((id) => e2.includes(id)), 'e2 só de candidatos da etapa 2');

// semente diferente → sorteio diferente (alta probabilidade)
const r3 = POPCore.sortear(e1, e2, '2000');
assert.notDeepStrictEqual(r1.e1, r3.e1, 'semente diferente deve mudar o e1');

// fallback: menos de 15 candidatos → pega todos
const f = POPCore.sortear(['x', 'y'], e2, '1000');
assert.strictEqual(f.e1.length, 2, 'menos de 15 candidatos → pega todos os disponíveis');

console.log('OK Task 1 — sorteio determinístico');
