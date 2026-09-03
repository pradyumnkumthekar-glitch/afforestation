import os
import re

script_path = r"c:\Users\lokes\Downloads\afforestation\script.js"

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the new CarbonCalculatorHub component
calculator_code = """
function CarbonCalculatorHub() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default"); // default, a-z, z-a, co2-high, water-high
  const [selectedTree, setSelectedTree] = useState(null);
  const [plantationList, setPlantationList] = useState([]);

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
                children: "Explore native tree species, filter by eco-benefits, and calculate the environmental impact of your plantation."
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
                          /*#__PURE__*/_jsxDEV("option", { value: "co2-high", children: "Highest CO\\u2082 Emission" }, void 0, false),
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
                            className: "flex justify-between text-sm text-cream-100/60 border-t border-forest-800/50 pt-4",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { children: ["CO\\u2082: ", tree.c, " kg/yr"] }, void 0, true),
                              /*#__PURE__*/_jsxDEV("span", { children: ["O\\u2082: ", tree.o, " kg/yr"] }, void 0, true)
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
                          const [qty, setQty] = useState(1);
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
                                      /*#__PURE__*/_jsxDEV("p", { className: "text-earth-400 text-xs", children: [tree.c, " kg CO\\u2082/yr"] }, void 0, true)
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
                          /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-center py-10", children: "No trees added yet. Add trees to see the environmental impact." }, void 0, false)
                          : plantationList.map(item => /*#__PURE__*/_jsxDEV("div", {
                            key: item.tree.rank,
                            className: "flex items-center justify-between bg-forest-900/60 p-3 rounded-xl border border-forest-800 shadow-sm",
                            children: [
                              /*#__PURE__*/_jsxDEV("div", {
                                children: [
                                  /*#__PURE__*/_jsxDEV("h5", { className: "text-cream-50 text-sm font-semibold", children: item.tree.name }, void 0, false),
                                  /*#__PURE__*/_jsxDEV("p", { className: "text-cream-100/60 text-xs", children: ["Qty: ", item.quantity, " | CO\\u2082: ", (item.tree.c * item.quantity).toFixed(1)] }, void 0, true)
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
                              /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70 text-sm font-medium", children: "CO\\u2082 Absorbed" }, void 0, false),
                              /*#__PURE__*/_jsxDEV("div", { className: "text-right", children: [
                                /*#__PURE__*/_jsxDEV("span", { className: "text-2xl font-bold text-earth-400 block leading-none", children: totalCO2.toFixed(1) }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", { className: "text-xs text-cream-100/50", children: "kg/yr" }, void 0, false)
                              ] }, void 0, true)
                            ]
                          }, void 0, true),
                          /*#__PURE__*/_jsxDEV("div", {
                            className: "flex justify-between items-end",
                            children: [
                              /*#__PURE__*/_jsxDEV("span", { className: "text-cream-100/70 text-sm font-medium", children: "O\\u2082 Released" }, void 0, false),
                              /*#__PURE__*/_jsxDEV("div", { className: "text-right", children: [
                                /*#__PURE__*/_jsxDEV("span", { className: "text-2xl font-bold text-green-400 block leading-none", children: totalO2.toFixed(1) }, void 0, false),
                                /*#__PURE__*/_jsxDEV("span", { className: "text-xs text-cream-100/50", children: "kg/yr" }, void 0, false)
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
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "CO\\u2082 Absorption" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-earth-400", children: [selectedTree.c, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/50 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50 hover:border-earth-500/30 transition-colors", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "O\\u2082 Release" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-2xl font-bold text-green-400", children: [selectedTree.o, " ", /*#__PURE__*/_jsxDEV("span", { className: "text-lg text-cream-100/50 font-normal", children: "kg/yr" }, void 0, false)] }, void 0, true)
                  ] }, void 0, true),
                  selectedTree.water && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Water Req." }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.water }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.growth && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Growth Rate" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.growth }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.height && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Mature Height" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.height }, void 0, false)
                  ] }, void 0, true),
                  selectedTree.canopy && /*#__PURE__*/_jsxDEV("div", { className: "bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-1.5 uppercase tracking-wider font-semibold", children: "Canopy Spread" }, void 0, false),
                    /*#__PURE__*/_jsxDEV("div", { className: "text-lg font-semibold text-cream-50", children: selectedTree.canopy }, void 0, false)
                  ] }, void 0, true),
                  (selectedTree.safeBldg || selectedTree.safeRoad) && /*#__PURE__*/_jsxDEV("div", { className: "col-span-2 bg-forest-900/50 p-5 rounded-2xl border border-forest-800/50", children: [
                    /*#__PURE__*/_jsxDEV("div", { className: "text-cream-100/50 text-sm mb-3 uppercase tracking-wider font-semibold", children: "Safe Distance" }, void 0, false),
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
"""

if "function TreeDatabase()" in content:
    print("Found TreeDatabase, replacing it with CarbonCalculatorHub...")
    # Add new component right before TreeDatabase
    content = content.replace("function TreeDatabase() {", calculator_code + "\\nfunction TreeDatabase() {")
    
    # Update App render
    app_render_original = "/*#__PURE__*/_jsxDEV(TreeDatabase, {}, void 0, false)"
    app_render_new = "/*#__PURE__*/_jsxDEV(CarbonCalculatorHub, {}, void 0, false)"
    content = content.replace(app_render_original, app_render_new)
    print("Replaced TreeDatabase in render.")
else:
    print("TreeDatabase not found, looking for Team...")
    # If not found, look for Team and insert before it
    content = content.replace("function Team() {", calculator_code + "\\nfunction Team() {")
    # Update render
    app_render_original = "/*#__PURE__*/_jsxDEV(Team, {}, void 0, false)"
    app_render_new = "/*#__PURE__*/_jsxDEV(CarbonCalculatorHub, {}, void 0, false), /*#__PURE__*/_jsxDEV(Team, {}, void 0, false)"
    content = content.replace(app_render_original, app_render_new)
    print("Injected before Team.")

with open(script_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Injection complete")
