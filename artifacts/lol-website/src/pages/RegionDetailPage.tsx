import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { REGIONS } from "@/data/regions";
import { GoldDivider } from "@/components/GoldDivider";

export default function RegionDetailPage() {
  const params = useParams<{ nombre: string }>();
  const region = REGIONS.find((r) => r.id === params.nombre);

  if (!region) {
    return (
      <div className="min-h-screen bg-[#050E1A] pt-20 flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-[#F0E6D3] text-2xl">Región no encontrada</p>
        <Link to="/regiones" className="font-sans text-[#C8AA6E] border border-[#C8AA6E]/40 px-6 py-2 hover:bg-[#C8AA6E]/10 transition-all">
          Volver a Regiones
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050E1A]">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        {region.imagenChampion && (
          <div className="absolute inset-0">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${region.imagenChampion}_0.jpg`}
              alt={region.nombre}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A]/60 via-transparent to-[#050E1A]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050E1A]/80 via-transparent to-transparent" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: !region.imagenChampion ? `linear-gradient(135deg, ${region.color}20 0%, #050E1A 100%)` : undefined }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12 pt-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-5 h-5 rotate-45 mb-4"
            style={{ backgroundColor: region.color }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl font-black uppercase leading-none mb-3"
            style={{ color: region.color, textShadow: `0 0 40px ${region.color}40` }}
          >
            {region.nombre}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#F0E6D3]/60 text-lg tracking-wider"
          >
            {region.subtitulo}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="font-sans text-[#F0E6D3]/70 text-base leading-relaxed">{region.descripcion}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-2 uppercase" style={{ color: region.color }}>Clima</h2>
              <GoldDivider />
              <p className="font-sans text-[#F0E6D3]/60 mt-3">{region.clima}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-2 uppercase" style={{ color: region.color }}>Conflictos Activos</h2>
              <GoldDivider />
              <ul className="mt-3 space-y-2">
                {region.conflictos.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: region.color }} />
                    <span className="font-sans text-[#F0E6D3]/60 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-2 uppercase" style={{ color: region.color }}>Curiosidades</h2>
              <GoldDivider />
              <ul className="mt-3 space-y-3">
                {region.curiosidades.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="font-serif font-bold text-sm w-6 h-6 flex items-center justify-center border shrink-0 mt-0.5" style={{ borderColor: region.color + "50", color: region.color }}>
                      {i + 1}
                    </span>
                    <span className="font-sans text-[#F0E6D3]/60 text-sm leading-relaxed">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Champions sidebar */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-2 uppercase" style={{ color: region.color }}>Campeones</h2>
            <GoldDivider />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {region.campeones.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link to={`/campeon/${c}`}>
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${c}.png`}
                      alt={c}
                      title={c}
                      className="w-full border border-transparent hover:border-[#C8AA6E]/50 transition-all"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#C8AA6E]/10">
          <Link to="/regiones" className="font-sans text-[#C8AA6E]/50 hover:text-[#C8AA6E] transition-colors text-sm">
            &larr; Volver a todas las regiones
          </Link>
        </div>
      </div>
    </div>
  );
}
