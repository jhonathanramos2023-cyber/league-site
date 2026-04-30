import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const LEGENDARY_PLAYERS = [
  {
    name: "Faker",
    team: "T1",
    role: "Mid Lane",
    country: "🇰🇷 Corea del Sur",
    titles: 4,
    champId: "Zed",
    years: "2013 – presente",
    desc: "El Greatest Of All Time. 4 títulos mundiales. 10+ temporadas profesionales. Referente absoluto de todo el esport.",
  },
  {
    name: "Uzi",
    team: "Royal Never Give Up",
    role: "ADC",
    country: "🇨🇳 China",
    titles: 0,
    champId: "Vayne",
    years: "2013 – 2020",
    desc: "Considerado por muchos el mejor ADC de la historia. Finalista mundial múltiples veces. Su mecánica con ADC es inalcanzable.",
  },
  {
    name: "Caps",
    team: "G2 Esports",
    role: "Mid Lane",
    country: "🇩🇰 Dinamarca",
    titles: 0,
    champId: "Yasuo",
    years: "2017 – presente",
    desc: "El mejor jugador de la historia de Europa. 5 títulos de LEC. Apodado 'Craps' por sus plays arriesgadas que siempre funcionan.",
  },
  {
    name: "ShowMaker",
    team: "DRX / DAMWON",
    role: "Mid Lane",
    country: "🇰🇷 Corea del Sur",
    titles: 1,
    champId: "TwistedFate",
    years: "2019 – presente",
    desc: "Campeón mundial 2020. Considerado el heredero natural de Faker. Mecánica extraordinaria en campeones de control de masas.",
  },
  {
    name: "TheShy",
    team: "Invictus Gaming",
    role: "Top Lane",
    country: "🇰🇷 Corea del Sur",
    titles: 1,
    champId: "Fiora",
    years: "2016 – presente",
    desc: "Campeón mundial 2018. El top laner más agresivo del mundo. Conocido por jugar todos los campeones de forma carry.",
  },
  {
    name: "Ruler",
    team: "Samsung / JDG",
    role: "ADC",
    country: "🇰🇷 Corea del Sur",
    titles: 1,
    champId: "MissFortune",
    years: "2016 – presente",
    desc: "Campeón mundial 2017. ADC técnicamente impecable conocido por su consistencia absoluta en el juego.",
  },
];

const WORLDS_HISTORY = [
  { year: 2011, champion: "Fnatic", region: "EU", location: "Suecia (DreamHack)", score: "3-0", runner: "aAa", prize: "$50K" },
  { year: 2012, champion: "Taipei Assassins", region: "APAC", location: "Los Ángeles, USA", score: "3-1", runner: "Azubu Frost", prize: "$200K" },
  { year: 2013, champion: "SK Telecom T1", region: "LCK", location: "Los Ángeles, USA", score: "3-0", runner: "Royal Club", prize: "$1M" },
  { year: 2014, champion: "Samsung White", region: "LCK", location: "Seúl, Corea", score: "3-1", runner: "Star Horn Royal Club", prize: "$1M" },
  { year: 2015, champion: "SK Telecom T1", region: "LCK", location: "Bruselas, Bélgica", score: "3-1", runner: "KOO Tigers", prize: "$1M" },
  { year: 2016, champion: "SK Telecom T1", region: "LCK", location: "Los Ángeles, USA", score: "3-2", runner: "Samsung Galaxy", prize: "$2M" },
  { year: 2017, champion: "Samsung Galaxy", region: "LCK", location: "Beijing, China", score: "3-0", runner: "SK Telecom T1", prize: "$2M" },
  { year: 2018, champion: "Invictus Gaming", region: "LPL", location: "Incheon, Corea", score: "3-0", runner: "Fnatic", prize: "$2.4M" },
  { year: 2019, champion: "FunPlus Phoenix", region: "LPL", location: "París, Francia", score: "3-0", runner: "G2 Esports", prize: "$2.25M" },
  { year: 2020, champion: "DAMWON Gaming", region: "LCK", location: "Online (COVID)", score: "3-1", runner: "Suning", prize: "$2.25M" },
  { year: 2021, champion: "EDward Gaming", region: "LPL", location: "Reikiavik, Islandia", score: "3-2", runner: "DAMWON KIA", prize: "$2.25M" },
  { year: 2022, champion: "T1", region: "LCK", location: "San Francisco, USA", score: "3-2", runner: "DRX", prize: "$2.25M" },
  { year: 2023, champion: "Weibo Gaming", region: "LPL", location: "Seúl, Corea", score: "3-2", runner: "T1", prize: "$2.25M" },
  { year: 2024, champion: "T1", region: "LCK", location: "Londres, UK", score: "3-1", runner: "Bilibili Gaming", prize: "$2.25M" },
];

