(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.POPS = factory();
}(typeof self !== "undefined" ? self : this, function () {
  const POPS = [
    {
      id:'pop-21', code:'POP-ENF-21', version:'1.5', emission:'15/05/2015',
      title:'Preparo e administração de medicações por via endovenosa',
      executantes:'Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar e normatizar as ações de enfermagem frente à administração de medicamentos por via endovenosa.',
          'Garantir a segurança do paciente minimizando os erros na administração de medicamentos.'
        ],note:'<b>Definição:</b> a via endovenosa (EV) permite administrar medicamentos diretamente na corrente sanguínea, através de acesso venoso periférico ou central, com finalidade de absorção rápida, por dose única ou infusão contínua.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, prontuário físico e eletrônico, caneta, papel, fita durex e rótulo (anexo 1).',
          'Bandeja, copo descartável, seringa, agulha de aspiração, algodão ou gaze, álcool 70%.',
          'Medicamento prescrito, solução para reconstituição/diluição, bomba de infusão (se necessário) e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Os 13 certos',sub:'Conforme o Protocolo Institucional de Segurança na Prescrição, Uso e Administração de Medicamentos:',items:[
          '<b>1. Prescrição correta</b> — nome completo, data de nascimento, nº de atendimento, nº da prescrição, data atualizada.',
          '<b>2. Paciente certo</b> — conferir a pulseira de identificação (nome completo e data de nascimento).',
          '<b>3. Medicamento certo</b> — verificar o prescrito e se o paciente não tem alergia ao composto.',
          '<b>4. Validade certa</b> — observar a data de validade antes de administrar.',
          '<b>5. Forma / apresentação certa.</b>',
          '<b>6. Dose certa.</b>',
          '<b>7. Compatibilidade certa</b> — checar se é compatível com outra medicação em curso.',
          '<b>8. Orientação ao paciente</b> — comunicar qual medicamento e via.',
          '<b>9. Via de administração certa.</b>',
          '<b>10. Horário certo.</b>',
          '<b>11. Tempo de administração certo</b> — infundir no tempo correto (ex.: antibióticos).',
          '<b>12. Ação certa</b> — observar reação adversa durante a administração.',
          '<b>13. Registro certo</b> — registrar no prontuário: hora, dose, via e intercorrências.'
        ]},
        {n:4,h:'Preparo das medicações',items:[
          'Verificar a prescrição atualizada e transcrever por horário, individualmente; preencher o rótulo (anexo 1).',
          'Conferir as medicações dispensadas pela farmácia <b>sem romper a tira lacrada</b>; abrir só as do horário.',
          'Higienizar as mãos e fazer desinfecção da ampola/frasco com álcool 70%. No frasco-ampola, retirar a proteção metálica com algodão ou extrator de grampos e desinfetar o local.',
          'Aspirar o medicamento com <b>agulha 40x12</b> e reconstituir/diluir conforme o guia de diluição.',
          'Trocar a agulha de aspiração pela de administração (<b>25x7 ou 25x8</b>) e identificar a seringa/soro com o rótulo.',
          'Organizar a bandeja de forma individual — nunca medicações de dois pacientes na mesma bandeja.'
        ]},
        {n:5,h:'Administração',items:[
          'Higienizar as mãos, ir ao quarto e paramentar EPI conforme precaução/isolamento.',
          'Identificar-se, explicar o procedimento e conferir os dados na pulseira; questionar alergias.',
          'Verificar a permeabilidade do acesso (sinais de flebite/extravasamento) — se necessário, nova punção.',
          'Verificar compatibilidade com a solução em curso; fechar a válvula de controle de outros fluxos se necessário.',
          'Fazer antissepsia do injetor lateral do equipo, polifix e torneirinha com álcool 70%; certificar-se de não haver bolhas de ar.',
          'Administrar conforme prescrição (gotejamento/tempo, bomba se necessário).',
          'Descartar seringa e agulha <b>sem reencapar</b> na caixa de perfurocortante; higienizar a bandeja.',
          'Checar a administração na prescrição física e eletrônica. Havendo recusa, <b>comunicar o enfermeiro e registrar no prontuário</b>.'
        ]},
        {n:6,h:'Observação',items:[
          'Infusão de hemocomponentes: seguir o POP-ENF-50. Não reencapar a agulha utilizada.',
          'Fazer rodízio de locais de punção; evitar áreas inflamadas, hipotróficas ou com nódulos.',
          'Reações pirogênicas/bacterianas durante infusão EV: calafrios intensos, elevação de temperatura, sudorese, pele fria, hipotensão, cianose de extremidades — observar e comunicar.'
        ],alert:'<b>NUNCA confie.</b> Confira SEMPRE o rótulo da medicação: antes de retirar o frasco da gaveta, antes de aspirar e antes de recolocar no armário.'}
      ],
      pool:[
        {q:'Durante a administração, o técnico percebe que o antibiótico prescrito é incompatível com a solução que já está sendo infundida no mesmo acesso. Qual dos 13 certos está em jogo e qual a conduta correta?',
         o:['Dose certa — reduzir a velocidade de infusão do antibiótico','Compatibilidade certa — fechar a válvula de controle do fluxo da outra solução, se necessário, antes de administrar','Horário certo — aguardar o término da solução e administrar no próximo horário sem comunicar','Via certa — trocar a administração para via oral'],a:1},
        {q:'Sobre o uso de agulhas no preparo, a sequência correta é:',
         o:['Aspirar com 25x7 e administrar com 40x12','Aspirar e administrar com a mesma agulha 40x12, desde que desinfetada','Aspirar com 40x12 e trocar pela agulha 25x7 ou 25x8 para administrar','Aspirar com 13x4,5 e administrar com 40x12'],a:2},
        {q:'No preparo a partir de frasco-ampola, a conduta correta antes da aspiração é:',
         o:['Retirar a proteção metálica com a mão e aspirar imediatamente','Retirar a proteção metálica com auxílio de algodão ou extrator de grampos e fazer a desinfecção do local com álcool 70%','Aquecer o frasco para facilitar a reconstituição','Perfurar a tampa sem desinfecção, pois o conteúdo é estéril'],a:1},
        {q:'O paciente recusa a medicação do horário. A conduta correta do técnico é:',
         o:['Registrar como administrado para não gerar pendência','Insistir até o paciente aceitar','Desprezar a dose e aguardar o próximo horário, sem registro','Comunicar o enfermeiro e registrar a recusa no prontuário eletrônico'],a:3},
        {q:'Durante uma infusão EV, o paciente apresenta calafrios intensos, sudorese, pele fria e hipotensão. Esse quadro sugere:',
         o:['Resposta terapêutica esperada do medicamento','Reação pirogênica ou bacteriana — observar e comunicar','Ansiedade do paciente, sem relevância clínica','Sinal de acesso obstruído'],a:1},
        {q:'Segundo o POP, o rótulo da medicação deve ser conferido obrigatoriamente:',
         o:['Apenas no momento de retirar o frasco da gaveta','Apenas antes de aspirar o medicamento','Antes de retirar da gaveta, antes de aspirar e antes de recolocar no armário','Somente na dupla checagem com o enfermeiro'],a:2},
        {q:'Na organização da bandeja de medicações, é correto afirmar:',
         o:['Medicações de até dois pacientes podem dividir a bandeja, se identificadas','A bandeja deve ser individual por paciente, com copo descartável e algodão/gaze com álcool 70%','A bandeja dispensa desinfecção se for de uso exclusivo do setor','As medicações de todos os leitos do quarto vão juntas para otimizar o tempo'],a:1},
        {q:'Para a infusão de hemocomponentes, o POP-ENF-21 orienta:',
         o:['Seguir as recomendações descritas no POP-ENF-50','Aplicar as mesmas regras de qualquer medicação EV','Administrar somente em bomba de infusão, sem outro requisito','Diluir o hemocomponente conforme o guia de diluição'],a:0}
      ]
    },

    {
      id:'pop-47', code:'POP-ENF-47', version:'1.3', emission:'15/09/2021',
      title:'Cuidados de enfermagem com dreno de tórax',
      executantes:'Enfermeiros e Técnicos de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      sections:[
        {n:1,h:'Objetivo',items:[
          'Evitar infecções do sítio cirúrgico.',
          'Orientar a mensuração e troca do selo d\u2019água.',
          'Orientar e padronizar a troca de curativo.'
        ],note:'<b>Definição:</b> a drenagem torácica consiste num dreno tubular na cavidade pleural ligado a um selo d\u2019água, drenando conteúdo anômalo do espaço pleural e favorecendo a re-expansão pulmonar. <b>COFEN:</b> os cuidados devem ser realizados <b>somente por Enfermeiros</b>, podendo ser auxiliados por Técnicos mediante a SAE.'},
        {n:2,h:'Materiais necessários',sub:'Variam conforme a etapa:',items:[
          '<b>Aspiração contínua:</b> EPI, rede e regulador de vácuo, frasco de drenagem, intermediário de látex, transofix, água destilada 500 ml, SF 0,9% 1500 ml.',
          '<b>Troca de curativo:</b> EPI, bandeja, pacote de curativo, gaze estéril, SF 0,9%, fita microporosa, saco plástico, solução desinfetante.',
          '<b>Troca do selo d\u2019água:</b> EPI, recipiente de descarte, SF 0,9% ou água destilada 500 ml, transofix, caneta, solução desinfetante, fita adesiva.'
        ]},
        {n:3,h:'Montagem do sistema de aspiração',items:[
          '<b>Com regulador de vácuo:</b> frasco coletor único; adicionar água destilada no regulador até a marca de <b>20 cm de H₂O</b> (ou conforme prescrição); adaptar o intermediário e abrir a válvula de aspiração.',
          '<b>Com rede de vácuo padrão:</b> sistema com 2+ frascos e 3 respiros (1 subaquático e 2 não). Frasco A com respiro subaquático conectado ao dreno do paciente; frasco B com 1500 ml de SF/água destilada. O respiro subaquático do frasco B <b>fica aberto para a atmosfera</b>.'
        ]},
        {n:4,h:'Troca do curativo',items:[
          'Realizada pelo Enfermeiro (auxiliado pelo técnico). Higienizar as mãos, paramentar EPI e identificar-se ao paciente.',
          'Retirar o curativo prévio; avaliar sinais flogísticos (<b>dor, rubor, calor, edema, secreção</b>) e as condições da pele (enfisema subcutâneo).',
          'Observar a fixação/sutura do dreno; trocar luvas e abrir o pacote de forma asséptica.',
          'Limpar a ferida com SF 0,9% iniciando pela incisão cirúrgica e depois o tecido adjacente; secar com gaze estéril.',
          'Ocluir a inserção com gaze estéril e fita microporosa; registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:5,h:'Troca do selo d\u2019água',items:[
          'Realizada diariamente <b>às 06h da manhã</b> pelo Enfermeiro, auxiliado pelo técnico.',
          'Conferir dados do paciente; verificar o débito no frasco graduado, <b>desconsiderando os 500 ml do selo</b>.',
          'Observar a oscilação do fluido na extensão (indica bom funcionamento). Clampear o dreno <b>somente no momento da troca</b>.',
          'Lavar o frasco com SF 0,9%/água estéril e preencher com 500 ml; fechar o selo e desclampear.',
          'Fixar fita no ponto zero (nível de água) com nome, data e horário. Trocar o selo sempre que atingir <b>1500 ml</b> de drenagem.'
        ]},
        {n:6,h:'Observações e intercorrências',items:[
          'Não clampear o sistema durante transporte/transferência. Manter o frasco coletor <b>sempre abaixo</b> do ponto de inserção.',
          'A extremidade do sistema não pode ficar fora d\u2019água. Monitorar continuamente o padrão respiratório.',
          '<b>Saída acidental do dreno:</b> comunicar o médico imediatamente, ocluir a ferida com curativo compressivo até reavaliação, auscultar e palpar a região (enfisema subcutâneo).',
          '<b>Desconexão do circuito:</b> comunicar o médico, clampear com pinça sem dente, aguardar avaliação, higienizar a extremidade com álcool 70% e reconectar acompanhado do médico.'
        ]}
      ],
      pool:[
        {q:'Durante o transporte do paciente para um exame, a conduta correta com o sistema de drenagem é:',
         o:['Clampear o dreno para evitar refluxo durante o trajeto','Não clampear e manter o frasco coletor sempre abaixo do ponto de inserção','Elevar o frasco ao nível do tórax para facilitar a oscilação','Desconectar temporariamente o circuito'],a:1},
        {q:'Na mensuração do débito do dreno, o profissional deve:',
         o:['Anotar o volume total do frasco graduado','Desconsiderar os 500 ml referentes ao selo d\u2019água e anotar o restante','Somar 500 ml ao volume observado','Considerar apenas o volume drenado nas últimas 2 horas'],a:1},
        {q:'O dreno saiu acidentalmente durante a mobilização do paciente. A sequência correta é:',
         o:['Reintroduzir o dreno e comunicar na passagem de plantão','Comunicar o médico imediatamente e ocluir a ferida com curativo compressivo até a reavaliação','Clampear o dreno com pinça sem dente e aguardar','Lavar o local com SF 0,9% e aguardar o próximo curativo'],a:1},
        {q:'Houve desconexão acidental do circuito do dreno. Além de comunicar o médico, a conduta inclui:',
         o:['Reconectar imediatamente o mesmo circuito para não perder a pressão','Clampear com pinça sem dente, higienizar a extremidade com álcool 70% e reconectar acompanhado do médico','Ocluir o dreno com gaze e esparadrapo até o dia seguinte','Trocar o selo d\u2019água e religar a aspiração'],a:1},
        {q:'Na montagem com regulador de vácuo, o nível de água destilada deve atingir:',
         o:['10 cm de H₂O','20 cm de H₂O (ou conforme prescrição médica)','50 cm de H₂O','O nível não interfere na aspiração'],a:1},
        {q:'No sistema com rede de vácuo padrão (frascos A e B), é correto afirmar:',
         o:['O respiro subaquático do frasco B deve ficar ocluído','O frasco A recebe 1500 ml de SF e o frasco B conecta ao paciente','O respiro subaquático do frasco B deve ficar aberto para a atmosfera','Os dois frascos devem ficar acima do tórax do paciente'],a:2},
        {q:'Segundo a CTLN/COFEN, os cuidados com dreno de tórax competem:',
         o:['A qualquer membro da equipe de enfermagem, indistintamente','Somente a Enfermeiros, podendo ser auxiliados por Técnicos mediante a SAE','Exclusivamente à equipe médica','Somente a Técnicos de Enfermagem treinados'],a:1},
        {q:'A troca do selo d\u2019água é realizada diariamente às 06h e, adicionalmente, sempre que:',
         o:['O paciente referir dor','A drenagem atingir 1500 ml','A oscilação do fluido estiver presente','Completar 12 horas da última troca'],a:1}
      ]
    },

    {
      id:'pop-43', code:'POP-ENF-43', version:'1.1', emission:'01/10/2020',
      title:'Punção Venosa Periférica',
      executantes:'Auxiliar de Enfermagem, Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as Unidades de Atendimento do HNR',
      sections:[
        {n:1,h:'Objetivo',items:[
          'Fornecer via de acesso venoso para administrar sangue e hemoderivados, líquidos, eletrólitos, contraste, nutrientes e medicamentos.',
          'Coletar sangue.'
        ],note:'<b>Definição:</b> inserção de um cateter intravenoso curto em veia periférica, por meio de punção percutânea.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI: luva de procedimentos, óculos protetores, máscara cirúrgica; bandeja.',
          'Dispositivo de acesso (cateter sobre agulha) de calibre adequado: <b>18, 20, 22 ou 24</b>; scalpe 19, 21 ou 23.',
          'Torniquete (garrote), polifix/torneirinha, equipo (macro ou microgotas).',
          'Soro ou medicação prescrita identificada com rótulo; algodão seco e embebido com <b>clorexidina alcoólica 0,5%</b>.',
          'Papel toalha, curativo transparente, suporte de soro, recipiente para descarte, tricotomizador (se necessário).'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Lavar as mãos; verificar a prescrição (nome, data de nascimento, solução, volume, data/horário) e preencher o rótulo.',
          'Desinfetar o balcão e a bandeja; conectar e preencher o equipo, retirando o ar.',
          'Confirmar identidade do paciente (pulseira/placa) e explicar o procedimento.',
          'Palpar a rede venosa: preferir vasos superficiais de grosso calibre, distantes de articulações, no braço não dominante; sentido distal → proximal.',
          'Aplicar o garrote ~15 cm acima do local. <b>Permanência não deve ultrapassar 60 segundos.</b>',
          'Calçar EPI e fazer antissepsia da pele com <b>clorexidina alcoólica 0,5%</b> (centro para fora ou no sentido do retorno venoso).',
          'Realizar a punção com bisel para cima, em ângulo de <b>10 a 30 graus</b>; observar o retorno venoso, avançar o dispositivo e soltar o garrote.',
          'Conectar o equipo/seringa, testar a permeabilidade (observar soroma) e fixar com curativo transparente.',
          'Identificar (tipo/nº do dispositivo, data, hora, profissional); registrar no prontuário e checar a prescrição.'
        ]},
        {n:4,h:'Coleta de amostra de sangue',items:[
          'Ao evidenciar sangue, retirar o garrote e puxar o êmbolo até o volume necessário.',
          'Comprimir o vaso com algodão seco; <b>não flexionar o braço</b> se a punção for na dobra do cotovelo.',
          'Havendo hematoma: gelo nas primeiras 24h e calor após. Coletar preferencialmente em membro sem terapia IV.'
        ]},
        {n:5,h:'Observações',items:[
          'Se houver dor ou ausência de retorno, retirar o cateter e puncionar outra veia.',
          'Solicitar ajuda a outro profissional <b>após duas tentativas malsucedidas</b>; usar novo cateter a cada tentativa.',
          'Não reintroduzir a agulha no cateter (risco de fragmentação e embolia).',
          'Contraindicações por local: mastectomia, fístula artério-venosa, linfedema, déficit motor/sensitivo, lesões cutâneas.',
          'Limpar o garrote com água e sabão e desinfetar com álcool 70% antes de cada procedimento.',
          'Não realizar punções em distúrbios graves de coagulação.'
        ]},
        {n:6,h:'Prevenção de IRAS e troca de dispositivos',items:[
          'Higienizar as mãos antes e após a inserção e qualquer manipulação.',
          'Cobertura preferencialmente estéril (película transparente). Avaliar diariamente sinais flogísticos.',
          'Película transparente (técnica asséptica): não trocar em período inferior a <b>96h (4 dias)</b>. Cobertura não estéril (micropore): a cada <b>72h</b>.',
          'Equipos de infusão contínua: não trocar em intervalo inferior a 96h. Administração intermitente (ex.: antibióticos): a cada <b>24h</b>. Infusão lipídica: a cada <b>12h</b>.'
        ]}
      ],
      pool:[
        {q:'Ao garrotear o membro para a punção, o tempo máximo de permanência do torniquete é:',
         o:['30 segundos','60 segundos','2 minutos','Até localizar a veia, sem limite'],a:1},
        {q:'A antissepsia da pele antes da punção venosa periférica é feita com:',
         o:['Álcool 70%','Clorexidina alcoólica 0,5%, do centro para fora','Iodopovidona degermante','SF 0,9% com gaze estéril'],a:1},
        {q:'Após a segunda tentativa de punção malsucedida, a conduta preconizada é:',
         o:['Tentar uma terceira vez em veia mais calibrosa','Solicitar ajuda a outro profissional','Usar o mesmo cateter em outro local','Puncionar a veia jugular externa'],a:1},
        {q:'Durante a infusão, o paciente relata dor no local e não há retorno venoso. A conduta correta é:',
         o:['Reduzir o gotejamento e observar','Reposicionar a agulha dentro do mesmo cateter','Retirar o cateter e realizar nova punção em outra veia','Aplicar compressa morna e manter a infusão'],a:2},
        {q:'Sobre a troca da cobertura do cateter, é correto:',
         o:['Película transparente estéril: não trocar antes de 96h; micropore: a cada 72h','Película transparente: a cada 24h; micropore: a cada 48h','Ambas as coberturas: troca diária','A cobertura só é trocada na retirada do cateter'],a:0},
        {q:'Quanto à troca de equipos, o intervalo correto é:',
         o:['Contínuo: 24h · intermitente: 12h · lipídica: 6h','Contínuo: não inferior a 96h · intermitente: 24h · lipídica: 12h','Todos os equipos: troca a cada 72h','Contínuo: 48h · intermitente: 96h · lipídica: 24h'],a:1},
        {q:'É contraindicação para escolha do local de punção venosa periférica:',
         o:['Braço não dominante','Veias do dorso da mão','Membro homolateral à mastectomia ou com fístula artério-venosa','Veia cefálica do antebraço'],a:2},
        {q:'Por que a agulha NÃO deve ser reintroduzida no cateter após o recuo do mandril?',
         o:['Porque prolonga o tempo do procedimento','Pelo risco de fragmentação do cateter e embolia','Porque compromete a esterilidade da agulha','Porque dificulta a fixação do curativo'],a:1}
      ]
    },

    {
      id:'pop-08', code:'POP-ENF-08', version:'1.5', emission:'30/09/2020',
      title:'Verificação de Sinais Vitais',
      executantes:'Equipe de Enfermagem',
      origem:'Unidades de internação e ambulatório',
      sections:[
        {n:1,h:'Objetivo',items:[
          'Avaliar as funções vitais e padronizar a rotina de verificação, garantindo a segurança do paciente.',
          'Definir a intensidade e as características da dor, auxiliando na decisão terapêutica.',
          'Avaliar a resposta do paciente à terapia e identificar possíveis problemas de saúde.'
        ],note:'<b>Definição:</b> sinais vitais são indicadores do estado de saúde que evidenciam alterações do organismo e orientam o diagnóstico inicial e o acompanhamento da evolução clínica.'},
        {n:2,h:'Materiais necessários',items:[
          'Bandeja, termômetro (digital ou infravermelho), relógio com marcador de segundos.',
          'Estetoscópio, esfigmomanômetro, oxímetro, monitor multiparamétrico.',
          'Algodão/gaze, compressa ou papel toalha, solução desinfetante ou álcool 70%, papel e caneta, EPI conforme precaução.'
        ]},
        {n:3,h:'Rotina de aferição',table:{
          cols:['Plantão matutino','Plantão vespertino','Plantão noturno','Diariamente'],
          rows:[['07h30min','13h30min','19h30min','a cada 06 horas']]
        },items:[
          'Sempre que houver necessidade e/ou alterações clínicas.',
          'Sempre após administração de <b>anti-hipertensivos, antitérmicos, betabloqueadores e antiarrítmicos</b>.'
        ]},
        {n:4,h:'Conduta geral',items:[
          'Desinfetar cabos e aparelhos com solução padronizada ou álcool 70% antes do uso; higienizar as mãos e paramentar EPI.',
          'Identificar-se, explicar o procedimento e conferir os dados na pulseira do paciente.',
          'Aferir os sinais vitais; em caso de alterações, comunicar imediatamente o Enfermeiro.',
          'Registrar os sinais vitais no prontuário eletrônico.'
        ]},
        {n:5,h:'Temperatura (Tª)',note:'<b>Definição:</b> equilíbrio entre a produção e a perda de calor do organismo, mediado pelo centro termorregulador. <b>Axilar:</b> ponta metálica na axila em contato com a pele, braço sobre o peito. <b>Infravermelho:</b> aproximar da região frontal/face.',
        table:{
          cols:['Classificação','Temperatura'],
          rows:[['Hipotermia','abaixo de 35,5 °C'],['Afebril','35,5 – 36,9 °C'],['Subfebril','37,0 – 37,7 °C'],['Febre','acima de 37,8 °C'],['Febre moderada','38,0 – 39,0 °C'],['Febre alta','acima de 39,0 °C'],['Febre muito alta','acima de 40,0 °C']],
          hl:[1]
        },items:[
          'Em caso de febre, comunicar o enfermeiro, identificar as medicações administradas e/ou medicar conforme prescrição.'
        ]},
        {n:6,h:'Frequência respiratória (FR)',note:'<b>Definição:</b> ato de inspirar e expirar, promovendo a troca de gases. Alterações: apneia, dispneia, bradpneia, taquipneia, ortopneia, hiper e hipoventilação.',items:[
          'Posicionar o paciente confortável (cabeceira ~45°); colocar a mão no pulso radial <b>como se fosse controlar o pulso</b> e, disfarçadamente, observar os movimentos do tórax por 1 minuto.',
          'Comunicar o enfermeiro na presença de batimento de asas de nariz, tiragem intercostal, esforço respiratório ou cianose.'
        ],table:{
          cols:['Faixa etária','FR (mrpm)'],
          rows:[['Recém-nascido','30 – 60'],['Lactente (6 meses)','30 – 50'],['6 meses a 2 anos','25 – 32'],['Criança','20 – 30'],['Adolescente','16 – 20'],['Adulto','12 – 20']],
          hl:[5]
        }},
        {n:7,h:'Frequência cardíaca (FC)',note:'<b>Definição:</b> onda de expansão e contração das artérias resultante dos batimentos cardíacos; avaliam-se frequência, ritmo e tensão.',items:[
          'Polpas digitais dos dedos indicador e médio sobre a artéria (temporal, carótida ou radial), sem pressão excessiva; contar por <b>1 minuto</b>.',
          '<b>Pulso apical:</b> assepsia das olivas e diafragma com álcool 70%; estetoscópio no hemitórax esquerdo, <b>5º espaço intercostal esquerdo, linha hemiclavicular</b>; auscultar por 1 minuto.',
          'Alterações: bradicardia (pulso lento), taquicardia (acelerado), ritmo forte/fraco e regular, arrítmico.'
        ],table:{
          cols:['Faixa etária','FC (bpm)'],
          rows:[['Lactente (6 meses)','120 – 160'],['Crianças','90 – 140'],['Pré-escolar','80 – 110'],['Adolescente','60 – 90'],['Adulto','60 – 100']],
          hl:[4]
        }},
        {n:8,h:'Pressão arterial (PA)',note:'<b>Definição:</b> força exercida pelo sangue contra a parede do vaso; compreende a verificação sistólica e diastólica.',items:[
          'Aferir antes de hipotensores e após controlar fatores que elevam a leitura (bexiga cheia, dor, ansiedade, esforço).',
          'Paciente confortável, braço ao nível do coração, palma para cima, pés no chão sem cruzar as pernas; manguito <b>2,5 cm acima</b> da artéria braquial; paciente sem conversar.',
          'Insuflar até o desaparecimento do pulso radial <b>+ 30 mmHg</b>; abrir a válvula lentamente.',
          '<b>Sistólica:</b> ausculta do primeiro som (<b>fase I de Korotkoff</b>). <b>Diastólica:</b> desaparecimento do som (<b>fase V</b>); auscultar 20–30 mmHg abaixo para confirmar.',
          '<b>Membros inferiores:</b> artéria pediosa ou tibial posterior; manguito 5 cm acima do maléolo.'
        ],table:{
          cols:['Classificação','Sistólica (mmHg)','Diastólica (mmHg)'],
          rows:[['PA normal','< 120','< 80'],['Pré-hipertensão','120 – 139','80 – 89'],['Hipertensão estágio I','140 – 159','90 – 99'],['Hipertensão estágio II','160 – 179','100 – 109'],['Hipertensão estágio III','≥ 180','110']],
          hl:[0]
        }},
        {n:9,h:'Avaliação da dor',note:'<b>Definição:</b> sinal pessoal e subjetivo; a avaliação deve ser sistemática, registrada e considerar sua multidimensionalidade.',items:[
          'Escalas: <b>EVA</b> (régua de 10 cm, sem graduações, de "nenhuma dor" à "pior dor possível"), <b>numérica</b> (0 a 10) e <b>descritivas verbais</b> (leve, moderada, forte, severa).',
          'Escolher a escala conforme o perfil do paciente e instruí-lo a mensurar a dor.',
          'Questionar localização, frequência, fatores desencadeantes e de melhora/piora.',
          'Comunicar o enfermeiro e medicar conforme prescrição médica ou de enfermagem.'
        ]}
      ],
      pool:[
        {q:'Paciente adulto com temperatura axilar de 37,5 °C é classificado como:',
         o:['Afebril','Subfebril','Febre moderada','Febre alta'],a:1},
        {q:'Na aferição da PA, identifica-se a pressão sistólica e a diastólica, respectivamente:',
         o:['Fase V e fase I de Korotkoff','Primeiro som auscultado (fase I) e desaparecimento do som (fase V)','Início da insuflação e abertura da válvula','Desaparecimento do pulso radial e retorno do pulso'],a:1},
        {q:'PA aferida de 150 x 95 mmHg em adulto corresponde a:',
         o:['Pré-hipertensão','Hipertensão estágio I','Hipertensão estágio II','PA normal para idosos'],a:1},
        {q:'Por que a FR é contada com a mão no pulso radial do paciente, "como se fosse controlar o pulso"?',
         o:['Para aferir FC e FR simultaneamente com mais precisão','Para disfarçar a contagem, evitando que o paciente altere voluntariamente o padrão respiratório','Para estabilizar o braço e facilitar a visualização','Porque a FR só pode ser aferida com contato físico'],a:1},
        {q:'A ausculta do pulso apical é realizada em qual referência anatômica?',
         o:['2º espaço intercostal direito, linha paraesternal','5º espaço intercostal esquerdo, linha hemiclavicular','4º espaço intercostal esquerdo, linha axilar anterior','Fúrcula esternal'],a:1},
        {q:'São valores normais para um adulto em repouso:',
         o:['FR 12–20 mrpm e FC 60–100 bpm','FR 16–28 mrpm e FC 50–80 bpm','FR 20–30 mrpm e FC 90–140 bpm','FR 8–12 mrpm e FC 100–120 bpm'],a:0},
        {q:'Além dos horários de rotina (07h30, 13h30, 19h30 e a cada 6h), os sinais vitais devem ser obrigatoriamente verificados:',
         o:['Somente se o paciente solicitar','Após administração de anti-hipertensivos, antitérmicos, betabloqueadores e antiarrítmicos','Apenas em pacientes em precaução de contato','A cada visita do acompanhante'],a:1},
        {q:'Antes de aferir a PA, deve-se controlar fatores que elevam artificialmente a leitura. São exemplos:',
         o:['Jejum prolongado e sono','Bexiga cheia, dor, ansiedade e esforço físico','Uso de antitérmico na última hora','Posição supina e braço apoiado'],a:1},
        {q:'Sobre a Escala Visual Analógica (EVA), é correto afirmar:',
         o:['É uma régua numerada de 0 a 10','É uma régua de 10 cm sem graduações, entre "nenhuma dor" e "a pior dor possível"','Utiliza descritores verbais como leve e severa','É aplicável somente em pediatria'],a:1}
      ]
    }
  ];
  return POPS;
}));
