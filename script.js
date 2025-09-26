// ========== CONFIGURAÇÕES GLOBAIS ==========
const APP_CONFIG = {
  city: "Poços de Caldas",
  state: "MG",
  emergencyPhone: "192",
};

// ========== DADOS DOS SINTOMAS ==========
const SYMPTOMS_DATABASE = {
  // Sintomas com intensidade variável
  variable: [
    {
      id: "fever",
      name: "Febre",
      icon: "fas fa-thermometer-half",
      needsDetails: true,
      detailType: "fever_intensity",
      category: "fever",
    },
    {
      id: "headache",
      name: "Dor de cabeça",
      icon: "fas fa-head-side-virus",
      needsDetails: true,
      detailType: "headache_intensity",
      category: "neurological",
    },
    {
      id: "abdominal_pain",
      name: "Dor abdominal",
      icon: "fas fa-hand-holding-medical",
      needsDetails: true,
      detailType: "abdominal_intensity",
      category: "abdominal",
    },
    {
      id: "allergy_reaction",
      name: "Reação alérgica",
      icon: "fas fa-allergies",
      needsDetails: true,
      detailType: "allergy_intensity",
      category: "allergy",
    },
    {
      id: "trauma_accidents",
      name: "Acidentes/Fraturas/Traumas",
      icon: "fas fa-user-injured",
      needsDetails: true,
      detailType: "trauma_intensity",
      category: "trauma",
    },
  ],

  // Sintomas leves (UBS)
  mild: [
    {
      id: "throat_pain_mild",
      name: "Dor de garganta leve",
      icon: "fas fa-head-side-cough",
      needsDetails: false,
      category: "respiratory",
    },
    {
      id: "common_cold",
      name: "Resfriado comum / Coriza",
      icon: "fas fa-tissue",
      needsDetails: false,
      category: "respiratory",
    },
    {
      id: "muscle_pain",
      name: "Dores musculares/articulares leves",
      icon: "fas fa-running",
      needsDetails: false,
      category: "musculoskeletal",
    },
    {
      id: "chronic_followup",
      name: "Acompanhamento de doença crônica",
      icon: "fas fa-user-md",
      needsDetails: false,
      category: "chronic",
    },
  ],

  // Sintomas moderados (UPA)
  moderate: [
    {
      id: "asthma_crisis",
      name: "Crise de asma leve/moderada",
      icon: "fas fa-lungs",
      needsDetails: true,
      detailType: "breathing",
      category: "respiratory",
    },
    {
      id: "vomiting_persistent",
      name: "Vômitos ou diarreia persistentes",
      icon: "fas fa-toilet",
      needsDetails: true,
      detailType: "digestive",
      category: "digestive",
    },
    {
      id: "skin_infection",
      name: "Infecção de pele extensa",
      icon: "fas fa-band-aid",
      needsDetails: false,
      category: "dermatological",
    },
    {
      id: "hypertension_crisis",
      name: "Crise hipertensiva moderada",
      icon: "fas fa-heartbeat",
      needsDetails: true,
      detailType: "cardiovascular",
      category: "cardiovascular",
    },
  ],

  // Sintomas graves (Emergência)
  severe: [
    {
      id: "chest_pain_intense",
      name: "Dor no peito intensa",
      icon: "fas fa-heart-broken",
      needsDetails: true,
      detailType: "chest_pain",
      category: "cardiovascular",
    },
    {
      id: "breathing_difficulty",
      name: "Falta de ar intensa",
      icon: "fas fa-lungs-virus",
      needsDetails: true,
      detailType: "breathing",
      category: "respiratory",
    },
    {
      id: "stroke_symptoms",
      name: "Sinais de AVC/Convulsões/Perda de consciência",
      icon: "fas fa-brain",
      needsDetails: true,
      detailType: "neurological",
      category: "neurological",
    },
    {
      id: "severe_bleeding",
      name: "Sangramento intenso",
      icon: "fas fa-tint",
      needsDetails: true,
      detailType: "bleeding",
      category: "trauma",
    },
    {
      id: "severe_burns",
      name: "Queimaduras extensas",
      icon: "fas fa-fire",
      needsDetails: true,
      detailType: "burns",
      category: "trauma",
    },
    {
      id: "pregnancy_emergency",
      name: "Emergência na gravidez",
      icon: "fas fa-baby",
      needsDetails: true,
      detailType: "pregnancy",
      category: "pregnancy",
    },
  ],
};

// Combinações perigosas de sintomas
const DANGEROUS_COMBINATIONS = [
  {
    symptoms: ["fever_high", "breathing_difficulty"],
    risk: "severe",
    condition: "Risco de pneumonia grave",
    message:
      "A combinação de febre alta com dificuldade respiratória pode indicar pneumonia grave.",
  },
  {
    symptoms: ["fever_high", "headache_intense"],
    risk: "severe",
    condition: "Risco de meningite",
    message:
      "Febre alta com dor de cabeça intensa e rigidez de nuca pode indicar meningite.",
  },
  {
    symptoms: ["abdominal_pain_moderate", "vomiting_persistent"],
    risk: "severe",
    condition: "Risco de apendicite ou obstrução intestinal",
    message:
      "Dor abdominal intensa com vômitos persistentes requer avaliação de emergência.",
  },
  {
    symptoms: ["chest_pain_intense", "breathing_difficulty"],
    risk: "severe",
    condition: "Risco de infarto",
    message: "Dor no peito com falta de ar pode indicar infarto do miocárdio.",
  },
  {
    symptoms: ["headache_intense", "vomiting_persistent"],
    risk: "severe",
    condition: "Risco de aneurisma/hemorragia cerebral",
    message:
      "Dor de cabeça súbita e explosiva com vômito requer atenção médica imediata.",
  },
];

