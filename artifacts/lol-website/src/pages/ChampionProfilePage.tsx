import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { CHAMPION_EXTENDED } from "@/data/champions";
import { getChampionName } from "@/data/championNames";

const DDV = "14.24.1";

interface Spell {
  id: string;
  name: string;
  description: string;
  image: { full: string };
  cooldownBurn: string;
  costBurn: string;
}

interface Skin {
  id: string;
  num: number;
  name: string;
}

interface ChampDetail {
  id: string;
  name: string;
  title: string;
  blurb: string;
  lore: string;
  tags: string[];
  info: { attack: number; defense: number; magic: number; difficulty: number };
  stats: Record<string, number>;
  spells: Spell[];
  passive: { name: string; description: string; image: { full: string } };
  skins: Skin[];
}

const STAT_LABELS: Record<string, string> = {
  hp: "Vida", mp: "Mana", armor: "Armadura", spellblock: "Res. Mágica",
  attackdamage: "Daño Ataque", attackspeed: "Velocidad Ataque", movespeed: "Velocidad",
};

const SKIN_TRANSLATIONS: Record<string, string> = {
  "Classic": "Clásico", "Prestige": "Prestigio", "Legendary": "Legendaria", "Ultimate": "Última",
  "Bloodmoon": "Luna de Sangre", "Blood Moon": "Luna de Sangre", "High Noon": "Mediodía",
  "PROJECT": "PROYECTO", "Star Guardian": "Guardiana Estelar", "Battle Academia": "Academia de Batalla",
  "Championship": "Campeonato", "Worlds": "Mundiales", "PsyOps": "PsiOps",
  "Spirit Blossom": "Flor del Espíritu", "Dark Star": "Estrella Oscura", "Cosmic": "Cósmico",
  "Elderwood": "Bosque Antiguo", "Coven": "Aquelarre", "Crime City": "Ciudad del Crimen",
  "Pool Party": "Fiesta en la Piscina", "Odyssey": "Odisea", "Pulsefire": "Pulso de Fuego",
  "Dawnbringer": "Portador del Alba", "Nightbringer": "Portador de la Noche", "Sentinel": "Centinela",
  "Ruined": "Arruinado", "Arcane": "Arcane", "Battle Bunny": "Conejita de Batalla",
  "Cosmic Hunter": "Cazador Cósmico", "Lunar Beast": "Bestia Lunar", "Witch": "Bruja",
  "Crystal Rose": "Rosa de Cristal", "Bewitching": "Embrujada",
};

function translateSkinName(name: string, championName: string): string {
  if (name === "default") return `${championName} Clásico`;
  let translated = name.replace(championName, "").trim();
  for (const [en, es] of Object.entries(SKIN_TRANSLATIONS)) {
    if (translated.startsWith(en)) {
      translated = es + translated.slice(en.length);
      return `${championName} ${translated}`.trim();
    }
    if (translated.endsWith(en)) {
      translated = translated.slice(0, -en.length) + es;
      return `${championName} ${translated}`.trim();
    }
  }
  return name;
}

