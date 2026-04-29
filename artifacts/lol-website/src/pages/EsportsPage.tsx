import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const LEAGUES = [
  { name: "LCK", region: "Corea del Sur", color: "#1E90FF", teams: ["T1", "Gen.G", "DRX", "KT Rolster"] },
  { name: "LPL", region: "China", color: "#C8542A", teams: ["JDG", "BLG", "EDG", "Weibo Gaming"] },
  { name: "LEC", region: "Europa", color: "#C8AA6E", teams: ["G2 Esports", "NaVi", "Team Vitality", "Fnatic"] },
  { name: "LCS", region: "Norteamérica", color: "#0BC4E3", teams: ["Cloud9", "Team Liquid", "FlyQuest", "NRG"] },
  { name: "CBLOL", region: "Brasil", color: "#2E7D32", teams: ["LOUD", "paiN Gaming", "FURIA", "RED Canids"] },
];

const WORLDS_HISTORY = [
  { year: "2023", winner: "T1", country: "Corea del Sur", champion: "Jinx" },
  { year: "2022", winner: "DRX", country: "Corea del Sur", champion: "Yasuo" },
  { year: "2021", winner: "EDward Gaming", country: "China", champion: "Thresh" },
  { year: "2020", winner: "DAMWON Gaming", country: "Corea del Sur", champion: "Orianna" },
  { year: "2019", winner: "FunPlus Phoenix", country: "China", champion: "Gangplank" },
  { year: "2018", winner: "Invictus Gaming", country: "China", champion: "Aatrox" },
];

const TOP_PLAYERS = [
  { name: "Faker", team: "T1", role: "Mid", country: "Corea del Sur", desc: "El jugador más ganador de la historia con 4 títulos de Worlds" },
  { name: "Uzi", team: "RNG (retirado)", role: "ADC", country: "China", desc: "El mejor ADC de todos los tiempos según muchos expertos" },
  { name: "Caps", team: "G2 Esports", role: "Mid", country: "Dinamarca", desc: "El mejor jugador europeo de la historia" },
  { name: "Ruler", team: "Gen.G", role: "ADC", country: "Corea del Sur", desc: "ADC consistente ganador de LCK múltiples veces" },
];

export default function EsportsPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="relative py-24 px-4 text-center"
          style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,16 58,36 30,50 2,36 2,16' fill='none' stroke='%23C8AA6E' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 52px",
          }} />
          <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4">Competición Global</p>
          <h1
            className="font-serif font-black uppercase leading-none mb-2"
            style={{
              fontSize: "clamp(4rem, 14vw, 12rem)",
              background: "linear-gradient(135deg, #C8AA6E 0%, #F0E6D3 50%, #C8AA6E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WORLDS
          </h1>
          <p className="font-sans text-[#F0E6D3]/50 text-lg max-w-xl mx-auto">
            El torneo más grande del mundo del esports. Millones de espectadores. Un campeón.
          </p>
        </div>
      </div>

      {/* Worlds History */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">Campeones del Mundo</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {WORLDS_HISTORY.map((w, i) => (
              <motion.div
                key={w.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden border border-[#C8AA6E]/15 hover:border-[#C8AA6E]/40 transition-all group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${w.champion}_0.jpg`}
                    alt={w.champion}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050E1A]" />
                </div>
                <div className="p-3 bg-[#091428]/60">
                  <div className="font-serif text-[#C8AA6E] text-2xl font-black">{w.year}</div>
                  <div className="font-sans text-[#F0E6D3] text-xs font-bold leading-tight">{w.winner}</div>
                  <div className="font-sans text-[#F0E6D3]/40 text-xs">{w.country}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section className="py-12 px-4 bg-[#091428]/30">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">Ligas Regionales</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="space-y-4">
            {LEAGUES.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-4 p-5 border transition-all"
                style={{ borderColor: l.color + "25", background: l.color + "05" }}
              >
                <div className="md:w-48 shrink-0">
                  <div className="font-serif text-3xl font-black" style={{ color: l.color }}>{l.name}</div>
                  <div className="font-sans text-[#F0E6D3]/40 text-xs tracking-wider">{l.region}</div>
                </div>
                <div className="flex-1 flex gap-2 flex-wrap">
                  {l.teams.map((t) => (
                    <span key={t} className="px-3 py-1 font-sans text-sm border text-[#F0E6D3]/60"
                      style={{ borderColor: l.color + "30" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">Leyendas del Juego</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOP_PLAYERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 border border-[#C8AA6E]/15 hover:border-[#C8AA6E]/40 transition-all bg-[#091428]/30"
              >
                <div
                  className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #C8AA6E20, #C8AA6E40)", border: "1px solid #C8AA6E40" }}
                >
                  <span className="font-serif text-[#C8AA6E] font-bold">{p.name[0]}</span>
                </div>
                <h3 className="font-serif text-[#F0E6D3] text-xl font-bold mb-0.5">{p.name}</h3>
                <p className="font-sans text-[#C8AA6E] text-xs tracking-wider mb-1">{p.team} — {p.role}</p>
                <p className="font-sans text-[#F0E6D3]/40 text-xs mb-3">{p.country}</p>
                <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