// Detalhes específicos para cada tipo de sintoma
const SYMPTOM_DETAILS = {
  // detalhes com intensidade
  fever_intensity: [
    {
      id: "intensity",
      text: "Intensidade da febre:",
      type: "intensity",
      options: [
        { value: "mild", text: "Leve (até 38°C)", severity: "mild" },
        { value: "moderate", text: "Moderada (38-39°C)", severity: "moderate" },
        { value: "severe", text: "Alta (>39°C)", severity: "severe" },
      ],
    },
    {
      id: "fever_duration",
      text: "Febre há mais de 2 dias",
      severity: "moderate",
    },
    {
      id: "fever_children_elderly",
      text: "Criança menor que 2 anos ou idoso acima de 65",
      severity: "moderate",
    },
    {
      id: "fever_with_rash",
      text: "Febre com manchas na pele",
      severity: "severe",
    },
    {
      id: "fever_with_neck_stiffness",
      text: "Febre com rigidez no pescoço",
      severity: "severe",
    },
  ],

  headache_intensity: [
    {
      id: "intensity",
      text: "Intensidade da dor de cabeça:",
      type: "intensity",
      options: [
        { value: "mild", text: "Leve (ocasional)", severity: "mild" },
        {
          value: "moderate",
          text: "Moderada (frequente)",
          severity: "moderate",
        },
        {
          value: "severe",
          text: "Intensa (súbita e muito forte)",
          severity: "severe",
        },
      ],
    },
    {
      id: "headache_sudden",
      text: "Dor de cabeça súbita e muito forte",
      severity: "severe",
    },
    {
      id: "headache_vision",
      text: "Dor com perda de visão",
      severity: "severe",
    },
    {
      id: "headache_confusion",
      text: "Dor com confusão mental",
      severity: "severe",
    },
    {
      id: "headache_no_relief",
      text: "Dor que não melhora com medicação",
      severity: "moderate",
    },
  ],

  abdominal_intensity: [
    {
      id: "intensity",
      text: "Intensidade da dor abdominal:",
      type: "intensity",
      options: [
        { value: "mild", text: "Leve", severity: "mild" },
        { value: "moderate", text: "Moderada/súbita", severity: "moderate" },
        { value: "severe", text: "Intensa/insuportável", severity: "severe" },
      ],
    },
    { id: "abdominal_rigid", text: "Barriga dura/rígida", severity: "severe" },
    {
      id: "abdominal_blood",
      text: "Sangue nas fezes ou vômito",
      severity: "severe",
    },
    { id: "abdominal_fainting", text: "Dor com desmaio", severity: "severe" },
    {
      id: "abdominal_localized",
      text: "Dor localizada em um ponto específico",
      severity: "moderate",
    },
  ],

  allergy_intensity: [
    {
      id: "intensity",
      text: "Intensidade da reação alérgica:",
      type: "intensity",
      options: [
        {
          value: "mild",
          text: "Leve (coceira, vermelhidão local)",
          severity: "mild",
        },
        {
          value: "moderate",
          text: "Moderada (reação em todo o corpo)",
          severity: "moderate",
        },
        {
          value: "severe",
          text: "Grave (dificuldade para respirar, inchaço)",
          severity: "severe",
        },
      ],
    },
    {
      id: "allergy_swelling",
      text: "Inchaço de língua, lábios ou garganta",
      severity: "severe",
    },
    {
      id: "allergy_breathing",
      text: "Dificuldade para respirar",
      severity: "severe",
    },
  ],

  trauma_intensity: [
    {
      id: "intensity",
      text: "Gravidade do acidente/trauma:",
      type: "intensity",
      options: [
        { value: "mild", text: "Leve (pequenos acidentes)", severity: "mild" },
        {
          value: "moderate",
          text: "Moderado (fraturas simples)",
          severity: "moderate",
        },
        {
          value: "severe",
          text: "Grave (trauma na cabeça/coluna, fratura exposta)",
          severity: "severe",
        },
      ],
    },
    {
      id: "trauma_head",
      text: "Trauma na cabeça com perda de consciência",
      severity: "severe",
    },
    { id: "trauma_spine", text: "Trauma na coluna", severity: "severe" },
    { id: "trauma_open_fracture", text: "Fratura exposta", severity: "severe" },
  ],

  fever: [
    {
      id: "fever_duration",
      text: "Febre há mais de 2 dias",
      severity: "moderate",
    },
    {
      id: "fever_children_elderly",
      text: "Criança menor que 2 anos ou idoso acima de 65",
      severity: "moderate",
    },
    {
      id: "fever_with_rash",
      text: "Febre com manchas na pele",
      severity: "severe",
    },
    {
      id: "fever_with_neck_stiffness",
      text: "Febre com rigidez no pescoço",
      severity: "severe",
    },
  ],

  chest_pain: [
    {
      id: "chest_radiating",
      text: "Dor que irradia para braço, pescoço ou mandíbula",
      severity: "severe",
    },
    {
      id: "chest_crushing",
      text: "Sensação de peso ou aperto no peito",
      severity: "severe",
    },
    {
      id: "chest_with_sweating",
      text: "Dor acompanhada de suor frio",
      severity: "severe",
    },
    {
      id: "chest_with_nausea",
      text: "Dor com náusea ou vômito",
      severity: "severe",
    },
  ],

  breathing: [
    {
      id: "breathing_rest",
      text: "Falta de ar mesmo em repouso",
      severity: "severe",
    },
    {
      id: "breathing_talking",
      text: "Dificuldade para falar frases completas",
      severity: "severe",
    },
    {
      id: "breathing_blue_lips",
      text: "Lábios ou unhas azulados",
      severity: "severe",
    },
    { id: "breathing_wheezing", text: "Chiado no peito", severity: "moderate" },
    {
      id: "breathing_mild",
      text: "Apenas falta de ar leve",
      severity: "mild",
    },
  ],

  headache: [
    {
      id: "headache_sudden",
      text: "Dor de cabeça súbita e muito forte",
      severity: "severe",
    },
    {
      id: "headache_vision",
      text: "Dor com perda de visão",
      severity: "severe",
    },
    {
      id: "headache_confusion",
      text: "Dor com confusão mental",
      severity: "severe",
    },
    {
      id: "headache_no_relief",
      text: "Dor que não melhora com medicação",
      severity: "moderate",
    },
  ],

  abdominal: [
    { id: "abdominal_rigid", text: "Barriga dura/rígida", severity: "severe" },
    {
      id: "abdominal_blood",
      text: "Sangue nas fezes ou vômito",
      severity: "severe",
    },
    { id: "abdominal_fainting", text: "Dor com desmaio", severity: "severe" },
    {
      id: "abdominal_localized",
      text: "Dor localizada em um ponto específico",
      severity: "moderate",
    },
  ],

  bleeding: [
    {
      id: "bleeding_uncontrolled",
      text: "Sangramento que não para com pressão",
      severity: "severe",
    },
    {
      id: "bleeding_large_amount",
      text: "Perda de grande quantidade de sangue",
      severity: "severe",
    },
    {
      id: "bleeding_weakness",
      text: "Sangramento com fraqueza/tontura",
      severity: "severe",
    },
    {
      id: "bleeding_internal",
      text: "Sangramento interno (vômito/fezes com sangue)",
      severity: "severe",
    },
  ],

  allergy: [
    {
      id: "allergy_swelling",
      text: "Inchaço de língua, lábios ou garganta",
      severity: "severe",
    },
    {
      id: "allergy_breathing",
      text: "Dificuldade para respirar",
      severity: "severe",
    },
    {
      id: "allergy_widespread",
      text: "Reação em todo o corpo",
      severity: "moderate",
    },
    {
      id: "allergy_local",
      text: "Reação apenas local (coceira, vermelhidão)",
      severity: "mild",
    },
  ],

  neurological: [
    {
      id: "neuro_weakness",
      text: "Fraqueza em um lado do corpo",
      severity: "severe",
    },
    { id: "neuro_speech", text: "Dificuldade para falar", severity: "severe" },
    { id: "neuro_vision", text: "Perda súbita de visão", severity: "severe" },
    {
      id: "neuro_confusion",
      text: "Confusão mental súbita",
      severity: "severe",
    },
    { id: "neuro_seizures", text: "Convulsões", severity: "severe" },
    {
      id: "neuro_unconsciousness",
      text: "Perda de consciência",
      severity: "severe",
    },
  ],

  trauma: [
    {
      id: "trauma_head",
      text: "Trauma na cabeça com perda de consciência",
      severity: "severe",
    },
    { id: "trauma_spine", text: "Trauma na coluna", severity: "severe" },
    { id: "trauma_open_fracture", text: "Fratura exposta", severity: "severe" },
    {
      id: "trauma_minor",
      text: "Trauma menor sem deformidade",
      severity: "moderate",
    },
  ],

  pregnancy: [
    {
      id: "pregnancy_bleeding",
      text: "Sangramento vaginal",
      severity: "severe",
    },
    { id: "pregnancy_severe_pain", text: "Dor intensa", severity: "severe" },
    { id: "pregnancy_seizures", text: "Convulsões", severity: "severe" },
    {
      id: "pregnancy_high_bp",
      text: "Pressão alta com dor de cabeça",
      severity: "severe",
    },
  ],
};

