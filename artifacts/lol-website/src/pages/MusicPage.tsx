import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const MUSIC_GROUPS = [
  {
    name: "K/DA",
    genre: "K-Pop / Pop Electrónico",
    color: "#9B5CD4",
    members: ["Ahri", "Akali", "Evelynn", "Kai'Sa", "Seraphine"],
    songs: [
      { title: "POPSTARS", year: "2018", desc: "El debut mundial de K/DA, rompió todos los récords" },
      { title: "MORE", year: "2020", desc: "Regreso épico con un mensaje de superación personal" },
      { title: "I'LL SHOW YOU", year: "2020", desc: "La canción de Seraphine, reflexiva y emocional" },
      { title: "THE BADDEST", year: "2020", desc: "Potencia y actitud condensadas en 3 minutos" },
    ],
    description: "K/DA es el grupo pop virtual más exitoso del universo de League of Legends. Conformado por versiones artistas de Ahri, Akali, Evelynn y Kai'Sa, debutaron en 2018 con POPSTARS y se convirtieron en un fenómeno global que superó a muchos artistas reales en views.",
    champions: ["Ahri", "Akali", "Evelynn", "Kaisa"],
  },
  {
    name: "Pentakill",
    genre: "Metal / Rock Épico",
    color: "#C8542A",
    members: ["Mordekaiser", "Sona", "Karthus", "Yorick", "Olaf", "Kayle"],
    songs: [
      { title: "Mortal Reminder", year: "2017", desc: "Un himno oscuro sobre la inevitabilidad de la muerte" },
      { title: "Lightbringer", year: "2014", desc: "La canción que lanzó a Pentakill al estrellato" },
      { title: "Tear of the Goddess", year: "2017", desc: "Balada de poder y sacrificio" },
      { title: "Burn It All Down", year: "2021", desc: "El regreso con III: Lost Chapter, su tercer álbum" },
    ],
    description: "Pentakill es el grupo de heavy metal del universo de LoL. Con tres álbumes y un sonido épico y oscuro, representan el lado más brutal y poderoso de Runeterra. Su tercer álbum fue el primero en ser creado con IA como parte del proceso creativo.",
    champions: ["Mordekaiser", "Sona", "Karthus", "Kayle"],
  },
  {
    name: "True Damage",
    genre: "Hip-Hop / Trap / R&B",
    color: "#0BC4E3",
    members: ["Ekko", "Qiyana", "Senna", "Akali", "Yasuo"],
    songs: [
      { title: "GIANTS", year: "2019", desc: "El himno del Worlds 2019, interpretado en la ceremonia de apertura" },
    ],
    description: "True Damage nació para el Campeonato Mundial 2019. Con Ekko, Qiyana, Senna, Akali y Yasuo, mezclan hip-hop, trap y R&B en una explosión de estilos. Su actuación en vivo en el Worlds de París fue considerada uno de los mejores shows de apertura esports.",
    champions: ["Ekko", "Qiyana", "Senna", "Akali", "Yasuo"],
  },
  {
    name: "Star Guardian",
    genre: "J-Pop / Pop Dreamy",
    color: "#FF69B4",
    members: ["Jinx", "Lux", "Poppy", "Janna", "Lulu"],
    songs: [
      { title: "Still Here", year: "2017", desc: "La canción oficial del evento Star Guardian" },
      { title: "Everything Goes On", year: "2022", desc: "Una colaboración con Porter Robinson que se convirtió en viral" },
      { title: "Burning Bright", year: "2022", desc: "Tema de apertura del evento Star Guardian 2022" },
    ],
    description: "Star Guardian es el universo alternativo donde las campeonas de League of Legends se convierten en guerreras mágicas inspiradas en el anime shojo. Su música refleja esa mezcla de magia, amistad y sacrificio con tonos dreamy y épicos.",
    champions: ["Jinx", "Lux", "Poppy"],
  },
  {
    name: "Battle Academia",
    genre: "Anime OST / Orquestal",
    color: "#DAA520",
    members: ["Ezreal", "Lux", "Jayce", "Katarina", "Garen", "Leona"],
    songs: [
      { title: "Battle Academia Theme", year: "2019", desc: "El tema principal del universo académico" },
    ],
    description: "Battle Academia es el universo where League of Legends se convierte en un anime de academia. La música orquestal y dinámica refleja las batallas estudiantiles épicas de este mundo alternativo.",
    champions: ["Ezreal", "Lux", "Katarina", "Garen"],
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Header */}
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

      {/* Groups */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {MUSIC_GROUPS.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 border p-8 transition-all`}
              style={{ borderColor: g.color + "25", background: g.color + "05" }}
            >
              {/* Champion visuals */}
              <div className="lg:w-80 shrink-0">
                <div className="grid grid-cols-2 gap-1.5">
                  {g.champions.slice(0, 4).map((c) => (
                    <div key={c} className="relative overflow-hidden" style={{ aspectRatio: "1" }}>
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c}_0.jpg`}
                        alt={c}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050E1A]/40" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-3 py-1 text-xs font-sans font-bold tracking-widest uppercase"
                    style={{ backgroundColor: g.color + "20", color: g.color, border: `1px solid ${g.color}40` }}
                  >
                    {g.genre}
                  </span>
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
                        transition={{ delay: si * 0.1 }}
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

                <div className="mt-4 pt-4 border-t border-[#C8AA6E]/10">
                  <p className="font-sans text-[#F0E6D3]/30 text-xs">
                    Miembros: {g.members.join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