const REGION_COLORS: Record<string, string> = {
  LCK: "#1E90FF",
  LPL: "#C8542A",
  EU: "#C8AA6E",
  APAC: "#9B5CD4",
};

const STATS = [
  { value: "73M", label: "Espectadores simultáneos (Worlds 2022)", color: "#C8AA6E" },
  { value: "14", label: "Campeonatos Mundiales celebrados", color: "#F0E6D3" },
  { value: "150M+", label: "Jugadores activos en el mundo", color: "#0BC4E3" },
  { value: "5", label: "Títulos de T1 — el más ganador", color: "#C8AA6E" },
];

export default function EsportsPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="relative py-28 px-4 text-center"
          style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,16 58,36 30,50 2,36 2,16' fill='none' stroke='%23C8AA6E' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 52px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4"
          >
            El Escenario Más Grande del Mundo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(4rem, 14vw, 11rem)",
              background: "linear-gradient(135deg, #C8AA6E 0%, #F0E6D3 50%, #C8AA6E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WORLDS
          </motion.h1>
          <GoldDivider />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-[#F0E6D3]/50 text-lg max-w-xl mx-auto mt-6"
          >
            El torneo más grande del mundo del esports. Millones de espectadores. Un solo campeón.
          </motion.p>
        </div>
      </div>

      {/* Global Stats */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center border border-[#C8AA6E]/15 p-6"
              style={{ background: "linear-gradient(135deg, #091428, #050E1A)" }}
            >
              <div className="font-serif font-black text-3xl md:text-4xl mb-2" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="font-sans text-[#F0E6D3]/50 text-xs leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Worlds History Table */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-10">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-2">2011 – 2024</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F0E6D3] uppercase mb-4">
              Campeones del Mundo
            </h2>
            <GoldDivider />
          </SectionReveal>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#C8AA6E]/20">
                  {["Año", "Campeón", "Región", "Final", "Subcampeón", "Prize Pool", "Sede"].map((h) => (
                    <th key={h} className="font-sans text-[#C8AA6E] text-xs tracking-widest uppercase py-3 px-3 font-semibold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...WORLDS_HISTORY].reverse().map((w, i) => (
                  <motion.tr
                    key={w.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-[#C8AA6E]/08 hover:bg-[#C8AA6E]/05 transition-colors group"
                  >
                    <td className="py-3 px-3 font-serif text-[#C8AA6E] font-bold text-lg">{w.year}</td>
                    <td className="py-3 px-3">
                      <span className="font-sans text-[#F0E6D3] font-semibold">{w.champion}</span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className="font-sans text-xs font-bold tracking-widest px-2 py-0.5 border"
                        style={{
                          color: REGION_COLORS[w.region] || "#C8AA6E",
                          borderColor: (REGION_COLORS[w.region] || "#C8AA6E") + "40",
                        }}
                      >
                        {w.region}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-sans text-[#F0E6D3]/60 text-sm">{w.score}</td>
                    <td className="py-3 px-3 font-sans text-[#F0E6D3]/40 text-sm">{w.runner}</td>
                    <td className="py-3 px-3 font-sans text-[#C8AA6E]/70 text-sm font-semibold">{w.prize}</td>
                    <td className="py-3 px-3 font-sans text-[#F0E6D3]/40 text-xs">{w.location}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Legendary Players */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #050E1A, #091428)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-2">Los Inmortales</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F0E6D3] uppercase mb-4">
              Jugadores Legendarios
            </h2>
            <GoldDivider />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEGENDARY_PLAYERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden border border-[#C8AA6E]/15 hover:border-[#C8AA6E]/40 transition-all group"
                style={{ background: "linear-gradient(135deg, #091428, #050E1A)" }}
              >
                {/* Top gold line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8AA6E] to-transparent" />

                {/* Champion splash background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${p.champId}_0.jpg`}
                    alt={p.champId}
                    loading="lazy"
                    className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091428] via-[#091428]/40 to-transparent" />

                  {/* Titles badges */}
                  <div className="absolute top-3 right-3">
                    {p.titles > 0 && (
                      <div className="flex gap-1">
                        {Array.from({ length: p.titles }).map((_, j) => (
                          <div
                            key={j}
                            className="w-5 h-5 flex items-center justify-center text-[10px]"
                            style={{ background: "#C8AA6E", color: "#050E1A", fontWeight: 900, fontFamily: "Cinzel" }}
                            title="Título Mundial"
                          >
                            ★
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-serif text-2xl font-black text-[#F0E6D3] uppercase">{p.name}</h3>
                    <span className="font-sans text-[#C8AA6E]/60 text-xs">{p.role}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-xs text-[#C8AA6E] font-semibold tracking-wide">{p.team}</span>
                    <span className="text-[#F0E6D3]/20">·</span>
                    <span className="font-sans text-xs text-[#F0E6D3]/40">{p.country}</span>
                  </div>
                  <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <p className="font-sans text-[#C8AA6E]/40 text-xs">{p.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions (Leagues) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-serif text-4xl font-black text-[#F0E6D3] uppercase mb-4">Ligas Regionales</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "LCK", region: "Corea del Sur", color: "#1E90FF", teams: ["T1", "Gen.G", "DRX", "KT Rolster"], desc: "La liga más competitiva del mundo. Cuna de Faker, Ruler y ShowMaker.", wins: 8 },
              { name: "LPL", region: "China", color: "#C8542A", teams: ["JDG", "BLG", "EDG", "Weibo Gaming"], desc: "La liga con mayor número de jugadores. Dominan los mundiales desde 2018.", wins: 5 },
              { name: "LEC", region: "Europa", color: "#C8AA6E", teams: ["G2 Esports", "NaVi", "Team Vitality", "Fnatic"], desc: "La liga más antigua fuera de Asia. Fnatic ganó el primer mundial de la historia.", wins: 1 },
              { name: "LCS", region: "Norteamérica", color: "#0BC4E3", teams: ["Cloud9", "Team Liquid", "FlyQuest", "NRG"], desc: "La mayor liga de habla inglesa. Nunca ha ganado un mundial.", wins: 0 },
              { name: "CBLOL", region: "Brasil", color: "#2E7D32", teams: ["LOUD", "paiN Gaming", "FURIA", "RED Canids"], desc: "La liga latinoamericana más activa y fanática. LOUD es su equipo estrella.", wins: 0 },
              { name: "LLA", region: "Latinoamérica", color: "#9B5CD4", teams: ["Isurus", "Rainbow7", "Infinity", "ESTRAL"], desc: "La liga de Latinoamérica. Creciendo rápidamente en nivel de juego.", wins: 0 },
            ].map((league, i) => (
              <motion.div
                key={league.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border p-5 hover:border-opacity-60 transition-all"
                style={{
                  borderColor: league.color + "30",
                  background: league.color + "08",
                  borderTopColor: league.color,
                  borderTopWidth: 2,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl font-black" style={{ color: league.color }}>{league.name}</h3>
                  {league.wins > 0 && (
                    <span className="font-sans text-xs font-bold px-2 py-0.5" style={{ background: league.color, color: "#050E1A" }}>
                      {league.wins}× Mundial
                    </span>
                  )}
                </div>
                <p className="font-sans text-[#C8AA6E]/60 text-xs tracking-widest uppercase mb-2">{league.region}</p>
                <p className="font-sans text-[#F0E6D3]/60 text-sm mb-3 leading-relaxed">{league.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {league.teams.map((t) => (
                    <span key={t} className="font-sans text-[10px] px-2 py-0.5 border border-[#C8AA6E]/20 text-[#C8AA6E]/50">
                      {t}
                    </span>
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