// Unidades de saúde em Poços de Caldas
const HEALTH_UNITS = {
  ubs: [
    {
      name: "UBS Centro",
      address: "Rua Goias, Centro",
      phone: "(35) 3697-2000",
      lat: -21.7877,
      lng: -46.5615,
      hours: "7h às 17h",
      services: "Consultas básicas, vacinação, curativos",
    },
    {
      name: "UBS Country Club",
      address: "Rua José Mendonça, 131 - Jardim Country Club",
      phone: "(35) 3697-2232",
      lat: -21.7893599,
      lng: -46.6222832,
      hours: "7h às 17h",
      services: "Consultas básicas, vacinação, curativos",
    },
    {
      name: "UBS Vilas Unidas",
      address: "Av. Gentil Messías-Kitate, 275, Vila Cruz",
      phone: "(35) 3697-2142",
      lat: -21.7820162,
      lng: -46.5943214,
      hours: "7h às 17h",
      services: "Consultas básicas, pré-natal, vacinação, saúde da família",
    },
    {
      name: "UBS Regional Sul",
      address: "Av. Antônio Marinoni, 125, Jardim São Sebastião",
      phone: "(35) 3712-9960",
      lat: -21.8560951,
      lng: -46.5672546,
      hours: "7h às 19h",
      services: "Consultas básicas, pré-natal, saúde da família",
    },
    {
      name: "UBS Santa Rosália",
      address: "Rua Dr. Antenor Damini, 233, Jardim Santa Rosalia",
      phone: "(35) 3697-2230",
      lat: -21.7843586,
      lng: -46.545958,
      hours: "8h às 17h",
      services: "Consultas básicas, pré-natal, saúde da família",
    },
    {
      name: "PSF Quisisana",
      address: "Rua Geny Villas Boas Tardelli, 50, São José",
      phone: "(35) 3697-2231",
      lat: -21.8067787,
      lng: -46.5707222,
      hours: "7h às 17h",
      services: "Consultas básicas, pré-natal, saúde da família",
    },
    {
      name: "UBS Itamaraty III",
      address: "Rua Ozualdo Berno, 270, Jardim Itamaraty III",
      phone: "(35) 3697-2263",
      lat: -21.8166803,
      lng: -46.49532949,
      hours: "7h às 17h",
      services: "Consultas básicas, pré-natal, saúde da família",
    },
    {
      name: "UBS São José",
      address: "Rua José Augusto de Carvalho, 563, São josé",
      phone: "(35) 3715-9487",
      lat: -21.810067,
      lng: -46.5703325,
      hours: "7h às 17h",
      services: "Consultas básicas, hipertensão, diabetes",
    },
    {
      name: "UBS Vila Rica",
      address: "Rua das Flores, Vila Rica",
      phone: "(35) 3697-2400",
      lat: -21.785,
      lng: -46.555,
      hours: "7h às 17h",
      services: "Consultas básicas, saúde mental, fisioterapia",
    },
    {
      name: "UBS Cascatinha",
      address: "Av. José Remígio Prezia, Cascatinha",
      phone: "(35) 3697-2500",
      lat: -21.775,
      lng: -46.585,
      hours: "7h às 17h",
      services: "Consultas básicas, pediatria, ginecologia",
    },
    {
      name: "UBS Vila Paulista",
      address: "Rua Bahia, Vila Paulista",
      phone: "(35) 3697-2700",
      lat: -21.798,
      lng: -46.548,
      hours: "7h às 17h",
      services: "Consultas básicas, saúde do idoso, curativo",
    },
  ],
  upa: [
    {
      name: "UPA 24h Dr. Sérgio Braga",
      address: "Rua Padre Feijó, 675 - Centro",
      phone: "(35) 3697-1900",
      lat: -21.7866,
      lng: -46.5633,
      hours: "24 horas",
      services: "Urgências médicas, exames, medicação de urgência",
    },
  ],
  emergency: [
    {
      name: "Santa Casa de Poços de Caldas",
      address: "Rua Francisco Escobar, s/n - Centro",
      phone: "(35) 3729-6000",
      lat: -21.7883,
      lng: -46.564,
      hours: "24 horas",
      services: "Pronto-socorro, UTI, cirurgias de emergência",
    },
  ],
};

