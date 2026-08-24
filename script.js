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
  }]
};
function LucideIcon({
  name,
  size = 24,
  className = '',
  strokeWidth = 1.8
}) {
  const paths = ICON_PATHS[name] || [];
  return /*#__PURE__*/_jsxDEV("span", {
    className: `inline-flex items-center justify-center ${className}`,
    children: /*#__PURE__*/_jsxDEV("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: paths.map((p, i) => /*#__PURE__*/_jsxDEV("path", {
        d: p.d,
        fill: p.fill || 'none'
      }, i, false))
    }, void 0, false)
  }, void 0, false);
}

/* ──────────────────────────────────────────────
   Intersection Observer Hook
────────────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.15,
      ...options
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

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
    label: 'About',
    href: '#about'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  return /*#__PURE__*/_jsxDEV("nav", {
    id: "navbar",
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-forest-950/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'}`,
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
          children: ["tree", /*#__PURE__*/_jsxDEV("span", {
            className: "text-earth-400",
            children: "forestation"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "hidden md:flex items-center gap-8",
        children: [navLinks.map(link => /*#__PURE__*/_jsxDEV("a", {
          href: link.href,
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
          onClick: () => setMobileOpen(false),
          className: "block text-base font-medium text-cream-200/80 hover:text-earth-300 transition-colors",
          children: link.label
        }, link.label, false)), /*#__PURE__*/_jsxDEV("a", {
          href: "#contact",
          onClick: () => setMobileOpen(false),
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
        src: "data:image/png;base64,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",
        alt: "Dense forest canopy",
        className: "w-full h-full object-cover"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "hero-overlay absolute inset-0"
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
        className: "animate-fade-in-up opacity-0 delay-100 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6",
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
        className: "animate-fade-in-up opacity-0 delay-300 max-w-2xl mx-auto text-base sm:text-lg text-cream-200/60 leading-relaxed mb-10 font-light",
        children: ["We help land developers and construction planners quantify how specific tree species affect their sites — from canopy coverage and root spread to measurable temperature reduction — so every build works ", /*#__PURE__*/_jsxDEV("em", {
          className: "text-cream-200/80 not-italic font-medium",
          children: "with"
        }, void 0, false), " the landscape, not against it."]
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
        className: "animate-fade-in opacity-0 delay-700 mt-16 flex flex-col items-center gap-2",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "text-[11px] uppercase tracking-[0.2em] text-cream-200/30 font-medium",
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
  description: 'We map subterranean root zones against your site boundaries, utility lines, and foundation plans — identifying risks and opportunities before a single shovel breaks ground.',
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
        className: "text-sm text-cream-200/50 leading-relaxed mb-6 flex-grow",
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
          className: "text-base text-cream-200/50 leading-relaxed",
          children: "Every project is unique. Our analytical tools quantify the real-world effects of tree placement so you can make decisions grounded in science, not guesswork."
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
const TREE_DATA = [{
  rank: 1,
  name: "Indian siris tree",
  hindi: "Siris (सिरिस)",
  img: './images/indian-siris.jpeg',
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
  img: './images/tamarind.jpeg',
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
  img: './images/gulmohar.jpeg',
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
  img: './images/yellow-flame.jpeg',
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
  img: './images/peepal.jpeg',
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
  img: './images/subabul.jpeg',
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
  img: './images/kanak-champa.jpeg',
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
  img: './images/neem.jpeg',
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
  hindi: "Amla (आंवला)",
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
  hindi: "Jamun (जामुन)",
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
  hindi: "Sagwan (सागौन)",
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
const MAX_CO2 = 1029.56;
const MAX_O2 = 2744.81;

/* Rank color helper */
function getRankStyle(rank) {
  if (rank === 1) return {
    bg: 'bg-gradient-to-br from-yellow-500/20 to-amber-600/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    medal: '🥇'
  };
  if (rank === 2) return {
    bg: 'bg-gradient-to-br from-gray-300/15 to-gray-400/10',
    border: 'border-gray-400/30',
    text: 'text-gray-300',
    medal: '🥈'
  };
  if (rank === 3) return {
    bg: 'bg-gradient-to-br from-amber-700/20 to-orange-800/10',
    border: 'border-amber-600/30',
    text: 'text-amber-500',
    medal: '🥉'
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
    text: 'text-cream-200/50',
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
const TreeCard = React.memo(function TreeCard({
  tree,
  index,
  isCompare,
  onToggleCompare,
  isSelected
}) {
  const [ref, isVisible] = useInView({
    threshold: 0.1
  });
  const [open, setOpen] = React.useState(false);
  function getWaterStyle(w) {
    if (!w) return {
      dot: 'bg-gray-300',
      text: 'text-gray-400',
      bar: 'bg-gray-100'
    };
    if (w.includes('High')) return {
      dot: 'bg-blue-500',
      text: 'text-blue-600',
      bar: 'bg-blue-50'
    };
    if (w.includes('Medium')) return {
      dot: 'bg-sky-400',
      text: 'text-sky-600',
      bar: 'bg-sky-50'
    };
    return {
      dot: 'bg-emerald-500',
      text: 'text-emerald-600',
      bar: 'bg-emerald-50'
    };
  }
  function getGrowthStyle(g) {
    if (!g) return 'bg-gray-100 text-gray-500 border-gray-200';
    if (g.includes('Very Fast')) return 'bg-amber-100 text-amber-700 border-amber-200';
    if (g.includes('Fast')) return 'bg-green-100 text-green-700 border-green-200';
    if (g.includes('Medium')) return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-stone-100 text-stone-600 border-stone-200';
  }
  const hasCO2 = tree.c !== undefined;
  const hasExtra = tree.height || tree.canopy || tree.safeBldg || tree.water || tree.growth;
  const ws = getWaterStyle(tree.water);
  const gs = getGrowthStyle(tree.growth);
  const co2Pct = hasCO2 ? Math.max(4, tree.c / MAX_CO2 * 100) : 0;
  const o2Pct = hasCO2 ? Math.max(4, tree.o / MAX_O2 * 100) : 0;
  const imageUrl = tree.img || "https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=400&h=300&fit=crop";
  const hindiStr = tree.hindi || "";
  const hasSci = hindiStr.includes("(");
  const mainHindi = hasSci ? hindiStr.split("(")[1].replace(")", "").trim() : hindiStr;
  const scientificName = hasSci ? hindiStr.split("(")[0].trim() : "";
  return /*#__PURE__*/_jsxDEV("div", {
    ref: ref,
    className: `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    style: {
      transitionDelay: `${index % 12 * 0.06}s`
    },
    children: /*#__PURE__*/_jsxDEV("div", {
      className: `bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl flex flex-col group ${isSelected ? 'ring-2 ring-forest-600' : ''}`,
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "relative h-48 w-full bg-gray-100 overflow-hidden cursor-pointer",
        onClick: function () {
          setOpen(!open);
        },
        children: [/*#__PURE__*/_jsxDEV("img", {
          src: imageUrl,
          alt: tree.name,
          className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "absolute top-2 left-2 bg-forest-800 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm",
          children: tree.rank
        }, void 0, false), isCompare && /*#__PURE__*/_jsxDEV("button", {
          onClick: function (e) {
            e.stopPropagation();
            onToggleCompare(tree);
          },
          className: `absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-md ${isSelected ? 'bg-forest-600 text-white shadow-md' : 'bg-white/80 text-gray-700 hover:bg-white'}`,
          title: isSelected ? 'Remove from comparison' : 'Add to comparison',
          children: /*#__PURE__*/_jsxDEV(LucideIcon, {
            name: isSelected ? 'check' : 'layers',
            size: 14
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "px-4 pt-4 pb-3 cursor-pointer bg-white",
        onClick: function () {
          setOpen(!open);
        },
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "text-xl font-bold text-gray-900 mb-0.5 leading-tight",
          children: mainHindi
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm font-bold text-forest-700 mb-0.5 leading-tight",
          children: tree.name
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-xs text-gray-500 italic leading-tight",
          children: scientificName
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "overflow-hidden transition-all duration-500 ease-in-out bg-white",
        style: {
          maxHeight: open ? '800px' : '0px',
          opacity: open ? 1 : 0
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "px-4 pb-4 space-y-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2 flex-wrap pt-2 border-t border-gray-100",
            children: [tree.growth && /*#__PURE__*/_jsxDEV("span", {
              className: `text-[10px] font-semibold px-2 py-0.5 rounded-full border ${gs}`,
              children: tree.growth
            }, void 0, false), tree.water && /*#__PURE__*/_jsxDEV("span", {
              className: `text-[10px] font-semibold flex items-center gap-1 ${ws.text}`,
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: `w-1.5 h-1.5 rounded-full ${ws.dot}`
              }, void 0, false), tree.water, " water"]
            }, void 0, true)]
          }, void 0, true), hasCO2 && /*#__PURE__*/_jsxDEV("div", {
            className: "space-y-3 pt-2",
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center justify-between mb-1",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-[10px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                  }, void 0, false), "CO₂ Absorbed"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  className: "text-[11px] font-bold text-gray-800",
                  children: [tree.c.toLocaleString(), " kg/yr"]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "h-1.5 rounded-full bg-gray-100 overflow-hidden",
                children: /*#__PURE__*/_jsxDEV("div", {
                  className: "h-full rounded-full",
                  style: {
                    width: open ? `${co2Pct}%` : '0%',
                    background: 'linear-gradient(90deg,#10b981,#34d399)',
                    transition: 'width 0.8s ease'
                  }
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center justify-between mb-1",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "text-[10px] font-semibold text-blue-700 uppercase tracking-wider flex items-center gap-1.5",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"
                  }, void 0, false), "O₂ Released"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  className: "text-[11px] font-bold text-gray-800",
                  children: [tree.o.toLocaleString(), " kg/yr"]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "h-1.5 rounded-full bg-gray-100 overflow-hidden",
                children: /*#__PURE__*/_jsxDEV("div", {
                  className: "h-full rounded-full",
                  style: {
                    width: open ? `${o2Pct}%` : '0%',
                    background: 'linear-gradient(90deg,#3b82f6,#60a5fa)',
                    transition: 'width 0.8s ease'
                  }
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "grid grid-cols-2 gap-2 pt-1",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "bg-gray-50 rounded-lg px-3 py-2 text-center border border-gray-100",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "text-xs font-bold text-emerald-700",
                  children: [Math.round(tree.c / 4.6), " days"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: "text-[9px] text-gray-500 mt-0.5",
                  children: "driving offset/yr"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "bg-gray-50 rounded-lg px-3 py-2 text-center border border-gray-100",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "text-xs font-bold text-blue-700",
                  children: [Math.round(tree.o / 550), " people"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: "text-[9px] text-gray-500 mt-0.5",
                  children: "O₂ supply/yr"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), hasExtra && /*#__PURE__*/_jsxDEV("div", {
            className: "space-y-2.5 pt-2 animate-fade-in border-t border-gray-100",
            children: [(tree.height || tree.canopy) && /*#__PURE__*/_jsxDEV("div", {
              className: "grid grid-cols-2 gap-2 mt-2",
              children: [tree.height && /*#__PURE__*/_jsxDEV("div", {
                className: "bg-gray-50 rounded-lg p-2.5 border border-gray-100",
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-[9px] uppercase tracking-widest text-gray-500 font-semibold mb-1",
                  children: "Height"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs font-bold text-gray-800",
                  children: tree.height
                }, void 0, false)]
              }, void 0, true), tree.canopy && /*#__PURE__*/_jsxDEV("div", {
                className: "bg-gray-50 rounded-lg p-2.5 border border-gray-100",
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-[9px] uppercase tracking-widest text-gray-500 font-semibold mb-1",
                  children: "Canopy"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs font-bold text-gray-800",
                  children: tree.canopy
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), (tree.safeBldg || tree.safeRoad) && /*#__PURE__*/_jsxDEV("div", {
              className: "bg-gray-50 rounded-lg p-2.5 border border-gray-100",
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "text-[9px] uppercase tracking-widest text-gray-500 font-semibold mb-2",
                children: "Safe Distance"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-3",
                children: [tree.safeBldg && /*#__PURE__*/_jsxDEV("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsxDEV("p", {
                    className: "text-[9px] text-gray-500 mb-0.5",
                    children: "🏗 Building"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                    className: "text-xs font-bold text-gray-800",
                    children: tree.safeBldg
                  }, void 0, false)]
                }, void 0, true), tree.safeBldg && tree.safeRoad && /*#__PURE__*/_jsxDEV("div", {
                  className: "w-px h-6 bg-gray-200 flex-shrink-0"
                }, void 0, false), tree.safeRoad && /*#__PURE__*/_jsxDEV("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsxDEV("p", {
                    className: "text-[9px] text-gray-500 mb-0.5",
                    children: "🛣 Road"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                    className: "text-xs font-bold text-gray-800",
                    children: tree.safeRoad
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), tree.water && /*#__PURE__*/_jsxDEV("div", {
              className: `rounded-lg p-2.5 border flex items-center justify-between ${ws.bar} border-black/5`,
              children: [/*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-[9px] uppercase tracking-widest text-gray-500 font-semibold mb-1",
                  children: "Water Req."
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: `w-2 h-2 rounded-full ${ws.dot}`
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: `text-xs font-bold ${ws.text}`,
                    children: tree.water
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: `opacity-40 ${ws.text}`,
                children: /*#__PURE__*/_jsxDEV("path", {
                  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)
  }, void 0, false);
});

/* Compare Panel */
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
        className: "text-xs text-cream-200/40 hover:text-cream-200/70 transition-colors px-2 py-1 rounded-md hover:bg-forest-800/40",
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
              className: "text-left text-[11px] font-semibold text-cream-200/40 uppercase tracking-wider py-2 pr-3",
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
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
              children: "Mature Height"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: t.h || '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
              children: "Safe Distance"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: t.d || '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
              children: "Growth Rate"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs",
                children: t.g ? /*#__PURE__*/_jsxDEV("span", {
                  className: 'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ' + (t.g.includes('Fast') ? 'bg-earth-500/10 text-earth-400 border-earth-500/20' : t.g.includes('Slow') ? 'bg-forest-500/10 text-forest-300 border-forest-500/20' : 'bg-sky-500/10 text-sky-400 border-sky-500/20'),
                  children: t.g
                }, void 0, false) : '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
              children: "Water Req."
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs",
                children: t.w ? /*#__PURE__*/_jsxDEV("span", {
                  className: 'inline-flex items-center gap-1 font-medium ' + (t.w.includes('High') ? 'text-earth-400' : t.w.includes('Low') ? 'text-forest-400' : 'text-sky-400'),
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-current opacity-70"
                  }, void 0, false), t.w]
                }, void 0, true) : '—'
              }, t.rank, false);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            className: "border-b border-forest-800/20",
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
              children: "Driving Offset"
            }, void 0, false), trees.map(function (t) {
              return /*#__PURE__*/_jsxDEV("td", {
                className: "text-center py-2.5 px-2 text-xs text-cream-200/70",
                children: [getCarEquivalent(t.c), " days/yr"]
              }, t.rank, true);
            })]
          }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
            children: [/*#__PURE__*/_jsxDEV("td", {
              className: "py-2.5 pr-3 text-[11px] text-cream-200/50 font-semibold uppercase tracking-wider",
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
        className: "text-[11px] text-cream-200/30 text-center",
        children: trees.length >= 2 && function () {
          var best = trees.reduce(function (a, b) {
            return a.c > b.c ? a : b;
          });
          var worst = trees.reduce(function (a, b) {
            return a.c < b.c ? a : b;
          });
          if (best.rank === worst.rank) return '☝️ Add more trees to see comparisons';
          var diff = ((best.c - worst.c) / worst.c * 100).toFixed(0);
          return '💡 ' + best.name + ' absorbs ' + diff + '% more CO₂ than ' + worst.name;
        }()
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}
function TreeDatabase() {
  const [headerRef, headerVisible] = useInView();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [showAll, setShowAll] = useState(false);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareTrees, setCompareTrees] = useState([]);
  const [plantCount, setPlantCount] = useState(10);
  function toggleCompare(tree) {
    setCompareTrees(function (prev) {
      var exists = prev.find(function (t) {
        return t.rank === tree.rank;
      });
      if (exists) return prev.filter(function (t) {
        return t.rank !== tree.rank;
      });
      if (prev.length >= 4) return prev;
      return prev.concat([tree]);
    });
  }
  const filteredTrees = TREE_DATA.filter(function (t) {
    var term = debouncedSearchTerm.toLowerCase();
    return t.name.toLowerCase().includes(term) || t.hindi.toLowerCase().includes(term);
  }).sort(function (a, b) {
    if (sortBy === 'co2') return b.c - a.c;
    if (sortBy === 'o2') return b.o - a.o;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.rank - b.rank;
  });
  const displayedTrees = debouncedSearchTerm ? filteredTrees : showAll ? filteredTrees : filteredTrees.slice(0, 12);
  const hasMore = !debouncedSearchTerm && !showAll && filteredTrees.length > 12;
  const totalCO2 = TREE_DATA.reduce(function (s, t) {
    return s + t.c;
  }, 0);
  const totalO2 = TREE_DATA.reduce(function (s, t) {
    return s + t.o;
  }, 0);

  /* Planting calculator */
  var selectedForCalc = compareTrees.length > 0 ? compareTrees[0] : TREE_DATA[0];
  var calcCO2 = (selectedForCalc.c * plantCount).toFixed(0);
  var calcO2 = (selectedForCalc.o * plantCount).toFixed(0);
  var calcCarDays = Math.round(getCarEquivalent(selectedForCalc.c) * plantCount);
  var calcPeople = (getPeopleO2(selectedForCalc.o) * plantCount).toFixed(1);
  const sortOptions = [{
    key: 'rank',
    label: 'Rank'
  }, {
    key: 'co2',
    label: 'CO₂ High→Low'
  }, {
    key: 'o2',
    label: 'O₂ High→Low'
  }, {
    key: 'name',
    label: 'Name A→Z'
  }];
  return /*#__PURE__*/_jsxDEV("section", {
    id: "tree-database",
    className: "relative py-24 lg:py-36",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-forest-950 to-transparent pointer-events-none"
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/_jsxDEV("div", {
        ref: headerRef,
        className: `text-center max-w-2xl mx-auto mb-10 lg:mb-14 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/30 border border-forest-700/20 mb-5",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "database",
            size: 14,
            className: "text-earth-400"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "text-[11px] font-semibold text-earth-400 tracking-wide uppercase",
            children: "Species Database"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h2", {
          className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4",
          children: ["Explore ", /*#__PURE__*/_jsxDEV("span", {
            className: "gradient-text",
            children: "38 Tree Species"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm sm:text-base text-cream-200/50 leading-relaxed",
          children: "Discover how different tree species contribute to our environment through carbon dioxide absorption and oxygen release, measured in kilograms per year."
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: `grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 ${headerVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-2xl lg:text-3xl font-bold text-cream-50 font-serif",
            children: "38"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "text-[11px] sm:text-xs text-cream-200/40 font-medium mt-1",
            children: "Tree Species"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-xl sm:text-2xl lg:text-3xl font-bold text-earth-400 font-serif",
            children: totalCO2.toLocaleString(undefined, {
              maximumFractionDigits: 0
            })
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "text-[11px] sm:text-xs text-cream-200/40 font-medium mt-1",
            children: "kg CO₂ Absorbed / Year"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "text-xl sm:text-2xl lg:text-3xl font-bold text-sky-400 font-serif",
            children: totalO2.toLocaleString(undefined, {
              maximumFractionDigits: 0
            })
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "text-[11px] sm:text-xs text-cream-200/40 font-medium mt-1",
            children: "kg O₂ Released / Year"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: `glass-card rounded-2xl border border-forest-600/15 p-4 sm:p-6 mb-8 sm:mb-10 ${headerVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4",
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "text-sm font-bold text-cream-50 flex items-center gap-2 flex-shrink-0",
            children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "sparkles",
              size: 16,
              className: "text-earth-400"
            }, void 0, false), "Planting Impact Calculator"]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2 flex-1",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-xs text-cream-200/40 flex-shrink-0",
              children: "If you plant"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              id: "plant-count",
              type: "number",
              min: "1",
              max: "10000",
              value: plantCount,
              onChange: function (e) {
                setPlantCount(Math.max(1, parseInt(e.target.value) || 1));
              },
              className: "search-input w-20 px-3 py-1.5 rounded-lg bg-forest-900/50 border border-forest-700/20 text-cream-100 text-sm text-center"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "text-xs text-cream-200/40 truncate",
              children: [selectedForCalc.name, " trees:"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "bg-forest-900/40 rounded-xl p-3 text-center",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-base sm:text-lg font-bold text-earth-400",
              children: Number(calcCO2).toLocaleString()
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[10px] text-cream-200/35 font-medium mt-0.5",
              children: "kg CO₂ absorbed/yr"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "bg-forest-900/40 rounded-xl p-3 text-center",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-base sm:text-lg font-bold text-sky-400",
              children: Number(calcO2).toLocaleString()
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[10px] text-cream-200/35 font-medium mt-0.5",
              children: "kg O₂ released/yr"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "bg-forest-900/40 rounded-xl p-3 text-center",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-base sm:text-lg font-bold text-amber-400",
              children: calcCarDays.toLocaleString()
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[10px] text-cream-200/35 font-medium mt-0.5",
              children: "days of driving offset"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "bg-forest-900/40 rounded-xl p-3 text-center",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-base sm:text-lg font-bold text-violet-400",
              children: calcPeople
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[10px] text-cream-200/35 font-medium mt-0.5",
              children: "people's O₂ supply"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
          className: "text-[10px] text-cream-200/20 mt-3 text-center",
          children: compareTrees.length > 0 ? 'Calculating for: ' + selectedForCalc.name + '. Select a different tree from the grid to recalculate.' : 'Based on the #1 ranked tree. Select any tree via Compare mode to recalculate.'
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: `flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 ${headerVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`,
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "relative flex-1",
          children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "search",
            size: 16,
            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-cream-200/30 pointer-events-none"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            id: "tree-search",
            type: "text",
            placeholder: "Search trees by name or Hindi name...",
            value: searchTerm,
            onChange: function (e) {
              setSearchTerm(e.target.value);
            },
            className: "search-input w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-forest-900/50 border border-forest-700/20 text-cream-100 text-sm placeholder:text-cream-200/25 transition-all duration-300"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1",
          children: [sortOptions.map(function (opt) {
            return /*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                setSortBy(opt.key);
              },
              className: `px-3 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border whitespace-nowrap transition-all duration-300 ${sortBy === opt.key ? 'sort-btn-active' : 'border-forest-700/20 text-cream-200/40 hover:text-cream-200/60 hover:border-forest-700/40'}`,
              children: opt.label
            }, opt.key, false);
          }), /*#__PURE__*/_jsxDEV("button", {
            id: "compare-toggle",
            onClick: function () {
              setCompareMode(!compareMode);
              if (compareMode) setCompareTrees([]);
            },
            className: `px-3 py-2 rounded-lg text-[11px] sm:text-xs font-semibold border whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${compareMode ? 'bg-earth-500/20 border-earth-400/40 text-earth-300' : 'border-forest-700/20 text-cream-200/40 hover:text-cream-200/60 hover:border-forest-700/40'}`,
            children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
              name: "layers",
              size: 12
            }, void 0, false), "Compare"]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), compareMode && /*#__PURE__*/_jsxDEV(ComparePanel, {
        trees: compareTrees,
        onRemove: function (t) {
          setCompareTrees(function (prev) {
            return prev.filter(function (x) {
              return x.rank !== t.rank;
            });
          });
        },
        onClear: function () {
          setCompareTrees([]);
        }
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center justify-between mb-5",
        children: [/*#__PURE__*/_jsxDEV("p", {
          className: "text-xs sm:text-sm text-cream-200/25",
          children: ["Showing ", displayedTrees.length, " of ", filteredTrees.length, " trees", searchTerm && ` matching "${searchTerm}"`]
        }, void 0, true), compareMode && /*#__PURE__*/_jsxDEV("p", {
          className: "text-xs text-earth-400/60",
          children: [compareTrees.length, "/4 selected"]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6",
        children: displayedTrees.map(function (tree) {
          var isSelected = compareTrees.some(function (t) {
            return t.rank === tree.rank;
          });
          return /*#__PURE__*/_jsxDEV(TreeCard, {
            tree: tree,
            index: tree.rank - 1,
            isCompare: compareMode,
            onToggleCompare: toggleCompare,
            isSelected: isSelected
          }, tree.rank, false);
        })
      }, void 0, false), filteredTrees.length === 0 && /*#__PURE__*/_jsxDEV("div", {
        className: "text-center py-16",
        children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
          name: "search",
          size: 40,
          className: "text-cream-200/15 mx-auto mb-4"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-cream-200/40 text-sm",
          children: ["No trees found matching “", searchTerm, "”"]
        }, void 0, true)]
      }, void 0, true), hasMore && /*#__PURE__*/_jsxDEV("div", {
        className: "text-center mt-8 sm:mt-10",
        children: /*#__PURE__*/_jsxDEV("button", {
          id: "show-all-trees",
          onClick: function () {
            setShowAll(true);
          },
          className: "inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border border-forest-600/30 text-forest-300 text-sm font-semibold hover:bg-forest-800/30 hover:border-forest-600/50 transition-all duration-300 hover:-translate-y-0.5",
          children: ["Show All ", filteredTrees.length, " Trees", /*#__PURE__*/_jsxDEV(LucideIcon, {
            name: "arrow-right",
            size: 14
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}

/* ──────────────────────────────────────────────
   Toast Notification
────────────────────────────────────────────── */
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
          className: "text-xs text-cream-200/50 truncate",
          children: detail
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        onClick: onClose,
        className: "text-cream-200/30 hover:text-cream-200/60 transition-colors p-1",
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
            className: "max-w-xl mx-auto text-base text-cream-200/50 leading-relaxed mb-10",
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
    className: "border-t border-forest-800/30 py-12 lg:py-16",
    children: /*#__PURE__*/_jsxDEV("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-8",
      children: /*#__PURE__*/_jsxDEV("div", {
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
            children: ["tree", /*#__PURE__*/_jsxDEV("span", {
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
            href: "#about",
            className: "hover:text-cream-200/60 transition-colors",
            children: "About"
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
          children: ["© ", new Date().getFullYear(), " treeforestation. All rights reserved."]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false)
  }, void 0, false);
}

/* ──────────────────────────────────────────────
   App
────────────────────────────────────────────── */
/* ──────────────────────────────────────────────
   Green Assistant – AI Chatbot Widget
────────────────────────────────────────────── */
function GreenAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hello! 🌿 I\'m the Green Assistant. I can dynamically read this website to answer your questions simply and briefly. How can I help you today?'
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contextTree, setContextTree] = useState(null); // Memory of last mentioned tree
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* Auto-scroll to latest message */
  useEffect(function () {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  /* Focus input when chat opens */
  useEffect(function () {
    if (isOpen && inputRef.current) {
      setTimeout(function () {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  /* ── Local Context Engine ── */
  function generateResponse(query) {
    var q = query.toLowerCase().trim();
    let currentContext = contextTree;

    /* Find trees mentioned in the query */
    var mentionedTrees = TREE_DATA.filter(function (t) {
      var nameMatch = q.includes(t.name.toLowerCase());
      var hindiName = t.hindi.split('(')[0].trim().toLowerCase();
      var hindiMatch = hindiName.length > 2 && q.includes(hindiName);
      return nameMatch || hindiMatch;
    });
    if (mentionedTrees.length === 1) {
      currentContext = mentionedTrees[0];
      setContextTree(currentContext); // update memory
    }

    /* Greetings */
    if (/^(hi|hello|hey|namaste|good\s*(morning|afternoon|evening))\b/i.test(q)) {
      return 'Hello! 🌿 I am the local Green Assistant.\n\nI can help you with:\n* **Tree species data** (CO₂, O₂, water, growth)\n* **Species insights & comparisons**\n* **Our Services:** Root Analysis, Canopy Projection, Thermal Impact\n* **The Miyawaki Method**\n\nHow can I help you today?';
    }

    /* Thanks */
    if (/\b(thanks|thank\s*you|thx|dhanyavaad)\b/i.test(q)) {
      return 'You\'re welcome! 🌱 Every tree planted makes a difference!';
    }

    /* Help */
    if (/\b(help|what can you|what do you do)\b/i.test(q)) {
      return 'I can help you with:\n* 🏆 **Insights** — "Which tree absorbs the most CO₂?"\n* 🌳 **Species info** — "Tell me about Neem"\n* 💧 **Requirements** — "Which trees need low water?"\n* ⚖️ **Comparisons** — "Compare Neem and Tamarind"\n* 🔬 **Services** — "What services do you offer?"';
    }

    /* Miyawaki Method */
    if (/\b(miyawaki|afforestation|layers)\b/i.test(q)) {
      if (/\b(layer|layers|4-layer|four-layer)\b/i.test(q)) {
        return '🌳 **The Miyawaki 4-Layer System:**\n1. **Shrubs** (up to 6 feet)\n2. **Sub-trees** (up to 25 feet)\n3. **Trees** (up to 40 feet)\n4. **Canopy layer** (above 40 feet)\n\nThis ensures sunlight is received only from the top, promoting rapid upward growth.';
      }
      return '🌱 **The Miyawaki Method** is an advanced afforestation technique that uses native species to create dense, multilayered forests.\n\n**Core Principles:**\n* **30x denser**, grows **10x faster**\n* **Maintenance-free** after 3 years\n* Uses **4 layers** (shrubs, sub-trees, trees, canopy)\n* Requires **3-5 saplings per square meter**';
    }

    /* Fast/Slow Growth */
    if (/\b(fast|fastest|quick)\b/i.test(q) && /\b(grow|growth)\b/i.test(q)) {
      var fastTrees = TREE_DATA.filter(t => t.growth && (t.growth.includes('Fast') || t.growth.includes('Very Fast')));
      return '🚀 **Fastest Growing Trees:**\n\n' + fastTrees.slice(0, 5).map(t => '* **' + t.name + '** (' + t.growth + ')').join('\n') + '\n\nThese are excellent for rapid canopy establishment!';
    }
    if (/\b(slow|slowest)\b/i.test(q) && /\b(grow|growth)\b/i.test(q)) {
      var slowTrees = TREE_DATA.filter(t => t.growth && t.growth.includes('Slow'));
      return '🐢 **Slowest Growing Trees:**\n\n' + slowTrees.slice(0, 5).map(t => '* **' + t.name + '** (' + t.growth + ')').join('\n');
    }

    /* Water Requirements */
    if (/\b(water|irrigation)\b/i.test(q) && /\b(low|less|little)\b/i.test(q)) {
      var lowWater = TREE_DATA.filter(t => t.water && t.water.includes('Low'));
      return '🌵 **Low Water Requirement Trees:**\n\n' + lowWater.slice(0, 5).map(t => '* **' + t.name + '**').join('\n') + '\n\nGreat for dry or drought-prone areas.';
    }
    if (/\b(water|irrigation)\b/i.test(q) && /\b(high|more|a lot)\b/i.test(q)) {
      var highWater = TREE_DATA.filter(t => t.water && t.water.includes('High'));
      return '💧 **High Water Requirement Trees:**\n\n' + highWater.map(t => '* **' + t.name + '**').join('\n');
    }

    /* Top / most CO₂ */
    if (/\b(most|best|highest|top|maximum|greatest|rank\s*1)\b/i.test(q) && /co2|carbon|absorb/i.test(q)) {
      var sorted = TREE_DATA.slice().sort(function (a, b) {
        return b.c - a.c;
      });
      return '🏆 **Top CO₂ Absorbers (kg/year):**\n\n' + sorted.slice(0, 5).map(t => '* **' + t.name + '** — ' + t.c.toLocaleString() + ' kg/yr').join('\n');
    }

    /* Top / most O₂ */
    if (/\b(most|best|highest|top|maximum|greatest)\b/i.test(q) && /o2|oxygen|release|produce|breath/i.test(q)) {
      var sorted = TREE_DATA.slice().sort(function (a, b) {
        return b.o - a.o;
      });
      return '🏆 **Top O₂ Producers (kg/year):**\n\n' + sorted.slice(0, 5).map(t => '* **' + t.name + '** — ' + t.o.toLocaleString() + ' kg/yr').join('\n');
    }

    /* Contextual Questions based on memory */
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

    /* Specific tree mentioned — single tree */
    if (mentionedTrees.length === 1) {
      var t = mentionedTrees[0];
      let extra = '';
      if (q.includes('safe') || q.includes('distance')) extra += '\n* 📏 **Safe Distance:** Building ' + t.safeBldg + ', Road ' + t.safeRoad;
      if (q.includes('water')) extra += '\n* 💧 **Water:** ' + t.water;
      if (q.includes('grow')) extra += '\n* 📈 **Growth:** ' + t.growth;
      return '🌳 **' + t.name + '** (' + t.hindi + ')\n\n* 🌿 **CO₂ Absorbed:** ' + t.c.toLocaleString() + ' kg/year\n* 💨 **O₂ Released:** ' + t.o.toLocaleString() + ' kg/year' + extra + '\n* 🚗 Offsets ' + getCarEquivalent(t.c) + ' days of car driving/year\n* 👥 Provides O₂ for ' + getPeopleO2(t.o) + ' people/year\n\n*(You can now ask follow-up questions like "what is its water requirement?" or "how tall does it grow?")*';
    }

    /* Multiple trees mentioned — comparison */
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

    /* Services */
    if (/\b(service|offer|what.*(do|does)|root\s*analysis|canopy|thermal|planning)\b/i.test(q)) {
      return '🔬 **Our Core Services:**\n\n1. **Root & Plot Analysis:** We map root zones against your site boundaries and utilities.\n2. **Canopy Projection:** Visualize future canopy coverage at 5, 10, and 25-year intervals.\n3. **Thermal Impact Assessment:** Quantify the cooling effect of strategic tree placement.';
    }

    /* Total / stats / how many */
    if (/\b(total|how many|database|all trees|overall|sum|statistic)\b/i.test(q)) {
      var totalCO2 = TREE_DATA.reduce(function (s, t) {
        return s + t.c;
      }, 0);
      var totalO2 = TREE_DATA.reduce(function (s, t) {
        return s + t.o;
      }, 0);
      return '📊 **Database Overview:**\n\n* **Total species:** 38\n* **Combined CO₂ absorption:** ' + totalCO2.toLocaleString(undefined, {
        maximumFractionDigits: 0
      }) + ' kg/year\n* **Combined O₂ release:** ' + totalO2.toLocaleString(undefined, {
        maximumFractionDigits: 0
      }) + ' kg/year\n* **Top absorber:** Indian siris tree (1,029 kg CO₂/yr)';
    }

    /* Planting / environmental impact */
    if (/\b(plant|planting|impact|environment|green|sustainable|benefit|ecology)\b/i.test(q)) {
      return '🌱 **Environmental Impact of Tree Planting:**\n\nPlanting just 10 Indian siris trees would absorb ' + (TREE_DATA[0].c * 10).toLocaleString() + ' kg of CO₂ per year!\n\nUse our Planting Impact Calculator in the Tree Database section to explore different species and quantities.';
    }

    /* Compare keyword without specific trees */
    if (/\bcompare\b/i.test(q)) {
      return 'I\'d love to help you compare trees! Try asking:\n* "Compare Neem and Tamarind"\n* "Compare Mango and Guava"\n\nYou can also use the Compare mode in the Tree Database section! 👆';
    }

    /* Fallback */
    return 'I\'m not sure I understood that. I can help with:\n* **Tree species data** (e.g., "Tell me about Neem")\n* **Properties** (e.g., "Which trees need low water?")\n* **Our services** (Root Analysis, Canopy, Thermal)\n* **Miyawaki Method**\n\nTry asking "Which tree absorbs the most CO₂?" 🌿';
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
    setTimeout(function () {
      var response = generateResponse(userMsg);
      setIsTyping(false);
      setMessages(function (prev) {
        return prev.concat([{
          role: 'assistant',
          content: response
        }]);
      });
    }, 600 + Math.random() * 600);
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  /* ── Quick-action suggestion chips ── */
  var quickActions = [{
    label: '🏆 Top CO₂ trees',
    query: 'Which trees absorb the most CO2?'
  }, {
    label: '🌳 About Neem',
    query: 'Tell me about Neem'
  }, {
    label: '💧 Low Water Trees',
    query: 'Which trees need low water?'
  }, {
    label: '🚀 Fastest Growing',
    query: 'What are the fastest growing trees?'
  }];
  var showQuickActions = messages.length === 1;
  return /*#__PURE__*/_jsxDEV(React.Fragment, {
    children: [isOpen && /*#__PURE__*/_jsxDEV("div", {
      className: "fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-[90] w-[calc(100vw-1.5rem)] sm:w-[400px] chat-slide-up",
      style: {
        maxHeight: 'calc(100vh - 8rem)'
      },
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "bg-forest-900 rounded-2xl border border-forest-700 shadow-2xl shadow-black/50 flex flex-col overflow-hidden",
        style: {
          maxHeight: 'calc(100vh - 8rem)'
        },
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between px-5 py-3.5 border-b border-forest-700/20 bg-forest-900/40 flex-shrink-0",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "w-9 h-9 rounded-xl bg-gradient-to-br from-forest-500 to-earth-600 flex items-center justify-center shadow-lg shadow-forest-900/50",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "bot",
                size: 20,
                className: "text-cream-50"
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "text-sm font-bold text-cream-50 leading-tight",
                children: "Green Assistant"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-1.5",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "w-1.5 h-1.5 rounded-full bg-earth-400 animate-pulse"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "text-[10px] text-cream-200/40 font-medium",
                  children: "Online • Context Aware"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1",
            children: [/*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                setMessages([{
                  role: 'assistant',
                  content: 'Chat history cleared. How can I help you today?'
                }]);
                setContextTree(null);
              },
              className: "w-8 h-8 rounded-lg flex items-center justify-center text-cream-200/40 hover:text-earth-400 hover:bg-forest-800/50 transition-all duration-200",
              "aria-label": "Clear chat",
              title: "Clear Chat",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "x",
                size: 16
              }, void 0, false)
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: function () {
                setIsOpen(false);
              },
              className: "w-8 h-8 rounded-lg flex items-center justify-center text-cream-200/40 hover:text-cream-200/70 hover:bg-forest-800/50 transition-all duration-200",
              "aria-label": "Minimize chat",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "chevron-down",
                size: 18
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex-1 overflow-y-auto px-4 py-4 space-y-4 chat-messages",
          style: {
            minHeight: '280px',
            maxHeight: '400px'
          },
          children: [messages.map(function (msg, i) {
            var isUser = msg.role === 'user';
            return /*#__PURE__*/_jsxDEV("div", {
              className: 'flex ' + (isUser ? 'justify-end' : 'justify-start'),
              children: /*#__PURE__*/_jsxDEV("div", {
                className: 'flex gap-2.5 max-w-[88%] ' + (isUser ? 'flex-row-reverse' : 'flex-row'),
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: 'flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ' + (isUser ? 'bg-earth-500/20 text-earth-400' : 'bg-gradient-to-br from-forest-500/30 to-forest-600/30 text-forest-300'),
                  children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                    name: isUser ? 'user' : 'bot',
                    size: 14
                  }, void 0, false)
                }, void 0, false), isUser ? /*#__PURE__*/_jsxDEV("div", {
                  className: "rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed bg-gradient-to-br from-earth-500/20 to-earth-600/15 text-cream-100 border border-earth-500/15 rounded-tr-md",
                  style: {
                    whiteSpace: 'pre-line'
                  },
                  children: msg.content
                }, void 0, false) : /*#__PURE__*/_jsxDEV("div", {
                  className: "rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed bg-forest-800/40 text-cream-200/80 border border-forest-700/15 rounded-tl-md prose prose-invert prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0.5",
                  dangerouslySetInnerHTML: {
                    __html: window.marked ? marked.parse(msg.content) : msg.content
                  }
                }, void 0, false)]
              }, void 0, true)
            }, i, false);
          }), isTyping && /*#__PURE__*/_jsxDEV("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/_jsxDEV("div", {
              className: "flex gap-2.5",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-forest-500/30 to-forest-600/30 text-forest-300",
                children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                  name: "bot",
                  size: 14
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "bg-forest-800/40 border border-forest-700/15 rounded-2xl rounded-tl-md px-5 py-3.5 flex items-center gap-1.5",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-forest-400/60 typing-dot"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-forest-400/60 typing-dot"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: "w-2 h-2 rounded-full bg-forest-400/60 typing-dot"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)
          }, void 0, false), showQuickActions && !isTyping && /*#__PURE__*/_jsxDEV("div", {
            className: "flex flex-wrap gap-2 pt-1",
            children: quickActions.map(function (action, i) {
              return /*#__PURE__*/_jsxDEV("button", {
                onClick: function () {
                  handleSend(action.query);
                },
                className: "px-3 py-1.5 rounded-full text-[11px] font-medium bg-forest-800/40 border border-forest-700/20 text-cream-200/60 hover:text-cream-100 hover:border-forest-600/30 hover:bg-forest-700/30 transition-all duration-200",
                children: action.label
              }, i, false);
            })
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            ref: messagesEndRef
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "px-4 py-3 border-t border-forest-700/20 bg-forest-900/30 flex-shrink-0",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/_jsxDEV("input", {
              ref: inputRef,
              type: "text",
              value: input,
              onChange: function (e) {
                setInput(e.target.value);
              },
              onKeyDown: handleKeyDown,
              placeholder: "Ask about trees, properties...",
              className: "search-input flex-1 px-4 py-2.5 rounded-xl bg-forest-900/50 border border-forest-700/20 text-cream-100 text-sm placeholder:text-cream-200/25 transition-all duration-300",
              disabled: isTyping,
              "aria-label": "Chat message input"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              onClick: handleSend,
              disabled: !input.trim() || isTyping,
              className: 'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ' + (input.trim() && !isTyping ? 'bg-gradient-to-br from-forest-500 to-forest-600 text-cream-50 hover:from-forest-400 hover:to-forest-500 shadow-lg shadow-forest-900/50 hover:-translate-y-0.5' : 'bg-forest-800/30 text-cream-200/20 cursor-not-allowed'),
              "aria-label": "Send message",
              children: /*#__PURE__*/_jsxDEV(LucideIcon, {
                name: "send",
                size: 16
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex justify-between items-center px-1 mt-2",
            children: /*#__PURE__*/_jsxDEV("p", {
              className: "text-[9px] text-cream-200/20 text-center flex-1",
              children: "Powered by Green Assistant • Built-in Memory"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
      id: "green-assistant-toggle",
      onClick: function () {
        setIsOpen(!isOpen);
      },
      className: 'fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group ' + (isOpen ? 'bg-gradient-to-br from-forest-700 to-forest-800 shadow-black/40 hover:from-forest-600 hover:to-forest-700' : 'bg-gradient-to-br from-forest-500 to-earth-600 shadow-forest-900/60 hover:from-forest-400 hover:to-earth-500 hover:-translate-y-1 hover:shadow-forest-500/30'),
      "aria-label": isOpen ? 'Close Green Assistant' : 'Open Green Assistant',
      children: [/*#__PURE__*/_jsxDEV(LucideIcon, {
        name: isOpen ? 'x' : 'message-circle',
        size: 22,
        className: "text-cream-50 transition-transform duration-300"
      }, void 0, false), !isOpen && /*#__PURE__*/_jsxDEV("span", {
        className: "absolute -top-0.5 -right-0.5 flex items-center justify-center",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: "w-3.5 h-3.5 rounded-full bg-earth-400 border-2 border-forest-950"
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "w-3.5 h-3.5 rounded-full bg-earth-400 animate-ping absolute"
        }, void 0, false)]
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
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
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
function App() {
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: [/*#__PURE__*/_jsxDEV(Navbar, {}, void 0, false), /*#__PURE__*/_jsxDEV(Hero, {}, void 0, false), /*#__PURE__*/_jsxDEV(Services, {}, void 0, false), /*#__PURE__*/_jsxDEV(MiyawakiMethod, {}, void 0, false), /*#__PURE__*/_jsxDEV(TreeDatabase, {}, void 0, false), /*#__PURE__*/_jsxDEV(Contact, {}, void 0, false), /*#__PURE__*/_jsxDEV(Footer, {}, void 0, false), /*#__PURE__*/_jsxDEV(GreenAssistant, {}, void 0, false)]
  }, void 0, true);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/_jsxDEV(App, {}, void 0, false));
