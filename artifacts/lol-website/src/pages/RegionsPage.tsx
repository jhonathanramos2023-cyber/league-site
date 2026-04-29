import { motion } from "framer-motion";
import { Link } from "wouter";
import { REGIONS } from "@/data/regions";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Header */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
      >
        <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-4">El Mundo</p>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-[#F0E6D3] uppercase mb-4">Regiones de Runeterra</h1>
        <GoldDivider />
        <p className="font-sans text-[#F0E6D3]/60 text-lg max-w-2xl mx-auto mt-6">
          Runeterra está dividida en regiones únicas, cada una con su propia cultura, historia y conflictos. Explóralas todas.
        </p>
      </div>

      {/* Map visual */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto relative">
          <div
            className="relative h-64 md:h-80 overflow-hidden border border-[#C8AA6E]/20 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #050E1A 0%, #091428 50%, #050E1A 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,16 58,36 30,50 2,36 2,16' fill='none' stroke='%23C8AA6E' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: "40px 34px",
              }}
            />
            <div className="relative z-10 text-center">
              <p className="font-serif text-4xl font-black text-[#C8AA6E] uppercase tracking-widest mb-2">Runeterra</p>
              <p className="font-sans text-[#F0E6D3]/40 text-sm tracking-widest">{REGIONS.length} Regiones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden border transition-all duration-300"
                style={{ borderColor: r.color + "25" }}
              >
                <Link to={`/region/${r.id}`} className="block">
                  {/* Champion preview */}
                  <div className="relative h-40 overflow-hidden">
                    {r.imagenChampion && (
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${r.imagenChampion}_0.jpg`}
                        alt={r.nombre}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050E1A]/40 to-[#050E1A]" />
                    <div
                      className="absolute top-3 left-3 w-3 h-3 rotate-45"
                      style={{ backgroundColor: r.color }}
                    />
                  </div>

                  <div className="p-5" style={{ background: r.color + "06" }}>
                    <h2 className="font-serif text-xl font-bold mb-1" style={{ color: r.color }}>{r.nombre}</h2>
                    <p className="font-sans text-[#F0E6D3]/40 text-xs tracking-wider mb-3">{r.subtitulo}</p>
                    <p className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed line-clamp-3 mb-4">{r.descripcion}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1.5">
                        {r.campeones.slice(0, 4).map((c) => (
                          <img
                            key={c}
                            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${c}.png`}
                            alt={c}
                            className="w-7 h-7 border border-[#050E1A]"
                            loading="lazy"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                        ))}
                        {r.campeones.length > 4 && (
                          <div className="w-7 h-7 bg-[#091428] border border-[#C8AA6E]/20 flex items-center justify-center">
                            <span className="font-sans text-[#C8AA6E] text-xs">+{r.campeones.length - 4}</span>
                          </div>
                        )}
                      </div>
                      <span className="font-sans text-xs tracking-widest uppercase" style={{ color: r.color }}>
                        Explorar &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
