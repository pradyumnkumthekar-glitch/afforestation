import os

script_path = r"c:\Users\lokes\Downloads\afforestation\script.js"

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

tree_database_code = """
function TreeDatabase() {
  const [selectedTree, setSelectedTree] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrees = TREE_DATA.filter(function(tree) {
    return tree.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           tree.hindi.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return /*#__PURE__*/_jsxDEV("section", {
    id: "database",
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
                className: "text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-6",
                children: "Native Tree Species"
              }, void 0, false),
              /*#__PURE__*/_jsxDEV("p", {
                className: "text-lg text-cream-100/70 max-w-2xl mx-auto mb-8",
                children: "Explore our curated database of native tree species ideal for the Miyawaki method."
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
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            children: filteredTrees.map(function(tree) {
              return /*#__PURE__*/_jsxDEV("div", {
                key: tree.rank,
                className: "group bg-forest-900/30 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-forest-800/50 hover:border-earth-500/50 hover:shadow-[0_15px_30px_-10px_rgba(220,160,80,0.2)]",
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
      selectedTree && /*#__PURE__*/_jsxDEV("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in",
        onClick: function() { setSelectedTree(null); },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "bg-gradient-to-br from-forest-900 to-forest-950 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-forest-800/60 shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-fade-in-up",
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

content = content.replace("function Team() {", tree_database_code + "\nfunction Team() {")

# Add the component to App
app_render_original = "/*#__PURE__*/_jsxDEV(MiyawakiMethod, {}, void 0, false), /*#__PURE__*/_jsxDEV(Team, {}, void 0, false)"
app_render_new = "/*#__PURE__*/_jsxDEV(MiyawakiMethod, {}, void 0, false), /*#__PURE__*/_jsxDEV(TreeDatabase, {}, void 0, false), /*#__PURE__*/_jsxDEV(Team, {}, void 0, false)"
content = content.replace(app_render_original, app_render_new)

with open(script_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Injection complete")
