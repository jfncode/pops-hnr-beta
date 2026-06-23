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
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
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
         o:['Dose certa — reduzir a velocidade de infusão do antibiótico','Compatibilidade certa — fechar a válvula de controle do fluxo da outra solução, se necessário, antes de administrar','Horário certo — aguardar o término da solução e administrar no próximo horário sem comunicar','Via certa — trocar a administração para via oral'],a:1,d:3},
        {q:'Sobre o uso de agulhas no preparo, a sequência correta é:',
         o:['Aspirar com 25x7 e administrar com 40x12','Aspirar e administrar com a mesma agulha 40x12, desde que desinfetada','Aspirar com 40x12 e trocar pela agulha 25x7 ou 25x8 para administrar','Aspirar com 13x4,5 e administrar com 40x12'],a:2,d:2},
        {q:'No preparo a partir de frasco-ampola, a conduta correta antes da aspiração é:',
         o:['Retirar a proteção metálica com a mão e aspirar imediatamente','Retirar a proteção metálica com auxílio de algodão ou extrator de grampos e fazer a desinfecção do local com álcool 70%','Aquecer o frasco para facilitar a reconstituição','Perfurar a tampa sem desinfecção, pois o conteúdo é estéril'],a:1,d:2},
        {q:'O paciente recusa a medicação do horário. A conduta correta do técnico é:',
         o:['Registrar como administrado para não gerar pendência','Insistir até o paciente aceitar','Desprezar a dose e aguardar o próximo horário, sem registro','Comunicar o enfermeiro e registrar a recusa no prontuário eletrônico'],a:3,d:2},
        {q:'Durante uma infusão EV, o paciente apresenta calafrios intensos, sudorese, pele fria e hipotensão. Esse quadro sugere:',
         o:['Resposta terapêutica esperada do medicamento','Reação pirogênica ou bacteriana — observar e comunicar','Ansiedade do paciente, sem relevância clínica','Sinal de acesso obstruído'],a:1,d:3},
        {q:'Segundo o POP, o rótulo da medicação deve ser conferido obrigatoriamente:',
         o:['Apenas no momento de retirar o frasco da gaveta','Apenas antes de aspirar o medicamento','Antes de retirar da gaveta, antes de aspirar e antes de recolocar no armário','Somente na dupla checagem com o enfermeiro'],a:2,d:2},
        {q:'Na organização da bandeja de medicações, é correto afirmar:',
         o:['Medicações de até dois pacientes podem dividir a bandeja, se identificadas','A bandeja deve ser individual por paciente, com copo descartável e algodão/gaze com álcool 70%','A bandeja dispensa desinfecção se for de uso exclusivo do setor','As medicações de todos os leitos do quarto vão juntas para otimizar o tempo'],a:1,d:2},
        {q:'Para a infusão de hemocomponentes, o POP-ENF-21 orienta:',
         o:['Seguir as recomendações descritas no POP-ENF-50','Aplicar as mesmas regras de qualquer medicação EV','Administrar somente em bomba de infusão, sem outro requisito','Diluir o hemocomponente conforme o guia de diluição'],a:0,d:2}
      ]
    },

    {
      id:'pop-47', code:'POP-ENF-47', version:'1.3', emission:'15/09/2021',
      title:'Cuidados de enfermagem com dreno de tórax',
      executantes:'Enfermeiros e Técnicos de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
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
         o:['Clampear o dreno para evitar refluxo durante o trajeto','Não clampear e manter o frasco coletor sempre abaixo do ponto de inserção','Elevar o frasco ao nível do tórax para facilitar a oscilação','Desconectar temporariamente o circuito'],a:1,d:3},
        {q:'Na mensuração do débito do dreno, o profissional deve:',
         o:['Anotar o volume total do frasco graduado','Desconsiderar os 500 ml referentes ao selo d\u2019água e anotar o restante','Somar 500 ml ao volume observado','Considerar apenas o volume drenado nas últimas 2 horas'],a:1,d:3},
        {q:'O dreno saiu acidentalmente durante a mobilização do paciente. A sequência correta é:',
         o:['Reintroduzir o dreno e comunicar na passagem de plantão','Comunicar o médico imediatamente e ocluir a ferida com curativo compressivo até a reavaliação','Clampear o dreno com pinça sem dente e aguardar','Lavar o local com SF 0,9% e aguardar o próximo curativo'],a:1,d:3},
        {q:'Houve desconexão acidental do circuito do dreno. Além de comunicar o médico, a conduta inclui:',
         o:['Reconectar imediatamente o mesmo circuito para não perder a pressão','Clampear com pinça sem dente, higienizar a extremidade com álcool 70% e reconectar acompanhado do médico','Ocluir o dreno com gaze e esparadrapo até o dia seguinte','Trocar o selo d\u2019água e religar a aspiração'],a:1,d:3},
        {q:'Na montagem com regulador de vácuo, o nível de água destilada deve atingir:',
         o:['10 cm de H₂O','20 cm de H₂O (ou conforme prescrição médica)','50 cm de H₂O','O nível não interfere na aspiração'],a:1,d:3},
        {q:'No sistema com rede de vácuo padrão (frascos A e B), é correto afirmar:',
         o:['O respiro subaquático do frasco B deve ficar ocluído','O frasco A recebe 1500 ml de SF e o frasco B conecta ao paciente','O respiro subaquático do frasco B deve ficar aberto para a atmosfera','Os dois frascos devem ficar acima do tórax do paciente'],a:2,d:3},
        {q:'Segundo a CTLN/COFEN, os cuidados com dreno de tórax competem:',
         o:['A qualquer membro da equipe de enfermagem, indistintamente','Somente a Enfermeiros, podendo ser auxiliados por Técnicos mediante a SAE','Exclusivamente à equipe médica','Somente a Técnicos de Enfermagem treinados'],a:1,d:3},
        {q:'A troca do selo d\u2019água é realizada diariamente às 06h e, adicionalmente, sempre que:',
         o:['O paciente referir dor','A drenagem atingir 1500 ml','A oscilação do fluido estiver presente','Completar 12 horas da última troca'],a:1,d:3}
      ]
    },

    {
      id:'pop-43', code:'POP-ENF-43', version:'1.1', emission:'01/10/2020',
      title:'Punção Venosa Periférica',
      executantes:'Auxiliar de Enfermagem, Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as Unidades de Atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
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
         o:['30 segundos','60 segundos','2 minutos','Até localizar a veia, sem limite'],a:1,d:2},
        {q:'A antissepsia da pele antes da punção venosa periférica é feita com:',
         o:['Álcool 70%','Clorexidina alcoólica 0,5%, do centro para fora','Iodopovidona degermante','SF 0,9% com gaze estéril'],a:1,d:2},
        {q:'Após a segunda tentativa de punção malsucedida, a conduta preconizada é:',
         o:['Tentar uma terceira vez em veia mais calibrosa','Solicitar ajuda a outro profissional','Usar o mesmo cateter em outro local','Puncionar a veia jugular externa'],a:1,d:2},
        {q:'Durante a infusão, o paciente relata dor no local e não há retorno venoso. A conduta correta é:',
         o:['Reduzir o gotejamento e observar','Reposicionar a agulha dentro do mesmo cateter','Retirar o cateter e realizar nova punção em outra veia','Aplicar compressa morna e manter a infusão'],a:2,d:3},
        {q:'Sobre a troca da cobertura do cateter, é correto:',
         o:['Película transparente estéril: não trocar antes de 96h; micropore: a cada 72h','Película transparente: a cada 24h; micropore: a cada 48h','Ambas as coberturas: troca diária','A cobertura só é trocada na retirada do cateter'],a:0,d:3},
        {q:'Quanto à troca de equipos, o intervalo correto é:',
         o:['Contínuo: 24h · intermitente: 12h · lipídica: 6h','Contínuo: não inferior a 96h · intermitente: 24h · lipídica: 12h','Todos os equipos: troca a cada 72h','Contínuo: 48h · intermitente: 96h · lipídica: 24h'],a:1,d:3},
        {q:'É contraindicação para escolha do local de punção venosa periférica:',
         o:['Braço não dominante','Veias do dorso da mão','Membro homolateral à mastectomia ou com fístula artério-venosa','Veia cefálica do antebraço'],a:2,d:2},
        {q:'Por que a agulha NÃO deve ser reintroduzida no cateter após o recuo do mandril?',
         o:['Porque prolonga o tempo do procedimento','Pelo risco de fragmentação do cateter e embolia','Porque compromete a esterilidade da agulha','Porque dificulta a fixação do curativo'],a:1,d:3}
      ]
    },

    {
      id:'pop-08', code:'POP-ENF-08', version:'1.5', emission:'30/09/2020',
      title:'Verificação de Sinais Vitais',
      executantes:'Equipe de Enfermagem',
      origem:'Unidades de internação e ambulatório',
      setores:['assistencial','uti','ambulatorio'],
      etapa:1,
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
        {q:'Paciente adulto evolui com temperatura axilar de 38,5 °C fora do horário de rotina. A classificação e a conduta corretas são:',
         o:['Subfebril — apenas reaferir em 6 horas','Febre moderada — comunicar o enfermeiro e medicar conforme prescrição','Febre alta — medicar imediatamente sem comunicar','Afebril — nenhuma conduta necessária'],a:1,d:2},
        {q:'Na aferição da PA, identifica-se a pressão sistólica e a diastólica, respectivamente:',
         o:['Fase V e fase I de Korotkoff','Primeiro som auscultado (fase I) e desaparecimento do som (fase V)','Início da insuflação e abertura da válvula','Desaparecimento do pulso radial e retorno do pulso'],a:1,d:2},
        {q:'PA aferida de 150 x 95 mmHg em adulto corresponde a:',
         o:['Pré-hipertensão','Hipertensão estágio I','Hipertensão estágio II','PA normal para idosos'],a:1,d:2},
        {q:'Por que a FR é contada com a mão no pulso radial do paciente, "como se fosse controlar o pulso"?',
         o:['Para aferir FC e FR simultaneamente com mais precisão','Para disfarçar a contagem, evitando que o paciente altere voluntariamente o padrão respiratório','Para estabilizar o braço e facilitar a visualização','Porque a FR só pode ser aferida com contato físico'],a:1,d:3},
        {q:'A ausculta do pulso apical é realizada em qual referência anatômica?',
         o:['2º espaço intercostal direito, linha paraesternal','5º espaço intercostal esquerdo, linha hemiclavicular','4º espaço intercostal esquerdo, linha axilar anterior','Fúrcula esternal'],a:1,d:2},
        {q:'São valores normais para um adulto em repouso:',
         o:['FR 12–20 mrpm e FC 60–100 bpm','FR 16–28 mrpm e FC 50–80 bpm','FR 20–30 mrpm e FC 90–140 bpm','FR 8–12 mrpm e FC 100–120 bpm'],a:0,d:2},
        {q:'Além dos horários de rotina (07h30, 13h30, 19h30 e a cada 6h), os sinais vitais devem ser obrigatoriamente verificados:',
         o:['Somente se o paciente solicitar','Após administração de anti-hipertensivos, antitérmicos, betabloqueadores e antiarrítmicos','Apenas em pacientes em precaução de contato','A cada visita do acompanhante'],a:1,d:2},
        {q:'Antes de aferir a PA, deve-se controlar fatores que elevam artificialmente a leitura. São exemplos:',
         o:['Jejum prolongado e sono','Bexiga cheia, dor, ansiedade e esforço físico','Uso de antitérmico na última hora','Posição supina e braço apoiado'],a:1,d:2},
        {q:'Sobre a Escala Visual Analógica (EVA), é correto afirmar:',
         o:['É uma régua numerada de 0 a 10','É uma régua de 10 cm sem graduações, entre "nenhuma dor" e "a pior dor possível"','Utiliza descritores verbais como leve e severa','É aplicável somente em pediatria'],a:1,d:2}
      ]
    },

    {
      id:'pop-63', code:'POP-ENF-63', version:'1.3', emission:'16/10/2015',
      title:'Aspiração de TOT e TQT em ventilação mecânica — sistema fechado',
      executantes:'Equipe de enfermagem, fisioterapia e medicina',
      origem:'UTI',
      setores:['uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Remover secreções traqueais de pacientes mecanicamente ventilados que não devem ser desconectados do ventilador mecânico (VM).'
        ],note:'<b>Indicação do sistema fechado:</b> quando o PEEP estiver acima de 10 cmH₂O e/ou a FiO₂ for maior ou igual a 60%, e em pacientes com precaução por aerossóis (tuberculose, varicela, sarampo, H1N1, COVID-19).'},
        {n:2,h:'Materiais e equipamentos necessários',items:[
          'EPI (equipamentos de proteção individual).',
          'Dispositivo de oscilação oral de alta frequência (Shaker ou Flutter).',
          'Água destilada e solução fisiológica.',
          'Rede de vácuo funcionante, frasco de aspiração e intermediário de látex.',
          'Oxímetro, estetoscópio e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Organizar os materiais, encaminhar-se ao leito e testar a rede de vácuo antes de iniciar o procedimento.',
          'Higienizar as mãos (Protocolo Institucional de Higiene de Mãos) e paramentar os EPIs conforme a precaução/isolamento do paciente.',
          'Identificar-se ao paciente e ao acompanhante, explicar o procedimento e conferir os dados (nome completo e data de nascimento) na pulseira, confirmando-os verbalmente.',
          'Higienizar o estetoscópio com a solução desinfetante padronizada e realizar ausculta pulmonar antes do procedimento, para identificar ruídos adventícios.',
          'Abrir e testar o funcionamento do sistema de aspiração.',
          'Setar no ventilador mecânico a <b>FiO₂ a 100%</b> ou o modo aspiração (se disponível), para elevar o conteúdo arterial de O₂ antes do procedimento; desligar temporariamente o alarme do VM.',
          'Conectar a ponta do sistema de aspiração fechado ao látex de aspiração e girar a trava de segurança para abrir o sistema de vácuo.',
          'Introduzir a sonda no tubo orotraqueal, nasotraqueal ou na traqueostomia; ao perceber resistência (carina), recuá-la <b>1 a 2 cm</b> e então liberar o vácuo apertando o clampe, com movimentos lentos de vai e vem, retirando lentamente a sonda. <b>Não ultrapassar 10 segundos</b>, pelo risco de hipoxemia.',
          'Adaptar a seringa de 20 ml (com água destilada ou solução fisiológica) no local recomendado e lavar a sonda injetando e sugando ao mesmo tempo, entre as aspirações e ao final do procedimento.',
          'Repetir o procedimento quantas vezes forem necessárias; desconectar a seringa e mantê-la protegida em seu invólucro estéril.',
          'Travar a válvula de segurança, desconectar o vácuo e colocar a tampa protetora do sistema de aspiração fechado.',
          'Em seguida, realizar a aspiração naso e orofaríngea conforme o POP-ENF-60.',
          'Desligar o sistema de vácuo; recolher o que deve ser guardado e desprezar o restante do material no lixo apropriado.',
          'Higienizar as mãos e registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:4,h:'Observações',items:[
          'Monitorizar os sinais vitais e os sinais de desconforto respiratório antes, durante e após o procedimento.',
          'Certificar-se de que a FiO₂ no VM retornou ao valor anterior.',
          'Não se recomenda injetar soro fisiológico ou água destilada pelo tubo/traqueostomia, nem ambuzar o paciente, pelo possível deslocamento de bactérias do biofilme da via aérea artificial para o trato respiratório inferior. Se necessário, instilar 2 ml de solução seguida de aspiração, para facilitar a introdução da sonda, estimular a tosse e remover secreções espessas ("rolhas").',
          'Realizar o procedimento após a fisioterapia respiratória e/ou sempre que houver sinais de acúmulo de secreções.'
        ],alert:'<b>Não ultrapassar 10 segundos</b> de aspiração contínua, pelo risco de hipoxemia. Mantenha a monitorização da saturação durante todo o procedimento.'}
      ],
      pool:[
        {q:'O sistema fechado de aspiração é indicado, entre outras situações, quando:',
         o:['O PEEP estiver acima de 10 cmH₂O e/ou a FiO₂ for ≥ 60%, ou houver precaução por aerossóis','O paciente estiver em ar ambiente, sem ventilação mecânica','A secreção for escassa e fluida','Não houver risco de hipoxemia'],a:0,d:3},
        {q:'O tempo máximo de aspiração contínua, pelo risco de hipoxemia, é de:',
         o:['30 segundos','20 segundos','10 segundos','Não há limite, até remover toda a secreção'],a:2,d:3},
        {q:'Ao introduzir a sonda e perceber resistência (carina), a conduta correta é:',
         o:['Forçar a progressão da sonda até vencer a resistência','Recuar a sonda 1 a 2 cm e só então liberar o vácuo, retirando-a lentamente','Liberar o vácuo imediatamente na carina, sem recuar','Retirar a sonda e reiniciar com outra de maior calibre'],a:1,d:3},
        {q:'Antes do procedimento, para elevar o conteúdo arterial de O₂, deve-se:',
         o:['Reduzir a FiO₂ para 21%','Setar a FiO₂ a 100% (ou modo aspiração, se disponível)','Desligar o ventilador mecânico','Hiperinsuflar manualmente com o ambú'],a:1,d:3},
        {q:'Sobre a instilação de soro fisiológico pelo tubo/traqueostomia, o POP orienta:',
         o:['Instilar rotineiramente 10 ml antes de cada aspiração','Não é recomendada de rotina; se necessário, instilar apenas 2 ml seguida de aspiração','Substituir a aspiração pela instilação contínua','Ambuzar o paciente após cada instilação'],a:1,d:3},
        {q:'A lavagem da sonda entre as aspirações e ao final é feita com:',
         o:['Seringa de 20 ml com água destilada ou solução fisiológica, injetando e sugando ao mesmo tempo','Álcool 70% sob pressão','Gaze estéril embebida em clorexidina','Apenas ar comprimido'],a:0,d:3},
        {q:'Imediatamente antes da aspiração, além de higienizar as mãos e paramentar, deve-se:',
         o:['Realizar ausculta pulmonar para identificar ruídos adventícios','Aspirar primeiro a orofaringe','Desinflar o balonete (cuff) do tubo','Desconectar o paciente do ventilador'],a:0,d:3},
        {q:'Após concluir a aspiração pelo sistema fechado, o profissional deve:',
         o:['Encerrar o procedimento sem outras aspirações','Realizar a aspiração naso e orofaríngea conforme o POP-ENF-60','Reabrir imediatamente o sistema de vácuo','Manter a FiO₂ em 100% pelas próximas horas'],a:1,d:3}
      ]
    },

    {
      id:'pop-64', code:'POP-ENF-64', version:'1.1', emission:'29/04/2022',
      title:'Transporte e acomodação do corpo no necrotério',
      executantes:'Equipe de enfermagem',
      origem:'Todas as unidades de internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o procedimento de transporte e acomodação do corpo no necrotério.',
          'Garantir a adequada conservação do corpo até que seja providenciada a sua entrega.'
        ]},
        {n:2,h:'Materiais necessários',items:[
          'EPI (equipamentos de proteção individual).',
          'Maca de transporte hidráulica e maca de transporte simples.',
          'Mesa para acomodação do corpo no necrotério e câmara mortuária.',
          'Folha de identificação do paciente e rampa para elevação da maca.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Preparar o corpo conforme o POP-ENF-37 (Preparo e identificação do corpo pós-morte).',
          'Colocar um lençol na maca de transporte e transferir o corpo do leito para a maca.',
          'Definir o destino: <b>maca hidráulica</b> para a gaveta <b>inferior</b> da câmara mortuária; <b>maca simples</b> para a gaveta <b>superior</b>.',
          'Transportar o corpo até o necrotério.'
        ]},
        {n:4,h:'Acomodação na mesa do necrotério',items:[
          'Ao chegar ao necrotério, colocar a maca ao lado da mesa, elevá-la até o nível máximo e transferir o corpo.',
          'Fixar a folha de identificação do paciente na mesa.',
          'Recolher o lençol da maca de transporte e descartá-lo no hamper, na parte externa do necrotério.',
          'Deixar o ambiente organizado; levar a maca ao local de origem e comunicar a zeladoria para a higienização.',
          'Higienizar as mãos (Protocolo Institucional de Higiene de Mãos).'
        ]},
        {n:5,h:'Acomodação na gaveta superior da câmara mortuária',items:[
          'Ao chegar ao necrotério, colocar a maca de transporte simples na rampa para elevação da maca.',
          'Retirar a parte superior móvel da gaveta da câmara mortuária, colocá-la na mesa de transporte e deixá-la ao lado da maca.',
          'Transferir o corpo do paciente.',
          'Colocar a mesa de transporte ao nível da gaveta da câmara mortuária e empurrar.',
          'Após acomodar o corpo, fixar a folha de identificação do paciente na parte externa da câmara mortuária.',
          'Recolher o lençol e descartá-lo no hamper, na parte externa do necrotério; deixar o ambiente organizado.',
          'Levar a maca ao local de origem, comunicar a zeladoria para a higienização e higienizar as mãos.'
        ]},
        {n:6,h:'Acomodação na gaveta inferior da câmara mortuária',items:[
          'Ao chegar ao necrotério, colocar a maca de transporte hidráulica ao lado da gaveta inferior e baixá-la ao nível mínimo.',
          'Destravar a gaveta e puxá-la totalmente para fora.',
          'Colocar o corpo e empurrar a gaveta.',
          'Após acomodar o corpo, fixar a folha de identificação do paciente na parte externa da câmara mortuária.',
          'Recolher o lençol e descartá-lo no hamper, na parte externa do necrotério; deixar o ambiente organizado.',
          'Levar a maca ao local de origem, comunicar a zeladoria para a higienização e higienizar as mãos.'
        ],note:'<b>Atenção:</b> a parte móvel da gaveta pode ser puxada para fora da parte fixa, mas é necessário que um funcionário fique apoiando durante a transferência do corpo.'},
        {n:7,h:'Observações',items:[
          'Atentar para a temperatura interna do necrotério antes de transferir o corpo para a mesa — manter a sala refrigerada, com o ar-condicionado ligado, entre <b>15 °C e 18 °C</b>.',
          'Atentar para a temperatura da câmara mortuária antes de colocar o corpo — mantê-la entre <b>2 °C e 6 °C</b>, conforme orientação do fabricante (Cozil).',
          'Para a adequada acomodação do corpo, conforme o diagnóstico e o tempo de espera, seguir o quadro abaixo.'
        ],table:{
          cols:['Situação','Acomodação'],
          rows:[
            ['Óbito de outros municípios','Direto na câmara mortuária'],
            ['Pessoa não identificada ou sem registro de familiar','Direto na câmara mortuária'],
            ['Óbito por Covid-19, febre amarela e meningite','Direto na câmara mortuária'],
            ['Outras patologias — espera de até 6 horas','Na mesa do necrotério'],
            ['Outras patologias — espera maior que 6 horas','Direto na câmara mortuária'],
            ['Óbitos ocorridos no período noturno','Direto na câmara mortuária']
          ]
        }}
      ],
      pool:[
        {q:'Antes do transporte ao necrotério, o corpo deve ser preparado conforme qual POP?',
         o:['POP-ENF-08 (Sinais vitais)','POP-ENF-37 (Preparo e identificação do corpo pós-morte)','POP-ENF-60 (Aspiração)','POP-ENF-50 (Hemocomponentes)'],a:1,d:2},
        {q:'A temperatura da câmara mortuária, conforme orientação do fabricante, deve ser mantida entre:',
         o:['2 °C e 6 °C','15 °C e 18 °C','0 °C e 2 °C','8 °C e 12 °C'],a:0,d:2},
        {q:'A sala do necrotério, antes de transferir o corpo para a mesa, deve permanecer refrigerada entre:',
         o:['2 °C e 6 °C','10 °C e 14 °C','15 °C e 18 °C','20 °C e 24 °C'],a:2,d:2},
        {q:'A maca de transporte hidráulica é utilizada para acomodar o corpo na:',
         o:['Mesa do necrotério','Gaveta superior da câmara mortuária','Gaveta inferior da câmara mortuária','Rampa de elevação'],a:2,d:2},
        {q:'Em caso de óbito por Covid-19, febre amarela ou meningite, o corpo deve ser:',
         o:['Mantido na mesa do necrotério por 6 horas','Acomodado direto na câmara mortuária','Liberado imediatamente à família','Acomodado na gaveta superior, sem identificação'],a:1,d:2},
        {q:'No óbito por outras patologias com espera de até 6 horas, a acomodação é:',
         o:['Direto na câmara mortuária','Na mesa do necrotério','No leito de origem','Na rampa de elevação'],a:1,d:2},
        {q:'Ao acomodar o corpo na gaveta inferior, puxando a parte móvel da gaveta, é necessário:',
         o:['Que um funcionário fique apoiando a parte móvel durante a transferência','Remover totalmente a parte móvel e apoiá-la no chão','Inclinar a maca para deslizar o corpo','Realizar o procedimento sozinho, para reduzir o contato'],a:0,d:2},
        {q:'Após acomodar o corpo na câmara mortuária, a conduta correta inclui:',
         o:['Levar o lençol de volta ao leito do paciente','Fixar a folha de identificação na parte externa da câmara, comunicar a zeladoria e higienizar as mãos','Deixar a gaveta destravada para facilitar a entrega','Desligar a câmara mortuária para economia de energia'],a:1,d:2}
      ]
    },

    {
      id:'pop-65', code:'POP-ENF-65', version:'1.4', emission:'22/09/2015',
      title:'Conferência do carro de emergência',
      executantes:'Enfermeiro, técnico de enfermagem e farmacêutico',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o abastecimento dos materiais e medicamentos nos carros de emergência, visando ao pronto atendimento adequado aos pacientes em situação de emergência.',
          'Padronizar a conferência e a organização dos carros de emergência.',
          'Assegurar que todos os itens necessários estejam no carrinho, prontos para uso quando necessário.'
        ]},
        {n:2,h:'Materiais/equipamentos necessários',items:[
          'Caneta, prancheta e compressa.',
          'Solução desinfetante padronizada.',
          'Formulário de conferência diária (anexo 2).',
          'Formulário de conferência semanal do cardioversor (anexo 3).',
          'Formulário de conferência mensal e de abertura do carro de emergência (anexo 4).',
          'Kits de emergência UTI (anexo 5).'
        ]},
        {n:3,h:'Organização do carro de emergência',sub:'Base superior do carro de emergência:',items:[
          'Caixa contendo laringoscópio e lanterna.',
          'Ressuscitador manual (ambú).',
          'Cardioversor e/ou desfibrilador.',
          'Prancheta com os formulários de conferência.',
          'Tábua rígida (pode estar na lateral ou atrás do carro).'
        ],note:'<b>Organização das gavetas:</b> <b>1ª gaveta</b> — maleta lacrada com fármacos de primeira linha para emergência; <b>2ª gaveta</b> — materiais para controle de vias aéreas; <b>3ª gaveta</b> — materiais para punção de acessos venosos e preparo de medicações; <b>4ª gaveta</b> — soluções endovenosas, ambú reserva e outros materiais.'},
        {n:4,h:'1ª gaveta — Maleta de medicações',table:{
          cols:['Medicamento','Quantidade'],
          rows:[
            ['Água destilada 10 ml','05 amp'],['Hidrocortisona 100 mg','05 Fr'],
            ['Suxametônio 100 mg','01 Fr'],['Hidralazina 20 mg/ml 1 ml','02 amp'],
            ['Glicose 50% 10 ml','10 amp'],['Atropina 0,25 mg/ml 1 ml','10 amp'],
            ['Cloridrato de Epinefrina 1 mg/ml 1 ml','20 amp'],['Gluconato de cálcio 10% 10 ml','02 amp'],
            ['Propofol 10 mg/ml 20 ml','01 Fr'],['Amiodarona 50 mg/ml 3 ml','06 amp'],
            ['Furosemida 10 mg/ml 2 ml','05 amp'],['Diazepam 10 mg 2 ml','01 amp'],
            ['Fenitoína 50 mg/ml 5 ml','05 amp'],['Midazolam 15 mg/ml 3 ml','05 amp'],
            ['Morfina 10 mg/ml 1 ml','02 amp'],['Fentanil 0,05 mg/ml 10 ml','2 Fr'],
            ['Noradrenalina 2 mg/ml 4 ml','04 amp'],['Cloridrato de Lidocaína 100 mg/ml','01 spray'],
            ['Cloridrato de Lidocaína 2% geleia','01 tubo'],['Clorexidina alcoólica 0,5% 30 ml','01 Fr'],
            ['Lidocaína 2% S/V 20 ml','01 Fr'],['Cetamina 50 mg/ml 2 ml','02 amp']
          ]
        }},
        {n:5,h:'2ª gaveta — Via aérea',table:{
          cols:['Material','Quantidade'],
          rows:[
            ['Tubos: 7 / 7,5 / 8 / 8,5 / 9','2 de cada'],['Guedel','1 unidade'],
            ['Filtro de barreira','1 unidade'],['Máscara laríngea','1 unidade'],
            ['Silicone de O₂','1 unidade'],['Látex de aspiração','1 unidade'],
            ['Bougie','1 unidade'],['Fio guia','1 unidade'],
            ['SNG nº 16 / nº 14','1 de cada'],['Sonda de aspiração nº 12 / nº 14','2 de cada'],
            ['Nebulizador','1 unidade']
          ]
        }},
        {n:6,h:'3ª gaveta — Acesso venoso',table:{
          cols:['Material','Quantidade'],
          rows:[
            ['Seringas: 20 / 10 / 5 ml','5 de cada'],['Seringa de 1 ml','2 unidades'],
            ['Agulhas: 40x12 / 13x4,5 / 40x8','5 de cada'],['Lâminas nº 11 / nº 12','1 de cada'],
            ['Fio mono-nylon nº 3','2 unidades'],['Abocath nº 16 / nº 18 / nº 20 / nº 22','3 de cada'],
            ['Micropore','1 unidade'],['Luva estéril nº 6,5 / nº 7 / nº 7,5 / nº 8','2 de cada'],
            ['Equipo fotossensível','1 unidade'],['Equipo simples','3 unidades'],
            ['Equipo de bomba','2 unidades'],['Polifix','2 unidades'],
            ['Torneirinha','4 unidades'],['Tampinha protetora','4 unidades'],
            ['Transofix','2 unidades'],['Água destilada 10 ml','5 unidades'],
            ['Clorexidina alcoólica 0,5%','1 frasco'],['SF 0,9% 10 ml','5 unidades']
          ]
        }},
        {n:7,h:'4ª gaveta — Soluções e outros',table:{
          cols:['Material','Quantidade'],
          rows:[
            ['Ringer lactato','1 unidade'],['SF 0,9% 500 ml','4 unidades'],
            ['Bicarbonato de Sódio','1 unidade'],['Manitol','1 unidade'],
            ['SF 0,9% 250 ml','1 unidade'],['SG 5% 250 ml','1 unidade'],
            ['SF 0,9% 100 ml','3 unidades'],['SG 5% 100 ml','3 unidades'],
            ['Ressuscitador manual','1 unidade'],['Válvulas: O₂, ar comprimido e vácuo','1 de cada'],
            ['Frasco de aspiração','1 unidade'],['Umidificador','1 unidade']
          ]
        }},
        {n:8,h:'Conferência do carro de emergência',items:[
          '<b>Conferência diária (anexo 2):</b> no início de cada turno de trabalho, o Enfermeiro confere laringoscópio, lanterna e torpedos de oxigênio.',
          '<b>Conferência do desfibrilador/cardioversor (anexo 3):</b> na UTI, diariamente (3 vezes ao dia), no início de cada turno; nas unidades de internação, 1 vez ao dia, pela manhã, no início do turno.',
          '<b>Conferência mensal (anexo 4):</b> realizada preferencialmente na primeira semana do mês, por um enfermeiro e um técnico de enfermagem, conferindo todos os itens e suas validades e atentando para a substituição quando necessário.',
          'As soluções endovenosas da 4ª gaveta seguem o mesmo fluxo de conferência dos demais materiais, sendo de atribuição da enfermagem.',
          'Em caso de abertura do lacre e/ou utilização de algum medicamento da maleta, o enfermeiro responsável encaminha a maleta usada à farmácia, junto à prescrição médica dos medicamentos utilizados, e recebe uma nova maleta lacrada e enumerada.',
          '<b>Conferência mensal dos medicamentos (maleta):</b> realizada pelo farmacêutico, mensalmente, conferindo a integridade dos invólucros estéreis, a data de validade e os lotes (rastreabilidade do produto).'
        ]},
        {n:9,h:'Kit emergência UTI — manutenção de soluções',sub:'Kit de medicação/intubação para situações de emergência (pacientes de outras instituições, manutenção de infusão contínua e intubação) até a prescrição médica de internação. Seguem o mesmo fluxo de reposição e conferência da maleta padrão; em caso de uso, encaminhar a maleta à farmácia satélite junto à prescrição.',table:{
          cols:['Código','Medicamento','Quant.'],
          rows:[
            ['116001','Fentanila 10 ml','4'],['108007','Midazolam 10 ml','3'],
            ['698004','Dexmedetomidina','2'],['108014','Propofol 50 ml','2']
          ]
        }},
        {n:10,h:'Kit emergência UTI — intubação',table:{
          cols:['Código','Medicamento','Quant.'],
          rows:[
            ['108017','Fentanila 2 ml','2'],['108006','Midazolam 3 ml','1'],
            ['110660','Suxametônio','1'],['108028','Cetamina','1'],
            ['108037','Propofol 20 ml','1'],['94014','Lidocaína 2% S/V','1']
          ]
        }},
        {n:11,h:'Observações',items:[
          'Manter o carro de emergência ligado na tomada, para preservar a autonomia elétrica.',
          'A cada utilização, proceder à conferência dos materiais e à higienização do carro com a solução desinfetante padronizada.',
          'Encaminhar o ressuscitador manual e a lâmina do laringoscópio ao CME após o uso e solicitar a reposição.',
          'Proceder à limpeza do cabo do laringoscópio mecanicamente com água e sabão, secar e friccionar com a solução desinfetante padronizada.',
          'Após todos os itens conferidos e repostos, solicitar o lacre na farmácia e lacrar o carrinho de emergência.'
        ],alert:'O carro de emergência deve permanecer <b>sempre lacrado, completo e ligado na tomada</b>. Após qualquer uso, conferir, repor, higienizar e solicitar novo lacre.'}
      ],
      pool:[
        {q:'A conferência diária do carro de emergência é realizada pelo Enfermeiro, no início de cada turno, e inclui:',
         o:['Todos os medicamentos da maleta, um a um','Laringoscópio, lanterna e torpedos de oxigênio','Apenas o lacre do carrinho','Somente as soluções da 4ª gaveta'],a:1,d:2},
        {q:'Na UTI, a conferência do desfibrilador/cardioversor deve ser realizada:',
         o:['Uma vez por semana','Diariamente, 3 vezes ao dia, no início de cada turno','Apenas na conferência mensal','Somente após cada uso'],a:1,d:2},
        {q:'A conferência mensal dos medicamentos da maleta (integridade, validade e lotes) é de responsabilidade do:',
         o:['Técnico de enfermagem','Enfermeiro','Farmacêutico','Médico plantonista'],a:2,d:2},
        {q:'A 1ª gaveta do carro de emergência contém:',
         o:['Materiais para controle de vias aéreas','A maleta lacrada com fármacos de primeira linha para emergência','Soluções endovenosas e ambú reserva','Materiais para punção de acessos venosos'],a:1,d:2},
        {q:'Os materiais para controle de vias aéreas ficam armazenados na:',
         o:['1ª gaveta','2ª gaveta','3ª gaveta','4ª gaveta'],a:1,d:2},
        {q:'Após a abertura do lacre ou uso de medicamento da maleta, o enfermeiro deve:',
         o:['Repor os medicamentos por conta própria e relacrar','Encaminhar a maleta usada à farmácia com a prescrição e receber uma nova maleta lacrada e enumerada','Aguardar a conferência mensal para repor','Descartar a maleta e abrir outra do estoque do setor'],a:1,d:2},
        {q:'Sobre a manutenção do carro de emergência entre os atendimentos, é correto afirmar que ele deve permanecer:',
         o:['Aberto e desligado, para agilizar o acesso e poupar energia','Sempre lacrado, completo e ligado na tomada; após cada uso, conferir, repor, higienizar e solicitar novo lacre','Lacrado, porém desligado, ligando-o apenas durante o atendimento','Aberto e ligado, repondo os itens somente na conferência mensal'],a:1,d:2},
        {q:'Após o uso, o ressuscitador manual e a lâmina do laringoscópio devem ser:',
         o:['Apenas borrifados com álcool e recolocados no carro','Encaminhados ao CME para reprocessamento, solicitando-se a reposição','Descartados como lixo infectante','Lavados e guardados sem reprocessamento'],a:1,d:2}
      ]
    },

    {
      id:'pop-66', code:'POP-ENF-66', version:'1.0', emission:'26/07/2023',
      title:'Rotina de liberação de visitas na UTI',
      executantes:'Técnicos de Enfermagem',
      origem:'Gerência de Enfermagem',
      setores:['uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Descrever o procedimento de acolhimento e liberação de visitas, a instrução dos familiares sobre acompanhamento/visita estendida e a avaliação da permanência de visitas na Unidade de Terapia Intensiva (UTI).'
        ]},
        {n:2,h:'Liberação das visitas',sub:'Responsável: Técnico de Enfermagem (leitos 3 e 4) · Horário de início: 14h45min.',items:[
          '<b>14h45</b> — Ligar a TV no vídeo de instrução, o ar-condicionado (se necessário) ou abrir as janelas.',
          '<b>14h50</b> — Abrir a porta da sala de visitas e trancar a porta de acesso à UTI; checar se os pacientes estão organizados para receber a visita.',
          '<b>15h00</b> — Orientar os visitantes presentes (itens a seguir).',
          'Questionar se conseguiram assistir ao vídeo de instrução e se há dúvidas; em caso de dúvidas, esclarecer. Caso não tenham assistido, reforçar a relevância das informações.',
          'Fluxo: apenas dois familiares por paciente, um familiar por vez, com único revezamento (para evitar infecções).',
          'Evitar a entrada com pertences (bolsas, celulares e outros); se necessária a entrada, não dispô-los sobre o leito do paciente.',
          'Não é permitido fotografar ou filmar dentro da UTI.',
          'Higienizar as mãos com álcool em gel ao se aproximar e ao se afastar do leito.',
          'Não ingerir nem trazer bebidas ou alimentos externos, exceto os autorizados pelo serviço de Nutrição ao paciente.',
          'Permanecer exclusivamente no leito do seu familiar.',
          'O boletim médico é passado durante ou ao final da visita; aguardar no leito.',
          'Questionar se há familiar visitando pela primeira vez; em caso afirmativo, solicitar que aguarde a orientação do Enfermeiro.',
          '<b>16h00</b> — Salvo exceções (visita estendida), comunicar aos visitantes o fim da visita.',
          '<b>Para acessar o vídeo:</b> no controle remoto da TV (Philco), clicar no botão com figura de casinha; no ícone "Entrada", selecionar o ícone USB e iniciar qualquer vídeo.'
        ],alert:'Comunicar o Enfermeiro sempre que algum familiar/visitante for de primeira visita (admissão do paciente). Qualquer problema ou dúvida deve ser resolvido em conjunto com o Enfermeiro.'},
        {n:3,h:'Acolhimento de primeiras visitas',sub:'Responsável: Enfermeiro · ao ser comunicado pelo Técnico de Enfermagem.',items:[
          'Coletar informações relevantes com os familiares.',
          'Entregar pertences e protocolar.',
          'Solicitar (se possível) itens de higiene pessoal para o paciente e entregar (se possível) a lista de material.',
          'Apresentar normas e rotinas (horários, fluxo de visita, entre outras).'
        ]},
        {n:4,h:'Orientação de acompanhante / visita estendida',sub:'Responsável: Enfermeiro.',items:[
          'Comunicar a equipe multiprofissional: Serviço Social, Psicologia, Medicina e Fisioterapia.',
          'Comunicar o serviço de Nutrição quando houver paciente em isolamento com necessidade de dispensação de dieta para o familiar no leito de UTI.',
          'Comunicar a SCIH em caso de pacientes em isolamentos/precauções específicas.',
          'Liberar o Sistema de Prontuário Eletrônico (call center — recepções).',
          'Identificar o familiar/visitante de referência para permanecer em acompanhamento, considerando o consentimento do representante legal.',
          'Orientar o acompanhante sobre as rotinas institucionais e da unidade e estabelecer horário para troca (se necessário), registrando no Prontuário Eletrônico.',
          'O número de visitantes pode ser ampliado conforme a situação clínica do paciente e a autorização da equipe da UTI; registrar no prontuário o motivo da liberação e comunicar a portaria (consultar o POP-SCIH-09).'
        ],note:'<b>Quem requer visita estendida/acompanhamento integral:</b> pacientes menores de 18 anos ou com alguma condição especial, a ser avaliada pela equipe.'},
        {n:5,h:'Observações',items:[
          'É proibida a entrada de menores de 12 anos; casos excepcionais devem ser avaliados e discutidos com o SCIH e a equipe de Psicologia.',
          'Os visitantes não podem trazer flores, alimentos e/ou bebidas.',
          'Visitantes e acompanhantes não utilizam EPI (avental e luva) nos casos de pacientes com bactérias multirresistentes; exceções (Monkeypox, Covid-19, entre outros) devem ser discutidas com o SCIH. Reforçar sempre a higienização das mãos.',
          'Nos casos de isolamento respiratório, fornecer máscara cirúrgica simples (caso não tenha sido entregue na entrada do hospital, conforme a norma institucional vigente).'
        ]},
        {n:6,h:'Anexo 1 — Instruções ao visitante',items:[
          '<b>É permitido:</b> dois visitantes por período (tarde e noite); entrada individual, com único revezamento entre os dois.',
          '<b>É vedado:</b> filmar ou fotografar dentro da UTI; deslocar-se do leito da sua visita para outros; mexer nos aparelhos da UTI.',
          'Quando possível, trazer produtos de higiene pessoal para o paciente.',
          'Em caso de primeira visita, aguardar as orientações do Enfermeiro.',
          'O boletim médico é fornecido durante a visita — aguardar no leito.',
          'Para a redução de infecções, evitar a entrada com bolsas/celulares e outros pertences; não sentar nem dispor pertences sobre o leito.',
          'Atenção: pertences de valor/uso pessoal (celular, carregador e outros) podem ser perdidos — verificar com a equipe assistencial a permanência desses itens.',
          'Certificar-se com a equipe se há pertences do paciente a serem recolhidos.'
        ]}
      ],
      pool:[
        {q:'Na rotina de visitas da UTI, o Técnico de Enfermagem inicia a liberação às 14h45. Às 16h00, salvo exceções (visita estendida), ele deve:',
         o:['Prorrogar automaticamente a visita de todos os leitos','Comunicar aos visitantes o fim da visita','Liberar a entrada de novos visitantes','Trancar a sala de visitas sem aviso prévio'],a:1,d:3},
        {q:'Sobre o fluxo de visitantes por paciente, o POP estabelece:',
         o:['Até quatro familiares juntos no leito','Dois familiares por paciente, um por vez, com único revezamento','Visitas livres, sem limite de pessoas','Apenas um familiar por dia, sem revezamento'],a:1,d:3},
        {q:'A entrada na UTI é proibida para menores de:',
         o:['18 anos','16 anos','12 anos','6 anos'],a:2,d:3},
        {q:'Ao identificar um familiar que está visitando pela primeira vez, o Técnico de Enfermagem deve:',
         o:['Liberar a entrada normalmente','Solicitar que aguarde e comunicar o Enfermeiro para o acolhimento','Encaminhá-lo diretamente ao médico','Negar a visita naquele dia'],a:1,d:3},
        {q:'Requerem visita estendida/acompanhamento integral os pacientes:',
         o:['Todos os internados na UTI','Menores de 18 anos ou com condição especial avaliada pela equipe','Apenas os que solicitarem por escrito','Somente pacientes em isolamento'],a:1,d:3},
        {q:'Sobre o boletim médico, é correto orientar o visitante a:',
         o:['Procurar o médico na sala de visitas antes de entrar','Aguardar no leito, pois é passado durante ou ao final da visita','Ligar para a recepção após a visita','Solicitá-lo por escrito na portaria'],a:1,d:3},
        {q:'Sobre pertences e registro de imagens durante a visita na UTI, a orientação correta é:',
         o:['É permitido fotografar o familiar para registro da família','Não é permitido filmar/fotografar; evitar a entrada com bolsas e celulares e não dispô-los sobre o leito','Celulares são liberados desde que no modo silencioso','Bolsas podem ficar sobre o leito, desde que fechadas'],a:1,d:3},
        {q:'Quanto ao uso de EPI por visitantes de pacientes com bactérias multirresistentes, o POP orienta:',
         o:['Uso obrigatório de avental e luva por todos os visitantes','Visitantes não utilizam avental e luva; reforça-se a higienização das mãos (exceções discutidas com o SCIH)','Uso de macacão e óculos de proteção','Proibição total de visitas'],a:1,d:3}
      ]
    },

    {
      id:'pop-60', code:'POP-ENF-60', version:'1.3', emission:'10/10/2015',
      title:'Aspiração naso e orofaríngea',
      executantes:'Equipe de enfermagem e fisioterapeutas',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Remover secreções das vias aéreas superiores.',
          'Evitar a broncoaspiração.',
          'Manter as vias aéreas desobstruídas.'
        ],note:'<b>Definição:</b> a aspiração nasofaríngea e orofaríngea é indicada para pacientes impossibilitados de remover/eliminar secreções de maneira espontânea, por fatores como alteração do nível de consciência, falência da musculatura diafragmática e intercostal ou tosse ineficaz. Consiste na remoção de secreção (da traqueia ou brônquios) por uma sonda introduzida pelo nariz, boca ou traqueostomia.'},
        {n:2,h:'Materiais/equipamentos necessários',items:[
          'EPI (equipamentos de proteção individual).',
          'Rede de vácuo funcionante, frasco de aspiração e intermediário de látex.',
          'Sondas de aspiração e gaze.',
          'Água destilada e copo descartável.',
          'Oxímetro, luvas de procedimento e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Organizar os materiais, encaminhar-se ao leito e testar a rede de vácuo antes de iniciar.',
          'Higienizar as mãos (Protocolo Institucional de Higiene de Mãos) e paramentar os EPIs conforme a precaução/isolamento do paciente.',
          'Identificar-se ao paciente e ao acompanhante, explicar o procedimento e conferir os dados (nome completo e data de nascimento) na pulseira, confirmando-os verbalmente.',
          'Higienizar o estetoscópio com a solução desinfetante padronizada e fazer ausculta pulmonar antes do procedimento, para identificar ruídos adventícios.',
          'Posicionar o paciente com a cabeceira elevada entre <b>30° e 45°</b>.',
          'Conectar a sonda no sistema de aspiração e verificar a oxigenação do paciente.',
          'Abrir o pacote da sonda e conectá-la ao látex (mantendo-a dentro do invólucro); retirar a sonda com a mão dominante, auxiliando a retirada do invólucro com a outra mão.',
          'Se o paciente estiver em oxigenioterapia, retirar o dispositivo de oferta e monitorar a saturação.',
          'Pinçar o intermediário/látex do vácuo ou a sonda de aspiração e avisar ao paciente que irá iniciar o procedimento.'
        ],note:'<b>Ordem obrigatória:</b> aspirar sempre a narina primeiro e, depois, a cavidade oral — nunca o contrário.'},
        {n:4,h:'Aspiração nasotraqueal',items:[
          'Introduzir lentamente a sonda por uma das narinas até encontrar resistência ou tosse do paciente.',
          'Realizar movimentos rotativos na narina durante a aspiração.',
          'Pinçar novamente o intermediário do vácuo e retirar a sonda da narina; observar a saturação.',
          'Se em uso de oxigênio, recolocar o dispositivo até a recuperação da saturação antes de realizar nova aspiração.',
          'Realizar o procedimento quantas vezes forem necessárias.'
        ]},
        {n:5,h:'Aspiração oral',items:[
          'Introduzir lentamente a sonda na cavidade oral, provocando tosse, e aspirar as secreções.',
          'Repetir o procedimento quantas vezes forem necessárias.',
          'Desligar o sistema de vácuo e retirar a sonda.',
          'Colocar água destilada ou água corrente no copo descartável e lavar o intermediário de aspiração.',
          'Proteger a ponta do látex com plástico, para posterior aspiração.',
          'Recolher o que deve ser guardado e desprezar o restante do material no lixo apropriado.',
          'Higienizar a bandeja com a solução desinfetante padronizada e guardá-la.',
          'Higienizar as mãos e registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:6,h:'Observações',items:[
          'Monitorizar os sinais vitais e os sinais de desconforto respiratório antes, durante e após o procedimento.',
          'Não limpar a sonda entre as aspirações com líquidos colocados em recipiente não estéril; caso apresente muita sujidade, trocá-la.',
          'Recomenda-se o ajuste da pressão de vácuo em <b>80–120 mmHg</b>.',
          'Não manter nova sonda de aspiração conectada ao látex.',
          'Realizar o procedimento após a fisioterapia respiratória e/ou sempre que houver sinais de acúmulo de secreções em pacientes com tosse ineficaz.',
          'Quando o frasco de aspiração estiver com dois terços da capacidade, esvaziá-lo antes do procedimento ou trocá-lo.',
          'Trocar os intermediários na saída do paciente, quando apresentarem secreções que não saem com facilidade na limpeza com água, ou quando a ponta distal entrar em contato com o chão sem proteção.'
        ]}
      ],
      pool:[
        {q:'A ordem correta de aspiração nas vias aéreas superiores é:',
         o:['Cavidade oral primeiro e depois a narina','Narina primeiro e depois a cavidade oral, nunca ao contrário','Tanto faz a ordem, desde que se troque a sonda','Apenas a cavidade oral, pois a narina é contraindicada'],a:1,d:2},
        {q:'A pressão de vácuo recomendada para a aspiração é de:',
         o:['40–60 mmHg','80–120 mmHg','150–200 mmHg','Pressão máxima do sistema'],a:1,d:2},
        {q:'Para o procedimento, o paciente deve ser posicionado com a cabeceira elevada entre:',
         o:['0° e 15°','30° e 45°','60° e 90°','Decúbito dorsal plano'],a:1,d:2},
        {q:'Durante a aspiração nasotraqueal, ao introduzir a sonda na narina, recomenda-se:',
         o:['Realizar movimentos rotativos durante a aspiração','Manter a sonda imóvel e aspirar continuamente por 30 s','Introduzir e retirar rapidamente, sem aspirar','Aspirar apenas na introdução da sonda'],a:0,d:2},
        {q:'No paciente em uso de oxigênio, antes de realizar nova aspiração, deve-se:',
         o:['Aspirar repetidamente sem pausas','Recolocar o dispositivo de O₂ até a recuperação da saturação','Aumentar a pressão de vácuo','Manter o oxigênio retirado durante todo o procedimento'],a:1,d:2},
        {q:'Quando o frasco de aspiração atinge dois terços da capacidade, a conduta é:',
         o:['Continuar até encher completamente','Esvaziá-lo antes do procedimento ou trocá-lo','Inverter o frasco para ganhar espaço','Reduzir a sucção'],a:1,d:2},
        {q:'Sobre a limpeza da sonda entre as aspirações, é correto:',
         o:['Limpar com líquidos em qualquer recipiente disponível','Não usar líquidos em recipiente não estéril; se a sonda estiver muito suja, trocá-la','Reaproveitar a mesma sonda por 24 horas','Lavar a sonda com álcool 70%'],a:1,d:2},
        {q:'A aspiração nasofaríngea e orofaríngea está indicada principalmente para pacientes:',
         o:['Com tosse eficaz e secreção fluida','Impossibilitados de eliminar secreções de forma espontânea (alteração de consciência, falência muscular ou tosse ineficaz)','Em ventilação mecânica com sistema fechado','Sem qualquer secreção em vias aéreas'],a:1,d:3}
      ]
    },

    {
      id:'pop-61', code:'POP-ENF-61', version:'1.1', emission:'25/10/2021',
      title:'Aspiração de Traqueostomia (TQT)',
      executantes:'Equipe de enfermagem, fisioterapia e medicina',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Remover secreções traqueais.',
          'Manter as vias aéreas desobstruídas.',
          'Prevenir infecções do trato respiratório.'
        ],note:'<b>Definição:</b> o procedimento visa manter a permeabilidade das vias aéreas, removendo líquidos e secreções para melhorar a eficácia ventilatória e prevenir infecções respiratórias. Consiste na remoção de secreções da traqueia e dos brônquios por uma sonda inserida no orifício traqueal de forma asséptica, atraumática e eficaz.'},
        {n:2,h:'Materiais/equipamentos necessários',items:[
          'EPI (equipamentos de proteção individual).',
          'Rede de vácuo funcionante, frasco de aspiração e intermediário de látex.',
          'Sondas de aspiração e gaze estéril.',
          'Água destilada ou água corrente e solução fisiológica 0,9%.',
          'Oxímetro, luvas de procedimento, copo descartável e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Organizar os materiais, encaminhar-se ao leito e testar a rede de vácuo antes de iniciar.',
          'Higienizar as mãos (Protocolo Institucional de Higiene de Mãos) e paramentar os EPIs conforme a precaução/isolamento do paciente.',
          'Identificar-se ao paciente e ao acompanhante, explicar o procedimento e conferir os dados (nome completo e data de nascimento) na pulseira, confirmando-os verbalmente.',
          'Higienizar o estetoscópio com a solução desinfetante padronizada e fazer ausculta pulmonar antes do procedimento.',
          'Se o paciente estiver consciente, posicioná-lo em semi-Fowler; se inconsciente, em decúbito lateral, voltado para o profissional.',
          'Conectar a sonda no sistema de aspiração e verificar a oxigenação do paciente.',
          'Abrir o pacote da sonda e conectá-la ao látex (mantendo-a dentro do invólucro, sem contaminar).',
          'Calçar a luva plástica estéril na mão dominante, por cima da luva de procedimento.',
          'Retirar a sonda do pacote com a mão dominante (na falta de luva plástica estéril, segurar a sonda com uma gaze estéril).',
          'Se em suporte ventilatório, hiperoxigenar o paciente antes de iniciar e, durante a aspiração, retirar o suporte e monitorar a saturação.',
          'Pinçar o intermediário do vácuo ou a sonda e introduzir a sonda na traqueostomia.',
          'Realizar a sucção apenas durante a retirada do cateter, <b>não prolongando por mais de 10 a 15 segundos</b> de cada vez, para minimizar o trauma tecidual.',
          'Se necessário, instilar 2 ml de SF seguida de aspiração, para facilitar a introdução da sonda, estimular a tosse e remover secreções espessas ("rolhas").',
          'Repetir o procedimento se houver necessidade e reconectar o suporte ventilatório após a aspiração.',
          'Após finalizar a aspiração traqueal, realizar a aspiração naso e orofaríngea conforme o POP-ENF-60.',
          'Desligar o sistema de vácuo e desconectar a sonda.',
          'Colocar água destilada ou água corrente no copo descartável e lavar o intermediário de aspiração; proteger a ponta do látex com plástico, para posterior aspiração.',
          'Recolher o que deve ser guardado e desprezar o restante no lixo apropriado; higienizar a bandeja com a solução desinfetante padronizada.',
          'Higienizar as mãos e registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:4,h:'Observações',items:[
          'Monitorizar os sinais vitais e os sinais de desconforto respiratório antes, durante e após o procedimento.',
          'Não se recomenda injetar soro fisiológico pela traqueostomia nem ambuzar o paciente, pelo possível deslocamento de bactérias do biofilme da via aérea artificial para o trato respiratório inferior.',
          'Não limpar a sonda entre as aspirações com líquidos em recipiente não estéril; caso apresente muita sujidade, trocá-la.',
          'O tamanho da sonda deve ser o de menor diâmetro possível para uma sucção adequada; recomenda-se a fórmula: <b>nº da sonda = (nº do TOT/TQT - 2) x 2</b>.',
          'Recomenda-se o ajuste da pressão de vácuo em <b>80–120 mmHg</b>.'
        ],alert:'<b>Sucção apenas durante a retirada da sonda</b>, por no máximo 10 a 15 segundos de cada vez, para minimizar o trauma tecidual e o risco de hipoxemia.'}
      ],
      pool:[
        {q:'Quanto ao posicionamento do paciente para a aspiração de traqueostomia:',
         o:['Consciente em decúbito dorsal plano; inconsciente sentado','Consciente em semi-Fowler; inconsciente em decúbito lateral, voltado para o profissional','Sempre em Trendelenburg','Sempre em decúbito ventral'],a:1,d:3},
        {q:'A sucção durante a aspiração de traqueostomia deve ser realizada:',
         o:['Na introdução e na retirada da sonda','Apenas durante a retirada do cateter, por no máximo 10 a 15 segundos','De forma contínua por até 1 minuto','Somente com a sonda parada na carina'],a:1,d:3},
        {q:'A fórmula recomendada para escolher o tamanho ideal da sonda de aspiração é:',
         o:['nº da sonda = (nº do TOT/TQT - 2) x 2','nº da sonda = nº do TOT/TQT + 4','nº da sonda = nº do TOT/TQT ÷ 2','Sempre a sonda de maior calibre disponível'],a:0,d:3},
        {q:'Para manter a técnica asséptica, a luva plástica estéril é calçada:',
         o:['Na mão não dominante, sob a luva de procedimento','Na mão dominante, por cima da luva de procedimento','Em ambas as mãos, substituindo as luvas de procedimento','Dispensada quando se usa gaze estéril em ambas as mãos'],a:1,d:3},
        {q:'Após finalizar a aspiração traqueal pela traqueostomia, deve-se:',
         o:['Encerrar o procedimento imediatamente','Realizar a aspiração naso e orofaríngea conforme o POP-ENF-60','Instilar 10 ml de SF na traqueostomia','Reposicionar o paciente em decúbito ventral'],a:1,d:3},
        {q:'Sobre a instilação de soro fisiológico pela traqueostomia, o POP orienta:',
         o:['Instilar rotineiramente antes de cada aspiração','Não é recomendada de rotina; se necessário, instilar 2 ml seguida de aspiração','Substituir a aspiração pela instilação','Ambuzar o paciente após a instilação'],a:1,d:3},
        {q:'A pressão de vácuo recomendada para a aspiração de traqueostomia é:',
         o:['80–120 mmHg','150–200 mmHg','40–60 mmHg','A máxima do sistema de vácuo'],a:0,d:3},
        {q:'A sonda de aspiração de traqueostomia deve ter:',
         o:['O maior diâmetro possível, para aspirar mais rápido','O menor diâmetro possível que permita sucção adequada','Sempre o mesmo calibre do tubo','Diâmetro indiferente'],a:1,d:3}
      ]
    },

    {
      id:'pop-62', code:'POP-ENF-62', version:'1.4', emission:'08/02/2022',
      title:'Aspiração de TOT e TQT em ventilação mecânica — sistema aberto',
      executantes:'Equipe de enfermagem, fisioterapia e medicina',
      origem:'UTI',
      setores:['uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar e padronizar o procedimento de aspiração endotraqueal das vias aéreas inferiores.',
          'Manter as vias aéreas desobstruídas.',
          'Prevenir infecções do trato respiratório.'
        ]},
        {n:2,h:'Materiais e equipamentos necessários',items:[
          'EPI (equipamentos de proteção individual) e luva estéril.',
          'Rede de vácuo funcionante, frasco de aspiração e intermediário de látex.',
          'Sondas de aspiração e gaze estéril.',
          'Água destilada e soro fisiológico.',
          'Oxímetro, copo descartável e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Organizar os materiais, encaminhar-se ao leito e testar a rede de vácuo antes de iniciar.',
          'Higienizar as mãos (Protocolo Institucional de Higiene de Mãos) e paramentar os EPIs conforme a precaução/isolamento do paciente.',
          'Identificar-se ao paciente e ao acompanhante, explicar o procedimento e conferir os dados (nome completo e data de nascimento) na pulseira, confirmando-os verbalmente.',
          'Higienizar o estetoscópio com a solução desinfetante padronizada e fazer ausculta pulmonar antes do procedimento.',
          'Abrir e testar o funcionamento do sistema de aspiração; abrir o pacote da sonda e conectá-la ao intermediário do aspirador (mantendo-a dentro do invólucro).',
          'Setar no ventilador mecânico (VM) a <b>FiO₂ a 100%</b> ou o modo acesso rápido, para elevar o conteúdo arterial de O₂ antes do procedimento.',
          'Calçar a luva plástica estéril na mão dominante, por cima da luva de procedimento, e retirar a sonda do pacote com a mão dominante.',
          'Desconectar a traqueia do respirador com a mão não dominante (ou solicitar ajuda de outra pessoa), deixando a extremidade distal suspensa — sem contato com o paciente ou com as roupas de cama.',
          'Pinçar o intermediário do vácuo ou a sonda e avisar ao paciente que irá iniciar o procedimento.',
          'Introduzir a sonda no tubo orotraqueal, nasotraqueal ou na traqueostomia; ao perceber resistência (carina), recuá-la <b>1 a 2 cm</b> e então liberar o vácuo, com movimentos lentos de vai e vem, retirando lentamente a sonda. <b>Não ultrapassar 10 segundos</b>, pelo risco de hipoxemia.',
          'Reconectar a traqueia ao ventilador e repetir o procedimento quantas vezes forem necessárias.',
          'Após, realizar a aspiração naso e orofaríngea conforme o POP-ENF-60.',
          'Desligar o sistema de vácuo e desconectar a sonda; colocar água destilada no copo descartável e lavar o intermediário de aspiração.',
          'Proteger a ponta do látex com plástico, para posterior aspiração; recolher o que deve ser guardado e desprezar o restante no lixo apropriado.',
          'Higienizar a bandeja com a solução desinfetante padronizada e guardá-la; higienizar as mãos e registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:4,h:'Observações',items:[
          'Monitorizar os sinais vitais e os sinais de desconforto respiratório antes, durante e após o procedimento.',
          'Certificar-se de que a FiO₂ no VM retornou ao valor anterior.',
          'Não se recomenda injetar soro fisiológico ou água destilada pelo tubo/traqueostomia, nem ambuzar o paciente, pelo possível deslocamento de bactérias do biofilme da via aérea artificial para o trato respiratório inferior. Se necessário, instilar 2 ml de solução seguida de aspiração, para facilitar a introdução da sonda, estimular a tosse e remover secreções espessas ("rolhas").',
          'Não limpar a sonda entre as aspirações com líquidos em recipiente não estéril; caso a sonda suje, trocá-la.',
          'O tamanho da sonda deve ser o de menor diâmetro possível para uma sucção adequada; recomenda-se a fórmula: <b>nº da sonda = (nº do TOT/TQT - 2) x 2</b>.',
          'Recomenda-se o ajuste da pressão de vácuo em <b>80–120 mmHg</b>.',
          'Não manter nova sonda de aspiração conectada ao látex.'
        ],alert:'<b>Sistema aberto:</b> a desconexão do ventilador expõe a via aérea — utilize técnica asséptica e luva estéril na mão dominante, e não ultrapasse 10 segundos de aspiração, pelo risco de hipoxemia.'}
      ],
      pool:[
        {q:'A principal característica do sistema ABERTO de aspiração endotraqueal é que:',
         o:['O paciente permanece conectado ao ventilador durante a aspiração','O paciente é desconectado do ventilador para a introdução da sonda','Não há necessidade de luva estéril','Não eleva a FiO₂ antes do procedimento'],a:1,d:3},
        {q:'Antes do procedimento, para elevar o conteúdo arterial de O₂, deve-se setar no VM:',
         o:['A FiO₂ a 21%','A FiO₂ a 100% ou o modo acesso rápido','O modo de pressão negativa','A PEEP no valor máximo'],a:1,d:3},
        {q:'O tempo máximo de aspiração contínua, pelo risco de hipoxemia, é de:',
         o:['10 segundos','30 segundos','45 segundos','Sem limite definido'],a:0,d:3},
        {q:'Ao introduzir a sonda e perceber resistência (carina), a conduta correta é:',
         o:['Liberar o vácuo imediatamente na carina','Recuar a sonda 1 a 2 cm e só então liberar o vácuo, retirando-a lentamente','Forçar a progressão da sonda','Retirar a sonda sem aspirar'],a:1,d:3},
        {q:'Ao desconectar a traqueia do respirador, a extremidade distal deve ficar:',
         o:['Apoiada sobre o tórax do paciente','Suspensa, sem contato com o paciente ou com as roupas de cama','Dentro do copo de água destilada','Conectada ao intermediário do vácuo'],a:1,d:3},
        {q:'Para manter a assepsia no sistema aberto, a luva estéril é calçada:',
         o:['Na mão não dominante','Na mão dominante, por cima da luva de procedimento','Dispensada neste procedimento','Em ambas as mãos, sem luva de procedimento'],a:1,d:3},
        {q:'Após a aspiração endotraqueal pelo sistema aberto, deve-se:',
         o:['Realizar a aspiração naso e orofaríngea conforme o POP-ENF-60','Manter a FiO₂ a 100% pelas próximas horas','Encerrar sem reconectar o ventilador','Instilar rotineiramente 10 ml de SF'],a:0,d:3},
        {q:'A fórmula recomendada para o tamanho ideal da sonda de aspiração é:',
         o:['nº da sonda = (nº do TOT/TQT - 2) x 2','nº da sonda = nº do TOT/TQT x 3','nº da sonda = nº do TOT/TQT - 4','O maior calibre disponível'],a:0,d:3}
      ]
    }
  ];
  return POPS;
}));
