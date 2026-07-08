const assert = require('assert');
const PortalCore = require('../js/portal-core.js');

// normTxt: minúsculas e sem acentos
assert.strictEqual(PortalCore.normTxt('Órtese e PRÓTESE'), 'ortese e protese');

const pops = [{ id: 'pop-01', code: 'POP-ENF-01', title: 'Higiene das mãos', sections: [{ h: 'Objetivo', items: ['Reduzir infecção'] }] }];
const regimentos = [{ id: 'doc-reg-01', code: 'REG-01', title: 'Regimento interno da enfermagem', sections: [] }];
const cursos = [{ id: 'curso-nr32', code: 'CURSO-NR32', titulo: 'NR-32 Básico', modulos: [{ id: 'curso-nr32-m1', title: 'Módulo 1', sections: [], pool: [] }] }];
const cols = [
  { kind: 'pop', items: pops },
  { kind: 'regimento', items: regimentos },
  { kind: 'curso', items: cursos },
];

// docById acha em cada coleção
assert.strictEqual(PortalCore.docById(cols, 'pop-01').kind, 'pop');
assert.strictEqual(PortalCore.docById(cols, 'doc-reg-01').kind, 'regimento');
const m = PortalCore.docById(cols, 'curso-nr32-m1');
assert.strictEqual(m.kind, 'curso');
assert.strictEqual(m.doc.id, 'curso-nr32-m1');
assert.strictEqual(m.curso.id, 'curso-nr32');
assert.strictEqual(PortalCore.docById(cols, 'nao-existe'), null);

// searchDocs: <2 letras → []; rank título > código > conteúdo; acento-insensível
assert.deepStrictEqual(PortalCore.searchDocs(pops, 'h'), []);
assert.strictEqual(PortalCore.searchDocs(pops, 'higiene')[0].id, 'pop-01');
assert.strictEqual(PortalCore.searchDocs(pops, 'POP-ENF')[0].id, 'pop-01');
assert.strictEqual(PortalCore.searchDocs(pops, 'infecção').length, 1);
assert.strictEqual(PortalCore.searchDocs(regimentos, 'REGIMENTO').length, 1);
assert.strictEqual(PortalCore.searchDocs([], 'qualquer').length, 0);

console.log('OK portal-core — normTxt, docById e searchDocs');
