/* Seed de demonstração (somente BETA local). Popula o painel do gestor com
   dados de exemplo na primeira visita, para demonstrar o sistema preenchido.
   Só roda se o banco local estiver vazio — nunca sobrescreve dados reais. */
(function () {
  if (typeof window === 'undefined' || !window.POPS_LOCAL_MODE) return;
  const KEY = 'pops_db_local';
  let db = null;
  try { db = JSON.parse(localStorage.getItem(KEY)); } catch { db = null; }
  if (db && db.colaboradores && Object.keys(db.colaboradores).length) return;

  // setores conforme a taxonomia atual (códigos usados no filtro por setor)
  // uti → todos os 11 POPs · cc → 21,47,43,65,60,61 · assistencial → 21,47,43,08,64,65,60,61 · ambulatorio → 21,47,43,08,65,60,61
  const colaboradores = {
    '4471': { nome: 'Ana Paula Souza',   setor: 'uti' },
    '3892': { nome: 'Carlos Mendes',     setor: 'cc' },
    '5120': { nome: 'Juliana Ferreira',  setor: 'assistencial' },
    '2765': { nome: 'Marcos Oliveira',   setor: 'assistencial' },
    '6033': { nome: 'Beatriz Lima',      setor: 'ambulatorio' },
    '4408': { nome: 'Roberto Alves',     setor: 'uti' },
  };

  const CODE = { '21': 'POP-ENF-21', '47': 'POP-ENF-47', '43': 'POP-ENF-43', '08': 'POP-ENF-08',
                 '63': 'POP-ENF-63', '64': 'POP-ENF-64', '65': 'POP-ENF-65', '66': 'POP-ENF-66',
                 '60': 'POP-ENF-60', '61': 'POP-ENF-61', '62': 'POP-ENF-62',
                 '44': 'POP-ENF-44', '45': 'POP-ENF-45', '46': 'POP-ENF-46',
                 '48': 'POP-ENF-48', '49': 'POP-ENF-49', '51': 'POP-ENF-51', '52': 'POP-ENF-52',
                 '53': 'POP-ENF-53', '54': 'POP-ENF-54', '55': 'POP-ENF-55', '56': 'POP-ENF-56',
                 '01': 'POP-ENF-01', '02': 'POP-ENF-02', '03': 'POP-ENF-03', '05': 'POP-ENF-05',
                 '06': 'POP-ENF-06', '07': 'POP-ENF-07', '09': 'POP-ENF-09', '10': 'POP-ENF-10',
                 '11': 'POP-ENF-11', '12': 'POP-ENF-12', '13': 'POP-ENF-13', '14': 'POP-ENF-14',
                 '15': 'POP-ENF-15', '16': 'POP-ENF-16', '17': 'POP-ENF-17', '18': 'POP-ENF-18',
                 '19': 'POP-ENF-19', '20': 'POP-ENF-20', '22': 'POP-ENF-22', '24': 'POP-ENF-24',
                 '25': 'POP-ENF-25', '26': 'POP-ENF-26', '27': 'POP-ENF-27', '29': 'POP-ENF-29',
                 '30': 'POP-ENF-30', '31': 'POP-ENF-31', '32': 'POP-ENF-32', '33': 'POP-ENF-33',
                 '35': 'POP-ENF-35', '36': 'POP-ENF-36', '37': 'POP-ENF-37', '38': 'POP-ENF-38',
                 '39': 'POP-ENF-39', '40': 'POP-ENF-40', '41': 'POP-ENF-41', '42': 'POP-ENF-42',
                 '50': 'POP-ENF-50', '67': 'POP-ENF-67' };
  const ID   = { '21': 'pop-21', '47': 'pop-47', '43': 'pop-43', '08': 'pop-08',
                 '63': 'pop-63', '64': 'pop-64', '65': 'pop-65', '66': 'pop-66',
                 '60': 'pop-60', '61': 'pop-61', '62': 'pop-62',
                 '44': 'pop-44', '45': 'pop-45', '46': 'pop-46',
                 '48': 'pop-48', '49': 'pop-49', '51': 'pop-51', '52': 'pop-52',
                 '53': 'pop-53', '54': 'pop-54', '55': 'pop-55', '56': 'pop-56',
                 '01': 'pop-01', '02': 'pop-02', '03': 'pop-03', '05': 'pop-05',
                 '06': 'pop-06', '07': 'pop-07', '09': 'pop-09', '10': 'pop-10',
                 '11': 'pop-11', '12': 'pop-12', '13': 'pop-13', '14': 'pop-14',
                 '15': 'pop-15', '16': 'pop-16', '17': 'pop-17', '18': 'pop-18',
                 '19': 'pop-19', '20': 'pop-20', '22': 'pop-22', '24': 'pop-24',
                 '25': 'pop-25', '26': 'pop-26', '27': 'pop-27', '29': 'pop-29',
                 '30': 'pop-30', '31': 'pop-31', '32': 'pop-32', '33': 'pop-33',
                 '35': 'pop-35', '36': 'pop-36', '37': 'pop-37', '38': 'pop-38',
                 '39': 'pop-39', '40': 'pop-40', '41': 'pop-41', '42': 'pop-42',
                 '50': 'pop-50', '67': 'pop-67' };

  // [matricula, popKey, acertos]  (aprovado se acertos >= 3 de 5)
  // Etapa 1: 08,21,43,60,64,65 · Etapa 2: 47,61,62,63,66.
  // Provas só de POPs do setor e respeitando o bloqueio (Etapa 2 só após concluir a Etapa 1).
  const provas = [
    // 4471 Ana (UTI): Etapa 1 completa + parte da Etapa 2 (62 e 66 pendentes) → certificado Etapa 1
    ['4471','08',4], ['4471','21',5], ['4471','43',5], ['4471','60',5], ['4471','64',4], ['4471','65',4],
    ['4471','47',5], ['4471','61',4], ['4471','63',5],
    // 3892 Carlos (CC): concluiu as duas etapas → certificado final
    ['3892','21',4], ['3892','43',4], ['3892','60',4], ['3892','65',5], ['3892','47',5], ['3892','61',5],
    // 5120 Juliana (Assistencial): Etapa 1 quase completa (64 reprovado)
    ['5120','21',5], ['5120','43',4], ['5120','08',5], ['5120','60',4], ['5120','65',3], ['5120','64',2],
    // 2765 Marcos (Assistencial): início da Etapa 1 (43 reprovado)
    ['2765','21',4], ['2765','08',3], ['2765','65',4], ['2765','43',2],
    // 6033 Beatriz (Ambulatório): Etapa 1 completa + início da Etapa 2 (61 pendente) → certificado Etapa 1
    ['6033','21',3], ['6033','43',4], ['6033','08',3], ['6033','65',4], ['6033','60',5], ['6033','47',4],
    // 4408 Roberto (UTI): Etapa 1 quase completa (65 reprovado)
    ['4408','43',4], ['4408','08',3], ['4408','21',5], ['4408','64',5], ['4408','60',4], ['4408','65',2],
  ];

  const resultados = {};
  provas.forEach(function (p) {
    const mat = p[0], pk = p[1], ac = p[2];
    resultados[mat + '|' + ID[pk]] = {
      matricula: mat, pop_id: ID[pk], pop_codigo: CODE[pk],
      status: ac >= 3 ? 'aprovado' : 'reprovado',
      score: ac, acertos: ac, total: 5, tentativas: 1, detalhe: null,
    };
  });

  // Critério vigente: Etapa 1 conclui com >= 15 POPs aprovados da área (2 seções de 15 no futuro).
  // Aprova POPs de forma programática para demonstrar a conclusão da Etapa 1 e os certificados.
  const byCodeNum = function (a, b) { return (a.code || '').localeCompare(b.code || '', 'pt-BR', { numeric: true }); };
  function aprovarN(mat, setor, etapa, n) {
    (window.POPS || [])
      .filter(function (p) { return Array.isArray(p.setores) && p.setores.includes(setor) && ((p.etapa || 1) === etapa); })
      .sort(byCodeNum).slice(0, n)
      .forEach(function (p, i) {
        var ac = 3 + (i % 3); // 3..5 acertos
        resultados[mat + '|' + p.id] = {
          matricula: mat, pop_id: p.id, pop_codigo: p.code,
          status: 'aprovado', score: ac, acertos: ac, total: 5, tentativas: 1, detalhe: null,
        };
      });
  }
  aprovarN('4471', 'uti', 1, 15);                       // Ana: Etapa 1 concluída (UTI) → certificado Etapa 1
  aprovarN('3892', 'cc', 1, 15); aprovarN('3892', 'cc', 2, 99); // Carlos: trilha completa (CC) → certificado final
  aprovarN('6033', 'ambulatorio', 1, 15);               // Beatriz: Etapa 1 concluída (Ambulatório)
  // 5120 Juliana, 2765 Marcos e 4408 Roberto ficam em andamento (só as provas manuais acima) → demonstram "faltam X para concluir"

  localStorage.setItem(KEY, JSON.stringify({ colaboradores: colaboradores, resultados: resultados }));
})();