export default function ChampionProfilePage() {
  const params = useParams<{ nombre: string }>();
  const champId = params.nombre;

  const [champ, setChamp] = useState<ChampDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"habilidades" | "lore" | "skins" | "curiosidades">("habilidades");
  const [activeSpell, setActiveSpell] = useState<number | null>(null);
  const [skinModal, setSkinModal] = useState<Skin | null>(null);

  useEffect(() => {
    if (!champId) return;
    setLoading(true);
    setSkinModal(null);
    setTab("habilidades");
    setActiveSpell(null);
    fetch(`https://ddragon.leagueoflegends.com/cdn/${DDV}/data/es_ES/champion/${champId}.json`)
      .then((r) => r.json())
      .then((data) => {
        const c = data.data[champId] as ChampDetail;
        setChamp(c);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [champId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050E1A] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-[#C8AA6E]/30 border-t-[#C8AA6E] rounded-full animate-spin mx-auto mb-4" />
          <p className="font-sans text-[#C8AA6E] tracking-widest uppercase text-sm">Cargando campeón...</p>
        </div>
      </div>
    );
  }

  if (!champ) {
    return (
      <div className="min-h-screen bg-[#050E1A] pt-20 flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-[#F0E6D3] text-2xl">Campeón no encontrado</p>
        <Link to="/campeones" className="font-sans text-[#C8AA6E] border border-[#C8AA6E]/40 px-6 py-2 hover:bg-[#C8AA6E]/10 transition-all">
          Volver a Campeones
        </Link>
      </div>
    );
  }

  const extended = CHAMPION_EXTENDED[champ.id] || CHAMPION_EXTENDED[champ.name] || null;
  const spells = [
    { key: "P", name: champ.passive.name, desc: champ.passive.description, imgUrl: `https://ddragon.leagueoflegends.com/cdn/${DDV}/img/passive/${champ.passive.image.full}`, cd: "—", cost: "—" },
    ...champ.spells.map((s, i) => ({
      key: ["Q", "W", "E", "R"][i],
      name: s.name,
      desc: s.description,
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/${DDV}/img/spell/${s.image.full}`,
      cd: s.cooldownBurn,
      cost: s.costBurn,
    })),
  ];

  const mainStats = ["hp", "mp", "armor", "spellblock", "attackdamage", "movespeed"];

  return (
    <div className="min-h-screen bg-[#050E1A]">
      {/* HERO */}
      <div className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`}
            alt={champ.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A]/40 via-transparent to-[#050E1A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E1A] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 pt-24 w-full">
          <div className="flex gap-2 mb-3 flex-wrap">
            {champ.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-sans font-bold tracking-widest uppercase bg-[#C8AA6E]/10 text-[#C8AA6E] border border-[#C8AA6E]/30">
                {t === "Assassin" ? "Asesino" : t === "Mage" ? "Mago" : t === "Marksman" ? "Tirador" : t === "Support" ? "Soporte" : t === "Tank" ? "Tanque" : t === "Fighter" ? "Luchador" : t}
              </span>
            ))}
            <span className="px-3 py-1 text-xs font-sans tracking-widest border border-[#F0E6D3]/20 text-[#F0E6D3]/50">
              Dificultad: {champ.info.difficulty}/10
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-black text-[#F0E6D3] uppercase leading-none mb-2"
            style={{ textShadow: "0 0 40px rgba(200,170,110,0.3)" }}>
            {getChampionName(champ.id)}
          </h1>
          <p className="font-sans text-[#C8AA6E] text-lg md:text-xl tracking-widest uppercase mb-6">{champ.title}</p>

          {/* Stats bars */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl">
            {(["attack", "defense", "magic"] as const).map((k) => (
              <div key={k}>
                <div className="flex justify-between font-sans text-xs mb-1">
                  <span className="text-[#F0E6D3]/50 uppercase tracking-wider">
                    {k === "attack" ? "Ataque" : k === "defense" ? "Defensa" : "Magia"}
                  </span>
                  <span className="text-[#C8AA6E]">{champ.info[k]}/10</span>
                </div>
                <div className="h-1 bg-[#C8AA6E]/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${champ.info[k] * 10}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full"
                    style={{ backgroundColor: "#C8AA6E" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-16 z-30 bg-[#050E1A]/95 backdrop-blur-md border-b border-[#C8AA6E]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {(["habilidades", "lore", "skins", "curiosidades"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-4 font-sans text-sm font-bold tracking-widest uppercase transition-all shrink-0 border-b-2 ${
                  tab === t
                    ? "text-[#C8AA6E] border-[#C8AA6E]"
                    : "text-[#F0E6D3]/40 border-transparent hover:text-[#F0E6D3]/70"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HABILIDADES */}
        {tab === "habilidades" && (
          <div>
            <div className="flex gap-3 mb-8 flex-wrap">
              {spells.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActiveSpell(activeSpell === i ? null : i)}
                  className={`flex items-center gap-2 p-2 border transition-all ${
                    activeSpell === i ? "border-[#C8AA6E]" : "border-[#C8AA6E]/20 hover:border-[#C8AA6E]/50"
                  }`}
                >
                  <img src={s.imgUrl} alt={s.name} className="w-12 h-12 object-cover" />
                  <span className={`font-sans font-bold text-xs w-5 h-5 flex items-center justify-center rounded-sm ${activeSpell === i ? "bg-[#C8AA6E] text-[#050E1A]" : "bg-[#C8AA6E]/20 text-[#C8AA6E]"}`}>
                    {s.key}
                  </span>
                </button>
              ))}
            </div>

            {activeSpell !== null && (
              <motion.div
                key={activeSpell}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border border-[#C8AA6E]/20 bg-[#091428]/60"
              >
                <div className="flex items-start gap-4">
                  <img src={spells[activeSpell].imgUrl} alt={spells[activeSpell].name} className="w-16 h-16 object-cover shrink-0" />
                  <div>
                    <span className="font-sans text-xs font-bold text-[#C8AA6E] tracking-widest">[{spells[activeSpell].key}]</span>
                    <h3 className="font-serif text-[#F0E6D3] text-xl font-bold mb-2">{spells[activeSpell].name}</h3>
                    <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: spells[activeSpell].desc }} />
                    <div className="flex gap-4 text-xs font-sans text-[#F0E6D3]/40">
                      {spells[activeSpell].cd !== "—" && <span>Enfriamiento: {spells[activeSpell].cd}s</span>}
                      {spells[activeSpell].cost !== "0" && spells[activeSpell].cost !== "—" && <span>Coste: {spells[activeSpell].cost}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSpell === null && (
              <p className="font-sans text-[#F0E6D3]/30 text-sm">Selecciona una habilidad para ver los detalles</p>
            )}

            {/* Base stats */}
            <div className="mt-10">
              <h3 className="font-serif text-[#C8AA6E] text-lg font-bold mb-4 uppercase tracking-wider">Estadísticas Base</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {mainStats.map((k) => champ.stats[k] !== undefined && (
                  <div key={k} className="p-4 border border-[#C8AA6E]/10 bg-[#091428]/30">
                    <div className="font-sans text-[#F0E6D3]/40 text-xs uppercase tracking-wider mb-1">
                      {STAT_LABELS[k] || k}
                    </div>
                    <div className="font-serif text-[#C8AA6E] text-xl font-bold">
                      {k === "attackspeed" ? champ.stats[k].toFixed(3) : Math.round(champ.stats[k])}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LORE */}
        {tab === "lore" && (
          <div className="max-w-3xl">
            <p className="font-sans text-[#F0E6D3]/70 text-base leading-relaxed whitespace-pre-line mb-6">{champ.lore}</p>
            {champ.blurb !== champ.lore && (
              <blockquote className="border-l-2 border-[#C8AA6E]/40 pl-6 py-2 mb-6">
                <p className="font-serif text-[#C8AA6E] text-lg italic">{champ.blurb}</p>
              </blockquote>
            )}
            {extended && (
              <div className="mt-8 p-6 border border-[#C8AA6E]/15 bg-[#091428]/40">
                <h3 className="font-serif text-[#C8AA6E] text-lg font-bold mb-3 uppercase">Frases Célebres</h3>
                <ul className="space-y-3">
                  {extended.frases.map((f) => (
                    <li key={f} className="font-sans text-[#F0E6D3]/70 italic text-sm border-l border-[#C8AA6E]/30 pl-4">&ldquo;{f}&rdquo;</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* SKINS */}
        {tab === "skins" && (
          <div>
            <p className="font-sans text-[#F0E6D3]/40 text-sm mb-4">Click en cualquier skin para verla en alta resolución</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {champ.skins.map((s) => (
                <motion.div
                  key={s.id}
                  layoutId={`skin-${s.id}`}
                  whileHover={{ y: -4 }}
                  onClick={() => setSkinModal(s)}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <div className="relative" style={{ aspectRatio: "2/1" }}>
                    <motion.img
                      layoutId={`skin-img-${s.id}`}
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${s.num}.jpg`}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "inset 0 0 0 2px #C8AA6E80" }} />
                  </div>
                  <div className="p-3 bg-[#091428]/80 border-t border-[#C8AA6E]/10">
                    <p className="font-serif text-[#F0E6D3] text-sm font-bold">{translateSkinName(s.name, getChampionName(champ.id))}</p>
                    {s.name !== "default" && <p className="font-sans text-[#C8AA6E]/50 text-xs mt-0.5">Skin #{s.num}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CURIOSIDADES */}
        {tab === "curiosidades" && (
          <div className="max-w-2xl">
            {extended ? (
              <div>
                {extended.region && (
                  <div className="mb-6 p-4 border border-[#C8AA6E]/20 bg-[#091428]/40 inline-block">
                    <p className="font-sans text-[#F0E6D3]/40 text-xs uppercase tracking-widest mb-1">Región de Origen</p>
                    <p className="font-serif text-[#C8AA6E] text-xl font-bold">{extended.region}</p>
                  </div>
                )}
                <h3 className="font-serif text-[#F0E6D3] text-2xl font-bold mb-6 uppercase">Datos Interesantes</h3>
                <ul className="space-y-4">
                  {extended.curiosidades.map((c, i) => (
                    <motion.li
                      key={c}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="w-6 h-6 bg-[#C8AA6E]/20 border border-[#C8AA6E]/40 text-[#C8AA6E] font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="font-sans text-[#F0E6D3]/70 leading-relaxed">{c}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="font-sans text-[#F0E6D3]/40">No hay curiosidades especiales registradas para {getChampionName(champ.id)}.</p>
            )}
          </div>
        )}
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <Link to="/campeones" className="font-sans text-[#C8AA6E]/50 hover:text-[#C8AA6E] transition-colors text-sm">
          &larr; Volver a todos los campeones
        </Link>
      </div>

      {/* Skin Lightbox */}
      <AnimatePresence>
        {skinModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSkinModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050E1A]/95 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              layoutId={`skin-${skinModal.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[#C8AA6E]/60 cursor-default"
            >
              <motion.img
                layoutId={`skin-img-${skinModal.id}`}
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${skinModal.num}.jpg`}
                alt={skinModal.name}
                className="w-full h-full object-cover"
                style={{ maxHeight: "85vh" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              >
                <p className="font-sans text-xs tracking-[0.4em] uppercase mb-2 text-[#C8AA6E]">{getChampionName(champ.id)}</p>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-[#F0E6D3] uppercase mb-2">{translateSkinName(skinModal.name, getChampionName(champ.id))}</h2>
                {skinModal.name !== "default" && <p className="font-sans text-[#C8AA6E]/50 text-sm">Skin oficial #{skinModal.num}</p>}
              </motion.div>
              <button
                onClick={() => setSkinModal(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#050E1A]/80 border border-[#C8AA6E]/40 hover:bg-[#C8AA6E] hover:text-[#050E1A] text-[#C8AA6E] transition-all"
                aria-label="Cerrar"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
