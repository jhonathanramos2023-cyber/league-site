import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050E1A] border-t border-[#C8AA6E]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <span className="block text-xl font-serif font-bold text-[#C8AA6E] tracking-widest uppercase mb-3">
              League of Legends
            </span>
            <p className="text-[#F0E6D3]/50 text-sm font-sans leading-relaxed">
              El campo de batalla más épico del mundo te espera. Únete a 150 millones de invocadores.
            </p>
          </div>

          <div>
            <h3 className="text-[#C8AA6E] font-serif text-sm tracking-widest uppercase mb-4">Juego</h3>
            <ul className="space-y-2">
              {[
                { to: "/campeones", label: "Campeones" },
                { to: "/modos-de-juego", label: "Modos de Juego" },
                { to: "/historia", label: "Historia" },
                { to: "/regiones", label: "Regiones" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#F0E6D3]/50 hover:text-[#C8AA6E] text-sm font-sans transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#C8AA6E] font-serif text-sm tracking-widest uppercase mb-4">Comunidad</h3>
            <ul className="space-y-2">
              {[
                { to: "/esports", label: "Esports" },
                { to: "/musica", label: "Música" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#F0E6D3]/50 hover:text-[#C8AA6E] text-sm font-sans transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#C8AA6E] font-serif text-sm tracking-widest uppercase mb-4">Síguenos</h3>
            <div className="flex gap-3 flex-wrap">
              {["Twitter / X", "YouTube", "Instagram", "TikTok", "Twitch"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1 text-xs font-sans text-[#F0E6D3]/50 hover:text-[#C8AA6E] border border-[#C8AA6E]/20 hover:border-[#C8AA6E]/60 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#C8AA6E]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F0E6D3]/30 text-xs font-sans">
            &copy; 2024 Riot Games. League of Legends es una marca registrada de Riot Games, Inc.
          </p>
          <div className="flex gap-4 text-xs font-sans text-[#F0E6D3]/30">
            <a href="#" className="hover:text-[#C8AA6E] transition-colors">Términos de uso</a>
            <a href="#" className="hover:text-[#C8AA6E] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#C8AA6E] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
