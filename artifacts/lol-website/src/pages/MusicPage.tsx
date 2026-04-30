import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

interface Member { champ: string; role: string; skinNum: number; }
interface Song { title: string; year: string; desc: string; }
interface Group {
  id: string;
  name: string;
  genre: string;
  year: number;
  color: string;
  isNew?: boolean;
  members: Member[];
  songs: Song[];
  description: string;
  curiosities?: string[];
}

const MUSIC_GROUPS: Group[] = [
  {
    id: "kda",
    name: "K/DA",
    genre: "K-Pop / Pop Electrónico",
    year: 2018,
    color: "#9B5CD4",
    members: [
      { champ: "Ahri", role: "Vocalista principal", skinNum: 9 },
      { champ: "Akali", role: "Rapera", skinNum: 8 },
      { champ: "Evelynn", role: "Vocalista", skinNum: 5 },
      { champ: "Kaisa", role: "Vocalista / Bailarina", skinNum: 2 },
    ],
    songs: [
      { title: "POP/STARS", year: "2018", desc: "El debut mundial de K/DA, rompió todos los récords" },
      { title: "THE BADDEST", year: "2020", desc: "Regreso con más poder y actitud" },
      { title: "MORE", year: "2020", desc: "Mensaje de superación personal" },
      { title: "I'LL SHOW YOU", year: "2020", desc: "El final del EP ALL OUT" },
    ],
    description: "K/DA es el grupo pop virtual más exitoso del universo de League of Legends. Conformado por versiones artistas de Ahri, Akali, Evelynn y Kai'Sa, debutaron en 2018 con POP/STARS y se convirtieron en un fenómeno global que superó a muchos artistas reales en views.",
    curiosities: [
      "POP/STARS tuvo más de 400 millones de reproducciones en YouTube",
      "La actuación de 2018 en el Mundial usó hologramas en tiempo real",
      "(G)I-DLE y Madison Beer prestaron sus voces en la vida real",
    ],
  },
  {
    id: "pentakill",
    name: "Pentakill",
    genre: "Heavy Metal / Power Metal",
    year: 2014,
    color: "#C8542A",
    members: [
      { champ: "Mordekaiser", role: "Bajo", skinNum: 1 },
      { champ: "Karthus", role: "Vocalista", skinNum: 4 },
      { champ: "Yorick", role: "Guitarra", skinNum: 1 },
      { champ: "Sona", role: "Teclados", skinNum: 4 },
      { champ: "Olaf", role: "Batería", skinNum: 1 },
      { champ: "Kayle", role: "Guitarra líder", skinNum: 3 },
    ],
    songs: [
      { title: "Mortal Reminder", year: "2014", desc: "El álbum debut, un himno oscuro sobre la muerte" },
      { title: "Smite and Ignite", year: "2017", desc: "Segundo álbum más oscuro y épico" },
      { title: "III: Lost Chapter", year: "2021", desc: "Tercer álbum, primero creado con apoyo de IA" },
      { title: "Burn It All Down", year: "2021", desc: "El single principal del tercer álbum" },
    ],
    description: "Pentakill es el grupo de heavy metal del universo de LoL. Con tres álbumes y un sonido épico y oscuro, representan el lado más brutal y poderoso de Runeterra. Su tercer álbum fue el primero en ser creado con IA como parte del proceso creativo.",
  },
  {
    id: "true-damage",
    name: "True Damage",
    genre: "Hip-Hop / Trap / R&B",
    year: 2019,
    color: "#0BC4E3",
    members: [
      { champ: "Ekko", role: "MC principal", skinNum: 4 },
      { champ: "Qiyana", role: "Rapera", skinNum: 1 },
      { champ: "Senna", role: "Vocalista", skinNum: 1 },
      { champ: "Yasuo", role: "Productor / MC", skinNum: 5 },
      { champ: "Akali", role: "Rapera", skinNum: 10 },
    ],
    songs: [
      { title: "GIANTS", year: "2019", desc: "Himno del Worlds 2019 — interpretado en vivo en París" },
    ],
    description: "True Damage nació para el Campeonato Mundial 2019. Con Ekko, Qiyana, Senna, Akali y Yasuo, mezclan hip-hop, trap y R&B en una explosión de estilos. Su actuación en vivo en el Worlds de París fue considerada uno de los mejores shows de apertura esports.",
  },
  {
    id: "star-guardian",
    name: "Star Guardian",
    genre: "J-Pop / Electro Pop Dreamy",
    year: 2017,
    color: "#FF69B4",
    members: [
      { champ: "Lux", role: "Líder / Vocalista", skinNum: 7 },
      { champ: "Jinx", role: "Rebelde / Vocalista", skinNum: 4 },
      { champ: "Janna", role: "Maestra / Guía", skinNum: 4 },
      { champ: "Lulu", role: "Adorable / Soprano", skinNum: 4 },
      { champ: "Poppy", role: "Fuerte / Contralto", skinNum: 5 },
    ],
    songs: [
      { title: "Still Here", year: "2017", desc: "Canción original del primer evento Star Guardian" },
      { title: "Burning Bright", year: "2022", desc: "Tema de apertura del evento Star Guardian 2022" },
      { title: "Everything Goes On", year: "2022", desc: "Colaboración viral con Porter Robinson" },
    ],
    description: "Star Guardian es el universo alternativo donde las campeonas de League of Legends se convierten en guerreras mágicas inspiradas en el anime shojo. Su música refleja esa mezcla de magia, amistad y sacrificio con tonos dreamy y épicos.",
  },
  {
    id: "heartsteel",
    name: "Heartsteel",
    genre: "Pop Alternativo / R&B / Hip-Hop",
    year: 2023,
    color: "#E91E63",
    isNew: true,
    members: [
      { champ: "Sett", role: "Vocalista principal", skinNum: 5 },
      { champ: "Yone", role: "MC / Vocalista", skinNum: 4 },
      { champ: "Kayn", role: "Rapero / MC oscuro", skinNum: 4 },
      { champ: "Aphelios", role: "Instrumentalista", skinNum: 3 },
      { champ: "Ezreal", role: "Vocalista pop", skinNum: 14 },
      { champ: "KSante", role: "Vocalista R&B", skinNum: 1 },
    ],
    songs: [
      { title: "PARANOIA", year: "2023", desc: "El debut de Heartsteel, un hit instantáneo" },
      { title: "SELF MADE", year: "2023", desc: "Himno de superación y ambición" },
      { title: "ON OUR WAY", year: "2023", desc: "Balada del grupo completo" },
    ],
    description: "Heartsteel es el grupo musical más reciente del universo de LoL, lanzado en octubre de 2023. Conformado por Sett, Yone, Kayn, Aphelios, Ezreal y K'Sante, mezclan pop alternativo, R&B y hip-hop con una estética de amor rebelde. Su debut PARANOIA tiene videoclip animado de altísima calidad.",
    curiosities: [
      "Lanzado en octubre de 2023 como nueva línea de skins musicales",
      "PARANOIA tiene un videoclip animado al estilo de un MV de K-pop",
      "K'Sante fue el primer campeón LGBTQ+ del roster de Heartsteel",
      "Es el primer grupo de LoL enfocado en un concepto romántico/rebelde",
    ],
  },
];