/* Colaborador de TESTE fixo (Jefferson) — login pronto, com os 2 certificados
   concluídos, para demonstrar o BUSCADOR DE POPs já liberado.
   Roda sempre (idempotente): garante o usuário mesmo que o banco local já tenha
   dados de outros testes; só faz merge, nunca apaga nada.
   Login: Nome "Jefferson Tavares" · Matrícula "1000" · Setor "UTI". */
(function ensureTestUser() {
  if (typeof window === 'undefined' || !window.POPS_LOCAL_MODE) return;
  const KEY = 'pops_db_local';
  let db;
  try { db = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { db = {}; }
  db.colaboradores = db.colaboradores || {};
  db.resultados = db.resultados || {};

  const MAT = '1000', SETOR = 'uti';
  db.colaboradores[MAT] = { nome: 'Jefferson Tavares', setor: SETOR };

  const byCodeNum = function (a, b) { return (a.code || '').localeCompare(b.code || '', 'pt-BR', { numeric: true }); };
  function aprovarTodos(etapa) {
    (window.POPS || [])
      .filter(function (p) { return Array.isArray(p.setores) && p.setores.includes(SETOR) && ((p.etapa || 1) === etapa); })
      .sort(byCodeNum)
      .forEach(function (p, i) {
        var ac = 3 + (i % 3); // 3..5 acertos
        db.resultados[MAT + '|' + p.id] = {
          matricula: MAT, pop_id: p.id, pop_codigo: p.code,
          status: 'aprovado', score: ac, acertos: ac, total: 5, tentativas: 1, detalhe: null,
        };
      });
  }
  aprovarTodos(1); // conclui Etapa 1 (1º certificado)
  aprovarTodos(2); // conclui Etapa 2 (2º certificado) → buscador liberado

  localStorage.setItem(KEY, JSON.stringify(db));
})();
