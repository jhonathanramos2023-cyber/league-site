import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const FEATURED_CHAMPIONS = [
  { id: "Ahri", name: "Ahri", title: "La Zorra de Nueve Colas" },
  { id: "Yasuo", name: "Yasuo", title: "El Samurai Sin Viento" },
  { id: "Thresh", name: "Thresh", title: "El Guardián de las Cadenas" },
  { id: "Jinx", name: "Jinx", title: "La Criminal Libre" },
  { id: "Lux", name: "Lux", title: "La Dama de la Luminosidad" },
];

const ROLES = [
  { icon: "⚔", name: "Asesino", desc: "Elimina objetivos clave con rapidez letal", color: "#C8542A" },
  { icon: "🛡", name: "Tanque", desc: "Absorbe el daño del equipo sin flaquear", color: "#1E90FF" },
  { icon: "✦", name: "Mago", desc: "Poder mágico devastador desde la distancia", color: "#9B5CD4" },
  { icon: "◈", name: "Tirador", desc: "Daño físico constante a distancia", color: "#0BC4E3" },
  { icon: "❤", name: "Soporte", desc: "Protege y potencia a todo el equipo", color: "#2E7D32" },
];

const STATS = [
  { value: "170+", label: "Campeones" },
  { value: "165+", label: "Países" },
  { value: "150M+", label: "Jugadores" },
  { value: "13+", label: "Años de Historia" },
];

const LORE_STORIES = [
  {
    champion: "Jinx",
    title: "El Caos de Zaun",
    excerpt: "Desde las profundidades de Zaun, una mente brillante y rota sembró el caos en Piltóver. Su risa resuena donde las llamas lo consumen todo.",
  },
  {
    champion: "Thresh",
    title: "El Coleccionista de Almas",
    excerpt: "No es simplemente un carcelero, es un artista del sufrimiento eterno. Cada alma que atrapa lo hace más poderoso, más hambriento.",
  },
  {
    champion: "Yasuo",
    title: "La Deshonra del Viento",
    excerpt: "Acusado falsamente, perseguido sin descanso. Yasuo no busca venganza, busca la verdad que lo liberará de sus propios demonios.",
  },
];

const MUSIC_GROUPS = [
  { name: "K/DA", genre: "K-Pop / Pop", color: "#9B5CD4", songs: ["POPSTARS", "MORE", "I'LL SHOW YOU"] },
  { name: "Pentakill", genre: "Metal Épico", color: "#C8542A", songs: ["Mortal Reminder", "Lightbringer", "Burn It All Down"] },
  { name: "True Damage", genre: "Hip-Hop / Trap", color: "#0BC4E3", songs: ["GIANTS", "GIANTS (ft. Becky G)"] },
  { name: "Star Guardian", genre: "Pop Dreamy", color: "#FF69B4", songs: ["Still Here", "Everything Goes On"] },
];

const ESPORTS_TEAMS = ["T1", "G2 Esports", "Cloud9", "Team Liquid", "LOUD", "NaVi"];

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: "2px",
        height: "2px",
        backgroundColor: "#C8AA6E",
        boxShadow: "0 0 4px #C8AA6E",
        animation: "floatUp 6s ease-in infinite",
        ...style,
      }}
    />
  );
}