// ========== ESTADO DA APLICAÇÃO ==========
let currentState = {
  screen: "home",
  questionIndex: 0,
  selectedSymptoms: [],
  symptomDetails: {},
  currentSymptom: null,
  userLocation: null,
  assessmentHistory: JSON.parse(
    localStorage.getItem("assessmentHistory") || "[]"
  ),
  map: null, // Instância do mapa Leaflet
  markers: [], // Array de marcadores
};

// ========== INICIALIZAÇÃO ==========
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  getUserLocation();
  showScreen("home");
}

function setupEventListeners() {
  // Botão iniciar avaliação
  document
    .getElementById("start-assessment")
    .addEventListener("click", startAssessment);

  // Botões de volta
  document
    .getElementById("back-btn")
    .addEventListener("click", () => showScreen("home"));
  document
    .getElementById("characteristics-back-btn")
    .addEventListener("click", () => showScreen("assessment"));
  document
    .getElementById("map-back-btn")
    .addEventListener("click", () => showScreen("results"));

  // Botão continuar características
  document
    .getElementById("characteristics-continue")
    .addEventListener("click", continueFromCharacteristics);

  // Botões de resultado
  document
    .getElementById("find-location")
    .addEventListener("click", showLocationScreen);
  document.getElementById("new-assessment").addEventListener("click", () => {
    resetAssessment();
    showScreen("home");
  });

  document.addEventListener("keydown", handleKeyboardNavigation);
}

// ========== NAVEGAÇÃO ENTRE TELAS ==========
function showScreen(screenName) {
  if (currentState.screen === "map" && screenName !== "map") {
    clearMap();
  }

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  // Mostrar tela solicitada
  const targetScreen = document.getElementById(screenName + "-screen");
  if (targetScreen) {
    targetScreen.classList.add("active");
    currentState.screen = screenName;
  }
}

// ========== LÓGICA DE AVALIAÇÃO ==========
function startAssessment() {
  resetAssessment();
  currentState.questionIndex = 0;
  generateQuestions();
  showScreen("assessment");
}

function resetAssessment() {
  currentState.selectedSymptoms = [];
  currentState.symptomDetails = {};
  currentState.questionIndex = 0;
  currentState.currentSymptom = null;
}

