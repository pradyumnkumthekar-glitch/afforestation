const ICON_PATHS = {
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
};

const TREE_DATA = [{
  rank: 1,
  name: "Indian siris tree",
  hindi: "Siris (सिरिस)",
  img: './assets/tree-1.jpeg',
  c: 1029.56,
  o: 2744.81,
  height: '15-25 m',
  canopy: '12-18 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 2,
  name: "Tamarind",
  hindi: "Imli (इमली)",
  img: './assets/tree-2.jpeg',
  c: 808.79,
  o: 2156.23,
  height: '20-25 m',
  canopy: '12-18 m',
  safeBldg: '10-12 m',
  safeRoad: '6-8 m',
  water: 'Low',
  growth: 'Slow'
}, {
  rank: 3,
  name: "May flower tree",
  hindi: "Gulmohar (गुलमोहर)",
  img: './assets/tree-3.jpeg',
  c: 385.26,
  o: 1027.11,
  height: '10-15 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 4,
  name: "Yellow flame tree",
  hindi: "Peela Gulmohar (पीला गुलमोहर)",
  img: './assets/tree-4.jpeg',
  c: 377.16,
  o: 1005.52,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 5,
  name: "Sacred fig",
  hindi: "Peepal (पीपल)",
  img: './assets/tree-5.jpeg',
  c: 339.82,
  o: 905.96,
  height: '20-30 m',
  canopy: '15-25 m',
  safeBldg: '15-20 m',
  safeRoad: '8-10 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 6,
  name: "River tamarind",
  hindi: "Subabul (सुबबूल)",
  img: './assets/tree-6.jpeg',
  c: 313.76,
  o: 836.47,
  height: '10-15 m',
  canopy: '5-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Very Fast'
}, {
  rank: 7,
  name: "Kanak Champa",
  hindi: "Kanak Champa (कनक चम्पा)",
  img: './assets/tree-7.jpeg',
  c: 310.08,
  o: 826.67,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 8,
  name: "Neem",
  hindi: "Neem (नीम)",
  img: './assets/tree-8.jpeg',
  c: 301.67,
  o: 804.25,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '6-8 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Medium-Fast'
}, {
  rank: 9,
  name: "Indian cork tree",
  img: './assets/tree-9.jpeg',
  hindi: "Neem Chameli (नीम चमेली)",
  c: 211.29,
  o: 563.29,
  height: '15-20 m',
  canopy: '8-10 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 10,
  name: "Gooseberry",
  img: './assets/tree-10.jpeg',
  hindi: "Amla (आंवलऎ)",
  c: 206.10,
  o: 549.46,
  height: '8-12 m',
  canopy: '5-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3 m',
  water: 'Low',
  growth: 'Medium'
}, {
  rank: 11,
  name: "Earleaf acacia",
  img: './assets/tree-11.jpeg',
  hindi: "Pahari Babul (पहाड़ी बबूल)",
  c: 204.44,
  o: 545.04,
  height: '15-30 m',
  canopy: '8-12 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 12,
  name: "Cluster fig",
  img: './assets/tree-12.jpeg',
  hindi: "Gular (गूलर)",
  c: 195.29,
  o: 520.66,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 13,
  name: "Jamun tree",
  img: './assets/tree-13.jpeg',
  hindi: "Jamun (जामून)",
  c: 190.59,
  o: 508.12,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 14,
  name: "Golden shower",
  img: './assets/tree-14.jpeg',
  hindi: "Amaltas (अमलतास)",
  c: 188.51,
  o: 502.56,
  height: '10-15 m',
  canopy: '6-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low-Medium',
  growth: 'Medium'
}, {
  rank: 15,
  name: "Weeping fig",
  img: './assets/tree-15.jpeg',
  hindi: "Chilkan (चिलकन)",
  c: 178.05,
  o: 474.69,
  height: '15-20 m',
  canopy: '15-20 m',
  safeBldg: '15-20 m',
  safeRoad: '8-10 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 16,
  name: "Teak",
  img: './assets/tree-16.jpeg',
  hindi: "Sagwan (सागवान)",
  c: 149.42,
  o: 398.36,
  height: '20-30 m',
  canopy: '8-12 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 17,
  name: "Pungam tree",
  img: './assets/tree-17.jpeg',
  hindi: "Karanj (करंज)",
  c: 140.59,
  o: 374.81,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 18,
  name: "Spanish Cherry",
  img: './assets/tree-18.jpeg',
  hindi: "Maulsari (मौलसिरी)",
  c: 125.43,
  o: 334.38,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Slow'
}, {
  rank: 19,
  name: "Paradise tree",
  img: './assets/tree-19.jpeg',
  hindi: "Lakshmi Taru (लक्ष्मी तरु)",
  c: 119.71,
  o: 319.15,
  height: '12-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 20,
  name: "Wild almond tree",
  img: './assets/tree-20.jpeg',
  hindi: "Jangli Badam (जंगली बादाम)",
  c: 116.82,
  o: 311.44,
  height: '20-30 m',
  canopy: '10-15 m',
  safeBldg: '10-12 m',
  safeRoad: '6-8 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 21,
  name: "Wood apple",
  img: './assets/tree-21.jpeg',
  hindi: "Kaitha (कैथा)",
  c: 106.71,
  o: 284.49,
  height: '8-10 m',
  canopy: '5-8 m',
  safeBldg: '5-6 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Slow'
}, {
  rank: 22,
  name: "Mulberry tree",
  img: './assets/tree-22.jpeg',
  hindi: "Shahtoot (शहतूत)",
  c: 94.15,
  o: 251.00,
  height: '10-15 m',
  canopy: '8-10 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 23,
  name: "Guava tree",
  img: './assets/tree-23.jpeg',
  hindi: "Amrud (अमरूद)",
  c: 85.34,
  o: 227.53,
  height: '5-8 m',
  canopy: '4-6 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 24,
  name: "Casuarina",
  img: './assets/tree-24.jpeg',
  hindi: "Jhau (झाऊ)",
  c: 80.53,
  o: 214.70,
  height: '15-25 m',
  canopy: '4-6 m',
  safeBldg: '6-8 m',
  safeRoad: '4-5 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 25,
  name: "Bibhitaki tree",
  img: './assets/tree-25.jpeg',
  hindi: "Baheda (बहेड़ा)",
  c: 76.60,
  o: 204.21,
  height: '20-30 m',
  canopy: '12-18 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 26,
  name: "Purple bauhinia",
  img: './assets/tree-26.jpeg',
  hindi: "Kachnar (कचनार)",
  c: 70.08,
  o: 186.83,
  height: '8-10 m',
  canopy: '6-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3-4 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 27,
  name: "Butter tree",
  img: './assets/tree-27.jpeg',
  hindi: "Mahua (महुआ)",
  c: 69.43,
  o: 185.11,
  height: '15-20 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Low-Medium',
  growth: 'Slow-Medium'
}, {
  rank: 28,
  name: "Indian mulberry",
  img: './assets/tree-28.jpeg',
  hindi: "Aal (आल)",
  c: 68.81,
  o: 183.44,
  height: '4-8 m',
  canopy: '3-5 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'High',
  growth: 'Medium'
}, {
  rank: 29,
  name: "Geranium tree",
  img: './assets/tree-29.jpeg',
  hindi: "Lal Lasora (लाल लसोड़ा)",
  c: 57.53,
  o: 153.38,
  height: '6-8 m',
  canopy: '4-6 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Low',
  growth: 'Medium'
}, {
  rank: 30,
  name: "Yellow bells",
  img: './assets/tree-30.jpeg',
  hindi: "Pili Chameli (पीली चमेली)",
  c: 50.19,
  o: 133.80,
  height: '4-6 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2-3 m',
  water: 'Low',
  growth: 'Fast'
}, {
  rank: 31,
  name: "Mango tree",
  img: './assets/tree-31.jpeg',
  hindi: "Aam (आम)",
  c: 46.31,
  o: 123.45,
  height: '15-30 m',
  canopy: '10-20 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 32,
  name: "Indian almond",
  img: './assets/tree-32.jpeg',
  hindi: "Desi Badam (देसी बादाम)",
  c: 38.34,
  o: 102.21,
  height: '15-25 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Fast'
}, {
  rank: 33,
  name: "False Ashoka",
  img: './assets/tree-33.jpeg',
  hindi: "Ashoka (अशोक)",
  c: 29.01,
  o: 77.34,
  height: '8-12 m',
  canopy: '3-5 m',
  safeBldg: '3-4 m',
  safeRoad: '2-3 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 34,
  name: "Curry leaf",
  img: './assets/tree-34.jpeg',
  hindi: "Kadi Patta (कड़ी पत्ता)",
  c: 26.71,
  o: 71.20,
  height: '4-6 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 35,
  name: "Quick stick",
  img: './assets/tree-35.jpeg',
  hindi: "Giripushpa (गिरिपुष्प)",
  c: 21.18,
  o: 56.46,
  height: '10-12 m',
  canopy: '5-8 m',
  safeBldg: '4-5 m',
  safeRoad: '3-4 m',
  water: 'Low',
  growth: 'Very Fast'
}, {
  rank: 36,
  name: "Arjuna tree",
  img: './assets/tree-36.jpeg',
  hindi: "Arjun (अर्जुन)",
  c: 12.75,
  o: 33.99,
  height: '20-25 m',
  canopy: '10-15 m',
  safeBldg: '8-10 m',
  safeRoad: '5-6 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 37,
  name: "Parijat",
  img: './assets/tree-37.jpeg',
  hindi: "Harsingar (हरसिंगार)",
  c: 5.85,
  o: 15.60,
  height: '3-5 m',
  canopy: '3-4 m',
  safeBldg: '2-3 m',
  safeRoad: '2 m',
  water: 'Medium',
  growth: 'Medium'
}, {
  rank: 38,
  name: "Bamboo",
  img: './assets/tree-38.jpeg',
  hindi: "Bans (बांस)",
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
  return React.createElement(type, props);
};
const {
  useState,
  useEffect,
  useRef
} = React;

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
    label: 'Services',
    href: '#services'
  }, {
    label: 'Methodology',
    href: '#miyawaki-method'
  }, {
    label: 'Tree Data',
    href: '#tree-database'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  return /*#__PURE__*/_jsxDEV("nav", {
    id: "navbar",
    className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-forest-950/60 backdrop-blur-md border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'}`,
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between",
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
        className: "hidden md:flex items-center gap-8",
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
        className: "px-6 py-6 space-y-4",
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
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0",
      children: [/*#__PURE__*/_jsxDEV("img", {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
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
      className: "relative z-10 max-w-5xl mx-auto px-6 text-center",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/40 border border-forest-600/20 backdrop-blur-sm mb-8",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "w-2 h-2 rounded-full bg-forest-400 animate-pulse"
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "text-xs font-medium text-forest-300 tracking-wide uppercase",
          children: "Sustainable Site Planning"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("h1", {
        className: "animate-fade-in-up opacity-0 delay-100 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-tight tracking-tight mb-6 break-words",
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
          className: "group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-earth-500 to-earth-600 text-forest-950 font-semibold text-sm shadow-xl shadow-earth-900/40 hover:shadow-earth-700/50 hover:-translate-y-0.5 transition-all duration-300",
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
          className: "group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-cream-200/20 text-cream-100 font-semibold text-sm backdrop-blur-sm hover:bg-cream-50/5 hover:border-cream-200/35 hover:-translate-y-0.5 transition-all duration-300",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "calendar",
            size: 18,
            className: "transition-transform duration-300 group-hover:scale-110"
          }, void 0, false), "Book a Site Consultation"]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "animate-fade-in opacity-0 delay-700 mt-12 w-full max-w-lg mx-auto",
        children: /*#__PURE__*/_jsxDEV("a", {
          href: "#tree-database",
          onClick: function() { setTimeout(function() { var el = document.getElementById('main-search'); if (el) el.focus(); }, 100); },
          className: "hero-search-bar group flex items-center justify-between w-full px-8 py-5 rounded-full bg-forest-900/60 border border-earth-500/30 text-cream-100/80 hover:border-earth-400 hover:text-white transition-all cursor-pointer backdrop-blur-md shadow-2xl",
          children: [/*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3", children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "search", size: 20, className: "text-earth-400" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-base", children: "Search native tree species..." }, void 0, false)] }, void 0, true), /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2 text-xs text-cream-200/75 bg-forest-800/60 px-3 py-1.5 rounded-full border border-forest-700/40", children: "Explore" }, void 0, false)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
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
      className: "glass-card rounded-2xl p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-forest-900/60",
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
      className: "max-w-7xl mx-auto px-6 lg:px-8",
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
          className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4",
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
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
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
      className: "glass-card rounded-2xl px-6 py-4 border border-forest-600/30 shadow-2xl shadow-black/40 flex items-center gap-4 max-w-md",
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
    // Copy email to clipboard as fallback
    const email = 'kumthekaratharv@gmail.com';
    navigator.clipboard.writeText(email).catch(() => {});
    showToast('Email copied to clipboard!', email);
    // Let the mailto: link also attempt to open
  };
  const handleCallClick = e => {
    // Copy phone to clipboard as fallback
    const phone = '8482845479';
    navigator.clipboard.writeText(phone).catch(() => {});
    showToast('Phone number copied to clipboard!', phone);
    // Let the tel: link also attempt to open
  };
  return /*#__PURE__*/_jsxDEV("section", {
    id: "contact",
    className: "relative py-28 lg:py-36",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-8",
      children: /*#__PURE__*/_jsxDEV("div", {
        ref: ref,
        className: `relative rounded-3xl overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "absolute inset-0 bg-gradient-to-br from-forest-800/80 via-forest-900/90 to-forest-950 rounded-3xl"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,138,53,0.08),transparent_60%)]"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "absolute top-8 left-8 animate-float opacity-20",
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
              children: "Start Your Project"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
            className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-5",
            children: ["Ready to Build ", /*#__PURE__*/_jsxDEV("span", {
              className: "gradient-text",
              children: "Sustainably?"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "max-w-xl mx-auto text-base text-cream-200/75 leading-relaxed mb-10",
            children: "Share your site details and we'll prepare a complimentary preliminary report showing how strategic tree placement can transform your development."
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
            children: [/*#__PURE__*/_jsxDEV("a", {
              id: "cta-schedule",
              href: "mailto:kumthekaratharv@gmail.com?subject=New%20Consultation%20Request",
              onClick: handleEmailClick,
              className: "group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-earth-500 to-earth-600 text-forest-950 font-semibold text-sm shadow-xl shadow-earth-900/40 hover:shadow-earth-700/50 hover:-translate-y-0.5 transition-all duration-300",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "send",
                size: 18,
                className: "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              }, void 0, false), "Schedule a Free Consultation", /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "arrow-right",
                size: 16,
                className: "transition-transform duration-300 group-hover:translate-x-1"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("a", {
              id: "cta-call",
              href: "tel:8482845479",
              onClick: handleCallClick,
              className: "group inline-flex items-center gap-2 px-6 py-4 rounded-full border border-cream-200/15 text-cream-200/70 font-medium text-sm hover:text-cream-100 hover:border-cream-200/25 hover:bg-cream-50/5 transition-all duration-300",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "phone",
                size: 16,
                className: "text-earth-400"
              }, void 0, false), "Call Us Directly"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV(Toast, {
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
    className: "bg-forest-950/70 backdrop-blur-lg border-t border-white/10 py-12 lg:py-16 relative z-10",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-8",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex flex-col lg:flex-row items-center justify-between gap-8",
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
          className: "flex items-center gap-6 text-sm text-cream-200/35 flex-wrap justify-center",
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
        children: [/*#__PURE__*/_jsxDEV("p", {
          className: "font-serif italic text-earth-400/80 mb-5 text-xl",
          children: "Developed By"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-cream-100/90 font-medium tracking-wide",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Pradyumn Kumthekar"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-forest-500/40 hidden sm:inline",
            children: "\u2022"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Vaibhav Chalakh"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-forest-500/40 hidden sm:inline",
            children: "\u2022"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Aaryan Lengure"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-forest-500/40 hidden sm:inline",
            children: "\u2022"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Aarush Rathod"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-forest-500/40 hidden sm:inline",
            children: "\u2022"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-base sm:text-lg hover:text-earth-300 transition-colors cursor-default",
            children: "Parth Ambartani"
          }, void 0, false)]
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
function GreenAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Ready to anchor your project\'s future. I\'m your Senior Environmental Engineer \u2014 grounded in structural mechanics, numerical methods, and decades of watching forests reshape the built environment. What site parameters are we analyzing today?'
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contextTree, setContextTree] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(function () {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  useEffect(function () {
    if (isOpen && inputRef.current) {
      setTimeout(function () {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  function generateResponse(query) {
    var q = query.toLowerCase().trim();
    let currentContext = contextTree;
    var mentionedTrees = TREE_DATA.filter(function (t) {
      var nameMatch = q.includes(t.name.toLowerCase());
      var hindiName = t.hindi.split('(')[0].trim().toLowerCase();
      var hindiMatch = hindiName.length > 2 && q.includes(hindiName);
      return nameMatch || hindiMatch;
    });
    if (mentionedTrees.length === 1) {
      currentContext = mentionedTrees[0];
      setContextTree(currentContext);
    }

    if (/^(hi|hello|hey|namaste|good\s*(morning|afternoon|evening))\b/i.test(q)) {
      return 'Good to have you on-site. I can run structural analysis on root-load distributions, soil compatibility matrices, or canopy thermal coefficients.\n\nSome starting points:\n* \"Predict root spread load for Neem\"\n* \"Analyze soil compatibility\"\n* \"Generate a thermal impact matrix\"';
    }

    if (/\b(thanks|thank\s*you|thx|dhanyavaad|awesome|great)\b/i.test(q)) {
      return 'Acknowledged. Every species integration strengthens the site\'s long-term load profile. Standing by for your next query.';
    }

    if (/\b(bad|wrong|stupid|useless|frustrating)\b/i.test(q)) {
      return 'Understood \u2014 let me recalibrate. Could you rephrase your query? I work best with specific parameters: species names, soil types, load conditions, or site dimensions.';
    }

    if (/\b(help|what can you|what do you do|features)\b/i.test(q)) {
      return 'I can help you with:\n* 🏆 **Insights** — "Which tree absorbs the most CO₂?"\n* 🌳 **Species info** — "Tell me about Neem"\n* 💧 **Requirements** — "Which trees need low water?"\n* ⚖️ **Comparisons** — "Compare Neem and Tamarind"\n* 🔬 **Services** — "What services do you offer?"\n* ⏱️ **Cost/Time** — "How long does a forest take to grow?"';
    }

    if (/\b(cost|price|expensive|cheap|budget|money)\b/i.test(q)) {
      return '💰 **Cost & Investment:**\n\nThe cost of an afforestation project depends on the area and specific requirements. However, the **Miyawaki Method** becomes entirely self-sustaining and maintenance-free after just 3 years, making it a highly cost-effective long-term investment!\n\nFor a detailed quote, please reach out via our **Contact** section.';
    }
    
    if (/\b(time|how long|duration|years|months)\b/i.test(q)) {
      return '⏱️ **Timeframe:**\n\nUsing the Miyawaki Method, a forest grows **10x faster** than a conventional forest. It becomes completely self-sustaining in just **3 years** and mimics a 100-year-old forest in just **10 years**!';
    }
    
    if (/\b(space|area|size|acres|square meters|sqm)\b/i.test(q)) {
      return '📏 **Space Requirements:**\n\nThe Miyawaki Method is incredibly space-efficient! We plant **3 to 5 saplings per square meter**. You can start a mini-forest in an area as small as a backyard (around 100 sq meters or 1000 sq ft).';
    }

    if (/\b(miyawaki|afforestation|layers|method)\b/i.test(q)) {
      if (/\b(layer|layers|4-layer|four-layer)\b/i.test(q)) {
        return '🌳 **The Miyawaki 4-Layer System:**\n1. **Shrubs** (up to 6 feet)\n2. **Sub-trees** (up to 25 feet)\n3. **Trees** (up to 40 feet)\n4. **Canopy layer** (above 40 feet)\n\nThis ensures sunlight is received only from the top, promoting rapid upward growth.';
      }
      return '🌱 **The Miyawaki Method** is an advanced afforestation technique that uses native species to create dense, multilayered forests.\n\n**Core Principles:**\n* **30x denser**, grows **10x faster**\n* **Maintenance-free** after 3 years\n* Uses **4 layers** (shrubs, sub-trees, trees, canopy)\n* Requires **3-5 saplings per square meter**';
    }

    if (/\b(fast|fastest|quick|rapid)\b/i.test(q) && /\b(grow|growth)\b/i.test(q)) {
      var fastTrees = TREE_DATA.filter(t => t.growth && (t.growth.includes('Fast') || t.growth.includes('Very Fast')));
      return '🚀 **Fastest Growing Trees:**\n\n' + fastTrees.slice(0, 5).map(t => '* **' + t.name + '** (' + t.growth + ')').join('\n') + '\n\nThese are excellent for rapid canopy establishment!';
    }
    if (/\b(slow|slowest)\b/i.test(q) && /\b(grow|growth)\b/i.test(q)) {
      var slowTrees = TREE_DATA.filter(t => t.growth && t.growth.includes('Slow'));
      return '🐢 **Slowest Growing Trees:**\n\n' + slowTrees.slice(0, 5).map(t => '* **' + t.name + '** (' + t.growth + ')').join('\n');
    }

    if (/\b(water|irrigation)\b/i.test(q) && /\b(low|less|little|dry)\b/i.test(q)) {
      var lowWater = TREE_DATA.filter(t => t.water && t.water.includes('Low'));
      return '🌵 **Low Water Requirement Trees:**\n\n' + lowWater.slice(0, 5).map(t => '* **' + t.name + '**').join('\n') + '\n\nGreat for dry or drought-prone areas.';
    }
    if (/\b(water|irrigation)\b/i.test(q) && /\b(high|more|a lot|wet)\b/i.test(q)) {
      var highWater = TREE_DATA.filter(t => t.water && t.water.includes('High'));
      return '💧 **High Water Requirement Trees:**\n\n' + highWater.map(t => '* **' + t.name + '**').join('\n');
    }

    if (/\b(most|best|highest|top|maximum|greatest|rank\s*1)\b/i.test(q) && /co2|carbon|absorb/i.test(q)) {
      var sorted = TREE_DATA.slice().sort(function (a, b) {
        return b.c - a.c;
      });
      return '🏆 **Top CO₂ Absorbers (kg/year):**\n\n' + sorted.slice(0, 5).map(t => '* **' + t.name + '** — ' + t.c.toLocaleString() + ' kg/yr').join('\n');
    }

    if (/\b(most|best|highest|top|maximum|greatest)\b/i.test(q) && /o2|oxygen|release|produce|breath/i.test(q)) {
      var sorted = TREE_DATA.slice().sort(function (a, b) {
        return b.o - a.o;
      });
      return '🌬️ **Top O₂ Producers (kg/year):**\n\n' + sorted.slice(0, 5).map(t => '* **' + t.name + '** — ' + t.o.toLocaleString() + ' kg/yr').join('\n');
    }

    if (currentContext && mentionedTrees.length === 0) {
      let hasAnswered = false;
      let response = 'About **' + currentContext.name + '**:\n';
      if (/\b(safe|distance|building|road)\b/i.test(q)) {
        response += '* Safe from building: ' + (currentContext.safeBldg || 'N/A') + '\n* Safe from road: ' + (currentContext.safeRoad || 'N/A');
        hasAnswered = true;
      }
      if (/\b(water|irrigation)\b/i.test(q)) {
        response += '* Water requirement: ' + (currentContext.water || 'Unknown');
        hasAnswered = true;
      }
      if (/\b(growth|grow|fast|slow)\b/i.test(q)) {
        response += '* Growth rate: ' + (currentContext.growth || 'Unknown');
        hasAnswered = true;
      }
      if (/\b(height|tall)\b/i.test(q)) {
        response += '* Mature height: ' + (currentContext.height || 'Unknown');
        hasAnswered = true;
      }
      if (/\b(canopy|shade|spread)\b/i.test(q)) {
        response += '* Canopy spread: ' + (currentContext.canopy || 'Unknown');
        hasAnswered = true;
      }
      if (/co2|carbon/i.test(q)) {
        response += '* CO₂ Absorbed: ' + currentContext.c.toLocaleString() + ' kg/yr';
        hasAnswered = true;
      }
      if (/o2|oxygen/i.test(q)) {
        response += '* O₂ Released: ' + currentContext.o.toLocaleString() + ' kg/yr';
        hasAnswered = true;
      }
      if (hasAnswered) return response;
    }

    if (mentionedTrees.length === 1) {
      var t = mentionedTrees[0];
      let extra = '';
      if (q.includes('safe') || q.includes('distance')) extra += '\n* 📏 **Safe Distance:** Building ' + t.safeBldg + ', Road ' + t.safeRoad;
      if (q.includes('water')) extra += '\n* 💧 **Water:** ' + t.water;
      if (q.includes('grow')) extra += '\n* 📈 **Growth:** ' + t.growth;
      return '🌳 **' + t.name + '** (' + t.hindi + ')\n\n* 🌿 **CO₂ Absorbed:** ' + t.c.toLocaleString() + ' kg/year\n* 🌬️ **O₂ Released:** ' + t.o.toLocaleString() + ' kg/year' + extra + '\n* 🚗 Offsets ' + getCarEquivalent(t.c) + ' days of car driving/year\n* 👥 Provides O₂ for ' + getPeopleO2(t.o) + ' people/year\n\n*(You can now ask follow-up questions like "what is its water requirement?" or "how tall does it grow?")*';
    }

    if (mentionedTrees.length >= 2) {
      var trees = mentionedTrees.slice(0, 4);
      var response = '⚖️ **Comparison:**\n\n';
      trees.forEach(function (t) {
        response += '* **' + t.name + ':** ' + t.c.toLocaleString() + ' kg CO₂ | ' + (t.water || 'N/A') + ' Water | ' + (t.growth || 'N/A') + ' Growth\n';
      });
      var best = trees.reduce(function (a, b) {
        return a.c > b.c ? a : b;
      });
      var worst = trees.reduce(function (a, b) {
        return a.c < b.c ? a : b;
      });
      if (best.rank !== worst.rank) {
        var diff = ((best.c - worst.c) / worst.c * 100).toFixed(0);
        response += '\n💡 **' + best.name + '** absorbs ' + diff + '% more CO₂ than **' + worst.name + '**.';
      }
      return response;
    }

    if (/\b(service|offer|what.*(do|does)|root\s*analysis|canopy|thermal|planning)\b/i.test(q)) {
      return '🔬 **Our Core Services:**\n\n1. **Root & Plot Analysis:** We map root zones against your site boundaries and utilities.\n2. **Canopy Projection:** Visualize future canopy coverage at 5, 10, and 25-year intervals.\n3. **Thermal Impact Assessment:** Quantify the cooling effect of strategic tree placement.';
    }

    if (/\b(lokesh|toshniwal|dilip|special thanks)\b/i.test(q)) {
      return '✨ **Special Thanks:**\n\nA massive shoutout to **Lokesh Dilip Toshniwal**! The afforestation platform is especially thankful for their vision and support. 🌿';
    }

    if (/\b(develop|developer|created|creator|made|who made)\b/i.test(q)) {
      return '👨‍💻 **Development Team:**\n\nThis platform was brought to life by an amazing team:\n* **Pradyumn Kumthekar**\n* **Vaibhav Chalakh**\n* **Aaryan Lengure**\n* **Aarush Rathod**\n* **Parth Ambartani**';
    }

    if (/\b(total|how many|database|all trees|overall|sum|statistic)\b/i.test(q)) {
      var totalCO2 = TREE_DATA.reduce(function (s, t) {
        return s + t.c;
      }, 0);
      var totalO2 = TREE_DATA.reduce(function (s, t) {
        return s + t.o;
      }, 0);
      return '📊 **Database Overview:**\n\n* **Total species:** ' + TREE_DATA.length + '\n* **Combined CO₂ absorption:** ' + totalCO2.toLocaleString(undefined, {
        maximumFractionDigits: 0
      }) + ' kg/year\n* **Combined O₂ release:** ' + totalO2.toLocaleString(undefined, {
        maximumFractionDigits: 0
      }) + ' kg/year\n* **Top absorber:** ' + TREE_DATA[0].name + ' (' + TREE_DATA[0].c + ' kg CO₂/yr)';
    }

    if (/\b(plant|planting|impact|environment|green|sustainable|benefit|ecology)\b/i.test(q)) {
      return '🌱 **Environmental Impact of Tree Planting:**\n\nPlanting just 10 ' + TREE_DATA[0].name + ' trees would absorb ' + (TREE_DATA[0].c * 10).toLocaleString() + ' kg of CO₂ per year!\n\nUse our Planting Impact Calculator in the Tree Database section to explore different species and quantities.';
    }

    if (/\bcompare\b/i.test(q)) {
      return 'I\'d love to help you compare trees! Try asking:\n* "Compare Neem and Tamarind"\n* "Compare Mango and Guava"\n\nYou can also use the Compare mode in the Tree Database section! 👆';
    }

    return 'I\'m not completely sure about that! 🤔 But I can help you with:\n* **Tree species data** (e.g., "Tell me about Neem")\n* **Properties** (e.g., "Which trees need low water?")\n* **Our services** (Root Analysis, Canopy, Thermal)\n* **Miyawaki Method**\n\nTry asking "Which tree absorbs the most CO₂?" 🌿';
  }

  function handleSend(forcedQuery) {
    var userMsg = (typeof forcedQuery === 'string' ? forcedQuery : input).trim();
    if (!userMsg || isTyping) return;
    if (typeof forcedQuery !== 'string') {
      setInput('');
    }
    setMessages(function (prev) {
      return prev.concat([{
        role: 'user',
        content: userMsg
      }]);
    });
    setIsTyping(true);
    
    const thinkingTime = 800 + Math.random() * 1200;
    
    setTimeout(function () {
      var response = generateResponse(userMsg);
      setIsTyping(false);
      setMessages(function (prev) {
        return prev.concat([{
          role: 'assistant',
          content: response
        }]);
      });
    }, thinkingTime);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  var allQuickActions = [{
    label: '🏆 Top CO₂ trees',
    query: 'Which trees absorb the most CO2?'
  }, {
    label: '🌳 About Neem',
    query: 'Tell me about Neem'
  }, {
    label: '💧 Low Water',
    query: 'Which trees need low water?'
  }, {
    label: '🚀 Fast Growers',
    query: 'What are the fastest growing trees?'
  }, {
    label: '🌱 Miyawaki Method',
    query: 'What is the Miyawaki Method?'
  }, {
    label: '💰 Cost & Time',
    query: 'How much does it cost and how long does it take?'
  }];
  
  const [quickActions, setQuickActions] = useState([]);
  
  useEffect(function() {
    if (isOpen) {
      const shuffled = [...allQuickActions].sort(function() { return 0.5 - Math.random(); });
      setQuickActions(shuffled.slice(0, 4));
    }
  }, [isOpen]);

  var showQuickActions = messages.length === 1;
  return /*#__PURE__*/_jsxDEV(React.Fragment, {
    children: [isOpen && /*#__PURE__*/_jsxDEV("div", {
      className: "fixed bottom-24 sm:bottom-28 right-4 sm:right-8 z-[100] w-[calc(100vw-2rem)] sm:w-[420px] chat-slide-up origin-bottom-right",
      style: {
        maxHeight: 'calc(100vh - 8rem)'
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "chat-widget-glass rounded-[28px] shadow-[0_24px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden ring-1 ring-white/5 relative",
        style: {
          maxHeight: 'calc(100vh - 8rem)'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-earth-500/10 to-transparent pointer-events-none opacity-50"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between px-6 py-5 border-b border-white/10 bg-gradient-to-r from-forest-800/60 to-forest-900/60 flex-shrink-0 relative z-10 backdrop-blur-md",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "relative w-12 h-12 rounded-[18px] bg-gradient-to-br from-earth-400 to-earth-600 flex items-center justify-center shadow-lg shadow-earth-500/40 ring-2 ring-white/20 transform transition-transform hover:scale-105",
              children: [
                /*#__PURE__*/_jsxDEV(TreeAvatarSVG, {
                  size: 26,
                  className: "text-white"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("span", {
                  className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-forest-900 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                }, void 0, false)
              ]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "text-[17px] font-bold text-white tracking-wide leading-tight flex items-center gap-2",
                children: ["Arbor Engineer", /*#__PURE__*/_jsxDEV("span", {
                  className: "px-2 py-0.5 rounded-full bg-gradient-to-r from-earth-500/20 to-earth-600/20 border border-earth-400/30 text-[10px] text-earth-300 uppercase tracking-widest",
                  children: "Pro"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-1.5 mt-1",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-[12px] text-cream-100/80 font-medium tracking-wide",
                  children: "Senior Env. Engineer • Analytical"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1.5",
            children: [/*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                var text = messages.map(function(m) { return (m.role === 'user' ? 'YOU' : 'ENGINEER') + ': ' + m.content; }).join('\n\n');
                var blob = new Blob([text], { type: 'text/plain' });
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'arbor-specs-' + new Date().toISOString().slice(0,10) + '.txt';
                a.click();
                URL.revokeObjectURL(a.href);
              },
              className: "chat-export-btn w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-300",
              "aria-label": "Export Specs",
              title: "Export Specs",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "download",
                size: 16
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                setMessages([{
                  role: 'assistant',
                  content: 'Session cleared. Standing by for your next site analysis. What parameters shall we evaluate?'
                }]);
                setContextTree(null);
              },
              className: "w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300",
              "aria-label": "Clear chat",
              title: "Clear Chat",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "rotate-ccw",
                size: 16
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                setIsOpen(false);
              },
              className: "w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300",
              "aria-label": "Minimize chat",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "chevron-down",
                size: 20
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex-1 overflow-y-auto px-5 py-6 space-y-6 chat-messages bg-forest-950/40 relative z-10",
          style: {
            minHeight: '360px',
            maxHeight: '480px'
          },
          children: [messages.map(function (msg, i) {
            var isUser = msg.role === 'user';
            return /*#__PURE__*/_jsxDEV("div", {
              className: 'flex animate-fade-in ' + (isUser ? 'justify-end' : 'justify-start'),
              style: { animationDelay: '0.1s' },
              children: /*#__PURE__*/_jsxDEV("div", {
                className: 'flex gap-3 max-w-[88%] ' + (isUser ? 'flex-row-reverse' : 'flex-row'),
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: 'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm mt-auto ' + (isUser ? 'bg-earth-500/20 text-earth-300 border border-earth-500/30' : 'bg-gradient-to-br from-earth-400 to-earth-600 text-white shadow-earth-500/30 ring-1 ring-white/20'),
                  children: isUser ? /*#__PURE__*/_jsxDEV(LucideIcon, {
                    name: 'user',
                    size: 14
                  }, void 0, false) : /*#__PURE__*/_jsxDEV(TreeAvatarSVG, {
                    size: 16,
                    className: "text-white"
                  }, void 0, false)
                }, void 0, false), isUser ? /*#__PURE__*/_jsxDEV("div", {
                  className: "rounded-[20px] px-5 py-3.5 text-[14.5px] leading-relaxed bg-gradient-to-br from-earth-500/20 to-earth-600/10 backdrop-blur-md text-white border border-earth-400/20 rounded-br-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)]",
                  style: {
                    whiteSpace: 'pre-line'
                  },
                  children: msg.content
                }, void 0, false) : /*#__PURE__*/_jsxDEV("div", {
                  className: "rounded-[20px] px-6 py-4 text-[14.5px] leading-relaxed bg-forest-800/70 backdrop-blur-xl text-cream-50 border border-white/10 rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-strong:text-earth-400",
                  dangerouslySetInnerHTML: {
                    __html: window.marked ? marked.parse(msg.content.replace(/ðŸ[^\\s]+/g, '✨').replace(/•/g, '•').replace(/—/g, '—').replace(/CO₂/g, 'CO₂').replace(/O₂/g, 'O₂')) : msg.content
                  }
                }, void 0, false)]
              }, void 0, true)
            }, i, false);
          }), isTyping && /*#__PURE__*/_jsxDEV("div", {
            className: "flex justify-start animate-fade-in",
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "flex gap-3",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex-shrink-0 w-8 h-8 mt-auto rounded-full flex items-center justify-center bg-gradient-to-br from-earth-400 to-earth-600 text-white shadow-lg shadow-earth-500/30 ring-1 ring-white/20",
                children: /*#__PURE__*/_jsxDEV(TreeAvatarSVG, {
                  size: 16,
                  className: "text-white"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "bg-forest-800/70 backdrop-blur-xl border border-white/10 rounded-[20px] rounded-bl-sm px-5 py-4 flex items-center gap-2.5 shadow-lg",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-earth-400 typing-dot"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-earth-400 typing-dot"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-earth-400 typing-dot"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)
          }, void 0, false), showQuickActions && !isTyping && /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-2.5 pt-3 animate-fade-in-up",
            style: { animationDelay: '0.2s' },
            children: quickActions.map(function (action, i) {
              return /*#__PURE__*/_jsxDEV("button", {
                onClick: function () {
                  handleSend(action.query);
                },
                className: "px-4 py-2.5 rounded-full text-[13px] font-medium bg-forest-800/40 backdrop-blur-md border border-white/10 text-cream-100 hover:text-white hover:border-earth-400/50 hover:bg-earth-500/20 hover:shadow-[0_0_15px_rgba(220,160,80,0.15)] transition-all duration-300 flex items-center gap-2",
                children: action.label
              }, i, false);
            })
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            ref: messagesEndRef
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "chat-quick-prompts-row border-t border-white/5 bg-forest-900/40 flex-shrink-0 relative z-10",
          children: [
            { icon: "📐", label: "Predict Root Spread Load", query: "Predict the root spread load for the selected species on this site" },
            { icon: "🧪", label: "Analyze Soil Compatibility", query: "Analyze soil compatibility for native species at this site" },
            { icon: "🌡️", label: "Thermal Impact Matrix", query: "Generate a thermal impact matrix for this planting configuration" }
          ].map(function(chip, ci) {
            return /*#__PURE__*/_jsxDEV("button", {
              onClick: function() { handleSend(chip.query); },
              className: "px-3.5 py-2 rounded-full text-[12px] font-semibold bg-forest-800/50 backdrop-blur-md border border-white/8 text-cream-100/80 hover:text-white hover:border-earth-400/40 hover:bg-earth-500/15 hover:shadow-[0_0_12px_rgba(220,160,80,0.1)] transition-all duration-300 flex items-center gap-1.5 tracking-wide",
              children: [chip.icon, " ", chip.label]
            }, ci, false);
          })
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "p-5 border-t border-white/10 bg-forest-900/80 backdrop-blur-2xl flex-shrink-0 relative z-10",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex-1 relative group",
              children: /*#__PURE__*/_jsxDEV("input", {
                ref: inputRef,
                type: "text",
                value: input,
                onChange: function (e) {
                  setInput(e.target.value);
                },
                onKeyDown: handleKeyDown,
                placeholder: "Enter site parameters, species queries...",
                className: "search-input w-full px-5 py-3.5 rounded-2xl bg-forest-950/60 border border-white/10 text-white text-[14.5px] placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-earth-500/50 focus:bg-forest-950/80 transition-all duration-300 shadow-inner group-hover:border-white/20",
                disabled: isTyping,
                "aria-label": "Chat message input"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: handleSend,
              disabled: !input.trim() || isTyping,
              className: 'w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ' + (input.trim() && !isTyping ? 'bg-gradient-to-br from-earth-500 to-earth-600 text-white shadow-[0_4px_20px_rgba(220,160,80,0.4)] hover:shadow-[0_6px_25px_rgba(220,160,80,0.6)] hover:-translate-y-1 ring-1 ring-white/20' : 'bg-forest-800/40 text-white/20 cursor-not-allowed border border-white/5'),
              "aria-label": "Send message",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "send",
                size: 20,
                className: input.trim() && !isTyping ? "translate-x-0.5 -translate-y-0.5" : ""
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex justify-center items-center mt-3.5",
            children: /*#__PURE__*/_jsxDEV("p", {
              className: "text-[10px] text-white/30 font-semibold tracking-[0.2em] uppercase flex items-center gap-2",
              children: [/*#__PURE__*/_jsxDEV(LucideIcon, { name: "zap", size: 10, className: "text-earth-500/50" }, void 0, false), "Structural Analysis Engine"]
            }, void 0, true)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "fixed bottom-6 right-6 z-[90] flex items-center gap-4",
      children: [!isOpen && /*#__PURE__*/_jsxDEV("div", {
        className: "bg-forest-900/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-cream-100 text-[13px] font-medium animate-fade-in-up hidden md:block",
        style: { animationDelay: '1s' },
        children: "Site analysis available"
      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
        id: "green-assistant-toggle",
        onClick: function () {
          setIsOpen(!isOpen);
        },
        className: 'w-16 h-16 rounded-[22px] flex items-center justify-center shadow-2xl transition-all duration-500 group relative ' + (isOpen ? 'bg-gradient-to-br from-forest-700 to-forest-800 shadow-black/40 hover:from-forest-600 hover:to-forest-700 rotate-[360deg]' : 'bg-gradient-to-br from-earth-400 to-earth-600 shadow-[0_8px_30px_rgba(220,160,80,0.3)] hover:shadow-[0_12px_40px_rgba(220,160,80,0.5)] hover:-translate-y-1.5'),
        "aria-label": isOpen ? 'Close Green Assistant' : 'Open Green Assistant',
        children: [isOpen ? /*#__PURE__*/_jsxDEV(LucideIcon, {
          name: 'x',
          size: 26,
          className: "text-white transition-transform duration-300 rotate-90"
        }, void 0, false) : /*#__PURE__*/_jsxDEV(TreeAvatarSVG, {
          size: 28,
          className: "text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
        }, void 0, false), !isOpen && /*#__PURE__*/_jsxDEV("span", {
          className: "absolute -top-1 -right-1 flex items-center justify-center",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "w-4 h-4 rounded-full bg-green-400 border-[3px] border-forest-950 z-10"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "w-4 h-4 rounded-full bg-green-400 animate-ping absolute"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}


function MiyawakiMethod() {
  return /*#__PURE__*/_jsxDEV("section", {
    id: "miyawaki-method",
    className: "py-24 bg-forest-950 relative border-b border-forest-900/50",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute top-0 right-0 w-[800px] h-[800px] bg-earth-900/10 rounded-full blur-[120px] mix-blend-screen translate-x-1/2 -translate-y-1/2"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest-800/10 rounded-full blur-[100px] mix-blend-screen -translate-x-1/2 translate-y-1/2"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "text-center max-w-3xl mx-auto mb-20 animate-fade-in-up",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "text-earth-400 font-medium tracking-wider uppercase text-sm mb-4 block",
          children: "Advanced Afforestation"
        }, void 0, false), /*#__PURE__*/_jsxDEV("h2", {
          className: "text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-6 leading-tight",
          children: "The Miyawaki Methodology"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-lg text-cream-200/80 leading-relaxed font-light",
          children: "An innovative afforestation technique that uses native species to create dense, multilayered forests. By ensuring foliage receives sunlight only from the top, the methodology prompts rapid upward growth rather than sideways expansion."
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
            }, void 0, false), "Environmental Benefits"]
          }, void 0, true), /*#__PURE__*/_jsxDEV("ul", {
            className: "space-y-4",
            children: ['Reduction of pressure on natural forests', 'Efficient nutrient recycling by deep-rooted trees on site', 'Better protection of ecological systems', 'Microclimate improvements: lowered soil temperature and reduced evaporation through mulching and shading'].map((benefit, i) => /*#__PURE__*/_jsxDEV("li", {
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
            }, void 0, false), "Core Principles"]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "grid sm:grid-cols-2 gap-4",
            children: [{
              title: 'Density & Growth',
              desc: 'Forests become 30x denser, grow 10x faster, and are maintenance-free after 3 years.'
            }, {
              title: 'Planting Rules',
              desc: 'Plant 3-5 saplings per sq meter, ensuring different species are planted adjacent to each other.'
            }, {
              title: 'Site Requirements',
              desc: 'Minimum size of 4x3 meters. Site must receive sunlight for at least 8 hours per day.'
            }, {
              title: 'The 4-Layer System',
              desc: 'Shrubs (up to 6ft), sub-trees (up to 25ft), trees (up to 40ft), and canopy (above 40ft).'
            }].map((principle, i) => /*#__PURE__*/_jsxDEV("div", {
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
            className: "text-3xl font-serif font-bold text-cream-50 mb-4",
            children: "6 Implementation Steps"
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-cream-200/70 max-w-2xl mx-auto",
            children: "A systematic approach to transforming degraded land into a thriving, self-sustaining ecosystem."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: [{
            step: '01',
            title: 'Soil Preparation',
            icon: 'leaf',
            desc: 'Plough loamy soils 1-2 feet deep, add biomass for aeration, moisture retainers, mulch, and manure.'
          }, {
            step: '02',
            title: 'Species Selection',
            icon: 'search',
            desc: 'Choose indigenous species suited to the agro-climatic conditions.'
          }, {
            step: '03',
            title: 'Seed Collection',
            icon: 'database',
            desc: 'Collect seeds from natural falls or by shaking trees.'
          }, {
            step: '04',
            title: 'Seedling',
            icon: 'tree-pine',
            desc: 'Use young potted seedlings rather than mature trees.'
          }, {
            step: '05',
            title: 'Planting Techniques',
            icon: 'map',
            desc: 'Adapt techniques based on terrain: Rocky Surfaces, Slope/Narrow Terraces, or Flat/Hard Soil Surfaces.'
          }, {
            step: '06',
            title: 'Maintenance',
            icon: 'check',
            desc: 'Water daily initially, tie shoots for support, do not prune, and maintain mulching for at least 1 year.'
          }].map((item, i) => /*#__PURE__*/_jsxDEV("div", {
            className: "relative p-8 rounded-2xl bg-forest-900/40 border border-forest-800/50 hover:bg-forest-900/60 transition-colors group",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "absolute top-6 right-6 text-4xl font-black text-forest-800/30 group-hover:text-earth-900/30 transition-colors pointer-events-none",
              children: item.step
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-12 h-12 rounded-xl bg-earth-900/50 flex items-center justify-center mb-6 border border-earth-800/50 text-earth-400",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: item.icon,
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
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}


function CarbonCalculatorHub() {
  const [activeTab, setActiveTab] = useState("calculator");
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
    return tree.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
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

  return /*#__PURE__*/_jsxDEV("section", {
    id: "calculator-hub",
    className: "py-24 bg-forest-950 border-t border-forest-900/50 relative overflow-hidden",
    children: [
      /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
        children: [
          /*#__PURE__*/_jsxDEV("div", {
            className: "text-center mb-12",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "inline-flex items-center justify-center gap-2 mb-6 px-6 py-2.5 rounded-full bg-forest-900/50 border border-forest-800/60 shadow-lg backdrop-blur-sm",
                children: [
                  /*#__PURE__*/_jsxDEV(LucideIcon, { name: "database", size: 18, className: "text-earth-400" }, void 0, false),
                  /*#__PURE__*/_jsxDEV("span", { className: "text-earth-400 font-semibold tracking-[0.25em] uppercase text-sm", children: "Eco Hub" }, void 0, false)
                ]
              }, void 0, true),
              /*#__PURE__*/_jsxDEV("h2", {
                className: "text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-6",
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
                  className: `px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "database" ? "bg-earth-500 text-forest-950 shadow-md" : "text-cream-100/70 hover:text-cream-50"}`,
                  children: "Species Database"
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => setActiveTab("calculator"),
                  className: `px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "calculator" ? "bg-earth-500 text-forest-950 shadow-md" : "text-cream-100/70 hover:text-cream-50"}`,
                  children: "Carbon Calculator"
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
                    className: "w-full md:w-1/2 px-6 py-3 rounded-full bg-forest-950/50 border border-forest-700/50 text-white placeholder:text-white/40 focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all",
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
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: sortedAndFilteredTrees.map(function(tree) {
                  return /*#__PURE__*/_jsxDEV("div", {
                    key: tree.rank,
                    className: "group glass-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-forest-800/50 hover:border-earth-500/50 hover:shadow-[0_15px_30px_-10px_rgba(220,160,80,0.2)]",
                    onClick: function() { setSelectedTree(tree); },
                    children: [
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "h-48 overflow-hidden relative",
                        children: [
                          /*#__PURE__*/_jsxDEV("img", { src: tree.img, alt: tree.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }, void 0, false),
                          /*#__PURE__*/_jsxDEV("div", { className: "absolute top-3 right-3 bg-forest-950/80 backdrop-blur-md text-earth-300 text-xs font-bold px-3 py-1.5 rounded-full border border-earth-500/30", children: "Rank #" + tree.rank }, void 0, false)
                        ]
                      }, void 0, true),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "p-6",
                        children: [
                          /*#__PURE__*/_jsxDEV("h3", { className: "text-lg font-bold text-cream-50 mb-1 line-clamp-1", children: tree.name }, void 0, false),
                          /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400 text-sm mb-4 line-clamp-1", children: tree.hindi }, void 0, false),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "flex justify-between text-sm text-cream-100/80 border-t border-forest-800/50 pt-4",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { children: ["CO\u2082: ", tree.c, " kg/yr"] }, void 0, true),
                              /*#__PURE__*/_jsxDEV("span", { children: ["O\u2082: ", tree.o, " kg/yr"] }, void 0, true)
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
          activeTab === "calculator" && /*#__PURE__*/_jsxDEV("div", {
            className: "animate-fade-in-up",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                  /* Selection Area */
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "lg:col-span-2 glass-card p-6 rounded-3xl",
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
                                  /*#__PURE__*/_jsxDEV("img", { src: tree.img, className: "w-12 h-12 rounded-full object-cover border border-forest-700" }, void 0, false),
                                  /*#__PURE__*/_jsxDEV("div", {
                                    children: [
                                      /*#__PURE__*/_jsxDEV("h4", { className: "text-cream-50 font-semibold text-sm line-clamp-1", children: tree.name }, void 0, false),
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
                    className: "glass-card p-6 rounded-3xl flex flex-col h-full border-earth-500/30",
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
                                  /*#__PURE__*/_jsxDEV("h5", { className: "text-cream-50 text-sm font-semibold", children: item.tree.name }, void 0, false),
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
      }, void 0, true),

      /* Tree Modal */
      selectedTree && /*#__PURE__*/_jsxDEV("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in",
        onClick: function() { setSelectedTree(null); },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "bg-gradient-to-br from-forest-900 to-forest-950 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-forest-800/60 shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-fade-in-up custom-scrollbar",
          onClick: function(e) { e.stopPropagation(); },
          children: [
            /*#__PURE__*/_jsxDEV("div", {
              className: "relative h-72 sm:h-80",
              children: [
                /*#__PURE__*/_jsxDEV("img", { src: selectedTree.img, alt: selectedTree.name, className: "w-full h-full object-cover" }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  className: "absolute top-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-earth-500 hover:scale-110 transition-all border border-white/10",
                  onClick: function() { setSelectedTree(null); },
                  children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: "x", size: 20 }, void 0, false)
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", {
                  className: "absolute bottom-6 left-6 right-6",
                  children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
                      /*#__PURE__*/_jsxDEV("h2", { className: "text-3xl sm:text-4xl font-serif font-bold text-white shadow-sm", children: selectedTree.name }, void 0, false),
                      /*#__PURE__*/_jsxDEV("span", { className: "bg-earth-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg", children: "Rank #" + selectedTree.rank }, void 0, false)
                    ] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-earth-300 text-xl font-medium", children: selectedTree.hindi }, void 0, false)
                  ]
                }, void 0, true)
              ]
            }, void 0, true),
            /*#__PURE__*/_jsxDEV("div", {
              className: "p-6 sm:p-8",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-2 gap-4 sm:gap-6",
                children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50 hover:border-earth-500/30 transition-colors", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "CO\u2082 Absorption" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-earth-400", children: [selectedTree.c, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/75 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50 hover:border-earth-500/30 transition-colors", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "O\u2082 Release" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-green-400", children: [selectedTree.o, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/75 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  selectedTree.water && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Water Req." }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.water }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.growth && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Growth Rate" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.growth }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.height && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Mature Height" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.height }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.canopy && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Canopy Spread" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.canopy }, void 0, false)
                  ] }, void 0, true),
                  (selectedTree.safeBldg || selectedTree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "col-span-2 bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-3 uppercase tracking-wider font-semibold", children: "Safe Distance" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "flex flex-wrap gap-8", children: [
                      selectedTree.safeBldg && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "w-2 h-2 rounded-full bg-earth-500" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70", children: "Building:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-50 font-semibold", children: selectedTree.safeBldg }, void 0, false)] }, void 0, true),
                      selectedTree.safeRoad && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "w-2 h-2 rounded-full bg-earth-500" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70", children: "Road:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-50 font-semibold", children: selectedTree.safeRoad }, void 0, false)] }, void 0, true)
                    ] }, void 0, true)
                  ] }, void 0, true)
                ]
              }, void 0, false)
            }, void 0, false)
          ]
        }, void 0, true)
      }, void 0, false)
    ]
  }, void 0, true);
}
function TreeDatabase() {
  const [selectedTree, setSelectedTree] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrees = TREE_DATA.filter(function(tree) {
    return tree.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           tree.hindi.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return /*#__PURE__*/_jsxDEV("section", {
    id: "tree-database",
    className: "py-24 bg-forest-950 border-t border-forest-900/50 relative overflow-hidden",
    children: [
      /*#__PURE__*/_jsxDEV("div", {
        className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
        children: [
          /*#__PURE__*/_jsxDEV("div", {
            className: "text-center mb-16",
            children: [
              /*#__PURE__*/_jsxDEV("div", {
                className: "inline-flex items-center justify-center gap-2 mb-6 px-6 py-2.5 rounded-full bg-forest-900/50 border border-forest-800/60 shadow-lg backdrop-blur-sm",
                children: [
                  /*#__PURE__*/_jsxDEV(LucideIcon, { name: "database", size: 18, className: "text-earth-400" }, void 0, false),
                  /*#__PURE__*/_jsxDEV("span", { className: "text-earth-400 font-semibold tracking-[0.25em] uppercase text-sm", children: "Tree Database" }, void 0, false)
                ]
              }, void 0, true),
              /*#__PURE__*/_jsxDEV("h2", {
                className: "text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-cream-50 mb-6 tracking-tight",
                children: "Native Tree Species"
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("p", {
                className: "text-base md:text-lg text-cream-100/90 max-w-2xl mx-auto mb-8 font-light",
                children: "A living archive of native species \u2014 each one a quiet partner in the dialogue between landscape and the built environment."
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("div", {
                className: "max-w-md mx-auto relative",
                children: /*#__PURE__*/_jsxDEV("input", {
                  type: "text",
                  placeholder: "Search trees by name...",
                  className: "w-full px-6 py-4 rounded-full bg-forest-900/50 border border-forest-700/50 text-white placeholder:text-white/40 focus:outline-none focus:border-earth-400 focus:ring-1 focus:ring-earth-400 transition-all shadow-inner",
                  value: searchTerm,
                  onChange: function(e) { setSearchTerm(e.target.value); }
                }, void 0, false)
              }, void 0, false)
            ]
          }, void 0, true),
          /*#__PURE__*/_jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8",
            children: filteredTrees.map(function(tree) {
              return /*#__PURE__*/_jsxDEV("div", {
                key: tree.rank,
                className: "group bg-forest-900/40 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition-all duration-300",
                onClick: function() { setSelectedTree(tree); },
                children: [
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "h-48 overflow-hidden relative",
                    children: [
                      /*#__PURE__*/_jsxDEV("img", { src: tree.img, alt: tree.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", { className: "absolute top-3 right-3 bg-forest-950/80 backdrop-blur-md text-earth-300 text-xs font-medium px-3 py-1.5 rounded-full border border-earth-500/30", children: "Rank #" + tree.rank }, void 0, false)
                    ]
                  }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", {
                    className: "p-6",
                    children: [
                      /*#__PURE__*/_jsxDEV("h3", { className: "text-xl font-serif font-medium text-cream-50 mb-1 line-clamp-1", children: tree.name }, void 0, false),
                      /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400/90 text-sm font-normal mb-4 line-clamp-1", children: tree.hindi }, void 0, false),
                      /*#__PURE__*/_jsxDEV("div", {
                        className: "flex justify-between text-sm text-cream-100/80 font-medium tracking-wide border-t border-forest-800/50 pt-4",
                        children: [
                          /*#__PURE__*/_jsxDEV("span", { children: ["CO\u2082: ", tree.c, " kg/yr"] }, void 0, true),
                          /*#__PURE__*/_jsxDEV("span", { children: ["O\u2082: ", tree.o, " kg/yr"] }, void 0, true)
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
      selectedTree && /*#__PURE__*/_jsxDEV("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in",
        onClick: function() { setSelectedTree(null); },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "bg-forest-900/75 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up",
          onClick: function(e) { e.stopPropagation(); },
          children: [
            /*#__PURE__*/_jsxDEV("div", {
              className: "relative h-64 sm:h-80 md:h-96",
              children: [
                /*#__PURE__*/_jsxDEV("img", { src: selectedTree.img, alt: selectedTree.name, className: "w-full h-full object-cover" }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" }, void 0, false),
                /*#__PURE__*/_jsxDEV("button", {
                  className: "absolute top-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-earth-500 hover:scale-110 transition-all border border-white/10",
                  onClick: function() { setSelectedTree(null); },
                  children: /*#__PURE__*/_jsxDEV(LucideIcon, { name: "x", size: 20 }, void 0, false)
                }, void 0, false),
                /*#__PURE__*/_jsxDEV("div", {
                  className: "absolute bottom-6 left-6 right-6",
                  children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
                      /*#__PURE__*/_jsxDEV("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-white shadow-sm", children: selectedTree.name }, void 0, false),
                      /*#__PURE__*/_jsxDEV("span", { className: "bg-earth-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: "Rank #" + selectedTree.rank }, void 0, false)
                    ] }, void 0, true),
                    /*#__PURE__*/_jsxDEV("p", { className: "text-earth-300/90 text-lg sm:text-xl font-normal", children: selectedTree.hindi }, void 0, false)
                  ]
                }, void 0, true)
              ]
            }, void 0, true),
            /*#__PURE__*/_jsxDEV("div", {
              className: "p-6 sm:p-8",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                children: [
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50 hover:border-earth-500/30 transition-colors", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "CO\u2082 Absorption" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-earth-400", children: [selectedTree.c, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/75 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50 hover:border-earth-500/30 transition-colors", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "O\u2082 Release" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-green-400", children: [selectedTree.o, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/75 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  selectedTree.water && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Water Req." }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.water }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.growth && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Growth Rate" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.growth }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.height && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Mature Height" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.height }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.canopy && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Canopy Spread" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.canopy }, void 0, false)
                  ] }, void 0, true),
                  (selectedTree.safeBldg || selectedTree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "sm:col-span-2 bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/75 text-sm mb-3 uppercase tracking-wider font-semibold", children: "Safe Distance" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "flex flex-wrap gap-8", children: [
                      selectedTree.safeBldg && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "w-2 h-2 rounded-full bg-earth-500" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70", children: "Building:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-50 font-semibold", children: selectedTree.safeBldg }, void 0, false)] }, void 0, true),
                      selectedTree.safeRoad && /*#__PURE__*/_jsxDEV("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/_jsxDEV("span", { className: "w-2 h-2 rounded-full bg-earth-500" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70", children: "Road:" }, void 0, false), /*#__PURE__*/_jsxDEV("span", { className: "text-cream-50 font-semibold", children: selectedTree.safeRoad }, void 0, false)] }, void 0, true)
                    ] }, void 0, true)
                  ] }, void 0, true)
                ]
              }, void 0, false)
            }, void 0, false)
          ]
        }, void 0, true)
      }, void 0, false)
    ]
  }, void 0, true);
}


function App() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(Navbar, {}, void 0, false), /*#__PURE__*/_jsxDEV(Hero, {}, void 0, false), /*#__PURE__*/_jsxDEV(Services, {}, void 0, false), /*#__PURE__*/_jsxDEV(MiyawakiMethod, {}, void 0, false), /*#__PURE__*/_jsxDEV(CarbonCalculatorHub, {}, void 0, false),  /*#__PURE__*/_jsxDEV(Contact, {}, void 0, false), /*#__PURE__*/_jsxDEV(Footer, {}, void 0, false), /*#__PURE__*/_jsxDEV(GreenAssistant, {}, void 0, false)]
  }, void 0, true);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/_jsxDEV(App, {}, void 0, false));


