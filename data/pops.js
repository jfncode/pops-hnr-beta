(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.POPS = factory();
}(typeof self !== "undefined" ? self : this, function () {
  const POPS = [

    {
      id:'pop-03', code:'POP-ENF-03', version:'1.0', emission:'10/03/2026',
      title:'Fluxo de processamento e distribuição de acessórios da rede de gases medicinais e cassetes de respiradores',
      executantes:'Unidades Assistenciais, UTI, CME, Engenharia Biomédica/Eletricista e Almoxarifado',
      origem:'Escritório de Qualidade e Segurança do Paciente',
      setores:['assistencial','uti','cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o fluxo de coleta, processamento, controle de qualidade, manutenção e distribuição dos acessórios da rede de gases medicinais (válvulas de O₂, ar comprimido, vácuo, óxido nitroso e fluxômetros) e cassetes de respiradores, garantindo segurança, rastreabilidade e conformidade sanitária.'
        ]},
        {n:2,h:'Uso assistencial e remoção',items:[
          'Na internação, os dispositivos (válvulas, fluxômetros e cassetes) são instalados pela unidade assistencial; são considerados <b>potencialmente contaminados</b> após o uso, com troca conforme o POP-SCIH-07.',
          'Em pós-alta, transferência ou óbito, os dispositivos devem ser removidos pela equipe assistencial e encaminhados ao <b>expurgo</b>, acondicionados em recipiente adequado e identificado caso apresentem defeito.'
        ]},
        {n:3,h:'Processamento no CME e engenharia',items:[
          'A equipe do CME confere e separa os materiais por tipo e realiza limpeza, desinfecção conforme a classificação do artigo, secagem, inspeção e teste de funcionamento.',
          'Materiais com defeito são segregados, registrados e encaminhados à Engenharia Biomédica/Eletricista, que faz manutenção corretiva, testes de segurança e indica descarte ou liberação para uso.'
        ]},
        {n:4,h:'Distribuição e observações',items:[
          'Após o processamento, os materiais são armazenados em área limpa do CME, distribuídos às unidades conforme a demanda e registrados para controle e rastreabilidade.',
          'É obrigatório o uso de EPIs em todas as etapas, o transporte em recipientes fechados e identificados e a separação entre áreas sujas e limpas.'
        ]}
      ],
      pool:[
        {q:'Após o uso no paciente, os acessórios da rede de gases medicinais são considerados:',
         o:['Limpos e prontos para reuso','Potencialmente contaminados','Estéreis','Descartáveis sempre'],a:1,d:1},
        {q:'Em pós-alta, transferência ou óbito, os dispositivos devem ser encaminhados ao:',
         o:['Almoxarifado','Expurgo','Quarto seguinte','Lixo comum'],a:1,d:1},
        {q:'O setor responsável pela limpeza, desinfecção e processamento dos materiais é o:',
         o:['CME','Almoxarifado','Farmácia','Laboratório'],a:0,d:1},
        {q:'Materiais com defeito identificados no CME são encaminhados à:',
         o:['Farmácia','Engenharia Biomédica/Eletricista','Direção','Lavanderia'],a:1,d:2},
        {q:'Em todas as etapas do fluxo, é obrigatório:',
         o:['Trabalhar sem luvas para agilizar','O uso de EPIs','Misturar áreas sujas e limpas','Transportar em recipientes abertos'],a:1,d:1}
      ]
    },

    {
      id:'pop-50', code:'POP-ENF-50', version:'1.3', emission:'18/10/2013',
      title:'Hemotransfusão',
      executantes:'Médicos e equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar a administração segura de hemocomponentes, minimizar os riscos associados à hemotransfusão e garantir agilidade no atendimento das reações transfusionais.',
          'A reação transfusional é toda intercorrência decorrente da transfusão, podendo ser imediata (até 24 h) ou tardia (após 24 h).'
        ]},
        {n:2,h:'Solicitação e coleta',items:[
          'A solicitação de transfusão é feita pelo médico no prontuário eletrônico (sem preenchimento manual nem rasuras), garantindo o termo de consentimento informado.',
          'Coletar a amostra de maneira asséptica (kit: 2 tubos EDTA e 1 tubo seco); de preferência não coletar de linha com infusão; armazenar na caixa de transporte com gelox junto às vias da solicitação e encaminhar à Agência Transfusional (HIJG).'
        ]},
        {n:3,h:'Pré-infusão e conferência',items:[
          'Verificar os sinais vitais antes de buscar o hemocomponente; se hipertenso, febril ou taquicárdico, comunicar o médico para liberação.',
          'Realizar a <b>dupla conferência</b> (preferencialmente por um enfermeiro) dos dados da etiqueta da bolsa com a prescrição e com a pulseira do paciente, e a inspeção visual da bolsa.'
        ]},
        {n:4,h:'Infusão e tempos máximos',items:[
          'Tempos máximos: Concentrado de Hemácias (CH) <b>4 horas</b>; Concentrado de Plaquetas (CP) 1 hora; Plasma (PFC) 1 hora; Crioprecipitado 30 minutos.',
          'Monitorar os sinais vitais aos <b>15 min, 30 min e 1 hora</b> após o início; manter vigilância constante e deixar a campainha ao alcance do paciente.',
          'Não transfundir em bomba de infusão — a transfusão deve ser <b>gravitacional</b>; se mais de um componente, seguir a sequência crio → plaquetas → concentrado de hemácias.'
        ]},
        {n:5,h:'Observações',items:[
          'Manter avaliação do paciente nas 24 horas após a transfusão pela possibilidade de reações; em caso de sinais de reação, <b>pausar imediatamente</b> a infusão, comunicar o médico e seguir o POP-ENF-67.',
          'Duas ou mais bolsas devem ficar refrigeradas (2 a 8 °C) na geladeira do posto; não transfundir hemocomponentes em via compartilhada com medicações.'
        ]}
      ],
      pool:[
        {q:'O tempo máximo de infusão do Concentrado de Hemácias (CH) é de:',
         o:['1 hora','2 horas','4 horas','30 minutos'],a:2,d:2},
        {q:'A transfusão de hemocomponentes deve ser:',
         o:['Em bomba de infusão contínua','Gravitacional (sem bomba)','Em pressurizador','Por seringa'],a:1,d:2},
        {q:'Os sinais vitais durante a transfusão devem ser monitorados:',
         o:['Apenas no início','Aos 15 min, 30 min e 1 hora após o início','Somente ao final','De hora em hora apenas'],a:1,d:2},
        {q:'A conferência dos dados da bolsa com o paciente deve ser:',
         o:['Feita por um único profissional','Dupla (preferencialmente por enfermeiro)','Dispensável se houver pressa','Feita só pelo médico'],a:1,d:3},
        {q:'Diante de sinais de reação transfusional, deve-se:',
         o:['Reduzir a velocidade e observar','Pausar imediatamente a infusão e seguir o POP-ENF-67','Trocar a bolsa','Acelerar para terminar logo'],a:1,d:3}
      ]
    },

    {
      id:'pop-67', code:'POP-ENF-67', version:'1.0', emission:'12/01/2026',
      title:'Manejo de reações transfusionais',
      executantes:'Médicos e equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar e padronizar as condutas em caso de reações transfusionais (RT) — efeito ou resposta indesejável associado temporalmente à administração de sangue ou hemocomponente.',
          'As RT classificam-se em imediatas (durante a transfusão ou até 24 h) e tardias (após 24 h).'
        ]},
        {n:2,h:'Sinais de alerta',items:[
          'Principais sinais e sintomas: <b>febre e/ou calafrios, cefaleia, náuseas/vômitos, dor no local da infusão, dor torácica e/ou lombar, alterações na pressão arterial e alterações respiratórias</b>.',
          'Gravidade: Grau I (leve), Grau II (moderado), Grau III (grave, risco iminente de vida) e Grau IV (óbito atribuído à transfusão).'
        ]},
        {n:3,h:'Conduta do técnico de enfermagem',items:[
          '<b>Pausar imediatamente a infusão</b> e comunicar o enfermeiro do setor.',
          'Não descartar o hemocomponente — apenas clampear a via e manter o equipo conectado (não abrir a via, para evitar contaminação).',
          'Verificar os sinais vitais, manter a permeabilidade do acesso com SF 0,9% e auxiliar médico e enfermeiro nas condutas; registrar a intercorrência.'
        ]},
        {n:4,h:'Conduta do enfermeiro e médico',items:[
          'Enfermeiro: avaliar imediatamente o paciente, comunicar o médico plantonista, examinar rótulos/registros para verificar erro de identificação, contatar a agência transfusional (HIJG), realizar a Notificação de Evento Adverso e registrar.',
          'Médico: avaliar o paciente o mais breve possível, prescrever as medicações/medidas conforme a sintomatologia e solicitar exames se necessário.'
        ]},
        {n:5,h:'Observações',items:[
          'Se indicado, a agência transfusional solicita a devolução da bolsa (proteger o equipo, acondicionar com gelox e enviar ao banco de sangue do HIJG).',
          'A notificação à autoridade sanitária pelo sistema NOTIVISA é realizada pela agência transfusional.'
        ]}
      ],
      pool:[
        {q:'Ao identificar sinais de reação transfusional, a primeira conduta do técnico de enfermagem é:',
         o:['Acelerar a infusão','Pausar imediatamente a infusão','Retirar o acesso','Aguardar o médico'],a:1,d:2},
        {q:'Em relação ao hemocomponente após a suspeita de reação, deve-se:',
         o:['Descartá-lo imediatamente','Não descartar; clampear a via e manter o equipo conectado','Abrir a via para lavar','Devolvê-lo sem proteção'],a:1,d:3},
        {q:'O acesso venoso, após pausar a transfusão, deve ser mantido permeável com:',
         o:['Glicose 50%','Solução fisiológica 0,9%','Heparina','Água destilada'],a:1,d:2},
        {q:'A Grau IV de gravidade da reação transfusional corresponde a:',
         o:['Reação leve','Reação moderada','Reação grave com risco de vida','Óbito atribuído à transfusão'],a:3,d:2},
        {q:'A notificação à autoridade sanitária (NOTIVISA) é realizada:',
         o:['Pelo técnico de enfermagem','Pela agência transfusional','Pelo médico assistente','Pela família'],a:1,d:2}
      ]
    },

    {
      id:'pop-40', code:'POP-ENF-40', version:'1.3', emission:'15/03/2019',
      title:'Cateterismo vesical de alívio',
      executantes:'Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a sondagem vesical de alívio, promover o esvaziamento vesical e coletar urina para exames. Consiste na introdução de um cateter pelo meato urinário até a bexiga por curto período, sendo removido logo em seguida.'
        ]},
        {n:2,h:'Preparo asséptico',items:[
          'Conferir nome e data de nascimento na pulseira, inspecionar a região e realizar a higiene do períneo com clorexidina degermante/sabonete.',
          'Abrir a bandeja de cateterismo de forma asséptica, colocar clorexidina aquosa na cuba e preparar ~10 ml de lidocaína gel (descartar o primeiro jato); calçar luvas estéreis e realizar a antissepsia do períneo no sentido anteroposterior.'
        ]},
        {n:3,h:'Introdução do cateter',items:[
          'Mulher: separar os grandes e pequenos lábios sem soltar, expor o meato e introduzir o cateter na uretra, colocando a ponta distal na cuba para a drenagem.',
          'Homem: segurar o pênis na base, injetar no mínimo 10 ml de lidocaína gel na uretra e introduzir o cateter; drenar a urina.',
          'Quantificar a diurese, observar as características da urina e <b>retirar o cateter após o esvaziamento completo</b> da bexiga.'
        ]},
        {n:4,h:'Observações',items:[
          'O calibre do cateter é avaliado conforme o meato: adultos nº 8, 10 e 12; crianças nº 4, 6 e 8.',
          'Comunicar o médico quando a urina drenada for menor que 50 ml ou superior a 400 ml no intervalo de 4–6 horas; capacitar o cuidador em caso de alta com sondagem intermitente.'
        ]}
      ],
      pool:[
        {q:'O cateterismo vesical de alívio caracteriza-se por:',
         o:['Cateter permanente com balonete','Introdução do cateter por curto período, removido logo em seguida','Sonda fixada por 30 dias','Punção suprapúbica'],a:1,d:2},
        {q:'A antissepsia do períneo deve ser feita no sentido:',
         o:['Posteroanterior','Anteroposterior','Circular do meato para dentro','Aleatório'],a:1,d:2},
        {q:'No paciente masculino, injeta-se na uretra, no mínimo:',
         o:['2 ml de lidocaína gel','5 ml de lidocaína gel','10 ml de lidocaína gel','20 ml de lidocaína gel'],a:2,d:2},
        {q:'O calibre de cateter recomendado para adultos é:',
         o:['nº 4, 6 e 8','nº 8, 10 e 12','nº 14, 16 e 18','nº 20 e 22'],a:1,d:1},
        {q:'Deve-se comunicar o médico quando a urina drenada for:',
         o:['Entre 100 e 300 ml','Menor que 50 ml ou maior que 400 ml em 4–6 h','Amarelo-clara','De 200 ml'],a:1,d:2}
      ]
    },

    {
      id:'pop-41', code:'POP-ENF-41', version:'1.3', emission:'05/04/2019',
      title:'Cateterismo vesical de demora',
      executantes:'Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e indicações',items:[
          'Padronizar a sondagem vesical de demora — introdução de cateter na bexiga pela uretra, mantido para monitorar o débito urinário, realizar irrigação e proteger lesões perineais do contato com a urina.',
          'Indicado em impossibilidade de micção espontânea, controle rigoroso do débito, hematúria com irrigação contínua, imobilização prolongada e cuidados de fim de vida.'
        ]},
        {n:2,h:'Preparo asséptico',items:[
          'Conferir nome e data de nascimento na pulseira, inspecionar a região e higienizar o períneo; abrir a bandeja de forma asséptica e conectar a sonda Foley ao coletor (sistema fechado estéril), mantendo no campo estéril.',
          'Preparar lidocaína gel; realizar a antissepsia do períneo no sentido anteroposterior e expor o meato uretral.'
        ]},
        {n:3,h:'Introdução e fixação',items:[
          'Introduzir a sonda Foley lentamente até retornar urina, avançando até a porção final a fim de evitar inflar o balonete no canal uretral.',
          'Insuflar o balonete com o volume de <b>água destilada estéril</b> recomendado pelo fabricante; fixar o cateter e preencher na bolsa coletora a data de inserção, nº do cateter e enfermeiro responsável.'
        ]},
        {n:4,h:'Observações',items:[
          'Não fazer desmame para a retirada da sonda; manter a bolsa coletora <b>sempre abaixo do nível da bexiga e nunca no chão</b>; avaliar diariamente a fixação e realizar higiene íntima diária.',
          'Na coleta de urina, usar técnica asséptica e desinfetar o ponto de coleta com álcool 70% antes da aspiração; atentar às medidas de prevenção de infecção do trato urinário.'
        ]}
      ],
      pool:[
        {q:'O balonete da sonda de demora deve ser insuflado com:',
         o:['Ar','Água destilada estéril','Soro fisiológico','Lidocaína gel'],a:1,d:2},
        {q:'A bolsa coletora de urina deve ser mantida:',
         o:['Acima do nível da bexiga','Sempre abaixo do nível da bexiga e nunca no chão','No chão ao lado da cama','Na altura do tórax'],a:1,d:2},
        {q:'A sonda deve ser introduzida até a porção final a fim de evitar:',
         o:['Dor no paciente','Inflar o balonete no canal uretral','Refluxo de urina','Obstrução'],a:1,d:3},
        {q:'Para a retirada da sonda de demora:',
         o:['Fazer desmame gradual','Não fazer desmame','Pinçar por 24h antes','Reduzir o balonete aos poucos'],a:1,d:2},
        {q:'Na coleta de urina pela sonda, deve-se:',
         o:['Desconectar o sistema e coletar do coletor','Usar técnica asséptica e desinfetar o ponto de coleta com álcool 70%','Coletar da bolsa coletora','Trocar a sonda antes'],a:1,d:2}
      ]
    },

    {
      id:'pop-42', code:'POP-ENF-42', version:'1.1', emission:'01/10/2020',
      title:'Administração de medicamentos por hipodermóclise',
      executantes:'Enfermeiro, técnico de enfermagem e médico',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Preparar e administrar, de forma contínua ou intermitente, medicamentos ou fluidos isotônicos no tecido subcutâneo. É importante terapêutica em idosos e em Cuidados Paliativos, para reposição hidroeletrolítica em desidratação leve a moderada, difícil acesso venoso ou restrição da via oral.'
        ]},
        {n:2,h:'Locais e volumes',items:[
          'Locais e volume máximo: abdome e interescapular até 1000 ml/24h; anterolateral da coxa até 1500 ml/24h; subclavicular e deltoide até 250 ml/24h.',
          'Administrar no terço médio da face anterolateral das coxas, região interescapular, abdominal (≥4 dedos da cicatriz umbilical), subclavicular e terço médio da face lateral do braço.'
        ]},
        {n:3,h:'Técnica',items:[
          'Após antissepsia, fazer a prega cutânea e introduzir a agulha com o bisel para cima em ângulo de <b>30° a 45°</b>, com o sentido <b>centrípeto</b> (voltado para o centro do corpo).',
          'Desfazer a prega e tracionar o êmbolo: se houver retorno de sangue, interromper e reiniciar em outro local (distância mínima de 5 cm); fixar com filme transparente, datar e assinar.',
          'Após medicamentos intermitentes, administrar 2 ml de SF 0,9%; trocar o dispositivo agulhado a cada 72 horas; manter velocidade de infusão entre 60 e 125 ml/h.'
        ]},
        {n:4,h:'Observações e contraindicações',items:[
          'Diluir as medicações 1:1 com água para injeção ou SF 0,9%; administrar até 3 medicamentos compatíveis no mesmo acesso. <b>Não administrar</b> por hipodermóclise: diazepam, diclofenaco, fenitoína, eletrólitos não diluídos, fármacos com pH extremo e sangue/derivados.',
          'Contraindicada em situações emergenciais, instabilidade hemodinâmica, desidratação severa, anasarca, infecções/lesões de pele no local, trombocitopenia grave e proximidade de articulações/proeminências ósseas.'
        ]}
      ],
      pool:[
        {q:'O ângulo de introdução da agulha na hipodermóclise é de:',
         o:['90°','30° a 45°','15°','60° a 90°'],a:1,d:2},
        {q:'A hipodermóclise é especialmente indicada em:',
         o:['Situações de emergência','Idosos e Cuidados Paliativos','Choque hipovolêmico','Reposição de sangue'],a:1,d:2},
        {q:'O dispositivo agulhado da hipodermóclise deve ser trocado a cada:',
         o:['24 horas','48 horas','72 horas','7 dias'],a:2,d:2},
        {q:'Qual destes NÃO pode ser administrado por hipodermóclise?',
         o:['Dipirona','Morfina','Diazepam','Ondansetrona'],a:2,d:3},
        {q:'Se houver retorno de sangue ao tracionar o êmbolo, deve-se:',
         o:['Injetar mesmo assim','Interromper e reiniciar em outro local (mín. 5 cm)','Aspirar todo o sangue','Reduzir a velocidade'],a:1,d:2}
      ]
    },

    {
      id:'pop-38', code:'POP-ENF-38', version:'1.3', emission:'01/10/2020',
      title:'Nebulização',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Administrar medicação nas vias aéreas superiores, umidificar a via aérea, facilitar a drenagem e fluidificar secreções brônquicas e auxiliar na redução da inflamação brônquica.',
          'A nebulização libera pequenas partículas de agentes farmacológicos associados ao oxigênio no tecido epitelial mucoso do trato respiratório.'
        ]},
        {n:2,h:'Técnica',items:[
          'Conferir nome e data de nascimento na pulseira, questionar alergias e colocar o paciente sentado ou em posição de Fowler.',
          'Conectar o inalador à fonte de O₂ ou ar comprimido e abrir a válvula do fluxômetro entre <b>4 e 6 L/min</b>, observando a formação de névoa.',
          'Oferecer o nebulizador, ajustar na face e manter a inalação durante o tempo indicado ou até acabar a solução; orientar o paciente colaborativo a respirar lenta e profundamente.',
          'Fechar a válvula quando a névoa parar de sair; checar a administração e registrar.'
        ]},
        {n:3,h:'Observações',items:[
          'Não ligar a nebulização acima de <b>5 a 6 L/min</b> no fluxômetro; certificar que a montagem do kit ficou estável.',
          'Trocar o kit de nebulização a cada 24 horas (uso individual); interromper a medicação se houver reações e comunicar o enfermeiro/médico; na alta, retirar o fluxômetro e encaminhar à CME.'
        ]}
      ],
      pool:[
        {q:'A válvula do fluxômetro na nebulização deve ser aberta entre:',
         o:['1 a 2 L/min','4 a 6 L/min','8 a 10 L/min','10 a 15 L/min'],a:1,d:2},
        {q:'O kit de nebulização deve ser trocado a cada:',
         o:['12 horas','24 horas','48 horas','7 dias'],a:1,d:2},
        {q:'A posição indicada para o paciente durante a nebulização é:',
         o:['Decúbito ventral','Sentado ou em Fowler','Trendelenburg','Decúbito lateral esquerdo'],a:1,d:1},
        {q:'O paciente colaborativo deve ser orientado a:',
         o:['Prender a respiração','Respirar lenta e profundamente','Respirar rápido e curto','Falar durante a inalação'],a:1,d:1},
        {q:'O kit de nebulização é:',
         o:['Compartilhado entre pacientes','De uso individual','Reesterilizado a cada uso','Descartado a cada hora'],a:1,d:1}
      ]
    },

    {
      id:'pop-39', code:'POP-ENF-39', version:'1.4', emission:'15/09/2008',
      title:'Oxigenoterapia em adultos',
      executantes:'Equipe de Enfermagem',
      origem:'Unidades de internação e UTI',
      setores:['assistencial','uti','cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e indicações',items:[
          'Corrigir e reduzir os sintomas de hipoxemia, aliviar a dispneia e evitar efeitos deletérios ao SNC, respiratório e cardiovascular, ofertando oxigênio em baixo ou médio fluxo sem procedimentos invasivos.',
          'Indicada na hipoxemia/hipóxia: dispneia, taquipneia, <b>SpO₂ &lt; 90%</b> em ar ambiente, taquicardia, esforço respiratório, cianose/palidez, agitação e quadros agudos (crise asmática, fadiga respiratória, suspeita de choque).'
        ]},
        {n:2,h:'Cateter nasal tipo óculos',items:[
          'Conectar o fluxômetro à saída de O₂ e ao umidificador; calçar luvas e posicionar o paciente sentado em semi-Fowler ou Fowler-alta.',
          'Ajustar o cateter tipo óculos acima e atrás de cada orelha e abaixo da região mentoniana; <b>trocar o cateter a cada 7 dias</b>.',
          'Cateter nasofaríngeo: lubrificar com SF 0,9%, introduzir na cavidade nasal (medida nariz–lóbulo da orelha) e trocar de narina a cada 12 horas, se contínuo.'
        ]},
        {n:3,h:'Máscara facial / macronebulização',items:[
          'Montar o umidificador com água destilada estéril, posicionar a máscara (menor ângulo no nariz, maior no queixo) sem comprimir os olhos e fixá-la confortavelmente.',
          'Trocar a água destilada (dose única) junto com o circuito a cada 24 horas; <b>nunca completar o reservatório</b> nem retornar a água acumulada no extensor; encaminhar o circuito à CME.'
        ]},
        {n:4,h:'Observações',items:[
          'O oxigênio é uma medicação e tem efeitos colaterais perigosos (atelectasia e toxicidade do oxigênio); avaliar continuamente FC, FR, SpO₂ e sinais de hipóxia.',
          'No cateter tipo óculos/baixo fluxo, recomenda-se não colocar água/soro no umidificador para evitar aerossolização.'
        ]}
      ],
      pool:[
        {q:'A oxigenoterapia é indicada quando a SpO₂ em ar ambiente está:',
         o:['Acima de 95%','Abaixo de 90%','Em 100%','Entre 96 e 99%'],a:1,d:2},
        {q:'O cateter nasal tipo óculos deve ser trocado a cada:',
         o:['24 horas','3 dias','7 dias','30 dias'],a:2,d:2},
        {q:'Na macronebulização, a água destilada e o circuito devem ser trocados a cada:',
         o:['12 horas','24 horas','48 horas','7 dias'],a:1,d:2},
        {q:'Sobre o reservatório/umidificador da máscara, deve-se:',
         o:['Completar com água sempre que baixar','Nunca completar; trocar por dose única','Reaproveitar a água do extensor','Encher até o topo'],a:1,d:2},
        {q:'O oxigênio, como medicação, pode causar efeitos colaterais como:',
         o:['Hipertensão e febre','Atelectasia e toxicidade do oxigênio','Hipoglicemia','Bradicardia'],a:1,d:3}
      ]
    },

    {
      id:'pop-35', code:'POP-ENF-35', version:'1.4', emission:'01/10/2020',
      title:'Verificação de saturação de oxigênio não invasiva',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Verificar a saturação parcial de oxigênio nos tecidos (SpO₂) por monitorização não invasiva. A oximetria de pulso mede a concentração de oxigênio arterial pela difusão de luz vermelha e infravermelha através da pele.'
        ]},
        {n:2,h:'Técnica',items:[
          'Verificar a prescrição (frequência da monitorização e saturação desejada) e desinfetar o sensor com a solução padronizada.',
          'Conferir nome e data de nascimento na pulseira; instruir o paciente a respirar normalmente; retirar esmalte ou unhas postiças se necessário.',
          'A preferência é o <b>dedo indicador</b>, mas o sensor pode ser posicionado em outros quirodáctilos, pododáctilos ou lóbulos auriculares; aguardar a leitura atingir valor constante.'
        ]},
        {n:3,h:'Observações',items:[
          'Manter o alarme sonoro sempre acionado; a oximetria deve ser instalada em todos os pacientes internados na UTI.',
          'Reposicionar o sensor em <b>rodízio a cada 4 horas</b>; não usar esparadrapo/fita crepe/micropore no dedal do cabo; em extremidades frias, aquecê-las antes da verificação.'
        ]}
      ],
      pool:[
        {q:'A oximetria de pulso mede:',
         o:['A pressão arterial','A saturação de oxigênio (SpO₂)','A glicemia','A temperatura'],a:1,d:1},
        {q:'O local de preferência para o sensor do oxímetro é:',
         o:['O lóbulo da orelha','O dedo indicador','O dorso da mão','O hálux sempre'],a:1,d:1},
        {q:'O sensor de oximetria deve ser reposicionado em rodízio a cada:',
         o:['1 hora','4 horas','12 horas','24 horas'],a:1,d:2},
        {q:'Antes do acoplamento do sensor, quando necessário, deve-se:',
         o:['Aquecer a água','Retirar esmalte ou unhas postiças','Aplicar álcool no dedo','Comprimir a unha'],a:1,d:1},
        {q:'Em relação ao alarme sonoro do monitor, deve-se:',
         o:['Mantê-lo desligado para não incomodar','Mantê-lo sempre acionado','Acioná-lo só à noite','Ignorá-lo na UTI'],a:1,d:2}
      ]
    },

    {
      id:'pop-36', code:'POP-ENF-36', version:'1.4', emission:'01/10/2020',
      title:'Administração de nutrição parenteral',
      executantes:'Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Proporcionar o suprimento energético e nutricional por via endovenosa em pacientes com impossibilidade/restrição de dieta oral ou enteral. A nutrição parenteral (NP) é uma mistura estéril administrada diretamente na corrente sanguínea quando o trato gastrointestinal não pode ser usado.'
        ]},
        {n:2,h:'Recebimento e conferência',items:[
          'Receber a NP da farmácia e inspecionar a integridade da embalagem e a solução quanto a partículas, precipitações e alteração de cor — <b>não administrar se houver alterações</b>.',
          'Conferir na etiqueta nome, atendimento, data/hora da prescrição e validade, confrontando com a prescrição; preencher o rótulo com os dados do paciente, instalação/validade e vazão.'
        ]},
        {n:3,h:'Preparo asséptico e instalação',items:[
          'Desinfetar a bancada, higienizar as mãos, colocar máscara cirúrgica e reduzir o número de pessoas no local; abrir o material de forma asséptica e calçar luvas estéreis.',
          'Preencher o equipo com a NP, proteger as conexões e instalar na <b>via exclusiva</b> do acesso venoso central; ligar e programar a bomba de infusão conforme a prescrição.'
        ]},
        {n:4,h:'Observações',items:[
          'A NP é atividade <b>privativa do enfermeiro</b> e deve ser infundida em via exclusiva — evitar torneirinhas, coleta de sangue e outras soluções; verificar a permeabilidade do acesso antes de instalar.',
          'Não adicionar elementos à bolsa (risco de incompatibilidade e trombos); não infundir a bolsa por mais de 24 h (lipídios 12 h); trocar o equipo a cada nova bolsa; atentar a sinais de hipoglicemia se houver descontinuidade repentina.'
        ]}
      ],
      pool:[
        {q:'A administração de nutrição parenteral é atividade:',
         o:['De qualquer membro da equipe','Privativa do enfermeiro','Do técnico de enfermagem','Do nutricionista à beira-leito'],a:1,d:2},
        {q:'A NP deve ser infundida:',
         o:['Em via compartilhada com outras drogas','Na via exclusiva do acesso venoso central','Por via periférica comum','Junto com coleta de sangue'],a:1,d:3},
        {q:'Se a solução de NP apresentar partículas, precipitações ou alteração de cor, deve-se:',
         o:['Agitar e administrar','Não administrar e comunicar a farmácia','Filtrar e administrar','Aquecer antes de instalar'],a:1,d:2},
        {q:'Um saco de Nutrição Parenteral não deve ser infundido por mais de:',
         o:['6 horas','12 horas','24 horas','48 horas'],a:2,d:2},
        {q:'Diante de descontinuidade repentina da NP, deve-se atentar para sinais de:',
         o:['Hipertensão','Hipoglicemia','Febre','Bradicardia'],a:1,d:2}
      ]
    },

    {
      id:'pop-37', code:'POP-ENF-37', version:'1.2', emission:'25/05/2020',
      title:'Preparo e identificação do corpo pós-morte',
      executantes:'Enfermagem, medicina e registro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Definir os cuidados dispensados ao corpo após a constatação do óbito pela equipe médica, mantendo-o livre de odores, evitando o extravasamento de secreções e garantindo a entrega do corpo correto.'
        ]},
        {n:2,h:'Responsabilidades médico/registro',items:[
          'Médico: atestar e registrar o óbito, preencher a Declaração de Óbito (DO) e comunicar os familiares.',
          'Registro: entregar a DO para preenchimento e imprimir a folha de identificação de óbito para o setor.'
        ]},
        {n:3,h:'Preparo do corpo',items:[
          'Após a constatação, posicionar o corpo em decúbito dorsal, desligar os equipamentos, soltar os lençóis e recolocar a prótese dentária; fechar os olhos pressionando as pálpebras (ou fixar com fita).',
          'Despir e higienizar o corpo com clorexidina degermante; retirar os dispositivos invasivos e realizar curativo compressivo nos locais com drenagem de secreções; colocar fralda.',
          'Manter decúbito dorsal com braços fletidos sobre o tórax, fixar mandíbula, punhos e tornozelos com atadura; transferir para a maca forrada, <b>fixar a folha de identificação na altura do tórax</b> e encaminhar à morgue.'
        ]},
        {n:4,h:'Observações',items:[
          'A DO tem 3 vias — a <b>via amarela</b> é entregue à família (levada à Central de Óbitos) e as demais ficam no prontuário; respeitar as crenças dos familiares.',
          'Em caso de encaminhamento ao IML/SVO, não manipular o corpo nem retirar as roupas; em potencial doador de córneas, além de fechar a pálpebra, colocar gaze úmida.'
        ]}
      ],
      pool:[
        {q:'Após a constatação do óbito, o corpo deve ser posicionado em:',
         o:['Decúbito ventral','Decúbito dorsal','Posição de Sims','Fowler'],a:1,d:1},
        {q:'A folha de identificação do paciente deve ser fixada:',
         o:['No pé da maca','Na altura do tórax','Na cabeça','No braço'],a:1,d:1},
        {q:'A via da Declaração de Óbito entregue à família é a:',
         o:['Branca','Amarela','Rosa','Verde'],a:1,d:2},
        {q:'Em caso de encaminhamento ao IML/SVO, deve-se:',
         o:['Higienizar e retirar as roupas','Não manipular o corpo nem retirar as roupas','Realizar tamponamento','Remover dispositivos invasivos'],a:1,d:3},
        {q:'Em potencial doador de córneas, além de fechar a pálpebra, recomenda-se:',
         o:['Aplicar colírio','Colocar gaze úmida','Manter os olhos abertos','Aplicar pomada'],a:1,d:2}
      ]
    },

    {
      id:'pop-32', code:'POP-ENF-32', version:'1.3', emission:'01/10/2020',
      title:'Teste de Allen',
      executantes:'Enfermeiro, médico e acadêmicos sob supervisão',
      origem:'Todos os setores do Hospital',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Verificar a circulação arterial da mão pela análise da perfusão das artérias radial e ulnar, testando a suficiência da artéria ulnar e a presença de circulação colateral adequada antes de puncionar a artéria radial.'
        ]},
        {n:2,h:'Técnica',items:[
          'Posicionar o paciente em decúbito dorsal ou sentado, com o braço estendido e a palma da mão voltada para cima; localizar os pulsos radial e ulnar.',
          'Solicitar que o paciente feche a mão e comprimir <b>simultaneamente</b> as artérias radial e ulnar; pedir que abra e feche a mão algumas vezes e a mantenha aberta e relaxada até ficar pálida.',
          'Liberar a pressão sobre a artéria <b>ulnar</b>, mantendo a compressão na radial, e contar o tempo de enchimento capilar (retorno da coloração avermelhada da palma).'
        ]},
        {n:3,h:'Interpretação',items:[
          'Resultado <b>satisfatório (negativo)</b>: retorno da coloração palmar em até <b>7 segundos</b> após a descompressão da ulnar — a artéria radial pode ser puncionada.',
          'Resultado <b>insatisfatório (positivo)</b>: retorno superior a 7 segundos — NÃO puncionar a artéria radial nesse membro (risco isquêmico); repetir o teste no outro membro.'
        ]},
        {n:4,h:'Observações',items:[
          'O teste é subjetivo e qualitativo; a oximetria de pulso pode aumentar sua confiabilidade.',
          'Em paciente não colaborativo ou inconsciente, elevar a mão acima da cabeça, comprimir radial e ulnar até a palidez, retornar a mão e descomprimir a ulnar.'
        ]}
      ],
      pool:[
        {q:'O teste de Allen avalia:',
         o:['A pressão arterial','A circulação colateral da mão pela artéria ulnar','A glicemia capilar','A frequência cardíaca'],a:1,d:2},
        {q:'Durante o teste, ao liberar a pressão, mantém-se a compressão na artéria:',
         o:['Ulnar','Radial','Braquial','Femoral'],a:1,d:2},
        {q:'O resultado é SATISFATÓRIO (negativo) quando a coloração palmar retorna em até:',
         o:['3 segundos','7 segundos','15 segundos','30 segundos'],a:1,d:2},
        {q:'Diante de um resultado INSATISFATÓRIO (positivo), deve-se:',
         o:['Puncionar a artéria radial normalmente','NÃO puncionar a radial nesse membro e repetir o teste no outro','Puncionar a artéria ulnar','Aguardar 1 hora e repetir'],a:1,d:3},
        {q:'O teste de Allen é realizado antes de:',
         o:['Glicemia capilar','Puncionar a artéria radial / coletar gasometria','Aplicar injeção IM','Sondagem vesical'],a:1,d:2}
      ]
    },

    {
      id:'pop-33', code:'POP-ENF-33', version:'1.4', emission:'15/04/2026',
      title:'Coleta de gasometria arterial',
      executantes:'Enfermeiros e médicos',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a coleta de sangue arterial por punção ou cateter, avaliando as trocas gasosas e o equilíbrio ácido-básico. A gasometria mensura pH, PaCO₂, HCO₃, SpO₂ e Base Excess (BE).'
        ]},
        {n:2,h:'Considerações',items:[
          'O local mais indicado é a <b>artéria radial</b> (superficial, de fácil acesso e com circulação colateral pela ulnar); sequência preferencial: radial → braquial → femoral (esta evitada pelo maior risco).',
          'Realizar o <b>Teste de Allen</b> antes da punção radial para assegurar a circulação colateral; a punção arterial é privativa do Enfermeiro ou do médico (COFEN).'
        ]},
        {n:3,h:'Punção com scalp/agulha',items:[
          'Conferir nome e data de nascimento na pulseira, posicionar o membro, palpar o pulso arterial e realizar antissepsia com clorexidina alcoólica/álcool 70%.',
          'Inserir a agulha com o bisel para cima em ângulo de <b>30° a 45°</b> (radial e braquial) ou 60° a 90° (femoral); o sangue deve fluir espontaneamente (pulsátil) para a seringa.',
          'Retirar a agulha e aplicar <b>pressão firme por pelo menos 5 minutos</b> (mais se anticoagulado); fazer curativo compressivo e registrar.'
        ]},
        {n:4,h:'Coleta pelo circuito de PAI',items:[
          'Fechar a torneira de 3 vias para a monitorização, fazer assepsia da torneirinha, aspirar e descartar 2–5 ml de sangue e, com nova seringa, aspirar o volume da gasometria.',
          'Após a coleta, realizar o flush (lavagem) do cateter com a solução de preenchimento, garantindo que não reste sangue, e zerar o monitor.'
        ]},
        {n:5,h:'Observações',items:[
          'Hematomas e sangramentos são as intercorrências mais frequentes — prevenir com compressão por ≥5 minutos. Não puncionar o mesmo local mais de duas vezes (risco de trauma vascular/nervoso).',
          'Observar palidez, cianose ou dor intensa no membro após o procedimento e comunicar o médico imediatamente.'
        ]}
      ],
      pool:[
        {q:'O local mais indicado para a coleta de gasometria arterial é a artéria:',
         o:['Femoral','Radial','Braquial','Pediosa'],a:1,d:2},
        {q:'O ângulo de inserção da agulha nas artérias radial e braquial é de:',
         o:['10° a 20°','30° a 45°','60° a 90°','90° fixo'],a:1,d:2},
        {q:'Após retirar a agulha, deve-se aplicar pressão firme por pelo menos:',
         o:['30 segundos','1 minuto','5 minutos','15 minutos'],a:2,d:2},
        {q:'Antes da punção da artéria radial, é essencial realizar:',
         o:['Glicemia capilar','O Teste de Allen','Eletrocardiograma','Raio-X'],a:1,d:2},
        {q:'Na coleta pelo circuito de PAI, antes de coletar a amostra deve-se:',
         o:['Injetar 10 ml de soro','Aspirar e descartar 2–5 ml de sangue','Trocar todo o cateter','Heparinizar a veia'],a:1,d:3}
      ]
    },

    {
      id:'pop-29', code:'POP-ENF-29', version:'1.5', emission:'29/09/2021',
      title:'Administração de medicação por via vaginal',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o preparo e a administração de medicamentos no canal vaginal (supositórios, comprimidos, óvulos, geleias, cremes e pomadas), para preparar cirurgias, tratar/prevenir infecções, realizar contracepção ou reposição hormonal.'
        ]},
        {n:2,h:'Preparo',items:[
          'Conferir nome e data de nascimento na pulseira, questionar alergias e garantir a privacidade com biombo.',
          'Se o procedimento for realizado por profissional do sexo masculino, é <b>obrigatória a presença de uma testemunha do sexo feminino</b>.'
        ]},
        {n:3,h:'Administração',items:[
          'Remover o medicamento da embalagem e colocá-lo no aplicador; solicitar à paciente que urine para esvaziar a bexiga e que faça a higiene íntima.',
          'Posicionar a paciente em posição ginecológica (deitada, pernas fletidas e abertas), afastar os grandes e pequenos lábios e introduzir o aplicador (ou óvulo/supositório) na vagina.',
          'Empurrar o êmbolo lentamente para depositar o produto no canal vaginal; retirar e descartar o aplicador (uso único); colocar absorvente se necessário.',
          'Orientar a paciente a permanecer em decúbito dorsal por <b>15 a 20 minutos</b> para melhor absorção.'
        ]},
        {n:4,h:'Observações',items:[
          'Observar sangramento, secreções, irritação local ou prurido (sugestivo de reação alérgica); se houver lesão de mucosa, comunicar o enfermeiro.',
          'Em pacientes deambulantes, administrar de preferência ao dormir (a posição deitada favorece a retenção); não reutilizar aplicadores.'
        ]}
      ],
      pool:[
        {q:'Quando o procedimento vaginal é realizado por profissional do sexo masculino:',
         o:['Não há exigência especial','É obrigatória a presença de uma testemunha do sexo feminino','Deve ser feito apenas pela manhã','Exige autorização escrita'],a:1,d:2},
        {q:'A posição indicada para a administração de medicação vaginal é:',
         o:['Decúbito ventral','Posição ginecológica (pernas fletidas e abertas)','Sentada ereta','Em pé'],a:1,d:1},
        {q:'Após a administração, a paciente deve permanecer em decúbito dorsal por:',
         o:['1 a 2 minutos','5 minutos','15 a 20 minutos','1 hora'],a:2,d:2},
        {q:'Em pacientes deambulantes, a medicação vaginal deve ser administrada de preferência:',
         o:['Pela manhã ao acordar','Ao dormir','Após as refeições','Em qualquer horário'],a:1,d:2},
        {q:'O aplicador vaginal:',
         o:['Pode ser reutilizado após higiene','É descartável e de uso único','É esterilizado entre usos','É reutilizado pela mesma paciente'],a:1,d:1}
      ]
    },

    {
      id:'pop-30', code:'POP-ENF-30', version:'1.4', emission:'29/09/2021',
      title:'Administração de medicação por via retal',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a introdução de medicamento no reto (supositórios, soluções ou pomadas) e a administração de enema retal, para medicações laxativas, tópicas analgésicas/anti-inflamatórias ou para limpar o intestino antes de exames e cirurgias.'
        ]},
        {n:2,h:'Posicionamento',items:[
          'Conferir nome e data de nascimento na pulseira, questionar alergias e garantir a privacidade com biombo.',
          'Realizar higiene íntima se necessário e colocar o paciente em <b>posição de Sims</b> (decúbito lateral esquerdo, com o membro inferior direito em flexão).'
        ]},
        {n:3,h:'Supositório',items:[
          'Remover o supositório da embalagem e orientar o paciente a inspirar profundamente pela boca.',
          'Afastar a prega interglútea e introduzir o supositório com o dedo indicador da mão dominante até cerca de <b>5 a 7 cm</b>, direcionando-o para o umbigo.',
          'Evitar cortar o supositório; se necessário para a dose, cortar no sentido longitudinal.'
        ]},
        {n:4,h:'Fleet enema / enema',items:[
          'Fleet enema: lubrificar a cânula, afastar a prega interglútea e introduzir a ponta em direção à cicatriz umbilical até cerca de 4 cm, injetando todo o medicamento; manter a posição até sentir vontade de evacuar.',
          'Enema: preparar a solução, conectar o equipo (retirar o filtro e o ar), demarcar 10 cm na sonda retal, introduzir e programar o tempo de infusão conforme a prescrição.'
        ]},
        {n:5,h:'Observações / contraindicações',items:[
          'Contraindicada em diarreia, lesões e perfurações no reto, incapacidade de reter a medicação, arritmias cardíacas ou pós-infarto do miocárdio (devido à estimulação vagal).',
          'Não administrar em dor abdominal não diagnosticada; se houver resistência na introdução, não forçar — interromper e comunicar o enfermeiro/médico.'
        ]}
      ],
      pool:[
        {q:'A posição indicada para a administração de medicação por via retal é:',
         o:['Decúbito dorsal','Posição de Sims (decúbito lateral esquerdo)','Posição ginecológica','Sentado'],a:1,d:2},
        {q:'O supositório deve ser introduzido até aproximadamente:',
         o:['1 a 2 cm','5 a 7 cm','10 a 12 cm','15 cm'],a:1,d:2},
        {q:'Se for necessário cortar o supositório para obter a dose, o corte deve ser:',
         o:['No sentido transversal','No sentido longitudinal','Em diagonal','Não se deve cortar nunca'],a:1,d:2},
        {q:'A via retal é CONTRAINDICADA em casos de:',
         o:['Constipação leve','Arritmias cardíacas ou pós-infarto do miocárdio','Febre','Cefaleia'],a:1,d:3},
        {q:'Havendo resistência na introdução do supositório, deve-se:',
         o:['Forçar a entrada','Não forçar, interromper e comunicar o enfermeiro/médico','Usar mais lubrificante e empurrar','Trocar de posição e insistir'],a:1,d:2}
      ]
    },

    {
      id:'pop-31', code:'POP-ENF-31', version:'1.6', emission:'06/05/2026',
      title:'Realização de teste de glicemia capilar',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a aferição da glicemia capilar, monitorizar o perfil glicêmico e detectar alterações para auxiliar a conduta médica/nutricional, controlando a glicemia e prestando assistência imediata na hipo ou hiperglicemia.'
        ]},
        {n:2,h:'Horários padronizados',items:[
          'Seguir os horários institucionais: jejum (06h), pré-prandial almoço (11h), pós-prandial (14h), pré-prandial jantar (17h) e noite (22h).'
        ]},
        {n:3,h:'Técnica',items:[
          'Conferir nome e data de nascimento na pulseira; realizar a antissepsia do local com álcool 70% e aguardar secar completamente.',
          'Escolher a <b>lateral do dedo</b> (minimiza a dor), fazer pressão da polpa digital, lancetar e obter uma gota de sangue.',
          'Aproximar a tira reagente já conectada ao glicosímetro e deixar cair o sangue; realizar leve compressão com algodão seco para a hemostasia.',
          'Avaliar o resultado, comunicar o enfermeiro/médico, realizar as correções conforme a prescrição e registrar; fazer rodízio dos locais de punção.'
        ]},
        {n:4,h:'Hipoglicemia e referências',items:[
          'Tratar a hipoglicemia pela <b>regra dos 15</b>: ingerir 15 g de carboidrato de rápida absorção, aguardar 15 minutos em repouso e medir novamente; repetir até a meta acima de 70 mg/dL.',
          'Símbolos: LO (low) = glicemia abaixo de 20–10 mg/dL; HI (high) = acima de 500–600 mg/dL. Jejum normal (sem diabetes): 70 a 99 mg/dL.'
        ]}
      ],
      pool:[
        {q:'O local aconselhado para a punção da glicemia capilar é:',
         o:['O centro da polpa digital','A lateral do dedo, pois minimiza a dor','A unha','O dorso da mão'],a:1,d:2},
        {q:'A regra dos 15 para tratar hipoglicemia consiste em:',
         o:['15 ml de água a cada 15 min','Ingerir 15 g de carboidrato, aguardar 15 min e remedir','15 unidades de insulina','Aguardar 15 horas'],a:1,d:2},
        {q:'No glicosímetro, o símbolo "LO" indica:',
         o:['Glicemia muito alta','Glicemia abaixo de 20–10 mg/dL','Erro da fita','Bateria fraca'],a:1,d:2},
        {q:'Antes de lancetar, em relação à antissepsia, deve-se:',
         o:['Lancetar com a pele molhada de álcool','Aguardar o álcool secar completamente','Não fazer antissepsia nunca','Usar água oxigenada'],a:1,d:1},
        {q:'A cada novo teste de glicemia capilar deve-se:',
         o:['Usar sempre o mesmo dedo','Fazer rodízio dos locais de punção','Puncionar a veia','Reutilizar a lanceta'],a:1,d:1}
      ]
    },

    {
      id:'pop-24', code:'POP-ENF-24', version:'1.5', emission:'28/09/2021',
      title:'Preparo e administração de medicações por via subcutânea',
      executantes:'Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a administração de medicação no tecido subcutâneo, exatamente abaixo da derme, onde a absorção na corrente sanguínea é lenta.'
        ]},
        {n:2,h:'Materiais',items:[
          'EPI, prontuário, bandeja, seringa (de 1 ml com agulha acoplada ou conforme o volume), agulha de aspiração e agulha de administração 13x4 mm.',
          'Algodão ou gaze, álcool 70% ou clorexidina alcoólica 0,5%, medicamento prescrito e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Preparo e locais',items:[
          'Higienizar as mãos, desinfetar a ampola/frasco com álcool 70%, aspirar a medicação e trocar a agulha de aspiração pela de administração; identificar a seringa.',
          'Locais de aplicação (com rodízio): braços, abdômen, nádegas e coxas, conforme as características do paciente.'
        ]},
        {n:4,h:'Administração',items:[
          'Conferir nome e data de nascimento na pulseira, questionar alergias, posicionar o paciente e realizar antissepsia com movimento centrífugo, deixando secar.',
          'Fazer a prega cutânea entre os dedos indicador e polegar; introduzir a agulha com o bisel para cima em ângulo de <b>45°</b> (pouco tecido subcutâneo) ou <b>90°</b> nos demais pacientes.',
          'Soltar a prega e aspirar (exceto anticoagulantes); não havendo sangue, injetar lentamente; se atingir vaso, trocar a agulha e reiniciar, pois soluções oleosas/em suspensão por via EV podem causar embolia.',
          'Retirar a agulha aplicando algodão gentilmente, <b>não massagear</b>, desprezar sem reencapar na caixa de perfurocortante e registrar.'
        ]},
        {n:5,h:'Observações',items:[
          'Geralmente aplica-se até 3 ml (exceto hipodermóclise). Na heparina ou outro anticoagulante, <b>não se traciona o êmbolo</b> (não aspirar) para evitar lesão tecidual.',
          'Evitar áreas inflamadas, hipotróficas, com nódulos, paresias/plegias; manter distância de 3 cm da cicatriz umbilical; realizar rodízio e não recapar agulhas.'
        ]}
      ],
      pool:[
        {q:'A via subcutânea deposita o medicamento:',
         o:['No músculo','No tecido subcutâneo, abaixo da derme','Na veia','Na epiderme'],a:1,d:1},
        {q:'Na administração de heparina ou anticoagulante por via SC, deve-se:',
         o:['Aspirar tracionando o êmbolo','NÃO tracionar o êmbolo (não aspirar)','Massagear após a aplicação','Usar ângulo de 15°'],a:1,d:2},
        {q:'O ângulo de introdução da agulha na via SC, em paciente com pouco tecido subcutâneo, é de:',
         o:['90°','45°','15°','60°'],a:1,d:2},
        {q:'O volume geralmente aplicado por via subcutânea (exceto hipodermóclise) é de até:',
         o:['10 ml','5 ml','3 ml','1 ml'],a:2,d:2},
        {q:'Após a aplicação subcutânea, em relação à região, deve-se:',
         o:['Massagear vigorosamente','Não massagear a região','Aplicar calor','Comprimir por 5 minutos'],a:1,d:1}
      ]
    },

    {
      id:'pop-25', code:'POP-ENF-25', version:'1.5', emission:'28/09/2021',
      title:'Administração de medicação por via ocular',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a aplicação de medicamentos nos olhos, sob a forma de colírio ou pomada, para dilatar ou contrair pupilas, acelerar a cicatrização, combater infecções e lubrificar os olhos.'
        ]},
        {n:2,h:'Administração de colírios',items:[
          'Orientar o paciente a olhar para cima e para o lado externo.',
          'Puxar a pálpebra inferior com a mão não dominante até expor a bolsa conjuntival e, com a mão dominante, instilar as gotas a uma distância de <b>1 a 2 cm</b>.',
          'Liberar a pálpebra e solicitar que feche os olhos delicadamente, sem apertar; remover o excesso no canto externo com gaze.',
          'Solicitar que o paciente permaneça com os olhos fechados por <b>3 minutos</b>.'
        ]},
        {n:3,h:'Pomada oftalmológica',items:[
          'Abrir a bisnaga sem contaminar a ponta; orientar o cliente a olhar para cima e puxar a pálpebra inferior.',
          'Aplicar uma pequena quantidade ao longo da borda do saco conjuntival, a partir da comissura palpebral interna.',
          'Liberar a pálpebra, solicitar que feche os olhos sem apertar e movimente os olhos em círculos com as pálpebras fechadas; remover o excesso com gaze.'
        ]},
        {n:4,h:'Observações',items:[
          'Remover secreções/sujidades com gaze umidificada em soro fisiológico antes da administração; agitar o colírio e manter a tampa com a face interna voltada para cima.',
          'Não encostar o conta-gotas ou o tubo no olho do paciente (risco de transmitir infecção); aguardar 5 minutos entre medicamentos oftálmicos distintos; nunca usar colírio de outro paciente.'
        ]}
      ],
      pool:[
        {q:'O colírio deve ser instilado a uma distância de:',
         o:['Encostando no olho','1 a 2 cm','5 a 10 cm','15 cm'],a:1,d:1},
        {q:'Após instilar o colírio, solicita-se ao paciente permanecer com os olhos fechados por:',
         o:['10 segundos','1 minuto','3 minutos','10 minutos'],a:2,d:2},
        {q:'A pomada oftalmológica é aplicada:',
         o:['Diretamente sobre a córnea','Ao longo da borda do saco conjuntival, a partir da comissura interna','Sobre a pálpebra superior','Na sobrancelha'],a:1,d:2},
        {q:'Entre a aplicação de medicamentos oftálmicos distintos, deve-se aguardar:',
         o:['Nenhum intervalo','5 minutos','30 minutos','1 hora'],a:1,d:2},
        {q:'Em relação ao conta-gotas/tubo da pomada, deve-se:',
         o:['Encostar no olho para precisão','Não encostar no olho, evitando transmitir infecção','Limpar na pálpebra','Compartilhar entre pacientes'],a:1,d:2}
      ]
    },

    {
      id:'pop-26', code:'POP-ENF-26', version:'1.5', emission:'28/09/2021',
      title:'Administração de medicação por via auricular (otológica)',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a administração de medicamentos em gotas ou pomadas na região auricular, para preparar exames, tratar patologias otológicas, diminuir o cerúmen, aliviar a dor e anestesiar.'
        ]},
        {n:2,h:'Administração',items:[
          'Identificar-se, conferir nome e data de nascimento na pulseira e questionar alergias.',
          'Colocar o paciente deitado sobre o lado não afetado ou sentado com a cabeça inclinada, de modo que a orelha afetada fique em posição superior.',
          'Segurar o lóbulo e tracioná-lo delicadamente <b>para cima e para trás (adulto)</b> ou para baixo e para trás (criança), retificando o canal auditivo.',
          'Observar presença de secreção (se houver, limpar o canal cuidadosamente com gaze).'
        ]},
        {n:3,h:'Instilação',items:[
          'Instilar as gotas na <b>parede lateral do canal auditivo</b>, conforme a prescrição, evitando que o conta-gotas toque no orifício do ouvido.',
          'Orientar o paciente a permanecer na posição por <b>3 minutos</b>; repetir na outra orelha se necessário.',
          'Recolher o material, higienizar as mãos e a bandeja, checar a administração na prescrição e registrar.'
        ]}
      ],
      pool:[
        {q:'Para retificar o canal auditivo do ADULTO, traciona-se o lóbulo da orelha:',
         o:['Para baixo e para frente','Para cima e para trás','Para baixo e para trás','Apenas para cima'],a:1,d:2},
        {q:'Na criança, o lóbulo da orelha deve ser tracionado:',
         o:['Para cima e para trás','Para baixo e para trás','Para frente','Não se traciona'],a:1,d:2},
        {q:'As gotas otológicas devem ser instiladas:',
         o:['Diretamente no tímpano','Na parede lateral do canal auditivo','No orifício do ouvido','No lóbulo'],a:1,d:2},
        {q:'Após a instilação, o paciente deve permanecer na posição por:',
         o:['30 segundos','3 minutos','10 minutos','Não precisa aguardar'],a:1,d:1},
        {q:'O paciente deve ser posicionado:',
         o:['Sobre o lado afetado','Sobre o lado não afetado, com a orelha afetada para cima','Em pé','Em decúbito ventral'],a:1,d:1}
      ]
    },

    {
      id:'pop-27', code:'POP-ENF-27', version:'1.5', emission:'28/09/2021',
      title:'Administração de medicação por via nasal',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a administração de medicamentos líquidos na mucosa ou orifício nasal, para tratar doenças inflamatórias/infecciosas do trato aéreo superior, estancar hemorragias, umedecer a mucosa ou auxiliar o tratamento hormonal.'
        ]},
        {n:2,h:'Administração',items:[
          'Conferir nome e data de nascimento na pulseira e questionar alergias.',
          'Posicionar o paciente sentado ou em decúbito dorsal, com a cabeça inclinada para trás (com travesseiro ou elevando a cabeceira), se a condição permitir.',
          'Se necessário, realizar a higiene nasal com haste flexível ou gaze umedecida em soro fisiológico 0,9%.',
          'Segurar a testa com a mão não dominante, mantendo distância de <b>0,5 a 1 cm</b> acima do nariz e inclinar a ponta do gotejador na direção do septo nasal, sem tocar a narina.'
        ]},
        {n:3,h:'Após a instilação',items:[
          'Administrar o medicamento na mucosa nasal e solicitar que o paciente permaneça com a cabeça inclinada para trás.',
          'Orientar o paciente a <b>não assoar o nariz</b> imediatamente após a administração.',
          'Recolher o material, higienizar as mãos e a bandeja, checar a administração e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Aspirar as vias respiratórias superiores antes, em pacientes com muita secreção e incapacidade de eliminá-las (conforme POP-ENF-60); usar frascos de uso individual.',
          'A instilação por via nasal é contraindicada em obstruções nasais, traumatismos, epistaxe, rinorragia/rinorreia e cirurgias de vias respiratórias superiores em pós-operatório imediato.'
        ]}
      ],
      pool:[
        {q:'O paciente deve ser posicionado com a cabeça:',
         o:['Inclinada para frente','Inclinada para trás','Lateralizada','Reta'],a:1,d:1},
        {q:'A higiene nasal prévia, quando necessária, é feita com:',
         o:['Álcool 70%','Haste flexível ou gaze umedecida em soro fisiológico 0,9%','Clorexidina','Água oxigenada'],a:1,d:1},
        {q:'O gotejador deve ser mantido a uma distância de:',
         o:['Encostado na narina','0,5 a 1 cm acima do nariz','5 cm','10 cm'],a:1,d:2},
        {q:'Imediatamente após a administração nasal, o paciente deve ser orientado a:',
         o:['Assoar o nariz com força','Não assoar o nariz','Espirrar','Deitar de bruços'],a:1,d:2},
        {q:'A via nasal é contraindicada em casos de:',
         o:['Rinite alérgica leve','Epistaxe, traumatismos e obstruções nasais','Espirros','Coriza simples'],a:1,d:2}
      ]
    },

    {
      id:'pop-20', code:'POP-ENF-20', version:'1.5', emission:'15/05/2015',
      title:'Preparo e administração de medicações por via oral, sublingual e gastroenteral',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o preparo e a administração de medicações pelas vias oral (VO), sublingual e gastroenteral (sonda), garantindo a segurança do paciente.'
        ]},
        {n:2,h:'Certos da administração segura',items:[
          'Conferir os “certos” da medicação: paciente certo, medicamento certo, dose certa, via certa, hora certa, validade, forma/apresentação, compatibilidade, orientação ao paciente, tempo de administração, ação e registro certos.'
        ]},
        {n:3,h:'Via oral (VO)',items:[
          'Comprimidos, cápsulas e drágeas: quando necessário macerar, diluir <b>cada medicamento separadamente</b>; comprimidos sulcados podem ser partidos.',
          'Gotas, xarope e suspensão: agitar antes do uso e medir com seringa dosadora para garantir a dose exata.'
        ]},
        {n:4,h:'Via sublingual',items:[
          'Colocar o medicamento sob a língua, onde as mucosas são vascularizadas, e aguardar a absorção completa — o paciente não deve engolir nem mastigar.'
        ]},
        {n:5,h:'Via gastroenteral (sonda)',items:[
          'Macerar e diluir cada medicamento separadamente; pausar a dieta e lavar a sonda com cerca de 20 ml de água antes de administrar.',
          'Entre múltiplos medicamentos, lavar a sonda com 5–10 ml de água; ao final, lavar novamente e manter a sonda fechada por cerca de 30 minutos em caso de sifonagem.',
          'Não abrir cápsulas, salvo orientação específica para administração por sonda.'
        ]}
      ],
      pool:[
        {q:'Ao macerar comprimidos para administração, deve-se:',
         o:['Macerar todos juntos para agilizar','Macerar e diluir cada medicamento separadamente','Nunca macerar comprimidos','Macerar somente os sulcados'],a:1,d:2},
        {q:'Gotas, xarope e suspensão devem ser:',
         o:['Administrados sem agitar','Agitados e medidos com seringa dosadora','Diluídos em soro fisiológico','Medidos sempre em copo comum'],a:1,d:2},
        {q:'Na via sublingual, o medicamento é colocado:',
         o:['Entre a bochecha e a gengiva','Sob a língua, aguardando a absorção','Engolido com água','Sobre o palato'],a:1,d:1},
        {q:'Antes de administrar medicação pela sonda, deve-se:',
         o:['Acelerar a dieta','Pausar a dieta e lavar a sonda com ~20 ml de água','Não lavar a sonda','Manter a sonda aberta'],a:1,d:2},
        {q:'Entre a administração de múltiplos medicamentos pela sonda, lava-se com:',
         o:['20 ml de soro','5–10 ml de água','Nada entre eles','50 ml de água'],a:1,d:2}
      ]
    },

    {
      id:'pop-22', code:'POP-ENF-22', version:'1.4', emission:'30/09/2020',
      title:'Preparo e administração de medicações por via intramuscular',
      executantes:'Técnicos de Enfermagem e Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a administração de medicamentos por via intramuscular (IM), depositando o medicamento no tecido muscular, que tem rico suprimento sanguíneo e permite absorção mais rápida.',
          'Ao selecionar o local, considerar a massa muscular, a espessura do tecido adiposo, a idade do paciente, a irritabilidade da droga e a distância de vasos e nervos importantes.'
        ]},
        {n:2,h:'Materiais',items:[
          'EPI, biombo, prontuário, bandeja, copo descartável, seringa, agulha de aspiração e agulha de administração (30x7/30x8 ou 25x7/25x8 mm).',
          'Algodão ou gaze, álcool 70% ou clorexidina alcoólica 0,5%, medicamento prescrito e soluções para reconstituição/diluição.'
        ]},
        {n:3,h:'Preparo',items:[
          'Higienizar as mãos, fazer a desinfecção da ampola/frasco com álcool 70% e reconstituir/diluir conforme o Guia institucional.',
          'Aspirar a medicação e <b>trocar a agulha de aspiração pela de administração</b> de acordo com o local; identificar a seringa com etiqueta e protegê-la com a própria embalagem.'
        ]},
        {n:4,h:'Administração',items:[
          'Identificar-se, conferir nome completo e data de nascimento na pulseira, questionar alergias e garantir a privacidade com biombo.',
          'Realizar antissepsia com movimento firme, único e centrífugo (do centro para fora) e deixar secar; introduzir a agulha em movimento único, com o bisel para cima, em ângulo de <b>90°</b>.',
          'Aspirar para certificar-se de que não há sangue, administrar lentamente, retirar a agulha com movimento firme e <b>não massagear</b> a região.',
          'Desprezar o conjunto seringa-agulha sem reencapar na caixa de perfurocortante; checar a administração na prescrição e registrar.'
        ]},
        {n:5,h:'Locais e volumes',items:[
          'Deltoide: 2 a 3 dedos (2,5–5 cm) abaixo do acrômio, volume máximo 2 ml.',
          'Vasto lateral da coxa: terço médio, volume máximo 4 ml. Ventroglútea: triângulo em “V” entre os dedos, máximo 4 ml. Dorsoglútea: quadrante supralateral, máximo 5 ml.',
          'Técnica em “Z”: tracionar a pele 2,5–3,5 cm, injetar e soltar a pele após retirar a agulha, evitando refluxo e irritação.'
        ]},
        {n:6,h:'Observações',items:[
          'A região dorsoglútea não é recomendada para imunizações pelo risco de lesão do nervo ciático; realizar rodízio dos locais e não recapar agulhas.',
          'A prega muscular é indicada em idosos, desidratados ou com pouca massa muscular.'
        ]}
      ],
      pool:[
        {q:'O ângulo de introdução da agulha na via intramuscular é de:',
         o:['15°','45°','90°','30°'],a:2,d:1},
        {q:'Após administrar a injeção intramuscular, deve-se:',
         o:['Massagear vigorosamente','Não massagear a região','Aplicar calor local','Reencapar a agulha'],a:1,d:2},
        {q:'O volume máximo recomendado para o músculo deltoide é de:',
         o:['5 ml','4 ml','2 ml','1 ml'],a:2,d:2},
        {q:'A região dorsoglútea NÃO é recomendada para imunizações devido ao risco de:',
         o:['Hematoma','Lesão do nervo ciático','Dor intensa','Infecção'],a:1,d:2},
        {q:'A técnica em “Z” tem como finalidade:',
         o:['Acelerar a absorção','Bloquear o medicamento no músculo, evitando refluxo e irritação','Reduzir a dose','Facilitar a aspiração'],a:1,d:3}
      ]
    },

    {
      id:'pop-17', code:'POP-ENF-17', version:'1.5', emission:'30/09/2020',
      title:'Higiene oral',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Realizar a higiene oral conservando a boca saudável e proporcionar conforto e bem-estar.',
          'Prevenir a pneumonia associada à ventilação mecânica (PAVM).'
        ]},
        {n:2,h:'Materiais necessários',items:[
          'EPI, solução antisséptica aquosa de clorexidina 0,12%, escova de dente, pacote de higiene oral, gaze e creme dental.',
          'Copo descartável, água filtrada, toalha de papel e de rosto, cuba rim ou bacia.',
          'Seringa de 20 ml, sistema de aspiração e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Paciente dependente',items:[
          'Higienizar as mãos, paramentar EPI, identificar-se, conferir a pulseira e montar o sistema de aspiração; posicionar o paciente em Fowler (se possível) ou decúbito lateral.',
          'Proteger o tórax com a toalha e colocar a cuba rim ao lado do queixo; abrir o pacote, usar a espátula para abrir gentilmente a boca e observar a cavidade oral.',
          'Verificar e retirar próteses dentárias removíveis; com escova/gaze umedecida na clorexidina, limpar dentes, gengivas, mucosa da bochecha e palato; escovar a língua suavemente (evitando o reflexo de vômito).',
          'Finalizar passando gaze seca <b>sem fricção</b>; com a seringa, instilar água e aspirar a cavidade para remover espuma e resíduos; hidratar os lábios e registrar.'
        ]},
        {n:4,h:'Paciente em ventilação mecânica',items:[
          'Manter em decúbito dorsal com cabeceira elevada entre <b>30° e 45°</b>; verificar a fixação do tubo orotraqueal e a pressão do balonete (cuff) — manter entre 18–22 mmHg ou 25–30 cmH₂O.',
          'Posicionar o cateter de aspiração com a extremidade voltada para o assoalho bucal e <b>manter a sucção durante todo o procedimento</b> com a mão dominante.',
          'Realizar a limpeza com a solução antisséptica, escovar a língua suavemente e aspirar a cavidade durante e após a escovação; hidratar os lábios.'
        ]}
      ],
      pool:[
        {q:'A higiene oral em paciente sob ventilação mecânica visa principalmente prevenir:',
         o:['Cárie dentária','A pneumonia associada à ventilação mecânica (PAVM)','Halitose','Gengivite apenas'],a:1,d:2},
        {q:'A solução antisséptica padronizada para a higiene oral é:',
         o:['Álcool 70%','Clorexidina aquosa 0,12%','Água oxigenada','Soro fisiológico apenas'],a:1,d:2},
        {q:'No paciente em VM, durante a higiene oral, o cateter de aspiração deve:',
         o:['Ser desligado para não incomodar','Ficar com a extremidade no assoalho bucal, mantendo sucção durante todo o procedimento','Ser introduzido na traqueia','Ser usado só ao final'],a:1,d:3},
        {q:'A pressão do balonete (cuff) a manter durante a higiene oral no paciente em VM é:',
         o:['18–22 mmHg ou 25–30 cmH₂O','5–10 cmH₂O','40–50 mmHg','Não precisa verificar'],a:0,d:3},
        {q:'Ao escovar a língua, deve-se:',
         o:['Esfregar com força para remover toda a saburra','Escovar suavemente, evitando o estímulo do reflexo de vômito','Usar apenas álcool','Pular essa etapa'],a:1,d:2}
      ]
    },

    {
      id:'pop-18', code:'POP-ENF-18', version:'1.6', emission:'13/07/2021',
      title:'Inserção e cuidados com a sonda nasogástrica (SNG)',
      executantes:'Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Administrar medicamentos e dietas.',
          'Drenar efluentes do estômago e promover descompressão gástrica.'
        ],note:'<b>Definição:</b> a sondagem nasogástrica (SNG) é a inserção de uma sonda pelas fossas nasais até o estômago. <b>Contraindicações:</b> atresia e estenose de esôfago, varizes esofagianas e pós-operatório de cirurgia realizada via trans-nasal. Na equipe de enfermagem, a passagem da sonda gástrica é <b>atividade privativa do enfermeiro</b>.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, lidocaína gel, sonda nasogástrica, estetoscópio e seringa de 20 ml de bico.',
          'Gaze, caneta permanente, papel-toalha, clorexidina alcoólica 0,5%, água e sabonete.',
          'Fixador (nasofix), esparadrapo ou micropore, hidrocoloide (se necessário), biombo e solução desinfetante.'
        ]},
        {n:3,h:'Inserção',items:[
          'Verificar a prescrição, escolher a numeração da sonda, higienizar as mãos, paramentar EPI, identificar-se e conferir a pulseira; avaliar o estado mental e posicionar em Fowler com o pescoço flexionado.',
          '<b>Medir a sonda:</b> da ponta do nariz ao lóbulo da orelha, descer até o apêndice xifoide e acrescentar 3 a 4 cm; marcar com caneta. Lubrificar a ponta com lidocaína gel.',
          'Passar a sonda por uma das narinas, solicitando que o paciente degluta ao passar pela faringe; introduzir sem forçar até a marca. Se houver cianose, tosse ou angústia respiratória, <b>retirar e refazer</b>.',
          '<b>Verificar o posicionamento:</b> aspirar conteúdo gástrico ou injetar 20 ml de ar e auscultar com o estetoscópio sobre o epigástrio a presença de som estridente. Fixar a sonda e registrar.'
        ]},
        {n:4,h:'Fixação e cuidados',items:[
          'Fixar com o fixador específico ou, na indisponibilidade, com esparadrapo/micropore (usar hidrocoloide para proteger a pele, sobretudo se alergia).',
          'Trocar a fixação a cada <b>48 horas</b> ou sempre que necessário, com rodízio do local e <b>sem tracionar a narina</b>; realizar higiene oral a cada 6 horas.',
          'Para administrar medicação pela SNG, manter a sonda fechada por no mínimo 30 minutos após, antes de abrir em sifonagem.',
          'Toda vez que a sonda for aberta, dobrá-la para evitar a entrada de ar.'
        ]}
      ],
      pool:[
        {q:'A passagem da sonda gástrica, na equipe de enfermagem, é atividade privativa:',
         o:['Do técnico de enfermagem','Do enfermeiro','Do auxiliar','Da nutrição'],a:1,d:2},
        {q:'A medida da sonda nasogástrica corresponde a:',
         o:['Da ponta do nariz ao lóbulo da orelha e até o apêndice xifoide, +3 a 4 cm','Apenas o comprimento do nariz à boca','Da boca ao umbigo','Um valor fixo de 50 cm'],a:0,d:3},
        {q:'Durante a passagem, se o paciente apresentar cianose, tosse ou angústia respiratória, deve-se:',
         o:['Continuar introduzindo rapidamente','Retirar o cateter e refazer o procedimento','Injetar ar imediatamente','Fixar a sonda assim mesmo'],a:1,d:2},
        {q:'Uma forma de verificar o posicionamento gástrico da sonda é:',
         o:['Pedir para o paciente falar','Injetar 20 ml de ar e auscultar som estridente sobre o epigástrio','Puxar a sonda até sair líquido claro','Observar a cor da urina'],a:1,d:2},
        {q:'A fixação da SNG deve ser trocada:',
         o:['A cada 48 horas ou sempre que necessário, sem tracionar a narina','Apenas na retirada da sonda','A cada 12 horas, tracionando a narina','Uma vez por semana'],a:0,d:2}
      ]
    },

    {
      id:'pop-19', code:'POP-ENF-19', version:'1.6', emission:'13/07/2021',
      title:'Inserção e cuidados com a sonda nasoenteral (SNE)',
      executantes:'Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar e padronizar o procedimento de inserção e manutenção do cateter nasoenteral.'
        ],note:'<b>Definição:</b> introdução de uma sonda de poliuretano pela cavidade nasal ou oral, posicionada até o <b>duodeno ou jejuno</b>. <b>Indicação:</b> pacientes que não conseguem deglutir, complementação nutricional, lesões gástricas/vômitos persistentes, graves/intubados ou com risco de broncoaspiração. <b>Contraindicações:</b> desvio de septo importante, TCE, obstrução intestinal mecânica, sangramento GI, vômitos incontroláveis, diarreia intratável, isquemia/inflamação do TGI, íleo paralítico prolongado, tumor de boca/hipofaringe e varizes esofágicas.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, lidocaína gel, sonda nasoenteral, estetoscópio e seringa de 20 ml de bico.',
          'Gaze, caneta permanente, papel-toalha, clorexidina alcoólica 0,5%, água e sabonete.',
          'Fixador (nasofix), esparadrapo ou micropore, hidrocoloide (se necessário), biombo e solução desinfetante.'
        ]},
        {n:3,h:'Inserção',items:[
          'Procedimento privativo do enfermeiro. <b>Medir a SNE:</b> da ponta do nariz ao lóbulo da orelha, deste ao apêndice xifoide e então até a cicatriz umbilical; marcar e lubrificar.',
          'Passar a sonda solicitando deglutição na faringe; se houver cianose/tosse/angústia, retirar e refazer. Verificar o posicionamento por ausculta — injetar 20 ml de ar no quadrante superior esquerdo do abdome.',
          'Retirar cuidadosamente o fio-guia (guardá-lo identificado na gaveta do paciente) e fechar a sonda. Manter a cabeceira entre <b>30° e 45°</b> e o paciente em <b>decúbito lateral direito</b> para facilitar a migração ao duodeno.',
          'Providenciar <b>controle radiológico (Raio X)</b> para confirmar o posicionamento; o médico verifica e libera o uso da sonda, registrando no prontuário.'
        ]},
        {n:4,h:'Desobstrução e cuidados',items:[
          '<b>Não utilizar o fio-guia para desobstruir</b> o cateter; injetar água morna com seringa (quanto menor a seringa, maior a pressão). Em insucesso, retirar e repassar a sonda.',
          'Checar a permeabilidade e o posicionamento antes de cada dieta e antes de medicamentos; trocar a fixação a cada 48h com rodízio, sem tracionar a narina; higiene oral a cada 6h.',
          'Monitorar sinais de broncoaspiração (dispneia, cianose, tosse, queda de saturação, taquicardia) e <b>pausar imediatamente a dieta</b>; manter a cabeceira a 30° contínuo.',
          'Lavar a sonda com 20 ml de água antes e depois de medicamentos e nas trocas de frasco; administrar os medicamentos separadamente, lavando de 5 a 10 ml entre eles; trocar o equipo a cada 24h.'
        ]}
      ],
      pool:[
        {q:'A sonda nasoenteral (SNE) é posicionada até:',
         o:['O estômago','O duodeno ou jejuno','O esôfago','A faringe'],a:1,d:2},
        {q:'A medida da SNE acrescenta, em relação à nasogástrica, o trajeto até:',
         o:['O lóbulo da orelha','A cicatriz umbilical','O joelho','A clavícula'],a:1,d:3},
        {q:'A confirmação definitiva do posicionamento da SNE antes de liberar o uso é feita por:',
         o:['Ausculta apenas','Controle radiológico (Raio X), com liberação médica','Cor do aspirado','Teste de pH na boca'],a:1,d:3},
        {q:'Para desobstruir a sonda nasoenteral, NÃO se deve:',
         o:['Injetar água morna com seringa','Utilizar o fio-guia para desobstruir','Avaliar as condições de reutilização','Retirar e repassar em caso de insucesso'],a:1,d:3},
        {q:'Após a inserção, para facilitar a migração da sonda ao duodeno, o paciente deve ficar em:',
         o:['Decúbito ventral','Decúbito lateral direito, com a cabeceira a 30–45°','Posição sentada reta','Trendelenburg'],a:1,d:2}
      ]
    },

    {
      id:'pop-14', code:'POP-ENF-14', version:'1.0', emission:'15/04/2026',
      title:'Cuidados com a pleurostomia',
      executantes:'Enfermeiro e Médico',
      origem:'Unidades de Internação do HNR',
      setores:['assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a assistência de enfermagem ao paciente em uso de pleurostomia, garantindo cuidado seguro e eficaz e prevenindo complicações.'
        ],note:'<b>Definição:</b> a pleurostomia aberta é a abordagem cirúrgica da cavidade torácica por meio de uma abertura mantida para a limpeza, a drenagem do espaço pleural e a higiene da cavidade (ressecção de 2 ou 3 arcos costais com retalho pleurocutâneo). É indicada quando toracocentese, pleurostomia fechada e decorticação não são suficientes — em empiema, tuberculose, câncer e derrame pleural crônico.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, gaze estéril, régua para medida e chumaço.',
          'Fita microporosa, luvas de procedimento, pacote de curativo estéril e transofix.',
          'Soro fisiológico 0,9% 500 ml, saco de lixo pequeno e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Avaliação da ferida',items:[
          'Medir o tamanho com régua descartável em cm (maior extensão vertical e horizontal, régua em ângulo reto) e a profundidade com haste flexível ou pinça.',
          'Avaliar o leito: tecido <b>necrótico</b> (preto/cinza, com exsudato purulento), <b>desvitalizado úmido</b> (esfacelo aderido), <b>de granulação</b> (avermelhado, brilhante e úmido) e de <b>epitelização</b> (rosado, das margens para o centro).',
          'Avaliar a pele perilesão (hiperemia indica aumento de exsudato), a presença de <b>fístula</b> (som de escape de ar à respiração) e o exsudato (seroso, sanguinolento ou purulento) e a dor.'
        ]},
        {n:4,h:'Troca do curativo',items:[
          'Organizar o material, higienizar as mãos, paramentar EPI, identificar-se e conferir a pulseira; posicionar o paciente em decúbito dorsal, de preferência <b>sentado (90°)</b> ou em Fowler (45°).',
          'Remover o curativo prévio de forma não traumática, avaliar a lesão e lavar a cavidade com SF 0,9% (transofix) em abundância.',
          'Fazer a limpeza mecânica delicada com gaze umedecida em SF; <b>após a limpeza, não preencher a cavidade com gazes</b>.',
          'Ocluir toda a lesão superficialmente com chumaço, fechar com fita microporosa e registrar.'
        ]},
        {n:5,h:'Observações',items:[
          'Na presença/suspeita de <b>fístula</b>, o curativo deve ser feito OBRIGATORIAMENTE com o paciente <b>sentado</b>, minimizando o risco de introduzir soro pela fístula.',
          'Observar sinais de desconforto respiratório, dispneia e taquipneia; interromper o procedimento e comunicar o médico.',
          'Na presença de tecido desvitalizado, avaliar com a equipe médica a indicação de desbridamento.',
          'Na alta, orientar os cuidados domiciliares: lavar a pleurostomia em abundância com a água corrente do chuveiro e fechar externamente com gaze e fita microporosa.'
        ]}
      ],
      pool:[
        {q:'Na presença ou suspeita de fístula, o curativo da pleurostomia deve ser feito com o paciente:',
         o:['Deitado em decúbito dorsal plano','Sentado, para minimizar o risco de introduzir soro pela fístula','Em decúbito ventral','Em Trendelenburg'],a:1,d:3},
        {q:'Após a limpeza mecânica da cavidade da pleurostomia, deve-se:',
         o:['Preencher a cavidade com gazes','Não preencher a cavidade com gazes; ocluir superficialmente com chumaço','Aplicar esparadrapo diretamente na cavidade','Deixar totalmente aberta sem cobertura'],a:1,d:2},
        {q:'O tecido de granulação saudável apresenta coloração:',
         o:['Preta e ressecada','Avermelhada, brilhante e úmida','Esbranquiçada e aderida','Amarelada e fétida'],a:1,d:2},
        {q:'A lavagem da cavidade pleural é realizada com:',
         o:['Álcool 70%','Soro fisiológico 0,9% em abundância (com transofix)','Água oxigenada pura','Clorexidina alcoólica'],a:1,d:2},
        {q:'Se durante a troca surgir dispneia/desconforto respiratório, a conduta é:',
         o:['Acelerar o curativo','Interromper o procedimento e comunicar o médico','Aumentar a irrigação','Sentar o paciente e continuar normalmente'],a:1,d:2}
      ]
    },

    {
      id:'pop-15', code:'POP-ENF-15', version:'1.4', emission:'30/09/2020',
      title:'Dieta oral com auxílio',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Nutrir e hidratar o paciente e prevenir os riscos de broncoaspiração.',
          'Padronizar o auxílio para a alimentação por via oral no paciente semidependente e dependente.'
        ],note:'<b>Definição:</b> envolve o auxílio do cuidador ou da equipe, mantendo o paciente em posição elevada e semissentada para evitar a broncoaspiração.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, mesa de cabeceira e solução desinfetante padronizada.',
          'Compressa, toalha de rosto e papel-toalha.',
          'Dieta prescrita e material para higiene oral.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Conferir a dieta prescrita, higienizar as mãos, paramentar EPI, organizar/higienizar a mesa, identificar-se e conferir a pulseira; verificar se a dieta está conforme a prescrição.',
          '<b>Observar o nível de consciência e o estado de alerta antes de ofertar</b> a dieta; posicionar o paciente em Fowler, com a cabeceira elevada a <b>60°</b>, e proteger o tórax com toalha.',
          'Estimular a independência (se conseguir segurar o talher); ofertar em pequenas porções, esperando o tempo de mastigação e deglutição e verificando a cavidade oral antes da próxima porção.',
          'Ofertar água conforme a prescrição; ao término, realizar a higiene oral e <b>manter a cabeceira elevada por 30 minutos após</b> a alimentação (depois a 30° contínuo). Registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Comunicar o enfermeiro/nutricionista sobre a aceitação da dieta.',
          'Observar a presença de engasgos e/ou sinais de broncoaspiração, <b>interrompendo imediatamente a oferta</b> dos alimentos.',
          'Observar a cavidade oral antes da oferta (presença de lesões) e orientar o familiar/acompanhante sobre a oferta da dieta.'
        ]}
      ],
      pool:[
        {q:'A posição correta do paciente para a dieta oral com auxílio é:',
         o:['Decúbito dorsal plano','Fowler, com a cabeceira elevada a 60°','Decúbito lateral','Trendelenburg'],a:1,d:2},
        {q:'Antes de ofertar cada nova porção de alimento, deve-se:',
         o:['Oferecer água gelada','Verificar a cavidade oral, observando alimento parado na boca','Acelerar a oferta','Deitar o paciente'],a:1,d:2},
        {q:'Ao perceber engasgo ou sinais de broncoaspiração, a conduta é:',
         o:['Oferecer mais água para empurrar','Interromper imediatamente a oferta dos alimentos','Continuar mais devagar','Deitar o paciente e seguir'],a:1,d:2},
        {q:'Após a alimentação, a cabeceira deve ser mantida elevada por:',
         o:['Pelo menos 30 minutos','5 minutos','Não precisa manter elevada','2 horas obrigatórias'],a:0,d:1},
        {q:'O que deve ser avaliado antes de iniciar a oferta da dieta?',
         o:['A cor da bandeja','O nível de consciência e o estado de alerta do paciente','A temperatura ambiente','O peso do paciente'],a:1,d:2}
      ]
    },

    {
      id:'pop-16', code:'POP-ENF-16', version:'1.4', emission:'30/09/2020',
      title:'Cuidados na administração de dieta enteral',
      executantes:'Enfermeiro, Técnico e Auxiliar de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Garantir a ingestão adequada de nutrientes e calorias, contribuindo para a recuperação e/ou manutenção do estado nutricional do paciente.'
        ],note:'<b>Definição:</b> a nutrição enteral administra nutrientes diretamente no trato gastrointestinal por sonda nasogástrica/nasoenteral, gastrostomia ou jejunostomia, quando o paciente não consegue ingerir alimentos adequadamente. <b>Contraindicações:</b> disfunção ou obstrução mecânica do TGI, refluxo gastroesofágico intenso, íleo paralítico, hemorragia/vômitos/diarreias graves e fístula do TGI.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, frasco de dieta e frasco de água, equipo de dieta e equipo de água.',
          'Bomba de infusão, seringa de 20 ml e estetoscópio.',
          'Bandeja, água potável ou mineral e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Orientações gerais',items:[
          'Manter a cabeceira a <b>30° continuamente</b> (salvo restrição); conferir a prescrição (volume, tempo de infusão e tipo de dieta) e confirmar os dados na etiqueta da dieta.',
          'Higienizar as mãos, verificar a integridade do frasco, identificar-se, conferir a pulseira e instalar a dieta, checando o horário na prescrição.',
          'Monitorar continuamente sinais de <b>broncoaspiração</b> (febre, dessaturação, tosse, roncos, desconforto respiratório) — pausar a dieta e avaliar.',
          'Monitorar sinais de <b>intolerância</b> (náuseas, vômito, diarreia, constipação, distensão abdominal) e comunicar o enfermeiro/médico.'
        ]},
        {n:4,h:'Administração e observações',items:[
          'Verificar o posicionamento da sonda (marcação) e <b>lavar a sonda com 20 ml de água antes de conectar a dieta e ao término/troca de frasco</b>. Na bomba, programar conforme a prescrição; na gavagem, manter o gotejamento constante e lento (gota a gota).',
          'O equipo da dieta deve ser trocado a cada <b>24 horas</b>; evitar desconectar o sistema (reduz a oferta e aumenta o risco de contaminação).',
          'Realizar higiene oral com clorexidina 0,12% três vezes ao dia e hidratar com água pela sonda de 6/6h ou conforme a prescrição.',
          'Ao administrar medicação, lavar a sonda com 20 ml de água antes e após, administrando <b>cada medicamento individualmente</b>.'
        ]}
      ],
      pool:[
        {q:'A cabeceira do paciente em dieta enteral deve ser mantida, continuamente, em:',
         o:['0° (plana)','30°','90° sempre','Decúbito lateral'],a:1,d:2},
        {q:'A sonda deve ser lavada com 20 ml de água:',
         o:['Apenas uma vez por dia','Antes de conectar a dieta e ao término/troca de frasco','Nunca, para não diluir a dieta','Somente na retirada da sonda'],a:1,d:2},
        {q:'O equipo da dieta enteral deve ser trocado a cada:',
         o:['6 horas','12 horas','24 horas','72 horas'],a:2,d:2},
        {q:'São sinais de broncoaspiração que indicam pausar a dieta:',
         o:['Fome e sede','Febre, dessaturação, tosse e roncos','Sonolência leve','Aumento do apetite'],a:1,d:2},
        {q:'Ao administrar medicações pela sonda enteral, deve-se:',
         o:['Misturar todos os medicamentos juntos','Administrar cada medicamento individualmente, lavando a sonda antes e após','Diluir na própria dieta','Não lavar a sonda'],a:1,d:2}
      ]
    },

    {
      id:'pop-11', code:'POP-ENF-11', version:'1.5', emission:'04/02/2020',
      title:'Contenção mecânica',
      executantes:'Medicina e Enfermagem',
      origem:'Todas as unidades de internação do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar as condutas frente aos pacientes com necessidade de contenção mecânica e garantir a segurança do procedimento.',
          'Proteger o paciente prevenindo lesões, traumas, quedas e exteriorização de dispositivos, e permitir a realização de exames/procedimentos.'
        ],note:'<b>Definição:</b> a contenção mecânica restringe a liberdade de movimentos e deve ser empregada <b>apenas como único meio</b> de prevenir dano imediato/iminente ao paciente ou a terceiros — conduta excepcional que deve constar no projeto terapêutico. A indicação/prescrição de contenção ao paciente psiquiátrico compete ao médico (CFM 1952/2010). Pela <b>COFEN 746/2024</b>, fora de urgência/emergência a enfermagem só a emprega sob supervisão do enfermeiro; é <b>vedado</b> seu uso com propósito de disciplina, punição ou coerção.'},
        {n:2,h:'Critérios e orientações gerais',items:[
          '<b>Indicação:</b> agitação psicomotora, síndrome de abstinência, risco de comportamento autolesivo/suicida, risco à integridade física, risco de quedas, risco de perda de dispositivos invasivos e insucesso da contenção química.',
          'A <b>abordagem verbal e o manejo químico devem preceder</b> a intervenção mecânica. A decisão é multiprofissional, com prescrição médica e prescrição de enfermagem.',
          '<b>Suspensão:</b> lesão associada à contenção, melhora do quadro clínico ou plegia de membro.',
          'Trocar a contenção na presença de sujidade/umidade e retirá-la durante a higienização (se não houver risco).'
        ]},
        {n:3,h:'Técnica',items:[
          'Verificar a prescrição, avaliar o local, paramentar EPI, observar a pele e, se necessário, aplicar loção hidratante. <b>Não fixar a contenção nas grades</b> — fixar na cama, para evitar acidentes em urgência/emergência.',
          '<b>Tipo luva:</b> dobrar a compressa, colocá-la na palma, cobrir a mão com atadura crepe até o punho e fixar.',
          '<b>Punho e tornozelo:</b> enrolar a faixa ao redor do punho/tornozelo e dar nó fixo, deixando folga de <b>um a dois dedos</b> entre o nó e a pele; manter o membro em extensão e cuidar do garroteamento.',
          '<b>Tórax/abdome:</b> faixa de ~30 cm sem comprimir as mamas. <b>Quadril/joelho:</b> conforme técnica, com fralda e faixas presas às grades fixas.'
        ]},
        {n:4,h:'Monitoramento e situações especiais',items:[
          'Manter a <b>cabeceira elevada a 30°</b> para evitar broncoaspiração; monitorar o paciente <b>a cada 2 horas</b> (sinais vitais, nível de consciência e avaliação do local) no Registro de Contenção Mecânica.',
          'Gestantes: abdome frouxo e cabeceira elevada. Problemas respiratórios: tórax frouxo e cabeceira elevada. Obesos: faixa de proteção e cabeceira elevada.',
          'MMII edemaciados e/ou com varizes: elevar e afrouxar as faixas.',
          'Durante todo o procedimento, esclarecer o paciente sobre o que está sendo feito e o <b>caráter não punitivo</b> da medida, independente do nível de consciência.'
        ]}
      ],
      pool:[
        {q:'A contenção mecânica deve ser empregada:',
         o:['Como rotina em todos os pacientes agitados','Apenas como único meio de prevenir dano imediato/iminente ao paciente ou a terceiros','Para disciplinar o paciente','Por conveniência da equipe'],a:1,d:2},
        {q:'O monitoramento do paciente em contenção mecânica deve ocorrer:',
         o:['Uma vez por turno','A cada 2 horas, registrando sinais vitais, nível de consciência e o local','Apenas no início e no fim','A cada 6 horas'],a:1,d:2},
        {q:'A contenção deve ser fixada:',
         o:['Nas grades laterais da cama','Na cama (estrutura), nunca nas grades','No suporte de soro','Na poltrona apenas'],a:1,d:3},
        {q:'Ao conter o punho, a folga adequada entre o nó e a pele é de:',
         o:['Nenhuma folga, bem firme','Um a dois dedos','Uma mão inteira','Depende do humor do paciente'],a:1,d:2},
        {q:'Antes da contenção mecânica, devem preceder:',
         o:['Apenas a prescrição médica','A abordagem verbal e o manejo químico','A alta hospitalar','A retirada de todos os dispositivos'],a:1,d:2}
      ]
    },

    {
      id:'pop-12', code:'POP-ENF-12', version:'1.4', emission:'30/09/2020',
      title:'Colocação de dispositivo urinário externo (uripen)',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Controlar o débito urinário de maneira não invasiva.',
          'Proporcionar conforto ao paciente com incontinência urinária, alteração do nível de consciência e mobilidade reduzida.',
          'Prevenir infecções do trato urinário decorrentes da cateterização de demora ou de alívio.'
        ],note:'<b>Definição:</b> é um cateter externo para incontinência urinária masculina (sonda de camisinha), constituído por uma película de látex que se ajusta ao pênis para conduzir a urina até um saco coletor.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, biombo (se necessário) e material para higiene íntima.',
          'Toalha, fralda (se necessário), dispositivo urinário externo e frasco coletor de urina.',
          'Fita adesiva microporosa e materiais para tricotomia (se necessário).'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Reunir o material, higienizar as mãos, identificar-se, paramentar EPI e garantir a privacidade (biombo); posicionar em decúbito dorsal expondo apenas a região íntima.',
          'Fazer a tricotomia da região pubiana se necessário, examinar a pele e o pênis e abrir o invólucro do coletor.',
          'Segurar o corpo do pênis com a mão não dominante e, com a dominante, desenrolar o dispositivo sobre o pênis (no sentido da glande para a base); fixar com a própria fita dupla-face <b>sem apertar</b> o corpo do pênis.',
          'Adaptar o uripen ao frasco coletor, deixando-o pendurado na cama, <b>sem contato com o chão e abaixo do nível da bexiga</b>; deixar o paciente confortável e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'A troca do uripen deve ser feita diariamente após o banho e sempre que necessário.',
          'Não instalar o dispositivo se a pele ao redor do pênis estiver lesionada; avaliar a pele na troca e retirá-lo quando houver qualquer lesão.',
          'Observar a presença de garroteamento do pênis pelo adesivo e sintomas como dor, ausência de débito urinário e inquietação.'
        ]}
      ],
      pool:[
        {q:'O dispositivo urinário externo (uripen) é indicado para:',
         o:['Controle invasivo do débito urinário','Controle não invasivo, em incontinência urinária masculina','Substituir a sondagem em mulheres','Coleta de urina estéril para cultura'],a:1,d:2},
        {q:'Ao desenrolar o uripen sobre o pênis, o sentido correto é:',
         o:['Da base para a glande','Da glande para a base','Em movimentos circulares','Indiferente'],a:1,d:2},
        {q:'O frasco coletor deve ficar:',
         o:['Acima do nível da bexiga','Abaixo do nível da bexiga e sem contato com o chão','Apoiado no chão','Preso à roupa do paciente'],a:1,d:2},
        {q:'A troca do uripen deve ocorrer:',
         o:['A cada 7 dias','Diariamente após o banho e sempre que necessário','Somente quando entupir','A cada 12 horas obrigatoriamente'],a:1,d:1},
        {q:'O dispositivo NÃO deve ser instalado quando:',
         o:['O paciente está consciente','A pele ao redor do pênis está lesionada','Há incontinência urinária','O paciente tem mobilidade reduzida'],a:1,d:2}
      ]
    },

    {
      id:'pop-13', code:'POP-ENF-13', version:'1.4', emission:'15/05/2015',
      title:'Retirada de sonda vesical de demora (SVD)',
      executantes:'Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Diminuir a probabilidade de infecção urinária e promover conforto e bem-estar ao paciente.'
        ],note:'<b>Definição:</b> é a retirada de um cateter/sonda da bexiga através do meato uretral.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, gaze e frasco para descarte de urina.',
          'Seringa descartável de 20 ml com bico e biombo (se necessário).',
          'Solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          '<b>UTI:</b> o enfermeiro avalia diariamente, após a passagem de plantão (às 7h), todos os pacientes com SVD para determinar se atendem aos critérios de permanência, seguindo o fluxograma.',
          'Verificar a prescrição, reunir o material, higienizar as mãos, paramentar EPI, identificar-se, conferir os dados na pulseira e garantir a privacidade (biombo); desprezar a urina do coletor.',
          'Posicionar o paciente — <b>masculino:</b> decúbito dorsal com MMII estendidos e afastados; <b>feminino:</b> posição ginecológica. Expor a região, clampear a extensão e retirar a fixação da sonda.',
          'Conectar a seringa na via do balonete e <b>aspirar todo o volume (15 a 20 ml)</b>; orientar o paciente a respirar profundamente e retirar a sonda lentamente. Higienizar, checar e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Retirar a sonda <b>sem fazer reeducação vesical</b>; se houver resistência à saída, interromper a retirada e comunicar o médico.',
          'Em caso de sangramento uretral, fazer compressão local e comunicar o enfermeiro/médico.',
          'Monitorar a micção espontânea nas primeiras 6 horas e a presença de incontinência, disúria, espasmos vesicais, febre e distensão vesical.'
        ]}
      ],
      pool:[
        {q:'Antes de remover a sonda vesical de demora, é imprescindível:',
         o:['Cortar a sonda com tesoura','Aspirar todo o volume do balonete (15 a 20 ml) com a seringa','Insuflar mais água no balonete','Tracionar a sonda com força'],a:1,d:3},
        {q:'Se houver resistência à saída da sonda, a conduta é:',
         o:['Forçar a retirada','Interromper a retirada e comunicar o médico','Cortar a sonda','Insuflar o balonete novamente e puxar'],a:1,d:2},
        {q:'O posicionamento correto da paciente do sexo feminino para a retirada é:',
         o:['Decúbito ventral','Posição ginecológica','Sentada','Trendelenburg'],a:1,d:2},
        {q:'Após a retirada da SVD, deve-se monitorar a micção espontânea nas:',
         o:['Primeiras 6 horas','Primeiras 48 horas','Próximas 2 horas apenas','24 horas seguintes, sem urgência'],a:0,d:2},
        {q:'Na UTI, a avaliação diária dos pacientes com SVD para manter ou retirar a sonda é feita:',
         o:['Pela zeladoria','Pelo enfermeiro, após a passagem de plantão, conforme critérios','Pelo técnico, a cada hora','Somente na alta'],a:1,d:2}
      ]
    },

    {
      id:'pop-09', code:'POP-ENF-09', version:'1.4', emission:'30/09/2020',
      title:'Banho de aspersão com auxílio',
      executantes:'Equipe de Enfermagem',
      origem:'Todos os setores de internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar a equipe quanto aos cuidados no banho do paciente, garantindo a necessidade humana básica de higiene e conforto.',
          'Padronizar a rotina do banho de aspersão com auxílio.'
        ],note:'<b>Definição:</b> a higiene corporal é um conjunto de cuidados que estimula a circulação, oportuniza exercícios e a inspeção corporal e promove bem-estar. O banho de aspersão com auxílio é a higiene corporal realizada no chuveiro com a ajuda de um profissional de saúde, ou orientada por este.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, roupa íntima/pijama ou camisola, toalha de banho e de rosto.',
          'Kit de higiene pessoal, saco plástico, hamper e cadeira para banho.',
          'Suporte de soro (se necessário), solução desinfetante padronizada, pano de limpeza e roupas de cama.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Higienizar as mãos, reunir o material, paramentar EPI, identificar-se e explicar o procedimento; fechar porta e janela para evitar correntes de ar e exposição.',
          'Higienizar a cadeira de banho, travá-la e proteger com plástico os acessos venosos e curativos; auxiliar o paciente a sentar-se e levá-lo ao banheiro.',
          'Abrir o chuveiro, regular a temperatura (testar na parte interna do antebraço) e iniciar o banho <b>pela face, deixando a região íntima por último</b>; observar a integridade da pele.',
          'Auxiliar a enxugar, passar desodorante, hidratar com creme neutro, vestir e pentear; deixar o paciente confortável na poltrona e arrumar o leito.',
          'Trocar a fixação de dispositivos e realizar curativos (ou comunicar o enfermeiro); higienizar a cadeira, comunicar a zeladoria e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Manter a cadeira de banho travada durante a transferência e o banho; o profissional não deve se ausentar do banheiro, para não deixar o paciente sozinho.',
          'Quando possível, estimular o banho independente, porém sentado e sob observação. Curativos devem ser feitos logo após o término do banho.',
          'Em caso de queda, comunicar o enfermeiro e fazer a notificação. Em caso de hipotermia, finalizar o banho, aquecer o paciente e avaliar a temperatura até a normalização.'
        ]}
      ],
      pool:[
        {q:'No banho de aspersão, a higiene corporal deve iniciar:',
         o:['Pela região íntima','Pela face, deixando a região íntima por último','Pelos membros inferiores','Pelo dorso'],a:1,d:2},
        {q:'A temperatura da água do chuveiro deve ser testada:',
         o:['Na palma da mão','Na parte interna do antebraço','Diretamente no paciente','Com termômetro retal'],a:1,d:2},
        {q:'Durante o banho no banheiro, o profissional:',
         o:['Pode se ausentar para buscar materiais','Não deve se ausentar, para não deixar o paciente sozinho','Deve deixar o paciente trancado','Pode liberar o paciente para sair andando'],a:1,d:2},
        {q:'A cadeira de banho deve permanecer:',
         o:['Destravada para facilitar o movimento','Travada durante a transferência e o banho','Sem higienização entre pacientes','Fora do banheiro'],a:1,d:2},
        {q:'Em caso de hipotermia durante o banho, a conduta é:',
         o:['Continuar o banho normalmente','Finalizar o banho, aquecer o paciente e avaliar a temperatura até normalizar','Aplicar água mais fria','Ignorar, pois é transitório'],a:1,d:2}
      ]
    },

    {
      id:'pop-10', code:'POP-ENF-10', version:'1.3', emission:'11/05/2020',
      title:'Banho no leito',
      executantes:'Equipe de Enfermagem',
      origem:'Unidades de Internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar e orientar o banho no leito, promovendo conforto e higiene com segurança e qualidade.',
          'Monitorar as condições da pele e promover o bem-estar e o relaxamento do paciente.'
        ],note:'<b>Definição:</b> higienização total ou parcial do corpo, executada em paciente com dificuldade de locomoção ou acamado. Preferencialmente realizado por <b>dois profissionais</b>.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bacia, jarra, biombo e água; toalha de rosto e de banho.',
          'Clorexidina degermante 4% e/ou sabonete líquido, produtos de higiene pessoal, camisola/pijama e material para higiene oral.',
          'Saco plástico, roupas de cama, compressa para banho, lâmina de barbear e fraldas (se necessário) e solução desinfetante.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Higienizar as mãos, reunir o material, paramentar EPI, identificar-se e explicar; fechar porta/janela e garantir a privacidade (biombo); proteger acessos e curativos com plástico.',
          'Realizar a higiene oral e iniciar a higiene corporal <b>pelo rosto</b>, seguindo a sequência face e pescoço, sempre enxaguando e secando cada área antes de prosseguir.',
          'Higienizar axilas, braços e mãos; descobrir tórax e abdome (observar a região inframamária, evitando umidade); higienizar os MMII e a região íntima.',
          'Lateralizar o paciente, lavar e secar a região dorsal e hidratar com creme neutro; trocar as roupas de cama (POP-ENF-02), colocar fralda se necessário e reposicionar em decúbito dorsal.',
          'Trocar a fixação de dispositivos e curativos (ou comunicar o enfermeiro), elevar as grades, higienizar bacia/jarra, comunicar a zeladoria e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Manter cobertas as partes do corpo que não estão sendo lavadas; orientar o familiar presente e solicitar auxílio se necessário.',
          'Verificar a pele durante o banho, principalmente nas proeminências ósseas, e comunicar qualquer alteração ao enfermeiro.',
          'Trocar a água assim que esfriar ou apresentar sujidade visível. Em caso de queda, notificar; em hipotermia, aquecer o paciente e avaliar a temperatura até a normalização.'
        ]}
      ],
      pool:[
        {q:'O banho no leito é indicado para:',
         o:['Pacientes que deambulam normalmente','Pacientes com dificuldade de locomoção ou acamados','Apenas pacientes de ambulatório','Somente no pré-operatório'],a:1,d:1},
        {q:'O banho no leito, preferencialmente, deve ser executado por:',
         o:['Um profissional','Dois profissionais','O próprio paciente','O acompanhante sozinho'],a:1,d:2},
        {q:'Ao secar cada região durante o banho no leito, deve-se:',
         o:['Deixar úmido para hidratar','Secar bem, atentando à região inframamária para evitar umidade','Aplicar talco em excesso','Não secar, apenas cobrir'],a:1,d:2},
        {q:'A água do banho deve ser trocada:',
         o:['Apenas ao final do banho','Assim que esfriar ou apresentar sujidade visível','Somente se o paciente pedir','Nunca durante o procedimento'],a:1,d:1},
        {q:'Durante o banho no leito, a pele deve ser inspecionada principalmente:',
         o:['Apenas no rosto','Nas proeminências ósseas, comunicando alterações ao enfermeiro','Somente nas mãos','Não é necessário inspecionar'],a:1,d:2}
      ]
    },

    {
      id:'pop-06', code:'POP-ENF-06', version:'1.4', emission:'07/05/2020',
      title:'Transporte de paciente extra-hospitalar',
      executantes:'Medicina, Enfermagem, Motoristas e NIR',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o fluxo do transporte dos pacientes para a realização de exames, avaliações externas e transferências.',
          'Garantir segurança no transporte dos pacientes.'
        ],note:'<b>Definição:</b> o transporte extra-hospitalar é a locomoção de pacientes fora do ambiente hospitalar, para atender emergências ou realizar transferências entre hospitais ou outros serviços de saúde. Varia de um transporte simples de baixo risco até o transporte de pacientes graves.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, prontuário físico e eletrônico, saco plástico transparente.',
          'Maca de transporte e cadeira de rodas.',
          'Torpedo de oxigênio (se necessário) e ambulância hospitalar.'
        ]},
        {n:3,h:'NIR e Enfermeiro da GENFE',items:[
          'O NIR recebe os pedidos de exames, transferências e avaliações, faz os agendamentos e comunica a unidade (data, horário de saída e preparos), alimentando a planilha de exames externos.',
          'O enfermeiro da GENFE verifica diariamente a planilha no início do plantão matutino e a encaminha ao grupo de transporte.',
          'Organiza com a equipe a logística das saídas do dia e remaneja os profissionais de enfermagem para apoio quando necessário.'
        ]},
        {n:4,h:'Enfermeiro setorial e Técnico',items:[
          'O enfermeiro setorial recebe o pedido após o agendamento, verifica as orientações/preparos, deixa o pedido junto ao prontuário em saco plástico transparente e avalia as condições clínicas.',
          'O técnico verifica a planilha, realiza o checklist pré-exame (de preferência na véspera) e confere os dados na pulseira.',
          'Encaminha o paciente à ambulância, permanece com ele no destino e, ao retornar, acomoda-o no leito, repassa as informações ao enfermeiro e registra a saída no prontuário.'
        ]},
        {n:5,h:'Observações (isolamento e situações especiais)',items:[
          '<b>Precaução respiratória:</b> todos usam máscara cirúrgica no transporte; podem ser acomodados juntos na ambulância. <b>Precaução de contato:</b> o técnico vai paramentado, o paciente usa apenas máscara cirúrgica e é encaminhado individualmente (salvo coorte autorizada pela CCIH).',
          'Ao retornar, sinalizar à equipe de higienização para a limpeza da ambulância.',
          '<b>PCSI (semi-intensivo):</b> requer acompanhamento de técnico, enfermeiro e médico. <b>PCIt (intensivo/grave, risco iminente de morte):</b> aciona-se equipe externa especializada (CERINTER/SAMU).',
          'Ressonância: o paciente deve ir com familiar/responsável (ou o médico assistente o acompanha). Urgências em fins de semana/feriados: o médico faz contato direto com o serviço e o enfermeiro aciona o transporte.'
        ]}
      ],
      pool:[
        {q:'Em precaução respiratória, durante o transporte extra-hospitalar, o paciente deve:',
         o:['Ir sem nenhuma proteção','Utilizar máscara cirúrgica, inclusive nas dependências externas','Usar apenas luvas','Ser transportado sempre sozinho na ambulância'],a:1,d:2},
        {q:'O paciente de cuidados intensivos (PCIt), grave e com risco iminente de morte, deve ser transportado:',
         o:['Apenas pelo motorista','Acionando-se equipe externa especializada (CERINTER/SAMU)','Somente pelo técnico de enfermagem','Sem acompanhamento médico'],a:1,d:3},
        {q:'O checklist pré-exame deve ser realizado, de preferência:',
         o:['No momento da saída','Na véspera (dia anterior à saída)','Após o retorno do exame','Somente se o paciente solicitar'],a:1,d:2},
        {q:'Ao retornar com o paciente em precaução de contato, deve-se:',
         o:['Liberar a ambulância imediatamente para outro uso','Sinalizar à equipe de higienização para a limpeza da ambulância','Dispensar a limpeza, pois foi rápido','Lavar apenas as mãos'],a:1,d:2},
        {q:'O pedido de exame deve ser deixado junto ao prontuário físico:',
         o:['Solto sobre a maca','Dentro de um saco plástico transparente','Com a recepção','No grupo de WhatsApp apenas'],a:1,d:1}
      ]
    },

    {
      id:'pop-07', code:'POP-ENF-07', version:'1.6', emission:'30/09/2020',
      title:'Alta hospitalar — unidade de internação',
      executantes:'Enfermeiro, Técnico de Enfermagem, Recepção, Registro e Internação',
      origem:'Unidades de Internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a alta hospitalar nas unidades de internação do HNR.',
          'Orientar os profissionais sobre as ações para otimizar a alta, sistematizando o atendimento.'
        ],note:'<b>Definição:</b> a alta é a finalização do período de internação, que ocorre pela melhora do estado do paciente ou por óbito.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, prontuário do paciente, receituário médico, encaminhamentos e pedidos de exames (se necessário).',
          'Resumo de alta médica com todas as informações pertinentes.',
          'Aviso de saída de alta assinado pelo enfermeiro da unidade e hamper.'
        ]},
        {n:3,h:'Médico e Enfermeiro',items:[
          '<b>Médico:</b> prescrever a alta, comunicar o paciente/família e fornecer/orientar o resumo de alta, receituários, encaminhamentos e pedidos de exames conforme a necessidade.',
          '<b>Enfermeiro:</b> verificar a prescrição de alta e comunicar o técnico responsável; conferir se os documentos foram entregues e orientar cuidados domiciliares.',
          'Esclarecer as dúvidas, entregar os exames/laudos do período de internação e preencher o aviso de saída em duas vias (uma para o paciente, outra no prontuário).',
          'Comunicar a nutrição e a farmácia sobre a alta e organizar o prontuário físico para encaminhamento ao SAME.'
        ]},
        {n:4,h:'Técnico, Portaria e Registro',items:[
          '<b>Técnico:</b> proceder os cuidados de enfermagem (medicar, retirar acessos venosos), auxiliar com os pertences e verificar a gaveta de medicações — entregar as de uso domiciliar ao paciente e <b>devolver as de sobra à farmácia</b>.',
          'Acompanhar o paciente até a portaria, retirar as roupas de cama para o hamper, recolher equipamentos, remover a folha de identificação/placas e comunicar a zeladoria para a higienização do leito.',
          '<b>Portaria/recepção:</b> solicitar o aviso de alta, <b>retirar a pulseira de identificação</b> e comunicar a saída ao registro. <b>Registro e internação:</b> dar alta no sistema eletrônico.'
        ]},
        {n:5,h:'Observações',items:[
          'Sem meios próprios para a alta: o médico preenche a solicitação de transporte, que é entregue ao serviço social pela enfermagem.',
          'Tuberculostático: dispensa-se medicação para 7 dias (ou 30 dias em TB multirresistente e micobactéria atípica).',
          'Antirretrovirais: dispensa-se medicação para 30 dias.',
          'Demais medicamentos prescritos na alta: o enfermeiro confirma a disponibilidade da dispensação com o farmacêutico.'
        ]}
      ],
      pool:[
        {q:'A alta hospitalar é definida como a finalização da internação que ocorre por:',
         o:['Melhora do estado do paciente ou óbito','Apenas pedido da família','Falta de leitos','Decisão exclusiva da recepção'],a:0,d:1},
        {q:'As medicações de sobra encontradas na gaveta do paciente na alta devem ser:',
         o:['Entregues ao paciente','Descartadas no lixo comum','Devolvidas à farmácia','Deixadas no posto de enfermagem'],a:2,d:2},
        {q:'A retirada da pulseira de identificação do paciente, na alta, compete:',
         o:['Ao médico','À portaria/recepção','À nutrição','À zeladoria'],a:1,d:2},
        {q:'Para pacientes com prescrição de antirretrovirais, dispensa-se medicação para:',
         o:['7 dias','15 dias','30 dias','24 horas'],a:2,d:2},
        {q:'O aviso de saída de alta deve ser preenchido:',
         o:['Em uma via, arquivada no SAME','Em duas vias: uma para o paciente e outra no prontuário','Apenas verbalmente','Somente em caso de óbito'],a:1,d:2}
      ]
    },

    {
      id:'pop-01', code:'POP-ENF-01', version:'1.5', emission:'30/09/2020',
      title:'Admissão do paciente na unidade de internação',
      executantes:'Registro, Enfermagem e Medicina',
      origem:'Unidades de Internação do HNR',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a rotina de admissão dos pacientes nas unidades de internação, sistematizando o atendimento.',
          'Facilitar a adaptação do paciente ao ambiente hospitalar e proporcionar conforto e segurança.'
        ],note:'<b>Definição:</b> é o processo pelo qual o paciente é admitido na instituição. É um momento que pode gerar apreensão no paciente e na família, por isso a admissão deve ser feita com o máximo de cuidado, de maneira gentil e cortês, para reduzir a ansiedade.'},
        {n:2,h:'Materiais necessários',items:[
          'Pulseira de identificação e folha de identificação do paciente.',
          'Prontuário eletrônico e prontuário impresso.',
          'Cadeira de rodas ou maca para transporte (se necessário) e materiais para verificação dos sinais vitais.'
        ]},
        {n:3,h:'Compete ao Registro de Internação',items:[
          'Fazer o cadastro do paciente no sistema; confirmar os dados e imprimir a pulseira de identificação.',
          'Imprimir duas vias da folha de rosto e uma folha de identificação de cabeceira e anexar ao prontuário físico.',
          'Comunicar o setor de destino sobre a chegada do paciente.'
        ]},
        {n:4,h:'Compete ao Enfermeiro',items:[
          'Verificar as condições do leito e do quarto (higienização, rede de gases, condições da cama) e solicitar a equipe para vestir o leito.',
          'Receber e acomodar o paciente, conferir os dados na pulseira (confirmação verbal) e explicar as normas e rotinas institucionais.',
          'Conferir se o prontuário está completo (folha de identificação, folhas de rosto e termo de consentimento) e comunicar o plantão médico.',
          'Realizar anamnese e exame físico, aplicar as escalas (Braden, Morse, Fugulin), realizar a prescrição de enfermagem e aprazar a prescrição médica.',
          'Comunicar os setores de nutrição e farmácia sobre a internação.'
        ]},
        {n:5,h:'Compete ao Técnico de Enfermagem',items:[
          'Vestir e organizar o leito conforme a orientação do enfermeiro e acomodar o paciente.',
          'Conferir os dados na pulseira, verificar os sinais vitais e registrar no prontuário eletrônico.',
          'Medicar conforme a prescrição, realizar os cuidados prescritos, encaminhar a exames e fazer a anotação diária.'
        ],note:'<b>Observação:</b> ao receber a reserva de vaga do NIR, o enfermeiro pode remanejar os leitos dentro da unidade para melhor acomodar o paciente, sempre comunicando o NIR, o registro e a internação.'}
      ],
      pool:[
        {q:'Ao admitir o paciente, qual postura é recomendada à equipe?',
         o:['Agilizar ao máximo, sem explicações','Acolhimento gentil e cortês, reduzindo a ansiedade do paciente e da família','Encaminhar direto ao leito sem conferir dados','Solicitar que a família resolva o cadastro'],a:1,d:1},
        {q:'A impressão e a confirmação da pulseira de identificação competem a quem?',
         o:['Ao setor de Registro de Internação','À nutrição','À farmácia','Ao próprio paciente'],a:0,d:2},
        {q:'Quais escalas o enfermeiro aplica na admissão?',
         o:['Apenas a escala de dor','Braden, Morse e Fugulin','Glasgow somente','Nenhuma escala'],a:1,d:2},
        {q:'Antes de acomodar o paciente, o enfermeiro deve verificar no leito/quarto:',
         o:['Apenas a cor da roupa de cama','Higienização, rede de gases e condições da cama','Somente a numeração do leito','A presença de visitantes'],a:1,d:2},
        {q:'Após acomodar o paciente, o técnico de enfermagem deve:',
         o:['Apenas observar à distância','Conferir a pulseira, verificar sinais vitais e registrar no prontuário','Dar alta ao paciente','Refazer o cadastro no sistema'],a:1,d:2}
      ]
    },

    {
      id:'pop-02', code:'POP-ENF-02', version:'1.4', emission:'30/09/2020',
      title:'Preparo do leito do paciente',
      executantes:'Equipe de Enfermagem',
      origem:'Unidades de Internação e Ambulatório',
      setores:['assistencial','uti','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar as rotinas e técnicas de preparo do leito do paciente.',
          'Proporcionar um ambiente acolhedor, confortável e seguro para o repouso do paciente.'
        ],note:'<b>Definição:</b> <b>leito fechado</b> — preparado para o paciente que ainda não internou; <b>leito aberto</b> — para o paciente ausente temporariamente; <b>leito com paciente acamado</b> — troca da roupa com o paciente no leito; <b>leito de operado</b> — preparado para receber o paciente após cirurgia.'},
        {n:2,h:'Materiais necessários',items:[
          'Travesseiro, fronha, lençóis e cobertor (se necessário).',
          'Impermeável e lençol móvel (se necessário), hamper.',
          'Solução desinfetante padronizada, luvas de procedimento e pano de limpeza.'
        ]},
        {n:3,h:'Procedimento geral',items:[
          'Higienizar as mãos, providenciar o material e dispô-lo na poltrona/mesa de cabeceira; calçar as luvas.',
          'Abaixar as grades laterais de ambos os lados e elevar o leito a uma posição confortável de trabalho.',
          'Higienizar o colchão com a solução desinfetante e aguardar secar completamente antes de vestir o leito.'
        ]},
        {n:4,h:'Leito com paciente acamado (2 profissionais)',items:[
          'Soltar toda a roupa de cama e virar o paciente em decúbito lateral; enrolar os lençóis sujos sob o paciente.',
          'Higienizar a metade exposta do colchão e colocar a roupa limpa nessa metade, com as bordas sob o colchão.',
          'Lateralizar o paciente para a metade limpa, remover os lençóis sujos para o hamper e higienizar a outra metade.',
          'Desenrolar a roupa limpa sobre a cama, fixá-la, posicionar o travesseiro, cobrir o paciente, elevar as grades e baixar a cama.'
        ]},
        {n:5,h:'Observações',items:[
          'Fazer a mínima movimentação possível com a roupa suja e não arrastar as roupas de cama no chão.',
          'As trocas são realizadas às segundas, quartas e sextas-feiras e sempre que necessário.',
          'Manter o leito limpo, com os lençóis esticados (evita lesão de pele), e observar a conservação de colchões e travesseiros.'
        ]}
      ],
      pool:[
        {q:'O "leito de operado" é preparado para:',
         o:['O paciente que ainda não internou','Receber o paciente após procedimento cirúrgico','O paciente ausente temporariamente','Uso exclusivo do ambulatório'],a:1,d:2},
        {q:'Antes de vestir o leito, deve-se:',
         o:['Vestir imediatamente após higienizar','Higienizar o colchão e aguardar secar completamente','Apenas trocar a fronha','Borrifar perfume no colchão'],a:1,d:2},
        {q:'Na troca com paciente acamado, recomenda-se idealmente:',
         o:['Um único profissional','Dois profissionais','Quatro profissionais','Nenhum, o paciente faz sozinho'],a:1,d:2},
        {q:'Com que frequência mínima as roupas de cama são trocadas?',
         o:['Apenas quando visivelmente sujas','Segundas, quartas e sextas-feiras e sempre que necessário','Uma vez por mês','Diariamente, sem exceção'],a:1,d:1},
        {q:'Manter os lençóis esticados tem como objetivo principal:',
         o:['Melhorar a estética do quarto','Evitar lesões de pele no paciente','Economizar roupa de cama','Facilitar a limpeza do chão'],a:1,d:2}
      ]
    },

    {
      id:'pop-05', code:'POP-ENF-05', version:'1.2', emission:'07/05/2020',
      title:'Transferência intra-hospitalar',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar as transferências de pacientes entre as unidades de internação do HNR.',
          'Prevenir erros de comunicação entre as equipes assistenciais.'
        ],note:'<b>Definição:</b> a transferência intra-hospitalar é o transporte seguro, temporário e/ou definitivo, de um paciente entre diferentes setores ou leitos do mesmo hospital, para fins de elucidação diagnóstica e/ou tratamento.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, formulário de transferência interna, prontuário, pedidos de exames, medicações e pertences pessoais do paciente.',
          'Cadeira de rodas ou maca de transporte.',
          'Se necessário: cilindro de oxigênio, bomba de infusão contínua, monitor multiparamétrico, ressuscitador manual e ventilador de transporte.'
        ]},
        {n:3,h:'Solicitação e disponibilidade de leito',items:[
          'A transferência pode ser solicitada pelo médico assistente, médico plantonista ou pelo NIR, considerando a avaliação clínica e a necessidade de isolamento.',
          'A transferência por condições sociais pode ser solicitada pelo enfermeiro, com consentimento da Gerência de Enfermagem/Coordenação junto ao NIR.',
          'O NIR avalia a disponibilidade de leito conforme o perfil clínico e comunica o setor de origem e o de destino.'
        ]},
        {n:4,h:'Compete ao Enfermeiro',items:[
          'Verificar e organizar o leito de destino; informar o paciente/família sobre o motivo e organizar os pertences.',
          'Avaliar a melhor forma de transferência (deambulando, cadeira ou maca) e aplicar as escalas (Braden, Morse, Fugulin).',
          'Organizar o prontuário com exames e pareceres pendentes, preencher e assinar o formulário de transferência interna.',
          'Comunicar os setores de nutrição e farmácia sobre a transferência.'
        ]},
        {n:5,h:'Técnico e observações',items:[
          'Se o horário coincidir com refeição/medicação, alimentar e medicar o paciente antes de encaminhá-lo; checar as medicações administradas.',
          'Colocar os medicamentos ainda não administrados em saco plástico junto ao prontuário físico; paramentar EPI conforme a precaução.',
          'Acomodar o paciente no leito de destino e entregar o prontuário com as medicações à equipe.',
          '<b>UTI:</b> o médico deve estar presente no transporte e o enfermeiro acompanha. Ao receber o paciente, proceder conforme o POP-ENF-01.'
        ]}
      ],
      pool:[
        {q:'A transferência intra-hospitalar é definida como:',
         o:['Transporte do paciente para outro hospital','Transporte seguro entre setores ou leitos do mesmo hospital','Alta hospitalar do paciente','Encaminhamento ambulatorial externo'],a:1,d:1},
        {q:'No transporte de paciente para a UTI, é correto que:',
         o:['O enfermeiro vá sozinho','O médico esteja presente e o enfermeiro acompanhe','Apenas o técnico realize o transporte','O transporte seja dispensado'],a:1,d:2},
        {q:'Os medicamentos do paciente ainda não administrados devem ser:',
         o:['Descartados antes da transferência','Colocados em saco plástico junto ao prontuário e entregues à equipe de destino','Deixados na gaveta do setor de origem','Administrados todos de uma vez'],a:1,d:2},
        {q:'Quem avalia a disponibilidade de leito para a transferência?',
         o:['O NIR (Núcleo Interno de Regulação)','A nutrição','A recepção','O próprio paciente'],a:0,d:2},
        {q:'Se o horário da transferência coincidir com refeição e medicação, deve-se:',
         o:['Transferir primeiro e alimentar/medicar depois no destino','Alimentar e medicar o paciente antes de encaminhá-lo','Suspender a refeição e a medicação do dia','Adiar a transferência em 24h'],a:1,d:2}
      ]
    },

    {
      id:'pop-44', code:'POP-ENF-44', version:'1.0', emission:'27/05/2026',
      title:'Administração de insulina',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar as condutas relacionadas às técnicas de aplicação de insulina por via subcutânea.',
          'Controlar os níveis glicêmicos.',
          'Fornecer subsídios para a implementação e o acompanhamento da terapêutica medicamentosa.'
        ],note:'<b>Definições:</b> <b>DM1</b> — origem autoimune/genética, destruição das células beta e deficiência absoluta de insulina (início abrupto, mais jovens). <b>DM2</b> — hiperglicemia persistente associada a excesso de peso, com alteração na secreção e na sensibilidade à insulina. A <b>insulina é medicamento de alta vigilância (potencialmente perigoso)</b> e exige <b>dupla checagem</b> no preparo e na administração.'},
        {n:2,h:'Tipos de insulina',sub:'Classificadas pela velocidade de início e pela duração de ação:',items:[
          '<b>Basais / lentas — Intermediária (NPH):</b> aspecto leitoso; início em 1–3 h e duração de 12–18 h; geralmente 2 a 3 aplicações ao dia.',
          '<b>Basais / lentas — Longa duração (Glargina, Detemir, Degludeca):</b> transparentes; agem por 24 h ou mais e quase não têm "pico", reduzindo o risco de hipoglicemia noturna.',
          '<b>Refeição / rápidas — Regular:</b> ação rápida; aplicar cerca de 30 minutos antes de comer; dura de 5 a 8 h.',
          '<b>Refeição / ultrarrápidas (Lispro, Aspart, Glulisina):</b> agem em 5–15 min; aplicar logo antes ou logo após a refeição; duram de 3 a 5 h.'
        ]},
        {n:3,h:'Materiais necessários',items:[
          'EPI, prontuário físico e eletrônico (prescrição), bandeja.',
          'Álcool 70% ou clorexidina alcoólica; algodão ou gaze.',
          'Frasco da insulina prescrita; seringa de 1 ml graduada em UI.',
          'Agulha para aspiração (13x4,5) e agulha para aplicação (13x4,5); solução desinfetante padronizada.'
        ]},
        {n:4,h:'Preparo (frasco e seringa)',items:[
          'Verificar a prescrição (a NPH costuma ser prescrita por horário; a Regular conforme o HGT do paciente) e organizar a bandeja.',
          'Homogeneizar a suspensão rolando o frasco levemente entre as mãos; higienizar as mãos e fazer assepsia da borracha do frasco com álcool 70% ou clorexidina alcoólica.',
          'Aspirar ar até a graduação da dose prescrita, injetar esse ar no frasco e, com o frasco de cabeça para baixo, aspirar a insulina até a dose; eliminar bolhas e trocar a agulha antes da aplicação.',
          '<b>Mistura de dois tipos na mesma seringa:</b> aspirar <b>primeiro a Regular e depois a NPH</b>; o total deve corresponder à soma das duas doses.',
          'Se a dose aspirada exceder a soma prescrita, <b>não devolver nem desprezar o excesso no frasco</b> — descartar a seringa e reiniciar com uma nova.'
        ]},
        {n:5,h:'Aplicação',items:[
          'No quarto, paramentar EPI conforme precaução/isolamento, identificar-se e conferir os dados na pulseira (confirmação verbal).',
          'Fazer assepsia do local com álcool 70%/clorexidina alcoólica e aguardar secar; utilizar <b>rodízio dos locais</b> para reduzir a variabilidade glicêmica e a lipodistrofia.',
          'Fazer prega cutânea com polegar e indicador e introduzir a agulha a <b>90°</b>; injetar mantendo a prega, aguardar de 5 a 10 segundos, retirar a agulha e desfazer a prega. <b>Não massagear</b> o local.',
          '<b>Caneta:</b> de uso individual; trocar a agulha diariamente; homogeneizar rolando entre as mãos; selecionar a dose de 1 em 1 unidade; manter o botão pressionado contando lentamente até 10 antes de retirar a agulha.',
          'Recolher o material, higienizar a bandeja, higienizar as mãos, checar no prontuário físico e registrar no eletrônico (HGT e correções). Havendo recusa, comunicar o enfermeiro e registrar.'
        ]},
        {n:6,h:'Observações',items:[
          'A seringa de 1 ml para insulina comporta 100 UI: cada 10 UI equivalem a 0,1 ml.',
          'Inspecionar e palpar o local antes de cada aplicação; não aplicar em áreas de lipohipertrofia, inflamação ou lesões.',
          'Insulinas de uso domiciliar do paciente: armazenar na geladeira do posto, identificadas. Insulinas de uso coletivo: armazenar na geladeira do setor com a data de abertura do frasco.',
          'Insulina em bomba de infusão contínua é procedimento crítico (geralmente na UTI), com diluição de insulina regular, monitorização frequente da glicemia e ajuste de vazão por protocolo.'
        ],alert:'<b>Alta vigilância.</b> A insulina exige <b>dupla checagem</b> no preparo e na administração — confira sempre o tipo, a concentração e a dose.'},
      ],
      pool:[
        {q:'Por que a insulina exige dupla checagem no preparo e na administração?',
         o:['Porque é uma vacina','Porque é um medicamento de alta vigilância (potencialmente perigoso)','Porque é administrada por via endovenosa','Porque não tem prescrição médica'],a:1,d:1},
        {q:'Ao preparar NPH e Regular na mesma seringa, a ordem correta de aspiração é:',
         o:['Primeiro a NPH e depois a Regular','Primeiro a Regular e depois a NPH','Tanto faz a ordem','Aspirar em seringas separadas sempre'],a:1,d:2},
        {q:'Durante a mistura, a dose aspirada ficou maior que a soma das doses prescritas. A conduta correta é:',
         o:['Devolver o excesso ao frasco','Desprezar o excesso empurrando o êmbolo','Descartar a seringa e reiniciar com uma nova','Aplicar assim mesmo, pois a diferença é pequena'],a:2,d:3},
        {q:'O ângulo recomendado para introduzir a agulha na aplicação subcutânea com prega cutânea é:',
         o:['15 graus','45 graus','90 graus','Paralelo à pele'],a:2,d:2},
        {q:'Sobre a insulina NPH, é correto afirmar:',
         o:['É transparente e age em 5 minutos','Tem aspecto leitoso, início em 1–3 h e duração de 12–18 h','Não apresenta pico e dura mais de 24 h','É de ação ultrarrápida e aplicada após a refeição'],a:1,d:2},
        {q:'Na seringa de insulina de 1 ml (100 UI), a graduação de 0,1 ml corresponde a:',
         o:['1 UI','5 UI','10 UI','100 UI'],a:2,d:2},
        {q:'Por que se recomenda o rodízio dos locais de aplicação de insulina?',
         o:['Para acelerar a absorção','Para reduzir a variabilidade glicêmica e a ocorrência de lipodistrofia','Para dispensar a antissepsia','Para poder massagear o local'],a:1,d:2},
        {q:'Após injetar a insulina subcutânea, a conduta correta é:',
         o:['Massagear vigorosamente o local','Aguardar de 5 a 10 segundos, retirar a agulha e não massagear','Reaplicar imediatamente no mesmo ponto','Aspirar de volta um pouco da dose'],a:1,d:2}
      ]
    },

    {
      id:'pop-45', code:'POP-ENF-45', version:'1.3', emission:'01/10/2020',
      title:'Mensuração do peso e altura',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Mensurar o peso e a altura corporal.',
          'Avaliar o estado nutricional do paciente.',
          'Fornecer parâmetros para o cálculo de dose de medicamentos.'
        ]},
        {n:2,h:'Materiais necessários',items:[
          'Balança plataforma digital ou balança digital portátil.',
          'EPI, prontuário eletrônico, caneta e papel.',
          'Fita métrica e micropore.',
          'Solução desinfetante padronizada.'
        ]},
        {n:3,h:'Verificação do peso',items:[
          'Higienizar as mãos, paramentar EPI, identificar-se e conferir os dados na pulseira (confirmação verbal).',
          'Avaliar a condição clínica do paciente quanto à locomoção até a balança ou levar o equipamento para próximo ao leito; higienizar a balança com a solução desinfetante.',
          'Orientar o paciente a usar roupas leves, retirar os sapatos e esvaziar a bexiga.',
          'A balança deve estar <b>ligada e zerada</b> antes de o paciente subir; posicioná-lo no centro, descalço, ereto, com os pés juntos e os braços estendidos ao longo do corpo.',
          'Realizar a leitura somente após o valor estabilizar no visor e anotar o peso.'
        ]},
        {n:4,h:'Verificação da altura',items:[
          'Pode-se utilizar a métrica da própria balança; posicionar o paciente de costas para a métrica, descalço e com a cabeça livre de adereços, no centro do equipamento.',
          'Manter o paciente em pé, ereto, com os braços ao longo do corpo e a cabeça erguida, olhando para um ponto fixo na altura dos olhos.',
          'Elevar a haste graduada com cuidado e colocá-la perpendicularmente sobre a cabeça; fazer a leitura em centímetros.',
          'Auxiliar o paciente a descer e encaminhá-lo ao leito; higienizar a balança e as mãos; registrar os valores no prontuário eletrônico.'
        ],note:'<b>Se usar fita métrica:</b> fixá-la na parede lisa com o micropore. Posicionar o paciente descalço, de costas, encostando os calcanhares, os glúteos e a parte posterior da cabeça (região occipital) na parede, e fazer a leitura em centímetros.'},
      ],
      pool:[
        {q:'Antes de o paciente subir na balança, ela deve estar:',
         o:['Ligada, porém sem zerar','Ligada e zerada','Desligada para economizar bateria','Com o paciente segurando o apoio'],a:1,d:1},
        {q:'Qual orientação deve ser dada ao paciente antes da pesagem?',
         o:['Usar roupas pesadas e manter os sapatos','Usar roupas leves, retirar os sapatos e esvaziar a bexiga','Beber bastante água antes de pesar','Permanecer com adereços na cabeça'],a:1,d:1},
        {q:'A leitura do peso deve ser realizada:',
         o:['Assim que o paciente sobe, mesmo com o valor oscilando','Somente após o valor estabilizar (ficar fixo) no visor','Pela média de três tentativas em movimento','Com o paciente sentado na balança'],a:1,d:2},
        {q:'Na verificação da altura pela métrica da balança, o paciente deve ficar:',
         o:['De frente para a métrica, com a cabeça baixa','De costas, ereto, descalço e com a cabeça livre de adereços, olhando para um ponto fixo','Sentado, com os joelhos flexionados','De lado, apoiado na parede'],a:1,d:2},
        {q:'Ao usar fita métrica fixada na parede, quais pontos do corpo devem encostar na parede?',
         o:['Apenas os calcanhares','Apenas a cabeça','Calcanhares, glúteos e região occipital (parte posterior da cabeça)','Apenas os glúteos e as escápulas'],a:2,d:2},
        {q:'Um dos objetivos da mensuração de peso e altura é:',
         o:['Substituir o exame físico completo','Fornecer parâmetros para o cálculo de dose de medicamentos','Dispensar a avaliação nutricional','Definir o diagnóstico médico'],a:1,d:1},
        {q:'Em relação à higienização do equipamento, a conduta correta é:',
         o:['Higienizar a balança com solução desinfetante antes e após o uso','Higienizar apenas no fim do plantão','Nunca higienizar para não danificar o sensor','Higienizar somente se houver sujidade visível'],a:0,d:2},
        {q:'Quando o paciente não tem condição clínica de se locomover até a balança, a conduta é:',
         o:['Estimar o peso visualmente','Levar a balança (portátil) para próximo ao leito','Adiar a mensuração por tempo indeterminado','Usar o peso da última internação'],a:1,d:2}
      ]
    },

    {
      id:'pop-46', code:'POP-ENF-46', version:'1.3', emission:'01/10/2020',
      title:'Monitorização cardíaca',
      executantes:'Técnico de Enfermagem e Enfermeiro',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Registrar a atividade cardíaca.',
          'Diagnosticar e documentar o tratamento de pacientes graves.',
          'Detectar arritmias, isquemias, distúrbios hidroeletrolíticos e outras complicações cardíacas.'
        ],note:'<b>Definição:</b> ferramenta diagnóstica não invasiva que monitora em tempo real a atividade elétrica e o ritmo cardíaco. Pode usar sistema de 3 ou 5 cabos. Com <b>5 eletrodos</b> registram-se as 6 derivações de membros (DI, DII, DIII, aVR, aVL, aVF) e uma derivação precordial (V1 é a mais comum).'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, monitor cardíaco, cabo de derivações e eletrodos.',
          'Tricótomo e biombo (se necessário); gaze.',
          'Álcool 70% ou clorexidina alcoólica 0,5%; solução desinfetante padronizada.'
        ]},
        {n:3,h:'Preparo e instalação',items:[
          'Verificar a prescrição, organizar o material, paramentar EPI, identificar-se e conferir os dados na pulseira (confirmação verbal).',
          'Questionar sobre doenças cardíacas prévias; expor a região torácica e abdominal; em paciente do sexo feminino, garantir a privacidade com biombo.',
          'Realizar tricotomia na região do tórax se necessário e limpar o local de fixação dos eletrodos com gaze embebida em solução alcoólica.',
          'Ligar o monitor, ajustar os alarmes e parâmetros e posicionar os eletrodos.'
        ]},
        {n:4,h:'Posicionamento dos eletrodos',items:[
          '<b>5 derivações:</b> RA — linha infraclavicular direita; LA — linha infraclavicular esquerda; V1 — 4º espaço intercostal; RL — linha infradiafragmática direita; LL — linha infradiafragmática esquerda.',
          '<b>3 derivações:</b> RA e LA na linha infraclavicular; LL na linha infradiafragmática esquerda.',
          '<b>Siglas:</b> R = right (direito), L = left (esquerdo), A = arm (braço), L = leg (perna), V/G/C = fio terra (condutor).'
        ]},
        {n:5,h:'Finalização',items:[
          'Deixar o paciente em posição confortável e o ambiente organizado.',
          'Higienizar os cabos e o monitor após o uso com a solução desinfetante padronizada.',
          'Registrar o procedimento no prontuário eletrônico.'
        ]},
        {n:6,h:'Observações e intercorrências',items:[
          'Evitar fixar eletrodos sobre saliências ósseas, pelos e locais de aplicação de placas de desfibrilador ou de compressão cardíaca.',
          'Avaliar a integridade da pele e reposicionar os eletrodos a cada 24 h (após o banho) ou sempre que necessário.',
          'Se o traçado não estiver satisfatório, verificar e reposicionar os eletrodos. Problemas comuns: interferências elétricas, desconexão de cabo/eletrodo e irritação cutânea.',
          'Alarmes falsos de <b>bradicardia</b> podem decorrer de mau contato (sudorese excessiva); de <b>taquicardia</b>, de mudança de posição ou tremores musculares. Defeitos no monitor/cabos: encaminhar à engenharia clínica (biomédica).'
        ]},
      ],
      pool:[
        {q:'No sistema de 5 eletrodos, quantas derivações são registradas?',
         o:['Apenas 3 derivações de membros','As 6 derivações de membros e 1 derivação precordial','Somente as 6 derivações precordiais','Apenas a derivação V1'],a:1,d:2},
        {q:'No posicionamento de 5 derivações, o eletrodo V1 deve ficar:',
         o:['Na linha infraclavicular direita','No 4º espaço intercostal','Na linha infradiafragmática esquerda','Sobre o esterno'],a:1,d:3},
        {q:'Um alarme falso de bradicardia é frequentemente causado por:',
         o:['Mau contato entre a pele e o eletrodo devido a sudorese excessiva','Uso correto do gel condutor','Tricotomia adequada do tórax','Posicionamento no 4º espaço intercostal'],a:0,d:2},
        {q:'A integridade da pele e o reposicionamento dos eletrodos devem ser avaliados:',
         o:['Somente na alta do paciente','A cada 24 h (após o banho) ou sempre que necessário','Apenas se o monitor apresentar defeito','A cada 7 dias'],a:1,d:2},
        {q:'Ao fixar os eletrodos, deve-se EVITAR posicioná-los sobre:',
         o:['A região do tórax limpa e seca','Saliências ósseas, pelos e locais de placas de desfibrilador','A linha infraclavicular','O 4º espaço intercostal'],a:1,d:2},
        {q:'Nas siglas de identificação dos eletrodos, "RA" corresponde a:',
         o:['Left arm (braço esquerdo)','Right arm (braço direito)','Right leg (perna direita)','Fio terra/condutor'],a:1,d:2},
        {q:'Caso o traçado eletrocardiográfico não esteja satisfatório, a primeira conduta é:',
         o:['Encaminhar imediatamente o monitor à engenharia clínica','Verificar se os eletrodos estão bem posicionados e, se necessário, reposicioná-los','Aumentar o ganho do monitor ao máximo','Desligar os alarmes'],a:1,d:2},
        {q:'Antes de fixar os eletrodos, o local de fixação deve ser:',
         o:['Hidratado com creme','Tricotomizado se necessário e limpo com gaze embebida em solução alcoólica','Apenas seco com papel-toalha','Coberto com filme transparente'],a:1,d:2}
      ]
    },

    {
      id:'pop-53', code:'POP-ENF-53', version:'1.2', emission:'20/01/2022',
      title:'Cuidados de enfermagem com a traqueostomia',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a limpeza, a troca de curativo e da fixação da traqueostomia.',
          'Manter a cânula de traqueostomia e as vias respiratórias desobstruídas.',
          'Manter a integridade da mucosa do estoma e prevenir infecção.'
        ],note:'<b>Definição:</b> a traqueostomia é a abertura cirúrgica da parede anterior da traqueia, tornando a via aérea pérvia. <b>Componentes da cânula:</b> <b>cânula externa</b> (não removível, fixada no pescoço por cadarço); <b>cânula interna</b> (de menor diâmetro, retirada com frequência para limpeza); <b>fio guia/obturador</b> (ponta romba, evita lesão da mucosa na introdução); <b>balonete (cuff)</b> (em cânulas de silicone/PVC, evita a aspiração de secreções da orofaringe para o trato respiratório inferior).'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, copo descartável, gaze estéril, pacote de higiene oral e pacote de curativo.',
          'Água corrente, água oxigenada e solução fisiológica 0,9%.',
          'Espuma/curativo absorvente para TQT, cadarço e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Limpeza da cânula interna',items:[
          'As secreções acumuladas podem formar rolhas/tampões que dificultam a passagem do ar; por isso a limpeza deve ser frequente. Posicionar o paciente em decúbito dorsal com a cabeceira elevada a <b>30°</b>.',
          'Abrir o pacote de higiene oral; destravar e remover a cânula interna, colocando-a no campo.',
          'Se houver secreção aderida e de difícil remoção, deixar a cânula interna em um copo com <b>água oxigenada ou água morna</b>; depois limpar com gaze e auxílio da pinça até remover toda a sujidade e crostas.',
          'Trocar as luvas, recolocar a cânula interna e travar.'
        ]},
        {n:4,h:'Troca do curativo e da fixação',items:[
          'Manter o curativo/gaze de proteção sempre limpos e secos e trocar o fixador sempre que estiver com sujidade ou úmido. Posicionar em decúbito dorsal com a cabeceira a 30°.',
          'Abrir o pacote de curativo, retirar o curativo e a fixação anterior. Se possível, pedir ajuda para segurar a cânula no lugar, evitando o deslocamento.',
          'Limpar o estoma com gaze estéril e SF 0,9% até remover a sujidade visível; secar a pele periestoma e avaliar o estoma quanto a hiperemia, edema, dor, odor, mudança de coloração e presença/aumento de secreção.',
          'Aplicar gaze seca ou espuma/curativo absorvente para TQT e fixar a cânula com o cadarço, deixando uma <b>folga de 1 a 2 cm</b> para evitar lesões. Registrar o procedimento.'
        ]},
        {n:5,h:'Observações',items:[
          'Balonete: para evitar lesão da mucosa traqueal ou broncoaspiração, a pressão do cuff <b>não deve ultrapassar 20 a 30 cmH₂O</b>.',
          'Para a aspiração de secreção, seguir o POP-ENF-61.',
          'A <b>troca da cânula</b> e a <b>decanulação</b> são realizadas pela equipe médica, com auxílio do enfermeiro e/ou fisioterapeuta.',
          'A humidificação em paciente traqueostomizado com cânula plástica é necessária para evitar complicações e é feita por macronebulização com névoa.'
        ]},
      ],
      pool:[
        {q:'Qual a função do balonete (cuff) na cânula de traqueostomia?',
         o:['Facilitar a remoção da cânula interna','Evitar a aspiração de secreções da orofaringe para o trato respiratório inferior','Servir de fio guia na introdução','Aumentar o diâmetro da cânula externa'],a:1,d:2},
        {q:'A pressão do balonete (cuff) não deve ultrapassar:',
         o:['5 a 10 cmH₂O','20 a 30 cmH₂O','50 a 60 cmH₂O','100 cmH₂O'],a:1,d:3},
        {q:'Ao fixar a cânula com o cadarço, deve-se deixar uma folga de:',
         o:['Nenhuma folga, bem apertado','1 a 2 cm','5 a 6 cm','O suficiente para passar a mão inteira'],a:1,d:2},
        {q:'Diante de secreção aderida e de difícil remoção na cânula interna, a conduta é:',
         o:['Forçar a limpeza com a pinça imediatamente','Deixar a cânula interna em copo com água oxigenada ou água morna antes de limpar','Descartar a cânula interna','Recolocá-la sem limpar'],a:1,d:2},
        {q:'Quem realiza a troca da cânula de traqueostomia e a decanulação?',
         o:['O técnico de enfermagem sozinho','A equipe médica, com auxílio do enfermeiro e/ou fisioterapeuta','A zeladoria','O próprio paciente'],a:1,d:2},
        {q:'Durante a limpeza e troca, o paciente deve ser posicionado em:',
         o:['Decúbito ventral','Decúbito dorsal com a cabeceira elevada a 30°','Posição de Trendelenburg','Sentado com a cabeça fletida'],a:1,d:2},
        {q:'Por que a cânula interna precisa de limpeza frequente?',
         o:['Para trocar a cor da cânula','Porque as secreções podem formar rolhas/tampões que dificultam a passagem do ar','Para evitar a fixação com cadarço','Porque ela é descartável a cada hora'],a:1,d:2},
        {q:'A humidificação em paciente com cânula plástica de traqueostomia é feita por:',
         o:['Instilação de soro a cada hora','Macronebulização com névoa','Oxigênio seco em alto fluxo','Não é necessária'],a:1,d:2}
      ]
    },

    {
      id:'pop-54', code:'POP-ENF-54', version:'1.1', emission:'02/02/2022',
      title:'Aplicação de calor e frio',
      executantes:'Enfermeiro e Técnico de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a aplicação de compressas de calor ou frio sobre a pele íntegra.'
        ],note:'<b>Definição:</b> calor e frio são o aumento e a diminuição da temperatura dos tecidos com fins terapêuticos. O <b>calor</b> relaxa os músculos e facilita a circulação por vasodilatação, acalma a dor e reduz o edema. O <b>frio</b> age por vasoconstrição dos vasos, alivia a dor local, impede a formação de hematomas/abscessos e, em certos ferimentos abertos, controla a hemorragia.'},
        {n:2,h:'Indicação e contraindicação',items:[
          '<b>Calor — indicação:</b> alívio da dor e do edema, melhora da circulação por vasodilatação, aumento da temperatura corporal e relaxamento de músculos contraídos.',
          '<b>Calor — contraindicação:</b> sangramentos, processos inflamatórios agudos internos, neuropatias, desnutrição, estase circulatória e debilidade acentuada.',
          '<b>Frio — indicação:</b> aliviar dor, edema e processos inflamatórios, diminuir a congestão local e a hipertermia, controlar hemorragia e promover vasoconstrição.',
          '<b>Frio — contraindicação:</b> neuropatias, desnutrição, estase circulatória e debilidade acentuada.'
        ]},
        {n:3,h:'Materiais necessários',items:[
          'EPI, bolsa térmica, gelox e água quente ou fria.',
          'Luvas de procedimento, toalha e biombo.',
          'Solução desinfetante padronizada.'
        ]},
        {n:4,h:'Procedimento',items:[
          'Conferir a prescrição, higienizar as mãos, organizar o material, paramentar EPI, identificar-se e conferir os dados na pulseira; garantir privacidade (biombo) e posicionar o paciente confortavelmente.',
          '<b>Testar a temperatura</b> da bolsa térmica/gelox antes de aplicar no paciente e avaliar as condições da pele no local.',
          'Proteger a pele com uma toalha e observar constantemente o local para evitar queimaduras e lesões. Manter a aplicação por <b>no máximo 20 minutos</b>.',
          'Retirar após o tempo estipulado, secar a pele, avaliar a efetividade (repetir se necessário), higienizar a bolsa/gelox com a solução desinfetante e registrar.'
        ]},
        {n:5,h:'Observações',items:[
          'Para reduzir a temperatura corporal, aplicar compressas frias preferencialmente nas regiões fronto-temporal, axilar e inguinal bilateral, trocando o local a cada 20 minutos.',
          'A crioterapia é contraindicada em insuficiência cardíaca aguda ou crônica, alcoólatras e diabéticos.',
          'O calor direto deve ser aplicado com cautela em pacientes com comprometimento da sensibilidade, diabéticos e inconscientes; cautela também com tecido cicatricial e estomas.',
          'Retirar a bolsa em caso de vermelhidão excessiva, maceração, palidez ou se o paciente relatar desconforto.'
        ]},
      ],
      pool:[
        {q:'O tempo máximo de aplicação da bolsa térmica ou do gelox é:',
         o:['5 minutos','20 minutos','45 minutos','1 hora'],a:1,d:2},
        {q:'Antes de aplicar a compressa no paciente, é obrigatório:',
         o:['Aplicar diretamente na pele sem proteção','Testar a temperatura e proteger a pele com uma toalha','Massagear o local','Resfriar ainda mais a bolsa'],a:1,d:2},
        {q:'O frio (crioterapia) atua principalmente por:',
         o:['Vasodilatação e relaxamento muscular','Vasoconstrição, aliviando a dor e controlando hemorragia','Aumento da temperatura dos tecidos','Aumento do edema local'],a:1,d:2},
        {q:'Para reduzir a temperatura corporal, as compressas frias são aplicadas preferencialmente em:',
         o:['Mãos e pés','Regiões fronto-temporal, axilar e inguinal bilateral','Apenas na testa','Região lombar'],a:1,d:3},
        {q:'A aplicação de calor é indicada para:',
         o:['Controlar sangramento ativo','Aliviar dor, reduzir edema e relaxar músculos contraídos por vasodilatação','Processos inflamatórios agudos internos','Estase circulatória'],a:1,d:2},
        {q:'A bolsa deve ser retirada imediatamente se houver:',
         o:['Leve sensação de alívio','Vermelhidão excessiva, maceração, palidez ou desconforto relatado','Aquecimento gradual da pele','Relaxamento muscular'],a:1,d:2},
        {q:'A crioterapia é contraindicada em:',
         o:['Pacientes hígidos','Insuficiência cardíaca aguda/crônica, alcoólatras e diabéticos','Edema pós-traumático','Hipertermia'],a:1,d:3},
        {q:'O calor direto deve ser aplicado com cautela em:',
         o:['Pacientes com sensibilidade preservada','Pacientes com comprometimento da sensibilidade, diabéticos e inconscientes','Pele íntegra e saudável','Qualquer paciente, sem restrição'],a:1,d:2}
      ]
    },

    {
      id:'pop-55', code:'POP-ENF-55', version:'1.1', emission:'10/03/2021',
      title:'Higiene corporal pré-operatória',
      executantes:'Equipe de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Proporcionar a higiene e o preparo pré-operatório da pele.',
          'Prevenir a ocorrência de Infecção de Sítio Cirúrgico.'
        ],note:'<b>Definição:</b> o pré-operatório é o período que antecede o ato anestésico-cirúrgico, com intervenções que reduzem eventos adversos e dão mais segurança ao paciente. Há evidências de que a higiene corporal pré-operatória com <b>solução antisséptica</b> reduz o número de microrganismos na pele, auxiliando na redução do risco de infecção hospitalar.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, toalha de banho, clorexidina degermante 4% e clorexidina solução oral 0,12%.',
          'Copo plástico, tricótomo (se necessário) e cadeira para banho (se necessário).',
          'Camisola, gorro descartável, pro pé e checklist pré-operatório.'
        ]},
        {n:3,h:'Descrição das atividades',items:[
          'Higienizar as mãos, organizar o material, paramentar EPI, identificar-se e conferir os dados na pulseira; <b>proteger os acessos venosos e curativos</b> antes de encaminhar ao banho.',
          'Orientar a não molhar o cabelo e a remover brincos, colares, piercing e próteses dentárias antes do banho.',
          'Entregar um copo com <b>clorexidina degermante 4%</b> e orientar o uso no banho; realizar a higiene oral com <b>clorexidina 0,12%</b> (POP-ENF-17).',
          'O banho deve ser feito <b>aproximadamente 2 horas antes da cirurgia</b>. Orientar a não usar roupas íntimas, perfumes, cremes, óleos ou loções após o banho.',
          'Auxiliar a vestir a camisola, colocar o gorro descartável e os pro pés; manter o paciente confortável no leito, checar no checklist pré-operatório e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Realizar a tricotomia <b>somente quando estritamente necessária</b> — quando os pelos interferirem na incisão ou na adesão de curativos —, utilizando dispositivo elétrico (tricotomizador) com lâmina descartável.',
          'Atentar para a higiene oral dos pacientes, realizando-a com clorexidina aquosa 0,12%.'
        ]},
      ],
      pool:[
        {q:'A higiene corporal pré-operatória deve ser realizada com:',
         o:['Sabonete comum neutro','Clorexidina degermante 4%','Apenas água','Álcool 70% na pele'],a:1,d:2},
        {q:'O banho pré-operatório deve ocorrer:',
         o:['Logo após a cirurgia','Aproximadamente 2 horas antes da cirurgia','No dia anterior, à noite','Somente se o paciente solicitar'],a:1,d:2},
        {q:'Sobre a tricotomia no preparo pré-operatório, é correto:',
         o:['Realizá-la sempre, em toda a região','Realizá-la somente quando estritamente necessária, com tricotomizador elétrico e lâmina descartável','Usar lâmina de barbear comum na véspera','Nunca realizá-la em hipótese alguma'],a:1,d:2},
        {q:'Após o banho pré-operatório, o paciente deve ser orientado a:',
         o:['Passar hidratante e perfume','Não usar roupas íntimas, perfumes, cremes, óleos ou loções','Vestir a própria roupa','Molhar o cabelo novamente'],a:1,d:2},
        {q:'Antes de encaminhar o paciente ao banho, deve-se:',
         o:['Retirar todos os curativos','Proteger os acessos venosos e curativos','Suspender a identificação da pulseira','Remover a clorexidina da unidade'],a:1,d:2},
        {q:'A higiene oral no preparo pré-operatório é feita com:',
         o:['Clorexidina solução oral 0,12%','Clorexidina degermante 4%','Água oxigenada','Bicarbonato de sódio'],a:0,d:2},
        {q:'O objetivo principal da higiene corporal pré-operatória é:',
         o:['Apenas o conforto do paciente','Reduzir microrganismos na pele e prevenir a Infecção de Sítio Cirúrgico','Substituir a antibioticoprofilaxia','Acelerar a alta hospitalar'],a:1,d:1},
        {q:'Quais adornos devem ser removidos antes do banho pré-operatório?',
         o:['Apenas o relógio','Brincos, colares, piercing e próteses dentárias','Somente próteses dentárias','Nenhum, podem permanecer'],a:1,d:1}
      ]
    },

    {
      id:'pop-56', code:'POP-ENF-56', version:'1.0', emission:'30/07/2021',
      title:'Coberturas e produtos para curativos',
      executantes:'Equipe de Enfermagem das Unidades de Internação e UTI',
      origem:'Gerência de Enfermagem',
      setores:['assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a técnica para a realização dos curativos com as coberturas e os produtos existentes no Hospital Nereu Ramos.'
        ],note:'<b>Definição:</b> meio terapêutico de limpeza e aplicação de cobertura estéril na lesão, para promover a cicatrização e prevenir infecção. A cicatrização é afetada por fatores <b>sistêmicos</b> (idade, imobilidade, estado nutricional, doenças associadas, imunossupressores) e <b>locais</b> (localização anatômica, infecção e tecido desvitalizado). É necessária a avaliação diária da evolução da lesão para manter ou modificar as condutas.'},
        {n:2,h:'Coberturas padronizadas (parte 1)',items:[
          '<b>Hidrogel com alginato (ex.: Purilon):</b> mantém o meio úmido e promove desbridamento autolítico. Indicado para desbridar tecidos necrosados. Contraindicado em pele íntegra, ferida fechada e feridas muito exsudativas. Troca a cada 24h.',
          '<b>Gaze não aderente com parafina (ex.: Jelonet):</b> protege a ferida, preserva o tecido de granulação e evita a aderência ao leito (troca sem dor). Contraindicada em lesões com secreção purulenta. Troca a cada 48h.',
          '<b>Hidrofibra com CMC e prata (ex.: Aquacel Ag):</b> mantém ambiente úmido, com ação antibiofilme da prata iônica. Indicada para lesões cavitárias, crônicas, agudas e queimaduras de 1º/2º grau. Contraindicada em lesões superficiais e pouco exsudativas. Troca em até 7 dias (24h se infectada).'
        ]},
        {n:3,h:'Coberturas padronizadas (parte 2)',items:[
          '<b>Alginato de cálcio (placa):</b> em contato com o exsudato forma gel não aderente, promove desbridamento autolítico e absorve o excesso. Indicado em lesões exsudativas, com sangramento, limpas ou infectadas. Contraindicado em lesões secas e pele íntegra. Troca a cada 48h (24h se infectada).',
          '<b>Espuma de poliuretano com silicone (ex.: Biatain):</b> absorção superior mantendo a lesão úmida. Indicada em lesões exsudativas crônicas e agudas (úlceras, lesões por pressão, pós-operatórias). Contraindicada em lesões secas e pele íntegra. Troca em até 7 dias (24h se infectada).',
          '<b>Colagenase:</b> agente desbridante enzimático que limpa o leito da ferida. Indicada em lesões de diversas etiologias e queimaduras. Contraindicada em lesões exsudativas e hipersensibilidade. Troca a cada 12h.',
          '<b>Hidrocolóide extrafino:</b> promove cicatrização e proteção. Indicado para proteger pele íntegra ou com leves escoriações. Contraindicado em lesões abertas, exsudativas e contaminadas. Troca a cada 12h.',
          '<b>Espuma de poliuretano para traqueostomia:</b> não aderente, absorvente e recortável. Indicada em lesões sem infecção com exsudato moderado a intenso e em traqueostomia. Troca em até 7 dias, se não saturada.'
        ]},
        {n:4,h:'Técnica e periodicidade',items:[
          'A técnica de limpeza segue o padrão do curativo (POP-ENF-52): SF 0,9% morno, técnica asséptica, medir os bordos, limpar do centro mais limpo para o contaminado e não esfregar o leito da lesão.',
          'Selecionar a cobertura primária conforme a avaliação do enfermeiro/prescrição; ocluir com película ou atadura. <b>Esparadrapo é contraindicado</b> e o micropore não deve ser usado em pele friável/escoriada.',
          'Periodicidade da troca: conforme a cobertura escolhida e a orientação do fabricante, ou sempre que estiver molhado, úmido ou com sujidade aparente.'
        ]},
      ],
      pool:[
        {q:'Qual cobertura tem ação antibiofilme por conter prata iônica?',
         o:['Hidrogel com alginato (Purilon)','Gaze com parafina (Jelonet)','Hidrofibra com CMC e prata (Aquacel Ag)','Hidrocolóide extrafino'],a:2,d:3},
        {q:'A colagenase é indicada principalmente como:',
         o:['Cobertura para pele íntegra','Agente desbridante enzimático do leito da ferida','Curativo compressivo','Cobertura para feridas muito exsudativas'],a:1,d:2},
        {q:'Qual produto é contraindicado em pele íntegra e ferida operatória fechada?',
         o:['Hidrocolóide extrafino','Hidrogel com alginato (Purilon)','Placa de proteção','Gaze seca'],a:1,d:2},
        {q:'A gaze não aderente com parafina (Jelonet) tem como principal vantagem:',
         o:['Desbridar tecido necrótico','Evitar a aderência ao leito, permitindo troca sem dor','Conter prata bactericida','Absorver grandes volumes de exsudato'],a:1,d:2},
        {q:'O hidrocolóide extrafino é indicado para:',
         o:['Lesões abertas e contaminadas','Proteger pele íntegra ou com leves escoriações','Feridas muito exsudativas','Desbridamento enzimático'],a:1,d:2},
        {q:'A frequência de troca da colagenase é:',
         o:['A cada 12 horas','A cada 7 dias','A cada 30 minutos','Somente quando saturar'],a:0,d:2},
        {q:'O alginato de cálcio em placa é indicado para:',
         o:['Lesões secas e pele íntegra','Lesões exsudativas, com sangramento, limpas ou infectadas','Apenas pele íntegra','Feridas operatórias fechadas'],a:1,d:2},
        {q:'Sobre a fixação dos curativos, é correto afirmar:',
         o:['O esparadrapo é o fixador preferencial','O esparadrapo é contraindicado e o micropore não deve ser usado em pele friável/escoriada','Micropore pode ser usado em qualquer pele','Não se deve ocluir a ferida'],a:1,d:2}
      ]
    },

    {
      id:'pop-48', code:'POP-ENF-48', version:'1.2', emission:'01/10/2020',
      title:'Troca de bolsa coletora — ostomia',
      executantes:'Enfermeiro e Técnico de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Promover a higienização do estoma e da bolsa coletora.',
          'Prevenir a ocorrência de lesões periestoma.',
          'Orientar o paciente e o familiar sobre a manipulação e os cuidados com o estoma; promover conforto e segurança.'
        ],note:'<b>Definição:</b> estoma (ostomia) é a exteriorização cirúrgica de uma víscera na parede abdominal — intestino delgado (<b>ileostomia</b>) ou grosso (<b>colostomia</b>), entre outras (gastrostomia, nefrostomia, ureterostomia, cistostomia). As bolsas podem ser de <b>1 peça</b> (placa e bolsa integradas) ou de <b>2 peças</b> (a placa-base permanece na pele por vários dias — cerca de 4 — e troca-se apenas a bolsa).'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, solução fisiológica 0,9%, gaze e saco plástico transparente.',
          'Bolsa coletora, lençol e lençol impermeável, tesoura.',
          'Protetores cutâneos (se necessário e disponível), bacia ou comadre, pacote de curativo, biombo e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Esvaziamento e troca',items:[
          'Verificar a prescrição, avaliar as condições da bolsa e do estoma, organizar o material, higienizar as mãos, paramentar EPI, identificar-se e conferir os dados na pulseira; garantir privacidade (biombo) e proteger a cama com lençol móvel e impermeável.',
          'Colocar a comadre ao lado, abrir a bolsa e desprezar os fluidos observando as características. Se a bolsa estiver <b>íntegra e bem adaptada</b>, higienizar a parte interna com SF 0,9% e fechar o clampe.',
          'Para trocar: umedecer o adesivo da bolsa/placa com gaze e SF 0,9% aquecido e removê-la sem movimentos bruscos, descartando no saco plástico. Limpar o estoma com gaze e SF, observando cor (<b>vermelho vivo</b>), brilho, umidade, tamanho e forma, e avaliar a pele periestoma.',
          '<b>Não usar</b> álcool, benzina ou removedor. Medir o estoma com a escala, traçar o molde no verso da bolsa com margem de segurança de <b>1 mm</b>, recortar e secar bem a pele; aplicar protetor cutâneo se houver irritação.',
          'Retirar o papel protetor e adaptar a nova bolsa <b>de baixo para cima</b>, ajustando a abertura ao estoma e pressionando contra a parede abdominal, sem pregas ou bolhas de ar; colocar o clamp. Recolher o material, higienizar, checar a prescrição e registrar.'
        ]},
        {n:4,h:'Observações',items:[
          'Estoma irregular: preparar molde sob medida com caneta. Paciente acamado: adaptar a bolsa na horizontal; deambulando: na vertical.',
          'Esvaziar o sistema coletor ao atingir <b>1/3 da capacidade</b> e avaliar diariamente a integridade da bolsa, evitando vazamentos que irritem a pele.',
          'Bolsas abertas (drenáveis) podem ser lavadas com água ou SF e mantidas enquanto houver boa aderência; bolsas fechadas são de uso único.',
          'Remover o sistema se o paciente reclamar de queimação/coceira ou se houver drenagem purulenta ao redor do estoma. Na pele periestoma, usar apenas SF ou água e sabão.'
        ]},
      ],
      pool:[
        {q:'Qual a diferença básica entre bolsa de 1 peça e de 2 peças?',
         o:['A de 1 peça tem placa e bolsa separadas; a de 2 peças é integrada','A de 1 peça é integrada (placa + bolsa); a de 2 peças tem placa-base que permanece por vários dias e troca-se só a bolsa','A de 2 peças é descartável e a de 1 peça é reutilizável','Não há diferença prática'],a:1,d:2},
        {q:'Um estoma saudável deve apresentar coloração:',
         o:['Pálida e acinzentada','Vermelho vivo, brilhante e úmido','Arroxeada e ressecada','Esbranquiçada'],a:1,d:2},
        {q:'Ao recortar a placa/bolsa de acordo com a medida do estoma, deve-se deixar:',
         o:['Margem de segurança de cerca de 1 mm','Folga de pelo menos 1 cm','Abertura exatamente do diâmetro do estoma, sem folga','O dobro do diâmetro do estoma'],a:0,d:3},
        {q:'Para limpar o estoma e a pele periestoma é CORRETO usar:',
         o:['Álcool 70%','Benzina ou removedor','Apenas solução fisiológica ou água e sabão','Clorexidina alcoólica'],a:2,d:2},
        {q:'A nova bolsa deve ser adaptada à pele:',
         o:['De cima para baixo, deixando pregas para conforto','De baixo para cima, sem pregas ou bolhas de ar, pressionando contra a parede abdominal','Em qualquer sentido, desde que cole','Somente após aplicar álcool no adesivo'],a:1,d:2},
        {q:'O sistema coletor deve ser esvaziado quando atingir:',
         o:['A capacidade total','1/3 da capacidade','3/4 da capacidade','Somente no fim do plantão'],a:1,d:2},
        {q:'Antes de remover a bolsa aderida, a conduta que reduz o trauma da pele é:',
         o:['Puxar rapidamente em um único movimento','Umedecer o adesivo com gaze e SF 0,9% aquecido e remover sem movimentos bruscos','Aplicar calor seco sobre o adesivo','Cortar a placa rente à pele'],a:1,d:2},
        {q:'Diante de drenagem purulenta ao redor do estoma ou queixa de queimação sob a bolsa, deve-se:',
         o:['Reforçar a fixação com mais adesivo','Remover o sistema e avaliar a pele','Ignorar, pois é esperado','Apenas trocar o clamp'],a:1,d:2}
      ]
    },

    {
      id:'pop-49', code:'POP-ENF-49', version:'1.1', emission:'24/07/2020',
      title:'Retirada de pontos',
      executantes:'Enfermeiro e Técnico de Enfermagem',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti','cc','ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a retirada de pontos cirúrgicos.',
          'Remover as suturas da pele sem lesionar o tecido recém-formado.',
          'Garantir a cicatrização adequada das lesões cirúrgicas.'
        ],note:'<b>Definição:</b> a remoção de pontos retira as suturas que aproximam os bordos da ferida, promovendo a cicatrização e minimizando infecções, deiscências e cicatrizes hipertróficas. Deve ser feita com <b>técnica asséptica</b> e em <b>tempo adequado</b> ao tipo de tecido e à localização da sutura.'},
        {n:2,h:'Materiais necessários',items:[
          'EPI, bandeja, pacote de retirada de pontos ou pacote de curativo.',
          'Lâmina de bisturi (se necessário), gaze estéril e solução fisiológica 0,9%.',
          'Fita microporosa e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Descrição da técnica',items:[
          'Conferir a prescrição, higienizar a bandeja e organizar o material; higienizar as mãos, paramentar EPI, identificar-se e conferir os dados na pulseira.',
          'Posicionar o paciente, expor a sutura e avaliar sinais flogísticos, deiscência ou outros — <b>comunicando o enfermeiro</b>. Abrir o pacote de forma asséptica e, se houver sujidade, higienizar a sutura com SF 0,9%.',
          'Deixar uma gaze próxima para depositar os pontos. <b>Tracionar o ponto pelo nó</b> e cortá-lo com tesoura ou lâmina <b>de um dos lados, junto à pele</b> (mão dominante segura o instrumento; a não dominante, a pinça).',
          'Após a remoção, fazer nova limpeza com SF 0,9% e avaliar a necessidade de manter a incisão aberta ou realizar curativo oclusivo com gaze e fita microporosa.',
          'Deixar o paciente confortável, recolher o material, desprezar os resíduos, higienizar a bandeja e as mãos, checar a prescrição e registrar no prontuário eletrônico.'
        ]},
        {n:4,h:'Observações',items:[
          'A decisão sobre a retirada de pontos é do cirurgião; em algumas especialidades os pontos são retirados pelo próprio cirurgião.',
          'Avaliar a ferida de forma individualizada: tipo de procedimento, extensão e localização, ausência de inflamação, secreção e infecção.',
          'Diante de sinais de infecção, hemorragia, deiscência ou evisceração, <b>comunicar o médico antes de retirar os pontos</b>.',
          'Se durante o procedimento ocorrer deiscência ou sangramento ativo: <b>parar a remoção</b>, fazer curativo compressivo e comunicar imediatamente o médico.'
        ]},
      ],
      pool:[
        {q:'Ao retirar um ponto, a técnica correta é:',
         o:['Cortar o fio no meio, longe da pele, e puxar pelos dois lados','Tracionar o ponto pelo nó e cortá-lo de um dos lados, junto à pele','Puxar o nó sem cortar o fio','Cortar todos os pontos antes de tracionar qualquer um'],a:1,d:2},
        {q:'Se durante a retirada ocorrer deiscência ou sangramento ativo, deve-se:',
         o:['Continuar até remover todos os pontos','Parar a remoção, fazer curativo compressivo e comunicar o médico','Aplicar mais pontos','Lavar com álcool e prosseguir'],a:1,d:3},
        {q:'A decisão e a responsabilidade sobre a retirada dos pontos cabem:',
         o:['Ao técnico de enfermagem','Ao cirurgião responsável pela terapêutica','À recepção da unidade','Ao próprio paciente'],a:1,d:1},
        {q:'Antes de iniciar a retirada, ao avaliar a ferida com sinais de infecção, a conduta correta é:',
         o:['Retirar os pontos rapidamente para evitar piora','Comunicar o médico antes de retirar os pontos','Aplicar antibiótico tópico por conta própria','Cobrir e ignorar os sinais'],a:1,d:2},
        {q:'A retirada de pontos deve ser realizada com:',
         o:['Técnica limpa, sem necessidade de assepsia','Técnica asséptica e em tempo adequado ao tecido','Apenas luvas de procedimento e sem pacote estéril','Somente sob anestesia geral'],a:1,d:1},
        {q:'Após a remoção dos pontos, a conduta imediata é:',
         o:['Não tocar mais na ferida','Realizar nova limpeza com SF 0,9% e avaliar manter aberta ou ocluir','Aplicar esparadrapo diretamente sobre a incisão','Suturar novamente por precaução'],a:1,d:2},
        {q:'Qual a finalidade principal da remoção das suturas em tempo adequado?',
         o:['Acelerar a alta hospitalar a qualquer custo','Promover a cicatrização e minimizar infecções, deiscências e cicatrizes hipertróficas','Reduzir o uso de gazes','Evitar o registro no prontuário'],a:1,d:2},
        {q:'Durante o corte, qual mão segura o instrumento (tesoura/lâmina)?',
         o:['A mão não dominante','A mão dominante','Ambas as mãos simultaneamente','Indiferente'],a:1,d:2}
      ]
    },

    {
      id:'pop-51', code:'POP-ENF-51', version:'1.0', emission:'23/08/2022',
      title:'Controle de balanço hídrico na UTI',
      executantes:'Técnico de Enfermagem e Enfermeiro',
      origem:'Setor Unidade de Terapia Intensiva',
      setores:['uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o registro da quantidade de líquidos <b>administrados</b> (alimentação, soluções parenterais, medicamentos, sangue e derivados) e <b>eliminados</b> (urina, drenagens, diarreia, vômitos, sangramentos e sudorese) pelo paciente em um período de 24 horas.'
        ]},
        {n:2,h:'Indicação',items:[
          'Pacientes críticos; em nutrição enteral ou parenteral; em pós-operatório.',
          'Portadores de enfermidade cardíaca, edema, drenos e ascite.',
          'Com restrição hídrica ou hiper-hidratação, débito urinário diminuído, distúrbios hidroeletrolíticos e instabilidade hemodinâmica.'
        ]},
        {n:3,h:'Materiais necessários',items:[
          'Luvas de procedimento e máscara cirúrgica.',
          'Formulário padrão de controle hídrico, frasco graduado para medição de volume, caneta e calculadora.',
          'Fraldas e balança para pesagem.'
        ]},
        {n:4,h:'Registro (regras gerais)',items:[
          'Identificar a folha de BH com o nome do paciente, o leito e a assinatura do responsável pelo controle do turno.',
          'Iniciar um novo controle a partir das <b>07:30h</b> e finalizar o controle do dia anterior às <b>06:30h</b>. O que for infundido/ingerido após 06:30h entra no balanço do dia corrente.',
          'Anotar a infusão/ingestão por via oral, enteral e parenteral <b>acima de 10 mL</b>, sempre após o término. Anotar as drenagens (vesical, enteral, drenos, punções, hemodiálise) também acima de 10 mL.',
          'O <b>cálculo parcial e total é feito pelo enfermeiro às 7h</b>. O balanço é <b>positivo (+)</b> quando os ganhos superam as perdas e <b>negativo (−)</b> no caso contrário.'
        ]},
        {n:5,h:'Diurese, drenos e fezes',items:[
          'Diurese por sonda vesical/cistostomia: anotar de <b>2/2h</b> (das 8h de um dia às 6h do outro). Desprezar o volume da sonda no fim de cada turno (12h, 18h e 6h) ou se ultrapassar 2/3 da bolsa coletora.',
          'Diurese em fralda sem controle: anotar por frequência e quantidade — P (pequena), M (média) e G (grande). Em controle (papagaio, comadre, pesagem): anotar o volume em mL.',
          'Dreno de tórax: anotar às 6h após a troca do selo d’água (POP-ENF-47), por solicitação da equipe cirúrgica ou se o conteúdo ultrapassar 2/3 do frasco. Hemodiálise e punções: anotar logo após a ocorrência.',
          'Fezes: anotar por frequência, quantidade (P/M/G) e característica (pastosa, sólida ou líquida).'
        ]},
        {n:6,h:'Pesagem de fralda',items:[
          'Indicada pelo corpo clínico na prescrição, quando o paciente não usa dispositivo urinário ou apresenta fezes líquidas a contabilizar.',
          'Antes, pesar a <b>fralda seca dentro do saco plástico</b> e anotar o valor (tara).',
          'Acondicionar a fralda usada no saco plástico e pesar na balança específica do expurgo; <b>subtrair a tara</b> do valor obtido para chegar à diurese contabilizada.',
          'Descartar o saco com a fralda em lixo infectante. Usar um frasco coletor (jarra) por paciente e higienizar diariamente; manter o expurgo em ordem.'
        ]},
      ],
      pool:[
        {q:'O ciclo de 24 h do balanço hídrico na UTI inicia e finaliza, respectivamente, às:',
         o:['00:00h e 24:00h','07:30h e 06:30h','06:00h e 06:00h','12:00h e 12:00h'],a:1,d:2},
        {q:'A partir de qual volume a infusão/ingestão e as drenagens devem ser anotadas?',
         o:['Qualquer volume, mesmo gotas','Acima de 10 mL','Acima de 50 mL','Somente acima de 100 mL'],a:1,d:2},
        {q:'O balanço hídrico é considerado POSITIVO quando:',
         o:['As perdas são maiores que os ganhos','Os ganhos são maiores que as perdas','Ganhos e perdas se igualam','O paciente está em restrição hídrica'],a:1,d:1},
        {q:'A diurese controlada por sonda vesical deve ser anotada:',
         o:['Apenas uma vez por turno','De 2 em 2 horas','Somente quando a bolsa enche','A cada 6 horas'],a:1,d:2},
        {q:'Quem realiza o cálculo parcial e total do balanço hídrico e em que horário?',
         o:['O técnico, a cada hora','O enfermeiro, às 7h','A zeladoria, às 6h','O médico, no fim do plantão'],a:1,d:2},
        {q:'Na pesagem de fralda, para obter a diurese contabilizada deve-se:',
         o:['Somar a tara ao peso da fralda cheia','Subtrair a tara (fralda seca + saco) do peso da fralda cheia','Pesar apenas a fralda cheia, sem descontar nada','Estimar pela quantidade P/M/G'],a:1,d:3},
        {q:'O volume da sonda vesical deve ser desprezado no fim de cada turno (12h, 18h e 6h) ou quando:',
         o:['Ultrapassar 2/3 da capacidade da bolsa coletora','Atingir 1/4 da bolsa','A cada hora, independentemente do volume','Apenas no fim das 24h'],a:0,d:2},
        {q:'A diurese em fralda sem controle volumétrico é registrada por:',
         o:['Volume exato em mL','Frequência e quantidade aproximada (P, M, G)','Peso corporal do paciente','Cor da urina apenas'],a:1,d:2}
      ]
    },

    {
      id:'pop-52', code:'POP-ENF-52', version:'1.1', emission:'30/07/2021',
      title:'Curativo',
      executantes:'Equipe de Enfermagem das Unidades de Internação e UTI',
      origem:'Pavilhão, UTI, DIP1, DIP2, Tisiologia e Egy',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Preservar o tecido de granulação, acelerar o processo de cicatrização e minimizar o risco de trauma e/ou infecção.'
        ],note:'<b>Definição:</b> meio terapêutico de limpeza e proteção da ferida (limpa, promove a cicatrização, trata e previne infecção, absorve secreções e mantém a umidade). <b>Tipos:</b> <b>semi-oclusivo</b> (absorvente, para feridas cirúrgicas, drenos e exsudativas), <b>oclusivo</b> (barreira mecânica, não permite ar/fluidos), <b>compressivo</b> (reduz o fluxo sanguíneo) e <b>aberto</b>. <b>Primário</b> = em contato direto com a lesão; <b>secundário</b> = sobre o primário.'},
        {n:2,h:'Materiais necessários',items:[
          'Bandeja, kit curativo, gazes estéreis e chumaço.',
          'Solução fisiológica 0,9%, clorexidina degermante, seringa de 20 ml e agulha 30x10 ou 40x12.',
          'Micropore, tesoura, saco plástico, ataduras, régua de papel e a cobertura primária selecionada (conforme avaliação do enfermeiro ou prescrição de enfermagem).'
        ]},
        {n:3,h:'Descrição da técnica',items:[
          'A limpeza é feita com SF 0,9% <b>aquecido a ~36 °C</b> (solução fria atrasa a cicatrização), com seringa de 20 ml e agulha 40x12/30x8 ou por irrigação; a irrigação em jato é usada apenas em tecido de granulação.',
          'Preparar o material, verificar/realizar analgesia pré-curativo, orientar o paciente pelo nome, garantir privacidade e, havendo mais de uma lesão, <b>iniciar pela menos contaminada</b>. Posicionar o saco plástico em plano inferior ao material limpo.',
          'Abrir o pacote com técnica asséptica tocando apenas a face externa do campo; dispor as pinças e gazes; <b>não falar ao manipular a ferida e o material estéril</b>. Remover o curativo com a pinça anatômica com dente, umedecendo com SF as gazes aderidas antes de removê-las.',
          'Medir os bordos da ferida (altura, largura e profundidade em cm) com a régua. Limpar do <b>centro mais limpo para o contaminado</b>, lavando em jato; usar torundas apenas na pele circundante e <b>não esfregar o leito da lesão</b>; não secar (apenas o excesso de SF).',
          'Realizar o curativo primário e secundário conforme prescrição e ocluir com película ou atadura. <b>Esparadrapo é contraindicado</b>; o micropore é contraindicado em pele friável ou com escoriações.'
        ]},
        {n:4,h:'Observações',items:[
          'Avaliação diária da lesão: calor, hiperemia, presença de secreção e deiscência.',
          'Sangramento: fazer compressão local e avisar o médico.',
          'Trocar o curativo conforme a cobertura escolhida e a orientação do fabricante, ou sempre que estiver molhado, úmido ou com sujidade aparente.'
        ]},
      ],
      pool:[
        {q:'A solução fisiológica usada na limpeza da ferida deve estar:',
         o:['Gelada, para reduzir a dor','Aquecida a aproximadamente 36 °C, pois a solução fria atrasa a cicatrização','Em temperatura ambiente sempre','Fervente, para esterilizar a ferida'],a:1,d:2},
        {q:'Quando o paciente tem mais de uma lesão, a ordem correta de realização é:',
         o:['Começar pela ferida mais contaminada','Começar pela ferida menos contaminada','Tanto faz a ordem','Fazer todas ao mesmo tempo'],a:1,d:2},
        {q:'Ao limpar o leito da lesão, é correto:',
         o:['Esfregar vigorosamente o leito com gaze','Não esfregar o leito; limpar do centro mais limpo para o contaminado','Usar torundas dentro do leito da ferida','Secar totalmente o leito ao final'],a:1,d:3},
        {q:'Sobre a fixação do curativo, é correto afirmar:',
         o:['O esparadrapo é o fixador de escolha','O esparadrapo é contraindicado e o micropore não deve ser usado em pele friável/escoriada','Micropore pode ser usado em qualquer pele','Não se deve ocluir com atadura'],a:1,d:2},
        {q:'Antes de remover as gazes aderidas à ferida, deve-se:',
         o:['Puxá-las secas rapidamente','Umedecê-las com SF 0,9% para minimizar dor e trauma','Cortá-las com tesoura rente à pele','Aplicar clorexidina alcoólica sobre elas'],a:1,d:2},
        {q:'Um curativo do tipo OCLUSIVO caracteriza-se por:',
         o:['Ser absorvente e usado em feridas exsudativas','Atuar como barreira mecânica, não permitindo a entrada de ar ou fluidos','Reduzir o fluxo sanguíneo por compressão','Deixar a ferida exposta'],a:1,d:2},
        {q:'Diante de sangramento durante o curativo, a conduta é:',
         o:['Aumentar a irrigação em jato','Fazer compressão local e avisar o médico','Aplicar mais gazes e liberar o paciente','Suturar a ferida'],a:1,d:2},
        {q:'A irrigação em jato (com seringa e agulha) é indicada especificamente para:',
         o:['Qualquer tipo de ferida','Tecido de granulação','Pele íntegra adjacente','Feridas com tecido necrótico aderido'],a:1,d:3}
      ]
    },

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
    },

    {
      id:'pop-34', code:'POP-ENF-34', version:'1.7', emission:'03/06/2026',
      title:'Punção e manutenção de cateter totalmente implantável (Port-a-Cath)',
      executantes:'Enfermeiro e médico',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definições',items:[
          'Padronizar a punção e a manutenção do cateter venoso central totalmente implantado (CVCTI), garantindo um acesso permeável e seguro, além de orientar o manejo de intercorrências.',
          'O CVCTI possibilita a infusão de soluções, quimioterápicos, hemoderivados e nutrição parenteral, além da coleta de sangue — oferecendo menor índice de infecção, menor risco de trombose e preservação do sistema venoso periférico.'
        ]},
        {n:2,h:'Materiais',items:[
          'EPIs, bandeja, luva estéril, máscara cirúrgica e óculos de proteção; bandeja de cateterismo; clorexidina alcoólica 0,5% e degermante 4%; gaze estéril.',
          'Seringas de 10 ml, agulha específica de punção do cateter (<b>Hubber ou Cytocan</b>), solução fisiológica 0,9%, película transparente e solução desinfetante padronizada.'
        ]},
        {n:3,h:'Técnica de punção',items:[
          'Higienizar as mãos, conferir os <b>13 certos</b> da medicação, identificar o paciente pela pulseira e posicioná-lo em Fowler ou decúbito dorsal com cabeceira a 30°.',
          'Fazer antissepsia da pele com clorexidina alcoólica 0,5% em movimentos circulares do centro para fora, repetindo e deixando secar; delimitar o reservatório com a mão não dominante.',
          'Puncionar a região central do cateter em <b>ângulo de 90°</b>, aspirar observando refluxo de sangue, lavar com 10 ml de SF 0,9% em turbilhonamento e instalar a solução de manutenção; fixar com película estéril.'
        ]},
        {n:4,h:'Manutenção e troca da agulha',items:[
          'Trocar a agulha a cada <b>7 dias</b>, ou a cada 24 horas em uso de hemocomponentes/nutrição parenteral; em caso de deslocamento, NÃO reposicionar — retirar e repuncionar.',
          'Após infundir qualquer medicamento, lavar o acesso com 10 ml de SF 0,9% em turbilhonamento. Se o cateter não for usado, salinizá-lo para manter a permeabilidade.'
        ]},
        {n:5,h:'Intercorrências',items:[
          '<b>Obstrução:</b> verificar clamps, circuitos e torções antes de tentar lavar suavemente com SF 0,9%; nunca usar seringa de 1 ml (insulina), pelo risco de romper o cateter.',
          '<b>Extravasamento:</b> pausar a infusão, testar o refluxo, NÃO infundir nada, aspirar o residual com seringa de 10 ml, retirar a punção e comunicar o médico.'
        ],alert:'<b>Cateteres valvulados</b> não apresentam retorno venoso à aspiração — nesses casos a permeabilidade é avaliada pelo fluxo adequado da solução e ausência de resistência à infusão.'}
      ],
      pool:[
        {q:'O ângulo correto para puncionar a região central do reservatório do cateter implantável é:',
         o:['45°','90°','30°','15°'],a:1,d:2},
        {q:'Em uso rotineiro (sem hemocomponentes ou NPT), a agulha do Port-a-Cath deve ser trocada a cada:',
         o:['24 horas','48 horas','7 dias','30 dias'],a:2,d:2},
        {q:'Para lavar o cateter, é terminantemente proibido usar seringa de 1 ml (insulina) porque:',
         o:['Não cabe no extensor','A alta pressão exercida pode romper o cateter','Não é estéril','Demora mais que as outras'],a:1,d:3},
        {q:'Diante de deslocamento da agulha, a conduta do enfermeiro é:',
         o:['Reposicionar a agulha no lugar','Retirar e realizar nova punção','Fixar com mais película','Infundir SF para reposicionar'],a:1,d:2},
        {q:'Após a infusão de qualquer medicamento pelo cateter, deve-se:',
         o:['Apenas clampear o extensor','Lavar o acesso com 10 ml de SF 0,9% em turbilhonamento','Trocar a agulha imediatamente','Aspirar 20 ml de sangue'],a:1,d:1},
        {q:'Em um cateter valvulado, a permeabilidade é avaliada por:',
         o:['Refluxo de sangue à aspiração','Fluxo adequado da solução e ausência de resistência à infusão','Coloração do sangue','Ruído à infusão'],a:1,d:3}
      ]
    },

    {
      id:'pop-57', code:'POP-ENF-57', version:'1.1', emission:'30/07/2021',
      title:'Desbridamento de feridas',
      executantes:'Enfermeiros das Unidades de Internação e UTI',
      origem:'Pavilhão, UTI, DIP1, DIP2, Tisiologia e Egy',
      setores:['assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Desbridamento é a remoção do tecido morto, inviável/desvitalizado, infectado, hiperqueratose ou corpos estranhos da ferida e área perilesional, atingindo um processo de cicatrização ideal.',
          'O tecido necrosado é uma barreira mecânica à cicatrização, favorece o crescimento bacteriano e mascara as reais dimensões da ferida. O desbridamento é de <b>competência do enfermeiro</b>.'
        ]},
        {n:2,h:'Quando NÃO desbridar a necrose',items:[
          'Doente em fase terminal, escara estável em calcâneo, escara seca em membros isquêmicos, terapias anticoagulantes e distúrbios hemorrágicos.',
          'Avaliar também condições clínicas, doença de base, perfusão sanguínea e condição mental/emocional antes de decidir.'
        ]},
        {n:3,h:'Métodos de desbridamento',items:[
          '<b>Autolítico:</b> seletivo e atraumático (ex.: hidrogel), porém mais prolongado — indicado para lesões com tecido necrótico, contraindicado em úlceras isquêmicas e fúngicas.',
          '<b>Instrumental</b> (enfermeiro habilitado): <i>slice</i> (dissecar em finas lâminas), <i>square</i> (quadradinhos de 2 mm a 0,5 cm) e <i>cover</i> (remoção em forma de tampa).',
          '<b>Cirúrgico:</b> ressecção da necrose e parte do tecido viável; método rápido, porém com custo elevado, risco anestésico, sangramento e infecção.'
        ]},
        {n:4,h:'Execução do procedimento',items:[
          'Preparar o material, garantir analgesia, orientar o paciente pelo nome, posicioná-lo e proporcionar privacidade, seguindo as normas da CCIH e técnica asséptica.',
          'Se houver mais de uma lesão, <b>iniciar pelas menos contaminadas</b>; umedecer o curativo primário com SF antes de removê-lo para minimizar a dor e o trauma.',
          'Medir os bordos da lesão (altura, largura e profundidade) com régua descartável, remover o tecido necrótico pela técnica escolhida e ocluir com os curativos primário e secundário.'
        ]},
        {n:5,h:'Observações',items:[
          'Lavar a ferida com SF 0,9% morno em jato (seringa de 20 ml + agulha 40x12); usar torundas apenas na pele circundante.',
          'Em feridas infectadas, limpar <b>primeiro a pele circundante e depois a ferida</b>.'
        ],alert:'Interromper o procedimento antes do aparecimento de tecido viável, ou em caso de sangramento, dor, cansaço, tempo prolongado ou insegurança do profissional.'}
      ],
      pool:[
        {q:'O desbridamento de feridas é uma competência:',
         o:['Exclusiva do médico','Do enfermeiro','Do técnico de enfermagem','Do fisioterapeuta'],a:1,d:2},
        {q:'Quando há mais de uma lesão a desbridar, deve-se iniciar pela:',
         o:['Mais contaminada','Menos contaminada','Maior','Mais dolorosa'],a:1,d:2},
        {q:'NÃO se deve desbridar a necrose em caso de:',
         o:['Escara estável em calcâneo','Tecido com granulação','Ferida limpa e superficial','Lesão recém-suturada'],a:0,d:3},
        {q:'A técnica instrumental em que se realizam pequenos quadradinhos no tecido necrótico é a:',
         o:['Slice','Square','Cover','Autolítica'],a:1,d:3},
        {q:'O curativo primário deve ser umedecido com SF antes de removê-lo porque:',
         o:['Facilita a contaminação','A umidade minimiza a dor e o trauma do tecido','Acelera a necrose','Dispensa a analgesia'],a:1,d:1},
        {q:'O procedimento deve ser interrompido quando:',
         o:['Surgir tecido viável ou houver sangramento/dor','A ferida ainda tiver necrose','O paciente estiver calmo','Faltarem 5 minutos'],a:0,d:2}
      ]
    },

    {
      id:'pop-58', code:'POP-ENF-58', version:'1.0', emission:'13/05/2026',
      title:'Transporte de paciente para o centro cirúrgico',
      executantes:'Equipe de enfermagem e medicina',
      origem:'Todas as unidades de internação do HNR',
      setores:['assistencial','uti','cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o transporte do paciente até o centro cirúrgico, garantindo estabilidade clínica, segurança e assistência de enfermagem durante todo o trajeto.',
          'É um procedimento crítico que exige comunicação eficaz entre as equipes, checklist de segurança e preparo do paciente para prevenir eventos adversos.'
        ]},
        {n:2,h:'Classificação do transporte',items:[
          '<b>PCM</b> (cuidados mínimos) e <b>PCI</b> (cuidados intermediários): paciente estável — transporte feito pelos técnicos de enfermagem.',
          '<b>PCAD</b> (alta dependência): crônico/paliativo estável, com total dependência — transporte pelos técnicos de enfermagem.',
          '<b>PCSI</b> (semi-intensivos) e <b>PCIt</b> (intensivos): passível de instabilidade ou grave com risco iminente de morte — transporte pelos técnicos <b>junto com enfermeiro e médico</b>.'
        ]},
        {n:3,h:'Materiais',items:[
          'EPIs, prontuário físico e eletrônico, checklist do procedimento, saco plástico transparente e solução desinfetante padronizada.',
          'Maca de transporte ou cadeira de rodas e torpedo de oxigênio, conforme a necessidade.'
        ]},
        {n:4,h:'Execução',items:[
          'O paciente recebe a visita pré-operatória do enfermeiro do centro cirúrgico (ou da própria unidade, na ausência dele), que deixa no prontuário um <b>checklist</b> de preparo.',
          'No dia, o CC contata a unidade; o enfermeiro avalia o paciente, confere e valida todos os itens do checklist, que deve ser <b>preenchido e assinado</b> antes do encaminhamento.',
          'Manter rigorosamente as precauções específicas durante o trajeto e garantir a comunicação efetiva com a equipe de destino para continuidade da assistência.'
        ]}
      ],
      pool:[
        {q:'O transporte de paciente classificado como PCIt (cuidados intensivos) é realizado:',
         o:['Só pelo técnico de enfermagem','Pelos técnicos junto com enfermeiro e médico','Só pelo médico','Por qualquer funcionário disponível'],a:1,d:2},
        {q:'O documento que orienta o preparo do paciente, deixado no prontuário pelo enfermeiro do CC, é o:',
         o:['Termo de alta','Checklist de preparo','Boletim médico','Receituário'],a:1,d:1},
        {q:'Antes do encaminhamento ao CC, o checklist deve ser:',
         o:['Apenas lido','Preenchido e assinado pelo enfermeiro da unidade','Arquivado em branco','Enviado por e-mail'],a:1,d:2},
        {q:'Durante o trajeto até o centro cirúrgico, as precauções específicas devem ser:',
         o:['Suspensas para agilizar','Rigorosamente mantidas','Decididas pelo maqueiro','Aplicadas só na chegada'],a:1,d:2},
        {q:'A visita pré-operatória é realizada preferencialmente pelo:',
         o:['Enfermeiro do centro cirúrgico','Nutricionista','Recepcionista','Farmacêutico'],a:0,d:1}
      ]
    },

    {
      id:'pop-59', code:'POP-ENF-59', version:'1.0', emission:'20/03/2020',
      title:'Kit de sinais vitais para isolamento',
      executantes:'Equipe de enfermagem e equipe médica',
      origem:'Todas as unidades do hospital no isolamento de pacientes',
      setores:['assistencial','uti'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definições',items:[
          'Proteger os pacientes do risco de transmissão de agentes infecciosos por equipamentos de uso íntimo e diário, mantendo em cada leito de isolamento um kit individual.',
          'As precauções de isolamento se aplicam a pacientes suspeitos ou infectados por microrganismos transmitidos por <b>contato</b>, <b>gotículas</b> (>5 micras) ou <b>aerossóis</b> (≤5 micras).'
        ]},
        {n:2,h:'Composição do kit',items:[
          'Kit/caixa contendo <b>estetoscópio, esfigmomanômetro, termômetro e garrote</b>, de uso exclusivo do paciente em isolamento.'
        ]},
        {n:3,h:'Execução e periodicidade',items:[
          'Os artigos do kit são de uso exclusivo do paciente durante todo o período de isolamento.',
          'Para reutilização em outro paciente, devem seguir os protocolos de desinfecção/esterilização estabelecidos pelo hospital.'
        ]},
        {n:4,h:'Observações',items:[
          'O material fica no setor de <b>CME</b> e é destinado à unidade mediante solicitação do enfermeiro responsável.',
          'Deve ser devolvido assim que o paciente receber alta ou sair do isolamento.'
        ]}
      ],
      pool:[
        {q:'O kit de sinais vitais para isolamento é composto por:',
         o:['Estetoscópio, esfigmomanômetro, termômetro e garrote','Apenas termômetro','Material cirúrgico estéril','Medicamentos de emergência'],a:0,d:1},
        {q:'Durante o isolamento, os equipamentos do kit são de uso:',
         o:['Compartilhado entre leitos','Exclusivo do paciente isolado','Único e descartável','Apenas da equipe médica'],a:1,d:1},
        {q:'A transmissão por partículas ≤5 micras que permanecem no ar por longos períodos é a por:',
         o:['Contato','Gotículas','Aerossóis','Vetores'],a:2,d:3},
        {q:'Após a alta ou saída do isolamento, o kit deve ser:',
         o:['Descartado no lixo comum','Devolvido ao CME','Mantido no leito','Levado pelo paciente'],a:1,d:1},
        {q:'Para ser reutilizado em outro paciente, o material do kit deve:',
         o:['Ser apenas limpo com álcool pelo acompanhante','Seguir os protocolos de desinfecção/esterilização do hospital','Ser usado imediatamente','Ficar 30 dias guardado'],a:1,d:2}
      ]
    },

    {
      id:'pop-amb-01', code:'POP-AMB-01', version:'1.0', emission:'02/10/2020',
      title:'Entrada de pacientes no ambulatório',
      executantes:'Equipe de enfermagem do ambulatório',
      origem:'HNR / Demanda espontânea / SISREG',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a recepção e a triagem dos pacientes referenciados ao serviço de ambulatório.'
        ]},
        {n:2,h:'Recepção e triagem',items:[
          'Um servidor escalado permanece na porta de entrada, recepciona o paciente e oferece <b>álcool gel a 70%</b> nas mãos.',
          'Aplicar o questionário de sintomas gripais (tosse, febre, dor no corpo, falta de ar, perda de olfato/paladar, contato com suspeito) e aferir a temperatura de todos.',
          'Se todas as respostas forem <b>não</b>, encaminhar à recepção; com mais de uma resposta <b>sim</b>, manter o paciente ao ar livre na frente do ambulatório para conduta ou reagendamento.'
        ]},
        {n:3,h:'Identificação e orientações',items:[
          'Imprimir a etiqueta (nome completo, data de nascimento e, em homônimos, nome da mãe), confirmar os dados e fixá-la no lado esquerdo do tórax.',
          'Todos devem usar máscara facial e manter distanciamento mínimo de <b>1,5 m</b>; o acesso é permitido até 10 minutos antes do horário agendado.'
        ]}
      ],
      pool:[
        {q:'Ao recepcionar o paciente na entrada do ambulatório, o servidor deve primeiro:',
         o:['Oferecer álcool gel a 70% nas mãos','Pesar o paciente','Coletar exames','Aplicar vacina'],a:0,d:1},
        {q:'Se o paciente apresentar mais de uma resposta SIM no questionário de sintomas, ele deve:',
         o:['Entrar normalmente na recepção','Permanecer ao ar livre na frente do ambulatório para conduta/reagendamento','Ser internado','Ser dispensado sem atendimento'],a:1,d:2},
        {q:'A etiqueta de identificação deve ser fixada:',
         o:['No pulso direito','No lado esquerdo da região torácica','Na testa','Na agenda médica'],a:1,d:1},
        {q:'O distanciamento mínimo orientado entre os pacientes é de:',
         o:['0,5 m','1,5 m','3 m','Não há orientação'],a:1,d:1},
        {q:'Em caso de pacientes com nomes iguais (homônimos), a etiqueta deve conter também:',
         o:['O nome da mãe','O tipo sanguíneo','O número do SUS','A profissão'],a:0,d:2}
      ]
    },

    {
      id:'pop-amb-02', code:'POP-AMB-02', version:'1.0', emission:'02/10/2020',
      title:'Sala de recepção do ambulatório',
      executantes:'Técnico de enfermagem',
      origem:'Pacientes do ambulatório do HNR e externos agendados pelo SISREG ou demanda espontânea',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Recepcionar o usuário que busca atendimento no ambulatório do HNR.'
        ]},
        {n:2,h:'Fluxo de recepção',items:[
          'O paciente retira uma <b>senha</b> e aguarda ser chamado; o recepcionista confirma o horário de agendamento e confere um documento com foto.',
          'Verificar se há prontuário no hospital — se não houver, encaminhar ao setor de registro para abertura e posterior retorno; fazer o Registro de Atendimento (RA) eletrônico.'
        ]},
        {n:3,h:'Identificação',items:[
          'Imprimir a etiqueta (nome completo, data de nascimento e nome da mãe em homônimos), confirmar com o paciente e fixá-la no lado esquerdo do tórax.',
          'Orientar o paciente a permanecer na recepção até ser chamado para a verificação de sinais vitais.'
        ]}
      ],
      pool:[
        {q:'Ao chegar à recepção do ambulatório, o paciente deve primeiro:',
         o:['Retirar uma senha e aguardar ser chamado','Ir direto ao consultório','Coletar exames','Receber alta'],a:0,d:1},
        {q:'Se o paciente não tiver prontuário no hospital, o recepcionista deve:',
         o:['Negar o atendimento','Encaminhá-lo ao setor de registro para abertura do prontuário','Criar um prontuário provisório em papel','Pedir que volte outro dia'],a:1,d:2},
        {q:'O documento conferido na recepção para confirmar a identidade é:',
         o:['Um documento com foto','A conta de luz','O cartão de banco','Nenhum'],a:0,d:1},
        {q:'O Registro de Atendimento (RA) é feito:',
         o:['Em papel avulso','No prontuário eletrônico para o médico/enfermeiro','Apenas verbalmente','Pela própria recepcionista no fim do dia'],a:1,d:2},
        {q:'Após a recepção, o paciente é orientado a:',
         o:['Ir embora','Aguardar a verificação dos sinais vitais','Coletar a própria etiqueta na impressora','Pagar a consulta'],a:1,d:1}
      ]
    },

    {
      id:'pop-amb-03', code:'POP-AMB-03', version:'1.0', emission:'02/10/2020',
      title:'Sala de procedimento do ambulatório',
      executantes:'Enfermeiro e técnico de enfermagem',
      origem:'Pacientes do ambulatório do HNR e externos agendados pelo SISREG',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Coordenar e executar as atividades de atendimento ao cliente de forma cordial e resolutiva, na complexidade da unidade.'
        ]},
        {n:2,h:'Execução',items:[
          'Preparar o ambiente, chamar o usuário pelo nome e confirmar nome completo e data de nascimento conferindo com a etiqueta.',
          'Verificar sinais vitais e peso registrando no prontuário eletrônico; higienizar as mãos antes e após o procedimento.',
          'Realizar o procedimento conforme solicitação médica/enfermagem, orientar sobre possíveis efeitos adversos, registrar e reorganizar a sala ao final.'
        ]},
        {n:3,h:'Procedimentos realizados',items:[
          'Administração de medicamentos, soro antirrábico/antitetânico, coleta de exames, testes rápidos (HIV, hepatites B e C, sífilis), oxigenoterapia, ECG e curativos limpos.',
          'Em reações adversas ou qualquer anormalidade, comunicar <b>imediatamente</b> o médico e a enfermeira.'
        ]}
      ],
      pool:[
        {q:'Antes de iniciar o procedimento, deve-se confirmar a identidade do usuário:',
         o:['Apenas pela senha','Pelo nome completo e data de nascimento, conferindo com a etiqueta','Pela aparência','Pelo número da sala'],a:1,d:1},
        {q:'Diante de uma reação adversa do usuário, a conduta é:',
         o:['Aguardar melhora espontânea','Comunicar imediatamente o médico e a enfermeira','Anotar e seguir o dia','Liberar o paciente'],a:1,d:2},
        {q:'A higienização das mãos no procedimento deve ocorrer:',
         o:['Só antes','Antes e após o procedimento','Só após','Apenas se houver sujidade'],a:1,d:1},
        {q:'Qual destes é um procedimento realizado na sala do ambulatório?',
         o:['Cirurgia de grande porte','Testes rápidos (HIV, hepatites, sífilis)','Parto','Endoscopia'],a:1,d:1},
        {q:'Após a realização do procedimento, a sala deve ser:',
         o:['Deixada como está','Reorganizada para o próximo atendimento','Trancada por 24 h','Higienizada apenas no fim do dia'],a:1,d:1}
      ]
    },

    {
      id:'pop-amb-04', code:'POP-AMB-04', version:'1.1', emission:'20/10/2020',
      title:'Rotina da sala de material biológico do ambulatório',
      executantes:'Enfermeiro e/ou técnico de enfermagem do ambulatório e das unidades',
      origem:'HNR',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar regras para o acondicionamento e o transporte de amostras biológicas para LACEN/SC, Hospital Universitário (HU), HEMOSC, CEPON e Patologia do Hospital Infantil.'
        ]},
        {n:2,h:'Organização do ambiente',items:[
          'Verificar a temperatura da geladeira e do freezer, manter a sala limpa e organizada e higienizar as mãos e as maletas de transporte.',
          'Conferir o <b>gelox</b> em temperatura adequada para amostras que necessitam de refrigeração.'
        ]},
        {n:3,h:'Recebimento e envio',items:[
          'Na chegada do material, conferir se está dentro das normas do manual de coleta do LACEN; acondicionar corretamente nas maletas para evitar derramamento.',
          'Anotar no <b>livro de protocolo</b> o nome do paciente, tipo de material, unidade e data da coleta/envio. As maletas são identificadas por laboratório de destino.'
        ]}
      ],
      pool:[
        {q:'O destino das amostras biológicas processadas nesta sala inclui:',
         o:['LACEN/SC, HU, HEMOSC e CEPON','Apenas o laboratório interno','A farmácia','O almoxarifado'],a:0,d:1},
        {q:'Para amostras que necessitam de refrigeração, deve-se conferir o:',
         o:['Gelox em temperatura adequada','Nível de álcool','Estoque de luvas','Horário de coleta'],a:0,d:2},
        {q:'O registro do nome do paciente, tipo de material e data de envio é feito no:',
         o:['Prontuário do médico','Livro de protocolo','Mural da sala','Caderno pessoal'],a:1,d:1},
        {q:'As maletas de transporte são identificadas conforme:',
         o:['A cor do material','O laboratório de destino','O peso','O dia da semana'],a:1,d:2},
        {q:'Antes de iniciar a rotina, deve-se verificar:',
         o:['A temperatura da geladeira e do freezer','A escala de férias','O estoque da farmácia','A agenda médica'],a:0,d:1}
      ]
    },

    {
      id:'pop-amb-06', code:'POP-AMB-06', version:'1.0', emission:'02/10/2020',
      title:'Espirometria',
      executantes:'Médico, enfermeiro e técnico de enfermagem habilitado (SBPT)',
      origem:'Pacientes do ambulatório e unidades do HNR; externos agendados pelo SISREG',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Exame complementar ao diagnóstico e ao acompanhamento de doenças pulmonares, avaliando a capacidade do ar inspirado.',
          'Também conhecida como <b>prova de função pulmonar</b> ou prova ventilatória.'
        ]},
        {n:2,h:'Execução',items:[
          'Confirmar identidade, explicar o procedimento, conferir o pedido e o preparo, e calibrar o espirômetro conforme as normas da SBPT.',
          'Com o paciente sentado e <b>clipe nasal</b>, pedir que respire pelo bocal; encher o pulmão e assoprar com máxima força e rapidez. Aplicar broncodilatador (prescrição), aguardar 10–15 min e repetir.'
        ]},
        {n:3,h:'Preparo e contraindicações',items:[
          'Preparo: repouso de 5–10 min, sem jejum; não ingerir chá/álcool 6 h antes, suspender broncodilatador de ação rápida por 4 h e de ação prolongada por 10 h, e não fumar por 2 h.',
          'Contraindicações: instabilidade cardiocirculatória, IAM recente, tromboembolismo pulmonar, aneurismas, cirurgia ocular/torácica/abdominal recente, crise hipertensiva ou vômitos.'
        ]}
      ],
      pool:[
        {q:'A espirometria também é conhecida como:',
         o:['Prova de função pulmonar','Eletrocardiograma','Hemograma','Raio-X'],a:0,d:1},
        {q:'No preparo do exame, o paciente deve não fumar por pelo menos:',
         o:['30 minutos','2 horas','12 horas','24 horas'],a:1,d:2},
        {q:'Durante o exame, para impedir a saída de ar pelo nariz, utiliza-se:',
         o:['Máscara facial','Clipe nasal','Cateter nasal','Tampão'],a:1,d:1},
        {q:'É uma contraindicação à espirometria:',
         o:['IAM (infarto) recente','Tosse leve','Idade avançada','Hipertensão controlada'],a:0,d:3},
        {q:'Após aplicar o broncodilatador, deve-se aguardar antes de repetir o exame:',
         o:['10 a 15 minutos','1 minuto','1 hora','Não se repete'],a:0,d:2}
      ]
    },

    {
      id:'pop-amb-07', code:'POP-AMB-07', version:'1.0', emission:'20/10/2020',
      title:'Atendimento de acidente com material biológico',
      executantes:'Equipe médica e equipe de enfermagem',
      origem:'Todos os profissionais de saúde e a população em geral',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Atender profissionais e clientes que se expõem a sangue e outros fluidos biológicos em seus locais de serviço.',
          'Acidente em serviço é o dano físico ou mental sofrido pelo servidor relacionado ao exercício de suas funções.'
        ]},
        {n:2,h:'Avaliação do acidente',items:[
          'Abrir o registro de atendimento e descrever o acidente: dia/horário, material biológico envolvido, área atingida, uso de EPI e status vacinal para tétano e hepatite B.',
          'Investigar o status sorológico do <b>paciente-fonte</b>; quando possível, realizar testes rápidos (HIV, HBsAg, Anti-HCV e VDRL) no acidentado e na fonte.'
        ]},
        {n:3,h:'Conduta e acompanhamento',items:[
          'Em fonte desconhecida ou positiva para HIV, após avaliação médica e prescrição, fornecer o <b>antirretroviral (28 dias)</b> com a 1ª dose no momento, informando os efeitos adversos.',
          'Agendar acompanhamento sorológico (hepatites B e C em 30/90/180 dias; HIV em 30/90 dias; sífilis em 90/180 dias), notificar o acidente à vigilância epidemiológica e vacinar quando indicado.'
        ]}
      ],
      pool:[
        {q:'Ao descrever o acidente com material biológico, deve-se registrar, entre outros:',
         o:['Material envolvido, área atingida, uso de EPI e status vacinal','Apenas o nome do servidor','Somente o horário','A cor do uniforme'],a:0,d:2},
        {q:'Os testes rápidos realizados no acidentado e na fonte incluem:',
         o:['HIV, HBsAg, Anti-HCV e VDRL','Apenas glicemia','Apenas hemograma','Teste de gravidez'],a:0,d:2},
        {q:'Quando a fonte é desconhecida ou positiva para HIV e há prescrição, fornece-se:',
         o:['Antirretroviral por 28 dias, com a 1ª dose no momento','Apenas analgésico','Antibiótico por 7 dias','Nenhuma medicação'],a:0,d:3},
        {q:'O acompanhamento sorológico para HIV após a exposição é feito em:',
         o:['30 e 90 dias','Apenas no 1º dia','5 anos','Não há acompanhamento'],a:0,d:3},
        {q:'Após o atendimento, o acidente deve ser:',
         o:['Esquecido','Notificado à vigilância epidemiológica do HNR','Resolvido apenas verbalmente','Arquivado sem registro'],a:1,d:2}
      ]
    },

    {
      id:'pop-amb-05', code:'POP-AMB-05', version:'1.1', emission:'04/10/2021',
      title:'Atendimento em sala de vacina',
      executantes:'Técnico de enfermagem e enfermeiro',
      origem:'Pacientes atendidos no ambulatório do HNR',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a organização e o funcionamento da sala de imunização, assegurando acolhimento, segurança do paciente, prevenção de infecções e biossegurança.'
        ]},
        {n:2,h:'Cadeia de frio e conferência',items:[
          'Manter a câmara refrigerada entre <b>+2 e +8 °C</b>, com ar-condicionado 24 h e registro diário no mapa de controle de temperatura.',
          'Realizar a <b>dupla checagem</b> com o enfermeiro (frasco, dose, via e paciente) e conferir aparência, integridade, lote, validade e prazo de uso após abertura.'
        ]},
        {n:3,h:'Preparo e administração',items:[
          'Lembrar dos <b>12 certos da vacinação</b> (indicação, dose, paciente, vacina, validade, via, orientação, temperatura, armazenamento, registro e aprazamento certos).',
          'Não realizar antissepsia da pele, exceto em sujidade visível (lavar com água e sabão); aspirar a dose só no momento da administração e identificar frascos multidose com data/hora de abertura.',
          'Observar o paciente quanto a reações imediatas, registrar na carteira de vacinação e nos sistemas (PEP e SI-PNI) e aprazar a lápis as próximas doses.'
        ]},
        {n:4,h:'Observações',items:[
          'Se houver alteração de temperatura na câmara no início do plantão, <b>não utilizar</b> os imunobiológicos — comunicar o enfermeiro e a Central de Imunização.',
          'A punção da borracha do frasco multidose deve ser em pontos diferentes, evitando o centro; a agulha não pode ficar inserida no frasco.'
        ]}
      ],
      pool:[
        {q:'A temperatura correta de conservação dos imunobiológicos na câmara refrigerada é:',
         o:['+2 a +8 °C','0 °C','-20 °C','Temperatura ambiente'],a:0,d:2},
        {q:'Antes de administrar a vacina, a conferência do frasco/dose/via/paciente é feita por meio da:',
         o:['Dupla checagem com o enfermeiro','Conferência apenas visual','Pergunta ao acompanhante','Leitura da bula'],a:0,d:2},
        {q:'Na aplicação de vacinas, a antissepsia da pele com álcool:',
         o:['É sempre obrigatória','Não é realizada, exceto se houver sujidade visível','Substitui a higiene das mãos','É feita só com clorexidina'],a:1,d:3},
        {q:'Diante de alteração de temperatura na câmara no início do plantão, deve-se:',
         o:['Usar as vacinas rapidamente','Não utilizar os imunobiológicos e comunicar o enfermeiro/Central de Imunização','Congelar os frascos','Descartar tudo sem avisar'],a:1,d:2},
        {q:'A dose do imunobiológico deve ser aspirada:',
         o:['No início do plantão para todos','Somente no momento da administração','Uma vez por dia','Na véspera'],a:1,d:2}
      ]
    },

    {
      id:'pop-amb-08', code:'POP-AMB-08', version:'1.0', emission:'02/10/2020',
      title:'Atendimento de vítimas de violência sexual',
      executantes:'Equipe médica e de enfermagem',
      origem:'Encaminhados pela Rede RAIVS (HU e MCD)',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar o manejo da imunização para hepatite B em vítimas de violência sexual maiores de 15 anos e administrar o imunobiológico.',
          'O HNR integra a Rede de Atenção Integral às Pessoas em Situação de Violência Sexual (<b>RAIVS</b>); seu papel é administrar a profilaxia para hepatite B dos pacientes encaminhados da MCD e do HU e reencaminhá-los ao serviço de origem.'
        ]},
        {n:2,h:'Materiais',items:[
          'Luvas, algodão, seringa e agulha, bandeja com papel, Imunoglobulina Humana Anti-HBV (IGHAHB) e vacina anti-HBV (recombinante).'
        ]},
        {n:3,h:'Execução',items:[
          'Abrir prontuário e RA, confirmar identidade, pesar o paciente e questionar sobre imunização prévia para hepatite B.',
          'Orientar e administrar o imunobiológico prescrito, informando sobre os possíveis efeitos adversos.'
        ]}
      ],
      pool:[
        {q:'O papel do HNR na Rede RAIVS é administrar a profilaxia para:',
         o:['Hepatite B','Tétano','Raiva','Febre amarela'],a:0,d:2},
        {q:'Este atendimento é destinado a vítimas de violência sexual com idade:',
         o:['Maiores de 15 anos completos','Menores de 10 anos','Qualquer idade','Apenas idosos'],a:0,d:2},
        {q:'Os pacientes são encaminhados ao HNR pela:',
         o:['Rede RAIVS (HU e MCD)','Farmácia popular','UPA','Próprio domicílio'],a:0,d:1},
        {q:'Antes de administrar o imunobiológico, deve-se questionar sobre:',
         o:['Imunização prévia para hepatite B','Tipo sanguíneo','Plano de saúde','Histórico cirúrgico'],a:0,d:2},
        {q:'Após a profilaxia, o paciente deve ser:',
         o:['Internado','Reencaminhado para acompanhamento no serviço de origem','Liberado sem orientações','Transferido para a UTI'],a:1,d:2}
      ]
    },

    {
      id:'pop-amb-09', code:'POP-AMB-09', version:'1.0', emission:'02/10/2020',
      title:'Atendimento pós-exposição com risco ao tétano',
      executantes:'Médico, enfermeiro e técnico de enfermagem',
      origem:'Demanda espontânea ou encaminhados de outras unidades de saúde',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definições',items:[
          'Orientar e oferecer profilaxia antitetânica de forma clara e segura. O tétano é uma infecção aguda e grave causada pela toxina do <b>Clostridium tetani</b>, não transmitida entre indivíduos.',
          '<b>Risco mínimo:</b> ferimentos superficiais, limpos, sem corpos estranhos. <b>Alto risco:</b> ferimentos profundos ou sujos, com corpo estranho/tecido desvitalizado, queimaduras, feridas puntiformes, por arma, mordeduras e fraturas expostas.'
        ]},
        {n:2,h:'Imunobiológicos',items:[
          '<b>Vacina dT</b> (dupla adulto), via IM: esquema básico de 3 doses (0, 2 e 4 meses), para maiores de 7 anos.',
          '<b>SAT</b> (soro antitetânico, heterólogo de equino) e <b>IGHAT</b> (imunoglobulina humana, dose única 250 UI IM) neutralizam a toxina.'
        ]},
        {n:3,h:'Execução e observação',items:[
          'Abrir prontuário/RA, avaliação do enfermeiro (ficha de profilaxia), encaminhar ao médico e executar a prescrição.',
          'Em aplicação de <b>SAT</b>, puncionar acesso venoso e manter o paciente <b>2 horas em observação</b> (risco de choque anafilático); com <b>IGHAT</b>, observar por 20 minutos. Sem vacinação prévia, aplicar a 1ª dose de dT e orientar continuidade na UBS.'
        ]}
      ],
      pool:[
        {q:'Um ferimento profundo, sujo e com corpo estranho é classificado como:',
         o:['Risco mínimo de tétano','Alto risco de tétano','Sem risco','Risco apenas estético'],a:1,d:2},
        {q:'Após a aplicação do SAT (soro antitetânico), o paciente deve permanecer em observação por:',
         o:['20 minutos','2 horas','5 minutos','24 horas'],a:1,d:3},
        {q:'O esquema básico de imunização com a vacina dT consiste em:',
         o:['Dose única','3 doses (0, 2 e 4 meses)','2 doses anuais','10 doses'],a:1,d:2},
        {q:'O principal risco da administração de soro heterólogo (SAT) é:',
         o:['Choque anafilático','Hipotermia','Hipoglicemia','Sonolência'],a:0,d:3},
        {q:'A imunoglobulina humana antitetânica (IGHAT) é administrada em:',
         o:['Dose única de 250 UI, via IM','Via oral diária','Via inalatória','Dose dupla EV'],a:0,d:3}
      ]
    },

    {
      id:'pop-amb-10', code:'POP-AMB-10', version:'1.2', emission:'02/10/2020',
      title:'Profilaxia contra a raiva humana',
      executantes:'Médico, enfermeiro e técnico de enfermagem',
      origem:'Demanda espontânea e outras unidades de saúde',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar e oferecer profilaxia contra a raiva humana. A raiva é uma encefalite viral aguda com letalidade de ~100%, transmitida pela saliva de animais infectados (mordedura, arranhadura ou lambedura).'
        ]},
        {n:2,h:'Classificação dos acidentes',items:[
          '<b>Leves:</b> ferimentos superficiais únicos em tronco e membros (exceto mãos, polpas digitais e planta dos pés); lambedura de pele com lesões superficiais.',
          '<b>Graves:</b> ferimentos em extremidades (cabeça, pescoço, mãos), profundos/múltiplos/extensos, lambedura de mucosas. Em agressões por <b>morcego ou animal silvestre</b>, vacina e soro são indicados independentemente da gravidade.'
        ]},
        {n:3,h:'Conduta',items:[
          'Avaliação do enfermeiro (ficha de profilaxia) quanto à gravidade, tipo e condições do animal, e situação vacinal antitetânica; encaminhar ao médico.',
          'O <b>SAR</b> (soro antirrábico) ou <b>IGHAR</b> é infiltrado ao redor do ferimento; observação de 2 h para SAR e 20 min para IGHAR. Esquema vacinal antirrábico: <b>0, 3, 7 e 14 dias</b>.',
          'Se o cão/gato é conhecido e pode ser observado por 10 dias permanecendo saudável, não há necessidade de vacina — assina-se termo de parceria terapêutica.'
        ]}
      ],
      pool:[
        {q:'A letalidade da raiva humana, quando a doença se instala, é de aproximadamente:',
         o:['100%','10%','50%','0%'],a:0,d:3},
        {q:'O esquema vacinal antirrábico humano é aplicado nos dias:',
         o:['0, 3, 7 e 14','0 e 30','Apenas no 1º dia','1, 2 e 3'],a:0,d:3},
        {q:'Em agressão por morcego ou animal silvestre, a conduta é:',
         o:['Indicar vacina e soro independentemente da gravidade da lesão','Apenas lavar o local','Observar o animal','Não fazer nada'],a:0,d:3},
        {q:'O soro antirrábico (SAR) deve ser aplicado preferencialmente:',
         o:['Ao redor do ferimento pelo médico','Apenas na veia','Por via oral','Na região do glúteo sempre'],a:0,d:2},
        {q:'Se o cão/gato agressor é conhecido e fica saudável após 10 dias de observação:',
         o:['Não há necessidade de vacina antirrábica','Aplica-se o esquema completo mesmo assim','Interna-se o paciente','Aplica-se soro imediatamente'],a:0,d:2}
      ]
    },

    {
      id:'pop-amb-11', code:'POP-AMB-11', version:'1.2', emission:'06/05/2026',
      title:'Realização de testes rápidos (HIV, sífilis, hepatites B e C)',
      executantes:'Equipe de enfermagem e farmácia',
      origem:'Todas as unidades de atendimento do HNR',
      setores:['ambulatorio','assistencial'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a realização dos testes rápidos de HIV, sífilis, hepatites B e C e garantir o registro adequado no prontuário.',
          'Cada kit diagnóstico acompanha uma <b>pipeta exclusiva</b>, sinalizada com o volume correto de sangue — não deve ser substituída.'
        ]},
        {n:2,h:'Testagem',items:[
          'Higienizar as mãos, paramentar-se conforme a precaução, confirmar a identidade do paciente e coletar a amostra por <b>punção digital</b> (dedo anelar, médio ou indicador).',
          'Depositar o sangue no poço do dispositivo, adicionar a solução tampão e cronometrar — não ultrapassar o tempo de leitura do fabricante. Em precaução/isolamento de contato, toda a realização e leitura ocorrem <b>à beira-leito</b>.'
        ]},
        {n:3,h:'Interpretação e comunicação',items:[
          '<b>Reagente:</b> linhas no controle (C) e no teste (T). <b>Não reagente:</b> só a linha do controle (C). <b>Inválido:</b> ausência da linha de controle (C) — repetir o teste.',
          'O enfermeiro tem competência para realizar, interpretar e comunicar os resultados, com acolhimento, privacidade e sigilo. Resultado reagente para HIV exige novo teste de laboratório diferente; casos complexos acionam psicologia e médico.'
        ]}
      ],
      pool:[
        {q:'Em um teste rápido, o resultado REAGENTE é indicado por:',
         o:['Linhas no controle (C) e no teste (T)','Apenas a linha do controle (C)','Nenhuma linha','Apenas a linha do teste (T)'],a:0,d:2},
        {q:'Quando aparece apenas a linha do controle (C), o resultado é:',
         o:['Reagente','Não reagente','Inválido','Inconclusivo'],a:1,d:2},
        {q:'Se a linha de controle (C) não aparece, o teste é considerado:',
         o:['Reagente','Não reagente','Inválido (deve ser repetido)','Positivo'],a:2,d:3},
        {q:'A coleta da amostra para o teste rápido é feita por:',
         o:['Punção digital','Punção venosa profunda','Coleta de urina','Swab nasal'],a:0,d:1},
        {q:'Para paciente em precaução/isolamento de contato, a realização e leitura do teste devem ocorrer:',
         o:['No posto de enfermagem','À beira-leito, sem transportar o material','No laboratório central','Na farmácia'],a:1,d:3}
      ]
    },

    {
      id:'pop-amb-15', code:'POP-AMB-15', version:'1.0', emission:'30/03/2022',
      title:'Técnica para aplicação do PPD',
      executantes:'Enfermeiros habilitados',
      origem:'Setor: Ambulatório',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Conceito e objetivo',items:[
          'O PPD (Teste Tuberculínico ou Reação de Mantoux) consiste na inoculação <b>intradérmica</b> de derivado proteico do M. tuberculosis para medir a resposta imune celular.',
          'Auxilia no diagnóstico da infecção latente (ILTB) e da tuberculose, especialmente em contatos intradomiciliares e pessoas vivendo com HIV/aids.'
        ]},
        {n:2,h:'Aplicação',items:[
          'Conferir identidade e pedido, higienizar as mãos, aspirar <b>0,1 ml</b> de PPD e selecionar o terço médio do antebraço esquerdo (local sem pelos, cicatrizes ou veias calibrosas).',
          'Introduzir o bisel para cima, paralelo à pele, e injetar lentamente 0,1 ml; deve surgir uma <b>pápula esbranquiçada com poros visíveis</b>. Registrar no PEP e anotar dia da inoculação e data/hora da leitura.'
        ]},
        {n:3,h:'Orientações e conservação',items:[
          'Orientar o paciente a não coçar nem aplicar substâncias no local e a <b>retornar em 72 h</b> para a leitura, feita por enfermeiro habilitado.',
          'Conservar o PPD entre 2 °C e 8 °C, protegido da luz solar, sem congelar; validade de <b>15 dias</b> após a abertura do frasco.'
        ]}
      ],
      pool:[
        {q:'O PPD (teste tuberculínico) é aplicado por via:',
         o:['Intradérmica','Intramuscular','Endovenosa','Subcutânea'],a:0,d:2},
        {q:'O volume de PPD a ser injetado é de:',
         o:['0,1 ml','1 ml','0,5 ml','2 ml'],a:0,d:2},
        {q:'A leitura do PPD deve ser realizada após:',
         o:['72 horas','24 horas','1 hora','7 dias'],a:0,d:2},
        {q:'Ao injetar o PPD corretamente, deve surgir no local:',
         o:['Uma pápula esbranquiçada com poros visíveis','Um hematoma','Sangramento intenso','Nenhuma alteração'],a:0,d:3},
        {q:'Após aberto, o frasco de PPD tem validade de:',
         o:['15 dias','24 horas','6 meses','1 ano'],a:0,d:2}
      ]
    },

    {
      id:'pop-amb-16', code:'POP-AMB-16', version:'2.0', emission:'30/08/2022',
      title:'Centrifugação de amostras biológicas',
      executantes:'Equipe de enfermagem do ambulatório',
      origem:'Setor: Ambulatório',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Descrever o processo de centrifugação de amostras biológicas e o uso correto da centrífuga para envio aos laboratórios externos.',
          'A centrifugação separa os componentes do sangue (glóbulos, plaquetas e plasma/soro) por força centrífuga, empurrando o sólido ao fundo e deixando o líquido límpido na parte superior.'
        ]},
        {n:2,h:'Preparo',items:[
          'Antes de centrifugar o tubo de sorologia, aguardar de <b>15 a 30 minutos</b> para a retração do coágulo; usar EPIs e garantir a centrífuga sobre bancada firme.',
          'Colocar os tubos nas caçapas fazendo o <b>balanceamento</b> e selecionar rotação/tempo conforme o material.'
        ]},
        {n:3,h:'Parâmetros e finalização',items:[
          'Sangue (soro): <b>3.600 rpm por 20 min</b>; plasma citrato: 3.000 rpm por 15 min; urina: 1.700 rpm por 5 min.',
          'Aguardar a rotação parar totalmente antes de abrir a tampa, retirar os tubos (com pinça se necessário), verificar a separação e higienizar a centrífuga com desinfetante padronizado.'
        ]}
      ],
      pool:[
        {q:'Antes de centrifugar o tubo de sorologia, deve-se aguardar para retração do coágulo:',
         o:['15 a 30 minutos','5 segundos','2 horas','Nenhum tempo'],a:0,d:2},
        {q:'Ao colocar os tubos nas caçapas da centrífuga, é essencial fazer o:',
         o:['Balanceamento dos tubos','Aquecimento dos tubos','Congelamento','Descarte de metade'],a:0,d:2},
        {q:'Para obtenção de soro a partir do sangue, o parâmetro é:',
         o:['3.600 rpm por 20 minutos','1.700 rpm por 5 minutos','100 rpm por 1 hora','3.000 rpm por 15 minutos'],a:0,d:3},
        {q:'A tampa da centrífuga só deve ser aberta:',
         o:['Após a rotação parar totalmente','Durante a rotação','A qualquer momento','Na metade do ciclo'],a:0,d:2},
        {q:'Após o uso, a centrífuga deve ser:',
         o:['Higienizada com desinfetante de superfície padronizado','Deixada como está','Lavada com água corrente','Coberta sem limpeza'],a:0,d:1}
      ]
    },

    {
      id:'pop-cc-01', code:'POP-ENF-CC-01', version:'1.2', emission:'24/08/2021',
      title:'Preparo do paciente no pré-operatório',
      executantes:'Enfermeiro e técnico de enfermagem',
      origem:'Centro Cirúrgico',
      setores:['cc','assistencial'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar os cuidados de enfermagem prestados pelas unidades de internação a todos os pacientes que serão submetidos a cirurgia.'
        ]},
        {n:2,h:'Preparo na véspera/dia da cirurgia',items:[
          'Confirmar o agendamento (nome, horário e procedimento), identificar o paciente pela pulseira e orientar sobre a cirurgia, a anestesia e o <b>jejum</b>.',
          'Confirmar reserva de sangue se indicada, dar banho com <b>clorexidina degermante</b> até 2 h antes, fazer higiene oral com clorexidina aquosa e verificar sinais vitais.',
          'Orientar a esvaziar a bexiga, retirar próteses/adornos/roupas íntimas, vestir a camisola e conferir a pulseira de identificação.'
        ]},
        {n:3,h:'Conferência e encaminhamento',items:[
          'Checar se o prontuário está completo (exames de imagem, pedidos, <b>termos de consentimento assinados</b>) e preencher o Check List Pré-Operatório.',
          'Transportar o paciente caminhando (independentes), em cadeira de rodas (dependência parcial) ou maca (dependente).'
        ]}
      ],
      pool:[
        {q:'O banho pré-operatório deve ser feito com clorexidina degermante até:',
         o:['2 horas antes da cirurgia','No momento da cirurgia','1 semana antes','Não é necessário'],a:0,d:2},
        {q:'Antes de encaminhar o paciente ao Centro Cirúrgico, deve-se orientá-lo a retirar:',
         o:['Próteses, adornos e roupas íntimas','Apenas os sapatos','Somente os óculos','Nada'],a:0,d:1},
        {q:'O documento que garante que o paciente está pronto para a cirurgia é o:',
         o:['Check List Pré-Operatório','Boletim de alta','Receituário','Atestado'],a:0,d:2},
        {q:'Faz parte da conferência do prontuário no pré-operatório:',
         o:['O termo de consentimento assinado e exames de imagem','Apenas o nome do paciente','A conta hospitalar','A escala da equipe'],a:0,d:2},
        {q:'Um paciente dependente deve ser transportado ao Centro Cirúrgico:',
         o:['Em maca','Caminhando','De bicicleta','Sozinho'],a:0,d:1}
      ]
    },

    {
      id:'pop-cc-02', code:'POP-ENF-CC-02', version:'1.2', emission:'27/08/2021',
      title:'Montagem da sala cirúrgica',
      executantes:'Circulante e instrumentador cirúrgico',
      origem:'Centro Cirúrgico',
      setores:['cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar a organização e o preparo da sala cirúrgica antes da chegada do paciente, garantindo materiais, medicamentos e equipamentos adequados e a técnica asséptica.'
        ]},
        {n:2,h:'Verificações iniciais',items:[
          'Higienizar as mãos, repor o material do lavabo, conferir o mapa de cirurgia (nome, horário, equipe) e as condições de limpeza da sala.',
          'Testar a <b>rede de gases</b> (oxigênio, ar comprimido, vácuo), a mesa cirúrgica e os equipamentos (eletrocautério, foco, monitor, aspirador).'
        ]},
        {n:3,h:'Abastecimento',items:[
          'Montar o carro de anestesia (trocar traqueias a cada cirurgia) e disponibilizar cânulas, laringoscópio e material de acesso venoso.',
          'Retirar do CME os artigos processados, <b>checar a integridade das embalagens e a validade do processamento</b> e deixar os formulários de contagem na sala.'
        ]}
      ],
      pool:[
        {q:'A rede de gases a ser testada na montagem da sala inclui:',
         o:['Oxigênio, ar comprimido e vácuo','Apenas oxigênio','Gás de cozinha','Nitrogênio líquido'],a:0,d:2},
        {q:'As traqueias do carro de anestesia devem ser trocadas preferencialmente:',
         o:['A cada cirurgia realizada','Uma vez por mês','Nunca','A cada semana'],a:0,d:3},
        {q:'Ao retirar artigos processados do CME, é obrigatório checar:',
         o:['A integridade das embalagens e a validade do processamento','Apenas a cor','O peso','A marca'],a:0,d:2},
        {q:'A montagem da sala cirúrgica deve ser feita:',
         o:['Antes da chegada do paciente','Durante a cirurgia','Após a cirurgia','Com o paciente na mesa'],a:0,d:1},
        {q:'Qual equipamento deve ter o funcionamento testado na montagem?',
         o:['Eletrocautério, foco de luz e monitor','Apenas as cadeiras','O telefone','O computador da recepção'],a:0,d:1}
      ]
    },

    {
      id:'pop-cc-03', code:'POP-ENF-CC-03', version:'1.2', emission:'27/08/2021',
      title:'Admissão do paciente no centro cirúrgico',
      executantes:'Enfermeiro e técnico de enfermagem',
      origem:'Centro Cirúrgico',
      setores:['cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Prestar assistência humanizada na admissão, reduzir os riscos inerentes ao ato anestésico-cirúrgico e garantir a identificação correta do paciente.'
        ]},
        {n:2,h:'Recepção e conferência',items:[
          'Receber o paciente na área de transferência, confirmar nome e data de nascimento pela pulseira e conferir com o mapa de cirurgia e o prontuário.',
          'Solicitar que o paciente confirme o procedimento, o <b>sítio cirúrgico e a lateralidade</b>; colocar gorro cobrindo o couro cabeludo e propés.'
        ]},
        {n:3,h:'Validação pré-operatória',items:[
          'Confirmar jejum, retirada de próteses/adornos/roupa íntima, alergias e banho com antisséptico.',
          'Conferir se o prontuário está completo e a assinatura do <b>Termo de Consentimento Livre e Esclarecido (TCLE)</b> cirúrgico e anestésico antes de encaminhar à sala.'
        ]}
      ],
      pool:[
        {q:'Na admissão ao centro cirúrgico, o paciente deve confirmar:',
         o:['O procedimento, o sítio cirúrgico e a lateralidade','Apenas o nome','O valor da cirurgia','O nome do cirurgião'],a:0,d:2},
        {q:'Antes de encaminhar o paciente à sala, é indispensável conferir a assinatura do:',
         o:['Termo de Consentimento Livre e Esclarecido (TCLE)','Cartão SUS','Atestado médico','Comprovante de residência'],a:0,d:2},
        {q:'Na admissão, coloca-se no paciente:',
         o:['Gorro cobrindo o couro cabeludo e propés','Apenas máscara','Avental estéril','Luvas estéreis'],a:0,d:1},
        {q:'A identificação do paciente é confirmada por:',
         o:['Nome e data de nascimento na pulseira, conferindo com mapa e prontuário','Aparência física','Número da sala','Senha da recepção'],a:0,d:1},
        {q:'Se o paciente estiver sem a pulseira de identificação, deve-se:',
         o:['Solicitar ao registro uma nova pulseira','Seguir sem identificação','Cancelar a cirurgia','Usar o nome de memória'],a:0,d:2}
      ]
    },

    {
      id:'pop-cc-04', code:'POP-ENF-CC-04', version:'1.2', emission:'23/04/2020',
      title:'Admissão do paciente na sala de cirurgia',
      executantes:'Enfermeiro, técnico de enfermagem, anestesista e médico',
      origem:'Sala de Cirurgia',
      setores:['cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Acolher o paciente na sala de cirurgia de forma humanizada, reduzir sua ansiedade, obter informações relevantes ao ato cirúrgico e preservar sua intimidade.'
        ]},
        {n:2,h:'Execução',items:[
          'Higienizar as mãos, apresentar-se, confirmar nome e data de nascimento pela pulseira e conferir com o prontuário.',
          'Confirmar os procedimentos pré-operatórios (jejum, tricotomia, retirada de próteses/adornos, alergias) e o procedimento/<b>lateralidade</b>.'
        ]},
        {n:3,h:'Posicionamento e registro',items:[
          'Posicionar o paciente em <b>decúbito dorsal</b> na mesa cirúrgica, de modo confortável e seguro, cobrindo-o conforme a necessidade.',
          'Registrar no prontuário eletrônico a entrada do paciente na sala de cirurgia.'
        ]}
      ],
      pool:[
        {q:'O paciente é inicialmente posicionado na mesa cirúrgica em:',
         o:['Decúbito dorsal','Decúbito ventral','Posição sentada','Posição de Trendelenburg sempre'],a:0,d:1},
        {q:'A confirmação do procedimento e da lateralidade na sala de cirurgia:',
         o:['Repete a checagem feita na admissão ao centro cirúrgico','É dispensável','Cabe só ao cirurgião','É feita após a incisão'],a:0,d:2},
        {q:'Antes de iniciar, confirma-se com o paciente, entre outros:',
         o:['Jejum, tricotomia, retirada de próteses e alergias','Apenas a idade','O plano de saúde','O endereço'],a:0,d:1},
        {q:'A entrada do paciente na sala de cirurgia deve ser:',
         o:['Registrada no prontuário eletrônico','Apenas verbalizada','Anotada em papel avulso','Não registrada'],a:0,d:2},
        {q:'O acolhimento na sala de cirurgia tem como objetivo, entre outros:',
         o:['Reduzir a ansiedade e preservar a intimidade do paciente','Acelerar a anestesia','Dispensar o anestesista','Evitar conversa com o paciente'],a:0,d:1}
      ]
    },

    {
      id:'pop-cc-05', code:'POP-ENF-CC-05', version:'1.2', emission:'24/04/2020',
      title:'Assistência de enfermagem no intraoperatório',
      executantes:'Técnico de enfermagem e enfermeiro',
      origem:'Centro Cirúrgico',
      setores:['cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O período intraoperatório vai da transferência do paciente para a mesa cirúrgica até a reversão da anestesia na SRPA.',
          'Prestar assistência segura e eficaz e auxiliar a equipe cirúrgica, instrumentadora e anestesista durante todo o ato.'
        ]},
        {n:2,h:'Preparo e monitorização',items:[
          'Acomodar o paciente em decúbito dorsal e posição anatômica, apoiando os MMSS em braçadeiras com faixa de segurança; instalar oxímetro, monitor cardíaco e PNI.',
          'Aplicar o <b>check-list de cirurgia segura</b> (etapa <i>check in</i> antes da indução), auxiliar na indução/intubação e manter o paciente aquecido para evitar hipotermia.'
        ]},
        {n:3,h:'Durante e após a cirurgia',items:[
          'Aplicar a placa do <b>bisturi elétrico</b> em área de grande massa muscular, longe de proeminências ósseas; realizar a etapa <i>timeout</i> antes da incisão.',
          'Ao final, executar a etapa <i>check out</i>, auxiliar nos curativos e drenos, transferir o paciente para a maca cuidando de sondas/infusões e encaminhá-lo à SRPA ou UTI.'
        ]}
      ],
      pool:[
        {q:'O check-list de cirurgia segura possui as etapas:',
         o:['Check in, timeout e check out','Apenas check in','Entrada e saída','Pré e pós'],a:0,d:3},
        {q:'A etapa "timeout" do check-list de cirurgia segura é realizada:',
         o:['Antes da incisão cirúrgica','Após a alta','Na recepção','Depois da cirurgia'],a:0,d:3},
        {q:'A placa do bisturi elétrico deve ser colocada:',
         o:['Em área de grande massa muscular, longe de proeminências ósseas','Sobre uma articulação','No couro cabeludo','Em qualquer lugar'],a:0,d:3},
        {q:'Para evitar a hipotermia no trans e pós-operatório, deve-se:',
         o:['Manter o paciente aquecido (manta térmica/cobertor)','Resfriar a sala ao máximo','Não cobrir o paciente','Usar gelo'],a:0,d:2},
        {q:'Ao transferir o paciente da mesa para a maca, deve-se cuidar para:',
         o:['Não tracionar infusões, curativos, sondas e drenos','Fazer o mais rápido possível','Remover todos os drenos','Soltar as grades'],a:0,d:2}
      ]
    },

    {
      id:'pop-cc-06', code:'POP-ENF-CC-06', version:'1.2', emission:'14/04/2020',
      title:'Desmontagem da sala cirúrgica',
      executantes:'Equipe de enfermagem e instrumentador cirúrgico',
      origem:'Sala Cirúrgica',
      setores:['cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Retirar materiais e equipamentos após o término do procedimento e a saída do paciente, deixando a sala em condições de limpeza concorrente para o próximo paciente.'
        ]},
        {n:2,h:'Recolhimento e contagem',items:[
          'Higienizar as mãos, calçar luvas e recolher materiais não utilizados; <b>antes de descartar perfurocortantes, confirmar a contagem com a instrumentadora</b> e registrar.',
          'Recolher os instrumentais (retirar excesso de sujidade, manter as pinças abertas, conferir o número de peças) e colar o indicador químico na folha de comprovantes.'
        ]},
        {n:3,h:'Encaminhamento e limpeza',items:[
          'Desmontar equipamentos retirando o excesso de sujidade antes de encaminhá-los ao CME; desprezar descartáveis e os resíduos do vidro de aspiração no expurgo.',
          'Higienizar equipamentos e mobiliários com <b>optigerm</b> e solicitar ao Serviço de Zeladoria a limpeza da sala.'
        ]}
      ],
      pool:[
        {q:'Antes de descartar os materiais perfurocortantes, deve-se:',
         o:['Confirmar a contagem com a instrumentadora e registrar','Descartá-los imediatamente','Lavá-los','Guardá-los na caixa'],a:0,d:3},
        {q:'Os instrumentais cirúrgicos devem ser acondicionados nas caixas:',
         o:['Com as pinças abertas (exceto fixadoras de campo)','Totalmente fechados','Misturados ao lixo','Sem conferência'],a:0,d:2},
        {q:'Antes de encaminhar os equipamentos ao CME, deve-se:',
         o:['Retirar o excesso de sujidade','Esterilizá-los na sala','Pintá-los','Descartá-los'],a:0,d:2},
        {q:'A higienização dos equipamentos e mobiliários é feita com:',
         o:['Solução de optigerm','Água sanitária pura','Apenas água','Álcool em gel'],a:0,d:1},
        {q:'A desmontagem da sala tem como finalidade:',
         o:['Deixar a sala pronta para a limpeza concorrente e o próximo paciente','Guardar o paciente','Acelerar a anestesia','Encerrar o expediente'],a:0,d:1}
      ]
    },

    {
      id:'pop-cc-07', code:'POP-ENF-CC-07', version:'1.2', emission:'27/04/2020',
      title:'Assistência na sala de recuperação pós-anestésica (SRPA)',
      executantes:'Técnico de enfermagem, enfermeiro e anestesiologista',
      origem:'Sala de Recuperação Pós-Anestésica',
      setores:['cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A SRPA recebe o paciente no pós-operatório imediato até que recupere a consciência, os movimentos e tenha sinais vitais estáveis.',
          'A evolução é avaliada pelo <b>Índice de Aldrete & Kroulik</b> (atividade muscular, respiração, circulação, consciência e cor da pele), com escore de 0 a 10.'
        ]},
        {n:2,h:'Monitorização',items:[
          'Conferir a identificação, acomodar o paciente sem comprimir drenos/sondas, manter as <b>grades elevadas</b> e monitorar FC, PA, saturação, temperatura, consciência e dor.',
          'Manter vias aéreas permeáveis (O₂ para manter oximetria > 92% se indicado) e avaliar a <b>dor como 5º sinal vital</b>.'
        ]},
        {n:3,h:'Registro e alta',items:[
          'Registrar os sinais vitais a cada 15 min na 1ª hora, a cada 30 min na 2ª hora e a cada 1 h a partir da 3ª; atentar a sinais de choque/hemorragia (débito urinário < 30 ml/h).',
          'Aplicar o Índice de Aldrete: escore de <b>8 a 10</b> indica alta da SRPA, que é atribuição <b>exclusiva do anestesiologista</b>.'
        ]}
      ],
      pool:[
        {q:'O índice utilizado para avaliar o paciente na SRPA é o:',
         o:['Aldrete & Kroulik','Glasgow','Apgar','Braden'],a:0,d:3},
        {q:'O escore de Aldrete indicado para alta da SRPA é de:',
         o:['8 a 10','0 a 2','3 a 5','Qualquer valor'],a:0,d:3},
        {q:'A indicação de alta da SRPA é atribuição exclusiva do:',
         o:['Médico anestesiologista','Técnico de enfermagem','Recepcionista','Instrumentador'],a:0,d:2},
        {q:'Na primeira hora na SRPA, os sinais vitais são registrados a cada:',
         o:['15 minutos','2 horas','5 minutos','1 hora'],a:0,d:3},
        {q:'É um sinal precoce de choque/hemorragia a ser observado na SRPA:',
         o:['Débito urinário menor que 30 ml/h','Pressão arterial elevada','Pele quente e corada','Sonolência leve'],a:0,d:3}
      ]
    },

    {
      id:'pop-cc-08', code:'POP-ENF-CC-08', version:'1.2', emission:'13/04/2020',
      title:'Encaminhamento de amostras biológicas e peças anatômicas do centro cirúrgico',
      executantes:'Circulante e enfermeiro',
      origem:'Centro Cirúrgico',
      setores:['cc'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Garantir a adequada conservação e o correto encaminhamento de amostras biológicas e peças anatômicas (excisões, ressecções, amputações) aos laboratórios.'
        ]},
        {n:2,h:'Identificação e acondicionamento',items:[
          'Preencher a etiqueta com nome completo, prontuário, material e laboratório de destino; receber a peça do cirurgião e identificá-la <b>imediatamente</b>.',
          'Lacrar o recipiente e colar a etiqueta <b>no corpo do frasco, nunca na tampa</b>, acondicionando em segunda embalagem plástica.'
        ]},
        {n:3,h:'Meio de conservação e protocolo',items:[
          'Adicionar <b>formol</b> nas amostras para análise histológica (Anatomia Patológica) ou <b>soro fisiológico</b> nas do Laboratório Central — exceto lavados e líquidos.',
          'Conferir a requisição (identificação, natureza, diagnóstico, assinatura), registrar no protocolo do CC e obter assinatura no recebimento.'
        ]}
      ],
      pool:[
        {q:'A etiqueta de identificação da amostra deve ser colada:',
         o:['No corpo do frasco, nunca na tampa','Na tampa do frasco','Na luva','No prontuário'],a:0,d:2},
        {q:'Para análise histológica (Anatomia Patológica), a peça é conservada em:',
         o:['Formol','Soro fisiológico','Água','Álcool 70%'],a:0,d:3},
        {q:'A peça cirúrgica recebida do cirurgião deve ser identificada:',
         o:['Imediatamente após o recebimento','No fim do dia','Apenas no laboratório','Quando houver tempo'],a:0,d:2},
        {q:'Algumas amostras encaminhadas ao Laboratório Central são conservadas em:',
         o:['Soro fisiológico','Formol 1:10','Vinagre','Gelo seco'],a:0,d:3},
        {q:'O encaminhamento da amostra deve incluir a conferência da:',
         o:['Requisição de exame preenchida, datada e assinada','Conta hospitalar','Escala de plantão','Agenda cirúrgica'],a:0,d:2}
      ]
    },

    {
      id:'pop-cc-09', code:'POP-ENF-CC-09', version:'1.1', emission:'09/10/2017',
      title:'Limpeza e controle de temperatura da geladeira do centro cirúrgico',
      executantes:'Equipe de enfermagem',
      origem:'Postos de Enfermagem',
      setores:['cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Promover a higienização da geladeira e o controle da temperatura, assegurando a conservação correta de medicamentos e imunobiológicos.'
        ]},
        {n:2,h:'Limpeza',items:[
          'Transferir os medicamentos para outra geladeira/caixa térmica (mantendo +2 a +8 °C), desligar e descongelar sem usar objetos pontiagudos, e <b>não mexer no termostato</b>.',
          'Limpar com pano umedecido em água e detergente neutro (sem jogar água no interior); a limpeza é <b>mensal</b> ou quando houver sujidade/gelo > 0,5 cm.'
        ]},
        {n:3,h:'Controle de temperatura',items:[
          'Manter a geladeira entre <b>+2 °C e +8 °C</b> (ideal +5 °C), exclusiva para medicamentos/imunobiológicos, sem armazenar nada na porta.',
          'Ler e registrar a temperatura (máxima, mínima e atual) <b>3 vezes ao dia</b> (7h, 13h e 19h); em alteração, comunicar o responsável e a manutenção.'
        ]}
      ],
      pool:[
        {q:'A temperatura ideal de conservação na geladeira de medicamentos é:',
         o:['Entre +2 °C e +8 °C','Abaixo de 0 °C','Acima de +15 °C','Temperatura ambiente'],a:0,d:2},
        {q:'A leitura e o registro da temperatura da geladeira devem ser feitos:',
         o:['3 vezes ao dia (início, meio e fim do plantão)','Uma vez por semana','Apenas quando houver problema','De hora em hora'],a:0,d:2},
        {q:'Durante a limpeza da geladeira, o termostato:',
         o:['Não deve ser manipulado','Deve ser zerado','Deve ser desligado da parede','Deve ser trocado'],a:0,d:2},
        {q:'A geladeira de medicamentos deve ser de uso:',
         o:['Exclusivo de medicamentos/imunobiológicos','Compartilhado com alimentos','Para bebidas da equipe','Livre'],a:0,d:1},
        {q:'A limpeza da geladeira deve ser realizada:',
         o:['Mensalmente ou quando houver sujidade/gelo > 0,5 cm','Diariamente','Anualmente','Nunca'],a:0,d:2}
      ]
    },

    {
      id:'pop-cc-10', code:'POP-ENF-CC-10', version:'1.1', emission:'29/09/2021',
      title:'Paramentação cirúrgica',
      executantes:'Médico cirurgião e instrumentador cirúrgico',
      origem:'Centro Cirúrgico',
      setores:['cc'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Promover barreira contra a invasão de microrganismos no sítio cirúrgico do paciente e proteger os profissionais contra fluidos corpóreos.'
        ]},
        {n:2,h:'Materiais',items:[
          'Roupa privativa do centro cirúrgico, gorro/touca, máscara, óculos de proteção, propé/sapato fechado, avental estéril descartável, luva estéril e compressa estéril.'
        ]},
        {n:3,h:'Sequência',items:[
          'Entrar na sala já com a roupa privativa, propé, gorro e máscara; colocar a <b>máscara e os óculos de proteção antes</b> de realizar a degermação das mãos.',
          'Após a degermação, paramentar-se com o avental estéril e as luvas estéreis mantendo a técnica asséptica.'
        ]}
      ],
      pool:[
        {q:'A paramentação cirúrgica tem como objetivo principal:',
         o:['Formar barreira contra microrganismos e proteger contra fluidos','Aquecer o profissional','Identificar a equipe','Acelerar a cirurgia'],a:0,d:1},
        {q:'A máscara e os óculos de proteção devem ser colocados:',
         o:['Antes da degermação das mãos','Depois de calçar as luvas estéreis','Após a cirurgia','Apenas se houver sangue'],a:0,d:2},
        {q:'Para entrar na sala de cirurgia, o profissional deve estar com:',
         o:['Roupa privativa, propé, gorro e máscara','Roupa comum','Apenas o jaleco','Roupa de rua'],a:0,d:1},
        {q:'O avental e as luvas estéreis são colocados:',
         o:['Após a degermação das mãos','Antes de entrar na sala','Sobre a roupa de rua','Sem degermação'],a:0,d:2},
        {q:'A paramentação cirúrgica promove segurança:',
         o:['Ao paciente e à equipe cirúrgica','Apenas ao paciente','Apenas ao cirurgião','Somente à instituição'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-01', code:'POP-HD-01', version:'1.2', emission:'22/08/2024',
      title:'Recepção de pacientes no Hospital Dia',
      executantes:'Profissionais de enfermagem',
      origem:'Hospital Dia',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Oferecer assistência intermediária entre a internação e o atendimento ambulatorial para procedimentos clínicos, cirúrgicos, diagnósticos e terapêuticos, com permanência máxima de <b>12 horas</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Encaminhar o paciente ao leito, colocar a pulseira conferindo nome e data de nascimento, verificar o termo de responsabilidade, realizar anamnese e registrar sinais vitais.',
          'Solicitar avaliação médica e prescrição; administrar a medicação (EV pelo POP-ENF-21, SC pelo POP-ENF-24, port-a-cath pelo POP-ENF-34) e observar reações.'
        ]},
        {n:3,h:'Alta',items:[
          'Registrar a evolução de enfermagem e <b>liberar o paciente somente após reavaliação médica</b>.',
          'Atentar para parâmetros elevados de pressão arterial e glicemia capilar antes de procedimentos invasivos.'
        ]}
      ],
      pool:[
        {q:'O período máximo de permanência do paciente no Hospital Dia é de:',
         o:['12 horas','24 horas','48 horas','1 semana'],a:0,d:1},
        {q:'A liberação do paciente do Hospital Dia ocorre:',
         o:['Somente após reavaliação médica','A pedido do paciente','Após 1 hora','Pelo técnico de enfermagem'],a:0,d:2},
        {q:'Antes de procedimentos invasivos, deve-se atentar especialmente para:',
         o:['Parâmetros elevados de pressão arterial e glicemia capilar','A cor da roupa','O horário do almoço','O peso do acompanhante'],a:0,d:2},
        {q:'Para administração de medicação EV no HD, segue-se o:',
         o:['POP-ENF-21 (punção venosa periférica)','POP-ENF-24 (subcutânea)','Nenhum protocolo','POP de higiene oral'],a:0,d:2},
        {q:'Ao receber o paciente, a pulseira de identificação é conferida com:',
         o:['Nome completo e data de nascimento','Apenas o sobrenome','O número do leito','A senha'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-02', code:'POP-HD-02', version:'1.2', emission:'22/08/2024',
      title:'Admissão de pacientes no Hospital Dia',
      executantes:'Servidores do registro, enfermagem e médico',
      origem:'Hospital Dia',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Padronizar a admissão no Hospital Dia, quando há necessidade de assistência multiprofissional por um período de internação de <b>12 horas</b>.'
        ]},
        {n:2,h:'Admissão',items:[
          'Conferir se a unidade está higienizada e arrumada, colocar a pulseira/etiqueta conferindo nome e data de nascimento e preencher o termo de responsabilidade do HD.',
          'Solicitar avaliação médica, aprazar a prescrição, acompanhar o paciente à sala de medicação/procedimento e administrar conforme prescrição.'
        ]},
        {n:3,h:'Avaliação de enfermagem',items:[
          'Realizar anamnese (histórico de saúde/enfermagem) e aplicar a <b>escala de Morse</b> para risco de queda.',
          'Executar as ações de prevenção dos protocolos de Segurança do Paciente (NUSEP/HNR), notificar incidentes e registrar as atividades.'
        ]}
      ],
      pool:[
        {q:'O instrumento utilizado na admissão para avaliar o risco de queda é a:',
         o:['Escala de Morse','Escala de Glasgow','Escala de Aldrete','Escala de Braden'],a:0,d:2},
        {q:'O período de internação previsto no regime de Hospital Dia é de:',
         o:['12 horas','3 dias','1 mês','2 horas'],a:0,d:1},
        {q:'Na admissão, o documento específico a ser preenchido é o:',
         o:['Termo de responsabilidade do HD','Atestado de óbito','Receituário azul','Termo de alta'],a:0,d:2},
        {q:'Os incidentes relacionados à assistência à saúde devem ser:',
         o:['Notificados','Ignorados','Resolvidos verbalmente','Anotados só no fim do mês'],a:0,d:2},
        {q:'Antes de receber o paciente, a unidade deve estar:',
         o:['Higienizada e arrumada','Com o leito anterior por limpar','Trancada','Sem materiais'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-03', code:'POP-HD-03', version:'1.1', emission:'28/08/2024',
      title:'Fluxo de atendimento da polissonografia',
      executantes:'Enfermagem do HD, internação, assistente social, nutrição e médicos',
      origem:'SISREG',
      setores:['ambulatorio'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar o atendimento aos pacientes externos (de outras cidades de SC), internados via Hospital Dia para realização de <b>polissonografia</b> no HNR.'
        ]},
        {n:2,h:'Fluxo de internação',items:[
          'O paciente chega à recepção com o agendamento, faz as refeições nas dependências do hospital e realiza a internação no HD a partir das 13h; a admissão deve ocorrer <b>antes das 20h</b>.',
          'Verificar sinais vitais, fazer a nota de admissão no PEP, comunicar a enfermeira e a nutrição (dieta branda).'
        ]},
        {n:3,h:'Exame e alta',items:[
          'O exame termina por volta das 5:45h; o médico avalia e prescreve a alta. Toda intercorrência é registrada no PEP e o médico de plantão é acionado.',
          'Orientar que o <b>resultado fica disponível em 45 dias</b>, a ser buscado no HD no período diurno (8h às 18h).'
        ]}
      ],
      pool:[
        {q:'A internação do paciente da polissonografia deve ocorrer:',
         o:['Antes das 20h','Após a meia-noite','A qualquer hora','Só pela manhã'],a:0,d:2},
        {q:'O resultado da polissonografia fica disponível em:',
         o:['45 dias','24 horas','1 semana','6 meses'],a:0,d:2},
        {q:'A dieta liberada pela nutrição para esses pacientes é:',
         o:['Branda','Apenas líquidos','Zero (jejum total)','Hipersódica'],a:0,d:1},
        {q:'Toda intercorrência durante o exame deve ser:',
         o:['Registrada no prontuário eletrônico e o médico de plantão acionado','Ignorada','Anotada em papel','Resolvida pelo próprio paciente'],a:0,d:2},
        {q:'Os pacientes da polissonografia são agendados via:',
         o:['SISREG','Telefone pessoal','Balcão sem registro','E-mail'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-04', code:'POP-HD-04', version:'1.5', emission:'21/02/2022',
      title:'Biópsia hepática por punção percutânea',
      executantes:'Médico, enfermeiro, técnico/auxiliar de enfermagem e transporte',
      origem:'Setor Hospital Dia (HD)',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Prestar assistência durante a biópsia percutânea hepática, com retirada de fragmentos do fígado por uma pistola automática; o local da punção é marcado previamente por ultrassonografia.',
          'Exige <b>jejum de 6 horas</b> e suspensão de anticoagulantes/antiagregantes por até 7 dias antes, conforme avaliação médica.'
        ]},
        {n:2,h:'Antes e durante',items:[
          'Confirmar identidade e a assinatura do termo de consentimento, puncionar acesso venoso periférico calibroso e prescrever controle da dor.',
          'A equipe de enfermagem assessora o médico (cirurgião/gastroenterologista) que realiza a biópsia.'
        ]},
        {n:3,h:'Após o procedimento',items:[
          'Manter o paciente monitorado por <b>4 horas</b>: curativo compressivo, decúbito lateral direito por 30 min, repouso absoluto por 2 h; controle de PA e FC (15/15 min na 1ª h, 30/30 min na 2ª h, 1/1 h na 3ª-4ª h).',
          'A <b>principal complicação é o sangramento</b>; identificar a amostra, conservá-la em formol e encaminhá-la ao IAP. Alta prevista para as 13h, formalizada pelo médico responsável.'
        ]}
      ],
      pool:[
        {q:'O jejum exigido antes da biópsia hepática percutânea é de:',
         o:['6 horas','12 horas','2 horas','Não há jejum'],a:0,d:2},
        {q:'A principal complicação da biópsia hepática é:',
         o:['Sangramento','Febre','Tosse','Cefaleia'],a:0,d:3},
        {q:'Após a biópsia, o paciente é mantido em decúbito lateral direito por:',
         o:['30 minutos','5 minutos','3 horas','Não há essa orientação'],a:0,d:3},
        {q:'O tempo mínimo de monitorização da enfermagem após a biópsia é de:',
         o:['4 horas','30 minutos','24 horas','1 hora'],a:0,d:2},
        {q:'Anticoagulantes e antiagregantes plaquetários, em geral, devem ser suspensos antes da biópsia por até:',
         o:['7 dias','1 dia','1 hora','1 mês'],a:0,d:3}
      ]
    },

    {
      id:'pop-hd-05', code:'POP-HD-05', version:'1.2', emission:'21/02/2022',
      title:'Punção lombar para coleta de líquor',
      executantes:'Médico, enfermeiro, técnico/auxiliar de enfermagem e transporte',
      origem:'Hospital Dia (HD)',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Prestar assistência durante a punção lombar para coleta de líquor (LCR) no canal central da medula espinhal, com anestesia local, para diagnóstico de doenças do Sistema Nervoso Central.'
        ]},
        {n:2,h:'Durante o procedimento',items:[
          'Conferir a assinatura do termo de consentimento e verificar sinais vitais; posicionar o paciente em <b>decúbito lateral, em posição fetal</b> (queixo sobre o tórax, joelhos flexionados), imóvel.',
          'A enfermagem assessora o médico na punção; coletar o líquor suficiente nos frascos estéreis e realizar curativo compressivo no local.'
        ]},
        {n:3,h:'Após e complicações',items:[
          'Manter o paciente em <b>repouso (deitado) por 2 horas</b> sob monitorização; a alta é a critério médico.',
          'A <b>principal complicação é a cefaleia pós-punção</b>; identificar e protocolar as amostras (laboratório local e LACEN) e entregar as orientações pós-punção.'
        ]}
      ],
      pool:[
        {q:'Durante a punção lombar, o paciente é posicionado em:',
         o:['Decúbito lateral, em posição fetal','Decúbito ventral','Posição sentada com pernas estendidas','Decúbito dorsal'],a:0,d:2},
        {q:'A principal complicação da punção lombar é:',
         o:['Cefaleia pós-punção','Sangramento maciço','Infecção urinária','Hipoglicemia'],a:0,d:3},
        {q:'Após a punção lombar, o paciente deve permanecer em repouso (deitado) por:',
         o:['2 horas','10 minutos','24 horas','Não há repouso'],a:0,d:2},
        {q:'O líquido coletado na punção lombar é o:',
         o:['Líquor (LCR)','Sangue arterial','Urina','Bile'],a:0,d:1},
        {q:'É essencial que o paciente, durante a punção, permaneça:',
         o:['Imóvel','Andando','Conversando e se mexendo','Em pé'],a:0,d:2}
      ]
    },

    {
      id:'pop-hd-06', code:'POP-HD-06', version:'1.2', emission:'22/08/2024',
      title:'Cirurgia dermatológica no Hospital Dia',
      executantes:'Profissionais médicos e de enfermagem',
      origem:'Hospital Dia',
      setores:['ambulatorio'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Oferecer assistência para procedimentos cirúrgicos em Dermatologia, para pacientes com suspeita de <b>Leishmaniose cutâneo-mucosa</b>, com permanência máxima de 12 horas.'
        ]},
        {n:2,h:'Execução',items:[
          'Confirmar o procedimento após consulta médica, solicitar a internação no HD, colocar a pulseira e orientar a troca de roupa (camisola, touca) e retirada de adornos.',
          'Encaminhar o paciente ao <b>centro cirúrgico</b> (caminhando ou em cadeira de rodas), buscá-lo após a liberação e avaliar o curativo realizado.'
        ]},
        {n:3,h:'Encaminhamento e alta',items:[
          'Identificar a amostra (nome, data de nascimento e data do procedimento) e encaminhá-la ao <b>IAP</b>, protocolando o exame.',
          'Encaminhar o agendamento de retorno no ambulatório de Leishmaniose pelo NIR e solicitar a alta ao registro.'
        ]}
      ],
      pool:[
        {q:'A cirurgia dermatológica no HD destina-se principalmente a pacientes com suspeita de:',
         o:['Leishmaniose cutâneo-mucosa','Pneumonia','Apendicite','Catarata'],a:0,d:2},
        {q:'Para realizar o procedimento, o paciente é encaminhado ao:',
         o:['Centro cirúrgico','Laboratório','Raio-X','Refeitório'],a:0,d:1},
        {q:'A amostra coletada é encaminhada ao:',
         o:['IAP (Instituto de Anatomia Patológica)','Banco de sangue','Almoxarifado','Setor de nutrição'],a:0,d:2},
        {q:'Antes de encaminhar ao CC, o paciente deve:',
         o:['Trocar de roupa (camisola, touca) e retirar adornos','Permanecer com roupa de rua','Tomar café da manhã reforçado','Receber alta'],a:0,d:1},
        {q:'O agendamento de retorno no ambulatório de Leishmaniose é feito pelo:',
         o:['NIR','Próprio paciente','Acompanhante','Serviço de transporte'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-07', code:'POP-HD-07', version:'1.0', emission:'14/09/2022',
      title:'Administração de ganciclovir',
      executantes:'Técnicos de enfermagem, enfermeiros e farmacêuticos',
      origem:'Farmácia, unidades de internação, UTI e Hospital Dia',
      setores:['ambulatorio','assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Padronizar a administração endovenosa segura da solução de ganciclovir no tratamento de pacientes imunodeprimidos.'
        ]},
        {n:2,h:'Cuidados de infusão',items:[
          'A solução já vem pronta da farmácia; <b>não misturar com outro medicamento</b> na mesma infusão e só infundir em temperatura ambiente, com aspecto homogêneo, sem grânulos ou precipitados.',
          'Via endovenosa, infundir em período <b>mínimo de 1 hora</b> (a infusão rápida aumenta a toxicidade).'
        ]},
        {n:3,h:'Execução e reações',items:[
          'Confirmar identidade, puncionar acesso venoso calibroso, identificar a bolsa, fazer a antissepsia e registrar dose e horários de início/término.',
          'Em caso de reação adversa, <b>diminuir a velocidade ou interromper</b> a infusão e comunicar o médico.'
        ]}
      ],
      pool:[
        {q:'O ganciclovir deve ser infundido por via endovenosa em um período mínimo de:',
         o:['1 hora','5 minutos','15 minutos','12 horas'],a:0,d:2},
        {q:'Na mesma infusão, a solução de ganciclovir:',
         o:['Não deve ser misturada com outro medicamento','Pode ser misturada com qualquer soro','Deve ser misturada com glicose','Deve receber outro antibiótico'],a:0,d:2},
        {q:'A infusão rápida do ganciclovir pode aumentar:',
         o:['A toxicidade do medicamento','A eficácia','A velocidade de cura','O conforto'],a:0,d:3},
        {q:'Diante de uma reação adversa durante a infusão, deve-se:',
         o:['Diminuir a velocidade ou interromper e comunicar o médico','Acelerar a infusão','Ignorar','Aumentar a dose'],a:0,d:2},
        {q:'O ganciclovir destina-se principalmente ao tratamento de pacientes:',
         o:['Imunodeprimidos','Hipertensos','Diabéticos','Gestantes saudáveis'],a:0,d:1}
      ]
    },

    {
      id:'pop-hd-08', code:'POP-HD-08', version:'1.2', emission:'14/10/2022',
      title:'Administração de omalizumabe',
      executantes:'Técnicos de enfermagem, enfermeiros e farmacêuticos',
      origem:'Farmácia, unidades de internação, UTI e Hospital Dia',
      setores:['ambulatorio','assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Aplicação segura do omalizumabe (anticorpo monoclonal anti-IgE) em pacientes com asma alérgica persistente moderada a grave não controlada por corticosteroides inalatórios.'
        ]},
        {n:2,h:'Via e cuidados',items:[
          'Administração <b>exclusivamente subcutânea</b> (seguir o POP-ENF-24) — não administrar por via intravenosa ou intramuscular. Doses superiores a 150 mg são divididas em dois ou mais locais.',
          'Aplicar na região do deltoide ou na coxa, <b>não massagear o local</b>, com supervisão médica e ambiente preparado para eventual anafilaxia.'
        ]},
        {n:3,h:'Execução e armazenamento',items:[
          'Aplicar os <b>13 certos</b> da terapia medicamentosa, verificar sinais vitais e observar reações; se houver crise de asma ou urticária, comunicar a enfermeira.',
          'É termolábil: transportar em temperatura controlada (< 30 °C) e armazenar em refrigerador (<b>2 a 8 °C</b>).'
        ]}
      ],
      pool:[
        {q:'A via de administração do omalizumabe é:',
         o:['Subcutânea exclusivamente','Intravenosa','Intramuscular','Oral'],a:0,d:2},
        {q:'Doses de omalizumabe superiores a 150 mg devem ser:',
         o:['Divididas em dois ou mais locais de aplicação','Aplicadas em um único ponto','Administradas por via oral','Diluídas em soro EV'],a:0,d:3},
        {q:'Após a aplicação subcutânea do omalizumabe, o local:',
         o:['Não deve ser massageado','Deve ser massageado vigorosamente','Deve ser aquecido','Deve ser comprimido por 1 hora'],a:0,d:2},
        {q:'O omalizumabe deve ser armazenado em refrigerador a:',
         o:['2 a 8 °C','-20 °C','Temperatura ambiente','Acima de 30 °C'],a:0,d:2},
        {q:'O omalizumabe é indicado para:',
         o:['Asma alérgica persistente não controlada por corticoide inalatório','Crise aguda de asma','Hipertensão','Diabetes'],a:0,d:3}
      ]
    },

    {
      id:'pop-hd-09', code:'POP-HD-09', version:'1.1', emission:'13/09/2019',
      title:'Infusão de imunoglobulina humana',
      executantes:'Equipe de enfermagem, médicos, farmácia e almoxarifado',
      origem:'Farmácia, unidades de internação, UTI e Hospital Dia',
      setores:['ambulatorio','assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Padronizar a infusão endovenosa da imunoglobulina humana, agente imunizante passivo (concentrado de IgG), usada em imunodeficiência primária, púrpura trombocitopênica idiopática e doença de Kawasaki.'
        ]},
        {n:2,h:'Preparo e infusão',items:[
          'Reconstituir o frasco-ampola em temperatura ambiente, agitando suavemente até dissolução completa (solução incolor e transparente); usar técnica asséptica e administrar em até 2 a 3 horas.',
          'Via endovenosa, infundir <b>lentamente</b>, a uma velocidade de <b>0,01 ml/kg de peso/min</b>; não misturar com outro medicamento.'
        ]},
        {n:3,h:'Cuidados',items:[
          'Em pacientes predispostos à falência renal aguda (insuficiência renal, diabetes, idade > 65 anos), usar a menor concentração e velocidade praticáveis; <b>descartar a solução que sobrar</b>.',
          'Após a administração, aguardar no mínimo <b>6 semanas (preferencialmente 3 meses)</b> antes de aplicar vacinas de vírus atenuado (sarampo, caxumba, rubéola e varicela).'
        ]}
      ],
      pool:[
        {q:'A imunoglobulina humana é administrada por via:',
         o:['Endovenosa, lentamente','Subcutânea rápida','Intramuscular','Oral'],a:0,d:2},
        {q:'Após administrar imunoglobulina humana, deve-se aguardar antes de aplicar vacinas de vírus atenuado:',
         o:['No mínimo 6 semanas (preferencialmente 3 meses)','24 horas','Nenhum tempo','1 ano obrigatório'],a:0,d:3},
        {q:'A solução de imunoglobulina que sobrar da preparação deve ser:',
         o:['Sempre descartada','Guardada para a próxima dose','Compartilhada','Recongelada'],a:0,d:2},
        {q:'A imunoglobulina humana é um agente imunizante:',
         o:['Passivo (concentrado de IgG)','Ativo (vacina)','Antibiótico','Anestésico'],a:0,d:3},
        {q:'O frasco-ampola deve ser reconstituído quando atingir:',
         o:['A temperatura ambiente','Temperatura de congelamento','40 °C','A temperatura corporal'],a:0,d:2}
      ]
    },

    {
      id:'pop-hd-10', code:'POP-HD-10', version:'1.0', emission:'26/09/2024',
      title:'Administração de mepolizumabe (Nucala®)',
      executantes:'Equipe de enfermagem, médicos, farmácia e almoxarifado',
      origem:'Farmácia, unidades de internação, UTI e Hospital Dia',
      setores:['ambulatorio','assistencial','uti'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Padronizar a administração do mepolizumabe, anticorpo monoclonal anti-<b>interleucina 5 (IL-5)</b>, que reduz a produção e sobrevivência dos eosinófilos.',
          'Indicado para síndrome hipereosinofílica e como tratamento de manutenção da asma eosinofílica grave.'
        ]},
        {n:2,h:'Via e armazenamento',items:[
          'Via <b>subcutânea</b> (seguir o POP-ENF-24); armazenar entre 2 °C e 8 °C, não congelar, proteger da luz e manter no cartucho original.',
          'A caneta/seringa preenchida pode ficar fora da geladeira (até 30 °C) por no máximo <b>7 dias</b> e deve ser administrada em até <b>8 horas</b> após a abertura da embalagem.'
        ]},
        {n:3,h:'Cuidados',items:[
          'Contraindicado em hipersensibilidade conhecida à substância; podem ocorrer reações de hipersensibilidade (anafilaxia, urticária, angioedema, broncoespasmo, hipotensão), por vezes tardias.',
          'Em caso de reação de hipersensibilidade, <b>descontinuar o medicamento</b> e solicitar nova avaliação médica.'
        ]}
      ],
      pool:[
        {q:'O mepolizumabe atua bloqueando a:',
         o:['Interleucina 5 (IL-5)','Histamina diretamente','Insulina','Adrenalina'],a:0,d:3},
        {q:'A via de administração do mepolizumabe é:',
         o:['Subcutânea','Intravenosa rápida','Intramuscular profunda','Oral'],a:0,d:2},
        {q:'O mepolizumabe deve ser armazenado:',
         o:['Entre 2 °C e 8 °C, protegido da luz','No congelador','Em temperatura ambiente ao sol','Em água gelada'],a:0,d:2},
        {q:'Após a abertura da embalagem, a caneta/seringa deve ser administrada em até:',
         o:['8 horas','7 dias','1 hora','48 horas'],a:0,d:3},
        {q:'Diante de uma reação de hipersensibilidade ao mepolizumabe, deve-se:',
         o:['Descontinuar o medicamento e reavaliar com o médico','Aumentar a dose','Aplicar mais rápido','Ignorar e continuar'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-01', code:'POP-CME-01', version:'1.1', emission:'29/01/2021',
      title:'Dinâmica e fluxo na CME',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização e Unidades',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar os colaboradores quanto à dinâmica e ao fluxo na CME — os passos que o material percorre para o seu reprocessamento.'
        ]},
        {n:2,h:'Fluxo do material',items:[
          'A unidade despreza o material desconectado e enxaguado em recipiente rígido e fechado; o funcionário da CME o recolhe diariamente (9h, 14h e 17h) e a entrada se dá pela <b>área suja</b>.',
          'Sequência: pré-limpeza (se sujidade visível) → limpeza (manual/ultrassônica/termodesinfectadora) → secagem → desinfecção → empacotamento → <b>esterilização</b> (autoclave/óxido de etileno) → armazenamento.'
        ]},
        {n:3,h:'Transporte e observações',items:[
          'O material limpo é sempre transportado em <b>recipiente rígido fechado exclusivo</b>; a entrega ocorre das 8h às 9h e das 17h às 18h.',
          'O excesso de sujidade deve ser limpo com água destilada logo após o uso, ou aplicar umectante se exceder 30 minutos.'
        ]}
      ],
      pool:[
        {q:'A entrada do material no CME se dá pela:',
         o:['Área suja','Área limpa','Sala de esterilização','Recepção'],a:0,d:2},
        {q:'A sequência correta do reprocessamento começa com a limpeza e termina com:',
         o:['Esterilização e armazenamento','Apenas a secagem','O empacotamento','A desinfecção'],a:0,d:2},
        {q:'O material limpo deve ser transportado em:',
         o:['Recipiente rígido fechado exclusivo','Saco plástico aberto','Bandeja descoberta','Qualquer recipiente'],a:0,d:1},
        {q:'Se o excesso de sujidade exceder 30 minutos no instrumental, deve-se:',
         o:['Aplicar umectante','Esterilizar direto','Descartar o material','Deixar secar'],a:0,d:2},
        {q:'O recolhimento do material pela CME ocorre:',
         o:['Diariamente em horários definidos (9h, 14h e 17h)','Uma vez por semana','Só quando solicitado','A cada hora'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-02', code:'POP-CME-02', version:'1.1', emission:'29/01/2021',
      title:'Classificação dos artigos na CME (Spaulding)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'O sistema de classificação de <b>Spaulding</b> orienta os métodos de reprocessamento de equipamentos, dispositivos e materiais médico-hospitalares.'
        ]},
        {n:2,h:'Categorias',items:[
          '<b>Crítico:</b> penetra pele/mucosas, tecidos ou sistema vascular → <b>esterilização obrigatória</b> (autoclave/óxido de etileno). Ex.: instrumental cirúrgico, implantes, pinças de endoscópio.',
          '<b>Semicrítico:</b> contato com pele não íntegra ou mucosas íntegras → <b>desinfecção de alto nível</b> (ácido peracético). Ex.: circuitos respiratórios, endoscópios, espéculo vaginal.',
          '<b>Não-crítico:</b> contato com pele íntegra → limpeza/desinfecção de baixo nível (hipoclorito ou álcool 70%). Ex.: termômetro axilar, manguito, comadre.'
        ]}
      ],
      pool:[
        {q:'Um instrumental cirúrgico, que penetra tecidos, é classificado como:',
         o:['Crítico','Semicrítico','Não-crítico','Inerte'],a:0,d:2},
        {q:'Artigos críticos exigem:',
         o:['Esterilização obrigatória','Apenas limpeza','Desinfecção de baixo nível','Nenhum processamento'],a:0,d:2},
        {q:'Um circuito respiratório (contato com mucosa íntegra) é classificado como:',
         o:['Semicrítico','Crítico','Não-crítico','Estéril'],a:0,d:3},
        {q:'Um termômetro axilar (contato com pele íntegra) é um artigo:',
         o:['Não-crítico','Crítico','Semicrítico','Cirúrgico'],a:0,d:2},
        {q:'O sistema que orienta a classificação dos artigos é o de:',
         o:['Spaulding','Aldrete','Morse','Glasgow'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-03', code:'POP-CME-03', version:'1.1', emission:'21/01/2021',
      title:'Precauções e EPIs no CME',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar o uso de EPIs para garantir a segurança do profissional exposto a substâncias químicas, gases tóxicos, riscos de perfuração/corte e calor, prevenindo acidentes e doenças ocupacionais.'
        ]},
        {n:2,h:'Cuidados pessoais',items:[
          'Higienizar as mãos, utilizar uniforme privativo e sapato fechado e <b>não usar adornos</b>.'
        ]},
        {n:3,h:'EPIs por atividade',items:[
          '<b>Coleta/expurgo/lavagem:</b> avental impermeável de manga longa, touca, luva grossa de borracha de cano longo, óculos, máscara N-95 e face shield.',
          '<b>Desinfecção química:</b> luva de borracha nitrílica e máscara para vapor químico. <b>Esterilização (autoclave):</b> luva para alta temperatura. <b>Preparo/armazenamento:</b> máscara cirúrgica.'
        ]}
      ],
      pool:[
        {q:'Para a lavagem de materiais no expurgo, utiliza-se entre os EPIs:',
         o:['Luva grossa de cano longo, óculos, máscara N-95 e face shield','Apenas luva de procedimento','Somente touca','Nenhum EPI'],a:0,d:2},
        {q:'Na desinfecção por meio químico, a máscara indicada é:',
         o:['Máscara para vapor químico','Máscara cirúrgica comum','Sem máscara','Máscara de tecido'],a:0,d:3},
        {q:'Na esterilização em autoclave, deve-se usar:',
         o:['Luva para alta temperatura','Luva de látex fina','Mãos nuas','Luva de borracha de cano longo'],a:0,d:2},
        {q:'Quanto aos cuidados pessoais no CME:',
         o:['Não utilizar adornos e usar uniforme privativo','Pode usar anéis','Sapato aberto é permitido','Dispensa higiene das mãos'],a:0,d:1},
        {q:'A finalidade dos EPIs no CME é, entre outras:',
         o:['Prevenir acidentes e doenças ocupacionais','Apenas identificar o setor','Aquecer o profissional','Acelerar o processo'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-04', code:'POP-CME-04', version:'1.1', emission:'28/03/2019',
      title:'Limpeza manual dos materiais',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Remover sujidades orgânicas e inorgânicas e reduzir a carga microbiana com água, detergentes e ação mecânica, tornando o produto seguro para manuseio e preparado para a desinfecção ou esterilização.'
        ]},
        {n:2,h:'Execução',items:[
          'Preparar a solução de água + <b>detergente enzimático</b> (diluição do fabricante), imergir totalmente o material e aguardar o tempo recomendado.',
          'Realizar a lavagem por fricção com escova/esponja macia; em lúmens > 5 mm, usar <b>pistola de água sob pressão</b>. Enxaguar para remover sujidade e resíduos de detergente.'
        ]},
        {n:3,h:'Finalização',items:[
          'Secar bem o material (pano branco/secadora/ar comprimido), realizar <b>inspeção visual com lupa</b> e encaminhar para desinfecção ou preparo.',
          'Desprezar a solução diariamente no fim do plantão; usar detergente hospitalar para materiais engordurados.'
        ]}
      ],
      pool:[
        {q:'O produto utilizado na imersão para a limpeza manual dos materiais é o:',
         o:['Detergente enzimático','Hipoclorito de sódio','Álcool 70%','Formol'],a:0,d:2},
        {q:'Em lúmens maiores que 5 mm, a limpeza é auxiliada por:',
         o:['Pistola de água sob pressão','Cotonete','Imersão prolongada apenas','Ar quente'],a:0,d:3},
        {q:'Após a limpeza e secagem, realiza-se a inspeção visual com:',
         o:['Lupa','Microscópio','A olho nu apenas','Raio-X'],a:0,d:2},
        {q:'A solução enzimática de limpeza deve ser desprezada:',
         o:['Diariamente no fim do plantão (ou se necessário)','Uma vez por mês','Nunca','A cada hora'],a:0,d:2},
        {q:'A limpeza tem como finalidade preparar o material para:',
         o:['A desinfecção ou esterilização','O descarte','O uso imediato sem processar','A pintura'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-05', code:'POP-CME-05', version:'1.1', emission:'02/08/2019',
      title:'Limpeza automatizada (lavadora ultrassônica)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar a limpeza automatizada dos materiais na lavadora ultrassônica, removendo sujidades por ação mecânica em superfícies internas e externas.'
        ]},
        {n:2,h:'Execução',items:[
          'Ligar a lavadora, conferir o detergente enzimático no diluidor e aguardá-la encher com água e detergente; realizar a <b>pré-limpeza</b> dos materiais.',
          'Imergir totalmente o material, conectar os canulados aos jatos, acionar e aguardar o ciclo de <b>10 minutos a 40 °C</b> (pré-programável).'
        ]},
        {n:3,h:'Finalização e observações',items:[
          'Enxaguar, secar bem, realizar inspeção visual com lupa e encaminhar para desinfecção ou preparo.',
          'Aguardar o equipamento realizar o <b>primeiro ciclo do dia sem material</b> para aquecer a água; desprezar a solução no fim do plantão.'
        ]}
      ],
      pool:[
        {q:'O ciclo padrão da lavadora ultrassônica é de:',
         o:['10 minutos a 40 °C','1 hora a 100 °C','5 minutos a 20 °C','30 minutos a 60 °C'],a:0,d:3},
        {q:'Antes de colocar o material na lavadora ultrassônica, realiza-se a:',
         o:['Pré-limpeza','Esterilização','Secagem final','Embalagem'],a:0,d:2},
        {q:'O primeiro ciclo do dia na ultrassônica deve ser feito:',
         o:['Sem material, para aquecer a água','Com o dobro de material','Com água fria proposital','Sem detergente'],a:0,d:3},
        {q:'Os instrumentos canulados, na lavadora ultrassônica, devem ser:',
         o:['Conectados aos conectores de jato','Mantidos fora da água','Empilhados secos','Embrulhados'],a:0,d:2},
        {q:'Após o ciclo da ultrassônica, antes do preparo, faz-se:',
         o:['Enxágue, secagem e inspeção visual com lupa','Esterilização imediata','Descarte','Nova imersão por 1 hora'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-06', code:'POP-CME-06', version:'1.1', emission:'02/08/2019',
      title:'Uso do detergente multienzimático (Neozime5®)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar o uso do Neozime5®, detergente multienzimático com 5 enzimas (amilase, protease, lipase, carbohidrase e peptidase) para limpeza manual e automatizada de materiais e instrumentais.'
        ]},
        {n:2,h:'Parâmetros de uso',items:[
          'Inspecionar visualmente e verificar a validade do frasco; usar a solução pronta no diluidor da lavadora ultrassônica e enxaguar após o uso.',
          'Parâmetros ideais: <b>diluição 0,2% (2 ml/litro), temperatura 40 °C e tempo 10 minutos</b>; trocar a solução a cada 12 horas ou quando saturada.'
        ]},
        {n:3,h:'Segurança',items:[
          'Não misturar com outros produtos (PVPI, clorexidina, glutaraldeído, hipoclorito, ácido peracético); não ingerir, evitar inalação e contato com olhos/pele.'
        ]}
      ],
      pool:[
        {q:'A diluição ideal de uso do Neozime5® é:',
         o:['0,2% (2 ml por litro de água)','10%','50%','Puro, sem diluir'],a:0,d:3},
        {q:'A solução de detergente enzimático deve ser trocada:',
         o:['A cada 12 horas ou quando saturada','A cada 5 minutos','Uma vez por mês','Nunca'],a:0,d:2},
        {q:'O Neozime5® é um detergente:',
         o:['Multienzimático (5 enzimas)','Apenas perfumado','À base de cloro','Abrasivo'],a:0,d:2},
        {q:'O Neozime5® NÃO deve ser misturado com:',
         o:['Outros produtos como hipoclorito e glutaraldeído','Água','Nada (pode misturar tudo)','O próprio enxágue'],a:0,d:2},
        {q:'A temperatura ideal de uso do detergente enzimático é de:',
         o:['40 °C','0 °C','100 °C','Ambiente fria'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-07', code:'POP-CME-07', version:'1.1', emission:'28/03/2019',
      title:'Desinfecção por meio químico (hipoclorito)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar a desinfecção química com hipoclorito de sódio — solução aquosa com teor de cloro ativo entre 2,0 e 2,5%.'
        ]},
        {n:2,h:'Execução',items:[
          'Preparar a solução a <b>0,5%</b> (1 L de hipoclorito 1% + 1 L de água) em recipiente plástico opaco com tampa; trocar a cada 12 horas ou quando saturada.',
          'Imergir os materiais (já limpos, secos e inspecionados) completamente e aguardar o tempo de desinfecção de <b>30 minutos (alto nível)</b>; enxaguar, secar e encaminhar para preparo.'
        ]},
        {n:3,h:'Segurança',items:[
          'Não usar em objetos metálicos; manter ventilação adequada (15 trocas de ar/hora); usar luvas.',
          '<b>NÃO MISTURAR com ácidos ou produtos à base de amônia</b> — a mistura produz gases tóxicos. Não substituir por água sanitária.'
        ]}
      ],
      pool:[
        {q:'A solução de hipoclorito usada na desinfecção é preparada a:',
         o:['0,5%','10%','50%','Puro'],a:0,d:3},
        {q:'O tempo de desinfecção de alto nível com hipoclorito é de:',
         o:['30 minutos','1 minuto','5 minutos','2 horas'],a:0,d:3},
        {q:'O hipoclorito NÃO deve ser usado em:',
         o:['Objetos metálicos','Plásticos','Vidros','Borrachas'],a:0,d:2},
        {q:'Misturar hipoclorito com ácidos ou amônia:',
         o:['Produz gases tóxicos','Aumenta a eficácia','É recomendado','Não tem efeito'],a:0,d:3},
        {q:'Antes da imersão no hipoclorito, os artigos devem estar:',
         o:['Criteriosamente limpos e secos','Sujos','Ainda molhados de sangue','Embalados'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-08', code:'POP-CME-08', version:'1.0', emission:'15/09/2014',
      title:'Desinfecção por meio químico (ácido peracético)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar a desinfecção química com ácido peracético, mistura em equilíbrio de peróxido de hidrogênio, ácido acético e água.',
          'É um produto <b>tóxico e corrosivo</b>, líquido incolor levemente amarelado com odor de vinagre, que mantém suas propriedades na presença de matéria orgânica.'
        ]},
        {n:2,h:'Materiais e execução',items:[
          'Materiais: ácido peracético, exaustor, recipiente plástico opaco com tampa, <b>fita teste</b>, água potável e EPIs.',
          'Indicado para <b>desinfecção de alto nível</b> de artigos semicríticos; imergir os materiais já limpos e secos, controlando a concentração da solução pela fita teste, enxaguar e encaminhar para preparo.'
        ]},
        {n:3,h:'Segurança',items:[
          'Usar EPIs e manter o ambiente ventilado com exaustor pelo caráter tóxico/corrosivo; não misturar com outros produtos.'
        ]}
      ],
      pool:[
        {q:'O ácido peracético é uma mistura em equilíbrio de:',
         o:['Peróxido de hidrogênio, ácido acético e água','Cloro e soda','Álcool e iodo','Formol e glutaraldeído'],a:0,d:3},
        {q:'O ácido peracético é indicado para a desinfecção de:',
         o:['Alto nível (artigos semicríticos)','Baixo nível apenas','Pisos','Roupas'],a:0,d:3},
        {q:'A concentração da solução de ácido peracético é controlada por meio de:',
         o:['Fita teste','Termômetro','Balança','Cronômetro apenas'],a:0,d:2},
        {q:'Uma característica importante do ácido peracético é que ele:',
         o:['Mantém suas propriedades na presença de matéria orgânica','Perde efeito com qualquer sujidade','Não é corrosivo','É inofensivo'],a:0,d:3},
        {q:'Pelo seu caráter tóxico e corrosivo, ao manipular o ácido peracético deve-se:',
         o:['Usar EPIs e manter o ambiente ventilado com exaustor','Trabalhar sem proteção','Misturar com hipoclorito','Aquecer o produto'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-09', code:'POP-CME-09', version:'1.1', emission:'02/08/2019',
      title:'Uso do detergente neutro hospitalar (Deter Rio®)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar o uso do Deter Rio®, detergente neutro pronto para uso composto de tensoativos aniônicos biodegradáveis, para limpeza de superfícies e instrumentação em geral.'
        ]},
        {n:2,h:'Execução',items:[
          'Inspecionar e verificar a validade do frasco, colocar a solução pronta em recipiente próprio, aplicar diretamente sobre o material ou na esponja/escova e <b>enxaguar após o uso</b>.'
        ]},
        {n:3,h:'Segurança',items:[
          'Não ingerir, evitar inalação e contato com olhos e contato prolongado com a pele.'
        ]}
      ],
      pool:[
        {q:'O Deter Rio® é um detergente:',
         o:['Neutro, pronto para uso','À base de cloro','Multienzimático','Abrasivo ácido'],a:0,d:2},
        {q:'Após aplicar o Deter Rio® sobre o material, deve-se:',
         o:['Enxaguar','Esterilizar direto','Deixar secar com o produto','Reaplicar 3 vezes'],a:0,d:1},
        {q:'Antes de usar o frasco de Deter Rio®, é necessário:',
         o:['Inspecionar e verificar a validade','Aquecê-lo','Diluí-lo a 50%','Congelá-lo'],a:0,d:2},
        {q:'O Deter Rio® pode ser aplicado em:',
         o:['Mobília, pisos, paredes e instrumentação em geral','Apenas em pele','Somente em vidro','Nada (é só para descarte)'],a:0,d:1},
        {q:'Quanto à segurança no uso do Deter Rio®:',
         o:['Não ingerir e evitar contato com olhos','Pode ser ingerido','Não requer cuidado','Deve ser inalado'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-10', code:'POP-CME-10', version:'1.1', emission:'02/08/2019',
      title:'Empacotamento de artigos no CME (SMS)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Embalar os artigos a serem esterilizados em embalagens que garantam a manutenção da esterilidade do conteúdo e a transferência sob técnica asséptica.'
        ]},
        {n:2,h:'Execução',items:[
          'Higienizar as mãos e a bancada, inspecionar o artigo (limpeza, integridade, funcionalidade) e selecionar a embalagem adequada ao processo, tamanho e peso.',
          'Fechar com a <b>técnica de empacotamento universal</b> e fita zebrada (indicador químico externo), anotando tipo de material, lote, data de esterilização/vencimento e nome do funcionário.'
        ]},
        {n:3,h:'Observações',items:[
          'Colocar <b>indicador químico interno</b> dentro de todo pacote de material crítico e usar campo absorvente nas caixas para absorver umidade.',
          'É <b>proibido</b> usar papel kraft, papel toalha, jornal, lâminas de alumínio ou embalagens de tecido com remendos/perfurações.'
        ]}
      ],
      pool:[
        {q:'A técnica utilizada para fechar a embalagem dos artigos é a:',
         o:['Empacotamento universal','Dobra simples ao acaso','Enrolar em jornal','Selagem a quente apenas'],a:0,d:2},
        {q:'Dentro de todo pacote de material CRÍTICO deve-se colocar:',
         o:['Indicador químico interno','Apenas a fita externa','Nada','Um campo molhado'],a:0,d:3},
        {q:'É PROIBIDO no empacotamento o uso de:',
         o:['Papel kraft, jornal e lâminas de alumínio','Embalagem grau cirúrgico','SMS','Fita zebrada'],a:0,d:3},
        {q:'Na fita zebrada do pacote, deve-se anotar:',
         o:['Tipo de material, lote, datas e nome do funcionário','Apenas a cor','O nome do paciente','Nada'],a:0,d:2},
        {q:'Antes de embalar, o artigo deve ser inspecionado quanto a:',
         o:['Limpeza, integridade e funcionalidade','Apenas o peso','A marca','A cor'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-11', code:'POP-CME-11', version:'1.1', emission:'02/08/2019',
      title:'Esterilização por autoclave a vapor',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Esterilização é o processo que elimina os microrganismos a ponto de a probabilidade de sobrevivência ser menor que <b>1:1.000.000</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Dispor os pacotes na <b>vertical</b> (facilita a circulação do vapor e a secagem), sem encostar nas paredes da câmara; fechar a porta e selecionar o ciclo pré-programado (instrumentais, tecido, prions, flash ou Bowie & Dick).',
          'Identificar o operador e o lote, iniciar o ciclo e, ao término, aguardar a pressão interna zerar antes de abrir a porta.'
        ]},
        {n:3,h:'Finalização e observações',items:[
          'Deixar o material 30 min na autoclave e mais 30 min na sala de resfriamento; registrar os parâmetros físicos, inspecionar e armazenar. <b>Não colocar o material sobre superfície fria.</b>',
          'Não esterilizar em autoclave a vapor materiais <b>termossensíveis</b> (reanimador manual, máscaras, traqueia). Realizar os testes de Bowie & Dick, biológico e químico.'
        ]}
      ],
      pool:[
        {q:'Um artigo é considerado estéril quando a probabilidade de sobrevivência de microrganismos é menor que:',
         o:['1:1.000.000','1:100','1:10','1:1.000'],a:0,d:3},
        {q:'Os pacotes na autoclave devem ser dispostos:',
         o:['Na vertical, sem encostar nas paredes','Empilhados horizontalmente','Colados nas paredes','Soltos no chão'],a:0,d:2},
        {q:'Ao término do ciclo, antes de abrir a porta da autoclave, deve-se:',
         o:['Aguardar a pressão interna zerar','Abrir imediatamente','Jogar água fria','Desligar a energia'],a:0,d:2},
        {q:'Materiais termossensíveis (reanimador, máscaras, traqueia):',
         o:['Não devem ir à autoclave a vapor','Vão em ciclo flash','Vão junto com instrumentais','Podem ser autoclavados normalmente'],a:0,d:3},
        {q:'Após a autoclavagem, o material NÃO deve ser:',
         o:['Colocado sobre superfície fria','Inspecionado','Resfriado na sala própria','Armazenado'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-12', code:'POP-CME-12', version:'1.1', emission:'02/08/2019',
      title:'Teste de esterilização com fita química/externa (Classe I)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'A fita teste Classe I diferencia visualmente os pacotes que já passaram pelo processo de esterilização, evitando o uso de pacotes não processados e indicando falha grosseira do processo.'
        ]},
        {n:2,h:'Execução',items:[
          'Verificar a validade e colocar a fita química/externa (zebrada), com no mínimo <b>8 cm ou 3 listras completas</b>, em todos os pacotes; realizar o ciclo de esterilização.',
          'Após o esfriamento, observar a <b>mudança de cor</b> que demonstra a exposição ao processo; acondicionar em armário.'
        ]},
        {n:3,h:'Não conformidade',items:[
          'Se a fita teste <b>não corar uniformemente</b>, comunicar o enfermeiro e <b>reesterilizar</b> o material.'
        ]}
      ],
      pool:[
        {q:'A fita teste Classe I (química/externa) indica que o pacote:',
         o:['Foi exposto ao processo de esterilização','Está estéril com certeza absoluta','É de material crítico','Está vencido'],a:0,d:2},
        {q:'A fita zebrada deve ter no mínimo:',
         o:['8 cm ou 3 listras completas','1 cm','20 cm','Meia listra'],a:0,d:3},
        {q:'A confirmação de que o pacote passou pelo processo é dada pela:',
         o:['Mudança de cor da fita','Temperatura do pacote','Peso','Etiqueta'],a:0,d:2},
        {q:'Se a fita teste não corar uniformemente, o material deve ser:',
         o:['Reesterilizado','Usado mesmo assim','Descartado','Apenas relimpo'],a:0,d:3},
        {q:'A fita teste Classe I é capaz de indicar:',
         o:['Falha grosseira do processo de esterilização','A carga microbiana exata','A validade do material','O nome do operador'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-13', code:'POP-CME-13', version:'1.1', emission:'02/08/2019',
      title:'Teste de esterilização com integrador (Classe V)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Monitorar o processo de esterilização em cada carga com integradores químicos (Classe V), em pacote teste desafio (PCD).'
        ]},
        {n:2,h:'Controle interno do pacote',items:[
          'Colocar a fita Classe V no <b>centro de todos os pacotes críticos</b>; após o ciclo e o esfriamento, no momento do uso, verificar se a coloração escura atingiu a janela <b>"ACCEPT"</b>; anexar a fita ao prontuário.'
        ]},
        {n:3,h:'Controle da autoclave',items:[
          'Realizar o teste com fita interna em todo ciclo, em pacote desafio (PCD); no <b>primeiro ciclo do dia</b>, usar o PCD com teste químico Classe V + teste biológico.',
          'Após o processamento, verificar a janela "ACCEPT" e anexar o resultado no livro de controle do ciclo.'
        ]}
      ],
      pool:[
        {q:'O integrador químico Classe V é colocado:',
         o:['No centro dos pacotes críticos','Na parte externa apenas','Fora da autoclave','No prontuário antes do ciclo'],a:0,d:2},
        {q:'O resultado satisfatório do integrador Classe V é dado quando a coloração atinge a janela:',
         o:['"ACCEPT"','"REJECT"','Vermelha','Branca'],a:0,d:3},
        {q:'No primeiro ciclo do dia, o pacote desafio (PCD) deve conter:',
         o:['Teste químico Classe V + teste biológico','Apenas fita externa','Nenhum teste','Só instrumentos'],a:0,d:3},
        {q:'O integrador químico Classe V serve para:',
         o:['Monitorar o processo de esterilização em cada carga','Medir a temperatura ambiente','Identificar o operador','Pesar o pacote'],a:0,d:2},
        {q:'Após a leitura, a fita integradora do pacote deve ser:',
         o:['Anexada ao prontuário/livro de controle','Descartada sem registro','Reutilizada','Lavada'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-14', code:'POP-CME-14', version:'1.1', emission:'28/03/2019',
      title:'Teste biológico (controle de carga)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O indicador biológico (IB) contém microrganismos viáveis com resistência definida e é o <b>único que monitora diretamente a letalidade</b> do processo de esterilização.'
        ]},
        {n:2,h:'Execução',items:[
          'Colocar o pacote teste desafio com a ampola no centro do cesto; após o ciclo, esmagar a ampola na incubadora e incubá-la junto com a <b>ampola controle</b> (não autoclavada).',
          'A ampola controle (positiva) sai em ~2 min; a autoclavada (esperada negativa) em ~1 h. Comprovada a eficiência, liberar o material.'
        ]},
        {n:3,h:'Resultados e periodicidade',items:[
          'Controle <b>+</b> / Autoclavada <b>−</b> = LIBERADO. Qualquer outro resultado (controle −, ou autoclavada +) = <b>repetir todo o processo</b>.',
          'Realizar o teste biológico <b>diariamente na primeira carga</b> e após manutenção da autoclave; desprezar a ampola em lixo hospitalar.'
        ]}
      ],
      pool:[
        {q:'O indicador biológico é o único teste que monitora diretamente:',
         o:['A letalidade do processo de esterilização','A temperatura da sala','A validade da fita','O peso do pacote'],a:0,d:3},
        {q:'O resultado que LIBERA o material é:',
         o:['Controle positivo e autoclavada negativa','Ambas positivas','Ambas negativas','Controle negativo'],a:0,d:3},
        {q:'A ampola controle, que não passa pela autoclave, deve resultar:',
         o:['Positiva','Negativa','Inválida','Igual à autoclavada'],a:0,d:3},
        {q:'O teste biológico deve ser realizado:',
         o:['Diariamente na primeira carga e após manutenção da autoclave','Uma vez por mês','Só quando há falha','Anualmente'],a:0,d:2},
        {q:'Se a ampola autoclavada der positiva, deve-se:',
         o:['Repetir todo o processo','Liberar o material','Ignorar','Apenas reesterilizar a ampola'],a:0,d:3}
      ]
    },

    {
      id:'pop-cme-15', code:'POP-CME-15', version:'1.1', emission:'28/03/2019',
      title:'Teste Bowie & Dick (Classe II)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O Bowie & Dick <b>não é um teste de esterilização</b>, mas de função mecânica, que avalia a remoção do ar, fugas de ar e penetração do vapor em autoclaves com bomba de vácuo.'
        ]},
        {n:2,h:'Execução',items:[
          'Posicionar apenas o pacote com a folha teste na autoclave <b>vazia</b>, sobre o dreno, e realizar um ciclo específico de Bowie & Dick no <b>primeiro ciclo do dia</b>.',
          'Após o esfriamento, verificar a folha: <b>coloração uniforme = teste negativo</b> (aprovado); coloração não uniforme = teste positivo → comunicar o enfermeiro.'
        ]},
        {n:3,h:'Registro',items:[
          'Preencher o livro de controle com data e nome do funcionário e colar a folha teste + o impresso da autoclave.'
        ]}
      ],
      pool:[
        {q:'O teste Bowie & Dick avalia:',
         o:['A remoção do ar e a penetração do vapor na autoclave','A letalidade do processo','A carga microbiana','A validade dos pacotes'],a:0,d:3},
        {q:'O Bowie & Dick deve ser realizado com a autoclave:',
         o:['Vazia, no primeiro ciclo do dia','Cheia de instrumentais','Na última carga','Com material crítico'],a:0,d:3},
        {q:'No teste Bowie & Dick, a coloração uniforme da folha indica:',
         o:['Teste negativo (aprovado)','Falha no equipamento','Material contaminado','Necessidade de repetir'],a:0,d:3},
        {q:'O teste Bowie & Dick é um teste de:',
         o:['Função mecânica do equipamento','Esterilização do material','Limpeza','Embalagem'],a:0,d:2},
        {q:'Se a folha do Bowie & Dick não corar uniformemente (positivo), deve-se:',
         o:['Comunicar o enfermeiro para providências','Liberar a autoclave','Repetir só o material','Ignorar'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-16', code:'POP-CME-16', version:'1.1', emission:'28/03/2019',
      title:'Armazenamento do material na CME (área limpa)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Os produtos esterilizados devem ser armazenados em local limpo e seco, protegidos da luz solar direta e com manipulação mínima.'
        ]},
        {n:2,h:'Execução',items:[
          'Acondicionar o material em prateleiras/gavetas após o resfriamento, inspecionar diariamente a integridade do pacote e a validade, e armazenar pela <b>data de vencimento</b> (mais antigos à frente).',
          'Desinfetar armários, bancadas e estantes com álcool 70% mensalmente (dia 20) ou quando necessário; entrar na sala com touca, máscara e mãos higienizadas.'
        ]},
        {n:3,h:'Condições da sala',items:[
          'Acesso restrito ao funcionário do setor; manter <b>temperatura entre 18 e 25 °C</b>, umidade relativa entre 30 e 60% e renovação de ar de pelo menos 15 trocas/hora.'
        ]}
      ],
      pool:[
        {q:'Os materiais esterilizados são organizados pela:',
         o:['Data de vencimento (mais antigos à frente)','Cor da embalagem','Ordem de chegada aleatória','Tamanho'],a:0,d:2},
        {q:'A temperatura ideal da sala de armazenamento é:',
         o:['Entre 18 e 25 °C','Abaixo de 0 °C','Acima de 35 °C','Indiferente'],a:0,d:2},
        {q:'A umidade relativa da sala de armazenamento deve ser mantida entre:',
         o:['30% e 60%','80% e 100%','0% e 10%','60% e 90%'],a:0,d:3},
        {q:'O acesso à sala de armazenamento (área limpa) é:',
         o:['Restrito ao funcionário do setor','Livre','Permitido a visitantes','Apenas para médicos'],a:0,d:1},
        {q:'A inspeção da integridade e validade dos pacotes armazenados é feita:',
         o:['Diariamente','Mensalmente','Anualmente','Nunca'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-17', code:'POP-CME-17', version:'1.1', emission:'09/04/2019',
      title:'Uso das escovas de limpeza',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'As escovas usadas na limpeza podem disseminar microrganismos no expurgo; sua limpeza e desinfecção são essenciais na prevenção de infecções.'
        ]},
        {n:2,h:'Execução',items:[
          'Diariamente ao final do turno, inspecionar as escovas quanto a desgaste/desprendimento de partículas, descartando as inadequadas.',
          'Colocar as escovas em condições de uso no cesto aramado, lavá-las na <b>lavadora ultrassônica</b>, conferir a limpeza, secar na secadora e guardar no recipiente próprio.'
        ]}
      ],
      pool:[
        {q:'As escovas de limpeza são processadas:',
         o:['Diariamente ao final do turno, na lavadora ultrassônica','Uma vez por mês','Nunca','Só com pano seco'],a:0,d:2},
        {q:'Escovas com desgaste ou desprendimento de partículas devem ser:',
         o:['Descartadas e repostas','Usadas até quebrar','Apenas lavadas','Guardadas como reserva'],a:0,d:2},
        {q:'As escovas em condições de uso são lavadas na:',
         o:['Lavadora ultrassônica','Pia comum','Máquina de roupas','Autoclave'],a:0,d:2},
        {q:'O risco de escovas mal higienizadas no expurgo é:',
         o:['Disseminação de microrganismos','Desgaste do material','Perda de tempo','Nenhum'],a:0,d:2},
        {q:'Após lavadas e secas, as escovas são:',
         o:['Guardadas no recipiente próprio','Deixadas na pia','Descartadas','Reutilizadas molhadas'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-18', code:'POP-CME-18', version:'1.1', emission:'09/04/2019',
      title:'Uso do revitalizador de instrumentais',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Solução revitalizadora de instrumentos e superfícies de aço inox, que remove manchas, oxidação, ferrugem e corrosão sem deixar resíduos após o enxágue.'
        ]},
        {n:2,h:'Execução',items:[
          'Com o material já limpo, preparar a solução de água + revitalizador na lavadora ultrassônica, imergir e ajustar o ciclo para <b>50 °C / 30 min</b>.',
          'Após o ciclo, escovar com cerdas duras, enxaguar, secar com pano branco/ar comprimido, inspecionar e encaminhar para empacotamento/esterilização.'
        ]},
        {n:3,h:'Observações',items:[
          'O material deve estar <b>limpo antes</b> deste procedimento; ao final, retornar a lavadora ao ciclo padrão (40 °C / 10 min). Produto perigoso: evitar ingestão, inalação e contato com olhos/pele.'
        ]}
      ],
      pool:[
        {q:'O revitalizador de instrumentais é usado para remover:',
         o:['Manchas, oxidação, ferrugem e corrosão do aço inox','Sangue fresco','Etiquetas','Gordura de alimentos'],a:0,d:2},
        {q:'O ciclo da lavadora ultrassônica para o revitalizador é:',
         o:['50 °C por 30 minutos','40 °C por 10 minutos','100 °C por 1 hora','20 °C por 5 minutos'],a:0,d:3},
        {q:'Antes de aplicar o revitalizador, o material deve estar:',
         o:['Limpo','Sujo de sangue','Embalado','Esterilizado'],a:0,d:2},
        {q:'Após o ciclo do revitalizador, realiza-se a escovação com:',
         o:['Escova de cerdas duras','Esponja macia','Pano seco','As mãos'],a:0,d:2},
        {q:'Ao final, a lavadora ultrassônica deve retornar ao ciclo padrão de:',
         o:['40 °C / 10 min','50 °C / 30 min','60 °C / 1 h','Desligada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-19', code:'POP-CME-19', version:'1.1', emission:'28/03/2019',
      title:'Reprocessamento do reanimador manual',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O reanimador manual é um dispositivo portátil para ventilação com pressão positiva em pacientes que não respiram ou respiram inadequadamente.'
        ]},
        {n:2,h:'Execução',items:[
          'Desmontar o reanimador, lavar manualmente em solução de detergente enzimático, enxaguar e secar (balão e válvulas na secadora; máscara e reservatório com pano branco).',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b> (material termossensível).'
        ]}
      ],
      pool:[
        {q:'O reanimador manual é esterilizado por:',
         o:['Óxido de etileno','Autoclave a vapor 134 °C','Fervura','Apenas álcool'],a:0,d:3},
        {q:'A razão de o reanimador não ir à autoclave a vapor é por ser:',
         o:['Termossensível','Metálico','Crítico','Descartável'],a:0,d:3},
        {q:'A primeira etapa do reprocessamento do reanimador é:',
         o:['Desmontá-lo','Esterilizá-lo','Empacotá-lo','Armazená-lo'],a:0,d:1},
        {q:'A lavagem do reanimador manual é feita com:',
         o:['Solução de detergente enzimático','Hipoclorito puro','Apenas água','Revitalizador'],a:0,d:2},
        {q:'O reanimador manual serve para:',
         o:['Ventilação com pressão positiva','Aspiração de secreção','Medir pressão','Coletar sangue'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-20', code:'POP-CME-20', version:'1.1', emission:'28/03/2019',
      title:'Reprocessamento do intermediário de silicone',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O intermediário de silicone é usado como extensor no fornecimento de O₂ suplementar ou nebulização.'
        ]},
        {n:2,h:'Execução',items:[
          'Realizar pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (conectando ao bico de fluxo), enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, empacotar com SMS, <b>esterilizar em autoclave a 134 °C</b>, selar/identificar com fita Classe I e armazenar.'
        ]},
        {n:3,h:'Observações',items:[
          'Quando novo, cortar ~1,5 m para as unidades de internação e ~3,75 m para o CC; pode ser reutilizado após o processo de limpeza.'
        ]}
      ],
      pool:[
        {q:'O intermediário de silicone é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Não é esterilizado'],a:0,d:3},
        {q:'O intermediário de silicone é usado para:',
         o:['Extensor de O₂ suplementar ou nebulização','Aspiração de secreção','Curativos','Coleta de sangue'],a:0,d:2},
        {q:'A embalagem usada para o intermediário de silicone é:',
         o:['SMS','Saco plástico','Papel kraft','Caixa metálica'],a:0,d:2},
        {q:'Quando novo, o intermediário para unidades de internação é cortado em aproximadamente:',
         o:['1,5 metros','10 metros','30 cm','5 metros'],a:0,d:3},
        {q:'Diferente do látex, o intermediário de silicone:',
         o:['Pode ser reutilizado após limpeza','É de uso único','Não pode ser lavado','É descartável sempre'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-21', code:'POP-CME-21', version:'1.1', emission:'28/02/2019',
      title:'Reprocessamento do intermediário de látex',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O intermediário de látex é usado como extensor na <b>aspiração de secreção</b> dos pacientes.'
        ]},
        {n:2,h:'Execução',items:[
          'Cortar o látex (~1,5 m), realizar desinfecção por <b>fricção com pano e álcool 70%</b>, inspecionar, empacotar em saco plástico e identificar com etiqueta (data e profissional).'
        ]},
        {n:3,h:'Observação',items:[
          'É material de <b>uso único</b> para aspiração de paciente — desprezar após o uso.'
        ]}
      ],
      pool:[
        {q:'O intermediário de látex é usado para:',
         o:['Extensor na aspiração de secreção','Fornecer O₂','Curativos','Punção venosa'],a:0,d:2},
        {q:'A desinfecção do intermediário de látex é feita por:',
         o:['Fricção com pano e álcool 70%','Autoclave','Óxido de etileno','Imersão em hipoclorito'],a:0,d:2},
        {q:'O intermediário de látex é um material de:',
         o:['Uso único (desprezar após o uso)','Uso permanente','Reuso ilimitado','Esterilização em autoclave'],a:0,d:3},
        {q:'O intermediário de látex é cortado em aproximadamente:',
         o:['1,5 metros','5 metros','30 cm','10 metros'],a:0,d:2},
        {q:'A identificação do intermediário de látex inclui:',
         o:['Data e profissional','Apenas a cor','O nome do paciente','Nada'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-22', code:'POP-CME-22', version:'1.1', emission:'30/06/2021',
      title:'Reprocessamento do circuito do respirador',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Circuito universal para ventiladores mecânicos, que conecta o aparelho ao paciente para a assistência respiratória. Há configurações específicas por equipamento (UTI, CC e respiradores de transporte).'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular o material, realizar pré-limpeza (atenção aos lúmens) e fazer a <b>lavagem e desinfecção em termodesinfecção</b>.',
          'Secar em secadora, inspecionar, empacotar em saco plástico, identificar com a data do reprocessamento e armazenar.'
        ]}
      ],
      pool:[
        {q:'A lavagem e desinfecção do circuito do respirador é feita por:',
         o:['Termodesinfecção','Fricção com álcool','Autoclave a vapor','Imersão em formol'],a:0,d:3},
        {q:'O circuito do respirador serve para:',
         o:['Conectar o ventilador mecânico ao paciente','Aspirar secreção','Aquecer o paciente','Coletar exames'],a:0,d:2},
        {q:'Antes da lavagem, o circuito do respirador deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Cortado'],a:0,d:2},
        {q:'A identificação do circuito após o reprocessamento inclui:',
         o:['A data do reprocessamento','O nome do médico','A cor do paciente','O peso'],a:0,d:1},
        {q:'A secagem do circuito do respirador é feita:',
         o:['Em secadora','Ao sol','Com papel toalha','Naturalmente por dias'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-23', code:'POP-CME-23', version:'1.1', emission:'28/03/2019',
      title:'Reprocessamento de nebulização, umidificador e máscaras de nebulização',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Reprocessar os materiais usados na assistência ventilatória: máscara de nebulização, macronebulização, umidificador, intermediários e traqueinha.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, realizar pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (traqueias com escova interna e esponja externa), enxaguar e secar com pano branco e ar comprimido.',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b> (material termossensível).'
        ]}
      ],
      pool:[
        {q:'Os materiais de nebulização/umidificação são esterilizados por:',
         o:['Óxido de etileno','Autoclave a vapor','Fricção com álcool','Fervura'],a:0,d:3},
        {q:'As traqueias são lavadas com:',
         o:['Escova interna e esponja externa','Apenas imersão','Pano seco','Ar comprimido apenas'],a:0,d:2},
        {q:'Estes materiais são usados na:',
         o:['Assistência ventilatória','Cirurgia','Coleta de sangue','Higiene oral'],a:0,d:2},
        {q:'A secagem da parte interna dos materiais de nebulização é feita com:',
         o:['Ar comprimido','Toalha de papel','Calor da secadora','Naturalmente'],a:0,d:2},
        {q:'Antes de lavar, os materiais de nebulização devem ser:',
         o:['Desarticulados','Esterilizados','Empacotados','Pintados'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-24', code:'POP-CME-24', version:'1.1', emission:'02/04/2019',
      title:'Reprocessamento das máscaras total face, oronasal e nasal',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Reprocessar as máscaras de apoio ventilatório (total face, oronasal e nasal) e da polissonografia, com seus fixadores e válvulas.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, realizar pré-limpeza, lavar em solução com detergente multienzimático, enxaguar e secar com pano branco e ar comprimido.',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observações',items:[
          '<b>Não usar água quente, secadora nem álcool</b> nestes materiais.'
        ]}
      ],
      pool:[
        {q:'As máscaras de apoio ventilatório são esterilizadas por:',
         o:['Óxido de etileno','Autoclave a vapor','Fervura','Imersão em hipoclorito'],a:0,d:3},
        {q:'No reprocessamento das máscaras, NÃO se deve:',
         o:['Usar água quente, secadora nem álcool','Desarticular o material','Inspecionar','Empacotar'],a:0,d:3},
        {q:'A lavagem das máscaras é feita com:',
         o:['Detergente multienzimático','Hipoclorito','Revitalizador','Sabão em pó'],a:0,d:2},
        {q:'A máscara nasal é usada também no exame de:',
         o:['Polissonografia','Espirometria','Eletrocardiograma','Endoscopia'],a:0,d:2},
        {q:'A secagem das máscaras é feita com:',
         o:['Pano branco e ar comprimido','Secadora quente','Ao sol','Álcool'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-25', code:'POP-CME-25', version:'1.1', emission:'04/04/2019',
      title:'Reprocessamento da caneta monopolar com eletrodo tipo faca',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A caneta monopolar é um instrumento cirúrgico para eletrocirurgia (corte, coagulação, fulguração e dissecção), acessório dos eletrobisturis com tomada de 3 pinos.'
        ]},
        {n:2,h:'Execução',items:[
          'Desmontar, realizar pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com pano branco e ar comprimido.',
          'Montar protegendo o eletrodo com pedaço de silicone, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'O <b>eletrodo avulso</b> também deve ser encaminhado para esterilização em óxido de etileno.'
        ]}
      ],
      pool:[
        {q:'A caneta monopolar é usada em:',
         o:['Eletrocirurgia (corte/coagulação)','Aspiração','Nebulização','Sondagem'],a:0,d:2},
        {q:'A caneta monopolar é esterilizada por:',
         o:['Óxido de etileno','Autoclave a vapor 134 °C','Fricção com álcool','Fervura'],a:0,d:3},
        {q:'Ao montar a caneta após a limpeza, o eletrodo deve ser:',
         o:['Protegido com pedaço de silicone','Deixado exposto','Descartado','Dobrado'],a:0,d:2},
        {q:'A caneta monopolar é acessória de geradores (eletrobisturis) com tomada de:',
         o:['3 pinos','2 pinos','1 pino','Sem tomada'],a:0,d:2},
        {q:'O eletrodo avulso da caneta monopolar deve ser:',
         o:['Esterilizado em óxido de etileno','Descartado','Apenas lavado','Reutilizado sem processar'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-26', code:'POP-CME-26', version:'1.1', emission:'04/04/2019',
      title:'Reprocessamento dos instrumentais',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Reprocessar os instrumentais cirúrgicos — ferramentas usadas para realizar ações específicas durante uma cirurgia.'
        ]},
        {n:2,h:'Execução',items:[
          '<b>Desarticular e abrir as pinças</b>, realizar pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (canulados nos bicos de jato), enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, <b>lubrificar as superfícies de atrito</b>, separar conforme o pacote, empacotar com SMS, selar com fita Classe I e esterilizar em <b>autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Evitar que a água seque nos instrumentais, pois pode causar manchas.'
        ]}
      ],
      pool:[
        {q:'Os instrumentais cirúrgicos são esterilizados por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Antes da limpeza, as pinças devem ser:',
         o:['Desarticuladas e abertas','Mantidas fechadas','Amarradas','Descartadas'],a:0,d:2},
        {q:'Após a inspeção, aplica-se nos instrumentais:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Óleo de cozinha'],a:0,d:2},
        {q:'Deixar a água secar nos instrumentais pode causar:',
         o:['Manchas','Esterilidade','Lubrificação','Brilho'],a:0,d:2},
        {q:'A embalagem usada para os instrumentais é:',
         o:['SMS','Papel jornal','Saco de lixo','Caixa de papelão'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-27', code:'POP-CME-27', version:'1.1', emission:'27/03/2020',
      title:'Limpeza do cassete expiratório',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O cassete expiratório é uma unidade completa (medidor de fluxo, aquecimento, válvula expiratória) e <b>não deve ser desmontada</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Abrir a tampa com alicate específico, lavar ultrassonicamente, enxaguar e fazer <b>desinfecção por imersão em ácido peracético</b>; enxaguar novamente.',
          'Secar externamente com pano branco, abanar/inclinar o cassete 5-7 vezes, colocar em secadora por 1 h (máx. 70 °C) e deixar <b>12 horas na posição vertical</b> em temperatura ambiente.'
        ]},
        {n:3,h:'Observações',items:[
          '<b>Não usar ar comprimido</b> na secagem; fluxo máximo de água 10 L/min e pressão máxima 1,5 bar. Encaminhar à CME sempre após a saída do paciente, com controle de protocolo.'
        ]}
      ],
      pool:[
        {q:'O cassete expiratório:',
         o:['Não deve ser desmontado','Deve ser totalmente desmontado','É descartável','Vai à autoclave 134 °C'],a:0,d:3},
        {q:'A desinfecção do cassete expiratório é feita por imersão em:',
         o:['Ácido peracético','Hipoclorito','Álcool 70%','Formol'],a:0,d:3},
        {q:'Na secagem do cassete expiratório, NÃO se deve usar:',
         o:['Ar comprimido','Pano branco','Secadora a 70 °C','Posição vertical'],a:0,d:3},
        {q:'Após a secagem em secadora, o cassete deve ficar em posição vertical por:',
         o:['12 horas','5 minutos','1 hora','3 dias'],a:0,d:3},
        {q:'O cassete expiratório deve ser encaminhado à CME:',
         o:['Sempre após a saída do paciente','Uma vez por mês','Só quando quebra','Nunca'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-28', code:'POP-CME-28', version:'1.1', emission:'09/04/2019',
      title:'Controle de explantes',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Explante é a retirada cirúrgica de um implante (dispositivo que substitui ou atua com uma estrutura biológica ausente).'
        ]},
        {n:2,h:'Execução',items:[
          'Receber os explantes em recipiente com tampa estanque identificado com os dados do paciente; desmontar, limpar por ultrassônica e <b>esterilizar em autoclave a 134 °C</b>.',
          'Guardar os explantes processados e identificados no arsenal por <b>90 dias</b> e, após esse prazo, descartar em lixo apropriado.'
        ]},
        {n:3,h:'Observações',items:[
          'A identificação manual deve conter "EXPLANTE", o produto (parafuso, placa, fio…), nome do paciente, prontuário e data. Podem ser entregues ao paciente mediante solicitação formal, processados e desembalados.'
        ]}
      ],
      pool:[
        {q:'Explante é:',
         o:['A retirada cirúrgica de um implante','Um tipo de curativo','Uma vacina','Um medicamento'],a:0,d:2},
        {q:'Os explantes processados são guardados no arsenal por:',
         o:['90 dias','24 horas','1 ano','Indefinidamente'],a:0,d:3},
        {q:'Os explantes são esterilizados por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da embalagem do explante deve conter, entre outros:',
         o:['"EXPLANTE", produto, nome do paciente, prontuário e data','Apenas a cor','O nome do cirurgião','Nada'],a:0,d:2},
        {q:'Após 90 dias, os explantes não reclamados devem ser:',
         o:['Descartados em lixo apropriado','Reutilizados','Vendidos a ferro-velho','Mantidos para sempre'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-29', code:'POP-CME-29', version:'1.1', emission:'04/04/2019',
      title:'Reprocessamento das pinças de endoscopia e broncoscopia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Pinças usadas para biópsia nos procedimentos de endoscopia (EDA) e broncoscopia (BRONCO).'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), lavagem ultrassônica, enxágue, secagem com pano e ar comprimido, inspeção e <b>lubrificação das superfícies de atrito</b>.',
          'Empacotar em caixa protegida e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Atenção à identificação por fita: <b>EDA = vermelho; BRONCO = marrom</b>.'
        ]}
      ],
      pool:[
        {q:'As pinças de endoscopia/broncoscopia são esterilizadas por:',
         o:['Óxido de etileno','Autoclave a vapor','Fricção com álcool','Imersão em hipoclorito'],a:0,d:3},
        {q:'A fita de identificação para EDA (endoscopia) é:',
         o:['Vermelha','Marrom','Azul','Verde'],a:0,d:3},
        {q:'A fita de identificação para BRONCO (broncoscopia) é:',
         o:['Marrom','Vermelha','Amarela','Branca'],a:0,d:3},
        {q:'Estas pinças são usadas para:',
         o:['Biópsia em EDA e broncoscopia','Curativos','Sutura','Aspiração'],a:0,d:2},
        {q:'Após a inspeção, aplica-se nas pinças:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Esmalte','Cola'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-30', code:'POP-CME-30', version:'1.1', emission:'04/04/2019',
      title:'Reprocessamento da cânula de traqueostomia (metal)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A cânula de traqueostomia de metal facilita a chegada de ar aos pulmões quando há obstrução no trajeto natural. Composta de cânula externa, interna e mandril guia.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavagem ultrassônica, enxágue, secagem com pano e ar comprimido e inspeção.',
          'Empacotar com SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Observar a <b>numeração das partes</b> para a remontagem correta.'
        ]}
      ],
      pool:[
        {q:'A cânula de traqueostomia de metal é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A cânula de traqueostomia de metal é composta de:',
         o:['Cânula externa, interna e mandril guia','Apenas uma peça','Máscara e traqueia','Balão e válvula'],a:0,d:2},
        {q:'Ao reprocessar a cânula, deve-se observar:',
         o:['A numeração das partes','A cor','O peso','A marca'],a:0,d:2},
        {q:'A finalidade da cânula de traqueostomia é:',
         o:['Facilitar a chegada de ar aos pulmões','Aspirar secreção','Medir pressão','Coletar exames'],a:0,d:1},
        {q:'A embalagem usada para a cânula de traqueostomia é:',
         o:['SMS','Saco plástico apenas','Papel jornal','Caixa de papelão'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-31', code:'POP-CME-31', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento da cânula de Guedel',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A cânula de Guedel é usada no manejo das vias aéreas, evitando que a base da língua de pacientes com depressão do sensório obstrua a orofaringe.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavagem ultrassônica, enxágue e secagem; realizar <b>desinfecção em hipoclorito de sódio 0,5% por 30 minutos</b>; enxaguar e secar.',
          'Inspecionar, empacotar em saco plástico (com data e nome) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A desinfecção da cânula de Guedel é feita por imersão em:',
         o:['Hipoclorito de sódio 0,5% por 30 minutos','Ácido peracético','Álcool 70%','Formol'],a:0,d:3},
        {q:'A cânula de Guedel serve para:',
         o:['Evitar que a língua obstrua a orofaringe','Aspirar secreção','Fornecer O₂','Medir o fluxo'],a:0,d:2},
        {q:'A cânula de Guedel é usada em pacientes com:',
         o:['Depressão do sensório','Pele íntegra','Febre','Hipertensão'],a:0,d:2},
        {q:'O tempo de desinfecção da cânula de Guedel em hipoclorito é de:',
         o:['30 minutos','5 minutos','2 horas','1 minuto'],a:0,d:2},
        {q:'A cânula de Guedel atua no manejo das:',
         o:['Vias aéreas','Vias urinárias','Feridas','Veias'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-32', code:'POP-CME-32', version:'1.1', emission:'20/12/2019',
      title:'Reprocessamento do Respiron, Shaker, Threshold e Kit EPAP',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Reprocessar exercitadores respiratórios: <b>Respiron</b> (inspirômetro de incentivo), <b>Power Breathe/Threshold</b> (treino muscular inspiratório), <b>Shaker</b> (mobiliza secreção por vibração), <b>Kit EPAP</b> (pressão positiva expiratória) e Peak Flow.'
        ]},
        {n:2,h:'Execução',items:[
          'Desmontar, pré-limpeza, lavar ultrassonicamente — exceto a <b>máscara do Kit EPAP, que é lavada manualmente</b> em detergente enzimático.',
          'Secar na secadora — exceto o Respiron e a máscara do Kit EPAP, que são secados com ar comprimido; montar, inspecionar, empacotar e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O Respiron é um:',
         o:['Inspirômetro de incentivo (exercitador respiratório)','Aspirador','Ventilador mecânico','Medidor de pressão arterial'],a:0,d:2},
        {q:'A máscara do Kit EPAP deve ser lavada:',
         o:['Manualmente em detergente enzimático','Na ultrassônica','Na autoclave','Não é lavada'],a:0,d:3},
        {q:'Estes exercitadores respiratórios são esterilizados por:',
         o:['Óxido de etileno','Autoclave a vapor','Fricção com álcool','Fervura'],a:0,d:3},
        {q:'O Shaker tem a função de:',
         o:['Mobilizar secreção por vibração','Medir o pico de fluxo','Fornecer O₂','Aspirar'],a:0,d:2},
        {q:'O Respiron e a máscara do Kit EPAP são secados com:',
         o:['Ar comprimido','Secadora quente','Ao sol','Pano úmido'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-33', code:'POP-CME-33', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do kit sistema de Venturi',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O sistema de Venturi controla a fração inspirada de O₂ (FiO₂) por encaixes plásticos coloridos: azul 24%, amarelo 28%, branco 31%, verde 35%, rosa 40% e laranja 50%.'
        ]},
        {n:2,h:'Execução',items:[
          'Desmontar o kit, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar na secadora e ar comprimido.',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O sistema de Venturi serve para:',
         o:['Controlar a fração inspirada de O₂ (FiO₂)','Aspirar secreção','Medir a pressão arterial','Esterilizar'],a:0,d:2},
        {q:'No sistema de Venturi, as concentrações de FiO₂ são identificadas por:',
         o:['Encaixes plásticos coloridos','Números no copo','Cheiro','Peso'],a:0,d:3},
        {q:'O kit Venturi é esterilizado por:',
         o:['Óxido de etileno','Autoclave a vapor','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O diluidor azul do Venturi corresponde a uma FiO₂ de:',
         o:['24%','50%','100%','35%'],a:0,d:3},
        {q:'Antes da lavagem, o kit Venturi deve ser:',
         o:['Desmontado','Esterilizado','Empacotado','Pintado'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-34', code:'POP-CME-34', version:'1.1', emission:'08/04/2019',
      title:'Reprocessamento do frasco de vidro de aspiração',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O frasco de vidro de aspiração de 500 ml, usado com a válvula de aspiração, armazena líquidos, secreções e sangue aspirados durante procedimentos.'
        ]},
        {n:2,h:'Execução',items:[
          'Lavar manualmente em solução de detergente enzimático, enxaguar, secar com pano limpo e inspecionar.',
          'Empacotar em SMS e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O frasco de vidro de aspiração é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A capacidade do frasco de vidro de aspiração é de:',
         o:['500 ml','100 ml','2 litros','50 ml'],a:0,d:2},
        {q:'A lavagem do frasco de aspiração é feita com:',
         o:['Detergente enzimático','Hipoclorito puro','Apenas água','Revitalizador'],a:0,d:2},
        {q:'O frasco de aspiração serve para:',
         o:['Armazenar líquidos, secreções e sangue aspirados','Fornecer O₂','Medir a pressão','Aplicar medicação'],a:0,d:1},
        {q:'A embalagem usada para o frasco de vidro de aspiração é:',
         o:['SMS','Papel jornal','Saco de lixo','Nenhuma'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-35', code:'POP-CME-35', version:'1.1', emission:'08/04/2019',
      title:'Reprocessamento da lâmina do laringoscópio',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A lâmina do laringoscópio é usada em conjunto com o cabo para exames da laringe (e intubação).'
        ]},
        {n:2,h:'Execução',items:[
          'Lavar ultrassonicamente, enxaguar e secar com pano limpo; realizar <b>desinfecção por fricção com gaze + álcool 70%</b>.',
          'Inspecionar <b>testando com o cabo</b>, empacotar em saco plástico (com data e nome) e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'O <b>cabo</b> do laringoscópio é desinfetado com gaze + álcool 70%, por fricção repetida 3 vezes, na unidade de internação.'
        ]}
      ],
      pool:[
        {q:'A desinfecção da lâmina do laringoscópio é feita por:',
         o:['Fricção com gaze + álcool 70%','Autoclave','Óxido de etileno','Imersão em formol'],a:0,d:3},
        {q:'Na inspeção da lâmina do laringoscópio, deve-se:',
         o:['Testá-la com o cabo','Pesá-la','Pintá-la','Dobrá-la'],a:0,d:2},
        {q:'A lâmina do laringoscópio é usada para:',
         o:['Exames da laringe / intubação','Aspiração','Curativos','Coleta de sangue'],a:0,d:2},
        {q:'O cabo do laringoscópio é desinfetado:',
         o:['Com gaze + álcool 70%, por fricção 3 vezes','Na autoclave','Por imersão 30 min','Não é desinfetado'],a:0,d:2},
        {q:'A lâmina do laringoscópio funciona em conjunto com:',
         o:['O cabo','A máscara','A traqueia','O balão'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-36', code:'POP-CME-36', version:'1.1', emission:'08/04/2019',
      title:'Reprocessamento da válvula de aspiração (O₂/ar comprimido/vácuo)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A válvula de aspiração auxilia na aspiração de secreções, conectada ao frasco de aspiração. Identificação por cor: <b>cinza = vácuo, verde = oxigênio, amarelo = ar comprimido</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular e deixar as válvulas abertas, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (nos bicos injetores), enxaguar com pistola de água nos canais.',
          'Secar com ar comprimido nos canais e na secadora, montar, inspecionar, empacotar em saco plástico (com data e nome) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A cor que identifica a válvula de vácuo é:',
         o:['Cinza','Verde','Amarela','Azul'],a:0,d:3},
        {q:'A válvula verde corresponde a:',
         o:['Oxigênio','Vácuo','Ar comprimido','Óxido nitroso'],a:0,d:3},
        {q:'Durante a limpeza, as válvulas devem ser:',
         o:['Desarticuladas e deixadas abertas','Mantidas fechadas','Lacradas','Pintadas'],a:0,d:2},
        {q:'A válvula de aspiração é conectada ao:',
         o:['Frasco de aspiração','Ventilador','Monitor cardíaco','Soro'],a:0,d:2},
        {q:'A válvula amarela corresponde a:',
         o:['Ar comprimido','Oxigênio','Vácuo','Água'],a:0,d:3}
      ]
    },

    {
      id:'pop-cme-37', code:'POP-CME-37', version:'1.1', emission:'08/04/2019',
      title:'Reprocessamento do fluxômetro (O₂/ar comprimido)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O fluxômetro mede e controla o fluxo de oxigênio e ar comprimido (faixa de 0 a 15 L/min). Identificação: <b>verde = oxigênio, amarelo = ar comprimido</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Deixar as válvulas abertas, desarticular o tubo, pré-limpeza, lavar ultrassonicamente (no jato pulsátil), enxaguar e secar com ar comprimido e secadora.',
          'Montar, inspecionar, empacotar em saco plástico (com data e nome) e armazenar.'
        ]},
        {n:3,h:'Observações',items:[
          '<b>Não usar álcool</b> nem produtos similares (danificam as peças plásticas); o produto não suporta temperaturas acima de 60 °C — <b>não autoclavar</b>.'
        ]}
      ],
      pool:[
        {q:'O fluxômetro mede e controla o fluxo de O₂/ar comprimido na faixa de:',
         o:['0 a 15 L/min','0 a 100 L/min','0 a 5 L/min','Acima de 50 L/min'],a:0,d:3},
        {q:'O fluxômetro NÃO pode ser:',
         o:['Autoclavado (não suporta >60 °C)','Lavado','Inspecionado','Identificado'],a:0,d:3},
        {q:'No fluxômetro, NÃO se deve usar:',
         o:['Álcool e produtos similares','Detergente enzimático','Água','Ar comprimido'],a:0,d:2},
        {q:'A cor verde no fluxômetro identifica:',
         o:['Oxigênio','Ar comprimido','Vácuo','Água'],a:0,d:2},
        {q:'A lavagem ultrassônica do fluxômetro é feita conectando-o:',
         o:['No jato pulsátil','Na autoclave','No frasco de soro','Em nada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-38', code:'POP-CME-38', version:'1.1', emission:'05/04/2019',
      title:'Reprocessamento do conector para aerossolterapia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Conector usado para acoplar o aerossol em pacientes entubados (há modelos para CC e para UTI).'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, lavar ultrassonicamente, enxaguar, secar em secadora, montar e inspecionar.',
          'Empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O conector para aerossolterapia é usado para:',
         o:['Conectar o aerossol em pacientes entubados','Aspirar secreção','Medir pressão','Coletar sangue'],a:0,d:2},
        {q:'O conector para aerossolterapia é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A secagem do conector para aerossolterapia é feita:',
         o:['Em secadora','Ao sol','Com papel toalha','Naturalmente por dias'],a:0,d:1},
        {q:'Antes da lavagem, o conector deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Pintado'],a:0,d:1},
        {q:'Há modelos de conector para aerossolterapia para:',
         o:['CC e UTI','Apenas pediatria','Apenas ambulatório','Domicílio'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-39', code:'POP-CME-39', version:'1.1', emission:'23/06/2021',
      title:'Reprocessamento do pleuroscópio',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Material para pleuroscopia (visualização da pleura por incisão no tórax). Composto por lâminas pleuroscópicas, ponteiras ópticas, cabo óptico, cânulas e cabos.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar, secar, <b>lubrificar as superfícies de atrito</b> e inspecionar.',
          'Colocar <b>fita teste Classe V no interior</b>, empacotar com SMS de 1,20×1,20 m e esterilizar em <b>autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Cuidado especial com o material de vídeo: <b>não dobrar e não bater</b>. Identificação: fita laranja + azul.'
        ]}
      ],
      pool:[
        {q:'O pleuroscópio é usado para visualizar a:',
         o:['Pleura','Bexiga','Laringe','Articulação'],a:0,d:2},
        {q:'O pleuroscópio é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Com o material de vídeo do pleuroscópio, deve-se ter o cuidado de:',
         o:['Não dobrar e não bater','Enrolar firmemente','Bater para encaixar','Dobrar ao meio'],a:0,d:3},
        {q:'No interior do pacote do pleuroscópio coloca-se:',
         o:['Fita teste Classe V','Apenas gaze','Água','Nada'],a:0,d:2},
        {q:'Após a inspeção, aplica-se no pleuroscópio:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Álcool em excesso'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-40', code:'POP-CME-40', version:'1.1', emission:'21/01/2021',
      title:'Limpeza de bancadas, armários, gavetas e caixas plásticas',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'A limpeza e desinfecção reduzem a infecção cruzada veiculada pelo ambiente, rompendo a cadeia epidemiológica das infecções.'
        ]},
        {n:2,h:'Execução e periodicidade',items:[
          'Retirar os produtos e limpar/desinfetar com compressa umedecida em desinfetante de superfície (superfícies impermeáveis).',
          'Periodicidade: <b>diariamente</b> (fim do plantão) bancadas e caixas plásticas; <b>mensalmente</b> (dia 15) armários e gavetas.'
        ]}
      ],
      pool:[
        {q:'A limpeza das bancadas é feita:',
         o:['Diariamente (fim do plantão)','Mensalmente','Anualmente','Nunca'],a:0,d:2},
        {q:'A limpeza dos armários e gavetas é feita:',
         o:['Mensalmente (dia 15)','Diariamente','A cada hora','Semanalmente'],a:0,d:2},
        {q:'A finalidade da limpeza do ambiente é:',
         o:['Reduzir a infecção cruzada veiculada pelo ambiente','Decorar a sala','Economizar produtos','Aquecer o setor'],a:0,d:1},
        {q:'A desinfecção das superfícies é feita com compressa umedecida em:',
         o:['Desinfetante de superfície','Água pura','Óleo','Detergente enzimático'],a:0,d:2},
        {q:'Antes de limpar, deve-se:',
         o:['Retirar os produtos dos armários/gavetas/caixas','Esterilizar tudo','Pintar','Trancar'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-41', code:'POP-CME-41', version:'1.1', emission:'09/04/2019',
      title:'Limpeza da câmara interna e externa da autoclave',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Manter a autoclave limpa e em condições adequadas de funcionamento, livre de substâncias que interfiram no processo.'
        ]},
        {n:2,h:'Execução',items:[
          'Realizar a limpeza <b>todo domingo pela manhã</b>, antes de ligar o equipamento, friccionando a câmara interna e a parte externa com compressa cirúrgica embebida na solução própria.',
          'Solução: <b>200 ml de vaselina + 800 ml de álcool</b>. Aguardar 1 hora antes do uso.'
        ]}
      ],
      pool:[
        {q:'A limpeza da autoclave é realizada:',
         o:['Todo domingo pela manhã, antes de ligar','Diariamente','A cada ciclo','Anualmente'],a:0,d:2},
        {q:'A solução para limpeza da autoclave é composta de:',
         o:['200 ml de vaselina + 800 ml de álcool','Água e sabão','Hipoclorito puro','Ácido peracético'],a:0,d:3},
        {q:'Após a limpeza da autoclave, deve-se aguardar antes de usá-la:',
         o:['1 hora','5 minutos','1 dia','Nenhum tempo'],a:0,d:2},
        {q:'A limpeza da autoclave deve ser feita:',
         o:['Antes de ligar o equipamento','Com o equipamento ligado','Durante um ciclo','Após esterilizar'],a:0,d:2},
        {q:'A finalidade da limpeza da autoclave é:',
         o:['Garantir condições adequadas de funcionamento','Resfriá-la','Decorá-la','Testá-la biologicamente'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-42', code:'POP-CME-42', version:'1.1', emission:'09/04/2019',
      title:'Validação da esterilização em autoclave a vapor',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Validação é o procedimento documentado que legitima o processo de esterilização, garantindo que ele ocorra sempre da mesma forma e com a mesma qualidade.'
        ]},
        {n:2,h:'Controles do equipamento e exposição',items:[
          '<b>Bowie & Dick</b> (função mecânica) no 1º ciclo do dia; <b>teste físico</b> registrado a cada ciclo (data, lote, temperatura, tempo de esterilização e secagem); teste mecânico mensal (empresa).',
          '<b>Químico externo</b> (Classe I, fita zebrada ≥ 8 cm) em todos os pacotes — se não corar uniformemente, reesterilizar.'
        ]},
        {n:3,h:'Controle de pacote e carga',items:[
          '<b>Químico interno</b> (integrador Classe V) em cada carga e nos pacotes críticos.',
          '<b>Teste biológico</b> diário em cada esterilizador e em toda carga com implantáveis; a carga só é liberada após leitura negativa do IB.'
        ]}
      ],
      pool:[
        {q:'Validação da esterilização é o procedimento que:',
         o:['Documenta e legitima o processo, garantindo qualidade constante','Esteriliza o material','Limpa a autoclave','Embala os pacotes'],a:0,d:3},
        {q:'O teste físico registra a cada ciclo, entre outros:',
         o:['Data, lote, temperatura e tempos','Apenas a cor','O nome do paciente','O peso do pacote'],a:0,d:2},
        {q:'A carga com produtos implantáveis só é liberada após:',
         o:['Leitura negativa do indicador biológico','Apenas a fita externa corar','O resfriamento','A inspeção visual'],a:0,d:3},
        {q:'O teste de função mecânica realizado no primeiro ciclo do dia é o:',
         o:['Bowie & Dick','Biológico','Físico','Químico interno'],a:0,d:2},
        {q:'O integrador químico interno usado no controle de pacote é o:',
         o:['Classe V','Classe I','Classe 0','Fita zebrada'],a:0,d:3}
      ]
    },

    {
      id:'pop-cme-43', code:'POP-CME-43', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do LAP e campo de mesa',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Os campos delimitam a área cirúrgica (LAP) e cobrem a mesa da instrumentadora (campo de mesa).'
        ]},
        {n:2,h:'Execução',items:[
          'Verificar a integridade e limpeza do campo, dobrar conforme a técnica própria do Centro Cirúrgico.',
          'Empacotar em SMS (LAP 1,50×1,50 m; campo de mesa 1,20×1,20 m), selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O campo LAP serve para:',
         o:['Delimitar a área cirúrgica','Aspirar secreção','Cobrir o paciente na recepção','Embalar instrumentais'],a:0,d:2},
        {q:'Os campos (LAP e mesa) são esterilizados por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Antes de dobrar, deve-se verificar do campo:',
         o:['A integridade e a limpeza','A cor','O fabricante','O peso'],a:0,d:2},
        {q:'O campo de mesa cobre:',
         o:['A mesa da instrumentadora','O paciente','O chão','A autoclave'],a:0,d:1},
        {q:'A dobra dos campos segue:',
         o:['A técnica própria do Centro Cirúrgico','Qualquer forma','A dobra de toalha','Sem técnica'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-44', code:'POP-CME-44', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do manguito',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O manguito inflável é colocado em torno do braço do paciente para verificar a pressão arterial (há modelos para unidades, UTI e CC).'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), <b>lavar manualmente</b> em solução de detergente enzimático, enxaguar e secar na secadora.',
          'Inspecionar, empacotar em saco plástico (com data, nome e unidade) e armazenar.'
        ]}
      ],
      pool:[
        {q:'O manguito é usado para:',
         o:['Verificar a pressão arterial','Aspirar secreção','Fornecer O₂','Coletar sangue'],a:0,d:1},
        {q:'A lavagem do manguito é feita:',
         o:['Manualmente em detergente enzimático','Na autoclave','Por imersão em hipoclorito','A seco'],a:0,d:2},
        {q:'A secagem do manguito é feita:',
         o:['Na secadora','Ao sol','Com papel toalha','Naturalmente por dias'],a:0,d:1},
        {q:'A identificação do manguito inclui:',
         o:['Data, nome e unidade','Apenas a cor','O nome do médico','Nada'],a:0,d:2},
        {q:'O manguito é colocado em torno do:',
         o:['Braço do paciente','Pescoço','Tornozelo','Tórax'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-45', code:'POP-CME-45', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do manômetro',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O manômetro mede a pressão de fluidos; é utilizado nas unidades durante a <b>punção lombar</b> (pressão de abertura do líquor).'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com ar comprimido e secadora.',
          'Inspecionar, empacotar em saco plástico (com data e nome) e armazenar.'
        ]}
      ],
      pool:[
        {q:'O manômetro é usado nas unidades durante a:',
         o:['Punção lombar','Cirurgia cardíaca','Endoscopia','Nebulização'],a:0,d:2},
        {q:'O manômetro mede:',
         o:['A pressão de fluidos','A temperatura','O peso','O fluxo de O₂'],a:0,d:2},
        {q:'A lavagem do manômetro é feita:',
         o:['Ultrassonicamente','Por imersão em formol','A seco','Na autoclave'],a:0,d:2},
        {q:'A secagem do manômetro é feita com:',
         o:['Ar comprimido e secadora','Ao sol','Pano úmido','Calor de forno'],a:0,d:1},
        {q:'Na punção lombar, o manômetro mede a:',
         o:['Pressão de abertura do líquor','Temperatura do paciente','Saturação','Glicemia'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-46', code:'POP-CME-46', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do pulverizador cirúrgico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O pulverizador cirúrgico é usado para a aplicação controlada de talco cirúrgico.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (lúmens no jato pulsátil), enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, <b>lubrificar as superfícies de atrito</b>, empacotar em caixa protegida e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O pulverizador cirúrgico serve para aplicar:',
         o:['Talco cirúrgico de forma controlada','Soro','Anestésico','Antibiótico'],a:0,d:2},
        {q:'O pulverizador cirúrgico é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Após a inspeção, aplica-se no pulverizador:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Talco'],a:0,d:2},
        {q:'A lavagem ultrassônica do pulverizador conecta os lúmens:',
         o:['No jato pulsátil','Na autoclave','No frasco de soro','Em nada'],a:0,d:2},
        {q:'O pulverizador cirúrgico é empacotado em:',
         o:['Caixa protegida','Papel jornal','Saco de lixo','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-47', code:'POP-CME-47', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do laparoscópio',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O laparoscópio é um instrumento endoscópico com sistema óptico, introduzido no abdome para fins diagnósticos ou cirúrgicos.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar, secar e <b>limpar as lentes das extremidades com gaze + álcool 70%</b>.',
          'Colocar fita teste Classe V no interior, empacotar com SMS, identificar diâmetro/grau da lente e esterilizar em <b>autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observações',items:[
          'Identificar o <b>diâmetro (5 ou 10 mm) e o ângulo da óptica (0 ou 30°)</b>; cuidado especial com o material de vídeo — não dobrar e não bater.'
        ]}
      ],
      pool:[
        {q:'O laparoscópio é introduzido no:',
         o:['Abdome','Tórax','Crânio','Joelho'],a:0,d:2},
        {q:'O laparoscópio é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool apenas','Fervura'],a:0,d:2},
        {q:'As lentes das extremidades do laparoscópio são limpas com:',
         o:['Gaze + álcool 70%','Escova de aço','Ar comprimido forte','Hipoclorito'],a:0,d:3},
        {q:'Na identificação do laparoscópio, registra-se:',
         o:['Diâmetro (5 ou 10 mm) e ângulo da óptica (0 ou 30°)','Apenas a cor','O peso','O fabricante apenas'],a:0,d:3},
        {q:'Com o material de vídeo do laparoscópio, deve-se:',
         o:['Não dobrar e não bater','Enrolar firme','Bater para encaixar','Dobrar ao meio'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-48', code:'POP-CME-48', version:'1.1', emission:'09/04/2019',
      title:'Confecção do pacote de retirada de pontos',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar o pacote para retirada de pontos: 20 compressas de gaze, pinça Adson serrilhada, tesoura Íris-P, pinça Kelly curva-16 e cabo de bisturi nº 3.'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em SMS de 50×50 cm, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'Identificação: fita marrom + azul escuro.'
        ]}
      ],
      pool:[
        {q:'O pacote de retirada de pontos contém, entre outros:',
         o:['Pinça Adson, tesoura Íris e cabo de bisturi','Sonda vesical','Máscara de O₂','Frasco de soro'],a:0,d:2},
        {q:'O pacote de retirada de pontos é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A embalagem do pacote de retirada de pontos é SMS de:',
         o:['50×50 cm','1,20×1,20 m','10×10 cm','2×2 m'],a:0,d:2},
        {q:'A fita de identificação do pacote de retirada de pontos é:',
         o:['Marrom + azul escuro','Verde','Vermelha','Branca'],a:0,d:3},
        {q:'O número de compressas de gaze no pacote é:',
         o:['20','2','100','5'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-49', code:'POP-CME-49', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de pequena cirurgia + dissecção venosa',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar a bandeja de pequena cirurgia + dissecção venosa: bandeja, campos, cabos de bisturi nº 3 e 4, porta-agulhas, tesouras (Mayo e Metzenbaum), afastadores (Farabeuf e Weitlaner) e pinças variadas (Adson, Allis, Kelly, Mosquito, Backhaus, Cheron).'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior da bandeja, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'Identificação: fita laranja listrado.'
        ]}
      ],
      pool:[
        {q:'A bandeja de pequena cirurgia + dissecção venosa é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'No interior da bandeja, antes de empacotar, coloca-se:',
         o:['Fita teste','Água','Talco','Nada'],a:0,d:2},
        {q:'A embalagem desta bandeja é SMS de:',
         o:['1,20×1,20 m','50×50 cm','10×10 cm','3×3 m'],a:0,d:2},
        {q:'A bandeja contém, entre os instrumentais, cabos de bisturi:',
         o:['Nº 3 e nº 4','Apenas nº 1','Nº 10 e 20','Nenhum'],a:0,d:2},
        {q:'A fita de identificação desta bandeja é:',
         o:['Laranja listrado','Verde','Vermelha','Preta'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-50', code:'POP-CME-50', version:'1.1', emission:'09/04/2019',
      title:'Confecção do pacote de pequena cirurgia "delicada"',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar a bandeja de pequena cirurgia delicada: bandeja rasa, campo fenestrado, 20 gazes, cuba-rim, cabo de bisturi nº 3, porta-agulha, tesouras (Íris e Metzenbaum), afastadores Farabeuf e pinças (Adson delicada, Mosquito, Backhaus, Cheron).'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'Identificação: fita laranja listrado.'
        ]}
      ],
      pool:[
        {q:'O pacote de pequena cirurgia delicada é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A embalagem do pacote de pequena cirurgia delicada é SMS de:',
         o:['1×1 m','50×50 cm','2×2 m','10×10 cm'],a:0,d:2},
        {q:'Antes de empacotar a bandeja, coloca-se no interior:',
         o:['Fita teste','Talco','Água','Nada'],a:0,d:2},
        {q:'A pinça Adson presente neste pacote é do tipo:',
         o:['Serrilhada delicada','Dente de rato grande','Cheron','Allis'],a:0,d:2},
        {q:'A fita de identificação deste pacote é:',
         o:['Laranja listrado','Marrom','Azul','Branca'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-51', code:'POP-CME-51', version:'1.1', emission:'22/06/2021',
      title:'Confecção da cuba da Dermatologia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar a cuba da Dermatologia para procedimentos dermatológicos: cuba-rim e redonda, campos, cabo de bisturi nº 3, porta-agulha, tesouras (Íris e Metzenbaum delicada) e pinças (Adson, Mosquito, Backhaus, Cheron).'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'Identificação: fita laranja.'
        ]}
      ],
      pool:[
        {q:'A cuba da Dermato é usada em procedimentos de:',
         o:['Dermatologia','Cardiologia','Oftalmologia','Ortopedia'],a:0,d:2},
        {q:'A cuba da Dermato é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A embalagem da cuba da Dermato é SMS de:',
         o:['1,20×1,20 m','50×50 cm','10×10 cm','3×3 m'],a:0,d:2},
        {q:'Antes de empacotar, coloca-se no interior da bandeja:',
         o:['Fita teste','Talco','Água','Nada'],a:0,d:2},
        {q:'A fita de identificação da cuba da Dermato é:',
         o:['Laranja','Verde','Vermelha','Preta'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-52', code:'POP-CME-52', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de punção lombar',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a bandeja para punção lombar — coleta de líquor na medula espinhal para diagnóstico de infecções meníngeas e outras condições neurológicas. Composta por bandeja, campo fenestrado, cuba redonda e pinça Cheron.'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em TNT de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita amarela.'
        ]}
      ],
      pool:[
        {q:'A bandeja de punção lombar destina-se à coleta de:',
         o:['Líquor','Sangue arterial','Urina','Bile'],a:0,d:2},
        {q:'A bandeja de punção lombar é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de punção lombar é:',
         o:['Amarela','Vermelha','Verde','Preta'],a:0,d:2},
        {q:'A punção lombar é usada principalmente no diagnóstico de:',
         o:['Infecções meníngeas','Fraturas','Catarata','Pneumonia'],a:0,d:2},
        {q:'A pinça presente na bandeja para a assepsia é a:',
         o:['Cheron','Kelly','Allis','Backhaus'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-53', code:'POP-CME-53', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de acesso venoso profundo',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a bandeja para acesso venoso profundo — cateteres cuja ponta fica numa veia central de grosso calibre, para infusão e monitoração de pressão. Composta por bandeja, campos, cubas, porta-agulha, tesoura Mayo e pinças.'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita vermelha.'
        ]}
      ],
      pool:[
        {q:'A bandeja de acesso venoso profundo é usada para cateteres em:',
         o:['Veia central de grosso calibre','Artéria periférica','Bexiga','Pleura'],a:0,d:2},
        {q:'A bandeja de acesso venoso profundo é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de acesso venoso profundo é:',
         o:['Vermelha','Amarela','Verde','Cinza'],a:0,d:2},
        {q:'O acesso venoso profundo permite, entre outros:',
         o:['Infusão de soro/medicamentos e monitoração de pressão','Coleta de urina','Drenagem de tórax','Sutura'],a:0,d:2},
        {q:'A embalagem da bandeja de acesso venoso profundo é SMS de:',
         o:['1,20×1,20 m','50×50 cm','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-54', code:'POP-CME-54', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de drenagem torácica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a bandeja para drenagem torácica, cujo objetivo é manter ou restabelecer a <b>pressão negativa do espaço pleural</b>. Composta por bandeja, campo, cuba, cabos de bisturi, porta-agulha, tesouras e pinças.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita azul listrado.'
        ]}
      ],
      pool:[
        {q:'A drenagem torácica tem como objetivo:',
         o:['Manter/restabelecer a pressão negativa do espaço pleural','Drenar a bexiga','Coletar líquor','Suturar a pele'],a:0,d:3},
        {q:'A bandeja de drenagem torácica é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de drenagem torácica é:',
         o:['Azul listrado','Verde','Amarela','Marrom'],a:0,d:2},
        {q:'Antes de empacotar a bandeja, coloca-se no interior:',
         o:['Fita teste','Talco','Água','Nada'],a:0,d:2},
        {q:'A drenagem torácica atua sobre o espaço:',
         o:['Pleural','Peritoneal','Subaracnóideo','Vascular'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-55', code:'POP-CME-55', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de punção pleural (toracocentese)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a bandeja para punção pleural (toracocentese) — procedimento diagnóstico/terapêutico nas afecções com depósito de líquido ou ar no espaço pleural. Inclui a <b>agulha de Cope</b> (kit 5 partes).'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita verde.'
        ]}
      ],
      pool:[
        {q:'A toracocentese (punção pleural) atua sobre o:',
         o:['Espaço pleural','Espaço peritoneal','Canal medular','Sistema venoso'],a:0,d:2},
        {q:'A agulha específica presente na bandeja de punção pleural é a:',
         o:['Agulha de Cope','Agulha de Hubber','Agulha 40x12','Agulha de Veress'],a:0,d:3},
        {q:'A bandeja de punção pleural é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de punção pleural é:',
         o:['Verde','Vermelha','Amarela','Cinza'],a:0,d:2},
        {q:'A punção pleural tem finalidade:',
         o:['Diagnóstica e terapêutica','Apenas estética','De transporte','De higiene'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-56', code:'POP-CME-56', version:'1.1', emission:'18/06/2021',
      title:'Confecção da bandeja de traqueostomia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a bandeja para traqueostomia — abertura de orifício na traqueia e colocação de cânula para passagem de ar. Composta por bandeja, campos, cubas, cabo de bisturi, porta-agulha, tesouras, afastadores e pinças variadas.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita lilás.'
        ]}
      ],
      pool:[
        {q:'A traqueostomia consiste em:',
         o:['Abrir orifício na traqueia e colocar cânula para passagem de ar','Drenar o tórax','Puncionar a bexiga','Suturar a pele'],a:0,d:2},
        {q:'A bandeja de traqueostomia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de traqueostomia é:',
         o:['Lilás','Verde','Amarela','Vermelha'],a:0,d:2},
        {q:'A traqueostomia permite a passagem de:',
         o:['Ar','Urina','Líquor','Sangue'],a:0,d:1},
        {q:'Antes de empacotar a bandeja de traqueostomia, coloca-se:',
         o:['Fita teste no interior','Talco','Água','Nada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-57', code:'POP-CME-57', version:'1.1', emission:'22/06/2021',
      title:'Confecção da bandeja de diálise peritoneal',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar a bandeja para diálise peritoneal. Composta por bandeja, campo fenestrado, cabos de bisturi, porta-agulhas, tesoura Metzenbaum, pinça Kelly, perfurador completo e pinça Cheron.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 100×100 cm, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita marrom.'
        ]}
      ],
      pool:[
        {q:'A bandeja de diálise peritoneal é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da bandeja de diálise peritoneal é:',
         o:['Marrom','Verde','Amarela','Vermelha'],a:0,d:2},
        {q:'A diálise peritoneal está relacionada à função:',
         o:['Renal','Cardíaca','Respiratória','Hepática'],a:0,d:2},
        {q:'Antes de empacotar a bandeja de diálise, coloca-se no interior:',
         o:['Fita teste','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem da bandeja de diálise peritoneal é SMS de:',
         o:['100×100 cm','50×50 cm','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-58', code:'POP-CME-58', version:'1.1', emission:'22/06/2021',
      title:'Confecção da cuba de sondagem vesical',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar a cuba para sondagem vesical. Composta por cuba-rim, campo fenestrado e pinça Crile curva (assepsia).'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em SMS de 75×75 cm, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita cinza.'
        ]}
      ],
      pool:[
        {q:'A cuba de sondagem vesical destina-se à:',
         o:['Sondagem vesical','Drenagem torácica','Punção lombar','Sutura'],a:0,d:2},
        {q:'A cuba de sondagem vesical é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da cuba de sondagem vesical é:',
         o:['Cinza','Verde','Amarela','Lilás'],a:0,d:2},
        {q:'A embalagem da cuba de sondagem vesical é SMS de:',
         o:['75×75 cm','1,50×1,50 m','10×10 cm','3×3 m'],a:0,d:2},
        {q:'A pinça usada para a assepsia na cuba de sondagem vesical é a:',
         o:['Crile curva','Cheron','Allis','Backhaus'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-59', code:'POP-CME-59', version:'1.1', emission:'22/06/2021',
      title:'Confecção da cuba de cistostomia suprapúbica (vesicostomia)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Confeccionar a cuba para cistostomia suprapúbica — conexão cirúrgica entre a bexiga e a pele para drenar urina em obstrução do fluxo urinário. Inclui o <b>trocater para cistostomia</b>.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita marrom + lilás.'
        ]}
      ],
      pool:[
        {q:'A cistostomia suprapúbica cria uma conexão entre:',
         o:['A bexiga e a pele suprapúbica','O tórax e a pleura','O abdome e o peritônio','A traqueia e a pele'],a:0,d:3},
        {q:'O instrumento específico da cuba de cistostomia é o:',
         o:['Trocater para cistostomia','Agulha de Cope','Perfurador','Afastador Balfour'],a:0,d:3},
        {q:'A cuba de cistostomia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação da cuba de cistostomia é:',
         o:['Marrom + lilás','Verde','Amarela','Cinza'],a:0,d:2},
        {q:'A cistostomia é usada para drenar urina em casos de:',
         o:['Obstrução do fluxo urinário normal','Infecção respiratória','Fratura','Hemorragia digestiva'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-60', code:'POP-CME-60', version:'1.1', emission:'22/06/2021',
      title:'Confecção do pacote de sutura',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar o pacote para sutura. Composto por campo fenestrado, porta-agulha Mayo-Hegar, pinça Adson dente de rato, tesoura Metzenbaum, pinça Kelly e pinça Cheron.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em SMS de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita marrom + verde.'
        ]}
      ],
      pool:[
        {q:'O pacote de sutura é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação do pacote de sutura é:',
         o:['Marrom + verde','Verde','Vermelha','Cinza'],a:0,d:2},
        {q:'O instrumento usado para segurar a agulha na sutura é o:',
         o:['Porta-agulha Mayo-Hegar','Afastador','Trocater','Cuba-rim'],a:0,d:2},
        {q:'Antes de empacotar o pacote de sutura, coloca-se no interior:',
         o:['Fita teste','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem do pacote de sutura é SMS de:',
         o:['1×1 m','50×50 cm','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-61', code:'POP-CME-61', version:'1.1', emission:'09/04/2019',
      title:'Montagem da caixa de laparotomia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa cirúrgica de laparotomia (<b>71 peças</b>): cabos de bisturi, pinças variadas (anatômicas, DeBakey, clamps intestinais, Allis, Duval, Babcock, Collin, Kocher, Mixter, Kelly, Mosquito, Backhaus), porta-agulhas, tesouras e clamps Mayo.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar <b>fita teste Classe V</b> no interior, empacotar em SMS de 1,50×1,50 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: cabo cor verde.'
        ]}
      ],
      pool:[
        {q:'A caixa de laparotomia é composta por:',
         o:['71 peças','5 peças','200 peças','10 peças'],a:0,d:2},
        {q:'A caixa de laparotomia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'No interior da caixa de laparotomia coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A identificação da caixa de laparotomia é por:',
         o:['Cabo cor verde','Fita amarela','Etiqueta vermelha','Selo preto'],a:0,d:2},
        {q:'A embalagem da caixa de laparotomia é SMS de:',
         o:['1,50×1,50 m','50×50 cm','10×10 cm','75×75 cm'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-62', code:'POP-CME-62', version:'1.1', emission:'15/07/2019',
      title:'Reprocessamento da bota da fisioterapia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A bota da fisioterapia é usada para a prevenção de deformação postural do paciente acamado.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, <b>lavar manualmente</b> em solução de detergente enzimático, enxaguar e secar na secadora.',
          'Inspecionar, empacotar em saco plástico (com data e nome) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A bota da fisioterapia serve para:',
         o:['Prevenir a deformação postural do paciente acamado','Aspirar secreção','Medir pressão','Drenar o tórax'],a:0,d:2},
        {q:'A lavagem da bota da fisioterapia é feita:',
         o:['Manualmente em detergente enzimático','Na autoclave','Por imersão em hipoclorito','A seco'],a:0,d:2},
        {q:'A secagem da bota da fisioterapia é feita:',
         o:['Na secadora','Ao sol','Com papel toalha','Naturalmente por dias'],a:0,d:1},
        {q:'A bota da fisioterapia é destinada ao paciente:',
         o:['Acamado','Em pé','Ambulatorial','Cirúrgico'],a:0,d:1},
        {q:'A identificação da bota da fisioterapia inclui:',
         o:['Data e nome do funcionário','Apenas a cor','O nome do médico','Nada'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-63', code:'POP-CME-63', version:'1.1', emission:'15/07/2019',
      title:'Reprocessamento dos afastadores cirúrgicos',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O afastador é um equipamento cirúrgico <b>não cortante</b> que mantém a exposição do campo cirúrgico (tipos: Farabeuf, Doyen, Finochietto, Weitlaner, Balfour, Gosset).'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular e abrir, pré-limpeza, lavar ultrassonicamente (canulados nos bicos de jato), enxaguar, secar e <b>lubrificar as superfícies de atrito</b>.',
          'Empacotar com SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Evitar que a água seque nos instrumentais, pois pode causar manchas.'
        ]}
      ],
      pool:[
        {q:'O afastador cirúrgico é um instrumento:',
         o:['Não cortante, que mantém a exposição do campo','Cortante','De aspiração','De sutura'],a:0,d:2},
        {q:'Os afastadores cirúrgicos são esterilizados por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Após a inspeção, aplica-se nos afastadores:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Talco'],a:0,d:2},
        {q:'É um tipo de afastador cirúrgico:',
         o:['Farabeuf','Kelly','Adson','Cheron'],a:0,d:2},
        {q:'Deixar a água secar nos afastadores pode causar:',
         o:['Manchas','Esterilidade','Lubrificação','Brilho'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-64', code:'POP-CME-64', version:'1.1', emission:'27/05/2019',
      title:'Montagem da caixa cirúrgica de torácica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa cirúrgica de torácica (<b>72 peças</b>): cabos de bisturi, pinças variadas (anatômicas, DeBakey, Russa, Cushing, Allis, Duval, Collin, Kocher, Mixter, Kelly, Mosquito, Backhaus), porta-agulhas, tesouras e clamps Mayo.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar <b>fita teste Classe V</b> no interior, empacotar em SMS de 1,50×1,50 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: cabo cor azul.'
        ]}
      ],
      pool:[
        {q:'A caixa cirúrgica de torácica é composta por:',
         o:['72 peças','7 peças','200 peças','12 peças'],a:0,d:2},
        {q:'A caixa de torácica é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa de torácica é por:',
         o:['Cabo cor azul','Cabo cor verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'No interior da caixa de torácica coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem da caixa de torácica é SMS de:',
         o:['1,50×1,50 m','50×50 cm','10×10 cm','75×75 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-65', code:'POP-CME-65', version:'1.1', emission:'09/04/2019',
      title:'Montagem da caixa de simpatectomia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Montar a caixa para simpatectomia (<b>49 peças</b>) — remoção cirúrgica do nervo simpático para tratamento da hiperidrose (sudorese excessiva) nas mãos e axilas.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: cabo cor lilás.'
        ]}
      ],
      pool:[
        {q:'A simpatectomia é indicada para o tratamento da:',
         o:['Hiperidrose (sudorese excessiva)','Pneumonia','Hipertensão','Fratura'],a:0,d:3},
        {q:'A caixa de simpatectomia é composta por:',
         o:['49 peças','5 peças','200 peças','10 peças'],a:0,d:2},
        {q:'A caixa de simpatectomia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa de simpatectomia é por:',
         o:['Cabo cor lilás','Cabo cor verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'A simpatectomia consiste na remoção do:',
         o:['Nervo simpático','Apêndice','Pulmão','Rim'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-66', code:'POP-CME-66', version:'1.1', emission:'31/10/2019',
      title:'Montagem da caixa vascular grande',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa para cirurgia vascular grande (<b>51 peças</b>): porta-agulhas, tesouras Dietrich, pinças vasculares (Reynald, DeBakey, Satinsky, Semb, Potts, Lambert Kay), clamps angulados e de Diethrich/Glover.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,50×1,50 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: cabo cor vermelho.'
        ]}
      ],
      pool:[
        {q:'A caixa vascular grande é composta por:',
         o:['51 peças','5 peças','200 peças','15 peças'],a:0,d:2},
        {q:'A caixa vascular grande é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa vascular grande é por:',
         o:['Cabo cor vermelho','Cabo cor verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'A embalagem da caixa vascular grande é SMS de:',
         o:['1,50×1,50 m','50×50 cm','10×10 cm','75×75 cm'],a:0,d:2},
        {q:'No interior da caixa vascular grande coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-67', code:'POP-CME-67', version:'1.1', emission:'23/06/2021',
      title:'Montagem da caixa de mediastinoscopia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Montar a caixa para mediastinoscopia (<b>44 peças</b>) — avaliação dos linfonodos mediastinais em portadores de câncer de pulmão candidatos a cirurgia. Inclui ópticas, lâminas de mediastino, cabo óptico e válvula aspirador/irrigador.'
        ]},
        {n:2,h:'Confecção',items:[
          'Desarticular e abrir, limpar ultrassonicamente, <b>lubrificar</b>, colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b>. Identificação: fita laranja + lilás.'
        ]}
      ],
      pool:[
        {q:'A mediastinoscopia é usada principalmente para avaliar:',
         o:['Linfonodos mediastinais (câncer de pulmão)','A bexiga','As articulações','A pele'],a:0,d:3},
        {q:'A caixa de mediastinoscopia é composta por:',
         o:['44 peças','4 peças','100 peças','10 peças'],a:0,d:2},
        {q:'A caixa de mediastinoscopia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa de mediastinoscopia é:',
         o:['Fita laranja + lilás','Cabo verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'A mediastinoscopia pode também identificar:',
         o:['Sarcoidose e tuberculose','Catarata','Apendicite','Fratura'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-68', code:'POP-CME-68', version:'1.1', emission:'23/06/2021',
      title:'Montagem da caixa de afastadores',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa de afastadores (<b>11 peças</b>): Langenbeck, Volkmann (vários), Mayo-Adams, Weitlaner e Jansen.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em TNT de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]}
      ],
      pool:[
        {q:'A caixa de afastadores é composta por:',
         o:['11 peças','50 peças','100 peças','3 peças'],a:0,d:2},
        {q:'A caixa de afastadores é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'É um tipo de afastador presente na caixa:',
         o:['Langenbeck','Kelly','Adson','Cheron'],a:0,d:2},
        {q:'No interior da caixa de afastadores coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem da caixa de afastadores é de:',
         o:['TNT 1,20×1,20 m','Saco plástico','Papel jornal','Caixa de papelão'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-69', code:'POP-CME-69', version:'1.1', emission:'26/07/2019',
      title:'Montagem da caixa de material pesado',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa de material pesado (<b>25 peças</b>) para cirurgias que necessitam de instrumentos pesados: faca de esterno, martelo cirúrgico, alicates, cisalha, ruginas, goivas, curetas, formão e osteótomos.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]}
      ],
      pool:[
        {q:'A caixa de material pesado é composta por:',
         o:['25 peças','5 peças','100 peças','71 peças'],a:0,d:2},
        {q:'A caixa de material pesado contém, entre outros:',
         o:['Martelo cirúrgico, goivas e osteótomos','Apenas gazes','Sondas','Máscaras de O₂'],a:0,d:2},
        {q:'A caixa de material pesado é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'No interior da caixa de material pesado coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A caixa de material pesado é usada em cirurgias que necessitam de:',
         o:['Instrumentos pesados (ósseos)','Apenas suturas','Pequenos curativos','Aspiração'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-70', code:'POP-CME-70', version:'1.1', emission:'27/05/2019',
      title:'Montagem da caixa de material longo',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa de material longo (<b>21 peças</b>): pinças anatômicas e DeBakey grandes, porta-agulhas, tesouras grandes, pinças Russa, Duval, Allis, Mixter e clamp vascular.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,50×1,50 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar.'
        ]}
      ],
      pool:[
        {q:'A caixa de material longo é composta por:',
         o:['21 peças','2 peças','100 peças','71 peças'],a:0,d:2},
        {q:'A caixa de material longo é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'No interior da caixa de material longo coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem da caixa de material longo é SMS de:',
         o:['1,50×1,50 m','50×50 cm','10×10 cm','75×75 cm'],a:0,d:1},
        {q:'A caixa de material longo contém instrumentais de tamanho:',
         o:['Grande/longo','Apenas pequeno','Mínimo','Descartável'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-71', code:'POP-CME-71', version:'1.1', emission:'23/06/2021',
      title:'Montagem da caixa vascular média',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa para cirurgia vascular média (<b>36 peças</b>): porta-agulhas, tesouras Dietrich, pinças vasculares (DeBakey, Cooley, Satinsky, Semb) e diversos clamps angulados, Glover e bulldog.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita branca.'
        ]}
      ],
      pool:[
        {q:'A caixa vascular média é composta por:',
         o:['36 peças','3 peças','100 peças','51 peças'],a:0,d:2},
        {q:'A caixa vascular média é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa vascular média é:',
         o:['Fita branca','Cabo vermelho','Fita amarela','Selo preto'],a:0,d:2},
        {q:'No interior da caixa vascular média coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2},
        {q:'A embalagem da caixa vascular média é SMS de:',
         o:['1,20×1,20 m','50×50 cm','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-72', code:'POP-CME-72', version:'1.1', emission:'28/06/2019',
      title:'Reprocessamento da garrafa térmica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A garrafa térmica é um material usado em videocirurgia.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular/abrir a garrafa, pré-limpeza, lavar manualmente em detergente enzimático, enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Esterilizar com a <b>tampa aberta</b>.'
        ]}
      ],
      pool:[
        {q:'A garrafa térmica é usada em:',
         o:['Videocirurgia','Nebulização','Aspiração','Punção lombar'],a:0,d:2},
        {q:'A garrafa térmica é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Ao esterilizar a garrafa térmica, ela deve estar com a tampa:',
         o:['Aberta','Fechada','Lacrada','Removida e descartada'],a:0,d:3},
        {q:'A lavagem da garrafa térmica é feita:',
         o:['Manualmente em detergente enzimático','Na autoclave','Por imersão em formol','A seco'],a:0,d:2},
        {q:'Antes da lavagem, a garrafa térmica deve ser:',
         o:['Desarticulada/aberta','Esterilizada','Empacotada','Pintada'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-73', code:'POP-CME-73', version:'1.1', emission:'09/04/2019',
      title:'Reprocessamento do cabo óptico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O cabo óptico conduz a luz de uma fonte até o laparoscópio introduzido no corpo do paciente, por meio de feixes de fibras ópticas.'
        ]},
        {n:2,h:'Execução',items:[
          'Lavar ultrassonicamente, enxaguar, secar com pano branco, inspecionar, empacotar em SMS (<b>pacote duplo</b>) e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Cuidado especial com o material de vídeo: <b>não dobrar e não bater</b>.'
        ]}
      ],
      pool:[
        {q:'O cabo óptico tem a função de:',
         o:['Conduzir a luz da fonte até o laparoscópio','Aspirar secreção','Cortar tecido','Medir pressão'],a:0,d:2},
        {q:'O cabo óptico é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O cabo óptico é empacotado em:',
         o:['SMS (pacote duplo)','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:2},
        {q:'Com o cabo óptico (material de vídeo), deve-se:',
         o:['Não dobrar e não bater','Enrolar firme','Bater para encaixar','Dobrar ao meio'],a:0,d:2},
        {q:'O cabo óptico conduz a luz por meio de:',
         o:['Feixes de fibras ópticas','Cabos elétricos','Água','Ar comprimido'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-74', code:'POP-CME-74', version:'1.1', emission:'16/04/2019',
      title:'Confecção do kit da plástica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar o kit da plástica (preenchimento facial): campo fenestrado fechado, pedaço de algodão e 10 folhas de gaze.'
        ]},
        {n:2,h:'Confecção',items:[
          'Confeccionar com o campo e a gaze, inspecionar, empacotar em SMS de 75×75 cm, selar com fita zebrada Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O kit da plástica é usado para:',
         o:['Preenchimento facial (cirurgia plástica)','Drenagem torácica','Punção lombar','Sondagem'],a:0,d:2},
        {q:'O kit da plástica é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O kit da plástica contém:',
         o:['Campo fenestrado, algodão e 10 folhas de gaze','Instrumentais pesados','Sondas','Máscaras'],a:0,d:2},
        {q:'A embalagem do kit da plástica é SMS de:',
         o:['75×75 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:2},
        {q:'O kit da plástica é selado com:',
         o:['Fita zebrada Classe I','Cola','Grampos','Barbante'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-75', code:'POP-CME-75', version:'1.1', emission:'09/04/2019',
      title:'Montagem da caixa de trocater',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O trocater é um instrumento para penetrar na cavidade abdominal/torácica <b>sem cortar os músculos</b>. Há caixas de 5 mm e de 10 mm (com bainhas e trocateres de pontas cônica e piramidal).'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 75×75 cm, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O trocater serve para:',
         o:['Penetrar na cavidade abdominal/torácica sem cortar músculos','Aspirar secreção','Suturar','Medir pressão'],a:0,d:3},
        {q:'As caixas de trocater são organizadas por diâmetro de:',
         o:['5 mm e 10 mm','1 mm e 2 mm','50 mm','Único tamanho'],a:0,d:2},
        {q:'A caixa de trocater é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'As pontas dos trocateres podem ser:',
         o:['Cônica e piramidal','Quadrada e oval','Reta apenas','Sem ponta'],a:0,d:2},
        {q:'A embalagem da caixa de trocater é SMS de:',
         o:['75×75 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-76', code:'POP-CME-76', version:'1.1', emission:'09/04/2019',
      title:'Limpeza do sistema de Bain',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O sistema de Bain é usado na administração de <b>anestesia inalatória</b> por respiração controlada manual.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com pano e ar comprimido.',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O sistema de Bain é usado na administração de:',
         o:['Anestesia inalatória','Soro','Antibiótico','Nutrição parenteral'],a:0,d:2},
        {q:'O sistema de Bain é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Antes da lavagem, o sistema de Bain deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Pintado'],a:0,d:1},
        {q:'A administração de anestesia no sistema de Bain é por:',
         o:['Respiração controlada manual','Via oral','Via intramuscular','Via retal'],a:0,d:2},
        {q:'A secagem do sistema de Bain é feita com:',
         o:['Pano branco e ar comprimido','Secadora quente','Ao sol','Naturalmente por dias'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-77', code:'POP-CME-77', version:'1.1', emission:'09/04/2019',
      title:'Cuidados com materiais de pacientes com infecção por príons',
      executantes:'Colaboradores da CME e das unidades de internação',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Orientar o cuidado com materiais usados em pacientes com infecção por <b>príons</b> — agentes infecciosos proteicos sem ácido nucleico, responsáveis por encefalopatias espongiformes, sem cura e sempre fatais.'
        ]},
        {n:2,h:'Na unidade e na CME',items:[
          'Na unidade: o material fica no quarto, em caixa plástica umedecida com solução enzimática (trocada a cada 24 h pela CME) e é recolhido 1×/dia pela manhã.',
          'Na CME: paramentar-se com EPIs, lavar manualmente na própria caixa do paciente, empacotar em TNT com fita teste interna Classe V e esterilizar em <b>ciclo especial: 134 °C por 18 minutos</b>.'
        ]},
        {n:3,h:'Destino dos materiais',items:[
          '<b>Reprocessar na CME:</b> apenas instrumentais NÃO expostos a tecidos de alta infectividade.',
          '<b>Incinerar</b> (descartar em saco vermelho): descartáveis, termossensíveis e tudo exposto a tecidos de alta infectividade (cerebral, líquor, retina e nervo óptico).'
        ]}
      ],
      pool:[
        {q:'Os príons são agentes infecciosos compostos por:',
         o:['Proteínas com forma aberrante (sem ácido nucleico)','Vírus','Bactérias','Fungos'],a:0,d:3},
        {q:'O ciclo especial de esterilização para material de paciente com príons é:',
         o:['134 °C por 18 minutos','134 °C por 4 minutos','121 °C por 30 minutos','Não é esterilizado'],a:0,d:3},
        {q:'Materiais expostos a tecidos de alta infectividade (cerebral, líquor, retina) devem ser:',
         o:['Incinerados (descartados em saco vermelho)','Reprocessados na CME','Reutilizados sem processar','Lavados com água'],a:0,d:3},
        {q:'Na unidade, o material do paciente com príons fica:',
         o:['Em caixa plástica umedecida com solução enzimática','No lixo comum','Sobre a bancada','Junto aos demais'],a:0,d:2},
        {q:'As doenças priônicas são:',
         o:['Sem cura e sempre fatais','Facilmente curáveis','Transmitidas por mosquito','Benignas'],a:0,d:3}
      ]
    },

    {
      id:'pop-cme-78', code:'POP-CME-78', version:'1.1', emission:'29/07/2019',
      title:'Limpeza do nebulizador da fibrose cística',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O nebulizador reusável da fibrose cística possui válvulas unilaterais que garantem maior aproveitamento do medicamento, tornando o tratamento mais eficaz.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar manualmente (canulado na ultrassônica no fluxo intermitente), enxaguar e secar; <b>desinfecção em hipoclorito de sódio 0,5% por 30 minutos</b> (instilar no lúmen), enxaguar e secar.',
          'Inspecionar, empacotar em saco plástico (data, profissional e nome do paciente) e armazenar.'
        ]},
        {n:3,h:'Observação',items:[
          'Entregar na CME até as 10h (manhã) e 15h (tarde).'
        ]}
      ],
      pool:[
        {q:'A desinfecção do nebulizador da fibrose cística é feita por imersão em:',
         o:['Hipoclorito de sódio 0,5% por 30 minutos','Ácido peracético','Álcool 70%','Formol'],a:0,d:3},
        {q:'O nebulizador da fibrose cística possui válvulas unilaterais que:',
         o:['Garantem maior aproveitamento do medicamento','Aquecem o ar','Medem a pressão','Filtram bactérias'],a:0,d:2},
        {q:'A identificação do nebulizador inclui:',
         o:['Data, profissional e nome do paciente','Apenas a cor','O nome do médico','Nada'],a:0,d:1},
        {q:'O tempo de desinfecção do nebulizador em hipoclorito é de:',
         o:['30 minutos','5 minutos','2 horas','1 minuto'],a:0,d:2},
        {q:'O nebulizador da fibrose cística é um material:',
         o:['Reusável','De uso único','Descartável sempre','Não processável'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-79', code:'POP-CME-79', version:'1.1', emission:'15/07/2019',
      title:'Reprocessamento das pinças de vídeo avulsas',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Pinças extras para auxiliar em videocirurgia.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular e abrir, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente (canulados nos bicos de jato), enxaguar, secar e <b>lubrificar as superfícies de atrito</b>.',
          'Empacotar com SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'As pinças de vídeo avulsas são usadas em:',
         o:['Videocirurgia','Curativos','Punção lombar','Nebulização'],a:0,d:2},
        {q:'As pinças de vídeo avulsas são esterilizadas por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Após a inspeção, aplica-se nas pinças:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Talco'],a:0,d:2},
        {q:'Antes da limpeza, as pinças devem ser:',
         o:['Desarticuladas e abertas','Mantidas fechadas','Amarradas','Descartadas'],a:0,d:2},
        {q:'A embalagem das pinças de vídeo avulsas é:',
         o:['SMS','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-80', code:'POP-CME-80', version:'1.1', emission:'30/06/2016',
      title:'Reprocessamento das conexões "T" e "Y"',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Conexões tipo "T" e "Y" usadas na assistência respiratória dos pacientes.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com ar comprimido e secadora.',
          'Inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'As conexões "T" e "Y" são usadas na:',
         o:['Assistência respiratória','Punção lombar','Cirurgia óssea','Coleta de sangue'],a:0,d:2},
        {q:'As conexões "T" e "Y" são esterilizadas por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A secagem das conexões é feita com:',
         o:['Ar comprimido e secadora','Ao sol','Papel toalha','Naturalmente por dias'],a:0,d:1},
        {q:'A embalagem das conexões "T" e "Y" é:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1},
        {q:'Antes da lavagem, deve-se atentar à escovação dos:',
         o:['Lúmens','Cabos','Vidros','Pesos'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-81', code:'POP-CME-81', version:'1.1', emission:'22/12/2009',
      title:'Confecção do pacote de curativo',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar o pacote de curativo: 20 compressas de gaze, pinça Kelly curva-16 e pinça anatômica-16.'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em SMS de 50×50 cm, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita amarelo listrado.'
        ]}
      ],
      pool:[
        {q:'O pacote de curativo contém:',
         o:['20 gazes, pinça Kelly e pinça anatômica','Sonda vesical','Máscara de O₂','Frasco de soro'],a:0,d:2},
        {q:'O pacote de curativo é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A embalagem do pacote de curativo é SMS de:',
         o:['50×50 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:2},
        {q:'A fita de identificação do pacote de curativo é:',
         o:['Amarelo listrado','Verde','Vermelha','Lilás'],a:0,d:2},
        {q:'O número de gazes no pacote de curativo é:',
         o:['20','2','100','5'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-82', code:'POP-CME-82', version:'1.1', emission:'22/12/2009',
      title:'Confecção do pacote de higiene oral',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Confeccionar o pacote de higiene oral: 20 compressas de gaze, pinça Kelly reta-16 e abaixador de língua-16.'
        ]},
        {n:2,h:'Confecção',items:[
          'Empacotar em SMS de 50×50 cm, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita azul.'
        ]}
      ],
      pool:[
        {q:'O pacote de higiene oral contém, entre outros:',
         o:['Abaixador de língua e pinça Kelly reta','Sonda vesical','Trocater','Máscara'],a:0,d:2},
        {q:'O pacote de higiene oral é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A fita de identificação do pacote de higiene oral é:',
         o:['Azul','Amarelo listrado','Verde','Vermelha'],a:0,d:2},
        {q:'A embalagem do pacote de higiene oral é SMS de:',
         o:['50×50 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:2},
        {q:'O número de gazes no pacote de higiene oral é:',
         o:['20','2','100','5'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-83', code:'POP-CME-83', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento das espátulas',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'As espátulas (de madeira) são usadas como auxiliares em procedimentos médicos e de enfermagem.'
        ]},
        {n:2,h:'Execução',items:[
          'Inspecionar, encaminhar o pacote fechado para fracionamento na empresa reprocessadora e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Material de <b>uso único</b> — descartar após o uso.'
        ]}
      ],
      pool:[
        {q:'As espátulas (de madeira) são material de:',
         o:['Uso único (descartar após o uso)','Reuso permanente','Reuso ilimitado','Esterilização em autoclave'],a:0,d:3},
        {q:'As espátulas são esterilizadas por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'As espátulas são usadas como:',
         o:['Auxiliares em procedimentos médicos e de enfermagem','Instrumentos de corte','Material de sutura','Aspiração'],a:0,d:1},
        {q:'O pacote de espátulas é encaminhado para fracionamento à:',
         o:['Empresa reprocessadora','Farmácia','Lavanderia','Almoxarifado'],a:0,d:2},
        {q:'Após o uso, as espátulas devem ser:',
         o:['Descartadas','Relavadas','Reesterilizadas','Guardadas'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-85', code:'POP-CME-85', version:'1.1', emission:'29/01/2021',
      title:'Limpeza da geladeira',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Realizar o descongelamento e a limpeza interna e externa da geladeira (mensalmente).'
        ]},
        {n:2,h:'Execução',items:[
          'Desligar da rede elétrica, retirar os materiais para caixa de isopor com gelo reutilizável e, após o descongelamento, limpar com água e detergente neutro.',
          'Secar com compressa limpa, friccionar com desinfetante de superfície e <b>religar/recolocar os materiais após 1 hora</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Realizar mensalmente, no dia 10.'
        ]}
      ],
      pool:[
        {q:'A limpeza da geladeira é realizada:',
         o:['Mensalmente, no dia 10','Diariamente','A cada hora','Anualmente'],a:0,d:2},
        {q:'Antes de limpar a geladeira, os materiais são:',
         o:['Retirados para caixa de isopor com gelo reutilizável','Descartados','Esterilizados','Deixados dentro'],a:0,d:2},
        {q:'Após a limpeza, deve-se religar e recolocar os materiais após:',
         o:['1 hora','5 minutos','1 dia','Imediatamente'],a:0,d:2},
        {q:'A limpeza interna da geladeira é feita com:',
         o:['Água e detergente neutro','Hipoclorito puro','Ácido peracético','Apenas água'],a:0,d:2},
        {q:'Antes de iniciar a limpeza, a geladeira deve ser:',
         o:['Desligada da rede elétrica','Mantida ligada','Congelada','Aquecida'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-86', code:'POP-CME-86', version:'1.1', emission:'15/07/2019',
      title:'Limpeza da lavadora ultrassônica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Limpar a lavadora ultrassônica (máquina de limpeza automatizada de instrumentais).'
        ]},
        {n:2,h:'Execução',items:[
          'Desligar da rede elétrica, friccionar a câmara interna e a parte externa com compressa embebida na solução própria (<b>200 ml de vaselina + 800 ml de álcool</b>) e religar.'
        ]},
        {n:3,h:'Observação',items:[
          'Periodicidade: <b>diariamente</b>, no final do plantão.'
        ]}
      ],
      pool:[
        {q:'A limpeza da lavadora ultrassônica é feita:',
         o:['Diariamente, no final do plantão','Mensalmente','Anualmente','A cada ciclo'],a:0,d:2},
        {q:'A solução para limpeza da lavadora ultrassônica é:',
         o:['200 ml de vaselina + 800 ml de álcool','Água e sabão','Hipoclorito puro','Ácido peracético'],a:0,d:3},
        {q:'Antes de limpar a lavadora ultrassônica, deve-se:',
         o:['Desligá-la da rede elétrica','Mantê-la ligada','Enchê-la de água','Aquecê-la'],a:0,d:1},
        {q:'A lavadora ultrassônica serve para:',
         o:['Limpeza automatizada de instrumentais','Esterilização','Secagem','Armazenamento'],a:0,d:1},
        {q:'A limpeza da câmara interna é feita por:',
         o:['Fricção com compressa embebida na solução','Imersão total','Jato de água quente','Ar comprimido'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-87', code:'POP-CME-87', version:'1.1', emission:'10/04/2019',
      title:'Limpeza dos equipamentos da CME',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Limpar os equipamentos da CME: secadora, desumidificador, pistola de ar comprimido, lupa, etiquetadora, incubadora biológica, telefones e CPU.'
        ]},
        {n:2,h:'Execução',items:[
          'Desligar o equipamento da rede elétrica, limpar e desinfetar com compressa umedecida em <b>álcool 70%</b> e religar.'
        ]},
        {n:3,h:'Observação',items:[
          'Periodicidade: <b>semanalmente, todo domingo</b>, no final do plantão.'
        ]}
      ],
      pool:[
        {q:'A limpeza dos equipamentos da CME é feita:',
         o:['Semanalmente, todo domingo','Diariamente','Mensalmente','Anualmente'],a:0,d:2},
        {q:'A desinfecção dos equipamentos é feita com:',
         o:['Álcool 70%','Hipoclorito puro','Água sanitária','Ácido peracético'],a:0,d:2},
        {q:'Antes de limpar um equipamento, deve-se:',
         o:['Desligá-lo da rede elétrica','Mantê-lo ligado','Molhá-lo','Aquecê-lo'],a:0,d:1},
        {q:'É um equipamento da CME a ser limpo:',
         o:['Secadora / incubadora biológica','Autoclave do bloco','Bisturi','Sonda'],a:0,d:1},
        {q:'A limpeza dos equipamentos ocorre no:',
         o:['Final do plantão de domingo','Início da semana','Meio do dia','Feriado'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-88', code:'POP-CME-88', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento do Hook + cabo',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O Hook é um eletrodo monopolar cirúrgico usado em cirurgias laparoscópicas.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, empacotar em caixa protegida e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O Hook é um eletrodo monopolar usado em:',
         o:['Cirurgias laparoscópicas','Punção lombar','Nebulização','Curativos'],a:0,d:2},
        {q:'O Hook + cabo é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O Hook + cabo é empacotado em:',
         o:['Caixa protegida','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:1},
        {q:'Antes da lavagem, o Hook deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Pintado'],a:0,d:1},
        {q:'O Hook é um eletrodo do tipo:',
         o:['Monopolar','Bipolar','Térmico','Óptico'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-89', code:'POP-CME-89', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento de frascos de exame laboratorial e patológico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Frascos utilizados para a coleta de exames laboratoriais e patológicos.'
        ]},
        {n:2,h:'Execução',items:[
          'Encaminhar o pacote fechado para fracionamento na empresa reprocessadora e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Material de <b>uso único</b> — descartar após o uso.'
        ]}
      ],
      pool:[
        {q:'Os frascos de exame laboratorial/patológico são material de:',
         o:['Uso único (descartar após o uso)','Reuso permanente','Reuso ilimitado','Autoclave'],a:0,d:3},
        {q:'Os frascos de exame são esterilizados por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Os frascos são usados para:',
         o:['Coleta de exames laboratoriais e patológicos','Nebulização','Aspiração','Sutura'],a:0,d:2},
        {q:'O pacote de frascos é encaminhado para fracionamento à:',
         o:['Empresa reprocessadora','Farmácia','Lavanderia','Almoxarifado'],a:0,d:2},
        {q:'Após o uso, os frascos de exame devem ser:',
         o:['Descartados','Relavados','Reesterilizados','Guardados'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-90', code:'POP-CME-90', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento do talco do centro cirúrgico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O talco (silicato de magnésio 100% pó) é usado no procedimento de <b>pleurodese</b>, como agente esclerosante.'
        ]},
        {n:2,h:'Execução',items:[
          'Inspecionar, encaminhar o pacote fechado para fracionamento na empresa reprocessadora e <b>esterilizar em óxido de etileno</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Material de <b>uso único</b> — descartar após o uso; fracionar em pacotes de <b>30 gramas</b>.'
        ]}
      ],
      pool:[
        {q:'O talco do centro cirúrgico é usado no procedimento de:',
         o:['Pleurodese (agente esclerosante)','Nebulização','Sutura','Punção lombar'],a:0,d:3},
        {q:'O talco do CC é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O talco do CC é fracionado em pacotes de:',
         o:['30 gramas','1 kg','5 gramas','100 gramas'],a:0,d:3},
        {q:'O talco do CC é material de:',
         o:['Uso único (descartar após o uso)','Reuso permanente','Reuso ilimitado','Autoclave'],a:0,d:2},
        {q:'O talco usado é composto de:',
         o:['Silicato de magnésio 100% pó','Açúcar','Amido','Gesso'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-91', code:'POP-CME-91', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento da aspiração contínua',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Material que mantém a pressão negativa no sistema coletor de drenagem pleural ou mediastinal, usado no pós-operatório de cirurgia torácica ou cardíaca.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar (parte interna com ar comprimido).',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'A aspiração contínua mantém a pressão negativa no sistema de drenagem:',
         o:['Pleural ou mediastinal','Vesical','Gástrica','Venosa'],a:0,d:2},
        {q:'A aspiração contínua é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A aspiração contínua é usada no pós-operatório de cirurgia:',
         o:['Torácica ou cardíaca','Ortopédica','Oftalmológica','Plástica'],a:0,d:2},
        {q:'Antes da lavagem, o material deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Pintado'],a:0,d:1},
        {q:'A secagem da parte interna é feita com:',
         o:['Ar comprimido','Secadora quente','Pano úmido','Ao sol'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-92', code:'POP-CME-92', version:'1.1', emission:'21/08/2018',
      title:'Montagem da bandeja de herniorrafia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Montar a bandeja para herniorrafia — cirurgia que corrige o defeito na musculatura/aponeurose que permite o aparecimento da hérnia. Composta por bandeja, afastadores, cabo de bisturi, porta-agulha, tesouras e pinças variadas.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em TNT de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita vermelho/preto listrado.'
        ]}
      ],
      pool:[
        {q:'A herniorrafia corrige:',
         o:['O defeito na musculatura/aponeurose que permite a hérnia','Uma fratura','Uma catarata','Uma queimadura'],a:0,d:3},
        {q:'A bandeja de herniorrafia é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da bandeja de herniorrafia é:',
         o:['Fita vermelho/preto listrado','Verde','Amarela','Cinza'],a:0,d:2},
        {q:'A bandeja de herniorrafia é empacotada em:',
         o:['TNT 1,20×1,20 m','Saco de lixo','Papel jornal','Caixa de papelão'],a:0,d:1},
        {q:'A hérnia surge por um defeito na:',
         o:['Musculatura/aponeurose','Pele','Veia','Articulação'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-93', code:'POP-CME-93', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento do aspirador-irrigador de laparoscopia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O aspirador-irrigador é usado em cirurgia para irrigar (jogar soro) e aspirar (retirar secreção). Composto por válvula trompete, cânulas fenestradas de 5 e 10 mm.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente (cânula no jato intermitente), enxaguar e secar; colocar fita teste Classe V no interior, empacotar em SMS (duplo) e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O aspirador-irrigador de laparoscopia serve para:',
         o:['Irrigar (jogar soro) e aspirar (retirar secreção)','Cortar tecido','Medir pressão','Iluminar'],a:0,d:2},
        {q:'O aspirador-irrigador de laparoscopia é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'As cânulas fenestradas do aspirador-irrigador são de:',
         o:['5 e 10 mm','1 e 2 mm','50 mm','Tamanho único'],a:0,d:2},
        {q:'O aspirador-irrigador é empacotado em:',
         o:['SMS (duplo)','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:1},
        {q:'No interior do pacote do aspirador-irrigador coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-94', code:'POP-CME-94', version:'1.1', emission:'12/04/2019',
      title:'Confecção da torunda',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A torunda é utilizada nos procedimentos cirúrgicos.'
        ]},
        {n:2,h:'Confecção',items:[
          'Confeccionar com gaze, algodão e fio cirúrgico uma bolinha de aproximadamente <b>1,5 cm de diâmetro</b>; empacotar <b>4 unidades</b> em SMS (duplo), esterilizar em autoclave a 134 °C, selar com fita Classe I e armazenar.'
        ]}
      ],
      pool:[
        {q:'A torunda é uma bolinha confeccionada com:',
         o:['Gaze, algodão e fio cirúrgico','Apenas plástico','Metal','Madeira'],a:0,d:2},
        {q:'O diâmetro aproximado da torunda é de:',
         o:['1,5 cm','10 cm','0,1 cm','5 cm'],a:0,d:2},
        {q:'A torunda é empacotada em quantidade de:',
         o:['4 unidades','1 unidade','100 unidades','10 unidades'],a:0,d:2},
        {q:'A torunda é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A torunda é utilizada em:',
         o:['Procedimentos cirúrgicos','Nebulização','Punção lombar','Coleta de sangue'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-95', code:'POP-CME-95', version:'1.1', emission:'15/04/2019',
      title:'Reprocessamento da ponteira do borrifador',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A ponteira do borrifador é utilizada no anestésico spray.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar e secar; <b>desinfecção em hipoclorito de sódio 0,5% por 30 minutos</b>, enxaguar e secar.',
          'Inspecionar, empacotar em saco plástico (data e profissional) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A ponteira do borrifador é utilizada no:',
         o:['Anestésico spray','Soro','Antibiótico EV','Curativo'],a:0,d:2},
        {q:'A desinfecção da ponteira do borrifador é feita em:',
         o:['Hipoclorito de sódio 0,5% por 30 minutos','Ácido peracético','Álcool 70%','Formol'],a:0,d:3},
        {q:'A identificação da ponteira do borrifador inclui:',
         o:['Data e profissional','Apenas a cor','O nome do paciente','Nada'],a:0,d:1},
        {q:'O tempo de desinfecção da ponteira em hipoclorito é de:',
         o:['30 minutos','5 minutos','2 horas','1 minuto'],a:0,d:2},
        {q:'A secagem inicial da ponteira é feita com:',
         o:['Ar comprimido','Secadora quente','Pano úmido','Ao sol'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-96', code:'POP-CME-96', version:'1.1', emission:'15/04/2019',
      title:'Reprocessamento da oliva do otoscópio',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A oliva/espéculo é usada no otoscópio, equipamento para observar o interior da orelha.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar e secar; <b>desinfecção em hipoclorito de sódio 0,5% por 30 minutos</b>, enxaguar e secar.',
          'Inspecionar, empacotar em saco plástico (data e profissional) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A oliva é usada no:',
         o:['Otoscópio (observar o interior da orelha)','Laringoscópio','Endoscópio','Microscópio'],a:0,d:2},
        {q:'A desinfecção da oliva do otoscópio é feita em:',
         o:['Hipoclorito de sódio 0,5% por 30 minutos','Ácido peracético','Álcool 70%','Formol'],a:0,d:3},
        {q:'O otoscópio é usado para observar:',
         o:['O interior da orelha','A garganta','O olho','O abdome'],a:0,d:2},
        {q:'A identificação da oliva inclui:',
         o:['Data e profissional','Apenas a cor','O nome do médico','Nada'],a:0,d:1},
        {q:'O tempo de desinfecção da oliva em hipoclorito é de:',
         o:['30 minutos','5 minutos','2 horas','1 minuto'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-97', code:'POP-CME-97', version:'1.1', emission:'12/04/2019',
      title:'Reprocessamento do punch dermatológico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O punch é um instrumental cirúrgico usado na coleta de material para <b>biópsia de pele</b>.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar, secar e inspecionar.',
          'Empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O punch dermatológico é usado para:',
         o:['Biópsia de pele','Aspiração','Sutura','Nebulização'],a:0,d:2},
        {q:'O punch é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O punch é um instrumental usado na coleta de:',
         o:['Material para biópsia','Sangue venoso','Urina','Líquor'],a:0,d:2},
        {q:'Deixar a água secar no punch pode causar:',
         o:['Manchas','Esterilidade','Brilho','Lubrificação'],a:0,d:2},
        {q:'O punch é empacotado em:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-98', code:'POP-CME-98', version:'1.1', emission:'15/04/2019',
      title:'Reprocessamento do equipamento de esternotomia com bateria',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Equipamento (serra óssea) usado para a abertura do esterno (esternotomia).'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza e lavagem manual com enzimático e esponja macia, <b>evitando molhar os contatos da bateria</b> (a serra é escovada manualmente); enxaguar e secar.',
          'Colocar fita teste Classe V, empacotar com SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observações',items:[
          'A <b>bateria</b> é limpa por fricção com álcool 70% e identificada (data e profissional); serras extras são limpas e esterilizadas em óxido de etileno.'
        ]}
      ],
      pool:[
        {q:'O equipamento de esternotomia é usado para:',
         o:['A abertura do esterno','Aspiração','Sutura','Nebulização'],a:0,d:2},
        {q:'Durante a lavagem, deve-se evitar molhar:',
         o:['Os contatos da bateria','A serra','O cabo','A embalagem'],a:0,d:3},
        {q:'A serra do equipamento de esternotomia é esterilizada por:',
         o:['Autoclave a 134 °C','Fervura','Imersão em formol','Não é esterilizada'],a:0,d:2},
        {q:'A bateria é limpa por:',
         o:['Fricção com álcool 70%','Imersão na ultrassônica','Autoclave','Água corrente'],a:0,d:3},
        {q:'As serras extras são esterilizadas em:',
         o:['Óxido de etileno','Autoclave a vapor','Hipoclorito','Não são esterilizadas'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-99', code:'POP-CME-99', version:'1.1', emission:'15/09/2014',
      title:'Reprocessamento de cubas, bandejas e caixas cirúrgicas',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Cubas (redondas e rim), bandejas e caixas usadas como auxiliares nos procedimentos de enfermagem e cirúrgicos.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar manualmente com solução enzimática e esponja macia, enxaguar e secar com pano limpo.',
          'Inspecionar, empacotar com SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Evitar que a água seque, pois pode causar manchas.'
        ]}
      ],
      pool:[
        {q:'As cubas, bandejas e caixas são esterilizadas por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A lavagem das cubas e bandejas é feita:',
         o:['Manualmente com solução enzimática e esponja macia','Na autoclave','Por imersão em formol','A seco'],a:0,d:2},
        {q:'Deixar a água secar nas cubas pode causar:',
         o:['Manchas','Esterilidade','Brilho','Lubrificação'],a:0,d:2},
        {q:'As cubas e bandejas são usadas como:',
         o:['Auxiliares nos procedimentos de enfermagem e cirúrgicos','Material de corte','Aspiração','Sutura'],a:0,d:1},
        {q:'A embalagem das cubas e bandejas é:',
         o:['SMS','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-100', code:'POP-CME-100', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento da manopla do foco cirúrgico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A manopla é um protetor estéril usado para a focalização do foco cirúrgico.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar, secar com pano e ar comprimido e inspecionar.',
          'Empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'A manopla do foco cirúrgico é:',
         o:['Um protetor estéril para focalização do foco','Uma serra','Uma pinça','Uma sonda'],a:0,d:2},
        {q:'A manopla do foco cirúrgico é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A manopla é usada para:',
         o:['Focalizar o foco cirúrgico','Aspirar secreção','Cortar tecido','Medir pressão'],a:0,d:2},
        {q:'A lavagem da manopla é feita:',
         o:['Ultrassonicamente','Por imersão em formol','A seco','Na autoclave'],a:0,d:1},
        {q:'A manopla é empacotada em:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-101', code:'POP-CME-101', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento do balão de anestesia de 5 litros',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O balão de reinalação (pulmão-teste) é um acessório usado para testar equipamentos de ventilação, aparelhos e circuitos de anestesia.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar manualmente em detergente enzimático, enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O balão de anestesia (reinalação) é usado para:',
         o:['Testar equipamentos e circuitos de anestesia/ventilação','Aspirar secreção','Coletar sangue','Medir glicemia'],a:0,d:2},
        {q:'O balão de anestesia é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A lavagem do balão de anestesia é feita:',
         o:['Manualmente em detergente enzimático','Na autoclave','Por imersão em hipoclorito','A seco'],a:0,d:2},
        {q:'O balão também é conhecido como:',
         o:['Pulmão-teste','Manguito','Cânula','Sonda'],a:0,d:2},
        {q:'O balão de anestesia é empacotado em:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-102', code:'POP-CME-102', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento da linha para capnografia',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A linha de capnografia é um tubo liso para amostra de gases, com conectores luer lock nas extremidades.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente (no bico de jato intermitente), enxaguar e secar com pano e ar comprimido.',
          'Inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'A linha de capnografia serve para:',
         o:['Amostra de gases','Infusão de soro','Aspiração de secreção','Coleta de sangue'],a:0,d:2},
        {q:'A linha de capnografia é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Os conectores das extremidades da linha de capnografia são do tipo:',
         o:['Luer lock','Rosca métrica','Encaixe rápido','Sem conector'],a:0,d:2},
        {q:'A lavagem da linha de capnografia é feita:',
         o:['Ultrassonicamente, no jato intermitente','Por imersão em formol','A seco','Na autoclave'],a:0,d:2},
        {q:'A linha de capnografia é empacotada em:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-103', code:'POP-CME-103', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento do guia de intubação',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O guia de intubação é utilizado para facilitar a intubação orotraqueal.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar e secar com pano branco e inspecionar.',
          'Empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'O guia de intubação serve para:',
         o:['Facilitar a intubação orotraqueal','Aspirar secreção','Medir pressão','Coletar sangue'],a:0,d:2},
        {q:'O guia de intubação é esterilizado por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A lavagem do guia de intubação é feita:',
         o:['Ultrassonicamente','Por imersão em formol','A seco','Na autoclave'],a:0,d:1},
        {q:'O guia de intubação auxilia na via:',
         o:['Orotraqueal','Urinária','Venosa','Digestiva'],a:0,d:2},
        {q:'O guia de intubação é empacotado em:',
         o:['Saco plástico','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-104', code:'POP-CME-104', version:'1.1', emission:'16/04/2019',
      title:'Confecção do tampão torácico',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O tampão torácico é utilizado nos procedimentos de pleurostomia.'
        ]},
        {n:2,h:'Confecção',items:[
          'Confeccionar com gaze em rolo, algodão e fio cirúrgico um rolinho de aproximadamente <b>35 cm</b> de comprimento; empacotar em SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O tampão torácico é utilizado em:',
         o:['Procedimentos de pleurostomia','Punção lombar','Sondagem','Nebulização'],a:0,d:2},
        {q:'O comprimento aproximado do tampão torácico é de:',
         o:['35 cm','5 cm','1 m','10 cm'],a:0,d:2},
        {q:'O tampão torácico é confeccionado com:',
         o:['Gaze em rolo, algodão e fio cirúrgico','Plástico','Metal','Madeira'],a:0,d:2},
        {q:'O tampão torácico é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'O tampão torácico é selado com:',
         o:['Fita zebrada Classe I','Cola','Grampos','Barbante'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-105', code:'POP-CME-105', version:'1.1', emission:'06/05/2019',
      title:'Ciclos da autoclave',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Padronizar os parâmetros de cada ciclo da autoclave a vapor, conforme a qualificação.'
        ]},
        {n:2,h:'Parâmetros dos ciclos',items:[
          '<b>Instrumentais</b> e <b>Tecido</b>: 134 °C por 5 min (tecido com secagem maior). <b>Sensível</b>: 121 °C por 21 min. <b>Prions</b>: 134 °C por 18 min.',
          '<b>Flash</b>: 134 °C por 5 min. <b>Bowie & Dick</b>: 134 °C por 3,5 min. <b>Leak Test</b>: 100 °C (teste de vácuo, sem material).'
        ]}
      ],
      pool:[
        {q:'O ciclo de instrumentais na autoclave opera a:',
         o:['134 °C por 5 minutos','100 °C por 1 hora','60 °C por 10 minutos','121 °C por 21 minutos'],a:0,d:2},
        {q:'O ciclo para materiais SENSÍVEIS opera a:',
         o:['121 °C por 21 minutos','134 °C por 5 minutos','134 °C por 18 minutos','100 °C'],a:0,d:3},
        {q:'O ciclo para material de PRIONS opera a:',
         o:['134 °C por 18 minutos','134 °C por 5 minutos','121 °C por 21 minutos','134 °C por 3,5 minutos'],a:0,d:3},
        {q:'O ciclo Bowie & Dick opera a:',
         o:['134 °C por 3,5 minutos','121 °C por 21 minutos','100 °C','60 °C'],a:0,d:3},
        {q:'A finalidade da padronização dos ciclos é:',
         o:['Garantir os parâmetros corretos conforme a qualificação','Acelerar o trabalho','Economizar energia','Reduzir a limpeza'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-106', code:'POP-CME-106', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento do xaxim (campo com bolsos)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O xaxim é o campo com bolsos usado pela instrumentadora para suporte de instrumentais durante o ato cirúrgico.'
        ]},
        {n:2,h:'Execução',items:[
          'Verificar a integridade e limpeza do campo, empacotar em SMS de 50×50 cm, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'O xaxim é um campo com bolsos usado para:',
         o:['Suporte de instrumentais pela instrumentadora','Cobrir o paciente','Aspirar secreção','Curativo'],a:0,d:2},
        {q:'O xaxim é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Antes de empacotar o xaxim, deve-se verificar:',
         o:['A integridade e a limpeza do campo','A cor','O peso','O fabricante'],a:0,d:2},
        {q:'A embalagem do xaxim é SMS de:',
         o:['50×50 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:1},
        {q:'O xaxim é utilizado durante o:',
         o:['Ato cirúrgico','Banho do paciente','Transporte','Exame de imagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-107', code:'POP-CME-107', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento da válvula exalatória do CPAP',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A válvula exalatória do CPAP é um conector reto (15×15 mm, em acrílico) para a exalação de CO₂ e o enriquecimento de oxigênio.'
        ]},
        {n:2,h:'Execução',items:[
          'Lavar ultrassonicamente, enxaguar, secar em secadora e inspecionar.',
          'Empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'A válvula exalatória do CPAP serve para:',
         o:['Exalação de CO₂ e enriquecimento de oxigênio','Aspirar secreção','Medir pressão','Coletar sangue'],a:0,d:2},
        {q:'A válvula exalatória do CPAP é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A válvula exalatória do CPAP é feita de:',
         o:['Acrílico','Aço inox','Borracha','Vidro'],a:0,d:1},
        {q:'A secagem da válvula exalatória é feita:',
         o:['Em secadora','Ao sol','Com papel toalha','Naturalmente por dias'],a:0,d:1},
        {q:'A válvula exalatória do CPAP é um conector de:',
         o:['15×15 mm','5×5 mm','30×30 mm','1×1 cm'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-108', code:'POP-CME-108', version:'1.1', emission:'16/04/2019',
      title:'Reprocessamento da pinça para tamponamento',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'Pinça anatômica grande (30 cm) usada no auxílio do processo de tamponamento do paciente.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar, secar com pano branco e inspecionar.',
          'Empacotar em SMS, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]}
      ],
      pool:[
        {q:'A pinça para tamponamento é usada no:',
         o:['Tamponamento do paciente','Curativo','Aspiração','Nebulização'],a:0,d:2},
        {q:'A pinça para tamponamento é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A pinça para tamponamento é do tipo:',
         o:['Anatômica grande (30 cm)','Mosquito','Adson','Cheron'],a:0,d:2},
        {q:'A lavagem da pinça para tamponamento é feita:',
         o:['Ultrassonicamente','Por imersão em formol','A seco','Na autoclave'],a:0,d:1},
        {q:'A pinça para tamponamento é empacotada em:',
         o:['SMS','Saco de lixo','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-109', code:'POP-CME-109', version:'1.1', emission:'16/04/2019',
      title:'Confecção da compressa cirúrgica',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A compressa cirúrgica é utilizada nos procedimentos cirúrgicos (tamanhos pequena e grande).'
        ]},
        {n:2,h:'Confecção',items:[
          'Inspecionar, empacotar <b>5 unidades</b> em SMS de 75×75 cm, selar com fita Classe I e <b>esterilizar em autoclave a 134 °C</b>.'
        ]},
        {n:3,h:'Observação',items:[
          'Material de <b>uso único</b> — não reprocessar.'
        ]}
      ],
      pool:[
        {q:'A compressa cirúrgica é material de:',
         o:['Uso único (não reprocessar)','Reuso permanente','Reuso ilimitado','Descarte sem esterilizar'],a:0,d:3},
        {q:'A compressa cirúrgica é empacotada em quantidade de:',
         o:['5 unidades','1 unidade','20 unidades','100 unidades'],a:0,d:2},
        {q:'A compressa cirúrgica é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A compressa cirúrgica está disponível nos tamanhos:',
         o:['Pequena e grande','Único','Mini e micro','Extra grande apenas'],a:0,d:1},
        {q:'A embalagem da compressa cirúrgica é SMS de:',
         o:['75×75 cm','1,50×1,50 m','3×3 m','10×10 cm'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-110', code:'POP-CME-110', version:'1.1', emission:'02/05/2019',
      title:'Leak Test (teste de vazamento de ar)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O Leak Test demonstra que o vazamento de ar na câmara do esterilizador, durante o vácuo, não excede o nível que inibiria a penetração de vapor nem recontaminaria a carga.'
        ]},
        {n:2,h:'Execução',items:[
          'Realizar <b>mensalmente, todo dia 01</b>, no primeiro ciclo do dia, com a autoclave <b>vazia</b>; programar o ciclo Leak Test e verificar a aprovação na fita de controle.',
          'Comunicar o enfermeiro se reprovado e anexar o impresso no livro de controle.'
        ]},
        {n:3,h:'Parâmetros',items:[
          'A taxa de aumento de pressão não deve ser superior a <b>0,13 kPa/min (1,3 mbar/min)</b>; teste com pressão da câmara interna de 70 mbar por 10 minutos.'
        ]}
      ],
      pool:[
        {q:'O Leak Test avalia:',
         o:['O vazamento de ar na câmara do esterilizador durante o vácuo','A letalidade do processo','A carga microbiana','A validade dos pacotes'],a:0,d:3},
        {q:'O Leak Test é realizado:',
         o:['Mensalmente, todo dia 01, com a autoclave vazia','Diariamente','A cada ciclo','Anualmente'],a:0,d:3},
        {q:'A taxa de aumento de pressão no Leak Test não deve ser superior a:',
         o:['0,13 kPa/min (1,3 mbar/min)','1 kPa/min','10 kPa/min','Não há limite'],a:0,d:3},
        {q:'O Leak Test é realizado com a autoclave:',
         o:['Vazia','Cheia de instrumentais','Com material crítico','Na última carga'],a:0,d:2},
        {q:'Se o Leak Test for reprovado, deve-se:',
         o:['Comunicar o enfermeiro para providências','Liberar a autoclave','Repetir só o material','Ignorar'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-111', code:'POP-CME-111', version:'1.1', emission:'06/05/2019',
      title:'Pré-limpeza',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar a pré-limpeza dos produtos para saúde, realizada na unidade logo após o uso.'
        ]},
        {n:2,h:'Instrumentais',items:[
          'Desarticular, limpar o excesso de sujidade com gaze e água destilada e irrigar os canais com seringa de 20 ml.',
          'Se o transporte demorar mais de <b>30 minutos</b>, borrifar <b>umectante</b>; armazenar em recipiente próprio para recolhimento pela CME.'
        ]},
        {n:3,h:'Demais produtos e transporte',items:[
          'Desarticular e enxaguar em água corrente para retirar a sujidade visível.',
          'Transportar sempre em <b>recipiente rígido e fechado</b>.'
        ]}
      ],
      pool:[
        {q:'A pré-limpeza dos produtos é realizada:',
         o:['Na unidade, logo após o uso','Apenas na CME','No fim do mês','Não é realizada'],a:0,d:2},
        {q:'Se o transporte do instrumental demorar mais de 30 minutos, deve-se:',
         o:['Borrifar umectante','Esterilizar','Descartar','Deixar secar'],a:0,d:3},
        {q:'O transporte dos materiais para a CME é feito em:',
         o:['Recipiente rígido e fechado','Saco plástico aberto','Bandeja descoberta','Qualquer recipiente'],a:0,d:2},
        {q:'Na pré-limpeza dos instrumentais, os canais são irrigados com:',
         o:['Seringa de 20 ml','Mangueira','Balde','Esponja'],a:0,d:2},
        {q:'Antes da pré-limpeza, o material deve ser:',
         o:['Desarticulado','Esterilizado','Empacotado','Pintado'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-112', code:'POP-CME-112', version:'1.1', emission:'15/05/2014',
      title:'Limpeza automatizada (lavadora termodesinfectadora)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Orientar a limpeza automatizada dos materiais na lavadora termodesinfectadora, removendo sujidades por ação mecânica.'
        ]},
        {n:2,h:'Execução',items:[
          'Ligar a lavadora, conferir o detergente enzimático no diluidor e realizar a <b>pré-limpeza</b>; imergir o material e conectar os canulados aos jatos.',
          'Acionar e aguardar o ciclo; ao final, enxaguar, secar, inspecionar com lupa e encaminhar para desinfecção ou preparo.'
        ]},
        {n:3,h:'Observação',items:[
          'Aguardar o equipamento realizar o primeiro ciclo do dia sem material para aquecer a água; desprezar a solução no fim do plantão.'
        ]}
      ],
      pool:[
        {q:'A lavadora termodesinfectadora realiza a:',
         o:['Limpeza automatizada dos materiais','Esterilização final','Apenas a secagem','O empacotamento'],a:0,d:2},
        {q:'Antes de colocar o material na lavadora, realiza-se a:',
         o:['Pré-limpeza','Esterilização','Secagem final','Embalagem'],a:0,d:2},
        {q:'O primeiro ciclo do dia deve ser feito:',
         o:['Sem material, para aquecer a água','Com o dobro de material','Com água fria','Sem detergente'],a:0,d:2},
        {q:'Após o ciclo, antes do preparo, faz-se a inspeção visual com:',
         o:['Lupa','Microscópio','A olho nu apenas','Raio-X'],a:0,d:2},
        {q:'A solução de detergente deve ser desprezada:',
         o:['Diariamente no fim do plantão','Uma vez por mês','Nunca','A cada hora'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-113', code:'POP-CME-113', version:'1.1', emission:'03/01/2020',
      title:'Limpeza do transdutor de ecografia transtorácica',
      executantes:'Enfermagem da Sala de Exames Complementares, CC e CME',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Descrever a lavagem, desinfecção e armazenamento do transdutor de ecografia transtorácica.'
        ]},
        {n:2,h:'Limpeza',items:[
          'Após o exame, remover todo o gel; desligar o transdutor da energia, remover contaminantes com compressa em detergente enzimático e proteger a parte elétrica com saco plástico.',
          'Imergir (pela extremidade distal) em detergente enzimático por 10 min, limpar com esponja macia, enxaguar e secar.'
        ]},
        {n:3,h:'Desinfecção e cuidados',items:[
          '<b>Desinfecção por imersão em ácido peracético 2% por 10 minutos</b> (pela extremidade distal), enxaguar e secar; armazenar pendurado, com a ponta distal livre, em ambiente ventilado.',
          'Não fazer dobras no tubo, não expor o conector à umidade e <b>não usar escovas</b> (danificam a lente); a limpeza ultrassônica não é aprovada para esses transdutores.'
        ]}
      ],
      pool:[
        {q:'A desinfecção do transdutor de ecografia é feita em:',
         o:['Ácido peracético 2% por 10 minutos','Hipoclorito','Álcool 70%','Autoclave'],a:0,d:3},
        {q:'Após o exame, antes de tudo, deve-se:',
         o:['Remover todo o gel do transdutor','Esterilizá-lo','Dobrá-lo','Congelá-lo'],a:0,d:2},
        {q:'No transdutor de ecografia, NÃO se deve:',
         o:['Usar escovas (danificam a lente) nem ultrassônica','Removê-lo do gel','Inspecioná-lo','Secá-lo'],a:0,d:3},
        {q:'A parte elétrica do transdutor deve ser:',
         o:['Protegida da umidade/líquidos','Imersa na solução','Lavada com água','Esterilizada'],a:0,d:3},
        {q:'O transdutor é armazenado:',
         o:['Pendurado, com a ponta distal livre, em ambiente ventilado','No estojo de transporte','Enrolado','Dentro de água'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-114', code:'POP-CME-114', version:'1.1', emission:'15/09/2014',
      title:'Limpeza do endoscópio',
      executantes:'Enfermagem da Sala de Exames Complementares, CC e CME',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Descrever a lavagem, desinfecção e armazenamento do endoscópio.'
        ]},
        {n:2,h:'Limpeza e teste de vazamento',items:[
          'Aspirar detergente enzimático pelo canal de biópsia/sucção, limpar o tubo de inserção e desligar da energia/bomba; realizar o <b>teste de vazamento</b> antes da imersão (detecta danos e reduz infiltração).',
          'Imergir (pela extremidade distal) em detergente enzimático por 10 min, limpar externamente com esponja macia e internamente (válvulas e canais) com escova; enxaguar os canais com seringa de 20 ml (mín. 5×).'
        ]},
        {n:3,h:'Desinfecção e finalização',items:[
          '<b>Desinfecção por imersão em ácido peracético 2% por 30 minutos</b>, injetando em todos os canais; enxaguar e secar com ar comprimido em baixa pressão.',
          'Ao final, instilar <b>álcool 70% nos canais</b> (evita biofilme), aplicar óleo de silicone nas válvulas e armazenar sem válvulas, pendurado, com a ponta distal livre.'
        ]}
      ],
      pool:[
        {q:'A desinfecção do endoscópio é feita em:',
         o:['Ácido peracético 2% por 30 minutos','Hipoclorito 0,5%','Álcool 70% por imersão','Autoclave'],a:0,d:3},
        {q:'O teste de vazamento do endoscópio é feito:',
         o:['Antes da imersão, para detectar danos e evitar infiltração','Após a esterilização','Durante o exame','Não é feito'],a:0,d:3},
        {q:'Ao final dos procedimentos, instila-se nos canais do endoscópio:',
         o:['Álcool 70% (evita biofilme)','Formol','Soro fisiológico','Glicose'],a:0,d:3},
        {q:'Os canais do endoscópio são enxaguados com seringa de 20 ml no mínimo:',
         o:['5 vezes','1 vez','20 vezes','Não são enxaguados'],a:0,d:2},
        {q:'O endoscópio é armazenado:',
         o:['Sem válvulas, pendurado, com a ponta distal livre','Enrolado na caixa','Imerso em solução','Com as válvulas montadas'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-115', code:'POP-CME-115', version:'1.1', emission:'15/09/2014',
      title:'Limpeza do broncoscópio',
      executantes:'Enfermagem da Sala de Exames Complementares, CC e CME',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Descrever a lavagem, desinfecção e armazenamento do broncoscópio.'
        ]},
        {n:2,h:'Limpeza e teste de vazamento',items:[
          'Aspirar detergente enzimático pelo canal de biópsia/sucção, limpar o tubo de inserção e desligar da energia/bomba; realizar o <b>teste de vazamento</b> (inflar até 20 kPa e observar por 30 s).',
          'Imergir (pela extremidade distal) em detergente enzimático por 10 min, limpar externa e internamente (válvulas e canais com escova) e enxaguar os canais com seringa de 20 ml (mín. 5×).'
        ]},
        {n:3,h:'Desinfecção e finalização',items:[
          '<b>Desinfecção por imersão em ácido peracético 2% por 10 minutos</b>, injetando em todos os canais; enxaguar com água estéril e secar com ar comprimido em baixa pressão.',
          'Ao final, instilar <b>álcool 70% nos canais</b> (evita biofilme), aplicar óleo de silicone nas válvulas e armazenar sem válvulas, pendurado, com a ponta distal livre.'
        ]}
      ],
      pool:[
        {q:'A desinfecção do broncoscópio é feita em:',
         o:['Ácido peracético 2% por 10 minutos','Hipoclorito 0,5%','Álcool 70% por imersão','Autoclave'],a:0,d:3},
        {q:'O teste de vazamento do broncoscópio é feito inflando até:',
         o:['20 kPa e observando por 30 segundos','100 kPa por 1 hora','5 kPa por 5 minutos','Não há teste'],a:0,d:3},
        {q:'Após a desinfecção, o broncoscópio é enxaguado com:',
         o:['Água estéril','Água da torneira','Soro glicosado','Álcool puro'],a:0,d:3},
        {q:'Ao final, instila-se nos canais do broncoscópio:',
         o:['Álcool 70% (evita biofilme)','Formol','Soro fisiológico','Glicose'],a:0,d:3},
        {q:'O broncoscópio é armazenado:',
         o:['Sem válvulas, pendurado, com a ponta distal livre','Enrolado na caixa','Imerso em solução','Com as válvulas montadas'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-116', code:'POP-CME-116', version:'1.1', emission:'31/03/2020',
      title:'Limpeza do kit de isolamento de contato',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O kit de isolamento de contato (caixa com tampa, esfigmomanômetro, estetoscópio, termômetro e garrote) é usado para pacientes em isolamento de contato.'
        ]},
        {n:2,h:'Limpeza por componente',items:[
          'Caixa, termômetro e manguito: lavagem manual em detergente enzimático. Manômetro, estetoscópio e garrote: lavagem ultrassônica. <b>Lanterna: desinfecção por fricção com álcool 70%</b>.',
          'Cada item é seco conforme sua natureza (secadora, ar comprimido ou pano branco) e inspecionado.'
        ]},
        {n:3,h:'Finalização',items:[
          'Empacotar <b>cada item individualmente</b> em saco plástico, colocar data e nome no pacote do esfigmomanômetro, e colocar tudo na caixa plástica.',
          'Fazer o controle no caderno de protocolo pelo número de cada caixa.'
        ]}
      ],
      pool:[
        {q:'O kit de isolamento de contato é composto por:',
         o:['Caixa, esfigmomanômetro, estetoscópio, termômetro e garrote','Apenas termômetro','Material cirúrgico','Medicamentos'],a:0,d:2},
        {q:'A lanterna do kit de isolamento é desinfetada por:',
         o:['Fricção com álcool 70%','Imersão em hipoclorito','Autoclave','Óxido de etileno'],a:0,d:2},
        {q:'Os itens do kit de isolamento são empacotados:',
         o:['Cada um individualmente em saco plástico','Todos juntos','Sem embalagem','Na autoclave'],a:0,d:2},
        {q:'O kit de isolamento de contato é destinado a pacientes em:',
         o:['Isolamento de contato','Pós-operatório','Ambulatório','Pronto-socorro'],a:0,d:1},
        {q:'O controle do kit de isolamento é feito:',
         o:['No caderno de protocolo, pelo número de cada caixa','Por foto','Verbalmente','Não há controle'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-117', code:'POP-CME-117', version:'1.1', emission:'06/05/2020',
      title:'Limpeza da traqueia do respirador de transporte',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A traqueia (OXYMAG) é o material usado no respirador de transporte.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar e secar com pano e ar comprimido.',
          'Montar, inspecionar, empacotar em saco plástico e <b>esterilizar em óxido de etileno</b>.'
        ]}
      ],
      pool:[
        {q:'A traqueia do respirador de transporte é esterilizada por:',
         o:['Óxido de etileno','Autoclave a 134 °C','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A traqueia é usada no:',
         o:['Respirador de transporte','Aspirador','Monitor cardíaco','Bisturi elétrico'],a:0,d:2},
        {q:'Antes da lavagem, a traqueia deve ser:',
         o:['Desarticulada','Esterilizada','Empacotada','Pintada'],a:0,d:1},
        {q:'A secagem da traqueia é feita com:',
         o:['Pano branco e ar comprimido','Secadora quente','Ao sol','Naturalmente por dias'],a:0,d:1},
        {q:'O modelo de traqueia do respirador de transporte é:',
         o:['OXYMAG','Servo-s','Maquet','Drager'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-118', code:'POP-CME-118', version:'1.1', emission:'29/09/2015',
      title:'Montagem da caixa do broncoscópio rígido',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O broncoscópio rígido (<b>42 peças</b>) aplica-se à retirada de corpos estranhos e ao posicionamento de stents, pelo grande canal de trabalho que comporta diversos instrumentais (pinças, tesouras, aspiradores).'
        ]},
        {n:2,h:'Confecção',items:[
          'Desarticular e abrir, limpar ultrassonicamente, <b>lubrificar</b>, colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m e <b>esterilizar em autoclave a 134 °C</b>. Identificação: cabo cor roxo.'
        ]}
      ],
      pool:[
        {q:'O broncoscópio rígido aplica-se, entre outros, à:',
         o:['Retirada de corpos estranhos e posicionamento de stents','Punção lombar','Sutura','Curativo'],a:0,d:3},
        {q:'A caixa do broncoscópio rígido é composta por:',
         o:['42 peças','4 peças','100 peças','12 peças'],a:0,d:2},
        {q:'A caixa do broncoscópio rígido é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa do broncoscópio rígido é por:',
         o:['Cabo cor roxo','Cabo verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'No interior do pacote do broncoscópio rígido coloca-se:',
         o:['Fita teste Classe V','Talco','Água','Nada'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-119', code:'POP-CME-119', version:'1.1', emission:'08/04/2021',
      title:'Secagem por secadora',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A secadora é utilizada para a secagem de acessórios de ventilação e instrumentais cirúrgicos em geral.'
        ]},
        {n:2,h:'Execução',items:[
          'Dispor os pacotes na <b>vertical</b> (sem encostar nas paredes), fechar a porta, ligar e iniciar o ciclo; ao final, retirar o material e encaminhar à sala limpa.',
          'Ciclo: <b>temperatura 50 °C / tempo 60 min / resfriamento 10 min</b>.'
        ]},
        {n:3,h:'Observações',items:[
          'Limpar a câmara interna e a grade diariamente; <b>não colocar materiais termossensíveis</b>.'
        ]}
      ],
      pool:[
        {q:'O ciclo da secadora opera à temperatura de:',
         o:['50 °C','134 °C','100 °C','20 °C'],a:0,d:2},
        {q:'O tempo do ciclo de secagem na secadora é de:',
         o:['60 minutos','5 minutos','10 minutos','2 horas'],a:0,d:2},
        {q:'Os pacotes na secadora devem ser dispostos:',
         o:['Na vertical, sem encostar nas paredes','Empilhados','Colados nas paredes','No chão'],a:0,d:2},
        {q:'Na secadora, NÃO se deve colocar:',
         o:['Materiais termossensíveis','Instrumentais cirúrgicos','Acessórios de ventilação','Cestos aramados'],a:0,d:2},
        {q:'A secadora é usada para secar:',
         o:['Acessórios de ventilação e instrumentais','Roupas da equipe','Alimentos','Documentos'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-120', code:'POP-CME-120', version:'1.1', emission:'22/06/2020',
      title:'Reprocessamento do endoscópio na lavadora automatizada',
      executantes:'Enfermagem da Sala de Exames Complementares, CC e CME',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Descrever o método <b>automatizado</b> de lavagem, desinfecção e armazenamento do endoscópio na lavadora de endoscópios (desinfetante: ácido peracético).'
        ]},
        {n:2,h:'Execução',items:[
          'No local: aspirar detergente enzimático pelo canal, limpar e proteger a parte elétrica, encaminhar na caixa suja (vermelha). Na CME: <b>testar vazamento</b>, posicionar o endoscópio na cuba, remover válvulas e conectar as mangueiras dos injetores; fechar e iniciar o ciclo.',
          'Ao final, secar com ar comprimido, instilar <b>álcool 70% nos canais</b> (evita biofilme), aplicar óleo de silicone e armazenar sem válvulas, pendurado, com a ponta distal livre.'
        ]},
        {n:3,h:'Controle do desinfetante',items:[
          '<b>Teste do desinfetante diário</b>: inserir a fita reativa na solução por 3 s, aguardar 5 s e comparar com o gabarito; colar no livro de registro.',
          '<b>Autodesinfecção e troca do desinfetante mensalmente</b>: preencher a cuba com 10 litros de ácido peracético. Realizar a desinfecção de alto nível na 1ª hora do dia se o aparelho ficou > 30 dias no armário.'
        ]}
      ],
      pool:[
        {q:'O desinfetante usado na lavadora de endoscópios é o:',
         o:['Ácido peracético','Hipoclorito','Álcool 70%','Formol'],a:0,d:3},
        {q:'O teste do desinfetante (fita reativa) na lavadora é feito:',
         o:['Diariamente, ao utilizar o equipamento','Mensalmente','Anualmente','Nunca'],a:0,d:3},
        {q:'Na fita do teste de desinfetante, insere-se na solução por:',
         o:['3 segundos','30 minutos','1 hora','10 segundos'],a:0,d:2},
        {q:'A troca do desinfetante (autodesinfecção) na lavadora é:',
         o:['Mensal (10 litros de ácido peracético)','Diária','A cada ciclo','Anual'],a:0,d:3},
        {q:'Ao final do reprocessamento, instila-se nos canais do endoscópio:',
         o:['Álcool 70% (evita biofilme)','Formol','Soro fisiológico','Glicose'],a:0,d:3}
      ]
    },

    {
      id:'pop-cme-121', code:'POP-CME-121', version:'1.1', emission:'09/10/2020',
      title:'Montagem da caixa do kit torácica (vídeo)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e composição',items:[
          'Montar a caixa do kit torácica (apoio à cirurgia torácica por vídeo): pinças de apreensão DeBakey, de linfonodo e Foerster, e pinça de dissecção DeBakey.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste no interior, empacotar em TNT de 1,20×1,20 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita laranja + verde.'
        ]}
      ],
      pool:[
        {q:'A caixa do kit torácica dá apoio à cirurgia:',
         o:['Torácica por vídeo','Ortopédica','Oftalmológica','Plástica'],a:0,d:2},
        {q:'A caixa do kit torácica é esterilizada por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação da caixa do kit torácica é:',
         o:['Fita laranja + verde','Cabo vermelho','Fita amarela','Selo preto'],a:0,d:2},
        {q:'A caixa do kit torácica contém, entre outras, a pinça:',
         o:['De apreensão DeBakey','Kelly','Adson','Mosquito'],a:0,d:2},
        {q:'A caixa do kit torácica é empacotada em:',
         o:['TNT 1,20×1,20 m','Saco de lixo','Papel jornal','Caixa de papelão'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-122', code:'POP-CME-122', version:'1.1', emission:'21/10/2020',
      title:'Confecção do kit de PAM (pressão arterial média)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O kit de PAM permite a aferição da pressão arterial média por um cateter introduzido em artéria, conectado a um transdutor de pressão e ao monitor. Composto por campo fenestrado, cuba, porta-agulha, tesoura, pinças e Cheron.'
        ]},
        {n:2,h:'Confecção',items:[
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1×1 m, <b>esterilizar em autoclave a 134 °C</b> e armazenar. Identificação: fita marrom + branco.'
        ]}
      ],
      pool:[
        {q:'O kit de PAM serve para aferir a:',
         o:['Pressão arterial média (invasiva)','Saturação de oxigênio','Glicemia','Temperatura'],a:0,d:3},
        {q:'A PAM consiste na introdução de um cateter em uma:',
         o:['Artéria','Veia periférica','Bexiga','Traqueia'],a:0,d:3},
        {q:'O kit de PAM é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'A identificação do kit de PAM é:',
         o:['Fita marrom + branco','Verde','Vermelha','Lilás'],a:0,d:2},
        {q:'O cateter da PAM é conectado a um:',
         o:['Transdutor de pressão e ao monitor','Frasco de soro','Aspirador','Ventilador'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-123', code:'POP-CME-123', version:'1.1', emission:'30/03/2021',
      title:'Reprocessamento do bougie',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O bougie é um introdutor que, inserido na traqueia, ajuda a orientar a introdução da cânula traqueal.'
        ]},
        {n:2,h:'Execução',items:[
          'Pré-limpeza, lavar ultrassonicamente, enxaguar e secar com ar comprimido; realizar <b>desinfecção por fricção com pano e álcool 70%</b>.',
          'Inspecionar, empacotar em saco plástico (etiqueta branca com data e profissional) e armazenar.'
        ]}
      ],
      pool:[
        {q:'O bougie é um introdutor que ajuda a orientar:',
         o:['A introdução da cânula traqueal','A sondagem vesical','A punção lombar','A drenagem torácica'],a:0,d:2},
        {q:'A desinfecção do bougie é feita por:',
         o:['Fricção com pano e álcool 70%','Autoclave','Óxido de etileno','Imersão em formol'],a:0,d:2},
        {q:'O bougie é inserido na:',
         o:['Traqueia','Bexiga','Veia','Pleura'],a:0,d:2},
        {q:'A identificação do bougie inclui:',
         o:['Data e profissional','Apenas a cor','O nome do médico','Nada'],a:0,d:1},
        {q:'A secagem do bougie é feita com:',
         o:['Pistola de ar comprimido','Secadora quente','Pano úmido','Ao sol'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-124', code:'POP-CME-124', version:'1.1', emission:'15/09/2014',
      title:'Reprocessamento da lâmina do videolaringoscópio',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'A lâmina do videolaringoscópio é usada em conjunto com o cabo para exames da laringe (e intubação).'
        ]},
        {n:2,h:'Execução',items:[
          'Lavar ultrassonicamente, enxaguar, secar e realizar <b>desinfecção por fricção com gaze + álcool 70%</b>.',
          'Inspecionar <b>testando com o cabo</b>, empacotar em saco plástico (data e nome) e armazenar.'
        ]}
      ],
      pool:[
        {q:'A desinfecção da lâmina do videolaringoscópio é feita por:',
         o:['Fricção com gaze + álcool 70%','Autoclave','Óxido de etileno','Imersão em formol'],a:0,d:2},
        {q:'Na inspeção da lâmina do videolaringoscópio, deve-se:',
         o:['Testá-la com o cabo','Pesá-la','Pintá-la','Dobrá-la'],a:0,d:2},
        {q:'A lâmina do videolaringoscópio é usada para:',
         o:['Exames da laringe / intubação','Aspiração','Curativos','Coleta de sangue'],a:0,d:2},
        {q:'A lâmina do videolaringoscópio funciona em conjunto com:',
         o:['O cabo','A máscara','A traqueia','O balão'],a:0,d:1},
        {q:'A lâmina do videolaringoscópio é empacotada em:',
         o:['Saco plástico (data e nome)','SMS','Papel jornal','Sem embalagem'],a:0,d:1}
      ]
    },

    {
      id:'pop-cme-125', code:'POP-CME-125', version:'1.1', emission:'02/08/2021',
      title:'Reprocessamento do laringoscópio de suspensão',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização',
      setores:['cme'],
      etapa:2,
      sections:[
        {n:1,h:'Objetivo e definição',items:[
          'O laringoscópio de suspensão é usado na abordagem diagnóstica e cirúrgica da laringe. Composto por lâminas, ponteiras ópticas, suporte e cabo óptico.'
        ]},
        {n:2,h:'Execução',items:[
          'Desarticular e abrir, pré-limpeza (atenção aos lúmens), lavar ultrassonicamente, enxaguar, secar e <b>lubrificar as superfícies de atrito</b>.',
          'Colocar fita teste Classe V no interior, empacotar em SMS de 1,20×1,20 m e <b>esterilizar em autoclave a 134 °C</b>. Identificação: fita laranja + azul.'
        ]},
        {n:3,h:'Observação',items:[
          'Cuidado especial com o material de vídeo: <b>não dobrar e não bater</b>.'
        ]}
      ],
      pool:[
        {q:'O laringoscópio de suspensão é usado na abordagem da:',
         o:['Laringe','Bexiga','Pleura','Articulação'],a:0,d:2},
        {q:'O laringoscópio de suspensão é esterilizado por:',
         o:['Autoclave a 134 °C','Óxido de etileno','Fricção com álcool','Fervura'],a:0,d:2},
        {q:'Com o material de vídeo do laringoscópio de suspensão, deve-se:',
         o:['Não dobrar e não bater','Enrolar firme','Bater para encaixar','Dobrar ao meio'],a:0,d:2},
        {q:'A identificação do laringoscópio de suspensão é:',
         o:['Fita laranja + azul','Cabo verde','Fita amarela','Selo preto'],a:0,d:2},
        {q:'Após a inspeção, aplica-se no laringoscópio de suspensão:',
         o:['Lubrificação nas superfícies de atrito','Tinta','Cola','Talco'],a:0,d:2}
      ]
    },

    {
      id:'pop-cme-138', code:'POP-CME-138', version:'1.1', emission:'04/05/2026',
      title:'Pré-limpeza de produtos encaminhados para empresa processadora (ESTERIMAX)',
      executantes:'Todos os colaboradores da Central de Material e Esterilização',
      origem:'Central de Material e Esterilização e Unidades',
      setores:['cme'],
      etapa:1,
      sections:[
        {n:1,h:'Objetivo',items:[
          'Garantir a correta pré-limpeza dos materiais a serem encaminhados para a empresa processadora ESTERIMAX, conforme a RDC 15.'
        ]},
        {n:2,h:'Execução',items:[
          'Paramentar-se com EPIs, remover corpos estranhos (fios de sutura, agulhas, lâminas), limpar conforme o POP de cada material (manual/ultrassônica/termo), atentando aos lúmens, e secar.',
          'Registrar no sistema de rastreabilidade <b>RASTRO</b> (área limpa / esterilização externa) e no sistema de envio <b>LIBBEN</b>, imprimindo a ordem de esterilização.'
        ]},
        {n:3,h:'Finalização',items:[
          'Acondicionar na caixa da ESTERIMAX com a ordem de esterilização e aguardar a coleta. <b>Testar o material</b> — se não estiver em bom funcionamento, não encaminhar.'
        ]}
      ],
      pool:[
        {q:'Os materiais pré-limpos neste POP são encaminhados para:',
         o:['A empresa processadora ESTERIMAX','O lixo comum','A farmácia','O almoxarifado'],a:0,d:2},
        {q:'O registro do envio é feito nos sistemas:',
         o:['RASTRO e LIBBEN','Apenas em papel','Por e-mail','Não há registro'],a:0,d:2},
        {q:'Antes de encaminhar, deve-se remover do material:',
         o:['Corpos estranhos (fios, agulhas, lâminas)','A etiqueta','A embalagem','Nada'],a:0,d:2},
        {q:'Se o material não estiver em bom funcionamento, ele:',
         o:['Não deve ser encaminhado para reprocessamento','Deve ser enviado mesmo assim','Deve ser descartado no lixo comum','Deve ser usado'],a:0,d:2},
        {q:'A pré-limpeza para a ESTERIMAX segue a:',
         o:['RDC 15','Lei do SUS','Portaria de férias','Nenhuma norma'],a:0,d:1}
      ]
    }
  ];
  return POPS;
}));
