const ICON_PATHS = {
  'more-vertical': [{"circle": {"cx": "12", "cy": "12", "r": "1"}}, {"circle": {"cx": "12", "cy": "5", "r": "1"}}, {"circle": {"cx": "12", "cy": "19", "r": "1"}}],
  'info': [{"d": "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}, {"d": "M12 16v-4"}, {"d": "M12 8h.01"}],
  'tree-pine': [{ d: 'M17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h10z' }, { d: 'M12 2l4 7H8l4-7z' }, { d: 'M15 9l3 5H6l3-5h6z' }, { d: 'M12 22v-3' }],
  'menu': [{ d: 'M4 12h16' }, { d: 'M4 6h16' }, { d: 'M4 18h16' }],
  'x': [{ d: 'M18 6L6 18' }, { d: 'M6 6l12 12' }],
  'database': [{ d: 'M12 8c-3.87 0-7-1.12-7-2.5S8.13 3 12 3s7 1.12 7 2.5S15.87 8 12 8z', fill: 'none' }, { d: 'M19 5.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4' }, { d: 'M19 9.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4' }, { d: 'M19 13.5v4c0 1.38-3.13 2.5-7 2.5s-7-1.12-7-2.5v-4' }],
  'arrow-right': [{ d: 'M5 12h14' }, { d: 'M12 5l7 7-7 7' }],
  'calendar': [{ d: 'M8 2v4', tag: 'line' }, { d: 'M16 2v4', tag: 'line' }, { d: 'M3 10h18' }, { d: 'M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5' }],
  'layers': [{ d: 'M12 2L2 7l10 5 10-5-10-5z' }, { d: 'M2 17l10 5 10-5' }, { d: 'M2 12l10 5 10-5' }],
  'map': [{ d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z' }, { d: 'M15 5.764v15' }, { d: 'M9 3.236v15' }],
  'trees': [{ d: 'M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0z' }, { d: 'M7 16v6' }, { d: 'M13 19v3' }, { d: 'M16 13v.2A3 3 0 0 1 14.9 19H11a3 3 0 0 1-1-5.8V13a3 3 0 0 1 6 0z' }],
  'thermometer': [{ d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z' }],
  'map-pin': [{ d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' }, { d: 'M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', fill: 'none' }],
  'heart': [{ d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }],
  'snowflake': [{ d: 'M2 12h20' }, { d: 'M12 2v20' }, { d: 'M20 16l-4-4 4-4' }, { d: 'M4 8l4 4-4 4' }, { d: 'M16 4l-4 4-4-4' }, { d: 'M8 20l4-4 4 4' }],
  'leaf': [{ d: 'M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.4 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z' }, { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' }],
  'send': [{ d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' }, { d: 'M21.854 2.147l-10.94 10.939' }],
  'phone': [{ d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }],
  'sparkles': [{ d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' }, { d: 'M20 3v4' }, { d: 'M22 5h-4' }, { d: 'M4 17v2' }, { d: 'M5 18H3' }],
  'check': [{ d: 'M20 6L9 17l-5-5' }],
  'search': [{ d: 'M19 11A8 8 0 1 1 3 11a8 8 0 0 1 16 0z', fill: 'none' }, { d: 'M21 21l-4.3-4.3' }],
  'bot': [{ d: 'M12 8V4H8' }, { d: 'M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z' }, { d: 'M2 14h2' }, { d: 'M20 14h2' }, { d: 'M15 13v2' }, { d: 'M9 13v2' }],
  'message-circle': [{ d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' }],
  'chevron-down': [{ d: 'M6 9l6 6 6-6' }],
  'user': [{ d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }, { d: 'M8 8a4 4 0 0 1 8 0a4 4 0 0 1-8 0z' }],
  'users': [{ d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }, { d: 'M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' }, { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }, { d: 'M16 3.13a4 4 0 0 1 0 7.75' }],
  'wind': [{"d": "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}],
  'droplets': [{"d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 2.9 7 2.9s-2.29 4.09-3.29 5.06C2.57 8.9 2 10 2 11.16c0 2.2 1.8 4.05 4 4.05z"}, {"d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}],
  'trending-up': [{"d": "M23 6l-9.5 9.5-5-5L1 18"}, {"d": "M17 6h6v6"}],
  'arrow-up': [{"d": "M12 19V5"}, {"d": "M5 12l7-7 7 7"}],
  'cloud': [{"d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],
  'shield': [{"d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}],
  'home': [{"d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}, {"d": "M9 22V12h6v10"}]
};

const LanguageContext = React.createContext();

const TRANSLATIONS = {
  en: { navServices: 'Services', navMethod: 'Methodology', navData: 'Tree Data', navContact: 'Contact', heroTitle: 'Designing with Nature', heroSubtitle: 'Arbor Dynamics helps land developers and construction planners design with nature.', btnStart: 'Start Planning', btnLearn: 'Learn More', searchPlaceholder: 'Search by tree name...', selectedTree: 'Selected Tree' },
  hi: { navServices: 'सेवाएं', navMethod: 'कार्यप्रणाली', navData: 'वृक्ष डेटा', navContact: 'संपर्क', heroTitle: 'प्रकृति के साथ डिजाइनिंग', heroSubtitle: 'आर्बर डायनेमिक्स भूमि विकासकर्ताओं को प्रकृति के साथ डिजाइन करने में मदद करता है।', btnStart: 'योजना शुरू करें', btnLearn: 'अधिक जानें', searchPlaceholder: 'पेड़ के नाम से खोजें...', selectedTree: 'चयनित पेड़' },
  mr: { navServices: 'सेवा', navMethod: 'पद्धती', navData: 'वृक्ष माहिती', navContact: 'संपर्क', heroTitle: 'निसर्गासोबत डिझायनिंग', heroSubtitle: 'आर्बर डायनॅमिक्स जमीन विकासकांना निसर्गासोबत डिझाइन करण्यात मदत करते.', btnStart: 'नियोजन सुरू करा', btnLearn: 'अधिक जाणून घ्या', searchPlaceholder: 'झाडाच्या नावाने शोधा...', selectedTree: 'निवडलेले झाड' }
};

let language = 'en';
const TREE_DATA = [{
  rank: 1, name: "Indian siris tree", hindi: "Siris (सिरिस)", marathi: 'Shirish (शिरीष)', img: './assets/tree-1.jpeg', c: 1029.56, o: 2744.81, height: '15-25 m', canopy: '12-18 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 2, name: "Tamarind", hindi: "Imli (इमली)", marathi: 'Chinch (चिंच)', img: './assets/tree-2.jpeg', c: 808.79, o: 2156.23, height: '20-25 m', canopy: '12-18 m', safeBldg: '10-12 m', safeRoad: '6-8 m', water: 'Low', growth: 'Slow'
}, {
  rank: 3, name: "May flower tree", hindi: "Gulmohar (गुलमोहर)", marathi: 'Gulmohar (गुलमोहर)', img: './assets/tree-3.jpeg', c: 385.26, o: 1027.11, height: '10-15 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 4, name: "Yellow flame tree", hindi: "Peela Gulmohar (पीला गुलमोहर)", marathi: 'Sonmohar (सोनमोहर)', img: './assets/tree-4.jpeg', c: 377.16, o: 1005.52, height: '15-20 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 5, name: "Sacred fig", hindi: "Peepal (पीपल)", marathi: 'Pimpal (पिंपळ)', img: './assets/tree-5.jpeg', c: 339.82, o: 905.96, height: '20-30 m', canopy: '15-25 m', safeBldg: '15-20 m', safeRoad: '8-10 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 6, name: "River tamarind", hindi: "Subabul (सुबबूल)", marathi: 'Subabhul (सुबाभूळ)', img: './assets/tree-6.jpeg', c: 313.76, o: 836.47, height: '10-15 m', canopy: '5-8 m', safeBldg: '5-6 m', safeRoad: '3-4 m', water: 'Low', growth: 'Very Fast'
}, {
  rank: 7, name: "Kanak Champa", hindi: "Kanak Champa (कनक चम्पा)", marathi: 'Kanak Champa (मुचकुंद)', img: './assets/tree-7.jpeg', c: 310.08, o: 826.67, height: '15-20 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 8, name: "Neem", hindi: "Neem (नीम)", marathi: 'Kadulimb (कडुनिंब)', img: './assets/tree-8.jpeg', c: 301.67, o: 804.25, height: '15-20 m', canopy: '10-15 m', safeBldg: '6-8 m', safeRoad: '3-4 m', water: 'Low', growth: 'Medium-Fast'
}, {
  rank: 9, name: "Indian cork tree", img: './assets/tree-9.jpeg', hindi: "Neem Chameli (नीम चमेली)", marathi: 'Buch (बुच)', c: 211.29, o: 563.29, height: '15-20 m', canopy: '8-10 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 10, name: "Gooseberry", img: './assets/tree-10.jpeg', hindi: "Amla (आंवलऎ)", marathi: 'Amla (आवळा)', c: 206.10, o: 549.46, height: '8-12 m', canopy: '5-8 m', safeBldg: '4-5 m', safeRoad: '3 m', water: 'Low', growth: 'Medium'
}, {
  rank: 11, name: "Earleaf acacia", img: './assets/tree-11.jpeg', hindi: "Pahari Babul (पहाड़ी बबूल)", marathi: 'Australi Babhul (ऑस्ट्रेलियन बाभूळ)', c: 204.44, o: 545.04, height: '15-30 m', canopy: '8-12 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Low', growth: 'Fast'
}, {
  rank: 12, name: "Cluster fig", img: './assets/tree-12.jpeg', hindi: "Gular (गूलर)", marathi: 'Umber (उंबर)', c: 195.29, o: 520.66, height: '15-20 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 13, name: "Jamun tree", img: './assets/tree-13.jpeg', hindi: "Jamun (जामून)", marathi: 'Jambhul (जांभूळ)', c: 190.59, o: 508.12, height: '15-20 m', canopy: '10-15 m', safeBldg: '6-8 m', safeRoad: '4-5 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 14, name: "Golden shower", img: './assets/tree-14.jpeg', hindi: "Amaltas (अमलतास)", marathi: 'Bahawa (बहावा)', c: 188.51, o: 502.56, height: '10-15 m', canopy: '6-8 m', safeBldg: '5-6 m', safeRoad: '3-4 m', water: 'Low-Medium', growth: 'Medium'
}, {
  rank: 15, name: "Weeping fig", img: './assets/tree-15.jpeg', hindi: "Chilkan (चिलकन)", marathi: 'Nandruk (नांदृक)', c: 178.05, o: 474.69, height: '15-20 m', canopy: '15-20 m', safeBldg: '15-20 m', safeRoad: '8-10 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 16, name: "Teak", img: './assets/tree-16.jpeg', hindi: "Sagwan (सागवान)", marathi: 'Sagwan (सागवान)', c: 149.42, o: 398.36, height: '20-30 m', canopy: '8-12 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 17, name: "Pungam tree", img: './assets/tree-17.jpeg', hindi: "Karanj (करंज)", marathi: 'Karanj (करंज)', c: 140.59, o: 374.81, height: '10-15 m', canopy: '8-10 m', safeBldg: '5-6 m', safeRoad: '3-4 m', water: 'Low', growth: 'Fast'
}, {
  rank: 18, name: "Spanish Cherry", img: './assets/tree-18.jpeg', hindi: "Maulsari (मौलसिरी)", marathi: 'Bakul (बकुळ)', c: 125.43, o: 334.38, height: '10-15 m', canopy: '8-10 m', safeBldg: '6-8 m', safeRoad: '4-5 m', water: 'Medium', growth: 'Slow'
}, {
  rank: 19, name: "Paradise tree", img: './assets/tree-19.jpeg', hindi: "Lakshmi Taru (लक्ष्मी तरु)", marathi: 'Lakshmi Taru (लक्ष्मीतरू)', c: 119.71, o: 319.15, height: '12-15 m', canopy: '8-10 m', safeBldg: '6-8 m', safeRoad: '4-5 m', water: 'Low', growth: 'Fast'
}, {
  rank: 20, name: "Wild almond tree", img: './assets/tree-20.jpeg', hindi: "Jangli Badam (जंगली बादाम)", marathi: 'Jangli Badam (रानबदाम)', c: 116.82, o: 311.44, height: '20-30 m', canopy: '10-15 m', safeBldg: '10-12 m', safeRoad: '6-8 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 21, name: "Wood apple", img: './assets/tree-21.jpeg', hindi: "Kaitha (कैथा)", marathi: 'Kavath (कवठ)', c: 106.71, o: 284.49, height: '8-10 m', canopy: '5-8 m', safeBldg: '5-6 m', safeRoad: '3-4 m', water: 'Low', growth: 'Slow'
}, {
  rank: 22, name: "Mulberry tree", img: './assets/tree-22.jpeg', hindi: "Shahtoot (शहतूत)", marathi: 'Tuti (तुती)', c: 94.15, o: 251.00, height: '10-15 m', canopy: '8-10 m', safeBldg: '6-8 m', safeRoad: '4-5 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 23, name: "Guava tree", img: './assets/tree-23.jpeg', hindi: "Amrud (अमरूद)", marathi: 'Peru (पेरू)', c: 85.34, o: 227.53, height: '5-8 m', canopy: '4-6 m', safeBldg: '3-4 m', safeRoad: '2-3 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 24, name: "Casuarina", img: './assets/tree-24.jpeg', hindi: "Jhau (झाऊ)", marathi: 'Suru (सुरू)', c: 80.53, o: 214.70, height: '15-25 m', canopy: '4-6 m', safeBldg: '6-8 m', safeRoad: '4-5 m', water: 'Low', growth: 'Fast'
}, {
  rank: 25, name: "Bibhitaki tree", img: './assets/tree-25.jpeg', hindi: "Baheda (बहेड़ा)", marathi: 'Behada (बेहडा)', c: 76.60, o: 204.21, height: '20-30 m', canopy: '12-18 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 26, name: "Purple bauhinia", img: './assets/tree-26.jpeg', hindi: "Kachnar (कचनार)", marathi: 'Rakta Kanchan (रक्त कांचन)', c: 70.08, o: 186.83, height: '8-10 m', canopy: '6-8 m', safeBldg: '4-5 m', safeRoad: '3-4 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 27, name: "Butter tree", img: './assets/tree-27.jpeg', hindi: "Mahua (महुआ)", marathi: 'Moh (मोह)', c: 69.43, o: 185.11, height: '15-20 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Low-Medium', growth: 'Slow-Medium'
}, {
  rank: 28, name: "Indian mulberry", img: './assets/tree-28.jpeg', hindi: "Aal (आल)", marathi: 'Noni (नोनो)', c: 68.81, o: 183.44, height: '4-8 m', canopy: '3-5 m', safeBldg: '3-4 m', safeRoad: '2-3 m', water: 'High', growth: 'Medium'
}, {
  rank: 29, name: "Geranium tree", img: './assets/tree-29.jpeg', hindi: "Lal Lasora (लाल लसोड़ा)", marathi: 'Kanchan (कांचन)', c: 57.53, o: 153.38, height: '6-8 m', canopy: '4-6 m', safeBldg: '3-4 m', safeRoad: '2-3 m', water: 'Low', growth: 'Medium'
}, {
  rank: 30, name: "Yellow bells", img: './assets/tree-30.jpeg', hindi: "Pili Chameli (पीली चमेली)", marathi: 'Tecoma (पिवळी कण्हेर)', c: 50.19, o: 133.80, height: '4-6 m', canopy: '3-4 m', safeBldg: '2-3 m', safeRoad: '2-3 m', water: 'Low', growth: 'Fast'
}, {
  rank: 31, name: "Mango tree", img: './assets/tree-31.jpeg', hindi: "Aam (आम)", marathi: 'Amba (आंबा)', c: 46.31, o: 123.45, height: '15-30 m', canopy: '10-20 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 32, name: "Indian almond", img: './assets/tree-32.jpeg', hindi: "Desi Badam (देसी बादाम)", marathi: 'Deshi Badam (देशी बदाम)', c: 38.34, o: 102.21, height: '15-25 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Fast'
}, {
  rank: 33, name: "False Ashoka", img: './assets/tree-33.jpeg', hindi: "Ashoka (अशोक)", marathi: 'Ashoka (अशोक)', c: 29.01, o: 77.34, height: '8-12 m', canopy: '3-5 m', safeBldg: '3-4 m', safeRoad: '2-3 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 34, name: "Curry leaf", img: './assets/tree-34.jpeg', hindi: "Kadi Patta (कड़ी पत्ता)", marathi: 'Kadi Patta (कढीपत्ता)', c: 26.71, o: 71.20, height: '4-6 m', canopy: '3-4 m', safeBldg: '2-3 m', safeRoad: '2 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 35, name: "Quick stick", img: './assets/tree-35.jpeg', hindi: "Giripushpa (गिरिपुष्प)", marathi: 'Gliricidia (उंदीरमारी)', c: 21.18, o: 56.46, height: '10-12 m', canopy: '5-8 m', safeBldg: '4-5 m', safeRoad: '3-4 m', water: 'Low', growth: 'Very Fast'
}, {
  rank: 36, name: "Arjuna tree", img: './assets/tree-36.jpeg', hindi: "Arjun (अर्जुन)", marathi: 'Arjun (अर्जुन)', c: 12.75, o: 33.99, height: '20-25 m', canopy: '10-15 m', safeBldg: '8-10 m', safeRoad: '5-6 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 37, name: "Parijat", img: './assets/tree-37.jpeg', hindi: "Harsingar (हरसिंगार)", marathi: 'Parijatak (पारिजातक)', c: 5.85, o: 15.60, height: '3-5 m', canopy: '3-4 m', safeBldg: '2-3 m', safeRoad: '2 m', water: 'Medium', growth: 'Medium'
}, {
  rank: 38, name: "Bamboo", img: './assets/tree-38.jpeg', hindi: "Bans (बांस)", marathi: 'Bambu (बांबू)', c: 5.80, o: 15.46, height: '8-20 m', canopy: '3-6 m', safeBldg: '5-6 m', safeRoad: '3-4 m', water: 'Med-High', growth: 'Very Fast'
}];

const _Fragment = React.Fragment;

// Fix: Prevent unhandled exceptions on null/undefined props
const _jsxDEV = function(type, props, key) {
  props = props || {};
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
        children: ["We help land developers and construction planners quantify how specific tree species affect their sites —  from canopy coverage and root spread to measurable temperature reduction —  so every build works ", /*#__PURE__*/_jsxDEV("em", {
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
  description: 'We map subterranean root zones against your site boundaries, utility lines, and foundation plans —  identifying risks and opportunities before a single shovel breaks ground.',
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
          I seem to be encountering an error. Can I try something else for you?