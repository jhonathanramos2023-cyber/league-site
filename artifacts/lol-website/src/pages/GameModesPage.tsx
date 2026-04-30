import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

function SummonersRiftMap() {
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="sr-bg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#1a3a2a" />
          <stop offset="100%" stopColor="#0a1f15" />
        </radialGradient>
        <linearGradient id="sr-river" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0BC4E3" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0BC4E3" stopOpacity="0.4" />
        </linearGradient>
        <filter id="sr-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>

      <rect width="800" height="800" fill="url(#sr-bg)" />

      {/* Jungle texture dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = 50 + (i * 137) % 700;
        const y = 50 + (i * 211) % 700;
        return <circle key={i} cx={x} cy={y} r={1.5} fill="#2a4a35" opacity="0.6" />;
      })}

      {/* Top lane */}
      <path d="M 110 720 L 110 110 L 690 110" stroke="#8B7355" strokeWidth="50" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M 110 720 L 110 110 L 690 110" stroke="#C8AA6E" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 6" />

      {/* Bot lane */}
      <path d="M 110 720 L 690 720 L 690 110" stroke="#8B7355" strokeWidth="50" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M 110 720 L 690 720 L 690 110" stroke="#C8AA6E" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 6" />

      {/* Mid lane */}
      <path d="M 110 720 L 690 110" stroke="#8B7355" strokeWidth="45" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M 110 720 L 690 110" stroke="#C8AA6E" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 6" />

      {/* River */}
      <path d="M -10 460 Q 200 410 400 410 Q 600 410 810 360" stroke="url(#sr-river)" strokeWidth="34" fill="none" />

      {/* Blue Nexus */}
      <g filter="url(#sr-glow)">
        <circle cx="130" cy="700" r="35" fill="#1E90FF" opacity="0.85" />
        <circle cx="130" cy="700" r="20" fill="#0BC4E3" />
      </g>
      <text x="130" y="755" textAnchor="middle" fill="#0BC4E3" fontSize="12" fontFamily="Cinzel, serif" fontWeight="bold">NEXO AZUL</text>

      {/* Red Nexus */}
      <g filter="url(#sr-glow)">
        <circle cx="670" cy="100" r="35" fill="#FF4444" opacity="0.85" />
        <circle cx="670" cy="100" r="20" fill="#FF8888" />
      </g>
      <text x="670" y="60" textAnchor="middle" fill="#FF8888" fontSize="12" fontFamily="Cinzel, serif" fontWeight="bold">NEXO ROJO</text>

      {/* Towers - blue side */}
      {[[110, 580], [110, 380], [220, 580], [310, 490], [220, 720], [400, 720]].map(([x, y], i) => (
        <rect key={`bt-${i}`} x={x - 6} y={y - 14} width="12" height="28" fill="#1E90FF" opacity="0.7" stroke="#0BC4E3" strokeWidth="1" />
      ))}
      {/* Towers - red side */}
      {[[690, 220], [690, 420], [580, 220], [490, 310], [580, 80], [400, 80]].map(([x, y], i) => (
        <rect key={`rt-${i}`} x={x - 6} y={y - 14} width="12" height="28" fill="#FF4444" opacity="0.7" stroke="#FF8888" strokeWidth="1" />
      ))}

      {/* Dragon pit */}
      <circle cx="600" cy="560" r="32" fill="#C8542A" opacity="0.25" />
      <text x="600" y="566" textAnchor="middle" fontSize="22">🐲</text>
      <text x="600" y="610" textAnchor="middle" fill="#C8542A" fontSize="11" fontFamily="Rajdhani" fontWeight="bold">DRAGÓN</text>

      {/* Baron pit */}
      <circle cx="200" cy="240" r="32" fill="#9B5CD4" opacity="0.25" />
      <text x="200" y="248" textAnchor="middle" fontSize="22">👁️</text>
      <text x="200" y="285" textAnchor="middle" fill="#9B5CD4" fontSize="11" fontFamily="Rajdhani" fontWeight="bold">BARÓN</text>

      {/* Lane labels */}
      <text x="55" y="400" fontSize="13" fill="#C8AA6E" transform="rotate(-90 55 400)" fontFamily="Cinzel" fontWeight="bold" letterSpacing="3">TOP</text>
      <text x="400" y="780" fontSize="13" fill="#C8AA6E" textAnchor="middle" fontFamily="Cinzel" fontWeight="bold" letterSpacing="3">BOT</text>
      <text x="430" y="430" fontSize="13" fill="#C8AA6E" transform="rotate(-45 430 430)" fontFamily="Cinzel" fontWeight="bold" letterSpacing="3">MID</text>
    </svg>
  );
}

