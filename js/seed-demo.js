/* Seed de demonstração (somente BETA local). Popula o painel do gestor com
   dados de exemplo na primeira visita, para demonstrar o sistema preenchido.
   Só roda se o banco local estiver vazio — nunca sobrescreve dados reais. */
(function () {
  if (typeof window === 'undefined' || !window.POPS_LOCAL_MODE) return;
  const KEY = 'pops_db_local';
  let db = null;
  try { db = JSON.parse(localStorage.getItem(KEY)); } catch { db = null; }
  if (db && db.colaboradores && Object.keys(db.colaboradores).length) return;

  const colaboradores = {
    '4471': { nome: 'Ana Paula Souza',   setor: 'UTI Adulto' },
    '3892': { nome: 'Carlos Mendes',     setor: 'Centro Cirúrgico' },
    '5120': { nome: 'Juliana Ferreira',  setor: 'Pronto-Socorro' },
    '2765': { nome: 'Marcos Oliveira',   setor: 'Clínica Médica' },
    '6033': { nome: 'Beatriz Lima',      setor: 'Pediatria' },
    '4408': { nome: 'Roberto Alves',     setor: 'UTI Neonatal' },
  };

  const CODE = { '21': 'POP-ENF-21', '47': 'POP-ENF-47', '43': 'POP-ENF-43', '08': 'POP-ENF-08' };
  const ID   = { '21': 'pop-21', '47': 'pop-47', '43': 'pop-43', '08': 'pop-08' };

  // [matricula, popKey, acertos]  (aprovado se acertos >= 3 de 5)
  const provas = [
    ['4471','21',5], ['4471','47',4], ['4471','43',5], ['4471','08',4],
    ['3892','21',4], ['3892','47',5], ['3892','43',4], ['3892','08',5],
    ['5120','21',5], ['5120','47',3], ['5120','43',4],
    ['2765','21',4], ['2765','08',3],
    ['6033','21',3], ['6033','47',2],
    ['4408','43',4], ['4408','08',3], ['4408','21',2],
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