function generateQuestions() {
  const allSymptoms = [
    ...SYMPTOMS_DATABASE.mild,
    ...SYMPTOMS_DATABASE.moderate,
    ...SYMPTOMS_DATABASE.severe,
  ];

  if (currentState.questionIndex < allSymptoms.length) {
    showSymptomQuestion(allSymptoms[currentState.questionIndex]);
  } else {
    // Todas as perguntas respondidas
    analyzeResults();
  }
}

function showSymptomQuestion(symptom) {
  const container = document.getElementById("question-container");
  const progress =
    ((currentState.questionIndex + 1) /
      (SYMPTOMS_DATABASE.mild.length +
        SYMPTOMS_DATABASE.moderate.length +
        SYMPTOMS_DATABASE.severe.length)) *
    100;

  // Atualizar barra de progresso
  document.getElementById("progress-fill").style.width = progress + "%";
  document.getElementById("progress-text").textContent = `${
    currentState.questionIndex + 1
  }/${
    SYMPTOMS_DATABASE.mild.length +
    SYMPTOMS_DATABASE.moderate.length +
    SYMPTOMS_DATABASE.severe.length
  }`;

  container.innerHTML = `
        <div class="question">
            <i class="${symptom.icon} question-icon ${symptom.category}"></i>
            <h3>Você está apresentando:</h3>
            <h2>${symptom.name}?</h2>
            <div class="answer-options">
                <button class="answer-btn" onclick="answerSymptom('${symptom.id}', true)">
                    <i class="fas fa-check"></i>
                    Sim, estou com este sintoma
                </button>
                <button class="answer-btn" onclick="answerSymptom('${symptom.id}', false)">
                    <i class="fas fa-times"></i>
                    Não, não tenho este sintoma
                </button>
            </div>
        </div>
    `;
}

function answerSymptom(symptomId, hasSymptom) {
  if (hasSymptom) {
    // Encontrar o sintoma no banco de dados
    const allSymptoms = [
      ...SYMPTOMS_DATABASE.mild,
      ...SYMPTOMS_DATABASE.moderate,
      ...SYMPTOMS_DATABASE.severe,
    ];

    const symptom = allSymptoms.find((s) => s.id === symptomId);

    if (symptom) {
      currentState.selectedSymptoms.push(symptom);

      // Se o sintoma precisa de detalhes mostra a tela de características
      if (symptom.needsDetails) {
        currentState.currentSymptom = symptom;
        showCharacteristicsScreen(symptom);
        return;
      }
    }
  }

  nextQuestion();
}

function nextQuestion() {
  currentState.questionIndex++;
  generateQuestions();
}

function showCharacteristicsScreen(symptom) {
  const container = document.getElementById("characteristics-container");
  const details = SYMPTOM_DETAILS[symptom.detailType] || [];

  if (details.length === 0) {
    // Continuar se não houver detalhes específicos
    continueFromCharacteristics();
    return;
  }

  let html = `
        <h3>Características do sintoma: ${symptom.name}</h3>
        <p>Selecione as opções que se aplicam ao seu caso:</p>
    `;

  details.forEach((detail) => {
    if (detail.type === "intensity") {
      html += `
        <div class="characteristic-group">
          <h4>${detail.text}</h4>
          <div class="intensity-options">
      `;
      detail.options.forEach((option) => {
        html += `
          <label class="intensity-option" onclick="selectIntensity('${symptom.id}', '${option.value}', '${option.severity}')">
            <input type="radio" name="intensity_${symptom.id}" value="${option.value}" id="intensity_${option.value}">
            <span class="intensity-label ${option.severity}">${option.text}</span>
          </label>
        `;
      });
      html += `
          </div>
        </div>
      `;
    } else {
      html += `
            <div class="checkbox-item" onclick="toggleCharacteristic('${symptom.id}', '${detail.id}')">
                <input type="checkbox" id="char_${detail.id}" onchange="toggleCharacteristic('${symptom.id}', '${detail.id}')">
                <label for="char_${detail.id}">${detail.text}</label>
            </div>
        `;
    }
  });

  container.innerHTML = html;
  showScreen("characteristics");
}

// Função para selecionar intensidade
function selectIntensity(symptomId, intensity, severity) {
  if (!currentState.symptomDetails[symptomId]) {
    currentState.symptomDetails[symptomId] = [];
  }

  // Remove intensidade anterior e adiciona nova intensidade
  currentState.symptomDetails[symptomId] = currentState.symptomDetails[
    symptomId
  ].filter((detail) => !detail.startsWith("intensity_"));
  currentState.symptomDetails[symptomId].push(`intensity_${intensity}`);

  // Marca visualmente a opção selecionada
  document
    .querySelectorAll(`input[name="intensity_${symptomId}"]`)
    .forEach((radio) => {
      const label = radio.closest(".intensity-option");
      if (radio.checked) {
        label.classList.add("selected");
      } else {
        label.classList.remove("selected");
      }
    });
}

function toggleCharacteristic(symptomId, characteristicId) {
  if (!currentState.symptomDetails[symptomId]) {
    currentState.symptomDetails[symptomId] = [];
  }

  const index =
    currentState.symptomDetails[symptomId].indexOf(characteristicId);
  if (index > -1) {
    currentState.symptomDetails[symptomId].splice(index, 1);
  } else {
    currentState.symptomDetails[symptomId].push(characteristicId);
  }

  const checkbox = document.getElementById("char_" + characteristicId);
  const item = checkbox.closest(".checkbox-item");

  if (checkbox.checked) {
    item.classList.add("checked");
  } else {
    item.classList.remove("checked");
  }
}

