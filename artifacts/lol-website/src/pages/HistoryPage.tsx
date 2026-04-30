import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

const LOL_HISTORY = [
  { year: "2006", title: "El Origen en DotA", desc: "Brandon 'Ryze' Beck y Marc 'Tryndamere' Merrill se conocen jugando Defense of the Ancients (DotA), un mod de Warcraft III. Frustrados por las limitaciones del mod, deciden crear su propio juego. Fundan Riot Games en Los Ángeles con un equipo inicial de 4 personas.", color: "#C8AA6E" },
  { year: "2008", title: "Primeras Betas Cerradas", desc: "League of Legends entra en fase beta cerrada. Los primeros campeones incluían a Annie, Ashe, Fiddlesticks, Kayle, Master Yi, Morgana, Nunu, Ryze, Sion, Sivir, Soraka, Teemo, Tristana, Twisted Fate, Veigar y Warwick.", color: "#0BC4E3" },
  { year: "2009", title: "Lanzamiento Oficial — 27 de Octubre", desc: "League of Legends se lanza oficialmente para PC de forma gratuita. Al lanzamiento había 40 campeones disponibles. El modelo free-to-play con skins cosméticas revolucionó la industria del videojuego competitivo.", color: "#C8AA6E" },
  { year: "2011", title: "Primer Campeonato Mundial — Season 1", desc: "El primer World Championship se celebra en DreamHack en Suecia. El equipo Fnatic se convierte en el primer campeón mundial. El prize pool era de apenas 50,000 dólares — pequeño para los estándares actuales pero el inicio de algo enorme.", color: "#9B5CD4" },
  { year: "2012", title: "Explosión Global — 32 Millones", desc: "LoL se convierte en el juego más jugado del mundo con más de 32 millones de jugadores registrados. Los servidores colapsan repetidamente por el crecimiento explosivo. Taipei Assassins gana el Mundial Season 2 en el USC Galen Center de Los Ángeles.", color: "#C8542A" },
  { year: "2013", title: "Nace la Leyenda Faker — SKT T1 Campeón", desc: "El primer año de Faker en el escenario profesional. SKT T1 gana el Campeonato Mundial Season 3 en Staples Center, Los Ángeles. Faker es reconocido inmediatamente como el mejor jugador del mundo. Prize pool: 2 millones de dólares.", color: "#C8AA6E" },
  { year: "2014", title: "150 Millones de Jugadores", desc: "LoL alcanza 150 millones de cuentas registradas. 67 millones de jugadores activos mensualmente. Se convierte en el juego más jugado en PC del planeta, superando a todos sus competidores. Pentakill lanza su primer álbum 'Mortal Reminder'.", color: "#0BC4E3" },
  { year: "2015", title: "SKT T1 Bicampeón — La Era Faker", desc: "SKT T1 gana su segundo Mundial. Faker se consolida como el mejor jugador de todos los tiempos. El torneo en Bruselas atrae 36 millones de espectadores simultáneos.", color: "#C8AA6E" },
  { year: "2016", title: "SKT T1 Tricampeón — Dinastía Histórica", desc: "SKT T1 gana su tercer campeonato mundial, convirtiéndose en el único equipo tricampeón hasta ese momento. La final en el Staples Center bate records de audiencia para un evento esports.", color: "#C8AA6E" },
  { year: "2017", title: "Samsung Galaxy Rompe la Dinastía", desc: "Samsung Galaxy derrota a SKT T1 en una final épica 3-0. Es el fin de la era de dominio coreano absoluto de SKT. El torneo en Beijing atrae más de 60 millones de espectadores.", color: "#1E90FF" },
  { year: "2018", title: "K/DA POP/STARS — Fenómeno Cultural", desc: "Riot lanza el grupo virtual K/DA con POP/STARS durante el Mundial 2018 en Corea del Sur. La actuación con hologramas en vivo es histórica — la canción supera 400 millones de reproducciones en YouTube. Invictus Gaming gana el primer Mundial chino en suelo coreano.", color: "#9B5CD4" },
  { year: "2019", title: "FunPlus Phoenix — China Bicampeona", desc: "FunPlus Phoenix gana el Mundial 2019 en París. True Damage actúa en la ceremonia de apertura en el Accor Arena con 'GIANTS'. El ADC Lwx y el soporte Crisp forman la mejor botlane del torneo.", color: "#C8542A" },
  { year: "2020", title: "DAMWON Gaming — Nueva Era Coreana", desc: "DAMWON Gaming gana el Mundial 2020, completamente online por la pandemia de COVID-19. ShowMaker emerge como el mejor mid laner de su generación. Riot anuncia Arcane y Wild Rift.", color: "#C8AA6E" },
  { year: "2021", title: "Arcane en Netflix — Universo Expandido", desc: "Riot lanza Arcane en Netflix, una serie animada sobre los orígenes de Vi y Jinx en Piltóver y Zaun. Gana 9 Emmy Awards y es considerada una de las mejores series de animación de la historia. EDward Gaming gana Worlds en Reikiavik, Islandia.", color: "#0BC4E3" },
  { year: "2022", title: "T1 — El Cuarto Anillo de Faker", desc: "T1 gana su cuarto campeonato mundial en San Francisco, venciendo a DRX en la final. Faker gana su cuarto anillo, cementando su legado como el GOAT de los esports. La audiencia supera los 73 millones de espectadores simultáneos.", color: "#C8AA6E" },
  { year: "2023", title: "Heartsteel y Worlds en Corea", desc: "T1 llega a su quinta final mundial pero pierde ante Weibo Gaming en partidas dramáticas. El torneo en Corea del Sur bate todos los records de asistencia presencial. Riot lanza Heartsteel, la nueva línea musical con Sett, Yone, Kayn, Aphelios, Ezreal y K'Sante.", color: "#E91E63" },
  { year: "2024", title: "T1 Pentacampeón — Arcane T2", desc: "T1 se corona bicampeón consecutivo y pentacampeón histórico al ganar Worlds 2024. Faker juega su décima temporada profesional. Se lanza Arcane Temporada 2 en Netflix. Nuevos campeones como Smolder, Aurora, Ambessa y Mel se añaden al roster, superando los 170 campeones jugables.", color: "#C8AA6E" },
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
          15 Años de Leyenda
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-black text-[#F0E6D3] uppercase mb-4"
        >
          Historia del Juego
        </motion.h1>
        <GoldDivider />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-[#F0E6D3]/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Desde un pequeño estudio en Los Ángeles hasta convertirse en el videojuego más influyente de la historia de los esports. Esta es la historia real de League of Legends.
        </motion.p>
      </div>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8AA6E]/60 via-[#C8AA6E]/30 to-transparent" />

            <div className="space-y-10">
              {LOL_HISTORY.map((e, i) => (
                <motion.div
                  key={e.year + e.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className="inline-block px-3 py-1 mb-2 text-xs font-sans font-bold tracking-widest uppercase"
                      style={{ color: e.color, backgroundColor: e.color + "15", border: `1px solid ${e.color}40` }}
                    >
                      {e.year}
                    </div>
                    <h3 className="font-serif text-[#F0E6D3] text-xl md:text-2xl font-bold mb-2 leading-tight">{e.title}</h3>
                    <p className="font-sans text-[#F0E6D3]/55 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                  <div className="shrink-0 mt-2 relative z-10">
                    <div className="w-5 h-5 rotate-45 border-2 border-[#050E1A]" style={{ backgroundColor: e.color, boxShadow: `0 0 15px ${e.color}80` }} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* World intro */}
      <section className="py-16 px-4 bg-[#091428]/30">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-[#F0E6D3] uppercase mb-4">El Universo de Runeterra</h2>
            <GoldDivider />
          </SectionReveal>
          <SectionReveal>
            <div className="p-8 border border-[#C8AA6E]/20 bg-[#091428]/40">
              <p className="font-sans text-[#F0E6D3]/70 leading-relaxed mb-4">
                Runeterra es un mundo mágico creado hace eones por seres llamados los Celestiales. La magia que impregna el mundo se llama Magia del Rune — una fuerza primigenia que puede dar poder sobrehumano pero que también corrompe a quienes no pueden controlarla.
              </p>
              <p className="font-sans text-[#F0E6D3]/70 leading-relaxed">
                Las principales fuentes de conflicto en este mundo son: la guerra centenaria entre Demacia y Noxus, el avance imparable del Vacío desde sus dimensiones, los fantasmas del Imperio de Shurima que regresan para reclamar su gloria, y la amenaza siempre presente de las Islas de las Sombras.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Factions */}
      <section className="py-16 px-4">
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