function HowlingAbyssMap() {
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ha-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a1a2e" />
          <stop offset="50%" stopColor="#152a45" />
          <stop offset="100%" stopColor="#0a1a2e" />
        </linearGradient>
        <linearGradient id="bridge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a5a7e" />
          <stop offset="100%" stopColor="#1a3a5e" />
        </linearGradient>
        <filter id="ha-glow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      <rect width="800" height="800" fill="url(#ha-bg)" />

      {/* Snow particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (i * 167) % 800;
        const y = (i * 89) % 800;
        return <circle key={i} cx={x} cy={y} r={1.5} fill="#ffffff" opacity={0.3 + (i % 3) * 0.15} />;
      })}

      {/* Bridge (single lane) */}
      <rect x="0" y="320" width="800" height="160" fill="url(#bridge)" stroke="#5a7a9e" strokeWidth="2" />
      <line x1="0" y1="335" x2="800" y2="335" stroke="#7a9abe" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="465" x2="800" y2="465" stroke="#7a9abe" strokeWidth="1" opacity="0.5" />

      {/* Bridge stones */}
      {Array.from({ length: 16 }).map((_, i) => (
        <rect key={i} x={i * 50} y={335} width={48} height={130} fill="none" stroke="#4a6a8e" strokeWidth="1" opacity="0.4" />
      ))}

      {/* Blue Nexus */}
      <circle cx="80" cy="400" r="40" fill="#1E90FF" opacity="0.3" filter="url(#ha-glow)" />
      <circle cx="80" cy="400" r="28" fill="#1E90FF" opacity="0.8" />
      <circle cx="80" cy="400" r="14" fill="#0BC4E3" />
      <text x="80" y="500" textAnchor="middle" fill="#0BC4E3" fontSize="13" fontFamily="Cinzel" fontWeight="bold">NEXO AZUL</text>

      {/* Red Nexus */}
      <circle cx="720" cy="400" r="40" fill="#FF4444" opacity="0.3" filter="url(#ha-glow)" />
      <circle cx="720" cy="400" r="28" fill="#FF4444" opacity="0.8" />
      <circle cx="720" cy="400" r="14" fill="#FF8888" />
      <text x="720" y="500" textAnchor="middle" fill="#FF8888" fontSize="13" fontFamily="Cinzel" fontWeight="bold">NEXO ROJO</text>

      {/* Blue towers */}
      {[180, 280].map((x) => (
        <g key={`b-${x}`}>
          <rect x={x - 12} y={370} width={24} height={60} fill="#1E90FF" opacity="0.7" stroke="#0BC4E3" strokeWidth="1.5" />
          <polygon points={`${x - 14},370 ${x},356 ${x + 14},370`} fill="#0BC4E3" opacity="0.7" />
        </g>
      ))}
      {/* Red towers */}
      {[520, 620].map((x) => (
        <g key={`r-${x}`}>
          <rect x={x - 12} y={370} width={24} height={60} fill="#FF4444" opacity="0.7" stroke="#FF8888" strokeWidth="1.5" />
          <polygon points={`${x - 14},370 ${x},356 ${x + 14},370`} fill="#FF8888" opacity="0.7" />
        </g>
      ))}

      {/* Abyss above and below */}
      <rect x="0" y="0" width="800" height="320" fill="#000510" opacity="0.6" />
      <rect x="0" y="480" width="800" height="320" fill="#000510" opacity="0.6" />

      <text x="400" y="160" textAnchor="middle" fill="#0BC4E3" opacity="0.4" fontSize="14" fontFamily="Cinzel" letterSpacing="6">ABISMO HELADO</text>
      <text x="400" y="640" textAnchor="middle" fill="#0BC4E3" opacity="0.4" fontSize="14" fontFamily="Cinzel" letterSpacing="6">ABISMO HELADO</text>
      <text x="400" y="780" textAnchor="middle" fill="#C8AA6E" fontSize="13" fontFamily="Cinzel" fontWeight="bold" letterSpacing="3">UN SOLO CARRIL</text>
    </svg>
  );
}