export default function HomePage() {
  const particlesRef = useRef<{ left: string; animationDelay: string; animationDuration: string }[]>([]);
  if (particlesRef.current.length === 0) {
    particlesRef.current = Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 6}s`,
    }));
  }

  const [countVisible, setCountVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setCountVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#050E1A]">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(200,170,110,0.3); }
          50% { box-shadow: 0 0 40px rgba(200,170,110,0.6); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A]/50 via-[#091428]/60 to-[#050E1A]" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(11,196,227,0.05) 0%, transparent 60%)" }} />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlesRef.current.map((p, i) => (
            <Particle key={i} style={{ left: p.left, bottom: "-10px", animationDelay: p.animationDelay, animationDuration: p.animationDuration }} />
          ))}
        </div>

        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,16 58,36 30,50 2,36 2,16' fill='none' stroke='%23C8AA6E' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#C8AA6E] text-sm tracking-[0.4em] uppercase mb-6"
          >
            Bienvenido a Runeterra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif font-black uppercase leading-none mb-6 hero-glitch"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
              background: "linear-gradient(135deg, #C8AA6E 0%, #F0E6D3 40%, #C8AA6E 60%, #785A28 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shimmer 4s linear infinite, glitch-main 7s infinite",
            }}
          >
            Domina el Campo de Batalla
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-sans text-[#F0E6D3]/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crea tu invocador, domina a más de 170 campeones únicos y decide el destino de Runeterra. El campo de batalla más épico del mundo te espera.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://signup.leagueoflegends.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-sans font-bold text-sm tracking-widest uppercase text-[#050E1A] bg-[#C8AA6E] hover:bg-[#F0E6D3] transition-all duration-300"
              style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)", animation: "pulse-glow 3s ease infinite" }}
            >
              Jugar Ahora
            </a>
            <Link
              to="/historia"
              className="px-8 py-4 font-sans font-bold text-sm tracking-widest uppercase text-[#C8AA6E] border border-[#C8AA6E]/60 hover:bg-[#C8AA6E]/10 transition-all duration-300"
              style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
            >
              Ver Historia
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[#C8AA6E] font-sans text-xs tracking-widest uppercase">Descubre más</span>
          <div style={{ animation: "scrollBounce 2s ease infinite" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="#C8AA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section ref={statsRef} className="border-y border-[#C8AA6E]/20 bg-[#091428]/50">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label} className={`transition-all duration-700 ${countVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#C8AA6E]">{s.value}</div>
              <div className="font-sans text-xs tracking-widest uppercase text-[#F0E6D3]/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CHAMPIONS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">El Roster</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0E6D3] mb-4">Campeones Destacados</h2>
            <GoldDivider />
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {FEATURED_CHAMPIONS.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "2/3" }}
              >
                <Link to={`/campeon/${c.id}`} className="block w-full h-full">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.id}_0.jpg`}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "inset 0 0 0 1px #C8AA6E80" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="font-serif text-[#F0E6D3] font-bold text-sm">{c.name}</div>
                    <div className="font-sans text-[#C8AA6E]/70 text-xs mt-0.5 truncate">{c.title}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <SectionReveal className="text-center mt-10">
            <Link
              to="/campeones"
              className="inline-block px-8 py-3 font-sans font-bold text-sm tracking-widest uppercase text-[#C8AA6E] border border-[#C8AA6E]/50 hover:bg-[#C8AA6E]/10 hover:border-[#C8AA6E] transition-all duration-300"
            >
              Ver Todos los Campeones
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-16 px-4 bg-[#091428]/30">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">Encuentra tu Estilo</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0E6D3] mb-4">Roles de Combate</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center p-6 border border-[#C8AA6E]/10 hover:border-[#C8AA6E]/40 transition-all duration-300 bg-[#091428]/50"
              >
                <div className="text-4xl mb-3" style={{ color: r.color, textShadow: `0 0 20px ${r.color}60` }}>{r.icon}</div>
                <h3 className="font-serif text-[#F0E6D3] font-bold mb-2">{r.name}</h3>
                <p className="font-sans text-[#F0E6D3]/50 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LORE STORIES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">El Universo</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0E6D3] mb-4">Historias de Runeterra</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LORE_STORIES.map((s, i) => (
              <motion.div
                key={s.champion}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden border border-[#C8AA6E]/15 hover:border-[#C8AA6E]/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${s.champion}_0.jpg`}
                    alt={s.champion}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050E1A]" />
                </div>
                <div className="p-5 bg-[#091428]/60">
                  <h3 className="font-serif text-[#C8AA6E] font-bold text-lg mb-2">{s.title}</h3>
                  <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed mb-4">{s.excerpt}</p>
                  <Link
                    to={`/campeon/${s.champion}`}
                    className="font-sans text-xs tracking-widest uppercase text-[#C8AA6E]/70 hover:text-[#C8AA6E] transition-colors"
                  >
                    Leer más &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPORTS */}
      <section className="py-16 px-4 bg-[#091428]/40">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">Competición Global</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0E6D3] mb-4">Esports Mundial</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="relative mb-10 p-8 border border-[#C8AA6E]/20 text-center"
            style={{ background: "linear-gradient(135deg, #091428 0%, #050E1A 100%)" }}>
            <p className="font-sans text-[#C8AA6E] text-xs tracking-widest uppercase mb-2">El Torneo Más Grande del Mundo</p>
            <h3 className="font-serif text-5xl md:text-7xl font-black text-[#C8AA6E]">WORLDS</h3>
            <p className="font-sans text-[#F0E6D3]/50 mt-2 text-sm">El campeonato mundial de League of Legends — el espectáculo esports más visto del planeta</p>
            <Link to="/esports" className="mt-6 inline-block px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-[#050E1A] bg-[#C8AA6E] hover:bg-[#F0E6D3] transition-colors">
              Ver Esports
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {ESPORTS_TEAMS.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-[#C8AA6E]/15 hover:border-[#C8AA6E]/50 p-4 text-center transition-all duration-300 hover:bg-[#C8AA6E]/5"
              >
                <span className="font-sans text-[#F0E6D3]/70 text-sm font-medium">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">El Sonido de Runeterra</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0E6D3] mb-4">Grupos Musicales</h2>
            <GoldDivider />
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MUSIC_GROUPS.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border transition-all duration-300"
                style={{ borderColor: g.color + "30", background: g.color + "08" }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: g.color + "20", border: `1px solid ${g.color}40` }}
                >
                  <span className="font-serif text-lg font-bold" style={{ color: g.color }}>{g.name[0]}</span>
                </div>
                <h3 className="font-serif text-[#F0E6D3] font-bold text-lg mb-1">{g.name}</h3>
                <p className="font-sans text-xs tracking-wider mb-3" style={{ color: g.color }}>{g.genre}</p>
                <ul className="space-y-1">
                  {g.songs.map((s) => (
                    <li key={s} className="font-sans text-[#F0E6D3]/50 text-xs">&bull; {s}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <SectionReveal className="text-center mt-8">
            <Link to="/musica" className="inline-block px-8 py-3 font-sans font-bold text-sm tracking-widest uppercase text-[#C8AA6E] border border-[#C8AA6E]/50 hover:bg-[#C8AA6E]/10 transition-all">
              Explorar Música
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center relative overflow-hidden border-t border-[#C8AA6E]/20">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(200,170,110,0.05) 0%, transparent 70%)" }} />
        <SectionReveal>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-[#F0E6D3] mb-4 uppercase">¿Listo para el Combate?</h2>
          <p className="font-sans text-[#F0E6D3]/50 text-lg max-w-xl mx-auto mb-8">150 millones de invocadores ya eligieron su campeón. ¿Cuál será el tuyo?</p>
          <a
            href="https://signup.leagueoflegends.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-sans font-black text-sm tracking-widest uppercase text-[#050E1A] bg-[#C8AA6E] hover:bg-[#F0E6D3] transition-all duration-300"
            style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
          >
            Jugar Gratis Ahora
          </a>
        </SectionReveal>
      </section>
    </div>
  );
}