function continueFromCharacteristics() {
  nextQuestion();
  showScreen("assessment");
}

// ========== ANÁLISE DE RESULTADOS ==========
function analyzeResults() {
  showLoading(true);

  setTimeout(() => {
    const result = calculateRiskLevel();
    showLoading(false);

    // Verifica se é emergência crítica
    if (result.level === "emergency") {
      showEmergencyAlert();
    } else {
      showResults(result);
    }

    // Salvar no histórico
    saveToHistory(result);
  }, 2000);
}

function calculateRiskLevel() {
  let riskLevel = "mild";
  let riskScore = 0;
  let triggerSymptoms = [];
  let dangerousCombinations = [];

  // Analisar cada sintoma selecionado
  currentState.selectedSymptoms.forEach((symptom) => {
    // Determinar nível base do sintoma
    if (SYMPTOMS_DATABASE.severe.some((s) => s.id === symptom.id)) {
      riskScore += 100;
      triggerSymptoms.push(symptom);
      riskLevel = "emergency";
    } else if (SYMPTOMS_DATABASE.moderate.some((s) => s.id === symptom.id)) {
      riskScore += 50;
      if (riskLevel !== "emergency") {
        riskLevel = "moderate";
      }
    } else if (SYMPTOMS_DATABASE.variable.some((s) => s.id === symptom.id)) {
      const details = currentState.symptomDetails[symptom.id] || [];
      const intensityDetail = details.find((d) => d.startsWith("intensity_"));

      if (intensityDetail) {
        const intensity = intensityDetail.split("_")[1];
        if (intensity === "severe") {
          riskScore += 100;
          triggerSymptoms.push(symptom);
          riskLevel = "emergency";
        } else if (intensity === "moderate") {
          riskScore += 50;
          if (riskLevel !== "emergency") {
            riskLevel = "moderate";
          }
        } else {
          riskScore += 10;
        }
      } else {
        riskScore += 10;
      }
    } else {
      riskScore += 10;
    }

    // Analisar características específicas
    const details = currentState.symptomDetails[symptom.id] || [];
    details.forEach((detailId) => {
      if (detailId.startsWith("intensity_")) return;

      const detailInfo = findSymptomDetail(symptom.detailType, detailId);
      if (detailInfo) {
        if (detailInfo.severity === "severe") {
          riskScore += 75;
          riskLevel = "emergency";
        } else if (detailInfo.severity === "moderate") {
          riskScore += 25;
          if (riskLevel === "mild") {
            riskLevel = "moderate";
          }
        }
      }
    });
  });

  // Verificar combinações perigosas
  dangerousCombinations = checkDangerousCombinations();
  if (dangerousCombinations.length > 0) {
    riskLevel = "emergency";
    riskScore += 200;
  }

  return {
    level: riskLevel,
    score: riskScore,
    symptoms: currentState.selectedSymptoms,
    triggerSymptoms,
    dangerousCombinations,
    recommendation: generateRecommendation(riskLevel, dangerousCombinations),
  };
}

function findSymptomDetail(detailType, detailId) {
  const details = SYMPTOM_DETAILS[detailType] || [];
  return details.find((d) => d.id === detailId);
}

function checkDangerousCombinations() {
  const selectedIds = currentState.selectedSymptoms.map((s) => s.id);
  const foundCombinations = [];

  DANGEROUS_COMBINATIONS.forEach((combination) => {
    const hasAllSymptoms = combination.symptoms.every((symptomId) =>
      selectedIds.includes(symptomId)
    );

    if (hasAllSymptoms) {
      foundCombinations.push(combination);
    }
  });

  return foundCombinations;
}

function generateRecommendation(level, combinations) {
  let recommendation = {
    unit: "",
    urgency: "",
    message: "",
    actions: [],
  };

  switch (level) {
    case "emergency":
      recommendation.unit = "Emergência Hospitalar";
      recommendation.urgency = "IMEDIATA";
      recommendation.message =
        "Seus sintomas indicam uma situação de emergência médica. Procure imediatamente um pronto-socorro ou ligue para o SAMU 192.";
      recommendation.actions = [
        "Ligue imediatamente para o SAMU: 192",
        "Vá ao pronto-socorro mais próximo",
        "Não dirija - peça para alguém te levar ou chame ambulância",
      ];

      if (combinations.length > 0) {
        recommendation.message += ` Atenção: ${combinations[0].message}`;
      }
      break;

    case "moderate":
      recommendation.unit = "UPA 24h";
      recommendation.urgency = "RÁPIDA";
      recommendation.message =
        "Seus sintomas precisam de avaliação médica rápida. Procure uma UPA (Unidade de Pronto Atendimento) 24 horas.";
      recommendation.actions = [
        "Vá a uma UPA 24h",
        "Leve documentos e cartão do SUS",
        "Se os sintomas piorarem, ligue 192",
      ];
      break;

    case "mild":
    default:
      recommendation.unit = "UBS (Unidade Básica de Saúde)";
      recommendation.urgency = "ELETIVA";
      recommendation.message =
        "Seus sintomas podem ser avaliados em uma consulta de rotina. Procure uma UBS próxima ou agende uma consulta.";
      recommendation.actions = [
        "Agende consulta em uma UBS",
        "Leve documentos e cartão do SUS",
        "Observe se os sintomas pioram",
      ];
      break;
  }

  return recommendation;
}