function TFTBoardMap() {
  const hexes: { x: number; y: number; r: number; c: number }[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 7; c++) {
      const x = 100 + c * 90 + (r % 2) * 45;
      const y = 250 + r * 78;
      hexes.push({ x, y, r, c });
    }
  }
  const hexPath = (x: number, y: number, s = 40) => {
    const points = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i;
      return `${x + Math.cos(a) * s},${y + Math.sin(a) * s}`;
    });
    return points.join(" ");
  };
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="tft-bg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#2a1a4a" />
          <stop offset="100%" stopColor="#0a0520" />
        </radialGradient>
        <linearGradient id="hex-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9B5CD4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5C2D7C" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#tft-bg)" />

      {/* Stars background */}
      {Array.from({ length: 80 }).map((_, i) => {
        const x = (i * 173) % 800;
        const y = (i * 91) % 800;
        return <circle key={i} cx={x} cy={y} r={i % 7 === 0 ? 2 : 1} fill="#C8AA6E" opacity={0.3 + (i % 5) * 0.1} />;
      })}

      <text x="400" y="100" textAnchor="middle" fill="#C8AA6E" fontSize="20" fontFamily="Cinzel" fontWeight="bold" letterSpacing="6">TABLERO HEXAGONAL</text>
      <text x="400" y="130" textAnchor="middle" fill="#9B5CD4" fontSize="13" fontFamily="Rajdhani" letterSpacing="4">8 JUGADORES SIMULTÁNEOS</text>

      {/* Player bench (bottom row) */}
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={`bench-${i}`}>
          <polygon points={hexPath(120 + i * 70, 660, 32)} fill="#C8AA6E" opacity="0.1" stroke="#C8AA6E" strokeWidth="1.5" />
        </g>
      ))}
      <text x="400" y="720" textAnchor="middle" fill="#C8AA6E" fontSize="11" fontFamily="Rajdhani" letterSpacing="3" opacity="0.7">BANCA DE CAMPEONES</text>

      {/* Main board */}
      {hexes.map((h, i) => (
        <g key={i}>
          <polygon
            points={hexPath(h.x, h.y, 40)}
            fill="url(#hex-grad)"
            stroke="#9B5CD4"
            strokeWidth="1.5"
            opacity="0.85"
          />
          {/* Sample champions on some hexes */}
          {[3, 5, 12, 15, 20, 22, 26].includes(i) && (
            <circle cx={h.x} cy={h.y} r="22" fill="#C8AA6E" opacity="0.5" stroke="#F0E6D3" strokeWidth="2" />
          )}
        </g>
      ))}
    </svg>
  );
}

function ArenaMap() {
  return (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="arena-bg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#3a1a1a" />
          <stop offset="100%" stopColor="#1a0a0a" />
        </radialGradient>
        <radialGradient id="arena-floor" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#5a3a1a" />
          <stop offset="80%" stopColor="#3a2510" />
          <stop offset="100%" stopColor="#1a1005" />
        </radialGradient>
      </defs>
      <rect width="800" height="800" fill="url(#arena-bg)" />

      {/* Arena rings */}
      <circle cx="400" cy="400" r="320" fill="none" stroke="#C8542A" strokeWidth="3" opacity="0.4" />
      <circle cx="400" cy="400" r="280" fill="url(#arena-floor)" stroke="#C8AA6E" strokeWidth="2" />
      <circle cx="400" cy="400" r="240" fill="none" stroke="#C8AA6E" strokeWidth="1" opacity="0.4" strokeDasharray="6 8" />
      <circle cx="400" cy="400" r="180" fill="none" stroke="#C8AA6E" strokeWidth="1" opacity="0.3" strokeDasharray="6 8" />
      <circle cx="400" cy="400" r="120" fill="none" stroke="#C8AA6E" strokeWidth="1" opacity="0.3" strokeDasharray="6 8" />

      {/* Center crossed swords */}
      <text x="400" y="425" textAnchor="middle" fontSize="60" opacity="0.6">⚔️</text>

      {/* 4 team positions */}
      {[
        { x: 400, y: 160, color: "#1E90FF", label: "EQUIPO 1" },
        { x: 640, y: 400, color: "#FF4444", label: "EQUIPO 2" },
        { x: 400, y: 640, color: "#2E7D32", label: "EQUIPO 3" },
        { x: 160, y: 400, color: "#9B5CD4", label: "EQUIPO 4" },
      ].map((t) => (
        <g key={t.label}>
          <circle cx={t.x} cy={t.y} r="35" fill={t.color} opacity="0.4" />
          <circle cx={t.x} cy={t.y - 8} r="8" fill={t.color} stroke="#F0E6D3" strokeWidth="1.5" />
          <circle cx={t.x + 12} cy={t.y + 6} r="8" fill={t.color} stroke="#F0E6D3" strokeWidth="1.5" />
          <text x={t.x} y={t.y + 60} textAnchor="middle" fill={t.color} fontSize="11" fontFamily="Cinzel" fontWeight="bold" letterSpacing="2">{t.label}</text>
        </g>
      ))}

      <text x="400" y="60" textAnchor="middle" fill="#C8AA6E" fontSize="20" fontFamily="Cinzel" fontWeight="bold" letterSpacing="6">ARENA 2V2V2V2</text>
      <text x="400" y="780" textAnchor="middle" fill="#C8542A" fontSize="13" fontFamily="Rajdhani" letterSpacing="3">EL ÚLTIMO EQUIPO EN PIE GANA</text>
    </svg>
  );
}

