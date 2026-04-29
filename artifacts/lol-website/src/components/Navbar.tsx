import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: "/campeones", label: "Campeones" },
    { to: "/historia", label: "Historia" },
    { to: "/regiones", label: "Regiones" },
    { to: "/modos-de-juego", label: "Modos" },
    { to: "/esports", label: "Esports" },
    { to: "/musica", label: "Música" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050E1A]/95 backdrop-blur-md border-b border-[#C8AA6E]/60 shadow-[0_4px_20px_rgba(200,170,110,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className="text-lg md:text-xl font-serif font-bold tracking-widest uppercase"
            style={{ color: "#C8AA6E", textShadow: "0 0 20px rgba(200,170,110,0.4)" }}
          >
            League of Legends
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-200 font-sans ${
                location === l.to
                  ? "text-[#C8AA6E]"
                  : "text-[#F0E6D3]/70 hover:text-[#C8AA6E]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://signup.leagueoflegends.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-bold tracking-widest uppercase font-sans text-[#050E1A] bg-[#C8AA6E] hover:bg-[#F0E6D3] transition-all duration-200"
            style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
          >
            Jugar Gratis
          </a>
        </div>

        <button
          className="md:hidden text-[#C8AA6E] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#091428]/98 backdrop-blur-md border-t border-[#C8AA6E]/30 px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-3 text-sm font-medium tracking-wider uppercase text-[#F0E6D3]/80 hover:text-[#C8AA6E] transition-colors font-sans border-b border-[#C8AA6E]/10"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://signup.leagueoflegends.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 text-sm font-bold tracking-widest uppercase text-center text-[#050E1A] bg-[#C8AA6E]"
          >
            Jugar Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
