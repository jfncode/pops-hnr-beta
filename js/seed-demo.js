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
                 '48': 'POP-ENF-48', '49': 'POP-ENF-49', '51': 'POP-ENF-51', '52': 'POP-ENF-52' };
  const ID   = { '21': 'pop-21', '47': 'pop-47', '43': 'pop-43', '08': 'pop-08',
                 '63': 'pop-63', '64': 'pop-64', '65': 'pop-65', '66': 'pop-66',
                 '60': 'pop-60', '61': 'pop-61', '62': 'pop-62',
                 '44': 'pop-44', '45': 'pop-45', '46': 'pop-46',
                 '48': 'pop-48', '49': 'pop-49', '51': 'pop-51', '52': 'pop-52' };

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

  localStorage.setItem(KEY, JSON.stringify({ colaboradores: colaboradores, resultados: resultados }));
})();
