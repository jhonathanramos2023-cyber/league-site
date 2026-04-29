import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const MODES = [
  {
    name: "Grieta del Invocador",
    tag: "5v5",
    tagColor: "#C8AA6E",
    desc: "El modo principal de League of Legends. Dos equipos de 5 invocadores se enfrentan en un mapa de 3 carriles, con jungla, objetivos neutrales y el Nexus enemigo como objetivo final.",
    features: ["3 carriles: Top, Mid, Bot", "Jungla con objetivos neutrales (Dragón, Barón)", "Partidas de 25-45 minutos", "Modo principal del juego competitivo"],
    champion: "Jinx",
    color: "#C8AA6E",
  },
  {
    name: "ARAM",
    tag: "5v5",
    tagColor: "#0BC4E3",
    desc: "All Random All Mid — Un único carril donde 5 campeones elegidos al azar se enfrentan sin descanso. Caos puro, acción constante y cero posibilidad de huida.",
    features: ["Campeones aleatorios", "Un solo carril", "Partidas de 15-25 minutos", "Sin tiendas ni retornos a base"],
    champion: "Ezreal",
    color: "#0BC4E3",
  },
  {
    name: "Teamfight Tactics",
    tag: "Auto Battler",
    tagColor: "#9B5CD4",
    desc: "Un modo de auto battler estratégico donde combinas campeones de League of Legends para crear el sinergia perfecta y derrotar a 7 oponentes en un tablero táctico.",
    features: ["8 jugadores, modo battle royale", "Sinergias y combinaciones únicas", "Objetos y rasgos estratégicos", "Partidas de 35-45 minutos"],
    champion: "Lux",
    color: "#9B5CD4",
  },
  {
    name: "Arena",
    tag: "2v2v2v2",
    tagColor: "#C8542A",
    desc: "Cuatro equipos de dos campeones se eliminan en combates directos por una arena que se va reduciendo. El último equipo en pie gana. Estrategia, reflejos y sinergias al límite.",
    features: ["4 equipos de 2 jugadores", "Objetos y aumentos únicos", "Arena que se reduce", "Partidas de 20-30 minutos"],
    champion: "Darius",
    color: "#C8542A",
  },
];

export default function GameModesPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Header */}
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

      {/* Modes */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {MODES.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 overflow-hidden border`}
              style={{ borderColor: m.color + "30" }}
            >
              {/* Image */}
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden shrink-0">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${m.champion}_0.jpg`}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(${i % 2 === 0 ? "90" : "270"}deg, #050E1A 0%, transparent 60%)` }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050E1A]/60 md:hidden" />
              </div>

              {/* Content */}
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
          ))}
        </div>
      </section>

      {/* CTA */}
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
