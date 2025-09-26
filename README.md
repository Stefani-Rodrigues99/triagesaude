# 🏥 SaúdeTriage - Aplicativo de Classificação de Sintomas Clínicos

## 📋 **VISÃO GERAL**

O **SaúdeTriage** é um aplicativo web desenvolvido para classificação de sintomas clínicos de forma digital e simplificada, auxiliando usuários na identificação do nível de gravidade do seu quadro clínico e direcionando-os às unidades de saúde adequadas em **Poços de Caldas - MG**.

### **🎯 Objetivo Principal**

Fornecer uma ferramenta intuitiva que permite aos usuários:

- Avaliar seus sintomas de forma rápida e segura
- Receber classificação baseada em critérios médicos
- Ser direcionado para a unidade de saúde apropriada (UBS, UPA ou Emergência)
- Localizar unidades de saúde próximas com integração de mapas

---

## **FUNCIONALIDADES PRINCIPAIS**

### **1. Avaliação Inteligente de Sintomas**

- **Interface tipo chatbot** com perguntas individuais
- **30+ sintomas categorizados** em três níveis de gravidade
- **Análise de características específicas** (dor, sangramento, tipos, etc.)
- **Detecção automática de combinações perigosas** de sintomas

### **2. Sistema de Classificação Médica**

Baseado no documento clínico fornecido, classifica sintomas em:

#### 🟢 **Situações Leves (UBS)**

- Febre baixa (até 38°C)
- Dor de garganta leve, resfriado
- Dores de cabeça ocasionais
- Dor abdominal leve
- Dores musculares/articulares leves
- Reações alérgicas leves
- Acompanhamento de doenças crônicas

#### 🟡 **Situações Moderadas (UPA)**

- Febre alta persistente (>39°C)
- Crises de asma leves/moderadas
- Vômitos/diarreia persistentes
- Dor abdominal moderada/súbita
- Infecções de pele extensas
- Dores de cabeça intensas
- Pequenos acidentes/fraturas

#### 🔴 **Situações Graves (Emergência)**

- Dor no peito intensa
- Falta de ar intensa
- Sinais de AVC
- Traumas graves
- Convulsões
- Perda de consciência
- Sangramento intenso
- Reações alérgicas graves
- Emergências na gravidez

### **3. Análise de Combinações Perigosas**

O sistema detecta automaticamente combinações de sintomas que indicam maior gravidade:

- **Febre + Falta de ar** → Risco de pneumonia grave
- **Febre + Rigidez de nuca + Dor de cabeça** → Risco de meningite
- **Dor abdominal + Vômitos persistentes** → Risco de apendicite
- **Dor no peito + Falta de ar** → Risco de infarto
- **Dor de cabeça explosiva + Vômito** → Risco de hemorragia cerebral

### **4. Localização Inteligente**

- **Geolocalização automática** do usuário
- **Unidades de saúde reais** em Poços de Caldas - MG:
- **Cálculo de distância** e ordenação por proximidade
- **Integração com leaflet** para direcionamento

### **5. Recursos Adicionais**

- **Histórico de avaliações** (armazenamento local)
- **Modo de emergência** com alertas visuais e sonoros
- **Acesso rápido ao SAMU 192**
- **Interface acessível** com navegação por teclado
- **Design responsivo** para dispositivos móveis

---

##  **TECNOLOGIAS UTILIZADAS**

### **Frontend**

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com gradientes e animações
- **JavaScript**: Lógica de negócio e interatividade

### **APIs e Integrações**

- **leaflet API**: Localização e direcionamento
- **Geolocation API**: Obtenção da localização do usuário
- **Local Storage**: Armazenamento do histórico

### **Design e UX**

- **Font Awesome**: Ícones médicos e de interface
- **CSS Grid/Flexbox**: Layout responsivo
- **Progressive Web App**: Otimizado para mobile

---

##  **ESTRUTURA DA INTERFACE**

### **Tela Inicial**

- **Logo centralizado** com ícone de coração pulsante
- **Texto motivacional**: "Descubra em minutos para onde ir"
- **Tags visuais** das unidades (UBS, UPA, Emergência)
- **Botão de ação principal**: "Iniciar Autoavaliação"
- **Ações rápidas**: Como funciona, Histórico, SAMU 192

### **Fluxo de Avaliação**

- **Barra de progresso** visual
- **Perguntas individuais** com ícones ilustrativos
- **Botões de resposta** grandes e acessíveis
- **Navegação fluida** entre perguntas