// ========== EXIBIÇÃO DE RESULTADOS ==========
function showResults(result) {
  const container = document.getElementById("result-content");
  const recommendation = result.recommendation;

  let resultClass = "result-" + result.level;
  let icon = "";

  switch (result.level) {
    case "emergency":
      icon = "fas fa-exclamation-triangle";
      break;
    case "moderate":
      icon = "fas fa-clock";
      break;
    case "mild":
    default:
      icon = "fas fa-check-circle";
      break;
  }

  let html = `
        <div class="${resultClass}">
            <i class="${icon} result-icon"></i>
            <h2 class="result-title">${recommendation.unit}</h2>
            <div class="urgency-level">Urgência: ${recommendation.urgency}</div>
            <p class="result-description">${recommendation.message}</p>
            
            <div class="recommendation-actions">
                <h4>O que fazer agora:</h4>
                <ul>
    `;

  recommendation.actions.forEach((action) => {
    html += `<li>${action}</li>`;
  });

  html += `
                </ul>
            </div>
        </div>
    `;

  container.innerHTML = html;
  showScreen("results");
}

function showEmergencyAlert() {
  const alert = document.getElementById("emergency-alert");
  alert.classList.remove("hidden");

  setTimeout(() => {
    alert.classList.add("hidden");
    const result = calculateRiskLevel();
    showResults(result);
  }, 10000);
}

// ========== LOCALIZAÇÃO E MAPAS ==========
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentState.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      },
      (error) => {
        console.warn("Erro ao obter localização:", error);
        currentState.userLocation = {
          lat: -21.7877,
          lng: -46.5615,
        };
      }
    );
  }
}

function showLocationScreen() {
  const result = calculateRiskLevel();
  const unitTypes = {
    emergency: HEALTH_UNITS.emergency,
    moderate: HEALTH_UNITS.upa,
    mild: HEALTH_UNITS.ubs,
  };

  const unitsToShow = unitTypes[result.level] || HEALTH_UNITS.ubs;
  displayHealthUnits(unitsToShow, result.level);
  showScreen("map");
}