const MODES = [
  {
    name: "Grieta del Invocador",
    tag: "5v5",
    tagColor: "#C8AA6E",
    desc: "El modo principal de League of Legends. Dos equipos de 5 invocadores se enfrentan en un mapa de 3 carriles, con jungla, objetivos neutrales y el Nexus enemigo como objetivo final.",
    features: ["3 carriles: Top, Mid, Bot", "Jungla con objetivos neutrales (Dragón, Barón)", "Partidas de 25-45 minutos", "Modo principal del juego competitivo"],
    color: "#C8AA6E",
    Map: SummonersRiftMap,
  },
  {
    name: "Abismo de los Lamentos",
    tag: "ARAM",
    tagColor: "#0BC4E3",
    desc: "All Random All Mid — Un único carril donde 5 campeones elegidos al azar se enfrentan sin descanso. Caos puro, acción constante y cero posibilidad de huida.",
    features: ["Campeones aleatorios", "Un solo carril central", "Partidas de 15-25 minutos", "Sin retornos a base, recuperación al morir"],
    color: "#0BC4E3",
    Map: HowlingAbyssMap,
  },
  {
    name: "Teamfight Tactics",
    tag: "AUTO BATTLER",
    tagColor: "#9B5CD4",
    desc: "Un modo de auto battler estratégico donde combinas campeones de League of Legends para crear el sinergia perfecta y derrotar a 7 oponentes en un tablero táctico hexagonal.",
    features: ["8 jugadores, modo battle royale", "Sinergias y combinaciones únicas", "Objetos y rasgos estratégicos", "Partidas de 35-45 minutos"],
    color: "#9B5CD4",
    Map: TFTBoardMap,
  },
  {
    name: "Arena",
    tag: "2v2v2v2",
    tagColor: "#C8542A",
    desc: "Cuatro equipos de dos campeones se eliminan en combates directos por una arena que se va reduciendo. El último equipo en pie gana. Estrategia, reflejos y sinergias al límite.",
    features: ["4 equipos de 2 jugadores", "Objetos y aumentos únicos", "Arena que se reduce con el tiempo", "Partidas de 20-30 minutos"],
    color: "#C8542A",
    Map: ArenaMap,
  },
];

export default function GameModesPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      <div
        className="relative py-20 px-4 text-center"
        style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
      >
        <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4">El Campo de Batalla</p>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-[#F0E6D3] uppercase mb-4">Modos de Juego</h1>
        <GoldDivider />
        <p className="font-sans text-[#F0E6D3]/60 text-lg max-w-2xl mx-auto mt-6">
          Desde batallas 5v5 épicas hasta caos total en arena, League of Legends ofrece múltiples formas de experimentar el combate.
        </p>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {MODES.map((m, i) => {
            const Map = m.Map;
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 overflow-hidden border`}
                style={{ borderColor: m.color + "30" }}
              >
                <div className="md:w-2/5 relative shrink-0" style={{ background: "linear-gradient(135deg, #050E1A 0%, #091428 100%)" }}>
                  <div className="aspect-square w-full">
                    <Map />
                  </div>
                </div>

                <div className="flex-1 p-8 md:p-10" style={{ background: m.color + "05" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 text-xs font-sans font-bold tracking-widest uppercase"
                      style={{ backgroundColor: m.color + "20", color: m.color, border: `1px solid ${m.color}40` }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl font-black text-[#F0E6D3] uppercase mb-4">{m.name}</h2>
                  <p className="font-sans text-[#F0E6D3]/60 leading-relaxed mb-6">{m.desc}</p>
                  <ul className="space-y-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-sm text-[#F0E6D3]/50">
                        <span className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ backgroundColor: m.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <SectionReveal>
          <p className="font-sans text-[#F0E6D3]/50 text-base mb-6">Todos los modos son gratuitos. Sin pago para ganar.</p>
          <a
            href="https://signup.leagueoflegends.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-sans font-black text-sm tracking-widest uppercase text-[#050E1A] bg-[#C8AA6E] hover:bg-[#F0E6D3] transition-all"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            Jugar Gratis
          </a>
        </SectionReveal>
      </section>
    </div>
  );
}