interface ModalSkin { champ: string; skinNum: number; group: Group; }

export default function MusicPage() {
  const [modal, setModal] = useState<ModalSkin | null>(null);

  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      <div
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
      >
        <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4">El Sonido de Runeterra</p>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-[#F0E6D3] uppercase mb-4">Música</h1>
        <GoldDivider />
        <p className="font-sans text-[#F0E6D3]/60 text-lg max-w-2xl mx-auto mt-6">
          League of Legends tiene uno de los universos musicales más ricos del entretenimiento. Grupos virtuales que compiten con artistas reales en vistas y popularidad.
        </p>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {MUSIC_GROUPS.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 border p-8 transition-all relative`}
              style={{ borderColor: g.color + "25", background: g.color + "05" }}
            >
              {g.isNew && (
                <div
                  className="absolute -top-3 right-6 px-3 py-1 text-xs font-sans font-black tracking-widest uppercase"
                  style={{ backgroundColor: g.color, color: "#fff" }}
                >
                  NUEVO 2023
                </div>
              )}

              {/* Member skins grid */}
              <div className="lg:w-96 shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  {g.members.slice(0, 4).map((m) => {
                    const layoutId = `skin-${g.id}-${m.champ}`;
                    return (
                      <motion.div
                        key={m.champ}
                        layoutId={layoutId}
                        onClick={() => setModal({ champ: m.champ, skinNum: m.skinNum, group: g })}
                        className="relative overflow-hidden cursor-pointer group"
                        style={{ aspectRatio: "1" }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${m.champ}_${m.skinNum}.jpg`}
                          alt={`${g.name} ${m.champ}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `inset 0 0 0 2px ${g.color}` }} />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="font-serif text-[#F0E6D3] text-sm font-bold leading-tight">{m.champ}</p>
                          <p className="font-sans text-xs leading-tight" style={{ color: g.color }}>{m.role}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                {g.members.length > 4 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {g.members.slice(4).map((m) => {
                      const layoutId = `skin-${g.id}-${m.champ}`;
                      return (
                        <motion.div
                          key={m.champ}
                          layoutId={layoutId}
                          onClick={() => setModal({ champ: m.champ, skinNum: m.skinNum, group: g })}
                          className="relative overflow-hidden cursor-pointer group"
                          style={{ aspectRatio: "1" }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${m.champ}_${m.skinNum}.jpg`}
                            alt={`${g.name} ${m.champ}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <p className="font-serif text-[#F0E6D3] text-sm font-bold leading-tight">{m.champ}</p>
                            <p className="font-sans text-xs leading-tight" style={{ color: g.color }}>{m.role}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
                <p className="font-sans text-[#F0E6D3]/30 text-xs mt-3 text-center">Click en cada skin para ver en alta resolución</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span
                    className="px-3 py-1 text-xs font-sans font-bold tracking-widest uppercase"
                    style={{ backgroundColor: g.color + "20", color: g.color, border: `1px solid ${g.color}40` }}
                  >
                    {g.genre}
                  </span>
                  <span className="font-sans text-[#F0E6D3]/40 text-xs tracking-widest uppercase">Debut: {g.year}</span>
                </div>
                <h2 className="font-serif text-5xl font-black mb-3 uppercase" style={{ color: g.color }}>{g.name}</h2>
                <p className="font-sans text-[#F0E6D3]/60 leading-relaxed mb-6">{g.description}</p>

                <div>
                  <h3 className="font-serif text-sm text-[#F0E6D3]/40 uppercase tracking-widest mb-3">Discografía</h3>
                  <div className="space-y-2">
                    {g.songs.map((s, si) => (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.08 }}
                        className="flex items-start gap-3 p-3 border border-transparent hover:border-[#C8AA6E]/10 hover:bg-[#C8AA6E]/5 transition-all"
                      >
                        <span
                          className="w-8 h-8 flex items-center justify-center font-serif font-bold text-sm shrink-0"
                          style={{ color: g.color, backgroundColor: g.color + "15", border: `1px solid ${g.color}30` }}
                        >
                          {si + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-sans font-bold text-[#F0E6D3] text-sm">{s.title}</span>
                            <span className="font-sans text-[#F0E6D3]/30 text-xs">{s.year}</span>
                          </div>
                          <p className="font-sans text-[#F0E6D3]/40 text-xs mt-0.5">{s.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {g.curiosities && (
                  <div className="mt-6 pt-4 border-t border-[#C8AA6E]/10">
                    <h3 className="font-serif text-sm text-[#F0E6D3]/40 uppercase tracking-widest mb-2">Curiosidades</h3>
                    <ul className="space-y-1.5">
                      {g.curiosities.map((c) => (
                        <li key={c} className="font-sans text-[#F0E6D3]/50 text-xs flex gap-2">
                          <span style={{ color: g.color }}>&#9670;</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050E1A]/95 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              layoutId={`skin-${modal.group.id}-${modal.champ}`}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden border cursor-default"
              style={{ borderColor: modal.group.color + "60" }}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${modal.champ}_${modal.skinNum}.jpg`}
                alt={modal.champ}
                className="w-full h-full object-cover"
                style={{ maxHeight: "85vh" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-sans text-xs tracking-[0.4em] uppercase mb-2" style={{ color: modal.group.color }}>
                  {modal.group.name}
                </p>
                <h2 className="font-serif text-4xl md:text-6xl font-black text-[#F0E6D3] uppercase">{modal.champ}</h2>
                <p className="font-sans text-[#F0E6D3]/50 text-sm mt-2">Splash art en máxima resolución</p>
              </div>
              <button
                onClick={() => setModal(null)}
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