function displayHealthUnits(units, level) {
  const container = document.getElementById("locations-list");
  const userLat = currentState.userLocation
    ? currentState.userLocation.lat
    : -21.7877;
  const userLng = currentState.userLocation
    ? currentState.userLocation.lng
    : -46.5615;

  // Calcular distâncias e ordenar
  const unitsWithDistance = units
    .map((unit) => {
      const distance = calculateDistance(userLat, userLng, unit.lat, unit.lng);
      return { ...unit, distance };
    })
    .sort((a, b) => a.distance - b.distance);

  let html = "<h3>Unidades próximas a você:</h3>";

  const iconClasses = { emergency: "emergency", moderate: "upa", mild: "ubs" };
  const iconTexts = { emergency: "H", moderate: "U", mild: "S" };

  unitsWithDistance.forEach((unit) => {
    const iconClass = iconClasses[level] || "ubs";
    const iconText = iconTexts[level] || "S";

    html += `
            <div class="location-item" onclick="focusOnUnit(${unit.lat}, ${
      unit.lng
    }, '${unit.name}')">
                <div class="location-icon ${iconClass}">
                    ${iconText}
                </div>
                <div class="location-info">
                    <h4>${unit.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${unit.address}</p>
                    <p><i class="fas fa-phone"></i> ${unit.phone}</p>
                    <p><i class="fas fa-clock"></i> ${unit.hours}</p>
                    <p><i class="fas fa-stethoscope"></i> ${unit.services}</p>
                </div>
                <div class="location-distance">
                    ${unit.distance.toFixed(1)} km
                    <br>
                    <small onclick="openMaps('${unit.address}', '${
      unit.name
    }')" style="color: #2196f3; cursor: pointer;">
                        <i class="fas fa-external-link-alt"></i> Abrir rota
                    </small>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;

  // Inicializar mapa real com Leaflet
  initializeMap(unitsWithDistance, level, userLat, userLng);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function openMaps(address, name) {
  const query = encodeURIComponent(`${name}, ${address}, Poços de Caldas, MG`);
  const url = `https://www.google.com/maps/search/${query}`;
  window.open(url, "_blank");
}

// ========== HISTÓRICO ==========
function saveToHistory(result) {
  const historyEntry = {
    date: new Date().toISOString(),
    symptoms: result.symptoms.map((s) => s.name),
    level: result.level,
    recommendation: result.recommendation.unit,
    id: Date.now(),
  };

  currentState.assessmentHistory.unshift(historyEntry);

  // Mantem apenas os últimos 10 registros
  if (currentState.assessmentHistory.length > 10) {
    currentState.assessmentHistory = currentState.assessmentHistory.slice(
      0,
      10
    );
  }

  localStorage.setItem(
    "assessmentHistory",
    JSON.stringify(currentState.assessmentHistory)
  );
}

function showHistory() {
  const container = document.getElementById("history-list");

  if (currentState.assessmentHistory.length === 0) {
    container.innerHTML = "<p>Nenhuma avaliação anterior encontrada.</p>";
  } else {
    let html = "";
    const levelColors = {
      emergency: "#F44336",
      moderate: "#FF9800",
      mild: "#4CAF50",
    };

    currentState.assessmentHistory.forEach((entry) => {
      const date = new Date(entry.date).toLocaleDateString("pt-BR");
      const time = new Date(entry.date).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const levelColor = levelColors[entry.level] || levelColors.mild;

      html += `
                <div class="history-item" style="border-left: 4px solid ${levelColor}; padding: 15px; margin-bottom: 15px; background: #f9f9f9; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>${entry.recommendation}</strong>
                        <span style="color: #666;">${date} ${time}</span>
                    </div>
                    <p style="margin: 5px 0; color: #666;">
                        <strong>Sintomas:</strong> ${entry.symptoms.join(", ")}
                    </p>
                </div>
            `;
    });
    container.innerHTML = html;
  }

  document.getElementById("history-modal").style.display = "block";
}

// ========== FUNÇÕES DE UTILIDADE ==========
function showLoading(show) {
  const loading = document.getElementById("loading");
  if (show) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
}

function callSAMU() {
  if (confirm("Deseja ligar para o SAMU (192)?")) {
    window.open("tel:192");
  }
}

function showEmergencyLocations() {
  displayHealthUnits(HEALTH_UNITS.emergency, "emergency");
  showScreen("map");
  document.getElementById("emergency-alert").classList.add("hidden");
}

function showInfo() {
  document.getElementById("info-modal").style.display = "block";
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
}

function handleKeyboardNavigation(event) {
  // ESC para fechar modais
  if (event.key === "Escape") {
    closeModal();
    const alert = document.getElementById("emergency-alert");
    if (!alert.classList.contains("hidden")) {
      alert.classList.add("hidden");
    }
  }

  // Enter para confirmar ações
  if (event.key === "Enter") {
    const focusedElement = document.activeElement;
    if (focusedElement && focusedElement.classList.contains("answer-btn")) {
      focusedElement.click();
    }
  }
}

// ========== EVENT LISTENERS PARA MODAIS ==========
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ========== LOGS E DEBUG ==========
// ========== FUNÇÕES DO MAPA LEAFLET ==========
function initializeMap(units, level, userLat, userLng) {
  const mapContainer = document.getElementById("map-container");

  // Limpar o container do mapa
  mapContainer.innerHTML =
    '<div id="leaflet-map" style="height: 100%; width: 100%;"></div>';

  if (currentState.map) {
    currentState.map.remove();
  }

  // Inicializar novo mapa
  currentState.map = L.map("leaflet-map").setView([userLat, userLng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(currentState.map);

  currentState.markers.forEach((marker) => marker.remove());
  currentState.markers = [];

  // Adicionar marcador da localização do usuário
  const userMarker = L.marker([userLat, userLng], {
    icon: L.divIcon({
      className: "user-location-marker",
      html: '<div style="background: #2196f3; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    }),
  }).addTo(currentState.map);

  userMarker.bindPopup("<b>Sua localização</b>");
  currentState.markers.push(userMarker);

  // Adicionar marcadores das unidades de saúde
  const mapConfig = {
    emergency: { color: "#f44336", text: "H" },
    moderate: { color: "#ff9800", text: "U" },
    mild: { color: "#4caf50", text: "S" },
  };

  const config = mapConfig[level] || mapConfig.mild;

  units.forEach((unit) => {
    const unitMarker = L.marker([unit.lat, unit.lng], {
      icon: L.divIcon({
        className: "health-unit-marker",
        html: `<div style="background: ${config.color}; color: white; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">${config.text}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      }),
    }).addTo(currentState.map);

    const popupContent = `
      <div style="max-width: 250px;">
        <h4 style="margin: 0 0 8px 0; color: ${config.color};">${unit.name}</h4>
        <p style="margin: 4px 0; font-size: 13px;"><i class="fas fa-map-marker-alt"></i> ${
          unit.address
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><i class="fas fa-phone"></i> ${
          unit.phone
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><i class="fas fa-clock"></i> ${
          unit.hours
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><i class="fas fa-stethoscope"></i> ${
          unit.services
        }</p>
        <p style="margin: 8px 0 4px 0; font-weight: bold; color: ${
          config.color
        };">${unit.distance.toFixed(1)} km de distância</p>
        <button onclick="openMaps('${unit.address}', '${
      unit.name
    }')" style="background: ${
      config.color
    }; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-top: 8px;">
          <i class="fas fa-route"></i> Como chegar
        </button>
      </div>
    `;

    unitMarker.bindPopup(popupContent);
    currentState.markers.push(unitMarker);
  });

  if (units.length > 0) {
    const group = new L.featureGroup([...currentState.markers]);
    currentState.map.fitBounds(group.getBounds().pad(0.05), {
      maxZoom: 15, // Limita o zoom máximo para evitar zoom out excessivo
      minZoom: 12, // Garante um zoom mínimo adequado
    });
  }
}

function focusOnUnit(lat, lng, unitName) {
  if (!currentState.map) return;

  currentState.map.setView([lat, lng], 16);

  currentState.markers.forEach((marker) => {
    const markerLatLng = marker.getLatLng();
    if (
      Math.abs(markerLatLng.lat - lat) < 0.0001 &&
      Math.abs(markerLatLng.lng - lng) < 0.0001
    ) {
      marker.openPopup();
    }
  });
}

function clearMap() {
  if (currentState.map) {
    currentState.map.remove();
    currentState.map = null;
    currentState.markers = [];
  }
}
