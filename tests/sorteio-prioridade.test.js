const assert = require('assert');
const POPCore = require('../js/core.js');

// 20 candidatos por etapa; os 8 primeiros são "aptos" (dificuldade suficiente).
const idsE1 = Array.from({ length: 20 }, (_, i) => 'a' + i);
const idsE2 = Array.from({ length: 20 }, (_, i) => 'b' + i);
const aptE1 = idsE1.slice(0, 8); // a0..a7
const aptE2 = idsE2.slice(0, 8); // b0..b7

// --- Prioridade: com >= n aptos, o sorteio de n só pega aptos ---
const aptSet1 = new Set(aptE1);
for (const seed of ['1000', '54585', 'xyz']) {
  const s = POPCore.sortear(idsE1, idsE2, seed, 8, aptE1, aptE2);
  assert.strictEqual(s.e1.length, 8, 'e1 tem n=8');
  assert.ok(s.e1.every((id) => aptSet1.has(id)), 'com 8 aptos, sorteio de 8 só traz aptos (' + seed + ')');
  assert.strictEqual(new Set(s.e1).size, 8, 'sem repetição');
}

// --- Menos aptos que n: usa todos os aptos e completa com o resto ---
const poucosAptos = idsE1.slice(0, 3); // só 3 aptos
const s2 = POPCore.sortear(idsE1, idsE2, '1000', 10, poucosAptos, aptE2);
assert.strictEqual(s2.e1.length, 10, 'completa até n mesmo com poucos aptos');
const aptNoResultado = s2.e1.filter((id) => poucosAptos.includes(id)).length;
assert.strictEqual(aptNoResultado, 3, 'todos os aptos disponíveis entram antes de qualquer não-apto');

// --- Determinismo: mesma semente + mesmos aptos → mesmo resultado ---
const A = POPCore.sortear(idsE1, idsE2, '777', 8, aptE1, aptE2);
const B = POPCore.sortear(idsE1, idsE2, '777', 8, aptE1, aptE2);
assert.deepStrictEqual(A, B, 'determinístico por semente');

// --- Retrocompatível: sem aptSets, comportamento antigo (embaralho simples) ---
const semApt = POPCore.sortear(idsE1, idsE2, '1000', 15);
assert.strictEqual(semApt.e1.length, 15, 'sem aptSet, corta em n');
assert.strictEqual(new Set(semApt.e1).size, 15, 'sem aptSet, sem repetição');

// --- Aptos ainda são sorteados entre si (não é ordem fixa) ---
const r1 = POPCore.sortear(idsE1, idsE2, 'aaa', 5, aptE1, aptE2).e1;
const r2 = POPCore.sortear(idsE1, idsE2, 'bbb', 5, aptE1, aptE2).e1;
assert.notDeepStrictEqual(r1, r2, 'sementes diferentes → seleção de aptos diferente');

console.log('OK sorteio — prioriza POPs aptos, completa quando faltam, determinístico e retrocompatível');
