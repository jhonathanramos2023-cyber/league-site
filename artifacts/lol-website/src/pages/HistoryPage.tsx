import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const TIMELINE = [
  { era: "El Amanecer del Mundo", date: "Hace miles de años", desc: "Los Celestiales dan forma a Runeterra. Los primeros seres despiertan — vastaya, bestias arcanas, y los primeros humanos que aprenden a canalizar la magia." },
  { era: "El Imperio de Shurima", date: "Hace 3.000 años", desc: "Shurima florece como el mayor Imperio del mundo. El Ritual de la Ascensión crea guerreros divinos. Azir y sus hermanos Ascendidos protegen el mundo." },
  { era: "La Caída de Shurima", date: "Hace 2.700 años", desc: "La traición de Xerath destruye el Imperio de Shurima. Los Ascendidos corrompidos se convierten en los Darkin. El conocimiento del mundo se pierde entre las arenas." },
  { era: "La Ruptura Oscura", date: "Hace 1.500 años", desc: "Las Islas de la Fortuna son corrompidas en la catástrofe conocida como la Ruina. Las Islas de las Sombras nacen. La Niebla Negra comienza a extenderse." },
  { era: "El Nacimiento de Demacia y Noxus", date: "Hace 1.000 años", desc: "Refugiados que huyen de la magia fundan Demacia. El Imperio Noxiano comienza su expansión implacable. La guerra entre ambas naciones dura siglos." },
  { era: "La Revolución Hextech", date: "Hace 200 años", desc: "Piltóver inventa la tecnología hextech, fusionando magia y ciencia. Zaun surge como su sombra industrial. La brecha entre ricos y pobres se hace abismal." },
  { era: "La Invasión de Ionia", date: "Hace 10 años (lore)", desc: "Noxus invade el pacífico archipiélago de Ionia. La guerra espiritual más brutal del mundo moderno deja cicatrices que aún no sanan." },
  { era: "La Ruina de Viego", date: "El presente", desc: "El Rey Ruinado Viego desata la Niebla Negra por todo Runeterra buscando a su amada. Campeones de todo el mundo se unen para frenar la catástrofe." },
];

const FACTIONS = [
  {
    name: "Demacia",
    color: "#1E90FF",
    desc: "El reino del honor y la justicia. Desconfía profundamente de la magia, construyendo sus murallas de piedra pétrima para suprimirla. Sus caballeros son incorruptibles... o eso se cree.",
    champions: ["Garen", "Lux"],
  },
  {
    name: "Noxus",
    color: "#C8542A",
    desc: "El Imperio que venera el poder absoluto. No importa el origen — si eres fuerte, puedes conquistar todo. Sus legiones han sometido a docenas de naciones.",
    champions: ["Darius", "Katarina"],
  },
  {
    name: "El Vacío",
    color: "#9B5CD4",
    desc: "Una dimensión de hambre pura anterior al universo. Sus criaturas devoran toda existencia. Representa la amenaza más existencial que Runeterra ha enfrentado.",
    champions: ["Chogath", "Kassadin"],
  },
  {
    name: "Ionia",
    color: "#C8AA6E",
    desc: "La tierra más mágicamente conectada de Runeterra. Sus habitantes viven en armonía con el Espíritu Natural, buscando siempre el equilibrio entre todas las cosas.",
    champions: ["Yasuo", "Ahri"],
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Hero */}
      <div
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,16 58,36 30,50 2,36 2,16' fill='none' stroke='%23C8AA6E' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 52px",
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4"
        >
          El Universo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-black text-[#F0E6D3] uppercase mb-4"
        >
          Historia de Runeterra
        </motion.h1>
        <GoldDivider />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-[#F0E6D3]/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Runeterra es un mundo forjado en poder mágico, traiciones ancestrales y guerras que duran siglos. Conoce la historia del universo que da vida a League of Legends.
        </motion.p>
      </div>

      {/* World intro */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="p-8 border border-[#C8AA6E]/20 bg-[#091428]/40">
              <h2 className="font-serif text-2xl text-[#C8AA6E] font-bold mb-4 uppercase">El Mundo</h2>
              <p className="font-sans text-[#F0E6D3]/70 leading-relaxed mb-4">
                Runeterra es un mundo mágico creado hace eones por seres llamados los Celestiales. La magia que impregna el mundo se llama Magia del Rune — una fuerza primigenia que puede dar poder sobrehumano pero que también corrompe a quienes no pueden controlarla.
              </p>
              <p className="font-sans text-[#F0E6D3]/70 leading-relaxed mb-4">
                Las principales fuentes de conflicto en este mundo son: la guerra centenaria entre Demacia y Noxus, el avance imparable del Vacío desde sus dimensiones, los fantasmas del Imperio de Shurima que regresan para reclamar su gloria, y la amenaza siempre presente de las Islas de las Sombras.
              </p>
              <p className="font-sans text-[#F0E6D3]/70 leading-relaxed">
                Cada campeón en este mundo carga con una historia que refleja estas tensiones — son guerreros, magos, bestias y dioses atrapados en el tejido de un mundo que nunca deja de cambiar.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">Línea del Tiempo</h2>
            <GoldDivider />
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8AA6E]/60 via-[#C8AA6E]/20 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((e, i) => (
                <motion.div
                  key={e.era}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`flex gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <p className="font-sans text-[#C8AA6E] text-xs tracking-widest uppercase mb-1">{e.date}</p>
                    <h3 className="font-serif text-[#F0E6D3] text-xl font-bold mb-2">{e.era}</h3>
                    <p className="font-sans text-[#F0E6D3]/55 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-4 h-4 rotate-45 bg-[#C8AA6E] border-2 border-[#050E1A] relative z-10"
                      style={{ boxShadow: "0 0 10px rgba(200,170,110,0.4)" }} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factions */}
      <section className="py-16 px-4 bg-[#091428]/30">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">Facciones en Conflicto</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACTIONS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border transition-all duration-300 hover:border-opacity-60"
                style={{ borderColor: f.color + "30", background: f.color + "08" }}
              >
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: f.color }}>{f.name}</h3>
                <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="flex gap-2">
                  {f.champions.map((c) => (
                    <img
                      key={c}
                      src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${c}.png`}
                      alt={c}
                      className="w-10 h-10 border"
                      style={{ borderColor: f.color + "40" }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