### **Avaliação de Características**

- **Tela dedicada** para sintomas que necessitam detalhamento
- **Checkboxes interativos** para múltipla seleção
- **Categorização por gravidade** (leve, moderado, grave)

### **Tela de Resultados**

- **Cores temáticas** por nível de gravidade
- **Recomendação clara** da unidade apropriada
- **Lista de ações** a serem tomadas
- **Botões de ação**: Localizar unidade, Nova avaliação

### **Mapa e Localização**

- **Lista ordenada** por distância
- **Informações completas** (nome, endereço, telefone)
- **Integração direta** com leaflet

---

##  **DESIGN E ACESSIBILIDADE**

### **Paleta de Cores**

- **Verde (#4CAF50)**: Sintomas leves (UBS)
- **Laranja (#FF9800)**: Sintomas moderados (UPA)
- **Vermelho (#F44336)**: Sintomas graves (Emergência)
- **Azul (#2196F3)**: Elementos de interface
- **Gradientes**: Fundo principal com tema médico

### **Tipografia**

- **Fonte**: Segoe UI (sistema)
- **Tamanhos responsivos** para diferentes dispositivos
- **Hierarquia clara** com títulos e subtítulos

### **Recursos de Acessibilidade**

- **Navegação por teclado** (Tab, Enter, ESC)
- **Alto contraste** para elementos importantes
- **Ícones descritivos** para cada categoria de sintoma
- **Textos alternativos** em elementos visuais
- **Suporte a leitores de tela**

### **Responsividade**

- **Mobile-first design**
- **Breakpoints otimizados** para tablets e desktop
- **Touch-friendly** com botões grandes
- **Layout adaptável** para diferentes orientações

---

##  **COMO USAR**

1. **Acesse o aplicativo** no navegador
2. **Clique em "Iniciar Autoavaliação"**
3. **Responda às perguntas** sobre seus sintomas
4. **Detalhe características** quando solicitado
5. **Receba a recomendação** de unidade adequada
6. **Localize a unidade** mais próxima
7. **Acesse o histórico** para consultas anteriores

---

##  **LÓGICA DE CLASSIFICAÇÃO**

### **Sistema de Pontuação**

- **Sintomas leves**: +10 pontos
- **Sintomas moderados**: +50 pontos
- **Sintomas graves**: +100 pontos
- **Características graves**: +75 pontos
- **Características moderadas**: +25 pontos
- **Combinações perigosas**: +200 pontos

### **Algoritmo de Decisão**

```javascript
// Pseudocódigo do algoritmo
function classificarRisco(sintomas, detalhes) {
  let pontuacao = 0;
  let nivel = "leve";

  // Analisar cada sintoma
  sintomas.forEach((sintoma) => {
    pontuacao += obterPontuacaoSintoma(sintoma);
  });

  // Analisar características específicas
  detalhes.forEach((detalhe) => {
    pontuacao += obterPontuacaoDetalhe(detalhe);
  });

  // Verificar combinações perigosas
  if (temCombinacoesPerigosas(sintomas)) {
    pontuacao += 200;
    nivel = "grave";
  }

  // Determinar nível final
  if (pontuacao >= 100) nivel = "grave";
  else if (pontuacao >= 50) nivel = "moderado";

  return nivel;
}
---

## **AVISOS IMPORTANTES**

### **Limitações Médicas**

> **IMPORTANTE**: Este aplicativo é uma ferramenta de triagem inicial e **NÃO substitui consulta médica profissional**. Em caso de dúvida ou emergência, procure sempre atendimento médico presencial.

### **Responsabilidades**

- O aplicativo oferece **orientação inicial** baseada em protocolos médicos
- A **responsabilidade final** pela decisão de buscar atendimento é do usuário
- **Não há garantias** sobre precisão diagnóstica
- **Recomenda-se sempre** validação médica profissional

---
## **CONCLUSÃO**

O **SaúdeTriage** representa uma solução moderna e acessível para triagem inicial de sintomas clínicos, combinando tecnologia web avançada com protocolos médicos estabelecidos.

**Características destacadas**:

-  **Interface intuitiva** adequada para todas as idades
-  **Recursos de emergência** integrados
-  **Design responsivo** para todos os dispositivos
-  **Privacidade garantida** com armazenamento local

Esta ferramenta visa contribuir para um **sistema de saúde mais eficiente**, direcionando usuários para o nível de atendimento adequado e reduzindo sobrecarga nas unidades de emergência.

