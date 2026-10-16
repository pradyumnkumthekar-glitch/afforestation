/* ──────────────────────────────────────────────
   Green Assistant — Modernized AI Chatbot Component
   Theme: Modern Nature (Tailwind CSS, Glassmorphic, Emerald)
   Backend: Connected to /api/chat with LanguageContext
────────────────────────────────────────────── */

function GreenAssistant() {
  const context = React.useContext(LanguageContext);
  const currentLang = (context && context.language) || 'en';
  const t = (context && context.t) || (typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS[currentLang] || TRANSLATIONS.en : {});

  const welcomeGreetings = {
    en: "Hello! I am your Ecological Assistant 🌱. Ask me anything about native tree species, water conservation, climate resilience, and soil health!",
    hi: "नमस्ते! मैं आपका पारिस्थितिकी सहायक हूँ 🌱। मुझसे देशी पेड़ों की प्रजातियों, जल संरक्षण, जलवायु लचीलापन और मिट्टी के स्वास्थ्य के बारे में कुछ भी पूछें!",
    mr: "नमस्कार! मी तुमचा पर्यावरण सहाय्यक आहे 🌱. मला स्थानिक झाडांच्या प्रजाती, जलसंधारण, हवामान लवचिकता आणि मातीबद्दल काहीही विचारा!"
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState(function() {
    try {
      const saved = sessionStorage.getItem('greenAssistantMessages_' + currentLang);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [{
      role: 'assistant',
      content: welcomeGreetings[currentLang] || welcomeGreetings.en
    }];
  });

  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);
  const inputRef = React.useRef(null);

  // Sync to session storage
  React.useEffect(function() {
    try {
      sessionStorage.setItem('greenAssistantMessages_' + currentLang, JSON.stringify(messages));
    } catch (e) {}
  }, [messages, currentLang]);

  // Update initial greeting when language changes if no conversation started
  React.useEffect(function() {
    if (messages.length === 1 && messages[0].role === 'assistant') {
      setMessages([{
        role: 'assistant',
        content: welcomeGreetings[currentLang] || welcomeGreetings.en
      }]);
    }
  }, [currentLang]);

  // Auto scroll to bottom
  React.useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Auto focus input on open
  React.useEffect(function() {
    if (isOpen && inputRef.current) {
      setTimeout(function() {
        inputRef.current.focus();
      }, 150);
    }
  }, [isOpen]);

  // Backend submission handler using native fetch to /api/chat
  async function handleSend(forcedQuery) {
    const userMsg = (typeof forcedQuery === 'string' ? forcedQuery : input).trim();
    if (!userMsg || isTyping) return;
    if (typeof forcedQuery !== 'string') {
      setInput('');
    }

    setMessages(function(prev) {
      return prev.concat([{ role: 'user', content: userMsg }]);
    });
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, lang: currentLang })
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Assistant Fetch Error (HTTP " + res.status + "):", errorText);
        let errorData = null;
        try { errorData = JSON.parse(errorText); } catch(e) {}
        throw new Error((errorData && (errorData.error || errorData.message || errorData.details)) || ("Server returned HTTP " + res.status));
      }

      const data = await res.json();
      const reply = data.reply || data.text || data.message || 'No response received.';
      setMessages(function(prev) {
        return prev.concat([{ role: 'assistant', content: reply }]);
      });
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg = currentLang === 'hi'
        ? "पारिस्थितिकी ज्ञानकोष से जुड़ने में त्रुटि हुई। कृपया पुनः प्रयास करें।"
        : currentLang === 'mr'
        ? "पर्यावरण ज्ञानकोषाशी जोडणी करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा."
        : "I'm having trouble connecting to the ecological server. Please check your network or try again.";
      setMessages(function(prev) {
        return prev.concat([{ role: 'assistant', content: errorMsg }]);
      });
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
    // Chat Window Layout (Modern Nature Theme)
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
          const isUser = msg.role === 'user';
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
                  }, msg.content)
                : React.createElement("div", {
                    className: "rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200/60 dark:border-gray-700/60 shadow-md prose prose-sm dark:prose-invert max-w-none select-text",
                    style: { wordBreak: 'break-word' },
                    dangerouslySetInnerHTML: {
                      __html: typeof window !== 'undefined' && window.marked ? marked.parse(msg.content) : msg.content
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

      // Input Area
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

    // Floating Toggle Button (Pulsing Emerald Circle)
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GreenAssistant;
}
