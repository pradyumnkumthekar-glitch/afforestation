const ICON_PATHS = {
  'more-vertical': [{"circle": {"cx": "12", "cy": "12", "r": "1"}}, {"circle": {"cx": "12", "cy": "5", "r": "1"}}, {"circle": {"cx": "12", "cy": "19", "r": "1"}}],
  'info': [{"d": "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}, {"d": "M12 16v-4"}, {"d": "M12 8h.01"}],
  'tree-pine': [{
    d: 'M17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h10z'
  }, {
    d: 'M12 2l4 7H8l4-7z'
  }, {
    d: 'M15 9l3 5H6l3-5h6z'
  }, {
    d: 'M12 22v-3'
  }],
  'menu': [{
    d: 'M4 12h16'
  }, {
    d: 'M4 6h16'
  }, {
    d: 'M4 18h16'
  }],
  'x': [{
    d: 'M18 6L6 18'
  }, {
    d: 'M6 6l12 12'
  }],
  'database': [{
    d: 'M12 8c-3.87 0-7-1.12-7-2.5S8.13 3 12 3s7 1.12 7 2.5S15.87 8 12 8z',
    fill: 'none'
  }, {
    d: 'M19 5.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4'
  }, {
    d: 'M19 9.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4'
  }, {
    d: 'M19 13.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4'
  }],
  'arrow-right': [{
    d: 'M5 12h14'
  }, {
    d: 'M12 5l7 7-7 7'
  }],
  'calendar': [{
    d: 'M8 2v4',
    tag: 'line'
  }, {
    d: 'M16 2v4',
    tag: 'line'
  }, {
    d: 'M3 10h18'
  }, {
    d: 'M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5'
  }],
  'layers': [{
    d: 'M12 2L2 7l10 5 10-5-10-5z'
  }, {
    d: 'M2 17l10 5 10-5'
  }, {
    d: 'M2 12l10 5 10-5'
  }],
  'map': [{
    d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z'
  }, {
    d: 'M15 5.764v15'
  }, {
    d: 'M9 3.236v15'
  }],
  'trees': [{
    d: 'M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0z'
  }, {
    d: 'M7 16v6'
  }, {
    d: 'M13 19v3'
  }, {
    d: 'M16 13v.2A3 3 0 0 1 14.9 19H11a3 3 0 0 1-1-5.8V13a3 3 0 0 1 6 0z'
  }],
  'thermometer': [{
    d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z'
  }],
  'map-pin': [{
    d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'
  }, {
    d: 'M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    fill: 'none'
  }],
  'heart': [{
    d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
  }],
  'snowflake': [{
    d: 'M2 12h20'
  }, {
    d: 'M12 2v20'
  }, {
    d: 'M20 16l-4-4 4-4'
  }, {
    d: 'M4 8l4 4-4 4'
  }, {
    d: 'M16 4l-4 4-4-4'
  }, {
    d: 'M8 20l4-4 4 4'
  }],
  'leaf': [{
    d: 'M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.4 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z'
  }, {
    d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'
  }],
  'send': [{
    d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'
  }, {
    d: 'M21.854 2.147l-10.94 10.939'
  }],
  'phone': [{
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }],
  'sparkles': [{
    d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'
  }, {
    d: 'M20 3v4'
  }, {
    d: 'M22 5h-4'
  }, {
    d: 'M4 17v2'
  }, {
    d: 'M5 18H3'
  }],
  'check': [{
    d: 'M20 6L9 17l-5-5'
  }],
  'search': [{
    d: 'M19 11A8 8 0 1 1 3 11a8 8 0 0 1 16 0z',
    fill: 'none'
  }, {
    d: 'M21 21l-4.3-4.3'
  }],
  'bot': [{
    d: 'M12 8V4H8'
  }, {
    d: 'M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z'
  }, {
    d: 'M2 14h2'
  }, {
    d: 'M20 14h2'
  }, {
    d: 'M15 13v2'
  }, {
    d: 'M9 13v2'
  }],
  'message-circle': [{
    d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z'
  }],
  'chevron-down': [{
    d: 'M6 9l6 6 6-6'
  }],
  'user': [{
    d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
  }, {
    d: 'M8 8a4 4 0 0 1 8 0a4 4 0 0 1-8 0z'
  }],
  'users': [{
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }, {
    d: 'M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  }, {
    d: 'M22 21v-2a4 4 0 0 0-3-3.87'
  }, {
    d: 'M16 3.13a4 4 0 0 1 0 7.75'
  }]
,
  'wind': [{"d": "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}],
  'droplets': [{"d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 2.9 7 2.9s-2.29 4.09-3.29 5.06C2.57 8.9 2 10 2 11.16c0 2.2 1.8 4.05 4 4.05z"}, {"d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}],
  'trending-up': [{"d": "M23 6l-9.5 9.5-5-5L1 18"}, {"d": "M17 6h6v6"}],
  'arrow-up': [{"d": "M12 19V5"}, {"d": "M5 12l7-7 7 7"}],
  'cloud': [{"d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],
  'shield': [{"d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}],
  'home': [{"d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}, {"d": "M9 22V12h6v10"}]};



const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: function() {},
  t: {}
});

const TRANSLATIONS = {
  "en": {
    "filters": {
      "all": "All Trees",
      "fruit": "Fruits",
      "medicinal": "Medicinal",
      "flower": "Flowers",
      "shade": "Shade & Timber"
    },
    "header": {
      "species": "species",
      "co2Unit": "kg CO₂",
      "o2Unit": "kg O₂"
    },
    "tabs": {
      "about": "About Us",
      "aboutMobile": "About",
      "catalog": "Species Specs",
      "catalogMobile": "Catalog",
      "methodology": "Methodology",
      "methodologyMobile": "Method",
      "assistant": "AI Engineer",
      "assistantMobile": "AI Eng.",
      "contact": "Contact",
      "contactMobile": "Contact"
    },
    "about": {
      "title": "About & Services",
      "subtitle": "We engineer sustainable futures. Here's a brief overview of the core services and technologies provided by our platform.",
      "services": [
        {
          "title": "Miyawaki Method Experts",
          "desc": "We specialize in the Miyawaki afforestation technique, creating hyper-dense, biodiverse mini-forests that grow 10x faster and absorb 30x more carbon than conventional plantations."
        },
        {
          "title": "Species Data Hub",
          "desc": "Access our comprehensive database of native Indian tree species, complete with exact growth rates, canopy spreads, and critical ecological metrics."
        },
        {
          "title": "Carbon & O2 Tracking",
          "desc": "Quantify your environmental impact. We provide precise calculations for CO2 absorption and oxygen release per year for every species planted."
        },
        {
          "title": "Structural Safety Engineering",
          "desc": "Plant safely. Our system provides AI-powered guidelines for minimum safe planting distances from buildings, roads, and utilities to prevent root damage."
        }
      ],
      "canopy": {
        "title": "Canopy Projection",
        "p1": "Canopy Projection is a forward-looking visualization tool. It models the future growth and spread of the mature tree canopy across planting sites for strategic environmental planning.",
        "p2": "This data is used to calculate optimized tree density and predict future shade mapping. This is crucial for temperature regulation and urban heat island mitigation.",
        "p3": "Furthermore, it helps in analyzing the total carbon sequestration potential per unit area, maximizing the environmental benefits of your project.",
        "kpiTitle": "Key Performance Indicators",
        "avgSpread": "Average Canopy Spread (m²)",
        "avgSpreadVal": "25m²",
        "projShade": "Projected Shade Area",
        "projShadeVal": "15.5 Ha",
        "annualCO2": "Annual CO₂ Sequestration (per m²)",
        "annualCO2Val": "1.2kg"
      },
      "root": {
        "title": "Root Analysis",
        "p1": "Subterranean Root Analysis is a core function that studies the complex below-ground interactions of diverse tree species and their profound impact on overall soil health.",
        "p2": "Different root structures—ranging from deep taproots to extensive fibrous systems—work together to anchor the soil, prevent erosion, and enhance water infiltration.",
        "p3": "This process facilitates vital nutrient cycling and actively manages the subterranean water table, playing a critical role in determining the long-term viability and stability of the ecosystem.",
        "kpiTitle": "Key Performance Indicators",
        "soilBinding": "Subterranean Soil Binding Score",
        "soilBindingVal": "8.5 / 10",
        "waterTable": "Water Table Stabilization Impact",
        "waterTableVal": "High",
        "erosionRed": "Projected Soil Erosion Reduction",
        "erosionRedVal": "60%"
      }
    },
    "catalog": {
      "badge": "Tree Database",
      "title": "Native Tree Species",
      "subtitle": "A living archive of native species — each one a quiet partner in the dialogue between landscape and the built environment.",
      "searchPlaceholder": "Search trees by name...",
      "rankPrefix": "Rank #",
      "co2": "CO₂: ",
      "o2": "O₂: ",
      "kgYr": "kg/yr",
      "canopy": "Canopy: ",
      "water": "Water: ",
      "safeDist": "Safe Dist: ",
      "bldg": "Bldg ",
      "road": "Road ",
      "modalOverview": "Tree Overview",
      "co2Abs": "CO₂ Absorption",
      "o2Rel": "O₂ Release",
      "waterReq": "Water Req.",
      "growthRate": "Growth Rate",
      "matureHeight": "Mature Height",
      "canopySpread": "Canopy Spread",
      "safePlantingDist": "Safe Planting Distance",
      "fromBldg": "From Building:",
      "fromRoad": "From Road:",
      "closeHint": "Press ESC or click anywhere outside to close",
      "noResults": "No tree species found matching your search."
    },
    "methodology": {
      "badge": "Advanced Afforestation",
      "title": "The Miyawaki Methodology",
      "desc": "An innovative afforestation technique that uses native species to create dense, multilayered forests. By ensuring foliage receives sunlight only from the top, the methodology prompts rapid upward growth rather than sideways expansion.",
      "benefitsTitle": "Environmental Benefits",
      "benefits": [
        "Reduction of pressure on natural forests",
        "Efficient nutrient recycling by deep-rooted trees on site",
        "Better protection of ecological systems",
        "Microclimate improvements: lowered soil temperature and reduced evaporation through mulching and shading"
      ],
      "principlesTitle": "Core Principles",
      "principles": [
        {
          "title": "Density & Growth",
          "desc": "Forests become 30x denser, grow 10x faster, and are maintenance-free after 3 years."
        },
        {
          "title": "Planting Rules",
          "desc": "Plant 3-5 saplings per sq meter, ensuring different species are planted adjacent to each other."
        },
        {
          "title": "Site Requirements",
          "desc": "Minimum size of 4x3 meters. Site must receive sunlight for at least 8 hours per day."
        },
        {
          "title": "The 4-Layer System",
          "desc": "Shrubs (up to 6ft), sub-trees (up to 25ft), trees (up to 40ft), and canopy (above 40ft)."
        }
      ],
      "stepsTitle": "6 Implementation Steps",
      "stepsSubtitle": "A systematic approach to transforming degraded land into a thriving, self-sustaining ecosystem.",
      "steps": [
        {
          "step": "01",
          "title": "Soil Preparation",
          "desc": "Plough loamy soils 1-2 feet deep, add biomass for aeration, moisture retainers, mulch, and manure."
        },
        {
          "step": "02",
          "title": "Species Selection",
          "desc": "Choose indigenous species suited to the agro-climatic conditions."
        },
        {
          "step": "03",
          "title": "Seed Collection",
          "desc": "Collect seeds from natural falls or by shaking trees."
        },
        {
          "step": "04",
          "title": "Seedling",
          "desc": "Use young potted seedlings rather than mature trees."
        },
        {
          "step": "05",
          "title": "Planting Techniques",
          "desc": "Adapt techniques based on terrain: Rocky Surfaces, Slope/Narrow Terraces, or Flat/Hard Soil Surfaces."
        },
        {
          "step": "06",
          "title": "Maintenance",
          "desc": "Water daily initially, tie shoots for support, do not prune, and maintain mulching for at least 1 year."
        }
      ]
    },
    "assistant": {
      "title": "Arbor Engineer",
      "pro": "Pro",
      "role": "Senior Env. Engineer • Analytical",
      "exportSpecs": "Export Specs",
      "clearChat": "Clear Chat",
      "welcome": "Ready to anchor your project's future. I'm your Senior Environmental Engineer — grounded in structural mechanics, numerical methods, and decades of watching forests reshape the built environment. What site parameters are we analyzing today?",
      "cleared": "Session cleared. Standing by for your next site analysis. What parameters shall we evaluate?",
      "placeholder": "Enter site parameters, species queries...",
      "engineBadge": "Structural Analysis Engine",
      "quickActions": [
        {
          "label": "🏆 Top CO₂ trees",
          "query": "Which trees absorb the most CO2?"
        },
        {
          "label": "🌳 About Neem",
          "query": "Tell me about Neem"
        },
        {
          "label": "💧 Low Water",
          "query": "Which trees need low water?"
        },
        {
          "label": "🚀 Fast Growers",
          "query": "What are the fastest growing trees?"
        },
        {
          "label": "🌱 Miyawaki Method",
          "query": "What is the Miyawaki Method?"
        },
        {
          "label": "💰 Cost & Time",
          "query": "How much does it cost and how long does it take?"
        }
      ],
      "promptChips": [
        {
          "icon": "📐",
          "label": "Predict Root Load",
          "query": "Predict the root spread load for the selected species on this site"
        },
        {
          "icon": "🧪",
          "label": "Analyze Soil",
          "query": "Analyze soil compatibility for native species at this site"
        },
        {
          "icon": "🌡️",
          "label": "Thermal Matrix",
          "query": "Generate a thermal impact matrix for this planting configuration"
        }
      ]
    },
    "contact": {
      "badge": "Start Your Project",
      "title": "Ready to Build ",
      "titleHighlight": "Sustainably?",
      "desc": "Share your site details and we'll prepare a complimentary preliminary report showing how strategic tree placement can transform your development.",
      "callBtn": "Call Now",
      "mailBtn": "Leave a mail",
      "emailCopied": "Email copied to clipboard!",
      "phoneCopied": "Phone number copied to clipboard!",
      "developedBy": "Developed By"
    },
    "water": {
      "Low": "Low",
      "Medium": "Medium",
      "High": "High",
      "Low-Medium": "Low-Medium",
      "Med-High": "Med-High"
    },
    "growth": {
      "Fast": "Fast",
      "Slow": "Slow",
      "Medium": "Medium",
      "Very Fast": "Very Fast",
      "Slow-Medium": "Slow-Medium",
      "Medium-Fast": "Medium-Fast"
    }
  },
  "hi": {
    "filters": {
      "all": "सभी पेड़",
      "fruit": "फल",
      "medicinal": "औषधी",
      "flower": "फूल",
      "shade": "छाया और लकड़ी"
    },
    "header": {
      "species": "प्रजातियां",
      "co2Unit": "किग्रा CO₂",
      "o2Unit": "किग्रा O₂"
    },
    "tabs": {
      "about": "हमारे बारे में",
      "aboutMobile": "परिचय",
      "catalog": "प्रजाति विवरण",
      "catalogMobile": "कैटलॉग",
      "methodology": "कार्यप्रणाली",
      "methodologyMobile": "पद्धति",
      "assistant": "एआई इंजीनियर",
      "assistantMobile": "एआई",
      "contact": "संपर्क करें",
      "contactMobile": "संपर्क"
    },
    "about": {
      "title": "परिचय और सेवाएं",
      "subtitle": "हम टिकाऊ भविष्य का निर्माण करते हैं। हमारे प्लेटफॉर्म द्वारा प्रदान की जाने वाली प्रमुख सेवाओं और प्रौद्योगिकियों का संक्षिप्त विवरण यहां दिया गया है।",
      "services": [
        {
          "title": "मियावाकी पद्धति विशेषज्ञ",
          "desc": "हम मियावाकी वनीकरण तकनीक में विशेषज्ञता रखते हैं, घने और जैव-विविधता से परिपूर्ण लघु-वन तैयार करते हैं जो पारंपरिक वृक्षारोपण की तुलना में 10 गुना तेजी से बढ़ते हैं और 30 गुना अधिक कार्बन अवशोषित करते हैं।"
        },
        {
          "title": "प्रजाति डेटा हब",
          "desc": "भारतीय देशी वृक्ष प्रजातियों के हमारे विस्तृत डेटाबेस तक पहुंचें, जिसमें सटीक विकास दर, कैनोपी फैलाव और महत्वपूर्ण पारिस्थितिक आंकड़े उपलब्ध हैं।"
        },
        {
          "title": "कार्बन और O₂ ट्रैकिंग",
          "desc": "अपने पर्यावरणीय प्रभाव का सटीक मापन करें। हम प्रत्येक रोपित प्रजाति के लिए प्रति वर्ष CO₂ अवशोषण और ऑक्सीजन उत्सर्जन की सटीक गणना प्रदान करते हैं।"
        },
        {
          "title": "संरचनात्मक सुरक्षा इंजीनियरिंग",
          "desc": "सुरक्षित रोपण करें। हमारा सिस्टम इमारतों, सड़कों और भूमिगत सेवाओं से सुरक्षित न्यूनतम दूरी बनाए रखने के लिए एआई-संचालित दिशानिर्देश प्रदान करता है ताकि जड़ों से नुकसान न हो।"
        }
      ],
      "canopy": {
        "title": "कैनोपी प्रक्षेपण (Canopy Projection)",
        "p1": "कैनोपी प्रक्षेपण एक दूरदर्शी विज़ुअलाइज़ेशन टूल है। यह रणनीतिक पर्यावरणीय नियोजन के लिए रोपण स्थलों पर परिपक्व वृक्षों की कैनोपी के भविष्य के विकास और फैलाव का मॉडल तैयार करता है।",
        "p2": "इस डेटा का उपयोग अनुकूलित वृक्ष घनत्व की गणना और भविष्य के छाया मानचित्रण के लिए किया जाता है। यह तापमान नियंत्रण और शहरी ताप द्वीप प्रभाव को कम करने के लिए अत्यंत महत्वपूर्ण है।",
        "p3": "इसके अतिरिक्त, यह प्रति इकाई क्षेत्र में कुल कार्बन पृथक्करण क्षमता का विश्लेषण करने में मदद करता है, जिससे आपकी परियोजना के पर्यावरणीय लाभ अधिकतम होते हैं।",
        "kpiTitle": "प्रमुख प्रदर्शन संकेतक (KPIs)",
        "avgSpread": "औसत कैनोपी फैलाव (वर्ग मी)",
        "avgSpreadVal": "25 वर्ग मी",
        "projShade": "प्रक्षेपित छाया क्षेत्र",
        "projShadeVal": "15.5 हेक्टेयर",
        "annualCO2": "वार्षिक CO₂ अवशोषण (प्रति वर्ग मी)",
        "annualCO2Val": "1.2 किग्रा"
      },
      "root": {
        "title": "जड़ प्रणाली विश्लेषण (Root Analysis)",
        "p1": "भूमिगत जड़ विश्लेषण एक मुख्य कार्य है जो विभिन्न वृक्ष प्रजातियों के भूमिगत परस्पर प्रभावों और समग्र मिट्टी के स्वास्थ्य पर उनके गहरे प्रभाव का अध्ययन करता है।",
        "p2": "विभिन्न जड़ संरचनाएं—गहरी मूसला जड़ों से लेकर विस्तृत रेशेदार प्रणाली तक—मिट्टी को बांधने, कटाव रोकने और जल अवशोषण बढ़ाने के लिए मिलकर कार्य करती हैं।",
        "p3": "यह प्रक्रिया महत्वपूर्ण पोषक तत्व चक्रण को सुगम बनाती है और भूमिगत जल स्तर का सक्रिय प्रबंधन करती है, जो पारिस्थितिकी तंत्र की दीर्घकालिक स्थिरता सुनिश्चित करती है।",
        "kpiTitle": "प्रमुख प्रदर्शन संकेतक (KPIs)",
        "soilBinding": "भूमिगत मिट्टी बंधन स्कोर",
        "soilBindingVal": "8.5 / 10",
        "waterTable": "जल स्तर स्थिरीकरण प्रभाव",
        "waterTableVal": "उच्च",
        "erosionRed": "प्रक्षेपित मिट्टी कटाव में कमी",
        "erosionRedVal": "60%"
      }
    },
    "catalog": {
      "badge": "वृक्ष डेटाबेस",
      "title": "देशी वृक्ष प्रजातियां",
      "subtitle": "देशी प्रजातियों का एक जीवंत संग्रह — प्रत्येक प्रजाति परिदृश्य और निर्मित पर्यावरण के संवाद में एक मूक भागीदार है।",
      "searchPlaceholder": "पेड़ों को नाम से खोजें (उदा. नीम, आंवला)...",
      "rankPrefix": "रैंक #",
      "co2": "CO₂: ",
      "o2": "O₂: ",
      "kgYr": "किग्रा/वर्ष",
      "canopy": "कैनोपी: ",
      "water": "जल: ",
      "safeDist": "सुरक्षित दूरी: ",
      "bldg": "भवन ",
      "road": "सड़क ",
      "modalOverview": "वृक्ष अवलोकन",
      "co2Abs": "CO₂ अवशोषण",
      "o2Rel": "O₂ उत्सर्जन",
      "waterReq": "जल आवश्यकता",
      "growthRate": "वृद्धि दर",
      "matureHeight": "परिपक्व ऊंचाई",
      "canopySpread": "कैनोपी फैलाव",
      "safePlantingDist": "सुरक्षित रोपण दूरी",
      "fromBldg": "भवन से दूरी:",
      "fromRoad": "सड़क से दूरी:",
      "closeHint": "बंद करने के लिए ESC दबाएं या बाहर क्लिक करें",
      "noResults": "आपकी खोज से मेल खाती कोई वृक्ष प्रजाति नहीं मिली।"
    },
    "methodology": {
      "badge": "उन्नत वनीकरण",
      "title": "मियावाकी कार्यप्रणाली",
      "desc": "एक अभिनव वनीकरण तकनीक जो घने, बहुस्तरीय वन बनाने के लिए देशी प्रजातियों का उपयोग करती है। पत्तियों को केवल ऊपर से सूर्य का प्रकाश मिलने से, पौधे किनारे फैलने के बजाय तेजी से ऊपर की ओर बढ़ते हैं।",
      "benefitsTitle": "पर्यावरणीय लाभ",
      "benefits": [
        "प्राकृतिक वनों पर पड़ने वाले दबाव में कमी",
        "गहरी जड़ों वाले वृक्षों द्वारा स्थल पर पोषक तत्वों का कुशल पुनर्चक्रण",
        "पारिस्थितिक तंत्र का सुदृढ़ संरक्षण",
        "सूक्ष्म जलवायु में सुधार: मल्चिंग और छायांकन द्वारा मिट्टी के तापमान में कमी और वाष्पीकरण पर नियंत्रण"
      ],
      "principlesTitle": "मुख्य सिद्धांत",
      "principles": [
        {
          "title": "घनत्व और विकास",
          "desc": "वन 30 गुना अधिक घने बनते हैं, 10 गुना तेजी से बढ़ते हैं, और 3 साल बाद रखरखाव-मुक्त हो जाते हैं।"
        },
        {
          "title": "रोपण नियम",
          "desc": "प्रति वर्ग मीटर 3-5 पौधे लगाएं, यह सुनिश्चित करते हुए कि विभिन्न प्रजातियों को एक-दूसरे के निकट लगाया जाए।"
        },
        {
          "title": "स्थल आवश्यकताएं",
          "desc": "न्यूनतम आकार 4x3 मीटर। स्थल पर प्रतिदिन कम से कम 8 घंटे धूप मिलनी चाहिए।"
        },
        {
          "title": "4-स्तरीय प्रणाली",
          "desc": "झाड़ियां (6 फीट तक), उप-वृक्ष (25 फीट तक), वृक्ष (40 फीट तक), और कैनोपी (40 फीट से ऊपर)।"
        }
      ],
      "stepsTitle": "6 कार्यान्वयन चरण",
      "stepsSubtitle": "बंजर या अनुपजाऊ भूमि को समृद्ध, आत्मनिर्भर पारिस्थितिकी तंत्र में बदलने का व्यवस्थित दृष्टिकोण।",
      "steps": [
        {
          "step": "01",
          "title": "मिट्टी की तैयारी",
          "desc": "दोमट मिट्टी को 1-2 फीट गहरा जोतें, वातन के लिए बायोमास, नमी बनाए रखने वाले तत्व, मल्च और जैविक खाद मिलाएं।"
        },
        {
          "step": "02",
          "title": "प्रजाति चयन",
          "desc": "कृषि-जलवायु परिस्थितियों के अनुकूल स्थानीय देशी प्रजातियों का चयन करें।"
        },
        {
          "step": "03",
          "title": "बीज संग्रह",
          "desc": "प्राकृतिक रूप से गिरे हुए फलों से या पेड़ों को धीरे से हिलाकर स्वस्थ बीज एकत्र करें।"
        },
        {
          "step": "04",
          "title": "पौध तैयार करना",
          "desc": "परिपक्व पेड़ों के बजाय नर्सरी में तैयार युवा पौधों का उपयोग करें।"
        },
        {
          "step": "05",
          "title": "रोपण तकनीकें",
          "desc": "भू-भाग के अनुसार तकनीक अपनाएं: पथरीली सतह, ढलान/सीढ़ीदार खेत, या समतल/कठोर मिट्टी।"
        },
        {
          "step": "06",
          "title": "देखभाल एवं रखरखाव",
          "desc": "शुरुआत में प्रतिदिन पानी दें, तनों को सहारा दें, छंटाई न करें, और कम से कम 1 वर्ष तक मल्चिंग बनाए रखें।"
        }
      ]
    },
    "assistant": {
      "title": "आर्बर इंजीनियर",
      "pro": "प्रो",
      "role": "वरिष्ठ पर्यावरण इंजीनियर • विश्लेषणात्मक",
      "exportSpecs": "विवरण निर्यात करें",
      "clearChat": "चैट साफ़ करें",
      "welcome": "आपकी परियोजना के भविष्य को संवारने के लिए तत्पर। मैं आपका वरिष्ठ पर्यावरण इंजीनियर हूँ — संरचनात्मक यांत्रिकी, संख्यात्मक विधियों और वनों द्वारा निर्मित पर्यावरण को नया रूप देने के दशकों के अनुभव पर आधारित। आज हम किन साइट मापदंडों का विश्लेषण कर रहे हैं?",
      "cleared": "सत्र साफ़ किया गया। आपके अगले साइट विश्लेषण के लिए तैयार। हम किन मापदंडों का मूल्यांकन करें?",
      "placeholder": "साइट मापदंड, वृक्ष संबंधी प्रश्न दर्ज करें...",
      "engineBadge": "संरचनात्मक विश्लेषण इंजन",
      "quickActions": [
        {
          "label": "🏆 शीर्ष CO₂ वृक्ष",
          "query": "Which trees absorb the most CO2?"
        },
        {
          "label": "🌳 नीम के बारे में",
          "query": "Tell me about Neem"
        },
        {
          "label": "💧 कम पानी वाले",
          "query": "Which trees need low water?"
        },
        {
          "label": "🚀 तेजी से बढ़ने वाले",
          "query": "What are the fastest growing trees?"
        },
        {
          "label": "🌱 मियावाकी पद्धति",
          "query": "What is the Miyawaki Method?"
        },
        {
          "label": "💰 लागत और समय",
          "query": "How much does it cost and how long does it take?"
        }
      ],
      "promptChips": [
        {
          "icon": "📐",
          "label": "जड़ भार पूर्वानुमान",
          "query": "Predict the root spread load for the selected species on this site"
        },
        {
          "icon": "🧪",
          "label": "मिट्टी विश्लेषण",
          "query": "Analyze soil compatibility for native species at this site"
        },
        {
          "icon": "🌡️",
          "label": "थर्मल मैट्रिक्स",
          "query": "Generate a thermal impact matrix for this planting configuration"
        }
      ]
    },
    "contact": {
      "badge": "परियोजना शुरू करें",
      "title": "टिकाऊ निर्माण के लिए ",
      "titleHighlight": "तैयार हैं?",
      "desc": "अपनी साइट का विवरण साझा करें और हम एक मानार्थ प्रारंभिक रिपोर्ट तैयार करेंगे जो दिखाएगी कि रणनीतिक वृक्षारोपण आपके विकास को कैसे बदल सकता है।",
      "callBtn": "अभी कॉल करें",
      "mailBtn": "ईमेल भेजें",
      "emailCopied": "ईमेल क्लिपबोर्ड पर कॉपी हो गया!",
      "phoneCopied": "फ़ोन नंबर क्लिपबोर्ड पर कॉपी हो गया!",
      "developedBy": "विकास दल (Developed By)"
    },
    "water": {
      "Low": "कम",
      "Medium": "मध्यम",
      "High": "उच्च",
      "Low-Medium": "कम-मध्यम",
      "Med-High": "मध्यम-उच्च"
    },
    "growth": {
      "Fast": "तेज",
      "Slow": "धीमा",
      "Medium": "मध्यम",
      "Very Fast": "अत्यधिक तेज",
      "Slow-Medium": "धीमा-मध्यम",
      "Medium-Fast": "मध्यम-तेज"
    }
  },
  "mr": {
    "filters": {
      "all": "सर्व झाडे",
      "fruit": "फळे",
      "medicinal": "औषधी",
      "flower": "फुले",
      "shade": "सावली आणि लाकूड"
    },
    "header": {
      "species": "प्रजाती",
      "co2Unit": "किलो CO₂",
      "o2Unit": "किलो O₂"
    },
    "tabs": {
      "about": "आमच्याबद्दल",
      "aboutMobile": "परिचय",
      "catalog": "प्रजाती तपशील",
      "catalogMobile": "कॅटलॉग",
      "methodology": "कार्यपद्धती",
      "methodologyMobile": "पद्धती",
      "assistant": "एआय अभियंता",
      "assistantMobile": "एआय",
      "contact": "संपर्क करा",
      "contactMobile": "संपर्क"
    },
    "about": {
      "title": "माहिती आणि सेवा",
      "subtitle": "आम्ही शाश्वत भविष्याची निर्मिती करतो. आमच्या प्लॅटफॉर्मद्वारे पुरवल्या जाणाऱ्या प्रमुख सेवा आणि तंत्रज्ञानाचा संक्षिप्त आढावा येथे दिला आहे.",
      "services": [
        {
          "title": "मियावाकी पद्धती तज्ज्ञ",
          "desc": "आम्ही मियावाकी वनीकरण तंत्रज्ञानात तज्ज्ञ आहोत, अति-दाट आणि जैवविविधतेने समृद्ध छोटी जंगले तयार करतो जी पारंपरिक लागवडीपेक्षा 10 पट वेगाने वाढतात आणि 30 पट अधिक कार्बन शोषून घेतात."
        },
        {
          "title": "प्रजाती माहिती केंद्र",
          "desc": "भारतीय स्थानिक वृक्ष प्रजातींच्या आमच्या सर्वसमावेशक डेटाबेसमध्ये प्रवेश मिळवा, ज्यामध्ये अचूक वाढीचा वेग, कॅनोपी विस्तार आणि महत्त्वपूर्ण पर्यावरणीय मोजमापे उपलब्ध आहेत."
        },
        {
          "title": "कार्बन आणि O₂ मागोवा",
          "desc": "तुमच्या पर्यावरणीय प्रभावाचे परिमाण निश्चित करा. आम्ही लावलेल्या प्रत्येक प्रजातीसाठी प्रति वर्ष CO₂ शोषण आणि ऑक्सिजन निर्मितीची अचूक गणना प्रदान करतो."
        },
        {
          "title": "संरचनात्मक सुरक्षा अभियांत्रिकी",
          "desc": "सुरक्षित लागवड करा. मुळांमुळे इमारती, रस्ते आणि भूमिगत सेवांचे नुकसान होऊ नये म्हणून आमची यंत्रणा एआय-आधारित किमान सुरक्षित अंतराची मार्गदर्शक तत्त्वे प्रदान करते."
        }
      ],
      "canopy": {
        "title": "कॅनोपी अंदाज (Canopy Projection)",
        "p1": "कॅनोपी प्रोजेक्शन हे एक भविष्यवेधी व्हिज्युअलायझेशन टूल आहे. हे धोरणात्मक पर्यावरणीय नियोजनासाठी लागवड क्षेत्रावर परिपक्व वृक्षांच्या कॅनोपीच्या वाढीचे आणि विस्ताराचे मॉडेल तयार करते.",
        "p2": "हा डेटा इष्टतम वृक्ष घनतेची गणना करण्यासाठी आणि भविष्यातील सावली मॅपिंगचा अंदाज घेण्यासाठी वापरला जातो. हे तापमान नियमन आणि शहरी उष्णता बेट प्रभाव कमी करण्यासाठी अत्यंत आवश्यक आहे.",
        "p3": "याव्यतिरिक्त, हे प्रति युनिट क्षेत्रातील एकूण कार्बन संचयन क्षमतेचे विश्लेषण करण्यास मदत करते, ज्यामुळे तुमच्या प्रकल्पाचे पर्यावरणीय फायदे जास्तीत जास्त वाढतात.",
        "kpiTitle": "प्रमुख कामगिरी निर्देशक (KPIs)",
        "avgSpread": "सरासरी कॅनोपी विस्तार (चौ. मी.)",
        "avgSpreadVal": "25 चौ. मी.",
        "projShade": "अंदाजित सावली क्षेत्र",
        "projShadeVal": "15.5 हेक्टर",
        "annualCO2": "वार्षिक CO₂ शोषण (प्रति चौ. मी.)",
        "annualCO2Val": "1.2 किलो"
      },
      "root": {
        "title": "मूळ प्रणाली विश्लेषण (Root Analysis)",
        "p1": "भूमिगत मूळ विश्लेषण हे एक मुख्य कार्य आहे जे विविध वृक्ष प्रजातींच्या भूगर्भातील परस्पर क्रियांचा आणि मातीच्या संपूर्ण आरोग्यावरील त्यांच्या सखोल प्रभावाचा अभ्यास करते.",
        "p2": "विविध मूळ रचना—खोल सोटमुळांपासून ते विस्तृत तंतुमय मुळांपर्यंत—माती घट्ट धरून ठेवण्यासाठी, धूप रोखण्यासाठी आणि पाण्याचा निचरा वाढवण्यासाठी एकत्र काम करतात.",
        "p3": "ही प्रक्रिया महत्त्वपूर्ण पोषणद्रव्य चक्रीकरण सुलभ करते आणि भूगर्भातील पाण्याची पातळी सक्रियपणे नियंत्रित करते, जी परिसंस्थेच्या दीर्घकालीन स्थिरतेसाठी महत्त्वाची ठरते.",
        "kpiTitle": "प्रमुख कामगिरी निर्देशक (KPIs)",
        "soilBinding": "भूमिगत माती बंधन गुणसंख्या",
        "soilBindingVal": "8.5 / 10",
        "waterTable": "जलपातळी स्थिरीकरण प्रभाव",
        "waterTableVal": "उच्च",
        "erosionRed": "अंदाजित मातीची धूप घट",
        "erosionRedVal": "60%"
      }
    },
    "catalog": {
      "badge": "वृक्ष डेटाबेस",
      "title": "स्थानिक वृक्ष प्रजाती",
      "subtitle": "स्थानिक प्रजातींचे एक जिवंत संग्रहण — प्रत्येक प्रजाती निसर्ग आणि मानवनिर्मित पर्यावरण यांच्यातील संवादातील एक शांत भागीदार आहे.",
      "searchPlaceholder": "झाडांच्या नावाने शोधा (उदा. कडुनिंब, आवळा)...",
      "rankPrefix": "क्रमांक #",
      "co2": "CO₂: ",
      "o2": "O₂: ",
      "kgYr": "किलो/वर्ष",
      "canopy": "कॅनोपी: ",
      "water": "पाणी: ",
      "safeDist": "सुरक्षित अंतर: ",
      "bldg": "इमारत ",
      "road": "रस्ता ",
      "modalOverview": "वृक्ष आढावा",
      "co2Abs": "CO₂ शोषण",
      "o2Rel": "O₂ निर्मिती",
      "waterReq": "पाण्याची गरज",
      "growthRate": "वाढीचा वेग",
      "matureHeight": "पूर्ण उंची",
      "canopySpread": "कॅनोपी विस्तार",
      "safePlantingDist": "सुरक्षित लागवड अंतर",
      "fromBldg": "इमारतीपासून अंतर:",
      "fromRoad": "रस्त्यापासून अंतर:",
      "closeHint": "बंद करण्यासाठी ESC दाबा किंवा बाहेर क्लिक करा",
      "noResults": "तुमच्या शोधाशी जुळणारी कोणतीही वृक्ष प्रजाती आढळली नाही."
    },
    "methodology": {
      "badge": "प्रगत वनीकरण",
      "title": "मियावाकी कार्यपद्धती",
      "desc": "एक नाविन्यपूर्ण वनीकरण तंत्रज्ञान जे स्थानिक प्रजातींचा वापर करून दाट, बहुस्तरीय जंगले तयार करते. पानांना केवळ वरून सूर्यप्रकाश मिळत असल्याने, झाडे आजूबाजूला पसरण्याऐवजी झपाट्याने वर वाढतात.",
      "benefitsTitle": "पर्यावरणीय फायदे",
      "benefits": [
        "नैसर्गिक जंगलांवरील ताण कमी होणे",
        "खोल मुळे असलेल्या झाडांद्वारे जमिनीतील पोषणद्रव्यांचे कार्यक्षम पुनर्चक्रीकरण",
        "पर्यावरणीय प्रणालींचे अधिक चांगले संरक्षण",
        "सूक्ष्म हवामानात सुधारणा: आच्छादन आणि सावलीमुळे जमिनीचे तापमान कमी होणे आणि बाष्पीभवन घटणे"
      ],
      "principlesTitle": "मूलभूत तत्त्वे",
      "principles": [
        {
          "title": "घनता आणि वाढ",
          "desc": "जंगले 30 पट अधिक दाट होतात, 10 पट वेगाने वाढतात आणि 3 वर्षांनंतर देखभाल-मुक्त होतात."
        },
        {
          "title": "लागवड नियम",
          "desc": "प्रति चौरस मीटर 3-5 रोपे लावा, वेगवेगळ्या प्रजाती एकमेकांच्या शेजारी लावल्या जातील याची खात्री करा."
        },
        {
          "title": "जागेची आवश्यकता",
          "desc": "किमान आकार 4x3 मीटर. जागेवर दररोज किमान 8 तास सूर्यप्रकाश मिळायला हवा."
        },
        {
          "title": "4-स्तरीय प्रणाली",
          "desc": "झुडपे (6 फुटांपर्यंत), उप-वृक्ष (25 फुटांपर्यंत), झाडे (40 फुटांपर्यंत), आणि कॅनोपी (40 फुटांच्या वर)."
        }
      ],
      "stepsTitle": "6 अंमलबजावणी टप्पे",
      "stepsSubtitle": "नापीक किंवा निकृष्ट जमिनीचे एका समृद्ध, स्वयंपूर्ण परिसंस्थेत रूपांतर करण्याचा पद्धतशीर दृष्टिकोन.",
      "steps": [
        {
          "step": "01",
          "title": "मातीची पूर्वतयारी",
          "desc": "काळी/पोयटा माती 1-2 फूट खोल नांगरा, हवा खेळती राहण्यासाठी बायोमास, ओलावा टिकवणारे घटक, पालापाचोळा आणि शेणखत मिसळा."
        },
        {
          "step": "02",
          "title": "प्रजातींची निवड",
          "desc": "हवामान आणि स्थानिक कृषी परिस्थितीनुसार देशी वनस्पतींची निवड करा."
        },
        {
          "step": "03",
          "title": "बियाणे संकलन",
          "desc": "नैसर्गिकरीत्या गळून पडलेल्या किंवा झाडे हळूवार हलवून निरोगी बिया गोळा करा."
        },
        {
          "step": "04",
          "title": "रोपवाटिका",
          "desc": "मोठ्या झाडांऐवजी पिशवीतील लहान, सशक्त रोपांचा वापर करा."
        },
        {
          "step": "05",
          "title": "लागवड तंत्रज्ञान",
          "desc": "जमिनीच्या स्वरूपानुसार तंत्र बदला: खडकाळ पृष्ठभाग, उताराचे/पायऱ्यांचे क्षेत्र, किंवा सपाट/कठीण जमीन."
        },
        {
          "step": "06",
          "title": "देखभाल",
          "desc": "सुरुवातीला दररोज पाणी द्या, कोंबांना आधार द्या, फांद्या छाटू नका आणि किमान 1 वर्ष आच्छादन टिकवून ठेवा."
        }
      ]
    },
    "assistant": {
      "title": "आर्बर अभियंता",
      "pro": "प्रो",
      "role": "वरिष्ठ पर्यावरण अभियंता • विश्लेषणात्मक",
      "exportSpecs": "तपशील निर्यात करा",
      "clearChat": "चॅट साफ करा",
      "welcome": "तुमच्या प्रकल्पाचे भविष्य घडवण्यासाठी सज्ज. मी तुमचा वरिष्ठ पर्यावरण अभियंता आहे — संरचनात्मक यांत्रिकी, संख्यात्मक पद्धती आणि जंगलांनी मानवनिर्मित पर्यावरण समृद्ध करण्याच्या दशकांच्या अनुभवावर आधारित. आज आपण कोणत्या साइट घटकांचे विश्लेषण करत आहोत?",
      "cleared": "सत्र साफ केले. तुमच्या पुढील साइट विश्लेषणासाठी सज्ज. आपण कोणत्या घटकांचे मूल्यांकन करूया?",
      "placeholder": "साइट घटक, प्रजातींचे प्रश्न प्रविष्ट करा...",
      "engineBadge": "संरचनात्मक विश्लेषण इंजिन",
      "quickActions": [
        {
          "label": "🏆 अव्वल CO₂ वृक्ष",
          "query": "Which trees absorb the most CO2?"
        },
        {
          "label": "🌳 कडुनिंबाबद्दल",
          "query": "Tell me about Neem"
        },
        {
          "label": "💧 कमी पाणी लागणारे",
          "query": "Which trees need low water?"
        },
        {
          "label": "🚀 जलद वाढणारे",
          "query": "What are the fastest growing trees?"
        },
        {
          "label": "🌱 मियावाकी पद्धत",
          "query": "What is the Miyawaki Method?"
        },
        {
          "label": "💰 खर्च आणि वेळ",
          "query": "How much does it cost and how long does it take?"
        }
      ],
      "promptChips": [
        {
          "icon": "📐",
          "label": "मूळ भार अंदाज",
          "query": "Predict the root spread load for the selected species on this site"
        },
        {
          "icon": "🧪",
          "label": "माती विश्लेषण",
          "query": "Analyze soil compatibility for native species at this site"
        },
        {
          "icon": "🌡️",
          "label": "थर्मल मॅट्रिक्स",
          "query": "Generate a thermal impact matrix for this planting configuration"
        }
      ]
    },
    "contact": {
      "badge": "प्रकल्प सुरू करा",
      "title": "शाश्वत उभारणीसाठी ",
      "titleHighlight": "तयार आहात?",
      "desc": "तुमच्या जागेचा तपशील शेअर करा आणि आम्ही एक विनामूल्य प्राथमिक अहवाल तयार करू जो दर्शवेल की धोरणात्मक वृक्षारोपण तुमच्या विकासात कसा बदल घडवू शकते.",
      "callBtn": "आता कॉल करा",
      "mailBtn": "ईमेल पाठवा",
      "emailCopied": "ईमेल क्लिपबोर्डवर कॉपी केला!",
      "phoneCopied": "फोन नंबर क्लिपबोर्डवर कॉपी केला!",
      "developedBy": "निर्मिती (Developed By)"
    },
    "water": {
      "Low": "कमी",
      "Medium": "मध्यम",
      "High": "जास्त",
      "Low-Medium": "कमी-मध्यम",
      "Med-High": "मध्यम-जास्त"
    },
    "growth": {
      "Fast": "वेगवान",
      "Slow": "मंद",
      "Medium": "मध्यम",
      "Very Fast": "अतिशय वेगवान",
      "Slow-Medium": "मंद-मध्यम",
      "Medium-Fast": "मध्यम-वेगवान"
    }
  }
};

const uiTranslations = TRANSLATIONS;
if (typeof window !== "undefined") { window.uiTranslations = uiTranslations; }

function getLocalizedWater(val, lang) {
  if (!val) return '';
  if (lang === 'en') return val;
  const t = TRANSLATIONS[lang];
  return (t && t.water && t.water[val]) || val;
}

function getLocalizedGrowth(val, lang) {
  if (!val) return '';
  if (lang === 'en') return val;
  const t = TRANSLATIONS[lang];
  return (t && t.growth && t.growth[val]) || val;
}

function getLocalizedDistance(dist, lang) {
  if (!dist) return '';
  if (lang === 'en') return dist;
  return dist.replace(/\bm\b/g, 'मी');
}

function getLocalizedTreeName(tree, lang) {
  if (!tree) return '';
  if (lang === 'mr') return tree.marathi || tree.hindi || tree.name;
  if (lang === 'hi') return tree.hindi || tree.name;
  return tree.name;
}

function getLocalizedTreeSubtitle(tree, lang) {
  if (!tree) return '';
  if (lang === 'en') return tree.hindi || '';
  if (lang === 'hi') {
    return tree.name + (tree.marathi ? ' • ' + tree.marathi.split('(')[0].trim() : '');
  }
  if (lang === 'mr') {
    return tree.name + (tree.hindi ? ' • ' + tree.hindi.split('(')[0].trim() : '');
  }
  return tree.name;
}


let language = 'en';
const TREE_DATA = [{
  rank: 1, category: "shade",
  name: "Indian siris tree",
  hindi: "Siris (सिरिस)", marathi: 'Shirish (शिरीष)',
  img: "assets/tree-1.jpeg",
  c: 1029.56,
  o: 2744.81,
  height: '15-25 m',
  canopy: '12-18 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 2, category: "fruit",
  name: "Tamarind",
  hindi: "Imli (इमली)", marathi: 'Chinch (चिंच)',
  img: "assets/tree-2.jpeg",
  c: 808.79,
  o: 2156.23,
  height: '20-25 m',
  canopy: '12-18 m',
  safeBldg: '10-12 m',
  safeRoad: '6-8 m',
  water: 'Low',
  growth: 'Slow'
}, {
  rank: 3, category: "flower",
  name: "May flower tree",
  hindi: "Gulmohar (गुलमोहर)", marathi: 'Gulmohar (गुलमोहर)',
  img: "assets/tree-3.jpeg",
  c: 385.26,
  o: 1027.11,
  height: '10-15 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 4, category: "flower",
  name: "Yellow flame tree",
  hindi: "Peela Gulmohar (पीला गुलमोहर)", marathi: 'Sonmohar (सोनमोहर)',
  img: "assets/tree-4.jpeg",
  c: 377.16,
  o: 1005.52,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 5, category: "shade",
  name: "Sacred fig",
  hindi: "Peepal (पीपल)", marathi: 'Pimpal (पिंपळ)',
  img: "assets/tree-5.jpeg",
  c: 339.82,
  o: 905.96,
  height: '20-30 m',
  canopy: '15-25 m',
  safeBldg: '15-20 m',
  safeRoad: '8-10 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 6, category: "shade",
  name: "River tamarind",
  hindi: "Subabul (सुबबूल)", marathi: 'Subabhul (सुबाभूळ)',
  img: "assets/tree-6.jpeg",
  c: 313.76,
  o: 836.47,
  height: '10-15 m',
  canopy: '5-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Very Fast'
}, {
  rank: 7, category: "flower",
  name: "Kanak Champa",
  hindi: "Kanak Champa (कनक चम्पा)", marathi: 'Kanak Champa (मुचकुंद)',
  img: "assets/tree-7.jpeg",
  c: 310.08,
  o: 826.67,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 8, category: "medicinal",
  name: "Neem",
  hindi: "Neem (नीम)", marathi: 'Kadulimb (कडुनिंब)',
  img: "assets/tree-8.jpeg",
  c: 301.67,
  o: 804.25,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '6-8 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Medium-Fast'
}, {
  rank: 9, category: "flower",
  name: "Indian cork tree",
  img: "assets/tree-9.jpeg",
  hindi: "Neem Chameli (नीम चमेली)", marathi: 'Buch (बुच)',
  c: 211.29,
  o: 563.29,
  height: '15-20 m',
  canopy: '8-10 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 10, category: "fruit",
  name: "Gooseberry",
  img: "assets/tree-10.jpeg",
  hindi: "Amla (आंवलऎ)", marathi: 'Amla (आवळा)',
  c: 206.10,
  o: 549.46,
  height: '8-12 m',
  canopy: '5-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3 m',
  water: 'Low',
  growth: 'Medium'
}, {
  rank: 11, category: "shade",
  name: "Earleaf acacia",
  img: "assets/tree-11.jpeg",
  hindi: "Pahari Babul (पहाड़ी बबूल)", marathi: 'Australi Babhul (ऑस्ट्रेलियन बाभूळ)',
  c: 204.44,
  o: 545.04,
  height: '15-30 m',
  canopy: '8-12 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 12, category: "fruit",
  name: "Cluster fig",
  img: "assets/tree-12.jpeg",
  hindi: "Gular (गूलर)", marathi: 'Umber (उंबर)',
  c: 195.29,
  o: 520.66,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 13, category: "fruit",
  name: "Jamun tree",
  img: "assets/tree-13.jpeg",
  hindi: "Jamun (जामून)", marathi: 'Jambhul (जांभूळ)',
  c: 190.59,
  o: 508.12,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 14, category: "flower",
  name: "Golden shower",
  img: "assets/tree-14.jpeg",
  hindi: "Amaltas (अमलतास)", marathi: 'Bahawa (बहावा)',
  c: 188.51,
  o: 502.56,
  height: '10-15 m',
  canopy: '6-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low-Medium',
  growth: 'Medium'
}, {
  rank: 15, category: "shade",
  name: "Weeping fig",
  img: "assets/tree-15.jpeg",
  hindi: "Chilkan (चिलकन)", marathi: 'Nandruk (नांदृक)',
  c: 178.05,
  o: 474.69,
  height: '15-20 m',
  canopy: '15-20 m',
  safeBldg: '15-20 m',
  safeRoad: '8-10 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 16, category: "shade",
  name: "Teak",
  img: "assets/tree-16.jpeg",
  hindi: "Sagwan (सागवान)", marathi: 'Sagwan (सागवान)',
  c: 149.42,
  o: 398.36,
  height: '20-30 m',
  canopy: '8-12 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 17, category: "medicinal",
  name: "Pungam tree",
  img: "assets/tree-17.jpeg",
  hindi: "Karanj (करंज)", marathi: 'Karanj (करंज)',
  c: 140.59,
  o: 374.81,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 18, category: "flower",
  name: "Spanish Cherry",
  img: "assets/tree-18.jpeg",
  hindi: "Maulsari (मौलसिरी)", marathi: 'Bakul (बकुळ)',
  c: 125.43,
  o: 334.38,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Slow'
}, {
  rank: 19, category: "medicinal",
  name: "Paradise tree",
  img: "assets/tree-19.jpeg",
  hindi: "Lakshmi Taru (लक्ष्मी तरु)", marathi: 'Lakshmi Taru (लक्ष्मीतरू)',
  c: 119.71,
  o: 319.15,
  height: '12-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 20, category: "fruit",
  name: "Wild almond tree",
  img: "assets/tree-20.jpeg",
  hindi: "Jangli Badam (जंगली बादाम)", marathi: 'Jangli Badam (रानबदाम)',
  c: 116.82,
  o: 311.44,
  height: '20-30 m',
  canopy: '10-15 m',
  safeBldg: '10-12 m',
  safeRoad: '6-8 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 21, category: "fruit",
  name: "Wood apple",
  img: "assets/tree-21.jpeg",
  hindi: "Kaitha (कैथा)", marathi: 'Kavath (कवठ)',
  c: 106.71,
  o: 284.49,
  height: '8-10 m',
  canopy: '5-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Slow'
}, {
  rank: 22, category: "fruit",
  name: "Mulberry tree",
  img: "assets/tree-22.jpeg",
  hindi: "Shahtoot (शहतूत)", marathi: 'Tuti (तुती)',
  c: 94.15,
  o: 251.00,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 23, category: "fruit",
  name: "Guava tree",
  img: "assets/tree-23.jpeg",
  hindi: "Amrud (अमरूद)", marathi: 'Peru (पेरू)',
  c: 85.34,
  o: 227.53,
  height: '5-8 m',
  canopy: '4-6 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 24, category: "shade",
  name: "Casuarina",
  img: "assets/tree-24.jpeg",
  hindi: "Jhau (झाऊ)", marathi: 'Suru (सुरू)',
  c: 80.53,
  o: 214.70,
  height: '15-25 m',
  canopy: '4-6 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 25, category: "medicinal",
  name: "Bibhitaki tree",
  img: "assets/tree-25.jpeg",
  hindi: "Baheda (बहेड़ा)", marathi: 'Behada (बेहडा)',
  c: 76.60,
  o: 204.21,
  height: '20-30 m',
  canopy: '12-18 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 26, category: "flower",
  name: "Purple bauhinia",
  img: "assets/tree-26.jpeg",
  hindi: "Kachnar (कचनार)", marathi: 'Rakta Kanchan (रक्त कांचन)',
  c: 70.08,
  o: 186.83,
  height: '8-10 m',
  canopy: '6-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3-4 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 27, category: "flower",
  name: "Butter tree",
  img: "assets/tree-27.jpeg",
  hindi: "Mahua (महुआ)", marathi: 'Moh (मोह)',
  c: 69.43,
  o: 185.11,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Low-Medium',
  growth: 'Slow-Medium'
}, {
  rank: 28, category: "medicinal",
  name: "Indian mulberry",
  img: "assets/tree-28.jpeg",
  hindi: "Aal (आल)", marathi: 'Noni (नोनो)',
  c: 68.81,
  o: 183.44,
  height: '4-8 m',
  canopy: '3-5 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'High',
  growth: 'Medium'
}, {
  rank: 29, category: "flower",
  name: "Geranium tree",
  img: "assets/tree-29.jpeg",
  hindi: "Lal Lasora (लाल लसोड़ा)", marathi: 'Kanchan (कांचन)',
  c: 57.53,
  o: 153.38,
  height: '6-8 m',
  canopy: '4-6 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Low',
  growth: 'Medium'
}, {
  rank: 30, category: "flower",
  name: "Yellow bells",
  img: "assets/tree-30.jpeg",
  hindi: "Pili Chameli (पीली चमेली)", marathi: 'Tecoma (पिवळी कण्हेर)',
  c: 50.19,
  o: 133.80,
  height: '4-6 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2-3 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 31, category: "fruit",
  name: "Mango tree",
  img: "assets/tree-31.jpeg",
  hindi: "Aam (आम)", marathi: 'Amba (आंबा)',
  c: 46.31,
  o: 123.45,
  height: '15-30 m',
  canopy: '10-20 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 32, category: "fruit",
  name: "Indian almond",
  img: "assets/tree-32.jpeg",
  hindi: "Desi Badam (देसी बादाम)", marathi: 'Deshi Badam (देशी बदाम)',
  c: 38.34,
  o: 102.21,
  height: '15-25 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 33, category: "shade",
  name: "False Ashoka",
  img: "assets/tree-33.jpeg",
  hindi: "Ashoka (अशोक)", marathi: 'Ashoka (अशोक)',
  c: 29.01,
  o: 77.34,
  height: '8-12 m',
  canopy: '3-5 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 34, category: "medicinal",
  name: "Curry leaf",
  img: "assets/tree-34.jpeg",
  hindi: "Kadi Patta (कड़ी पत्ता)", marathi: 'Kadi Patta (कढीपत्ता)',
  c: 26.71,
  o: 71.20,
  height: '4-6 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 35, category: "shade",
  name: "Quick stick",
  img: "assets/tree-35.jpeg",
  hindi: "Giripushpa (गिरिपुष्प)", marathi: 'Gliricidia (उंदीरमारी)',
  c: 21.18,
  o: 56.46,
  height: '10-12 m',
  canopy: '5-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Very Fast'
}, {
  rank: 36, category: "medicinal",
  name: "Arjuna tree",
  img: "assets/tree-36.jpeg",
  hindi: "Arjun (अर्जुन)", marathi: 'Arjun (अर्जुन)',
  c: 12.75,
  o: 33.99,
  height: '20-25 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 37, category: "flower",
  name: "Parijat",
  img: "assets/tree-37.jpeg",
  hindi: "Harsingar (हरसिंगार)", marathi: 'Parijatak (पारिजातक)',
  c: 5.85,
  o: 15.60,
  height: '3-5 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 38, category: "shade",
  name: "Bamboo",
  img: "assets/tree-38.jpeg",
  hindi: "Bans (बांस)", marathi: 'Bambu (बांबू)',
  c: 5.80,
  o: 15.46,
  height: '8-20 m',
  canopy: '3-6 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Med-High',
  growth: 'Very Fast'
}];

const _Fragment = React.Fragment;
const _jsxDEV = function(type, props, key) {
  if (key !== undefined) props.key = key;
  var children = props.children;
  delete props.children;
  if (Array.isArray(children)) {
    return React.createElement.apply(React, [type, props].concat(children));
  } else if (children !== undefined) {
    return React.createElement(type, props, children);
  }
  return React.createElement(type, props);
};
const { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer } = React;

/* ──────────────────────────────────────────────
   Inline SVG Icon Component
────────────────────────────────────────────── */
function LucideIcon({name,size=24,className='',strokeWidth=1.8}){const p=ICON_PATHS[name]||[];return /*#__PURE__*/_jsxDEV("span",{className:`inline-flex items-center justify-center ${className}`,children:/*#__PURE__*/_jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",children:p.map((x,i)=>/*#__PURE__*/_jsxDEV("path",{d:x.d,fill:x.fill||'none'},i,false))},void 0,false)},void 0,false)}

function useInView(o={}){const r=useRef(null),[v,s]=useState(!1);useEffect(()=>{const b=new IntersectionObserver(([e])=>{if(e.isIntersecting){s(!0);b.disconnect()}},{threshold:.15,...o});if(r.current)b.observe(r.current);return()=>b.disconnect()},[]);return[r,v]}

/* ──────────────────────────────────────────────
   Navbar
────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage } = React.useContext(LanguageContext);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  const navLinks = [{
    label: t.navServices,
    href: '#services'
  }, {
    label: t.navMethod,
    href: '#miyawaki-method'
  }, {
    label: t.navData,
    href: '#tree-database'
  }, {
    label: t.navContact,
    href: '#contact'
  }];
  return /*#__PURE__*/_jsxDEV("nav", {
    id: "navbar",
    className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-forest-950/60 backdrop-blur-md border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'}`,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("a", {
        href: "#",
        className: "flex items-center gap-2.5 group",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "relative",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "w-9 h-9 rounded-lg bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
            children: /*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "tree-pine",
              size: 20,
              className: "text-cream-100"
            }, void 0, false)
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "text-lg font-semibold tracking-tight text-cream-50",
          children: ["af", /*#__PURE__*/_jsxDEV("span", {
            className: "text-earth-400",
            children: "forestation"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "hidden md:flex items-center gap-5 md:p-8",
        children: [navLinks.map(link => /*#__PURE__*/_jsxDEV("a", {
          href: link.href,
          onClick: (e) => handleNavClick(e, link.href),
          className: "text-sm font-medium text-cream-200/70 hover:text-earth-300 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-earth-400 after:transition-all after:duration-300 hover:after:w-full",
          children: link.label
        }, link.label, false)), /*#__PURE__*/_jsxDEV("a", {
          href: "#contact",
          className: "ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-forest-600 to-forest-500 text-cream-50 hover:from-forest-500 hover:to-forest-400 transition-all duration-300 shadow-lg shadow-forest-900/50 hover:shadow-forest-700/40 hover:-translate-y-0.5",
          children: "Get in Touch"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        id: "mobile-menu-toggle",
        className: "md:hidden text-cream-100 p-2",
        onClick: () => setMobileOpen(!mobileOpen),
        "aria-label": "Toggle menu",
        children: /*#__PURE__*/_jsxDEV(LucideIcon, {
          name: mobileOpen ? 'x' : 'menu',
          size: 24
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true), mobileOpen && /*#__PURE__*/_jsxDEV("div", {
      className: "md:hidden animate-fade-in bg-forest-950/95 backdrop-blur-xl border-t border-forest-800/40 mt-2",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "px-4 md:px-6 py-4 md:py-6 space-y-4",
        children: [navLinks.map(link => /*#__PURE__*/_jsxDEV("a", {
          href: link.href,
          onClick: (e) => {
            setMobileOpen(false);
            handleNavClick(e, link.href);
          },
          className: "block text-base font-medium text-cream-200/80 hover:text-earth-300 transition-colors",
          children: link.label
        }, link.label, false)), /*#__PURE__*/_jsxDEV("a", {
          href: "#contact",
          onClick: (e) => {
            setMobileOpen(false);
            handleNavClick(e, '#contact');
          },
          className: "block mt-4 text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-forest-600 to-forest-500 text-cream-50",
          children: "Get in Touch"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}

/* ──────────────────────────────────────────────
   Hero Section
────────────────────────────────────────────── */
function Hero() {
  return /*#__PURE__*/_jsxDEV("section", {
    id: "hero",
    className: "relative min-h-[100dvh] flex items-center justify-center overflow-hidden",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0",
      children: [/*#__PURE__*/_jsxDEV("img", {
        loading: "lazy", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
        alt: "Sunlit forest canopy with expansive sky and winding trail",
        className: "w-full h-full object-cover"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "hero-overlay blueprint-overlay absolute inset-0"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-1/4 left-[15%] w-1.5 h-1.5 rounded-full bg-forest-400/30 animate-leaf-drift"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-1/3 right-[20%] w-2 h-2 rounded-full bg-earth-400/20 animate-leaf-drift delay-200",
        style: {
          animationDuration: '7s'
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-2/3 left-[30%] w-1 h-1 rounded-full bg-forest-300/25 animate-leaf-drift delay-400",
        style: {
          animationDuration: '6s'
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-1/2 right-[35%] w-1.5 h-1.5 rounded-full bg-earth-300/20 animate-leaf-drift delay-600",
        style: {
          animationDuration: '8s'
        }
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/40 border border-forest-600/20 backdrop-blur-sm mb-8",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "w-2 h-2 rounded-full bg-forest-400 animate-pulse"
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "text-xs font-medium text-forest-300 tracking-wide uppercase",
          children: "Sustainable Site Planning"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h1", {
        className: "animate-fade-in-up opacity-0 delay-100 font-serif text-2xl md:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-tight tracking-tight mb-6 break-words",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "text-cream-50",
          children: "Design with "
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "gradient-text",
          children: "Nature"
        }, void 0, false), /*#__PURE__*/_jsxDEV("br", {}, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "text-cream-50",
          children: "Build for the "
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "gradient-text",
          children: "Future"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
        className: "animate-fade-in-up opacity-0 delay-300 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-cream-200/80 leading-relaxed mb-10 font-normal",
        children: ["We help land developers and construction planners quantify how specific tree species affect their sites — from canopy coverage and root spread to measurable temperature reduction — so every build works ", /*#__PURE__*/_jsxDEV("em", {
          className: "text-cream-200/80 not-italic font-medium",
          children: "legacy"
        }, void 0, false), " that breathes alongside the landscape."]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "animate-fade-in-up opacity-0 delay-500 flex flex-col sm:flex-row items-center justify-center gap-4",
        children: [/*#__PURE__*/_jsxDEV("a", {
          id: "cta-explore",
          href: "#services",
          className: "group relative inline-flex items-center gap-2.5 px-5 md:px-8 py-3.5 rounded-full bg-gradient-to-r from-earth-500 to-earth-600 text-forest-950 font-semibold text-sm shadow-xl shadow-earth-900/40 hover:shadow-earth-700/50 hover:-translate-y-0.5 transition-all duration-300",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "database",
            size: 18,
            className: "transition-transform duration-300 group-hover:scale-110"
          }, void 0, false), "Explore Tree Database", /*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "arrow-right",
            size: 16,
            className: "transition-transform duration-300 group-hover:translate-x-1"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("a", {
          id: "cta-consult",
          href: "#contact",
          className: "group inline-flex items-center gap-2.5 px-5 md:px-8 py-3.5 rounded-full border border-cream-200/20 text-cream-100 font-semibold text-sm backdrop-blur-sm hover:bg-cream-50/5 hover:border-cream-200/35 hover:-translate-y-0.5 transition-all duration-300",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "calendar",
            size: 18,
            className: "transition-transform duration-300 group-hover:scale-110"
          }, void 0, false), "Book a Site Consultation"]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "animate-fade-in opacity-0 delay-700 mt-12 flex flex-col items-center gap-2",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "text-[11px] uppercase tracking-[0.2em] text-cream-200/70 font-medium",
          children: "Scroll"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "w-5 h-8 rounded-full border border-cream-200/15 flex items-start justify-center p-1.5",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "w-1 h-2 rounded-full bg-earth-400/60 animate-bounce"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}

/* ──────────────────────────────────────────────
   Services / Value Prop Section
────────────────────────────────────────────── */
const services = [{
  icon: 'map',
  title: 'Root & Plot Analysis',
  description: 'We map subterranean root zones against your site boundaries, utility lines, and foundation plans — identifying risks and opportunities before a single shovel breaks ground.',
  features: ['Root spread modelling', 'Soil compatibility mapping', 'Utility conflict detection'],
  accent: 'from-forest-500 to-forest-600',
  accentLight: 'text-forest-400',
  accentBg: 'bg-forest-500/10'
}, {
  icon: 'trees',
  title: 'Canopy Projection',
  description: 'Visualize future canopy coverage at 5, 10, and 25-year intervals. Understand shading patterns, sunlight penetration, and how growth reshapes your site over time.',
  features: ['Multi-decade growth models', 'Shade pattern analysis', 'Species selection guidance'],
  accent: 'from-earth-500 to-earth-600',
  accentLight: 'text-earth-400',
  accentBg: 'bg-earth-500/10'
}, {
  icon: 'thermometer',
  title: 'Thermal Impact',
  description: 'Quantify the cooling effect of strategic tree placement. We calculate ambient temperature reduction to help you meet sustainability targets and enhance occupant comfort.',
  features: ['Heat island mitigation', 'Energy savings forecast', 'Microclimate simulation'],
  accent: 'from-forest-400 to-earth-500',
  accentLight: 'text-forest-300',
  accentBg: 'bg-forest-400/10'
}];
function ServiceCard({
  service,
  index
}) {
  const [ref, isVisible] = useInView();
  const [hovered, setHovered] = useState(false);
  return /*#__PURE__*/_jsxDEV("div", {
    ref: ref,
    id: `service-card-${index}`,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: `relative group card-shimmer rounded-2xl p-[1px] transition-all duration-500 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`,
    style: {
      animationDelay: `${index * 0.15}s`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "glass-card rounded-2xl p-5 md:p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-forest-900/60",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: `relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`,
        children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
          name: service.icon,
          size: 28,
          className: "text-white",
          strokeWidth: 2
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: `absolute inset-0 rounded-xl bg-gradient-to-br ${service.accent} transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`,
          style: {
            animation: hovered ? 'pulse-ring 1.5s cubic-bezier(0.215,0.61,0.355,1) infinite' : 'none'
          }
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
        className: "text-xl font-bold text-cream-50 mb-3 tracking-tight",
        children: service.title
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-sm text-cream-200/75 leading-relaxed mb-6 flex-grow",
        children: service.description
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-wrap gap-2 mb-6",
        children: service.features.map((feat, i) => /*#__PURE__*/_jsxDEV("span", {
          className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${service.accentBg} ${service.accentLight} border border-current/10`,
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "w-1 h-1 rounded-full bg-current opacity-60"
          }, void 0, false), feat]
        }, i, true))
      }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
        href: "#contact",
        className: `inline-flex items-center gap-1.5 text-sm font-semibold ${service.accentLight} hover:underline underline-offset-4 transition-all duration-300 group-hover:gap-2.5`,
        children: ["Learn more", /*#__PURE__*/_jsxDEV(LucideIcon, {
          name: "arrow-right",
          size: 14,
          className: "transition-transform duration-300 group-hover:translate-x-1"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}
function Services() {
  const [ref, isVisible] = useInView();
  return /*#__PURE__*/_jsxDEV("section", {
    id: "services",
    className: "relative py-28 lg:py-36",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-forest-950 to-transparent pointer-events-none"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
      children: [/*#__PURE__*/_jsxDEV("div", {
        ref: ref,
        className: `text-center max-w-2xl mx-auto mb-16 lg:mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/30 border border-forest-700/20 mb-5",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "layers",
            size: 14,
            className: "text-earth-400"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-[11px] font-semibold text-earth-400 tracking-wide uppercase",
            children: "Our Core Services"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          className: "font-serif text-xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4",
          children: ["Precision Data for ", /*#__PURE__*/_jsxDEV("br", {
            className: "hidden sm:block"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "gradient-text",
            children: "Smarter Development"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-base text-cream-200/75 leading-relaxed",
          children: "Each site tells a different story. Our tools translate the silent language of root systems and canopy rhythms into precise, actionable data \u2014 bridging intuition with engineering certainty."
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6 lg:gap-5 md:p-8",
        children: services.map((service, i) => /*#__PURE__*/_jsxDEV(ServiceCard, {
          service: service,
          index: i
        }, i, false))
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─/* ─
     Tree Species Database
────────────────────────────────────────────── */
const MAX_CO2 = 1029.56;
const MAX_O2 = 2744.81;

/* Rank color helper */
function getRankStyle(rank) {
  if (rank === 1) return {
    bg: 'bg-gradient-to-br from-yellow-500/20 to-amber-600/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    medal: 'ðŸ¥‡'
  };
  if (rank === 2) return {
    bg: 'bg-gradient-to-br from-gray-300/15 to-gray-400/10',
    border: 'border-gray-400/30',
    text: 'text-gray-300',
    medal: 'ðŸ¥ˆ'
  };
  if (rank === 3) return {
    bg: 'bg-gradient-to-br from-amber-700/20 to-orange-800/10',
    border: 'border-amber-600/30',
    text: 'text-amber-500',
    medal: 'ðŸ¥‰'
  };
  if (rank <= 10) return {
    bg: 'bg-gradient-to-br from-forest-600/15 to-forest-700/10',
    border: 'border-forest-500/25',
    text: 'text-forest-300',
    medal: null
  };
  return {
    bg: 'bg-gradient-to-br from-forest-800/20 to-forest-900/10',
    border: 'border-forest-700/15',
    text: 'text-cream-200/75',
    medal: null
  };
}

/* Environmental equivalents */
function getCarEquivalent(co2kg) {
  /* Average car emits ~4,600 kg CO₂/year; we show how many days of driving this tree offsets */
  var daysOffset = Math.round(co2kg / 4600 * 365);
  return daysOffset;
}
function getPeopleO2(o2kg) {
  /* Average person needs ~550 kg O₂/year */
  var people = o2kg / 550;
  return people < 1 ? people.toFixed(2) : people.toFixed(1);
}

function ComparePanel({
  trees,
  onRemove,
  onClear
}) {
  if (trees.length === 0) return null;
  return /*#__PURE__*/_jsxDEV("div", {
    className: "glass-card rounded-2xl border border-earth-500/20 p-4 sm:p-6 mb-8 animate-fade-in-up",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between mb-4",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "text-sm sm:text-base font-bold text-cream-50 flex items-center gap-2",
        children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
          name: "layers",
          size: 16,
          className: "text-earth-400"
        }, void 0, false), "Comparing ", trees.length, " Tree", trees.length > 1 ? 's' : '']
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        onClick: onClear,
        className: "text-xs text-cream-200/75 hover:text-cream-200/70 transition-colors px-2 py-1 rounded-md hover:bg-forest-800/40",
        children: "Clear All"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "overflow-x-auto -mx-2 px-2",
      children: /*#__PURE__*/_jsxDEV("table", {
        className: "w-full text-sm",
        style: {
          minWidth: trees.length > 2 ? '600px' : 'auto'
        },
        children: [/*#__PURE__*/_jsxDEV("thead", {
          children: /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-700/20",
            children: [/*#__PURE__*/_jsxDEV("th", {
              className: "text-left text-[11px] font-semibold text-cream-200/75 uppercase tracking-wider py-2 pr-3",
              children: "Species"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("th", {
                className: "text-center py-2 px-2",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center justify-center gap-1",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "text-xs font-bold text-cream-100 truncate max-w-[120px]",
                    children: t.name
                  }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                    onClick: function () {
                      onRemove(t);
                    },
                    className: "text-cream-200/25 hover:text-red-400 transition-colors flex-shrink-0",
                    children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                      name: "x",
                      size: 12
                    }, void 0, false)
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  className: "text-[10px] text-earth-400/70",
                  children: t.hindi.split('(')[0].trim()
                }, void 0, false)]
              }, t.rank, true);
            })]
          }, void 0, true)
        }, void 0, false), /*#__PURE__*/_jsxDEV("tbody", {
          children: [/*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-earth-400/80 font-semibold uppercase tracking-wider",
              children: "Rank"
            }, void 0, false), trees.map(function (t) {
              var rs = getRankStyle(t.rank);
              return /*#__PURE__*/_jsxDEV("td", {
                className: `text-center py-2.5 px-2 font-bold text-sm ${rs.text}`,
                children: ["#", t.rank, " ", rs.medal || '']
              }, t.rank, true);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-earth-400/80 font-semibold uppercase tracking-wider",
              children: "CO₂ Absorbed"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 font-bold text-xs text-earth-300",
                children: [t.c.toLocaleString(), " kg/yr"]
              }, t.rank, true);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-sky-400/80 font-semibold uppercase tracking-wider",
              children: "O₂ Released"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 font-bold text-xs text-sky-300",
                children: [t.o.toLocaleString(), " kg/yr"]
              }, t.rank, true);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "Mature Height"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: t.h || '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "Safe Distance"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: t.d || '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "Growth Rate"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs",
                children: t.g ? /*#__PURE__*/_jsxDEV("span", {
                  className: 'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ' + (t.g.includes('Fast') ? 'bg-earth-500/10 text-earth-400 border-earth-500/20' : t.g.includes('Slow') ? 'bg-forest-500/10 text-forest-300 border-forest-500/20' : 'bg-sky-500/10 text-sky-400 border-sky-500/20'),
                  children: t.g
                }, void 0, false) : '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "Water Req."
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs",
                children: t.w ? /*#__PURE__*/_jsxDEV("span", {
                  className: 'inline-flex items-center gap-1 font-medium ' + (t.w.includes('High') ? 'text-earth-400' : t.w.includes('Low') ? 'text-forest-400' : 'text-sky-400'),
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-current opacity-70"
                  }, void 0, false), t.w]
                }, void 0, true) : '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "Driving Offset"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: [getCarEquivalent(t.c), " days/yr"]
              }, t.rank, true);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/75 font-semibold uppercase tracking-wider",
              children: "O₂ for People"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: [getPeopleO2(t.o), " people"]
              }, t.rank, true);
            })]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), trees.length >= 2 && /*#__PURE__*/_jsxDEV("div", {
      className: "mt-4 pt-3 border-t border-forest-700/15",
      children: /*#__PURE__*/_jsxDEV("p", {
        className: "text-[11px] text-cream-200/75 text-center",
        children: trees.length >= 2 && function () {
          var best = trees.reduce(function (a, b) {
            return a.c > b.c ? a : b;
          });
          var worst = trees.reduce(function (a, b) {
            return a.c < b.c ? a : b;
          });
          if (best.rank === worst.rank) return '☝️ Add more trees to see comparisons';
          var diff = ((best.c - worst.c) / worst.c * 100).toFixed(0);
          return '\u{1F3C6} ' + best.name + ' absorbs ' + diff + '% more CO₂ than ' + worst.name;
        }()
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}

function Toast({
  message,
  detail,
  isVisible,
  onClose
}) {
  if (!isVisible) return null;
  return /*#__PURE__*/_jsxDEV("div", {
    className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "glass-card rounded-2xl px-4 md:px-6 py-4 border border-forest-600/30 shadow-2xl shadow-black/40 flex items-center gap-4 max-w-md",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center flex-shrink-0",
        children: /*#__PURE__*/_jsxDEV(LucideIcon, {
          name: "check",
          size: 20,
          className: "text-white",
          strokeWidth: 2.5
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex-1 min-w-0",
        children: [/*#__PURE__*/_jsxDEV("p", {
          className: "text-sm font-semibold text-cream-50",
          children: message
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-xs text-cream-200/75 truncate",
          children: detail
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        onClick: onClose,
        className: "text-cream-200/75 hover:text-cream-200/60 transition-colors p-1",
        children: /*#__PURE__*/_jsxDEV(LucideIcon, {
          name: "x",
          size: 16
        }, void 0, false)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
}

/* ──────────────────────────────────────────────
   CTA / Contact Section
────────────────────────────────────────────── */
function Contact() {
  const [ref, isVisible] = useInView();
  const context = React.useContext(LanguageContext);
  const language = (context && context.language) || 'en';
  const t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;

  const [toast, setToast] = useState({
    show: false,
    message: '',
    detail: ''
  });
  const showToast = (message, detail) => {
    setToast({
      show: true,
      message,
      detail
    });
    setTimeout(() => setToast({
      show: false,
      message: '',
      detail: ''
    }), 4000);
  };
  const handleEmailClick = e => {
    const email = 'kumthekaratharv@gmail.com';
    navigator.clipboard.writeText(email).catch(() => {});
    showToast(t.contact.emailCopied, email);
  };
  const handleCallClick = e => {
    const phone = '8482845479';
    navigator.clipboard.writeText(phone).catch(() => {});
    showToast(t.contact.phoneCopied, phone);
  };
  return /*#__PURE__*/_jsxDEV("section", {
    id: "contact",
    className: "relative py-28 lg:py-36",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
      children: /*#__PURE__*/_jsxDEV("div", {
        ref: ref,
        className: `relative rounded-2xl md:rounded-3xl overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "absolute inset-0 bg-gradient-to-br from-forest-800/80 via-forest-900/90 to-forest-950 rounded-2xl md:rounded-3xl"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,138,53,0.08),transparent_60%)]"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "relative z-10 px-5 md:px-8 py-10 md:py-16 lg:px-16 lg:py-24 text-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "absolute top-5 md:p-8 left-8 animate-float opacity-20",
            children: /*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "leaf",
              size: 32,
              className: "text-forest-400"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "absolute bottom-8 right-8 animate-float delay-300 opacity-20",
            children: /*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "tree-pine",
              size: 28,
              className: "text-earth-400"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-500/10 border border-earth-500/20 mb-6",
            children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "sparkles",
              size: 14,
              className: "text-earth-400"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "text-[11px] font-semibold text-earth-400 tracking-wide uppercase",
              children: t.contact.badge
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
            className: "font-serif text-xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-5",
            children: [t.contact.title, /*#__PURE__*/_jsxDEV("span", {
              className: "gradient-text",
              children: t.contact.titleHighlight
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "max-w-xl mx-auto text-base text-cream-200/75 leading-relaxed mb-10",
            children: t.contact.desc
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
            children: [/*#__PURE__*/_jsxDEV("a", {
              id: "cta-call",
              href: "tel:8482845479",
              onClick: handleCallClick,
              className: "group inline-flex items-center gap-2.5 px-5 md:px-8 py-4 rounded-full bg-gradient-to-r from-earth-500 to-earth-600 text-forest-950 font-bold text-sm shadow-xl shadow-earth-900/40 hover:shadow-earth-700/50 hover:-translate-y-0.5 transition-all duration-300",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "phone",
                size: 18,
                className: "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              }, void 0, false), t.contact.callBtn, /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "arrow-right",
                size: 16,
                className: "transition-transform duration-300 group-hover:translate-x-1"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("a", {
              id: "cta-schedule",
              href: "mailto:kumthekaratharv@gmail.com?subject=New%20Consultation%20Request",
              onClick: handleEmailClick,
              className: "group inline-flex items-center gap-2 px-4 md:px-6 py-4 rounded-full border border-cream-200/15 text-cream-200/70 font-medium text-sm hover:text-cream-100 hover:border-cream-200/25 hover:bg-cream-50/5 transition-all duration-300",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "mail",
                size: 16,
                className: "text-earth-400"
              }, void 0, false), t.contact.mailBtn]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), 
        /* Developed By Section */
        /*#__PURE__*/_jsxDEV("div", { className: "mt-32 mb-16 text-center gpu-accel w-full", children: [
          /*#__PURE__*/_jsxDEV("div", { className: "inline-block mb-12", children: [
            /*#__PURE__*/_jsxDEV("h3", { className: "text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200", children: t.contact.developedBy }, void 0, false),
            /*#__PURE__*/_jsxDEV("div", { className: "h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full" }, void 0, false)
          ]}, void 0, true),
          /*#__PURE__*/_jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4", children: 
            [ 'Praddyumn Kumthekar', 'Vaibhav Chalakh', 'Aryan Lengure', 'Aarush Rathod', 'Parth Ambartani' ].map((name, i) => 
              /*#__PURE__*/_jsxDEV("div", { className: "team-card gpu-accel", children: [
                /*#__PURE__*/_jsxDEV("div", { className: "team-avatar", children: name.split(' ').map(n => n[0]).join('') }, void 0, false),
                /*#__PURE__*/_jsxDEV("h4", { className: "team-name", children: name }, void 0, false)
              ]}, i, true)
            )
          }, void 0, false)
        ]}, void 0, true)
, /*#__PURE__*/_jsxDEV(Toast, {
      message: toast.message,
      detail: toast.detail,
      isVisible: toast.show,
      onClose: () => setToast({
        show: false,
        message: '',
        detail: ''
      })
    }, void 0, false)]
  }, void 0, true);
}

/* ──────────────────────────────────────────────
   Footer
────────────────────────────────────────────── */
function Footer() {
  return /*#__PURE__*/_jsxDEV("footer", {
    className: "bg-forest-950/70 backdrop-blur-lg border-t border-white/10 py-5 md:py-8 md:py-12 lg:py-16 relative z-10",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-col lg:flex-row items-center justify-between gap-5 md:p-8",
        children: [/*#__PURE__*/_jsxDEV("a", {
          href: "#",
          className: "flex items-center gap-2.5",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-8 h-8 rounded-lg bg-gradient-to-br from-forest-600 to-forest-700 flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "tree-pine",
              size: 17,
              className: "text-cream-100"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-base font-semibold text-cream-100/70",
            children: ["af", /*#__PURE__*/_jsxDEV("span", {
              className: "text-earth-400/70",
              children: "forestation"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-4 md:p-6 text-sm text-cream-200/35 flex-wrap justify-center",
          children: [/*#__PURE__*/_jsxDEV("a", {
            href: "#services",
            className: "hover:text-cream-200/60 transition-colors",
            children: "Services"
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: "#tree-database",
            className: "hover:text-cream-200/60 transition-colors",
            children: "Tree Data"
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: "#contact",
            className: "hover:text-cream-200/60 transition-colors",
            children: "Contact"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "hidden sm:inline text-cream-200/15",
            children: "|"
          }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
            href: "#",
            className: "hover:text-cream-200/60 transition-colors",
            children: "Privacy"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-xs text-cream-200/25",
          children: ["© ", new Date().getFullYear(), " afforestation. All rights reserved."]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "mt-12 pt-8 border-t border-forest-800/30 text-center",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "relative py-6 mt-12 overflow-hidden rounded-3xl bg-forest-900/40 border border-white/5",
          children: [
            /*#__PURE__*/_jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-earth-500/0 via-earth-500/5 to-earth-500/0 animate-shimmer" }, void 0, false),
            /*#__PURE__*/_jsxDEV("p", {
              className: "font-serif text-earth-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 text-center opacity-80",
              children: "Developed By"
            }, void 0, false),
            /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-cream-50 font-bold tracking-wide",
              children: [
                /*#__PURE__*/_jsxDEV("span", {
                  className: "text-lg md:text-xl bg-gradient-to-r from-cream-50 to-cream-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default",
                  children: "Pradyumn Kumthekar"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-earth-500/50 hidden sm:block shadow-[0_0_8px_rgba(220,160,80,0.8)]" }, void 0, false),
                /*#__PURE__*/_jsxDEV("span", {
                  className: "text-lg md:text-xl bg-gradient-to-r from-cream-50 to-cream-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default",
                  children: "Vaibhav Chalakh"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-earth-500/50 hidden sm:block shadow-[0_0_8px_rgba(220,160,80,0.8)]" }, void 0, false),
                /*#__PURE__*/_jsxDEV("span", {
                  className: "text-lg md:text-xl bg-gradient-to-r from-cream-50 to-cream-200 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default",
                  children: "Siddhesh Jadhav"
                }, void 0, false)
              ]
            }, void 0, true)
          ]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "mt-12 pt-8 border-t border-forest-800/30 text-center animate-fade-in-up delay-200",
        children: [/*#__PURE__*/_jsxDEV("p", {
          className: "font-serif italic text-earth-400/80 mb-5 text-xl",
          children: "Special Thanks To"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-cream-100/90 font-medium tracking-wide",
          children: /*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Lokesh Dilip Toshniwal"
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
}

/* ──────────────────────────────────────────────
   App
────────────────────────────────────────────── */
/* ──────────────────────────────────────────────
   Tree Avatar SVG — Minimalist Wireframe
────────────────────────────────────────────── */
function TreeAvatarSVG({ size = 24, className = '' }) {
  return /*#__PURE__*/_jsxDEV("span", {
    className: 'inline-flex items-center justify-center ' + className,
    children: /*#__PURE__*/_jsxDEV("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.4,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /*#__PURE__*/_jsxDEV("path", { d: "M16 6 L10 14 L13 14 L8 22 L24 22 L19 14 L22 14 Z", stroke: "currentColor", fill: "none" }, "canopy", false),
        /*#__PURE__*/_jsxDEV("line", { x1: 16, y1: 22, x2: 16, y2: 27, stroke: "currentColor" }, "trunk", false),
        /*#__PURE__*/_jsxDEV("path", { d: "M12 27 Q14 24.5 16 27 Q18 24.5 20 27", stroke: "currentColor", fill: "none", strokeWidth: 1.2 }, "roots-smile", false),
        /*#__PURE__*/_jsxDEV("line", { x1: 14, y1: 25, x2: 11, y2: 28, stroke: "currentColor", strokeWidth: 1.0, opacity: 0.5 }, "root-l", false),
        /*#__PURE__*/_jsxDEV("line", { x1: 18, y1: 25, x2: 21, y2: 28, stroke: "currentColor", strokeWidth: 1.0, opacity: 0.5 }, "root-r", false)
      ]
    }, void 0, true)
  }, void 0, false);
}

/* ──────────────────────────────────────────────
   System Prompt — Senior Environmental Engineer
────────────────────────────────────────────── */
var SYSTEM_PROMPT = 'You are a Senior Environmental Engineer with 25+ years of experience in structural ' +
  'mechanics, geotechnical analysis, and urban forestry integration. Your analytical ' +
  'framework draws on finite element methods, soil-structure interaction models, and ' +
  'long-term ecological succession data. You speak with precision — citing load ' +
  'distributions, root-zone radii, and canopy thermal coefficients — yet you also ' +
  'carry a reflective awareness of how built environments and natural ecosystems ' +
  'co-evolve over decades. You see each project not just as an engineering problem ' +
  'but as a dialogue between human infrastructure and the deep patience of living systems.';

/* ──────────────────────────────────────────────
   Green Assistant — AI Chatbot Widget
────────────────────────────────────────────── */
/* ──────────────────────────────────────────────
   Green Assistant — Modernized AI Chatbot Widget
────────────────────────────────────────────── */
function GreenAssistant() {
  const context = React.useContext(LanguageContext);
  const currentLang = (context && context.language) || 'en';
  const t = (context && context.t) || TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const welcomeGreetings = {
    en: "Hello! I am your Ecological Assistant 🌱. Ask me anything about native tree species, water conservation, climate resilience, and soil health!",
    hi: "नमस्ते! मैं आपका पारिस्थितिकी सहायक हूँ 🌱। मुझसे देशी पेड़ों की प्रजातियों, जल संरक्षण, जलवायु लचीलापन और मिट्टी के स्वास्थ्य के बारे में कुछ भी पूछें!",
    mr: "नमस्कार! मी तुमचा पर्यावरण सहाय्यक आहे 🌱. मला स्थानिक झाडांच्या प्रजाती, जलसंधारण, हवामान लवचिकता आणि मातीबद्दल काहीही विचारा!"
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(function() {
    try {
      const saved = sessionStorage.getItem('greenAssistantMessages_' + currentLang);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [{
      role: 'assistant',
      content: welcomeGreetings[currentLang] || welcomeGreetings.en
    }];
  });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Sync to session storage
  useEffect(function() {
    try {
      sessionStorage.setItem('greenAssistantMessages_' + currentLang, JSON.stringify(messages));
    } catch (e) {}
  }, [messages, currentLang]);

  // Update initial greeting when language changes if no conversation started
  useEffect(function() {
    if (messages.length === 1 && messages[0].role === 'assistant') {
      setMessages([{
        role: 'assistant',
        content: welcomeGreetings[currentLang] || welcomeGreetings.en
      }]);
    }
  }, [currentLang]);

  // Auto scroll to bottom
  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Auto focus input on open
  useEffect(function() {
    if (isOpen && inputRef.current) {
      setTimeout(function() {
        inputRef.current.focus();
      }, 150);
    }
  }, [isOpen]);

  // Direct Client-Side Gemini API Submission Handler
  async function handleSend(forcedQuery) {
    const userMessage = (typeof forcedQuery === 'string' ? forcedQuery : input).trim();
    if (!userMessage || isTyping) return;
    if (typeof forcedQuery !== 'string') {
      setInput('');
    }

    const lang = currentLang || "en";

    setMessages((prev) => [...prev, { role: "user", content: userMessage, text: userMessage, sender: "user" }]);
    setIsTyping(true);

    try {
      // Direct Google Gemini API Call
      const API_KEY = "AQ.Ab8RN6Ksdw3MQ75vhsbMFxbmP8WLFMsPGf9uT3n9hycfu-6_cw"; 
      
      // Multi-model cascade: gemini-3.5-flash, gemini-3.5-flash-lite, gemini-2.5-flash
      const candidateModels = ["gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-2.5-flash"];
      let data = null;
      let lastErrorMessage = "";

      const systemPrompt = `You are the official Ecological Assistant for the Afforestation Platform.

PRIMARY OPERATING RULES:
1. SPECIFIC WEBSITE DATABASE QUESTIONS (Priority 1):
For questions about top CO2 absorbing trees, top oxygen trees, tree rankings, specific trees in the database (Neem, Tamarind, Siris, Peepal, Subabul, Gulmohar, Bamboo, Amla, etc.), low water trees, growth rates, tree comparisons, or Miyawaki method, you MUST answer using the exact figures and rankings from the Afforestation Website Database below.
Always prefix your response with:
🌱 **From Afforestation Website Database:** (or in Hindi: 🌱 **अफॉरेस्टेशन वेबसाइट डेटाबेस से:** / in Marathi: 🌱 **अफॉरेस्टेशन वेबसाइट डेटाबेसमधून:**)

AFFORESTATION WEBSITE DATABASE (38 SPECIES RANKED BY CO2 ABSORPTION):
#1. Indian siris tree (Albizia lebbeck | Hindi: Siris | Marathi: Shirish) - CO2: 1029.56 kg/yr, O2: 2744.81 kg/yr, Water: Medium, Growth: Fast, Height: 15-25m, Canopy: 12-18m
#2. Tamarind (Tamarindus indica | Hindi: Imli | Marathi: Chinch) - CO2: 808.79 kg/yr, O2: 2156.23 kg/yr, Water: Low, Growth: Slow, Height: 12-20m, Canopy: 10-15m
#3. May flower tree / Gulmohar (Delonix regia) - CO2: 385.26 kg/yr, O2: 1027.11 kg/yr, Water: Medium, Growth: Fast, Height: 10-15m, Canopy: 8-12m
#4. Yellow flame tree (Peltophorum pterocarpum | Hindi: Peela Gulmohar | Marathi: Sonmohar) - CO2: 377.16 kg/yr, O2: 1005.52 kg/yr, Water: Medium, Growth: Fast
#5. Sacred fig (Ficus religiosa | Hindi: Peepal | Marathi: Pimpal) - CO2: 339.82 kg/yr, O2: 905.96 kg/yr, Water: Medium, Growth: Medium, Height: 15-25m, Canopy: 15-20m
#6. River tamarind (Leucaena leucocephala | Hindi: Subabul | Marathi: Subabhul) - CO2: 313.76 kg/yr, O2: 836.47 kg/yr, Water: Low, Growth: Very Fast
#7. Kanak Champa (Pterospermum acerifolium | Marathi: Muchkund) - CO2: 310.08 kg/yr, O2: 826.67 kg/yr, Water: Medium, Growth: Medium
#8. Neem (Azadirachta indica | Hindi: Neem | Marathi: Kadulimb) - CO2: 301.67 kg/yr, O2: 804.25 kg/yr, Water: Low, Growth: Medium-Fast, Height: 12-18m, Canopy: 8-12m
#9. Indian cork tree (Millingtonia hortensis | Hindi: Neem Chameli | Marathi: Buch) - CO2: 211.29 kg/yr, O2: 563.29 kg/yr, Water: Medium, Growth: Fast
#10. Gooseberry (Phyllanthus emblica | Hindi: Amla | Marathi: Amla) - CO2: 206.10 kg/yr, O2: 549.46 kg/yr, Water: Low, Growth: Medium
#11. Earleaf acacia (Pahari Babul) - CO2: 204.44 kg/yr, O2: 545.04 kg/yr, Water: Low, Growth: Fast
#12. Cluster fig (Gular / Umber) - CO2: 195.29 kg/yr, O2: 520.66 kg/yr, Water: Medium, Growth: Fast
#13. Jamun tree (Syzygium cumini | Hindi: Jamun | Marathi: Jambhul) - CO2: 190.59 kg/yr, O2: 508.12 kg/yr, Water: Medium, Growth: Medium
#14. Golden shower (Cassia fistula | Hindi: Amaltas | Marathi: Bahawa) - CO2: 188.51 kg/yr, O2: 502.56 kg/yr, Water: Low-Medium, Growth: Medium
#15. Weeping fig (Ficus benjamina | Hindi: Chilkan | Marathi: Nandruk) - CO2: 178.05 kg/yr, O2: 474.69 kg/yr, Water: Medium, Growth: Fast
#16. Teak (Tectona grandis | Hindi: Sagwan | Marathi: Sagwan) - CO2: 149.42 kg/yr, O2: 398.36 kg/yr, Water: Medium, Growth: Fast
#17. Pungam tree (Pongamia pinnata | Hindi: Karanj | Marathi: Karanj) - CO2: 140.59 kg/yr, O2: 374.81 kg/yr, Water: Low, Growth: Fast
#18. Spanish Cherry (Mimusops elengi | Hindi: Maulsari | Marathi: Bakul) - CO2: 125.43 kg/yr, O2: 334.38 kg/yr, Water: Medium, Growth: Slow
#19. Paradise tree (Simarouba glauca | Lakshmi Taru) - CO2: 119.71 kg/yr, O2: 319.15 kg/yr, Water: Low, Growth: Fast
#20. Wild almond tree (Sterculia foetida | Jangli Badam) - CO2: 116.82 kg/yr, O2: 311.44 kg/yr, Water: Medium, Growth: Fast
#21. Wood apple (Limonia acidissima | Hindi: Kaitha | Marathi: Kavath) - CO2: 106.71 kg/yr, O2: 284.49 kg/yr, Water: Low, Growth: Slow
#22. Mulberry tree (Morus | Hindi: Shahtoot | Marathi: Tuti) - CO2: 94.15 kg/yr, O2: 251.00 kg/yr, Water: Medium, Growth: Fast
#23. Guava tree (Psidium guajava | Hindi: Amrud | Marathi: Peru) - CO2: 85.34 kg/yr, O2: 227.53 kg/yr, Water: Medium, Growth: Medium
#24. Casuarina (Casuarina equisetifolia | Hindi: Jhau | Marathi: Suru) - CO2: 80.53 kg/yr, O2: 214.70 kg/yr, Water: Low, Growth: Fast
#25. Bibhitaki tree (Terminalia bellirica | Hindi: Baheda | Marathi: Behada) - CO2: 76.60 kg/yr, O2: 204.21 kg/yr, Water: Medium, Growth: Medium
#26. Purple bauhinia (Bauhinia purpurea | Hindi: Kachnar | Marathi: Rakta Kanchan) - CO2: 70.08 kg/yr, O2: 186.83 kg/yr, Water: Medium, Growth: Fast
#27. Butter tree (Madhuca longifolia | Hindi: Mahua | Marathi: Moh) - CO2: 69.43 kg/yr, O2: 185.11 kg/yr, Water: Low-Medium, Growth: Slow-Medium
#28. Indian mulberry (Morinda citrifolia | Hindi: Aal | Marathi: Noni) - CO2: 68.81 kg/yr, O2: 183.44 kg/yr, Water: High, Growth: Medium
#29. Geranium tree (Cordia sebestena | Hindi: Lal Lasora | Marathi: Kanchan) - CO2: 57.53 kg/yr, O2: 153.38 kg/yr, Water: Low, Growth: Medium
#30. Yellow bells (Tecoma stans | Hindi: Pili Chameli | Marathi: Tecoma) - CO2: 50.19 kg/yr, O2: 133.80 kg/yr, Water: Low, Growth: Fast
#31. Mango tree (Mangifera indica | Hindi: Aam | Marathi: Amba) - CO2: 46.31 kg/yr, O2: 123.45 kg/yr, Water: Medium, Growth: Medium
#32. Indian almond (Terminalia catappa | Hindi: Desi Badam | Marathi: Deshi Badam) - CO2: 38.34 kg/yr, O2: 102.21 kg/yr, Water: Medium, Growth: Fast
#33. False Ashoka (Polyalthia longifolia | Ashoka) - CO2: 29.01 kg/yr, O2: 77.34 kg/yr, Water: Medium, Growth: Medium
#34. Curry leaf (Murraya koenigii | Kadi Patta) - CO2: 26.71 kg/yr, O2: 71.20 kg/yr, Water: Medium, Growth: Medium
#35. Quick stick (Gliricidia sepium | Giripushpa) - CO2: 21.18 kg/yr, O2: 56.46 kg/yr, Water: Low, Growth: Very Fast
#36. Arjuna tree (Terminalia arjuna | Arjun) - CO2: 12.75 kg/yr, O2: 33.99 kg/yr, Water: Medium, Growth: Medium
#37. Parijat (Nyctanthes arbor-tristis | Harsingar | Parijatak) - CO2: 5.85 kg/yr, O2: 15.60 kg/yr, Water: Medium, Growth: Medium
#38. Bamboo (Bambusoideae | Hindi: Bans | Marathi: Bambu) - CO2: 5.80 kg/yr, O2: 15.46 kg/yr, Water: Med-High, Growth: Very Fast

DATABASE TOTALS: 38 species, Total CO2: ~6,380 kg/yr, Total O2: ~17,015 kg/yr.
MIYAWAKI METHOD: 4 layers (Shrubs, Sub-trees, Trees, Canopy), 30x denser, 10x faster, self-sustaining in 3 years, 3-5 saplings/sqm.
LOW WATER TREES IN DATABASE: Tamarind (#2), Subabul (#6), Neem (#8), Amla (#10), Earleaf acacia (#11), Karanj (#17), Paradise tree (#19), Wood apple (#21), Casuarina (#24), Lal Lasora (#29), Yellow bells (#30), Quick stick (#35).

2. GOOGLE / WEB SEARCH FOR UNLISTED TOPICS (Priority 2):
If the user asks an ecological question whose information is NOT available in the website database above (for example: trees not in the database like Mangroves, Oak, Redwood, Baobab, Eucalyptus, Pine; or general topics like soil biochar, drip irrigation, mycorrhizal fungi, rainwater harvesting, carbon credit trading, global climate summits, etc.), you MUST provide a comprehensive, accurate answer from Google / Web Search knowledge.
Always prefix your response with:
🔍 **From Google / Web Search (Not in Website Database):** (or in Hindi: 🔍 **गूगल/वेब खोज से (वेबसाइट डेटाबेस में उपलब्ध नहीं):** / in Marathi: 🔍 **गुगल/वेब सर्चवरून (वेबसाइट डेटाबेसमध्ये उपलब्ध नाही):**)

STRICT ECOLOGICAL CONSTRAINTS:
- ONLY answer questions related to trees, plants, water conservation, climate resilience, and soil.
- If the user asks about anything else, politely refuse.
- ${lang === 'hi' ? 'Respond in clear, natural Hindi (हिंदी).' : lang === 'mr' ? 'Respond in clear, natural Marathi (मराठी).' : 'Respond in English.'}`;

      for (const model of candidateModels) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { 
                parts: [{ text: systemPrompt }] 
              },
              contents: [{ role: "user", parts: [{ text: `Language: ${lang}. Query: ${userMessage}` }] }],
              generationConfig: { temperature: 0.2 }
            })
          });

          if (res.ok) {
            data = await res.json();
            break;
          } else {
            const errBody = await res.json().catch(() => ({}));
            lastErrorMessage = errBody.error?.message || `HTTP ${res.status}`;
          }
        } catch (netErr) {
          lastErrorMessage = netErr.message || String(netErr);
        }
      }

      // If direct call had any issues, fallback seamlessly to backend /api/chat
      if (!data) {
        const fallbackRes = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage, lang: lang })
        });
        if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json();
          const reply = fallbackData.reply || fallbackData.text || fallbackData.message;
          setMessages((prev) => [...prev, { role: "assistant", content: reply, text: reply, sender: "ai" }]);
          return;
        }
        throw new Error(lastErrorMessage || "Failed to connect to Gemini");
      }

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      // Update the chat UI state with the AI's reply here
      setMessages((prev) => [...prev, { role: "assistant", content: reply, text: reply, sender: "ai" }]);

    } catch (error) {
      // Print the raw error directly into the chat bubble
      setMessages((prev) => [...prev, { role: "assistant", content: `🚨 ERROR: ${error.message}`, text: `🚨 ERROR: ${error.message}`, sender: "ai" }]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const quickPrompts = {
    en: [
      { label: "🏆 Top CO₂ Absorbers", query: "Which native trees absorb the most CO2?" },
      { label: "💧 Low Water Species", query: "Which native trees require minimal water?" },
      { label: "🌳 About Neem", query: "Tell me about Neem tree ecological benefits" },
      { label: "🌱 Miyawaki Method", query: "What is the Miyawaki Method and how does it work?" }
    ],
    hi: [
      { label: "🏆 शीर्ष CO₂ अवशोषक", query: "सबसे अधिक CO2 कौन से देशी पेड़ सोखते हैं?" },
      { label: "💧 कम पानी वाले पेड़", query: "कम पानी में जीवित रहने वाले देशी पेड़ कौन से हैं?" },
      { label: "🌳 नीम के फायदे", query: "नीम के पेड़ के पारिस्थितिकी लाभ बताएं" },
      { label: "🌱 मियावाकी पद्धति", query: "मियावाकी पद्धति क्या है और यह कैसे काम करती है?" }
    ],
    mr: [
      { label: "🏆 अव्वल CO₂ शोषक", query: "सर्वात जास्त CO2 शोषून घेणारी झाडे कोणती?" },
      { label: "💧 कमी पाणी लागणारी", query: "कमी पाण्यात येणारी स्थानिक झाडे कोणती आहेत?" },
      { label: "🌳 कडुनिंबाचे महत्त्व", query: "कडुनिंबाचे पर्यावरणीय फायदे काय आहेत?" },
      { label: "🌱 मियावाकी पद्धत", query: "मियावाकी पद्धत काय आहे आणि ती कशी कार्य करते?" }
    ]
  }[currentLang] || [
    { label: "🏆 Top CO₂ Absorbers", query: "Which native trees absorb the most CO2?" },
    { label: "💧 Low Water Species", query: "Which native trees require minimal water?" }
  ];

  return React.createElement(React.Fragment, null,
    // Chat Window
    isOpen && React.createElement("div", {
      className: "fixed inset-x-3 bottom-24 sm:inset-auto sm:bottom-24 sm:right-6 z-[95] w-auto sm:w-[420px] max-w-[calc(100vw-1.5rem)] h-[74vh] sm:h-[580px] max-h-[calc(100dvh-7rem)] flex flex-col rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-emerald-500/20 shadow-2xl shadow-black/40 overflow-hidden chat-slide-up origin-bottom-right transition-all"
    },
      // Header
      React.createElement("div", {
        className: "flex items-center justify-between px-4 py-3.5 border-b border-gray-200/60 dark:border-white/10 bg-gradient-to-r from-emerald-600/10 via-emerald-600/5 to-transparent dark:from-emerald-950/60 dark:to-forest-950/60 backdrop-blur-md flex-shrink-0 relative z-10"
      },
        React.createElement("div", { className: "flex items-center gap-3" },
          React.createElement("div", {
            className: "relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 ring-1 ring-white/20"
          },
            React.createElement(LucideIcon, { name: 'leaf', size: 20 }),
            React.createElement("span", {
              className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            })
          ),
          React.createElement("div", null,
            React.createElement("h3", { className: "text-sm sm:text-base font-bold text-gray-900 dark:text-white tracking-wide flex items-center gap-1.5 leading-tight" },
              currentLang === 'hi' ? 'पारिस्थितिकी सहायक' : currentLang === 'mr' ? 'पर्यावरण सहाय्यक' : 'Eco Assistant',
              React.createElement("span", {
                className: "px-1.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[9px] text-emerald-700 dark:text-emerald-300 uppercase tracking-widest font-bold"
              }, 'AI')
            ),
            React.createElement("p", { className: "text-[11px] text-gray-500 dark:text-emerald-200/70 font-medium tracking-wide mt-0.5" },
              currentLang === 'hi' ? 'वृक्ष, मिट्टी एवं जल ज्ञानकोष' : currentLang === 'mr' ? 'झाडे, माती व जल ज्ञानकोष' : 'Trees, Soil & Ecological AI'
            )
          )
        ),
        React.createElement("div", { className: "flex items-center gap-1" },
          // Export Transcript Button
          React.createElement("button", {
            onClick: function() {
              const text = messages.map(function(m) {
                return (m.role === 'user' ? 'YOU' : 'ECO ASSISTANT') + ': ' + m.content;
              }).join('\n\n');
              const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = 'eco-assistant-chat-' + new Date().toISOString().slice(0, 10) + '.txt';
              a.click();
              URL.revokeObjectURL(a.href);
            },
            className: "w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
            title: currentLang === 'hi' ? 'चैट डाउनलोड करें' : currentLang === 'mr' ? 'चॅट डाउनलोड करा' : 'Export Chat'
          }, React.createElement(LucideIcon, { name: 'download', size: 16 })),
          // Clear Chat Button
          React.createElement("button", {
            onClick: function() {
              setMessages([{
                role: 'assistant',
                content: welcomeGreetings[currentLang] || welcomeGreetings.en
              }]);
            },
            className: "w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
            title: currentLang === 'hi' ? 'चैट साफ़ करें' : currentLang === 'mr' ? 'चॅट साफ करा' : 'Clear Chat'
          }, React.createElement(LucideIcon, { name: 'rotate-ccw', size: 16 })),
          // Minimize Button
          React.createElement("button", {
            onClick: function() { setIsOpen(false); },
            className: "w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
            title: 'Close'
          }, React.createElement(LucideIcon, { name: 'chevron-down', size: 18 }))
        )
      ),

      // Messages Feed
      React.createElement("div", {
        className: "flex-1 overflow-y-auto px-4 py-4 space-y-4 chat-messages bg-gray-50/60 dark:bg-forest-950/40 relative z-10"
      },
        messages.map(function(msg, i) {
          const isUser = msg.role === 'user' || msg.sender === 'user';
          const msgBody = msg.content || msg.text || '';
          return React.createElement("div", {
            key: i,
            className: 'flex animate-fade-in ' + (isUser ? 'justify-end' : 'justify-start')
          },
            React.createElement("div", {
              className: 'flex gap-2.5 max-w-[88%] ' + (isUser ? 'flex-row-reverse items-end' : 'flex-row items-end')
            },
              React.createElement("div", {
                className: 'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center shadow-sm mb-0.5 ' +
                  (isUser ? 'bg-emerald-700 text-white' : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/20')
              }, isUser
                ? React.createElement(LucideIcon, { name: 'user', size: 13 })
                : React.createElement(LucideIcon, { name: 'leaf', size: 13 })
              ),
              isUser
                ? React.createElement("div", {
                    className: "rounded-2xl rounded-br-sm px-4 py-2.5 text-sm leading-relaxed bg-emerald-600 text-white shadow-md select-text",
                    style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
                  }, msgBody)
                : React.createElement("div", {
                    className: "rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200/60 dark:border-gray-700/60 shadow-md prose prose-sm dark:prose-invert max-w-none select-text",
                    style: { wordBreak: 'break-word' },
                    dangerouslySetInnerHTML: {
                      __html: window.marked ? marked.parse(msgBody) : msgBody
                    }
                  })
            )
          );
        }),

        // Typing Indicator
        isTyping && React.createElement("div", { className: "flex justify-start animate-fade-in" },
          React.createElement("div", { className: "flex gap-2.5 items-end" },
            React.createElement("div", {
              className: "flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm mb-0.5"
            }, React.createElement(LucideIcon, { name: 'leaf', size: 13 })),
            React.createElement("div", {
              className: "rounded-2xl rounded-bl-sm px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 shadow-sm flex items-center gap-2"
            },
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 typing-dot" }),
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 typing-dot" }),
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 typing-dot" })
            )
          )
        ),
        React.createElement("div", { ref: messagesEndRef })
      ),

      // Quick Suggestion Chips
      React.createElement("div", {
        className: "chat-quick-prompts-row border-t border-gray-200/50 dark:border-white/5 bg-gray-50/70 dark:bg-forest-950/60 flex-shrink-0 relative z-10 py-2 px-3"
      },
        quickPrompts.map(function(chip, ci) {
          return React.createElement("button", {
            key: ci,
            onClick: function() { handleSend(chip.query); },
            disabled: isTyping,
            className: "px-3 py-1.5 min-h-[32px] rounded-full text-xs font-medium bg-emerald-50 dark:bg-forest-900/50 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200 flex-shrink-0 shadow-sm disabled:opacity-50"
          }, chip.label);
        })
      ),

      // Input Bar
      React.createElement("div", {
        className: "p-3 border-t border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md flex-shrink-0 relative z-10"
      },
        React.createElement("div", { className: "flex items-center gap-2" },
          React.createElement("div", { className: "flex-1 relative" },
            React.createElement("input", {
              ref: inputRef,
              type: "text",
              value: input,
              onChange: function(e) { setInput(e.target.value); },
              onKeyDown: handleKeyDown,
              placeholder: currentLang === 'hi' ? 'वृक्ष, मिट्टी, जल संरक्षण संबंधी प्रश्न पूछें...' : currentLang === 'mr' ? 'झाडे, माती, जलसंधारण प्रश्न विचारा...' : 'Ask about trees, soil, water conservation...',
              className: "w-full px-4 py-2.5 text-sm rounded-xl bg-gray-100 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-700/60 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-emerald-500 shadow-inner transition-all",
              disabled: isTyping,
              "aria-label": "Eco Assistant input"
            })
          ),
          React.createElement("button", {
            onClick: function() { handleSend(); },
            disabled: !input.trim() || isTyping,
            className: 'w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center transition-all flex-shrink-0 ' +
              (input.trim() && !isTyping
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md hover:scale-105 active:scale-95'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'),
            "aria-label": "Send message"
          },
            React.createElement(LucideIcon, {
              name: 'send',
              size: 18,
              className: input.trim() && !isTyping ? 'translate-x-0.5 -translate-y-0.5' : ''
            })
          )
        )
      )
    ),

    // Floating Action Button
    React.createElement("div", {
      className: "fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-3"
    },
      !isOpen && React.createElement("div", {
        className: "hidden md:flex items-center gap-2 bg-forest-900/90 backdrop-blur-md border border-emerald-500/20 px-3.5 py-2 rounded-full shadow-lg text-emerald-100 text-xs font-medium animate-fade-in pointer-events-none"
      },
        React.createElement(LucideIcon, { name: 'sparkles', size: 14, className: 'text-emerald-400' }),
        currentLang === 'hi' ? 'पर्यावरण सहायक' : currentLang === 'mr' ? 'पर्यावरण सहाय्यक' : 'Ask Eco Assistant'
      ),
      React.createElement("button", {
        id: "green-assistant-toggle",
        onClick: function() { setIsOpen(!isOpen); },
        className: "w-14 h-14 min-h-[44px] min-w-[44px] rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-white relative focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-forest-950",
        "aria-label": isOpen ? 'Close Eco Assistant' : 'Open Eco Assistant'
      },
        isOpen
          ? React.createElement(LucideIcon, {
              name: 'x',
              size: 24,
              className: "text-white transition-transform duration-300 rotate-90"
            })
          : React.createElement(React.Fragment, null,
              React.createElement(LucideIcon, {
                name: 'leaf',
                size: 24,
                className: "text-white transition-transform duration-300 group-hover:rotate-12"
              }),
              React.createElement("span", {
                className: "absolute -top-1 -right-1 flex h-3.5 w-3.5"
              },
                React.createElement("span", {
                  className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                }),
                React.createElement("span", {
                  className: "relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-forest-950"
                })
              )
            )
      )
    )
  );
}



const methodologiesData = [
  {
    "id": "m1",
    "title": {
      "en": "Miyawaki Multi-Layer Native Afforestation",
      "hi": "मियावाकी बहुस्तरीय देशी वनीकरण",
      "mr": "मियावाकी बहुस्तरीय स्थानिक वनीकरण"
    },
    "description": {
      "en": "Introduction: A proven ecological engineering method pioneered by Dr. Akira Miyawaki to restore native ecosystems 10x faster and 30x denser than conventional mono-plantations.\n\nWorking Principle: High-density co-planting of indigenous species prompts vertical competition for sunlight, driving accelerated upward sapling growth while mutualistic root fungi protect soil.\n\nHow to Apply:\n1. Excavate degraded soil 1 meter deep and mix organic biomass, coco-peat, and compost.\n2. Select 30-50 indigenous species across 4 ecological layers: shrubs, sub-trees, canopy, and emergent trees.\n3. Plant 3 to 5 saplings per square meter randomly in multi-species clusters.\n4. Apply an 8-inch straw/leaf mulch layer and water daily for the first 2-3 years until self-sustaining.\n\nAdvantages:\n• Absorbs up to 30x more carbon dioxide than standard tree plantations.\n• Lowers ambient surface temperature by up to 4°C through microclimatic transpiration.\n• Reaches full mature ecosystem density in only 20-30 years instead of 200 years.\n• Completely zero-maintenance and self-sustaining after year three.",
      "hi": "परिचय: डॉ. अकीरा मियावाकी द्वारा विकसित एक सिद्ध पारिस्थितिक तकनीक, जो पारंपरिक वृक्षारोपण की तुलना में 10 गुना तेजी से और 30 गुना घने जंगल तैयार करती है।\n\nकार्यप्रणाली: स्थानीय प्रजातियों को एक साथ सघन रूप से रोपने से पौधे सूर्य के प्रकाश के लिए ऊपर की ओर तेजी से बढ़ते हैं और उनकी जड़ें मिलकर मिट्टी को मजबूत बनाती हैं।\n\nउपयोग कैसे करें:\n1. जमीन को 1 मीटर गहरा खोदकर उसमें बायोमास, कोको-पीट और जैविक खाद मिलाएं।\n2. 4 परतों (झाड़ी, उप-वृक्ष, वृक्ष और कैनोपी) में 30-50 देशी प्रजातियों का चयन करें।\n3. प्रति वर्ग मीटर 3 से 5 पौधे मिश्रित क्रम में लगाएं।\n4. 8 इंच मोटी मल्च की परत बिछाएं और पहले 2-3 वर्षों तक नियमित सिंचाई करें।\n\nलाभ:\n• सामान्य वनों की तुलना में 30 गुना अधिक कार्बन डाइऑक्साइड अवशोषित करता है।\n• वाष्पोत्सर्जन द्वारा आसपास के तापमान को 4°C तक कम करता है।\n• 200 वर्षों का वन केवल 20-30 वर्षों में परिपक्व हो जाता है।\n• 3 साल बाद यह पूरी तरह आत्मनिर्भर और रखरखाव-मुक्त हो जाता है।",
      "mr": "परिचय: डॉ. अकिरा मियावाकी यांनी विकसित केलेले हे सिद्ध पर्यावरणीय तंत्र आहे, जे पारंपरिक लागवडीपेक्षा 10 पट वेगाने आणि 30 पट अधिक दाट जंगल निर्माण करते.\n\nकार्यपद्धती: स्थानिक प्रजातींची अत्यंत दाट लागवड केल्यामुळे वनस्पती सूर्यप्रकाशासाठी वेगाने उंच वाढतात आणि त्यांची मुळे एकत्र येऊन मातीचे आरोग्य सुधारतात.\n\nकसे वापरावे:\n1. जमीन 1 मीटर खोल खणून त्यात सेंद्रिय खत, कोको-पीट आणि बायोमास मिसळा.\n2. 4 थरांमध्ये (झुडपे, लहान झाडे, मुख्य झाडे आणि कॅनोपी) 30 ते 50 स्थानिक प्रजाती निवडा.\n3. प्रति चौरस मीटर 3 ते 5 रोपे मिश्र पद्धतीने लावा.\n4. 8 इंच जाडीचे आच्छादन (मल्च) करा आणि पहिले 2-3 वर्षे नियमित पाणी द्या.\n\nफायदे:\n• सामान्य वृक्षारोपणापेक्षा 30 पट अधिक कार्बन डायऑक्साईड शोषून घेते.\n• आजूबाजूचे तापमान 4°C पर्यंत कमी करण्यास मदत करते.\n• 200 वर्षांचे जंगल केवळ 20-30 वर्षांत पूर्णपणे तयार होते.\n• 3 वर्षांनंतर हे जंगल पूर्णपणे स्वावलंबी आणि देखभाल-मुक्त बनते."
    }
  },
  {
    "id": "m2",
    "title": {
      "en": "Subterranean Root Zone & Soil Infiltration",
      "hi": "भूमिगत जड़ और मिट्टी जल अंतःस्रवण",
      "mr": "भूगर्भीय मूळ आणि माती पाणी संचयन"
    },
    "description": {
      "en": "Introduction: A deep-earth biotechnical approach pairing taproot and lateral fibrous root species to stabilize soil horizons, prevent foundation shifting, and maximize groundwater recharge.\n\nWorking Principle: Deep vertical taproots act as natural drainage pipes fracturing compacted subsoil, while horizontal fibrous webs bind topsoil particles against erosion.\n\nHow to Apply:\n1. Plant deep-rooting species (Peepal, Neem, Tamarind) at calibrated safe structural distances from built assets.\n2. Alternate with fibrous surface-rooting shrubs to form a contiguous bio-reinforcement matrix.\n3. Avoid impermeable plastic sheet barriers beneath planting pits to allow uninterrupted vertical capillary water migration.\n\nAdvantages:\n• Increases seasonal rainfall infiltration into deep aquifers by over 60%.\n• Reduces topsoil loss and erosion runoff on slopes by up to 75%.\n• Naturally relieves hydrostatic pressure around civil building foundations.",
      "hi": "परिचय: गहरी मूसला जड़ों और रेशेदार जड़ों वाली प्रजातियों को मिलाकर मिट्टी को स्थिर करने और भूजल पुनर्भरण को अधिकतम करने की एक आधुनिक जैव-तकनीक।\n\nकार्यप्रणाली: गहरी मूसला जड़ें प्राकृतिक पाइप की तरह काम करके कठोर मिट्टी को तोड़ती हैं, जबकि रेशेदार जड़ें ऊपरी मिट्टी को कटाव से बचाती हैं।\n\nउपयोग कैसे करें:\n1. इमारतों से सुरक्षित दूरी पर गहरी जड़ों वाले पेड़ (पीपल, नीम, इमली) लगाएं।\n2. सतह की मिट्टी को बांधने के लिए बीच-बीच में झाड़ियां लगाएं।\n3. गड्ढों के नीचे प्लास्टिक शीट्स न लगाएं ताकि पानी जमीन में गहरा उतर सके।\n\nलाभ:\n• गहरे भूजल स्तर में बारिश के पानी के अंतःस्रवण को 60% से अधिक बढ़ाता है।\n• मिट्टी के कटाव को 75% तक कम करता है।\n• इमारतों की नींव पर पानी के दबाव को सुरक्षित रूप से नियंत्रित करता है।",
      "mr": "परिचय: खोल सोटमुळे आणि तंतुमय मुळांच्या झाडांची एकत्र लागवड करून माती स्थिर ठेवण्याची आणि भूजल पातळी वाढवण्याची शास्त्रीय पद्धत.\n\nकार्यपद्धती: खोल जाणारी सोटमुळे कठीण माती फोडून नैसर्गिक जलवाहिन्यांचे काम करतात, तर तंतुमय मुळे मातीची धूप रोखतात.\n\nकसे वापरावे:\n1. इमारतींपासून सुरक्षित अंतरावर खोल मुळांची झाडे (पिंपळ, कडुनिंब, चिंच) लावा.\n2. माती घट्ट धरून ठेवण्यासाठी लहान झुडपे आणि स्थानिक गवत लावा.\n3. खड्ड्यांच्या तळाशी प्लास्टिक शीट लावू नका जेणेकरून पाणी खोलपर्यंत झिरपेल.\n\nफायदे:\n• पावसाचे पाणी भूगर्भात झिरपण्याचे प्रमाण 60% पेक्षा जास्त वाढवते.\n• मातीची धूप 75% पर्यंत कमी करते.\n• इमारतींच्या पायाभोवती नैसर्गिक पाणी नियंत्रण प्रदान करते."
    }
  },
  {
    "id": "m3",
    "title": {
      "en": "Contour Swales & Rainwater Gravity Retention",
      "hi": "कंटूर खाई और वर्षा जल संचयन प्रणाली",
      "mr": "समपातळी चर आणि पावसाचे पाणी साठवण"
    },
    "description": {
      "en": "Introduction: A passive earthwork strategy that captures surface water runoff on natural contours, turning destructive storm runoff into slow-release underground moisture.\n\nWorking Principle: Level ditches dug across slope contour lines halt water velocity, holding rainwater until it infiltrates deep underground instead of washing away.\n\nHow to Apply:\n1. Mark contour lines across the site slope using an A-frame level or laser level.\n2. Excavate a level ditch 0.5m wide and 0.4m deep along the surveyed contour.\n3. Pile excavated soil on the downhill edge to create an uncompacted planting berm.\n4. Plant high-absorption native trees directly into the downhill berm.\n\nAdvantages:\n• Retains 100% of on-site surface runoff during heavy monsoon rains.\n• Eliminates seasonal drought stress for young trees by creating a subsoil moisture sponge.\n• Protects downstream urban infrastructure from flash-flooding.",
      "hi": "परिचय: ढलान वाली भूमि पर पानी के बहाव को रोककर जमीन में उतारने की एक सरल और प्रभावी भू-संरचना तकनीक।\n\nकार्यप्रणाली: ढलान की समतल रेखा पर खोदी गई खाइयां बारिश के तेज बहाव को रोकती हैं, जिससे पानी बहने के बजाय धीरे-धीरे जमीन में रिस जाता है।\n\nउपयोग कैसे करें:\n1. ढलान पर समतल रेखाएं (कंटूर) चिह्नित करें।\n2. रेखा के साथ 0.5 मीटर चौड़ी और 0.4 मीटर गहरी खाई खोदें।\n3. निकली हुई मिट्टी से ढलान की निचली तरफ एक ऊंचा टीला बनाएं और उस पर देशी पेड़ लगाएं।\n\nलाभ:\n• भारी मानसून में 100% बारिश के पानी को ज़मीन में रोक कर रखता है।\n• जमीन के नीचे नमी का भंडार बनाकर गर्मियों में पेड़ों को सूखने से बचाता है।\n• निचले इलाकों में अचानक आने वाली बाढ़ के खतरे को कम करता है।",
      "mr": "परिचय: उतारावरील पावसाच्या वाहून जाणाऱ्या पाण्याला अडवून जमिनीत मुरवण्याची एक अत्यंत प्रभावी नैसर्गिक पद्धत.\n\nकार्यपद्धती: उतारावर समान पातळीत खणलेले चर वेगाने वाहणाऱ्या पाण्याचा वेग शून्यावर आणतात आणि पाणी हळूहळू जमिनीत झिरपते.\n\nकसे वापरावे:\n1. उतारावरील समपातळी रेषा ओळखून घ्या.\n2. या रेषेवर ०.५ मीटर रुंद आणि ०.४ मीटर खोल चर खणा.\n3. खणलेली माती उताराच्या बाजूला टाकून बांध तयार करा आणि त्यावर स्थानिक झाडे लावा.\n\nफायदे:\n• पावसाचे सर्व पाणी जागेवरच अडवून जमिनीत जिरवते.\n• उन्हाळ्यात झाडांना पाण्याचा तुटवडा भासू देत नाही.\n• परिसरातील विहिरी आणि बोअरवेलची पाणी पातळी वाढवण्यास मदत होते."
    }
  },
  {
    "id": "m4",
    "title": {
      "en": "Organic Biomass Mulching & Thermal Shielding",
      "hi": "जैविक बायोमास मल्चिंग और थर्मल सुरक्षा",
      "mr": "सेंद्रिय आच्छादन (मल्चिंग) आणि उष्णता संरक्षण"
    },
    "description": {
      "en": "Introduction: A blanket of organic matter placed over soil to simulate the natural forest floor, protecting root systems from scorching summer sun and microbial death.\n\nWorking Principle: Organic mulch reflects solar radiation, moderates topsoil temperature swings by up to 10°C, and feeds beneficial mycorrhizal networks.\n\nHow to Apply:\n1. Gather clean organic waste: dry leaves, wood chips, crushed sugarcane bagasse, or straw.\n2. Spread an even 10-15 cm blanket around sapling root basins, leaving 5 cm free around the main trunk.\n3. Refresh mulch every 6 to 9 months as the base decomposes into rich dark humus.\n\nAdvantages:\n• Cuts irrigation evaporation by 50-70%.\n• Suppresses competitive invasive weeds naturally without toxic chemicals.\n• Enhances soil organic carbon and micro-fauna population.",
      "hi": "परिचय: मिट्टी के ऊपर सूखे पत्तों और जैविक कचरे की एक सुरक्षात्मक परत बिछाने की प्राकृतिक तकनीक, जो जंगल की जमीन जैसा वातावरण बनाती है।\n\nकार्यप्रणाली: मल्च सूरज की तेज धूप को सीधे मिट्टी पर पड़ने से रोकता है, जिससे तापमान 10°C तक कम रहता है और मिट्टी की नमी बची रहती है।\n\nउपयोग कैसे करें:\n1. सूखे पत्ते, लकड़ी का बुरादा या पुआल एकत्र करें।\n2. पौधे के तने से 5 सेमी छोड़कर चारों तरफ 10-15 सेमी मोटी परत बिछाएं।\n3. हर 6-9 महीने में मल्च को नवीनीकृत करें क्योंकि पुराना मल्च खाद बन जाता है।\n\nलाभ:\n• पानी के वाष्पीकरण को 50-70% तक कम करता है।\n• बिना किसी रसायन के खरपतवार को उगने से रोकता है।\n• मिट्टी में केंचुओं और लाभकारी सूक्ष्मजीवों की संख्या बढ़ाता है।",
      "mr": "परिचय: मातीवर सुका पालापाचोळा किंवा सेंद्रिय पदार्थांचे आच्छादन घालून जंगलासारखे नैसर्गिक वातावरण तयार करण्याचे तंत्र.\n\nकार्यपद्धती: मल्चिंगमुळे कडक ऊन थेट मातीवर पडत नाही, ज्यामुळे मातीचे तापमान 10°C पर्यंत थंड राहते आणि ओलावा टिकतो.\n\nकसे वापरावे:\n1. झाडांचा सुका पालापाचोळा, भुसा किंवा पेंढा गोळा करा.\n2. रोपाच्या खोडापासून थोडी जागा सोडून मुळांभोवती 10-15 सेमी जाडीचा थर द्या.\n3. दर 6 ते 9 महिन्यांनी नवीन पालापाचोळा टाका कारण जुना थर कुजून उत्कृष्ट सेंद्रिय खत बनते.\n\nफायदे:\n• पाण्याचे बाष्पीभवन 50 ते 70 टक्क्यांनी कमी करते.\n• अनावश्यक तण उगवण्यास प्रतिबंध करते.\n• मातीची सुपीकता आणि गांडुळांची संख्या वाढवते."
    }
  },
  {
    "id": "m5",
    "title": {
      "en": "Repurposed Bottle Drip Irrigation",
      "hi": "प्लास्टिक बोतल ड्रिप सिंचाई",
      "mr": "प्लास्टिक बाटली ठिबक सिंचन"
    },
    "description": {
      "en": "Introduction: A zero-cost, highly effective watering technique for everyday citizens. It reuses plastic waste to provide life-saving moisture to young saplings during extreme summer heat.\n\nWorking Principle: It utilizes gravity and capillary action. Water slowly drips from tiny holes in a buried bottle directly into the deep root zone, completely bypassing topsoil evaporation.\n\nHow to Apply:\n1. Take a used 1-liter or 2-liter plastic water bottle.\n2. Pierce 2 to 3 tiny pinholes near the bottom base.\n3. Dig a small hole near the sapling and bury the bottle, leaving only the neck and cap exposed above ground.\n4. Fill the bottle with water and screw the cap on tightly to control the drip rate.\n\nAdvantages:\n• Saves up to 80% of water compared to surface pouring.\n• Eliminates the need for daily watering (lasts 4-7 days).\n• Repurposes plastic waste that would otherwise pollute the environment.\n• Encourages deeper, stronger root growth in young native trees.",
      "hi": "परिचय: आम नागरिकों के लिए एक शून्य-लागत और अत्यधिक प्रभावी सिंचाई तकनीक। यह भीषण गर्मी के दौरान युवा पौधों को जीवन रक्षक नमी प्रदान करने के लिए प्लास्टिक कचरे का पुन: उपयोग करता है।\n\nकार्यप्रणाली: यह गुरुत्वाकर्षण और केशिका क्रिया (capillary action) पर काम करता है। जमीन में गड़ी बोतल के छोटे छेदों से पानी धीरे-धीरे सीधे गहरी जड़ों तक रिसता है, जिससे सतह का वाष्पीकरण पूरी तरह रुक जाता है।\n\nउपयोग कैसे करें:\n1. एक या दो लीटर की पुरानी प्लास्टिक बोतल लें।\n2. बोतल के निचले हिस्से में पिन से 2-3 छोटे छेद करें।\n3. पौधे के पास थोड़ा गड्ढा खोदकर बोतल को गाड़ दें, केवल गर्दन और ढक्कन जमीन के ऊपर रखें।\n4. बोतल में पानी भरें और पानी गिरने की गति को नियंत्रित करने के लिए ढक्कन को कसकर बंद कर दें।\n\nलाभ:\n• सतह पर पानी डालने की तुलना में 80% तक पानी बचाता है।\n• रोज़ पानी देने की आवश्यकता को समाप्त करता है (4-7 दिनों तक चलता है)।\n• प्लास्टिक कचरे का पुन: उपयोग करता है।\n• देशी पेड़ों में गहरी और मजबूत जड़ों के विकास को बढ़ावा देता है।",
      "mr": "परिचय: सामान्य नागरिकांसाठी शून्य खर्च आणि अत्यंत प्रभावी सिंचन तंत्र. कडक उन्हाळ्यात तरुण रोपांना जीवदान देणारा ओलावा देण्यासाठी हे प्लास्टिक कचऱ्याचा पुनर्वापर करते.\n\nकार्यपद्धती: हे गुरुत्वाकर्षण आणि केशिकत्व (capillary action) वर काम करते. जमिनीत पुरलेल्या बाटलीच्या छोट्या छिद्रांमधून पाणी हळूहळू थेट खोल मुळांपर्यंत झिरपते, ज्यामुळे पृष्ठभागावरील पाण्याचे बाष्पीभवन पूर्णपणे थांबते.\n\nकसे वापरावे:\n1. एक किंवा दोन लिटरची जुनी प्लास्टिकची बाटली घ्या.\n2. बाटलीच्या तळाशी पिनने २-३ छोटी छिद्रे पाडा.\n3. रोपाजवळ थोडा खड्डा खणून बाटली पुरा, फक्त बाटलीचे तोंड आणि झाकण जमिनीच्या वर ठेवा.\n4. बाटलीत पाणी भरा आणि पाण्याचा वेग नियंत्रित करण्यासाठी झाकण घट्ट बंद करा.\n\nफायदे:\n• जमिनीवर पाणी ओतण्याच्या तुलनेत ८०% पर्यंत पाण्याची बचत होते.\n• रोज पाणी देण्याची गरज संपवते (४-७ दिवस टिकते).\n• पर्यावरणाला हानी पोहोचवणाऱ्या प्लास्टिक कचऱ्याचा पुनर्वापर होतो.\n• देशी झाडांच्या मुळांच्या खोल आणि मजबूत वाढीस प्रोत्साहन देते."
    }
  }
];
if (typeof window !== 'undefined') { window.methodologiesData = methodologiesData; }

function MiyawakiMethod() {
  var context = React.useContext(LanguageContext);
  var language = (context && context.language) || 'en';
  var t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;
  var stepIcons = ['leaf', 'search', 'database', 'tree-pine', 'map', 'check'];
  const [selectedMethodId, setSelectedMethodId] = useState("m5");

  return /*#__PURE__*/_jsxDEV("section", {
    id: "miyawaki-method",
    className: "py-10 md:py-16 md:py-24 relative",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-0 right-0 w-[800px] h-[800px] bg-earth-900/10 rounded-full blur-[120px] mix-blend-screen translate-x-1/2 -translate-y-1/2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest-800/10 rounded-full blur-[100px] mix-blend-screen -translate-x-1/2 translate-y-1/2"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "text-center max-w-3xl mx-auto mb-20 animate-fade-in-up",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "text-earth-400 font-medium tracking-wider uppercase text-sm mb-4 block",
          children: t.methodology.badge
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          className: "text-2xl md:text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-6 leading-tight",
          children: t.methodology.title
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-lg text-cream-200/80 leading-relaxed font-light",
          children: t.methodology.desc
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid lg:grid-cols-2 gap-16 mb-20",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "animate-fade-in-up",
          style: {
            animationDelay: '0.1s'
          },
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "text-2xl font-serif font-bold text-cream-50 mb-6 flex items-center gap-3",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "p-2 rounded-lg bg-forest-900/50 border border-forest-800/50",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "leaf",
                size: 24,
                className: "text-earth-400"
              }, void 0, false)
            }, void 0, false), t.methodology.benefitsTitle]
          }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
            className: "space-y-4",
            children: t.methodology.benefits.map((benefit, i) => /*#__PURE__*/_jsxDEV("li", {
              className: "flex gap-4 p-4 rounded-xl bg-forest-900/30 border border-forest-800/30",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "check",
                size: 20,
                className: "text-earth-500 shrink-0 mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "text-cream-100/90 leading-relaxed text-sm",
                children: benefit
              }, void 0, false)]
            }, i, true))
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "animate-fade-in-up",
          style: {
            animationDelay: '0.2s'
          },
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "text-2xl font-serif font-bold text-cream-50 mb-6 flex items-center gap-3",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "p-2 rounded-lg bg-forest-900/50 border border-forest-800/50",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "sparkles",
                size: 24,
                className: "text-earth-400"
              }, void 0, false)
            }, void 0, false), t.methodology.principlesTitle]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "grid sm:grid-cols-2 gap-4",
            children: t.methodology.principles.map((principle, i) => /*#__PURE__*/_jsxDEV("div", {
              className: "p-5 rounded-xl bg-forest-900/30 border border-forest-800/30 flex flex-col gap-2",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold text-earth-300 text-sm",
                children: principle.title
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "text-cream-100/70 text-sm leading-relaxed",
                children: principle.desc
              }, void 0, false)]
            }, i, true))
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "mb-20 animate-fade-in-up",
        style: {
          animationDelay: '0.3s'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "text-xl md:text-3xl font-serif font-bold text-cream-50 mb-4",
            children: t.methodology.stepsTitle
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-cream-200/70 max-w-2xl mx-auto",
            children: t.methodology.stepsSubtitle
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6",
          children: t.methodology.steps.map((item, i) => /*#__PURE__*/_jsxDEV("div", {
            className: "relative p-5 md:p-8 rounded-2xl bg-forest-900/40 border border-forest-800/50 hover:bg-forest-900/60 transition-colors group",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "absolute top-4 md:p-6 right-6 text-2xl md:text-4xl font-black text-forest-800/30 group-hover:text-earth-900/30 transition-colors pointer-events-none",
              children: item.step
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-12 h-12 rounded-xl bg-earth-900/50 flex items-center justify-center mb-6 border border-earth-800/50 text-earth-400",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: stepIcons[i] || 'check',
                size: 24
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
              className: "text-lg font-bold text-cream-50 mb-3",
              children: item.title
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-cream-100/70 leading-relaxed",
              children: item.desc
            }, void 0, false)]
          }, i, true))
        }, void 0, false)]
      }, void 0, true),

      /* Detailed Practical & Citizen Ecological Methodologies */
      /*#__PURE__*/_jsxDEV("div", {
        className: "mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-forest-800/60 animate-fade-in-up",
        children: [
          /* Section Header */
          /*#__PURE__*/_jsxDEV("div", {
            className: "text-center max-w-3xl mx-auto mb-10 sm:mb-14",
            children: [
              /*#__PURE__*/_jsxDEV("span", {
                className: "text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 inline-block px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30",
                children: language === 'hi' ? 'नागरिक पारिस्थितिक तकनीकें' : language === 'mr' ? 'नागरिक पर्यावरणीय तंत्रज्ञान' : 'Citizen-Friendly Ecological Methods'
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("h3", {
                className: "text-2xl sm:text-4xl font-serif font-bold text-cream-50 mb-4 leading-snug",
                children: language === 'hi' ? 'व्यावहारिक एवं शून्य-लागत पर्यावरण पद्धतियाँ' : language === 'mr' ? 'व्यावहारिक आणि शून्य खर्च पर्यावरण पद्धती' : 'Practical & Zero-Cost Eco Methodologies'
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("p", {
                className: "text-sm sm:text-base text-cream-100 font-medium leading-relaxed max-w-2xl mx-auto",
                children: language === 'hi' ? 'आम नागरिकों के लिए सरल, अत्यधिक प्रभावी सिंचाई एवं संरक्षण तकनीकें जो भीषण गर्मी में पौधों को जीवनदान देती हैं।' : language === 'mr' ? 'कडक उन्हाळ्यात झाडांना जीवदान देण्यासाठी सामान्य नागरिकांसाठी सोपी, परिणामकारक सिंचन व संवर्धन तंत्रे.' : 'Accessible, highly effective field techniques designed for everyday citizens to nourish young native saplings and conserve water.'
              }, void 0, false)
            ]
          }, void 0, true),

          /* Methodology Selector Pills (Mobile Scrollable) */
          /*#__PURE__*/_jsxDEV("div", {
            className: "flex overflow-x-auto gap-2.5 sm:gap-3.5 py-3 px-1 mb-8 sm:mb-12 hide-scrollbar justify-start sm:justify-center items-center max-w-full",
            children: methodologiesData.map(function(m) {
              const isSelected = selectedMethodId === m.id;
              const mTitle = m.title[language] || m.title.en;
              return /*#__PURE__*/_jsxDEV("button", {
                key: m.id,
                type: "button",
                onClick: function() { setSelectedMethodId(m.id); },
                className: isSelected
                  ? "bg-emerald-600 text-white font-bold px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm shadow-lg shadow-emerald-950/50 border border-emerald-400/40 shrink-0 transition-all duration-300 transform scale-105 cursor-pointer"
                  : "bg-forest-900/80 hover:bg-forest-800/90 text-cream-100 hover:text-white font-medium px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm border border-forest-700/60 shrink-0 transition-all duration-300 cursor-pointer backdrop-blur-md"
              }, m.id, false, [
                m.id === 'm5' ? '💧 ' : m.id === 'm1' ? '🌳 ' : m.id === 'm2' ? '🌱 ' : m.id === 'm3' ? '🌧️ ' : '🍂 ',
                mTitle
              ]);
            })
          }, void 0, false),

          /* Detailed Multi-Section Card for Selected Methodology */
          function() {
            const currentMethod = methodologiesData.find(function(m) { return m.id === selectedMethodId; }) || methodologiesData[4];
            const cTitle = currentMethod.title[language] || currentMethod.title.en;
            const cDesc = currentMethod.description[language] || currentMethod.description.en;
            const sections = cDesc.split(/\n\n+/);

            return /*#__PURE__*/_jsxDEV("div", {
              className: "glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-emerald-500/25 shadow-2xl relative overflow-hidden animate-fade-in",
              children: [
                /* Methodology Header */
                /*#__PURE__*/_jsxDEV("div", {
                  className: "flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 sm:mb-8 border-b border-forest-800/80",
                  children: [
                    /*#__PURE__*/_jsxDEV("div", {
                      children: [
                        /*#__PURE__*/_jsxDEV("span", {
                          className: "text-earth-400 text-xs sm:text-sm font-bold uppercase tracking-wider block mb-1",
                          children: currentMethod.id === 'm5' ? (language === 'hi' ? 'विशेष नागरिक तकनीक • शून्य लागत' : language === 'mr' ? 'विशेष नागरिक तंत्रज्ञान • शून्य खर्च' : 'Featured Citizen Technique • Zero-Cost') : (language === 'hi' ? 'पारिस्थितिक कार्यप्रणाली' : language === 'mr' ? 'पर्यावरणीय कार्यपद्धती' : 'Ecological Methodology')
                        }, void 0, false),
                        /*#__PURE__*/_jsxDEV("h4", {
                          className: "text-xl sm:text-3xl font-serif font-bold text-cream-50 leading-tight",
                          children: cTitle
                        }, void 0, false)
                      ]
                    }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", {
                      className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800/70 border border-forest-600/40 text-cream-100 text-xs sm:text-sm font-semibold shrink-0",
                      children: [
                        /*#__PURE__*/_jsxDEV(LucideIcon, { name: "shield-check", size: 16, className: "text-emerald-400" }, void 0, false),
                        language === 'hi' ? 'सत्यापित पर्यावरण तकनीक' : language === 'mr' ? 'प्रमाणित पर्यावरण पद्धत' : 'Verified Eco Practice'
                      ]
                    }, void 0, true)
                  ]
                }, void 0, true),

                /* Multi-Section Grid (Introduction, Working Principle, How to Apply, Advantages) */
                /*#__PURE__*/_jsxDEV("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6",
                  children: sections.map(function(secText, sIdx) {
                    const lines = secText.trim().split('\n');
                    const firstLine = lines[0];
                    const colonIdx = firstLine.indexOf(':');
                    const secHeading = colonIdx !== -1 ? firstLine.substring(0, colonIdx).trim() : firstLine;
                    const isInlineContent = colonIdx !== -1 && lines.length === 1;
                    const inlineBody = isInlineContent ? firstLine.substring(colonIdx + 1).trim() : '';
                    const listLines = lines.length > 1 ? lines.slice(1).filter(function(l) { return l.trim().length > 0; }) : [];
                    const isSteps = listLines.some(function(l) { return /^\d+\./.test(l.trim()); });
                    const isAdvantages = listLines.some(function(l) { return l.trim().startsWith('•') || l.trim().startsWith('-'); });

                    let secIcon = 'info';
                    let accentBorder = 'border-emerald-500/30';
                    let iconColor = 'text-emerald-400';
                    if (sIdx === 0) { secIcon = 'sparkles'; accentBorder = 'border-emerald-500/40'; iconColor = 'text-emerald-400'; }
                    else if (sIdx === 1) { secIcon = 'layers'; accentBorder = 'border-earth-500/40'; iconColor = 'text-earth-400'; }
                    else if (isSteps || sIdx === 2) { secIcon = 'wrench'; accentBorder = 'border-blue-500/40'; iconColor = 'text-blue-400'; }
                    else if (isAdvantages || sIdx === 3) { secIcon = 'check-circle'; accentBorder = 'border-green-500/40'; iconColor = 'text-green-400'; }

                    return /*#__PURE__*/_jsxDEV("div", {
                      key: sIdx,
                      className: "glass-strict rounded-xl sm:rounded-2xl p-5 sm:p-6 border " + accentBorder + " flex flex-col justify-between shadow-md",
                      children: [
                        /* Section Header */
                        /*#__PURE__*/_jsxDEV("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            /*#__PURE__*/_jsxDEV("div", {
                              className: "w-9 h-9 rounded-lg bg-forest-900/90 border border-white/10 flex items-center justify-center shrink-0 " + iconColor,
                              children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: secIcon, size: 20 }, void 0, false)
                            }, void 0, false),
                            /*#__PURE__*/_jsxDEV("h5", {
                              className: "font-bold text-base sm:text-lg text-cream-50 leading-tight",
                              children: secHeading
                            }, void 0, false)
                          ]
                        }, void 0, true),

                        /* Inline Text Body */
                        isInlineContent && /*#__PURE__*/_jsxDEV("p", {
                          className: "text-sm sm:text-base text-cream-100 font-medium leading-relaxed",
                          children: inlineBody
                        }, void 0, false),

                        /* Numbered Steps List */
                        isSteps && /*#__PURE__*/_jsxDEV("div", {
                          className: "space-y-3 mt-1",
                          children: listLines.map(function(stepLine, stepIdx) {
                            const cleanStepText = stepLine.replace(/^\d+\.\s*/, '');
                            return /*#__PURE__*/_jsxDEV("div", {
                              key: stepIdx,
                              className: "flex items-start gap-3 p-3 rounded-xl bg-forest-950/70 border border-white/5",
                              children: [
                                /*#__PURE__*/_jsxDEV("span", {
                                  className: "w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm",
                                  children: (stepIdx + 1)
                                }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", {
                                  className: "text-cream-100 font-medium text-xs sm:text-sm leading-relaxed",
                                  children: cleanStepText
                                }, void 0, false)
                              ]
                            }, stepIdx, true);
                          })
                        }, void 0, false),

                        /* Bullet Advantages List */
                        isAdvantages && /*#__PURE__*/_jsxDEV("div", {
                          className: "space-y-2.5 mt-1",
                          children: listLines.map(function(advLine, advIdx) {
                            const cleanAdvText = advLine.replace(/^[•\-]\s*/, '');
                            return /*#__PURE__*/_jsxDEV("div", {
                              key: advIdx,
                              className: "flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-forest-950/70 border border-white/5",
                              children: [
                                /*#__PURE__*/_jsxDEV(LucideIcon, {
                                  name: "check",
                                  size: 16,
                                  className: "text-green-400 shrink-0 mt-1"
                                }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", {
                                  className: "text-cream-50 font-semibold text-xs sm:text-sm leading-relaxed",
                                  children: cleanAdvText
                                }, void 0, false)
                              ]
                            }, advIdx, true);
                          })
                        }, void 0, false)
                      ]
                    }, sIdx, true);
                  })
                }, void 0, false)
              ]
            }, void 0, true);
          }()
        ]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}




function ProjectROIDashboard(props) {
  var plantationList = props.plantationList;
  var avgPricePerSapling = 25;
  var totalTrees = plantationList.reduce(function (acc, item) { return acc + item.quantity; }, 0);
  var totalCost = totalTrees * avgPricePerSapling;
  var thermalSavingsPerTreeYear = 15;
  var annualSavings = totalTrees * thermalSavingsPerTreeYear;
  var roiYears = totalCost > 0 ? (totalCost / annualSavings).toFixed(1) : 0;
  
  return React.createElement("div", { className: "animate-fade-in-up mt-8" }, React.createElement("div", { className: "grid md:grid-cols-3 gap-4 md:p-6 mb-8" }, React.createElement("div", { className: "glass-strict p-4 md:p-6 rounded-2xl md:rounded-3xl border-l-4 border-l-earth-500" }, React.createElement("p", { className: "text-cream-100/60 text-sm font-semibold uppercase tracking-wider mb-2" }, "Total Initial Investment"), React.createElement("p", { className: "text-2xl md:text-4xl font-black text-cream-50" }, "$", totalCost.toLocaleString()), React.createElement("p", { className: "text-xs text-earth-400 mt-2" }, "Based on avg. $25/sapling")), React.createElement("div", { className: "glass-strict p-4 md:p-6 rounded-2xl md:rounded-3xl border-l-4 border-l-green-500" }, React.createElement("p", { className: "text-cream-100/60 text-sm font-semibold uppercase tracking-wider mb-2" }, "Annual Thermal Savings"), React.createElement("p", { className: "text-2xl md:text-4xl font-black text-green-400" }, "+$", annualSavings.toLocaleString()), React.createElement("p", { className: "text-xs text-cream-100/50 mt-2" }, "HVAC reduction via transpiration")), React.createElement("div", { className: "glass-strict p-4 md:p-6 rounded-2xl md:rounded-3xl border-l-4 border-l-blue-500" }, React.createElement("p", { className: "text-cream-100/60 text-sm font-semibold uppercase tracking-wider mb-2" }, "Est. Break-Even Time"), React.createElement("p", { className: "text-2xl md:text-4xl font-black text-blue-400" }, totalCost > 0 ? roiYears : 0, " ", React.createElement("span", { className: "text-xl" }, "Yrs")), React.createElement("p", { className: "text-xs text-cream-100/50 mt-2" }, "ROI trajectory"))), React.createElement("div", { className: "glass-strict p-5 md:p-8 rounded-2xl md:rounded-3xl" }, React.createElement("h3", { className: "text-xl font-bold text-cream-50 mb-6 flex items-center gap-3" }, React.createElement(LucideIcon, { name: "trending-up", className: "text-earth-400" }), "Long-Term Financial & Ecological Return"), totalTrees === 0 ? React.createElement("div", { className: "text-center py-5 md:py-8 md:py-12 text-cream-100/50" }, React.createElement(LucideIcon, { name: "calculator", size: 48, className: "mx-auto mb-4 opacity-50" }), React.createElement("p", null, "Add trees to your plantation list to generate ROI projections.")) : React.createElement("div", { className: "space-y-6" }, React.createElement("div", { className: "w-full bg-forest-900/50 rounded-full h-4 overflow-hidden flex border border-white/5" }, React.createElement("div", { className: "bg-earth-500 h-full", style: { width: '20%' } }), React.createElement("div", { className: "bg-green-500 h-full", style: { width: '80%' } })), React.createElement("div", { className: "flex justify-between text-sm text-cream-100/70" }, React.createElement("span", null, "Year 0: -$", totalCost.toLocaleString()), React.createElement("span", null, "Year ", roiYears, ": Break-Even"), React.createElement("span", null, "Year 10: +$", (annualSavings * 10 - totalCost).toLocaleString(), " Net Return")), React.createElement("p", { className: "text-sm text-cream-100/50 bg-forest-950/50 p-4 rounded-xl" }, "* Note: Thermal savings are calculated based on average transpirational cooling of a 4-layer Miyawaki canopy in urban hardscape environments. Actual HVAC offset may vary."))));
}





function CarbonCalculatorHub() {
  const [activeTab, setActiveTab] = useState("calculator");
  const { language } = React.useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default"); // default, a-z, z-a, co2-high, water-high
  const [selectedTree, setSelectedTree] = useState(null);
  const [plantationList, setPlantationList] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Mapping water requirement strings to numbers for sorting
  const waterValue = (waterStr) => {
    if (!waterStr) return 0;
    const s = waterStr.toLowerCase();
    if (s.includes("high")) return 3;
    if (s.includes("moderate") || s.includes("medium")) return 2;
    if (s.includes("low")) return 1;
    return 0;
  };

  const sortedAndFilteredTrees = [...TREE_DATA].filter(function(tree) {
    return (language === 'mr' ? tree.marathi : language === 'hi' ? tree.hindi : tree.name).toLowerCase().includes(searchTerm.toLowerCase()) || 
           tree.hindi.toLowerCase().includes(searchTerm.toLowerCase());
  }).sort(function(a, b) {
    if (sortBy === "a-z") return a.name.localeCompare(b.name);
    if (sortBy === "z-a") return b.name.localeCompare(a.name);
    if (sortBy === "co2-high") return (b.c || 0) - (a.c || 0);
    if (sortBy === "water-high") return waterValue(b.water) - waterValue(a.water);
    return a.rank - b.rank; // default
  });

  const addToPlantation = (tree, quantity) => {
    if (quantity <= 0) return;
    const existing = plantationList.find(item => item.tree.rank === tree.rank);
    if (existing) {
      setPlantationList(plantationList.map(item => 
        item.tree.rank === tree.rank ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setPlantationList([...plantationList, { tree, quantity }]);
    }
  };

  const removeFromPlantation = (rank) => {
    setPlantationList(plantationList.filter(item => item.tree.rank !== rank));
  };

  const totalCO2 = plantationList.reduce((acc, item) => acc + (item.tree.c || 0) * item.quantity, 0);
  const totalO2 = plantationList.reduce((acc, item) => acc + (item.tree.o || 0) * item.quantity, 0);

  return React.createElement(React.Fragment, null, /*#__PURE__*/_jsxDEV("section", {
    id: "calculator-hub",
    className: "py-10 md:py-16 md:py-24 border-t border-forest-900/50 relative overflow-hidden",
    children: [
      /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10",
        children: [
          /*#__PURE__*/_jsxDEV("div", {
            className: "text-center mb-12",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "inline-flex items-center justify-center gap-2 mb-6 px-4 md:px-6 py-2.5 rounded-full bg-forest-900/50 border border-forest-800/60 shadow-lg backdrop-blur-sm",
                children: [
                  /*#__PURE__*/_jsxDEV(LucideIcon, { name: "database", size: 18, className: "text-earth-400" }, void 0, false),
                  /*#__PURE__*/_jsxDEV("span", { className: "text-earth-400 font-semibold tracking-[0.25em] uppercase text-sm", children: "Eco Hub" }, void 0, false)
                ]
              }, void 0, true),
              /*#__PURE__*/_jsxDEV("h2", {
                className: "text-2xl md:text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-6",
                children: "Tree Database & Impact Calculator"
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("p", {
                className: "text-lg text-cream-100/70 max-w-2xl mx-auto mb-8",
                children: "Explore the living data behind each species and measure the quiet, compounding legacy your green choices leave behind."
              }, void 0, false)
            ]
          }, void 0, true),

          /* Tabs */
          /*#__PURE__*/_jsxDEV("div", {
            className: "flex justify-center mb-10",
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "inline-flex bg-forest-900/30 backdrop-blur-md rounded-full p-1 border border-forest-800/50 shadow-lg",
              children: [
                /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => setActiveTab("database"),
                  className: `px-5 md:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "database" ? "bg-earth-500 text-forest-950 shadow-md" : "text-cream-100/70 hover:text-cream-50"}`,
                  children: "Species Database"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => setActiveTab("calculator"),
                  className: `px-5 md:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "calculator" ? "bg-earth-500 text-forest-950 shadow-md" : "text-cream-100/70 hover:text-cream-50"}`,
                  children: "Carbon Calculator"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => setActiveTab("roi"),
                  className: `px-5 md:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "roi" ? "bg-earth-500 text-forest-950 shadow-md" : "text-cream-100/70 hover:text-cream-50"}`,
                  children: "Project ROI"
                }, void 0, false)
              ]
            }, void 0, true)
          }, void 0, false),

          /* Database Tab */
          activeTab === "database" && /*#__PURE__*/_jsxDEV("div", {
            className: "animate-fade-in-up",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-forest-900/30 backdrop-blur-md p-4 rounded-2xl border border-forest-800/50",
                children: [
                  /*#__PURE__*/_jsxDEV("input", {
                    type: "text",
                    placeholder: "Search trees by name...",
                    className: "w-full md:w-1/2 px-4 md:px-6 py-3 rounded-full bg-forest-950/50 border border-forest-700/50 text-white placeholder:text-white/40 focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all",
                    value: searchTerm,
                    onChange: function(e) { setSearchTerm(e.target.value); }
                  }, void 0, false),
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0",
                    children: [
                      /*#__PURE__*/_jsxDEV("select", {
                        value: sortBy,
                        onChange: (e) => setSortBy(e.target.value),
                        className: "px-4 py-3 rounded-full bg-forest-950/50 border border-forest-700/50 text-white focus:outline-none focus:border-earth-400 transition-all cursor-pointer",
                        children: [
                          /*#__PURE__*/_jsxDEV("option", { value: "default", children: "Sort by Rank" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("option", { value: "a-z", children: "Name (A-Z)" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("option", { value: "z-a", children: "Name (Z-A)" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("option", { value: "co2-high", children: "Highest CO\u2082 Emission" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("option", { value: "water-high", children: "Highest Water Req." }, void 0, false)
                        ]
                      }, void 0, true)
                    ]
                  }, void 0, true)
                ]
              }, void 0, true),
              /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:p-6",
                children: sortedAndFilteredTrees.map(function(tree) {
                  return /*#__PURE__*/_jsxDEV("div", {
                    key: tree.rank,
                    className: "group glass-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-forest-800/50 hover:border-earth-500/50 hover:shadow-[0_15px_30px_-10px_rgba(220,160,80,0.2)]",
                    onClick: function() { setSelectedTree(tree); },
                    children: [
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "h-48 overflow-hidden relative",
                        children: [
                          /*#__PURE__*/_jsxDEV("img", { loading: "lazy", src: tree.img, alt: (language === 'mr' ? tree.marathi : language === 'hi' ? tree.hindi : tree.name), className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("div", { className: "absolute top-3 right-3 bg-forest-950/80 backdrop-blur-md text-earth-300 text-xs font-bold px-3 py-1.5 rounded-full border border-earth-500/30", children: "Rank #" + tree.rank }, void 0, false)
                        ]
                      }, void 0, true),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "p-4 md:p-6",
                        children: [
                          /*#__PURE__*/_jsxDEV("h3", { className: "text-lg font-bold text-cream-50 mb-1 line-clamp-1", children: (language === 'mr' ? tree.marathi : language === 'hi' ? tree.hindi : tree.name) }, void 0, false),
                          /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400 text-sm mb-4 line-clamp-1", children: tree.hindi }, void 0, false),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "flex justify-between text-sm text-cream-100/80 border-t border-forest-800/50 pt-4 mb-2",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { children: ["CO\u2082: ", tree.c, " kg/yr"] }, void 0, true),
                              /*#__PURE__*/_jsxDEV("span", { children: ["O\u2082: ", tree.o, " kg/yr"] }, void 0, true)
                            ]
                          }, void 0, true),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-cream-100/60 mt-2",
                            children: [
                              tree.canopy && /*#__PURE__*/_jsxDEV("div", { children: [/*#__PURE__*/_jsxDEV("span", { className: "font-semibold", children: "Canopy: " }, void 0, false), tree.canopy] }, void 0, true),
                              tree.water && /*#__PURE__*/_jsxDEV("div", { children: [/*#__PURE__*/_jsxDEV("span", { className: "font-semibold", children: "Water: " }, void 0, false), tree.water] }, void 0, true),
                              (tree.safeBldg || tree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "col-span-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "font-semibold", children: "Safe Dist: " }, void 0, false), tree.safeBldg ? "Bldg " + tree.safeBldg : "", tree.safeBldg && tree.safeRoad ? " | " : "", tree.safeRoad ? "Road " + tree.safeRoad : ""] }, void 0, true)
                            ]
                          }, void 0, true)
                        ]
                      }, void 0, true)
                    ]
                  }, tree.rank, true);
                })
              }, void 0, false)
            ]
          }, void 0, true),

          /* Calculator Tab */
          activeTab === "roi" && React.createElement(ProjectROIDashboard, { plantationList: plantationList }),
          activeTab === "calculator" && /*#__PURE__*/_jsxDEV("div", {
            className: "animate-fade-in-up",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-5 md:p-8",
                children: [
                  /* Selection Area */
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "lg:col-span-2 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl",
                    children: [
                      /*#__PURE__*/_jsxDEV("h3", { className: "text-2xl font-serif text-cream-50 mb-6", children: "Select Trees" }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "flex flex-col sm:flex-row gap-4 mb-6",
                        children: [
                          /*#__PURE__*/_jsxDEV("input", {
                            type: "text",
                            placeholder: "Filter trees...",
                            className: "w-full sm:w-1/2 px-4 py-3 rounded-xl bg-forest-950/50 border border-forest-700/50 text-white focus:outline-none focus:border-earth-400 transition-all",
                            value: searchTerm,
                            onChange: function(e) { setSearchTerm(e.target.value); }
                          }, void 0, false)
                        ]
                      }, void 0, true),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar",
                        children: sortedAndFilteredTrees.map(tree => {
                          const qty = quantities[tree.rank] || 1;
                          const setQty = (val) => setQuantities(prev => ({ ...prev, [tree.rank]: val }));
                          return /*#__PURE__*/_jsxDEV("div", {
                            key: tree.rank,
                            className: "bg-forest-900/40 p-4 rounded-xl border border-forest-800/50 flex flex-col justify-between hover:border-earth-500/30 transition-all",
                            children: [
                              /*#__PURE__*/_jsxDEV("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                  /*#__PURE__*/_jsxDEV("img", { loading: "lazy", src: tree.img, className: "w-12 h-12 rounded-full object-cover border border-forest-700" }, void 0, false),
                                  /*#__PURE__*/_jsxDEV("div", {
                                    children: [
                                      /*#__PURE__*/_jsxDEV("h4", { className: "text-cream-50 font-semibold text-sm line-clamp-1", children: (language === 'mr' ? tree.marathi : language === 'hi' ? tree.hindi : tree.name) }, void 0, false),
                                      /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400 text-xs", children: [tree.c, " kg CO\u2082/yr"] }, void 0, true)
                                    ]
                                  }, void 0, true)
                                ]
                              }, void 0, true),
                              /*#__PURE__*/_jsxDEV("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  /*#__PURE__*/_jsxDEV("input", {
                                    type: "number",
                                    min: "1",
                                    value: qty,
                                    onChange: (e) => setQty(parseInt(e.target.value) || 1),
                                    className: "w-16 px-2 py-1.5 bg-forest-950/50 border border-forest-700 rounded-md text-white text-center focus:outline-none focus:border-earth-400 transition-all"
                                  }, void 0, false),
                                  /*#__PURE__*/_jsxDEV("button", {
                                    onClick: () => { addToPlantation(tree, qty); setQty(1); },
                                    className: "px-4 py-1.5 bg-earth-600 hover:bg-earth-500 text-white text-sm font-semibold rounded-full transition-colors shadow-lg",
                                    children: "Add"
                                  }, void 0, false)
                                ]
                              }, void 0, true)
                            ]
                          }, void 0, true);
                        })
                      }, void 0, false)
                    ]
                  }, void 0, true),

                  /* Results Area */
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl flex flex-col h-full border-earth-500/30",
                    children: [
                      /*#__PURE__*/_jsxDEV("h3", { className: "text-2xl font-serif text-earth-300 mb-6", children: "Your Plantation" }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 mb-6 max-h-[300px] lg:max-h-[none]",
                        children: plantationList.length === 0 ? 
                          /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-center py-10", children: "No trees added yet. Add trees to see the environmental impact." }, void 0, false)
                          : plantationList.map(item => /*#__PURE__*/_jsxDEV("div", {
                            key: item.tree.rank,
                            className: "flex items-center justify-between bg-forest-900/60 p-3 rounded-xl border border-forest-800 shadow-sm",
                            children: [
                              /*#__PURE__*/_jsxDEV("div", {
                                children: [
                                  /*#__PURE__*/_jsxDEV("h5", { className: "text-cream-50 text-sm font-semibold", children: (language === 'mr' ? item.tree.marathi : language === 'hi' ? item.tree.hindi : item.tree.name) }, void 0, false),
                                  /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-xs", children: ["Qty: ", item.quantity, " | CO\u2082: ", (item.tree.c * item.quantity).toFixed(1)] }, void 0, true)
                                ]
                              }, void 0, true),
                              /*#__PURE__*/_jsxDEV("button", {
                                onClick: () => removeFromPlantation(item.tree.rank),
                                className: "text-red-400 hover:text-red-300 hover:bg-red-950/50 rounded-full transition-all p-1.5",
                                children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: "x", size: 16 }, void 0, false)
                              }, void 0, false)
                            ]
                          }, void 0, true))
                      }, void 0, false),
                      
                      /* Summary Footer */
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "bg-forest-950/80 p-5 rounded-2xl border border-earth-500/50 shadow-[0_0_20px_rgba(220,160,80,0.15)]",
                        children: [
                          /*#__PURE__*/_jsxDEV("h4", { className: "text-cream-50 font-semibold mb-4 text-center uppercase tracking-widest text-xs", children: "Total Annual Impact" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "flex justify-between items-end border-b border-forest-800 pb-3 mb-3",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70 text-sm font-medium", children: "CO\u2082 Absorbed" }, void 0, false),
                              /*#__PURE__*/_jsxDEV("div", { className: "text-right", children: [
                                /*#__PURE__*/_jsxDEV("span", { className: "text-2xl font-bold text-earth-400 block leading-none", children: totalCO2.toFixed(1) }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", { className: "text-xs text-cream-100/75", children: "kg/yr" }, void 0, false)
                              ] }, void 0, true)
                            ]
                          }, void 0, true),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "flex justify-between items-end",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70 text-sm font-medium", children: "O\u2082 Released" }, void 0, false),
                              /*#__PURE__*/_jsxDEV("div", { className: "text-right", children: [
                                /*#__PURE__*/_jsxDEV("span", { className: "text-2xl font-bold text-green-400 block leading-none", children: totalO2.toFixed(1) }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", { className: "text-xs text-cream-100/75", children: "kg/yr" }, void 0, false)
                              ] }, void 0, true)
                            ]
                          }, void 0, true)
                        ]
                      }, void 0, true)
                    ]
                  }, void 0, true)
                ]
              }, void 0, true)
            ]
          }, void 0, true)
        ]
      }, void 0, true)
    ] }, void 0, true),
      selectedTree && ReactDOM.createPortal(/*#__PURE__*/_jsxDEV("div", {
        className: "fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto",
        onClick: function() { setSelectedTree(null); },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "bg-forest-900/85 backdrop-blur-2xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden max-w-4xl w-full my-4 sm:my-auto animate-scale-in relative",
          onClick: function(e) { e.stopPropagation(); },
          children: [
            /*#__PURE__*/_jsxDEV("div", {
              className: "relative h-64 sm:h-80 md:h-96 bg-forest-900/50",
              children: [
                /*#__PURE__*/_jsxDEV("img", { loading: "lazy", src: selectedTree.img, alt: selectedTree.name, className: "w-full h-full object-cover" }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  className: "absolute top-4 md:p-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-earth-500 hover:scale-110 transition-all border border-white/10",
                  onClick: function() { setSelectedTree(null); },
                  children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: "x", size: 20 }, void 0, false)
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", {
                  className: "absolute bottom-6 left-6 right-6",
                  children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
                      /*#__PURE__*/_jsxDEV("h2", { className: "text-xl md:text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-white shadow-sm", children: selectedTree.name }, void 0, false),
                      /*#__PURE__*/_jsxDEV("span", { className: "bg-earth-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: "Rank #" + selectedTree.rank }, void 0, false)
                    ] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-earth-300/90 text-lg sm:text-xl font-normal", children: selectedTree.hindi }, void 0, false)
                  ]
                }, void 0, true)
              ]
            }, void 0, true),
            /*#__PURE__*/_jsxDEV("div", {
              className: "p-4 md:p-6 sm:p-8",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:p-6",
                children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/50 hover:shadow-earth-500/20 transition-all duration-300 group flex flex-col justify-center", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "leaf", size: 16, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "CO\u2082 Absorption" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl md:text-3xl font-black text-earth-400 group-hover:scale-105 transition-transform duration-300 origin-left", children: [selectedTree.c, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/60 font-medium", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-green-500/50 hover:shadow-green-500/20 transition-all duration-300 group flex flex-col justify-center", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "wind", size: 16, className: "text-green-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "O\u2082 Release" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl md:text-3xl font-black text-green-400 group-hover:scale-105 transition-transform duration-300 origin-left", children: [selectedTree.o, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/60 font-medium", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  selectedTree.water && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 group", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "droplets", size: 16, className: "text-blue-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "Water Req." }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: selectedTree.water }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.growth && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "trending-up", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "Growth Rate" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: selectedTree.growth }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.height && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "arrow-up", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "Mature Height" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: selectedTree.height }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.canopy && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "cloud", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: "Canopy Spread" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: selectedTree.canopy }, void 0, false)
                  ] }, void 0, true),
                  (selectedTree.safeBldg || selectedTree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-forest-900/90 to-forest-950/90 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-earth-500/30 shadow-lg shadow-earth-500/10 hover:shadow-earth-500/20 transition-all duration-300", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "shield", size: 18, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-earth-300 text-sm uppercase tracking-widest font-bold", children: "Safe Planting Distance" }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("div", { className: "flex flex-wrap gap-5 md:p-8", children: [
                      selectedTree.safeBldg && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 bg-black/20 px-4 py-2 rounded-2xl border border-white/5", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "home", size: 16, className: "text-cream-100/50" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/80 font-medium", children: "From Building:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-white font-bold text-lg", children: selectedTree.safeBldg }, void 0, false)] }, void 0, true),
                      selectedTree.safeRoad && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 bg-black/20 px-4 py-2 rounded-2xl border border-white/5", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "map", size: 16, className: "text-cream-100/50" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/80 font-medium", children: "From Road:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-white font-bold text-lg", children: selectedTree.safeRoad }, void 0, false)] }, void 0, true)
                    ] }, void 0, true)
                  ] }, void 0, true)
                ]
              }, void 0, false)
            }, void 0, false)
          ]
        }, void 0, true)
      }, void 0, false), document.body)
  );
}

function TreeDatabase() {
  const [selectedTree, setSelectedTree] = useState(null);
  const context = React.useContext(LanguageContext);
  const language = (context && context.language) || 'en';
  const t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function() {
    if (selectedTree) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return function() {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [selectedTree]);

  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { key: "all", label: (t.filters && t.filters.all) || "All Trees" },
    { key: "fruit", label: (t.filters && t.filters.fruit) || "Fruits" },
    { key: "medicinal", label: (t.filters && t.filters.medicinal) || "Medicinal" },
    { key: "flower", label: (t.filters && t.filters.flower) || "Flowers" },
    { key: "shade", label: (t.filters && t.filters.shade) || "Shade & Timber" }
  ];

  // Multilingual search matching English, Hindi, and Marathi names + category filtering
  const filteredTrees = TREE_DATA.filter(function(tree) {
    if (activeFilter !== "all" && tree.category !== activeFilter) {
      return false;
    }
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    const enName = (tree.name || '').toLowerCase();
    const hiName = (tree.hindi || '').toLowerCase();
    const mrName = (tree.marathi || '').toLowerCase();
    return enName.includes(q) || hiName.includes(q) || mrName.includes(q);
  });

  return React.createElement(React.Fragment, null, /*#__PURE__*/_jsxDEV("section", {
    id: "tree-database",
    className: "py-10 md:py-16 md:py-24 relative overflow-hidden",
    children: [
      /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10",
        children: [
          /*#__PURE__*/_jsxDEV("div", {
            className: "text-center mb-16",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "inline-flex items-center justify-center gap-2 mb-6 px-4 md:px-6 py-2.5 rounded-full bg-forest-900/50 border border-forest-800/60 shadow-lg backdrop-blur-sm",
                children: [
                  /*#__PURE__*/_jsxDEV(LucideIcon, { name: "database", size: 18, className: "text-earth-400" }, void 0, false),
                  /*#__PURE__*/_jsxDEV("span", { className: "text-earth-400 font-semibold tracking-[0.25em] uppercase text-sm", children: t.catalog.badge }, void 0, false)
                ]
              }, void 0, true),
              /*#__PURE__*/_jsxDEV("h2", {
                className: "text-2xl md:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-cream-50 mb-6 tracking-tight leading-snug",
                children: t.catalog.title
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("p", {
                className: "text-base md:text-lg text-cream-100/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed",
                children: t.catalog.subtitle
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("div", {
                className: "max-w-md mx-auto relative",
                children: /*#__PURE__*/_jsxDEV("input", {
                  type: "text",
                  placeholder: t.catalog.searchPlaceholder,
                  className: "w-full px-4 md:px-6 py-4 rounded-full bg-forest-900/50 border border-forest-700/50 text-white placeholder:text-white/40 focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all shadow-inner",
                  value: searchTerm,
                  onChange: function(e) { setSearchTerm(e.target.value); }
                }, void 0, false)
              }, void 0, false),
              /* Minimalist Category Filter Bar */
              /*#__PURE__*/_jsxDEV("div", {
                className: "flex justify-center items-center mt-6 -mb-4",
                children: /*#__PURE__*/_jsxDEV("div", {
                  className: "flex overflow-x-auto gap-3 py-4 px-2 hide-scrollbar max-w-full justify-start md:justify-center items-center",
                  children: categories.map(function(cat) {
                    const isActive = activeFilter === cat.key;
                    return /*#__PURE__*/_jsxDEV("button", {
                      key: cat.key,
                      type: "button",
                      onClick: function() { setActiveFilter(cat.key); },
                      className: isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shrink-0 cursor-pointer"
                        : "bg-forest-900/60 hover:bg-forest-800/70 text-cream-100/70 hover:text-cream-50 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shrink-0 cursor-pointer",
                      children: cat.label
                    }, cat.key, false);
                  })
                }, void 0, false)
              }, void 0, false)
            ]
          }, void 0, true),
          filteredTrees.length === 0 ? /*#__PURE__*/_jsxDEV("div", {
            className: "text-center py-16 text-cream-100/60 font-medium",
            children: t.catalog.noResults
          }, void 0, false) :
          /*#__PURE__*/_jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:p-6 md:gap-5 md:p-8",
            children: filteredTrees.map(function(tree) {
              const displayName = getLocalizedTreeName(tree, language);
              const subtitleName = getLocalizedTreeSubtitle(tree, language);
              const waterText = getLocalizedWater(tree.water, language);
              const canopyText = getLocalizedDistance(tree.canopy, language);
              const bldgDist = getLocalizedDistance(tree.safeBldg, language);
              const roadDist = getLocalizedDistance(tree.safeRoad, language);

              return /*#__PURE__*/_jsxDEV("div", {
                key: tree.rank,
                className: "group bg-forest-900/40 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-300",
                onClick: function() { setSelectedTree(tree); },
                children: [
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "h-48 overflow-hidden relative",
                    children: [
                      /*#__PURE__*/_jsxDEV("img", { loading: "lazy", src: tree.img, alt: displayName, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", { className: "absolute top-3 right-3 bg-forest-950/80 backdrop-blur-md text-earth-300 text-xs font-medium px-3 py-1.5 rounded-full border border-earth-500/30", children: t.catalog.rankPrefix + tree.rank }, void 0, false)
                    ]
                  }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "p-4 md:p-6",
                    children: [
                      /*#__PURE__*/_jsxDEV("h3", { className: "text-xl font-serif font-medium text-cream-50 mb-1 line-clamp-1 leading-snug", children: displayName }, void 0, false),
                      /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400/90 text-sm font-normal mb-4 line-clamp-1", children: subtitleName }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "flex justify-between text-sm text-cream-100/80 font-medium tracking-wide border-t border-forest-800/50 pt-4 mb-2",
                        children: [
                          /*#__PURE__*/_jsxDEV("span", { children: [t.catalog.co2, tree.c, " ", t.catalog.kgYr] }, void 0, true),
                          /*#__PURE__*/_jsxDEV("span", { children: [t.catalog.o2, tree.o, " ", t.catalog.kgYr] }, void 0, true)
                        ]
                      }, void 0, true),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-cream-100/60 mt-2",
                        children: [
                          tree.canopy && /*#__PURE__*/_jsxDEV("div", { children: [/*#__PURE__*/_jsxDEV("span", { className: "font-medium", children: t.catalog.canopy }, void 0, false), canopyText] }, void 0, true),
                          tree.water && /*#__PURE__*/_jsxDEV("div", { children: [/*#__PURE__*/_jsxDEV("span", { className: "font-medium", children: t.catalog.water }, void 0, false), waterText] }, void 0, true),
                          (tree.safeBldg || tree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "col-span-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "font-medium", children: t.catalog.safeDist }, void 0, false), tree.safeBldg ? t.catalog.bldg + bldgDist : "", tree.safeBldg && tree.safeRoad ? " | " : "", tree.safeRoad ? t.catalog.road + roadDist : ""] }, void 0, true)
                        ]
                      }, void 0, true)
                    ]
                  }, void 0, true)
                ]
              }, tree.rank, true);
            })
          }, void 0, false)
        ]
      }, void 0, true)
    ] }, void 0, true),
      selectedTree && ReactDOM.createPortal(/*#__PURE__*/_jsxDEV("div", {
        className: "fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in overflow-y-auto",
        onClick: function() { setSelectedTree(null); },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-900/95 via-forest-950/95 to-forest-950/95 border border-white/20 rounded-2xl md:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] p-5 md:p-8 md:p-10 my-auto text-cream-50",
          onClick: function(e) { e.stopPropagation(); },
          children: [
            /*#__PURE__*/_jsxDEV("button", {
              className: "absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-forest-950/60 hover:bg-forest-800 text-cream-100/70 hover:text-white border border-white/10 transition-all duration-300 z-10 shadow-lg",
              onClick: function() { setSelectedTree(null); },
              children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: "x", size: 20 }, void 0, false)
            }, void 0, false),
            /*#__PURE__*/_jsxDEV("div", {
              className: "flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8",
              children: [
                /*#__PURE__*/_jsxDEV("div", {
                  className: "w-full md:w-5/12 h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-xl flex-shrink-0 relative group",
                  children: [
                    /*#__PURE__*/_jsxDEV("img", { loading: "lazy", src: selectedTree.img, alt: getLocalizedTreeName(selectedTree, language), className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-60" }, void 0, false)
                  ]
                }, void 0, true),
                /*#__PURE__*/_jsxDEV("div", {
                  className: "flex-1 w-full flex flex-col justify-center",
                  children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "inline-flex items-center gap-2 mb-3 bg-earth-500/10 px-3 py-1 rounded-full border border-earth-500/20 w-max", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "award", size: 14, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-earth-400 text-xs font-semibold tracking-wider uppercase", children: t.catalog.rankPrefix + selectedTree.rank + " • " + t.catalog.modalOverview }, void 0, false)] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("h3", { className: "text-2xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight", children: getLocalizedTreeName(selectedTree, language) }, void 0, false),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400 text-lg md:text-xl font-medium mb-4", children: getLocalizedTreeSubtitle(selectedTree, language) }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "h-px w-full bg-gradient-to-r from-earth-500/40 via-white/10 to-transparent my-2" }, void 0, false)
                  ]
                }, void 0, true)
              ]
            }, void 0, true),
            /*#__PURE__*/_jsxDEV("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
              children: [
                /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-400/50 hover:shadow-earth-500/20 transition-all duration-300 group flex flex-col justify-center", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "leaf", size: 16, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.co2Abs }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl md:text-3xl font-black text-earth-400 group-hover:scale-105 transition-transform duration-300 origin-left", children: [selectedTree.c, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/60 font-medium", children: t.catalog.kgYr }, void 0, false)] }, void 0, true)
                ] }, void 0, true),
                /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-green-500/50 hover:shadow-green-500/20 transition-all duration-300 group flex flex-col justify-center", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "wind", size: 16, className: "text-green-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.o2Rel }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl md:text-3xl font-black text-green-400 group-hover:scale-105 transition-transform duration-300 origin-left", children: [selectedTree.o, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/60 font-medium", children: t.catalog.kgYr }, void 0, false)] }, void 0, true)
                ] }, void 0, true),
                selectedTree.water && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 group", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "droplets", size: 16, className: "text-blue-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.waterReq }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: getLocalizedWater(selectedTree.water, language) }, void 0, false)
                ] }, void 0, true),
                selectedTree.growth && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "trending-up", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.growthRate }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: getLocalizedGrowth(selectedTree.growth, language) }, void 0, false)
                ] }, void 0, true),
                selectedTree.height && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "arrow-up", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.matureHeight }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: getLocalizedDistance(selectedTree.height, language) }, void 0, false)
                ] }, void 0, true),
                selectedTree.canopy && /*#__PURE__*/_jsxDEV("div", { className: "bg-gradient-to-br from-forest-900/80 to-forest-950/80 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:border-earth-500/30 transition-all duration-300 group", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "cloud", size: 16, className: "text-earth-300" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm uppercase tracking-wider font-semibold", children: t.catalog.canopySpread }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "text-xl font-bold text-cream-50", children: getLocalizedDistance(selectedTree.canopy, language) }, void 0, false)
                ] }, void 0, true),
                (selectedTree.safeBldg || selectedTree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-forest-900/90 to-forest-950/90 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-earth-500/30 shadow-lg shadow-earth-500/10 hover:shadow-earth-500/20 transition-all duration-300", children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "shield", size: 18, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("div", { className: "text-earth-300 text-sm uppercase tracking-widest font-bold", children: t.catalog.safePlantingDist }, void 0, false)] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "flex flex-wrap gap-5 md:p-8", children: [
                    selectedTree.safeBldg && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 bg-black/20 px-4 py-2 rounded-2xl border border-white/5", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "home", size: 16, className: "text-cream-100/50" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/80 font-medium", children: t.catalog.fromBldg }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-white font-bold text-lg", children: getLocalizedDistance(selectedTree.safeBldg, language) }, void 0, false)] }, void 0, true),
                    selectedTree.safeRoad && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 bg-black/20 px-4 py-2 rounded-2xl border border-white/5", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "map", size: 16, className: "text-cream-100/50" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/80 font-medium", children: t.catalog.fromRoad }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-white font-bold text-lg", children: getLocalizedDistance(selectedTree.safeRoad, language) }, void 0, false)] }, void 0, true)
                  ] }, void 0, true)
                ] }, void 0, true)
              ]
            }, void 0, false),
            /* Modal Footer Esc Hint */
            /*#__PURE__*/_jsxDEV("div", { className: "mt-6 text-center text-xs text-cream-100/40", children: t.catalog.closeHint }, void 0, false)
          ]
        }, void 0, true)
      }, void 0, false), document.body)
  );
}




/* ──────────────────────────────────────────────
   Persistent Header — minimal top bar
────────────────────────────────────────────── */
function PersistentHeader() {
  var context = React.useContext(LanguageContext);
  var language = (context && context.language) || 'en';
  var setLanguage = (context && context.setLanguage) || function() {};
  var t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;

  var totalSpecies = TREE_DATA.length;
  var totalCO2 = TREE_DATA.reduce(function(s, t) { return s + t.c; }, 0);
  var totalO2 = TREE_DATA.reduce(function(s, t) { return s + t.o; }, 0);

  var languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिंदी', short: 'हिं' },
    { code: 'mr', label: 'मराठी', short: 'म' }
  ];

  return React.createElement("header", {
    className: "fixed top-0 inset-x-0 z-50 bg-forest-950/80 backdrop-blur-xl border-b border-white/10"
  },
    React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2"
    },
      React.createElement("a", { href: "#", className: "flex items-center gap-2.5 group flex-shrink-0" },
        React.createElement("img", {
          src: "logo_transparent.png",
          alt: "Afforestation Logo",
          loading: "eager",
          decoding: "sync",
          fetchpriority: "high",
          onError: function(e) {
            if (e.target.src.indexOf("favicon.png") === -1) {
              e.target.src = "favicon.png";
            }
          },
          className: "h-9 sm:h-10 w-9 sm:w-10 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 shadow-md shadow-forest-950/40 ring-1 ring-emerald-500/30"
        }),
        React.createElement("span", { className: "text-base sm:text-lg font-semibold tracking-tight text-cream-50" },
          "af", React.createElement("span", { className: "text-earth-400" }, "forestation")
        )
      ),
      React.createElement("div", { className: "flex items-center gap-2 sm:gap-4" },
        /* Stats badges on larger screens */
        React.createElement("div", { className: "hidden lg:flex items-center gap-2.5" },
          React.createElement("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/50 border border-forest-800/50" },
            React.createElement(LucideIcon, { name: "database", size: 12, className: "text-earth-400" }),
            React.createElement("span", { className: "text-xs font-bold text-cream-100" }, totalSpecies),
            React.createElement("span", { className: "text-xs text-cream-100/50" }, t.header.species)
          ),
          React.createElement("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/50 border border-forest-800/50" },
            React.createElement("span", { className: "text-xs font-bold text-earth-400" }, Math.round(totalCO2).toLocaleString()),
            React.createElement("span", { className: "text-xs text-cream-100/50" }, t.header.co2Unit)
          ),
          React.createElement("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/50 border border-forest-800/50" },
            React.createElement("span", { className: "text-xs font-bold text-green-400" }, Math.round(totalO2).toLocaleString()),
            React.createElement("span", { className: "text-xs text-cream-100/50" }, t.header.o2Unit)
          )
        ),
        /* Language Toggle - Desktop Full / Mobile Short */
        React.createElement("div", {
          className: "flex items-center p-1 rounded-full bg-forest-900/80 border border-white/10 shadow-inner backdrop-blur-md",
          role: "radiogroup",
          "aria-label": "Language Selection"
        },
          languages.map(function(lang) {
            var isActive = language === lang.code;
            return React.createElement("button", {
              key: lang.code,
              type: "button",
              onClick: function() { setLanguage(lang.code); },
              className: "px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 " +
                (isActive
                  ? "bg-earth-500 text-forest-950 shadow-md shadow-earth-500/30 font-bold scale-105"
                  : "text-cream-100/60 hover:text-cream-50 hover:bg-white/5"),
              title: lang.label
            },
              React.createElement("span", { className: "hidden sm:inline" }, lang.label),
              React.createElement("span", { className: "sm:hidden" }, lang.short)
            );
          })
        )
      )
    )
  );
}

/* ──────────────────────────────────────────────
   Tab Navigation — Desktop pill + Mobile dock
────────────────────────────────────────────── */
function TabNavigation(props) {
  var activeTab = props.activeTab;
  var setActiveTab = props.setActiveTab;
  var context = React.useContext(LanguageContext);
  var language = (context && context.language) || 'en';
  var t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;

  var tabs = [
    { key: 'about', label: t.tabs.about, mobileLabel: t.tabs.aboutMobile, icon: 'info' },
    { key: 'catalog', label: t.tabs.catalog, mobileLabel: t.tabs.catalogMobile, icon: 'database' },
    { key: 'methodology', label: t.tabs.methodology, mobileLabel: t.tabs.methodologyMobile, icon: 'leaf' },
    { key: 'contact', label: t.tabs.contact, mobileLabel: t.tabs.contactMobile, icon: 'phone' }
  ];

  return React.createElement(React.Fragment, null,
    /* Desktop: floating centered pill bar */
    React.createElement("div", {
      className: "hidden md:flex fixed top-[4.25rem] left-1/2 -translate-x-1/2 z-40"
    },
      React.createElement("div", {
        className: "glass-card rounded-full p-1.5 flex items-center gap-1 shadow-2xl shadow-black/30"
      },
        tabs.map(function(tab) {
          var isActive = activeTab === tab.key;
          return React.createElement("button", {
            key: tab.key,
            "data-tab": tab.key,
            "aria-label": tab.label,
            onClick: function() { setActiveTab(tab.key); },
            className: "flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap " +
              (isActive
                ? "bg-earth-500 text-forest-950 shadow-md shadow-earth-500/30 font-bold"
                : "text-cream-100/70 hover:text-cream-50 hover:bg-white/5")
          },
            React.createElement(LucideIcon, { name: tab.icon, size: 18 }),
            isActive && React.createElement("span", { className: "animate-fade-in" }, tab.label)
          );
        })
      )
    ),
    /* Mobile: fixed bottom dock */
    React.createElement("div", {
      className: "md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/10 safe-area-bottom"
    },
      React.createElement("div", {
        className: "flex items-center justify-between px-3 py-2 gap-1 max-w-sm mx-auto"
      },
        tabs.map(function(tab) {
          var isActive = activeTab === tab.key;
          return React.createElement("button", {
            key: tab.key,
            "data-tab": tab.key,
            "aria-label": tab.label,
            onClick: function() { setActiveTab(tab.key); },
            className: "flex items-center justify-center gap-2 h-12 rounded-2xl transition-all duration-300 overflow-hidden " +
              (isActive
                ? "bg-earth-500/20 text-earth-400 px-5 flex-shrink-0"
                : "text-cream-100/50 active:bg-white/5 px-4")
          },
            React.createElement(LucideIcon, { name: tab.icon, size: 22, className: isActive ? "" : "opacity-80" }),
            isActive && React.createElement("span", {
              className: "text-[12px] font-bold tracking-wide animate-fade-in leading-normal"
            }, tab.mobileLabel)
          );
        })
      )
    )
  );
}

/* ──────────────────────────────────────────────
   AI Workspace — Full-page console
────────────────────────────────────────────── */
function AIWorkspace() {
  var context = React.useContext(LanguageContext);
  var language = (context && context.language) || 'en';
  var t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;

  var _messages = useState(function() {
    try {
      var saved = sessionStorage.getItem('greenAssistantMessages_' + language);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [{ role: 'assistant', content: t.assistant.welcome }];
  });
  var messages = _messages[0];
  var setMessages = _messages[1];

  useEffect(function() {
    sessionStorage.setItem('greenAssistantMessages_' + language, JSON.stringify(messages));
  }, [messages, language]);

  var _input = useState('');
  var input = _input[0];
  var setInput = _input[1];

  var _isTyping = useState(false);
  var isTyping = _isTyping[0];
  var setIsTyping = _isTyping[1];

  var _contextTree = useState(null);
  var contextTree = _contextTree[0];
  var setContextTree = _contextTree[1];

  var messagesEndRef = useRef(null);
  var inputRef = useRef(null);

  /* Auto-scroll to latest message */
  useEffect(function() {
    if (messagesEndRef.current && typeof messagesEndRef.current.scrollIntoView === 'function') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  /* Focus input on mount */
  useEffect(function() {
    if (inputRef.current) {
      setTimeout(function() { inputRef.current.focus(); }, 200);
    }
  }, []);

  /* ── Multilingual response generator ── */
  function generateResponse(query) {
    var q = query.toLowerCase().trim();
    var currentContext = contextTree;
    var mentionedTrees = TREE_DATA.filter(function(tr) {
      var nameMatch = q.includes(tr.name.toLowerCase());
      var hiName = (tr.hindi || '').split('(')[0].trim().toLowerCase();
      var mrName = (tr.marathi || '').split('(')[0].trim().toLowerCase();
      var hiMatch = hiName.length > 2 && q.includes(hiName);
      var mrMatch = mrName.length > 2 && q.includes(mrName);
      return nameMatch || hiMatch || mrMatch;
    });

    if (mentionedTrees.length === 1) { currentContext = mentionedTrees[0]; setContextTree(currentContext); }

    // Multilingual responses
    if (/^(hi|hello|hey|namaste|namaskar|good\s*(morning|afternoon|evening)|नमस्ते|नमस्कार|प्रणाम)/i.test(q)) {
      if (language === 'hi') return 'साइट पर आपका स्वागत है। मैं आपका वरिष्ठ पर्यावरण इंजीनियर हूँ। मैं जड़-भार वितरण, मिट्टी अनुकूलता मैट्रिक्स या कैनोपी थर्मल गुणांक पर संरचनात्मक विश्लेषण कर सकता हूँ।\n\nकुछ शुरुआती प्रश्न:\n* "नीम के लिए जड़ फैलाव भार का अनुमान लगाएं"\n* "मिट्टी की अनुकूलता का विश्लेषण करें"\n* "थर्मल प्रभाव मैट्रिक्स तैयार करें"';
      if (language === 'mr') return 'प्रकल्पावर आपले स्वागत आहे. मी आपला वरिष्ठ पर्यावरण अभियंता आहे. मी मूळ-भार वितरण, माती सुसंगतता मॅट्रिक्स किंवा कॅनोपी थर्मल गुणांकांवर संरचनात्मक विश्लेषण करू शकतो.\n\nकाही मार्गदर्शक प्रश्न:\n* "कडुनिंबासाठी मूळ भार अंदाज काढा"\n* "माती सुसंगतता विश्लेषण करा"\n* "थर्मल प्रभाव मॅट्रिक्स तयार करा"';
      return 'Good to have you on-site. I can run structural analysis on root-load distributions, soil compatibility matrices, or canopy thermal coefficients.\n\nSome starting points:\n* "Predict root spread load for Neem"\n* "Analyze soil compatibility"\n* "Generate a thermal impact matrix"';
    }

    if (/\b(thanks|thank\s*you|thx|dhanyavaad|shukriya|धन्यवाद|आभार|खूप छान)\b/i.test(q)) {
      if (language === 'hi') return 'स्वागत है। प्रत्येक देशी प्रजाति का समावेश स्थल की दीर्घकालिक स्थिरता को मजबूत करता है। आपके अगले प्रश्न की प्रतीक्षा में हूँ।';
      if (language === 'mr') return 'धन्यवाद. प्रत्येक स्थानिक प्रजातीचा समावेश प्रकल्पाची दीर्घकालीन स्थिरता मजबूत करतो. आपल्या पुढील प्रश्नासाठी सज्ज आहे.';
      return "Acknowledged. Every species integration strengthens the site's long-term load profile. Standing by for your next query.";
    }

    if (/\b(fast|fastest|quick|rapid|तेज|जलद|वेगाने)\b/i.test(q) && /\b(grow|growth|बढ़ने|वाढ)\b/i.test(q)) {
      var fastTrees = TREE_DATA.filter(function(tr) { return tr.growth && (tr.growth.includes('Fast') || tr.growth.includes('Very Fast')); });
      if (language === 'hi') return '🚀 **सबसे तेजी से बढ़ने वाले वृक्ष:**\n\n' + fastTrees.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'hi') + '** (' + getLocalizedGrowth(tr.growth, 'hi') + ')'; }).join('\n') + '\n\nये त्वरित कैनोपी निर्माण के लिए उत्कृष्ट हैं!';
      if (language === 'mr') return '🚀 **सर्वात वेगाने वाढणारी झाडे:**\n\n' + fastTrees.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'mr') + '** (' + getLocalizedGrowth(tr.growth, 'mr') + ')'; }).join('\n') + '\n\nहे झाडे जलद कॅनोपी विस्तारासाठी अत्यंत योग्य आहेत!';
      return '🚀 **Fastest Growing Trees:**\n\n' + fastTrees.slice(0, 5).map(function(tr) { return '* **' + tr.name + '** (' + tr.growth + ')'; }).join('\n') + '\n\nThese are excellent for rapid canopy establishment!';
    }

    if (/\b(water|irrigation|पानी|जल)\b/i.test(q) && /\b(low|less|little|dry|कम|कमी)\b/i.test(q)) {
      var lowWater = TREE_DATA.filter(function(tr) { return tr.water && tr.water.includes('Low'); });
      if (language === 'hi') return '🌵 **कम पानी की आवश्यकता वाले वृक्ष:**\n\n' + lowWater.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'hi') + '**'; }).join('\n') + '\n\nशुष्क या सूखा प्रवण क्षेत्रों के लिए उत्तम विकल्प।';
      if (language === 'mr') return '🌵 **कमी पाणी लागणारी झाडे:**\n\n' + lowWater.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'mr') + '**'; }).join('\n') + '\n\nकोरड्या किंवा दुष्काळग्रस्त भागासाठी उत्तम पर्याय.';
      return '🌵 **Low Water Requirement Trees:**\n\n' + lowWater.slice(0, 5).map(function(tr) { return '* **' + tr.name + '**'; }).join('\n') + '\n\nGreat for dry or drought-prone areas.';
    }

    if (/\b(most|best|highest|top|maximum|greatest|शीर्ष|सर्वोच्च|अव्वल)\b/i.test(q) && /co2|carbon|कार्बन|अवशोष/i.test(q)) {
      var sorted = TREE_DATA.slice().sort(function(a, b) { return b.c - a.c; });
      if (language === 'hi') return '🏆 **शीर्ष CO₂ अवशोषक वृक्ष (किग्रा/वर्ष):**\n\n' + sorted.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'hi') + '** — ' + tr.c.toLocaleString() + ' किग्रा/वर्ष'; }).join('\n');
      if (language === 'mr') return '🏆 **अव्वल CO₂ शोषक झाडे (किलो/वर्ष):**\n\n' + sorted.slice(0, 5).map(function(tr) { return '* **' + getLocalizedTreeName(tr, 'mr') + '** — ' + tr.c.toLocaleString() + ' किलो/वर्ष'; }).join('\n');
      return '🏆 **Top CO₂ Absorbers (kg/year):**\n\n' + sorted.slice(0, 5).map(function(tr) { return '* **' + tr.name + '** — ' + tr.c.toLocaleString() + ' kg/yr'; }).join('\n');
    }

    if (/\b(miyawaki|afforestation|मियावाकी|वनीकरण)\b/i.test(q)) {
      if (language === 'hi') return '🌱 **मियावाकी पद्धति (Miyawaki Method)** एक उन्नत वनीकरण तकनीक है जो देशी प्रजातियों से घने, बहुस्तरीय वन बनाती है।\n\n**प्रमुख सिद्धांत:**\n* **30 गुना अधिक घना**, **10 गुना तेजी से विकास**\n* 3 साल बाद **रखरखाव-मुक्त**\n* **4 स्तरों** का उपयोग (झाड़ियां, उप-वृक्ष, वृक्ष, कैनोपी)\n* प्रति वर्ग मीटर **3-5 पौधे**';
      if (language === 'mr') return '🌱 **मियावाकी पद्धत (Miyawaki Method)** हे एक प्रगत वनीकरण तंत्रज्ञान आहे जे स्थानिक प्रजातींचा वापर करून दाट, बहुस्तरीय जंगले निर्माण करते.\n\n**मूलभूत तत्त्वे:**\n* **30 पट अधिक दाट**, **10 पट जलद वाढ**\n* 3 वर्षांनंतर **देखभाल-मुक्त**\n* **4 स्तरांचा** वापर (झुडपे, उप-वृक्ष, झाडे, कॅनोपी)\n* प्रति चौरस मीटर **3-5 रोपे**';
      return '🌱 **The Miyawaki Method** is an advanced afforestation technique that uses native species to create dense, multilayered forests.\n\n**Core Principles:**\n* **30x denser**, grows **10x faster**\n* **Maintenance-free** after 3 years\n* Uses **4 layers** (shrubs, sub-trees, trees, canopy)\n* Requires **3-5 saplings per square meter**';
    }

    if (mentionedTrees.length === 1) {
      var tr = mentionedTrees[0];
      var trName = getLocalizedTreeName(tr, language);
      var trSub = getLocalizedTreeSubtitle(tr, language);
      if (language === 'hi') {
        return '🌳 **' + trName + '** (' + trSub + ')\n\n* 🌿 **CO₂ अवशोषण:** ' + tr.c.toLocaleString() + ' किग्रा/वर्ष\n* 🌬️ **O₂ उत्सर्जन:** ' + tr.o.toLocaleString() + ' किग्रा/वर्ष\n* 💧 **जल आवश्यकता:** ' + getLocalizedWater(tr.water, 'hi') + '\n* 📈 **वृद्धि दर:** ' + getLocalizedGrowth(tr.growth, 'hi') + '\n* 🛡️ **सुरक्षित दूरी:** भवन से ' + getLocalizedDistance(tr.safeBldg, 'hi') + ', सड़क से ' + getLocalizedDistance(tr.safeRoad, 'hi') + '\n* 🚗 प्रति वर्ष कार उत्सर्जन की भरपाई: ' + getCarEquivalent(tr.c) + ' दिन\n* 👥 प्रति वर्ष ऑक्सीजन आपूर्ति: ' + getPeopleO2(tr.o) + ' व्यक्ति';
      }
      if (language === 'mr') {
        return '🌳 **' + trName + '** (' + trSub + ')\n\n* 🌿 **CO₂ शोषण:** ' + tr.c.toLocaleString() + ' किलो/वर्ष\n* 🌬️ **O₂ निर्मिती:** ' + tr.o.toLocaleString() + ' किलो/वर्ष\n* 💧 **पाण्याची गरज:** ' + getLocalizedWater(tr.water, 'mr') + '\n* 📈 **वाढीचा वेग:** ' + getLocalizedGrowth(tr.growth, 'mr') + '\n* 🛡️ **सुरक्षित अंतर:** इमारतीपासून ' + getLocalizedDistance(tr.safeBldg, 'mr') + ', रस्त्यापासून ' + getLocalizedDistance(tr.safeRoad, 'mr') + '\n* 🚗 प्रति वर्ष कार उत्सर्जनाची भरपाई: ' + getCarEquivalent(tr.c) + ' दिवस\n* 👥 प्रति वर्ष ऑक्सिजन पुरवठा: ' + getPeopleO2(tr.o) + ' व्यक्ती';
      }
      return '🌳 **' + tr.name + '** (' + tr.hindi + ')\n\n* 🌿 **CO₂ Absorbed:** ' + tr.c.toLocaleString() + ' kg/year\n* 🌬️ **O₂ Released:** ' + tr.o.toLocaleString() + ' kg/year\n* 💧 **Water:** ' + tr.water + '\n* 📈 **Growth:** ' + tr.growth + '\n* 📏 **Safe Distance:** Building ' + tr.safeBldg + ', Road ' + tr.safeRoad + '\n* 🚗 Offsets ' + getCarEquivalent(tr.c) + ' days of car driving/year\n* 👥 Provides O₂ for ' + getPeopleO2(tr.o) + ' people/year';
    }

    if (language === 'hi') {
      return 'मैं आपकी सहायता के लिए यहाँ हूँ! 🤔 आप मुझसे पूछ सकते हैं:\n* **वृक्ष प्रजाति डेटा** (उदा. "नीम के बारे में बताएं")\n* **गुणधर्म** (उदा. "कम पानी वाले पेड़ कौन से हैं?")\n* **मियावाकी पद्धति** (उदा. "मियावाकी पद्धति क्या है?")\n* **सर्वोच्च अवशोषक** (उदा. "सबसे अधिक CO₂ कौन सा पेड़ सोखता है?")';
    }
    if (language === 'mr') {
      return 'मी आपल्या मदतीसाठी येथे आहे! 🤔 आपण मला विचारू शकता:\n* **झाडांची माहिती** (उदा. "कडुनिंबाबद्दल सांगा")\n* **गुणधर्म** (उदा. "कमी पाणी लागणारी झाडे कोणती?")\n* **मियावाकी पद्धत** (उदा. "मियावाकी पद्धत काय आहे?")\n* **अव्वल शोषक** (उदा. "सर्वात जास्त CO₂ कोणते झाड शोषून घेते?")';
    }
    return "I'm ready to assist with site analysis! 🤔 You can ask about:\n* **Tree species data** (e.g., \"Tell me about Neem\")\n* **Properties** (e.g., \"Which trees need low water?\")\n* **Miyawaki Method**\n* **Carbon absorption** (e.g., \"Which tree absorbs the most CO₂?\")";
  }

  /* ── Send handler with direct Gemini call ── */
  async function handleSend(forcedQuery) {
    var userMsg = (typeof forcedQuery === 'string' ? forcedQuery : input).trim();
    if (!userMsg || isTyping) return;
    if (typeof forcedQuery !== 'string') setInput('');
    setMessages(function(prev) { return prev.concat([{ role: 'user', content: userMsg, text: userMsg, sender: 'user' }]); });
    setIsTyping(true);

    try {
      // Direct Google Gemini API Call
      const API_KEY = "AQ.Ab8RN6Ksdw3MQ75vhsbMFxbmP8WLFMsPGf9uT3n9hycfu-6_cw"; 
      
      // Multi-model cascade: gemini-3.5-flash, gemini-3.5-flash-lite, gemini-2.5-flash
      const candidateModels = ["gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-2.5-flash"];
      let data = null;
      let lastErrorMessage = "";

      const systemPrompt = `You are the official Ecological Assistant for the Afforestation Platform.

PRIMARY OPERATING RULES:
1. SPECIFIC WEBSITE DATABASE QUESTIONS (Priority 1):
For questions about top CO2 absorbing trees, top oxygen trees, tree rankings, specific trees in the database (Neem, Tamarind, Siris, Peepal, Subabul, Gulmohar, Bamboo, Amla, etc.), low water trees, growth rates, tree comparisons, or Miyawaki method, you MUST answer using the exact figures and rankings from the Afforestation Website Database below.
Always prefix your response with:
🌱 **From Afforestation Website Database:** (or in Hindi: 🌱 **अफॉरेस्टेशन वेबसाइट डेटाबेस से:** / in Marathi: 🌱 **अफॉरेस्टेशन वेबसाइट डेटाबेसमधून:**)

AFFORESTATION WEBSITE DATABASE (38 SPECIES RANKED BY CO2 ABSORPTION):
#1. Indian siris tree (Albizia lebbeck | Hindi: Siris | Marathi: Shirish) - CO2: 1029.56 kg/yr, O2: 2744.81 kg/yr, Water: Medium, Growth: Fast, Height: 15-25m, Canopy: 12-18m
#2. Tamarind (Tamarindus indica | Hindi: Imli | Marathi: Chinch) - CO2: 808.79 kg/yr, O2: 2156.23 kg/yr, Water: Low, Growth: Slow, Height: 12-20m, Canopy: 10-15m
#3. May flower tree / Gulmohar (Delonix regia) - CO2: 385.26 kg/yr, O2: 1027.11 kg/yr, Water: Medium, Growth: Fast, Height: 10-15m, Canopy: 8-12m
#4. Yellow flame tree (Peltophorum pterocarpum | Hindi: Peela Gulmohar | Marathi: Sonmohar) - CO2: 377.16 kg/yr, O2: 1005.52 kg/yr, Water: Medium, Growth: Fast
#5. Sacred fig (Ficus religiosa | Hindi: Peepal | Marathi: Pimpal) - CO2: 339.82 kg/yr, O2: 905.96 kg/yr, Water: Medium, Growth: Medium, Height: 15-25m, Canopy: 15-20m
#6. River tamarind (Leucaena leucocephala | Hindi: Subabul | Marathi: Subabhul) - CO2: 313.76 kg/yr, O2: 836.47 kg/yr, Water: Low, Growth: Very Fast
#7. Kanak Champa (Pterospermum acerifolium | Marathi: Muchkund) - CO2: 310.08 kg/yr, O2: 826.67 kg/yr, Water: Medium, Growth: Medium
#8. Neem (Azadirachta indica | Hindi: Neem | Marathi: Kadulimb) - CO2: 301.67 kg/yr, O2: 804.25 kg/yr, Water: Low, Growth: Medium-Fast, Height: 12-18m, Canopy: 8-12m
#9. Indian cork tree (Millingtonia hortensis | Hindi: Neem Chameli | Marathi: Buch) - CO2: 211.29 kg/yr, O2: 563.29 kg/yr, Water: Medium, Growth: Fast
#10. Gooseberry (Phyllanthus emblica | Hindi: Amla | Marathi: Amla) - CO2: 206.10 kg/yr, O2: 549.46 kg/yr, Water: Low, Growth: Medium
#11. Earleaf acacia (Pahari Babul) - CO2: 204.44 kg/yr, O2: 545.04 kg/yr, Water: Low, Growth: Fast
#12. Cluster fig (Gular / Umber) - CO2: 195.29 kg/yr, O2: 520.66 kg/yr, Water: Medium, Growth: Fast
#13. Jamun tree (Syzygium cumini | Hindi: Jamun | Marathi: Jambhul) - CO2: 190.59 kg/yr, O2: 508.12 kg/yr, Water: Medium, Growth: Medium
#14. Golden shower (Cassia fistula | Hindi: Amaltas | Marathi: Bahawa) - CO2: 188.51 kg/yr, O2: 502.56 kg/yr, Water: Low-Medium, Growth: Medium
#15. Weeping fig (Ficus benjamina | Hindi: Chilkan | Marathi: Nandruk) - CO2: 178.05 kg/yr, O2: 474.69 kg/yr, Water: Medium, Growth: Fast
#16. Teak (Tectona grandis | Hindi: Sagwan | Marathi: Sagwan) - CO2: 149.42 kg/yr, O2: 398.36 kg/yr, Water: Medium, Growth: Fast
#17. Pungam tree (Pongamia pinnata | Hindi: Karanj | Marathi: Karanj) - CO2: 140.59 kg/yr, O2: 374.81 kg/yr, Water: Low, Growth: Fast
#18. Spanish Cherry (Mimusops elengi | Hindi: Maulsari | Marathi: Bakul) - CO2: 125.43 kg/yr, O2: 334.38 kg/yr, Water: Medium, Growth: Slow
#19. Paradise tree (Simarouba glauca | Lakshmi Taru) - CO2: 119.71 kg/yr, O2: 319.15 kg/yr, Water: Low, Growth: Fast
#20. Wild almond tree (Sterculia foetida | Jangli Badam) - CO2: 116.82 kg/yr, O2: 311.44 kg/yr, Water: Medium, Growth: Fast
#21. Wood apple (Limonia acidissima | Hindi: Kaitha | Marathi: Kavath) - CO2: 106.71 kg/yr, O2: 284.49 kg/yr, Water: Low, Growth: Slow
#22. Mulberry tree (Morus | Hindi: Shahtoot | Marathi: Tuti) - CO2: 94.15 kg/yr, O2: 251.00 kg/yr, Water: Medium, Growth: Fast
#23. Guava tree (Psidium guajava | Hindi: Amrud | Marathi: Peru) - CO2: 85.34 kg/yr, O2: 227.53 kg/yr, Water: Medium, Growth: Medium
#24. Casuarina (Casuarina equisetifolia | Hindi: Jhau | Marathi: Suru) - CO2: 80.53 kg/yr, O2: 214.70 kg/yr, Water: Low, Growth: Fast
#25. Bibhitaki tree (Terminalia bellirica | Hindi: Baheda | Marathi: Behada) - CO2: 76.60 kg/yr, O2: 204.21 kg/yr, Water: Medium, Growth: Medium
#26. Purple bauhinia (Bauhinia purpurea | Hindi: Kachnar | Marathi: Rakta Kanchan) - CO2: 70.08 kg/yr, O2: 186.83 kg/yr, Water: Medium, Growth: Fast
#27. Butter tree (Madhuca longifolia | Hindi: Mahua | Marathi: Moh) - CO2: 69.43 kg/yr, O2: 185.11 kg/yr, Water: Low-Medium, Growth: Slow-Medium
#28. Indian mulberry (Morinda citrifolia | Hindi: Aal | Marathi: Noni) - CO2: 68.81 kg/yr, O2: 183.44 kg/yr, Water: High, Growth: Medium
#29. Geranium tree (Cordia sebestena | Hindi: Lal Lasora | Marathi: Kanchan) - CO2: 57.53 kg/yr, O2: 153.38 kg/yr, Water: Low, Growth: Medium
#30. Yellow bells (Tecoma stans | Hindi: Pili Chameli | Marathi: Tecoma) - CO2: 50.19 kg/yr, O2: 133.80 kg/yr, Water: Low, Growth: Fast
#31. Mango tree (Mangifera indica | Hindi: Aam | Marathi: Amba) - CO2: 46.31 kg/yr, O2: 123.45 kg/yr, Water: Medium, Growth: Medium
#32. Indian almond (Terminalia catappa | Hindi: Desi Badam | Marathi: Deshi Badam) - CO2: 38.34 kg/yr, O2: 102.21 kg/yr, Water: Medium, Growth: Fast
#33. False Ashoka (Polyalthia longifolia | Ashoka) - CO2: 29.01 kg/yr, O2: 77.34 kg/yr, Water: Medium, Growth: Medium
#34. Curry leaf (Murraya koenigii | Kadi Patta) - CO2: 26.71 kg/yr, O2: 71.20 kg/yr, Water: Medium, Growth: Medium
#35. Quick stick (Gliricidia sepium | Giripushpa) - CO2: 21.18 kg/yr, O2: 56.46 kg/yr, Water: Low, Growth: Very Fast
#36. Arjuna tree (Terminalia arjuna | Arjun) - CO2: 12.75 kg/yr, O2: 33.99 kg/yr, Water: Medium, Growth: Medium
#37. Parijat (Nyctanthes arbor-tristis | Harsingar | Parijatak) - CO2: 5.85 kg/yr, O2: 15.60 kg/yr, Water: Medium, Growth: Medium
#38. Bamboo (Bambusoideae | Hindi: Bans | Marathi: Bambu) - CO2: 5.80 kg/yr, O2: 15.46 kg/yr, Water: Med-High, Growth: Very Fast

DATABASE TOTALS: 38 species, Total CO2: ~6,380 kg/yr, Total O2: ~17,015 kg/yr.
MIYAWAKI METHOD: 4 layers (Shrubs, Sub-trees, Trees, Canopy), 30x denser, 10x faster, self-sustaining in 3 years, 3-5 saplings/sqm.
LOW WATER TREES IN DATABASE: Tamarind (#2), Subabul (#6), Neem (#8), Amla (#10), Earleaf acacia (#11), Karanj (#17), Paradise tree (#19), Wood apple (#21), Casuarina (#24), Lal Lasora (#29), Yellow bells (#30), Quick stick (#35).

2. GOOGLE / WEB SEARCH FOR UNLISTED TOPICS (Priority 2):
If the user asks an ecological question whose information is NOT available in the website database above (for example: trees not in the database like Mangroves, Oak, Redwood, Baobab, Eucalyptus, Pine; or general topics like soil biochar, drip irrigation, mycorrhizal fungi, rainwater harvesting, carbon credit trading, global climate summits, etc.), you MUST provide a comprehensive, accurate answer from Google / Web Search knowledge.
Always prefix your response with:
🔍 **From Google / Web Search (Not in Website Database):** (or in Hindi: 🔍 **गूगल/वेब खोज से (वेबसाइट डेटाबेस में उपलब्ध नहीं):** / in Marathi: 🔍 **गुगल/वेब सर्चवरून (वेबसाइट डेटाबेसमध्ये उपलब्ध नाही):**)

STRICT ECOLOGICAL CONSTRAINTS:
- ONLY answer questions related to trees, plants, water conservation, climate resilience, and soil.
- If the user asks about anything else, politely refuse.
- ${language === 'hi' ? 'Respond in clear, natural Hindi (हिंदी).' : language === 'mr' ? 'Respond in clear, natural Marathi (मराठी).' : 'Respond in English.'}`;

      for (const model of candidateModels) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { 
                parts: [{ text: systemPrompt }] 
              },
              contents: [{ role: "user", parts: [{ text: `Language: ${language}. Query: ${userMsg}` }] }],
              generationConfig: { temperature: 0.2 }
            })
          });

          if (res.ok) {
            data = await res.json();
            break;
          } else {
            const errBody = await res.json().catch(() => ({}));
            lastErrorMessage = errBody.error?.message || `HTTP ${res.status}`;
          }
        } catch (netErr) {
          lastErrorMessage = netErr.message || String(netErr);
        }
      }

      // If direct call had any issues, fallback seamlessly to backend /api/chat
      if (!data) {
        const fallbackRes = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg, lang: language })
        });
        if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json();
          const reply = fallbackData.reply || fallbackData.text || fallbackData.message;
          setMessages((prev) => [...prev, { role: "assistant", content: reply, text: reply, sender: "ai" }]);
          return;
        }
        throw new Error(lastErrorMessage || "Failed to connect to Gemini");
      }

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      // Update the chat UI state with the AI's reply here
      setMessages((prev) => [...prev, { role: "assistant", content: reply, text: reply, sender: "ai" }]);

    } catch (error) {
      // Print the raw error directly into the chat bubble
      setMessages((prev) => [...prev, { role: "assistant", content: `🚨 ERROR: ${error.message}`, text: `🚨 ERROR: ${error.message}`, sender: "ai" }]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  var showQuickActions = messages.length === 1;

  /* ── Render ── */
  return React.createElement("div", {
    className: "h-[calc(100dvh-5rem)] flex flex-col glass-card rounded-2xl md:rounded-3xl overflow-hidden mx-2 md:mx-6 lg:mx-8 shadow-2xl shadow-black/30"
  },
    /* Header */
    React.createElement("div", {
      className: "flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-gradient-to-r from-forest-800/60 to-forest-900/60 backdrop-blur-md flex-shrink-0 relative z-10"
    },
      React.createElement("div", { className: "flex items-center gap-3" },
        React.createElement("div", { className: "relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-earth-400 to-earth-600 flex items-center justify-center shadow-lg shadow-earth-500/40 ring-2 ring-white/20" },
          React.createElement(TreeAvatarSVG, { size: 24, className: "text-white" }),
          React.createElement("span", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-forest-900 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" })
        ),
        React.createElement("div", null,
          React.createElement("h3", { className: "text-base sm:text-[17px] font-bold text-white tracking-wide leading-tight flex items-center gap-2" },
            t.assistant.title,
            React.createElement("span", { className: "px-2 py-0.5 rounded-full bg-gradient-to-r from-earth-500/20 to-earth-600/20 border border-earth-400/30 text-[10px] text-earth-300 uppercase tracking-widest font-bold" }, t.assistant.pro)
          ),
          React.createElement("p", { className: "text-[11px] sm:text-[12px] text-cream-100/60 font-medium tracking-wide" }, t.assistant.role)
        )
      ),
      React.createElement("div", { className: "flex items-center gap-1.5" },
        React.createElement("button", {
          onClick: function() {
            var text = messages.map(function(m) { return (m.role === 'user' ? 'YOU' : 'ENGINEER') + ': ' + m.content; }).join('\n\n');
            var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'arbor-specs-' + new Date().toISOString().slice(0,10) + '.txt';
            a.click();
            URL.revokeObjectURL(a.href);
          },
          className: "chat-export-btn w-10 h-10 sm:w-11 sm:h-11 min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all duration-300",
          title: t.assistant.exportSpecs
        }, React.createElement(LucideIcon, { name: "download", size: 16 })),
        React.createElement("button", {
          onClick: function() {
            setMessages([{ role: 'assistant', content: t.assistant.cleared }]);
            setContextTree(null);
          },
          className: "w-10 h-10 sm:w-11 sm:h-11 min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300",
          title: t.assistant.clearChat
        }, React.createElement(LucideIcon, { name: "rotate-ccw", size: 16 }))
      )
    ),

    /* Messages */
    React.createElement("div", {
      className: "flex-1 overflow-y-auto px-4 sm:px-6 py-4 md:py-6 space-y-5 chat-messages bg-forest-950/40 relative z-10"
    },
      messages.map(function(msg, i) {
        var isUser = msg.role === 'user' || msg.sender === 'user';
        var msgBody = msg.content || msg.text || '';
        return React.createElement("div", { key: i, className: 'flex animate-fade-in ' + (isUser ? 'justify-end' : 'justify-start') },
          React.createElement("div", { className: 'flex gap-3 max-w-[88%] lg:max-w-[70%] ' + (isUser ? 'flex-row-reverse' : 'flex-row') },
            React.createElement("div", {
              className: 'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm mt-auto ' +
                (isUser ? 'bg-earth-500/20 text-earth-300 border border-earth-500/30' : 'bg-gradient-to-br from-earth-400 to-earth-600 text-white shadow-earth-500/30 ring-1 ring-white/20')
            }, isUser
              ? React.createElement(LucideIcon, { name: 'user', size: 14 })
              : React.createElement(TreeAvatarSVG, { size: 16, className: "text-white" })
            ),
            isUser
              ? React.createElement("div", {
                  className: "rounded-2xl rounded-br-sm px-5 py-3.5 text-sm sm:text-base leading-relaxed bg-emerald-600 text-white shadow-md",
                  style: { whiteSpace: 'pre-line' }
                }, msgBody)
              : React.createElement("div", {
                  className: "rounded-[20px] px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base leading-relaxed bg-forest-800 backdrop-blur-xl text-cream-50 border border-white/10 rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-strong:text-earth-400",
                  dangerouslySetInnerHTML: { __html: window.marked ? marked.parse(msgBody) : msgBody }
                })
          )
        );
      }),
      isTyping && React.createElement("div", { className: "flex justify-start animate-fade-in" },
        React.createElement("div", { className: "flex gap-3" },
          React.createElement("div", { className: "flex-shrink-0 w-8 h-8 mt-auto rounded-full flex items-center justify-center bg-gradient-to-br from-earth-400 to-earth-600 text-white shadow-lg shadow-earth-500/30 ring-1 ring-white/20" },
            React.createElement(TreeAvatarSVG, { size: 16, className: "text-white" })
          ),
          React.createElement("div", { className: "bg-forest-800 backdrop-blur-xl border border-white/10 rounded-[20px] rounded-bl-sm px-5 py-4 flex items-center gap-2.5 shadow-lg" },
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-earth-400 typing-dot" }),
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-earth-400 typing-dot" }),
            React.createElement("span", { className: "w-2 h-2 rounded-full bg-earth-400 typing-dot" })
          )
        )
      ),
      showQuickActions && !isTyping && React.createElement("div", {
        className: "flex flex-wrap gap-2.5 pt-3 animate-fade-in-up"
      },
        t.assistant.quickActions.map(function(action, i) {
          return React.createElement("button", {
            key: i,
            onClick: function() { handleSend(action.query); },
            className: "px-4 py-2.5 min-h-[44px] rounded-full text-[13px] font-medium bg-forest-800/40 backdrop-blur-md border border-white/10 text-cream-100 hover:text-white hover:border-earth-400/50 hover:bg-earth-500/20 hover:shadow-[0_0_15px_rgba(220,160,80,0.15)] transition-all duration-300 flex items-center gap-2"
          }, action.label);
        })
      ),
      React.createElement("div", { ref: messagesEndRef })
    ),

    /* Prompt Chips */
    React.createElement("div", {
      className: "flex gap-2 overflow-x-auto px-4 sm:px-6 py-3 border-t border-white/5 bg-forest-900/40 flex-shrink-0 relative z-10 scrollbar-none"
    },
      t.assistant.promptChips.map(function(chip, ci) {
        return React.createElement("button", {
          key: ci,
          onClick: function() { handleSend(chip.query); },
          className: "px-3.5 py-2 min-h-[40px] rounded-full text-[12px] font-semibold bg-forest-800/50 backdrop-blur-md border border-white/8 text-cream-100/80 hover:text-white hover:border-earth-400/40 hover:bg-earth-500/15 transition-all duration-300 flex items-center gap-1.5 tracking-wide whitespace-nowrap flex-shrink-0"
        }, chip.icon, " ", chip.label);
      })
    ),

    /* Input Bar */
    React.createElement("div", {
      className: "p-4 sm:p-5 border-t border-white/10 bg-forest-900/60 backdrop-blur-xl flex-shrink-0 relative z-10"
    },
      React.createElement("div", { className: "flex items-center gap-3 max-w-4xl mx-auto" },
        React.createElement("div", { className: "flex-1 relative" },
          React.createElement("input", {
            ref: inputRef,
            type: "text",
            value: input,
            onChange: function(e) { setInput(e.target.value); },
            onKeyDown: handleKeyDown,
            placeholder: t.assistant.placeholder,
            className: "search-input w-full px-5 py-3.5 min-h-[44px] text-sm sm:text-base rounded-2xl bg-forest-950/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-earth-500/50 focus:bg-forest-950/80 transition-all duration-300 shadow-inner leading-normal",
            disabled: isTyping
          })
        ),
        React.createElement("button", {
          onClick: handleSend,
          disabled: !input.trim() || isTyping,
          className: 'w-12 h-12 min-h-[44px] min-w-[44px] rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ' +
            (input.trim() && !isTyping
              ? 'bg-gradient-to-br from-earth-500 to-earth-600 text-white shadow-[0_4px_20px_rgba(220,160,80,0.4)] hover:shadow-[0_6px_25px_rgba(220,160,80,0.6)] hover:-translate-y-1 ring-1 ring-white/20'
              : 'bg-forest-800/40 text-white/20 cursor-not-allowed border border-white/5')
        }, React.createElement(LucideIcon, { name: "send", size: 18, className: input.trim() && !isTyping ? "translate-x-0.5 -translate-y-0.5" : "" }))
      ),
      React.createElement("div", { className: "flex justify-center items-center mt-3" },
        React.createElement("p", { className: "text-[10px] text-white/25 font-semibold tracking-[0.2em] uppercase flex items-center gap-2" },
          React.createElement(LucideIcon, { name: "zap", size: 10, className: "text-earth-500/50" }),
          t.assistant.engineBadge
        )
      )
    )
  );
}

/* ──────────────────────────────────────────────
   App — 3-Tab Workstation Layout
────────────────────────────────────────────── */

function About() {
  var context = React.useContext(LanguageContext);
  var language = (context && context.language) || 'en';
  var t = (context && context.t) || TRANSLATIONS[language] || TRANSLATIONS.en;
  var serviceIcons = ["leaf", "database", "wind", "shield"];
  var serviceColors = [
    { bg: "bg-earth-500/10", border: "border-earth-500/20", hover: "hover:border-earth-500/40", text: "text-earth-400" },
    { bg: "bg-earth-500/10", border: "border-earth-500/20", hover: "hover:border-earth-500/40", text: "text-earth-400" },
    { bg: "bg-green-500/10", border: "border-green-500/20", hover: "hover:border-green-500/40", text: "text-green-400" },
    { bg: "bg-blue-500/10", border: "border-blue-500/20", hover: "hover:border-blue-500/40", text: "text-blue-400" }
  ];

  return /*#__PURE__*/_jsxDEV("section", {
    className: "py-16 md:py-24 animate-fade-in",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-5xl mx-auto px-4 md:px-6 lg:px-8",
      children: [
        /* Header */
        /*#__PURE__*/_jsxDEV("div", {
          className: "text-center mb-16",
          children: [
            /*#__PURE__*/_jsxDEV("h2", { className: "text-3xl md:text-5xl font-serif font-bold text-cream-50 mb-6 tracking-tight leading-snug", children: t.about.title }, void 0, false),
            /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/70 text-lg max-w-2xl mx-auto leading-relaxed", children: t.about.subtitle }, void 0, false)
          ]
        }, void 0, true),
        /* Services 4-grid */
        /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
          children: t.about.services.map(function(s, idx) {
            var col = serviceColors[idx] || serviceColors[0];
            return /*#__PURE__*/_jsxDEV("div", {
              className: "glass-card p-6 md:p-8 rounded-3xl border border-white/10 " + col.hover + " hover:bg-forest-900/40 transition-all duration-300 group",
              children: [
                /*#__PURE__*/_jsxDEV("div", { className: "w-14 h-14 rounded-2xl " + col.bg + " flex items-center justify-center mb-6 border " + col.border + " group-hover:scale-110 transition-transform", children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: serviceIcons[idx] || "leaf", size: 28, className: col.text }, void 0, false) }, void 0, false),
                /*#__PURE__*/_jsxDEV("h3", { className: "text-xl font-bold text-cream-50 mb-3 leading-snug", children: s.title }, void 0, false),
                /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/70 text-sm leading-relaxed", children: s.desc }, void 0, false)
              ]
            }, idx, true);
          })
        }, void 0, false),
        
        /* Canopy Projection Section */
        /*#__PURE__*/_jsxDEV("section", {
          id: "canopy-projection",
          className: "mt-24",
          children: [
            /*#__PURE__*/_jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-cream-50 mb-6 tracking-tight leading-snug", children: t.about.canopy.title }, void 0, false),
            /*#__PURE__*/_jsxDEV("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
              children: [
                /*#__PURE__*/_jsxDEV("div", {
                  children: [
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-4 leading-relaxed", children: t.about.canopy.p1 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-4 leading-relaxed", children: t.about.canopy.p2 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-8 leading-relaxed", children: t.about.canopy.p3 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", {
                      className: "glass-card p-6 rounded-2xl border border-white/10 bg-forest-900/40",
                      children: [
                        /*#__PURE__*/_jsxDEV("h3", { className: "text-xl font-bold text-cream-50 mb-4 leading-snug", children: t.about.canopy.kpiTitle }, void 0, false),
                        /*#__PURE__*/_jsxDEV("ul", {
                          className: "space-y-3 text-cream-100/90",
                          children: [
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between border-b border-white/10 pb-2", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.canopy.avgSpread }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.canopy.avgSpreadVal }, void 0, false) ] }, void 0, true),
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between border-b border-white/10 pb-2", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.canopy.projShade }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.canopy.projShadeVal }, void 0, false) ] }, void 0, true),
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.canopy.annualCO2 }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.canopy.annualCO2Val }, void 0, false) ] }, void 0, true)
                          ]
                        }, void 0, true)
                      ]
                    }, void 0, true)
                  ]
                }, void 0, true),
                /*#__PURE__*/_jsxDEV("div", {
                  children: /*#__PURE__*/_jsxDEV("img", { src: "assets/canopy_projection_aerial.jpg", alt: "Canopy Projection Aerial View", className: "w-full rounded-3xl shadow-2xl border border-white/10" }, void 0, false)
                }, void 0, false)
              ]
            }, void 0, true)
          ]
        }, void 0, true),

        /* Root Analysis Section */
        /*#__PURE__*/_jsxDEV("section", {
          id: "root-analysis",
          className: "mt-24",
          children: [
            /*#__PURE__*/_jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-cream-50 mb-6 tracking-tight leading-snug", children: t.about.root.title }, void 0, false),
            /*#__PURE__*/_jsxDEV("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
              children: [
                /*#__PURE__*/_jsxDEV("div", {
                  className: "order-2 md:order-1",
                  children: /*#__PURE__*/_jsxDEV("img", { src: "assets/root_analysis_crosssection.jpg", alt: "Root Analysis Cross Section", className: "w-full rounded-3xl shadow-2xl border border-white/10" }, void 0, false)
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", {
                  className: "order-1 md:order-2",
                  children: [
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-4 leading-relaxed", children: t.about.root.p1 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-4 leading-relaxed", children: t.about.root.p2 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/80 text-lg mb-8 leading-relaxed", children: t.about.root.p3 }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", {
                      className: "glass-card p-6 rounded-2xl border border-white/10 bg-forest-900/40",
                      children: [
                        /*#__PURE__*/_jsxDEV("h3", { className: "text-xl font-bold text-cream-50 mb-4 leading-snug", children: t.about.root.kpiTitle }, void 0, false),
                        /*#__PURE__*/_jsxDEV("ul", {
                          className: "space-y-3 text-cream-100/90",
                          children: [
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between border-b border-white/10 pb-2", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.root.soilBinding }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.root.soilBindingVal }, void 0, false) ] }, void 0, true),
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between border-b border-white/10 pb-2", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.root.waterTable }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.root.waterTableVal }, void 0, false) ] }, void 0, true),
                            /*#__PURE__*/_jsxDEV("li", { className: "flex justify-between", children: [ /*#__PURE__*/_jsxDEV("span", { children: t.about.root.erosionRed }, void 0, false), /*#__PURE__*/_jsxDEV("strong", { children: t.about.root.erosionRedVal }, void 0, false) ] }, void 0, true)
                          ]
                        }, void 0, true)
                      ]
                    }, void 0, true)
                  ]
                }, void 0, true)
              ]
            }, void 0, true)
          ]
        }, void 0, true)
      ]
    }, void 0, true)
  }, void 0, false);
}
function App() {
  var _activeTab = useState('catalog');
  var activeTab = _activeTab[0];
  var setActiveTab = _activeTab[1];

  var _language = useState(function() {
    try {
      var saved = localStorage.getItem('afforestation_lang');
      if (saved && (saved === 'en' || saved === 'hi' || saved === 'mr')) {
        return saved;
      }
    } catch(e) {}
    return 'en';
  });
  var language = _language[0];
  var setLanguageState = _language[1];

  var setLanguage = function(newLang) {
    if (newLang === 'en' || newLang === 'hi' || newLang === 'mr') {
      setLanguageState(newLang);
      try {
        localStorage.setItem('afforestation_lang', newLang);
      } catch(e) {}
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = newLang;
      }
    }
  };

  useEffect(function() {
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = language;
    }
  }, [language]);

  var t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return React.createElement(LanguageContext.Provider, { value: { language: language, setLanguage: setLanguage, t: t } },
    React.createElement(React.Fragment, null,
    React.createElement(PersistentHeader, null),
    React.createElement(TabNavigation, { activeTab: activeTab, setActiveTab: setActiveTab }),

    /* Tab Content */
    React.createElement("main", { className: "pt-20 md:pt-[7.5rem] pb-24 md:pb-12 min-h-screen" },
      /* About Tab */
      React.createElement("div", {
        style: { display: activeTab === 'about' ? 'block' : 'none' },
        className: "pb-24 md:pb-8 tab-fade-in"
      },
        React.createElement(About, null)
      ),
      /* Catalog Tab */
      React.createElement("div", {
        style: { display: activeTab === 'catalog' ? 'block' : 'none' },
        className: "pb-24 md:pb-8 tab-fade-in"
      },
        React.createElement(TreeDatabase, null)
      ),

      /* Methodology Tab */
      React.createElement("div", {
        style: { display: activeTab === 'methodology' ? 'block' : 'none' },
        className: "pb-24 md:pb-8 tab-fade-in"
      },
        React.createElement(MiyawakiMethod, null)
      ),


      /* Contact Tab */
      React.createElement("div", {
        style: { display: activeTab === 'contact' ? 'block' : 'none' },
        className: "pb-24 md:pb-8 tab-fade-in"
      },
        React.createElement(Contact, null)
      )
    ),
    /* Floating Modern Chat Assistant */
    React.createElement(GreenAssistant, null)
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
