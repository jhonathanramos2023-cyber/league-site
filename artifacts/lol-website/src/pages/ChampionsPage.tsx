import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChampionCard } from "@/components/ChampionCard";

const DDV = "14.24.1";

interface ChampData {
  id: string;
  name: string;
  title: string;
  tags: string[];
  info: { difficulty: number };
}

const TAG_LABELS: Record<string, string> = {
  Assassin: "Asesino",
  Fighter: "Luchador",
  Mage: "Mago",
  Marksman: "Tirador",
  Support: "Soporte",
  Tank: "Tanque",
};

const DIFFICULTIES = [
  { label: "Todos", max: 10 },
  { label: "Fácil", max: 3 },
  { label: "Medio", max: 6 },
  { label: "Difícil", max: 10 },
];

export default function ChampionsPage() {
  const [champions, setChampions] = useState<ChampData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [diffFilter, setDiffFilter] = useState("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/${DDV}/data/es_ES/champion.json`)
      .then((r) => r.json())
      .then((data) => {
        const list: ChampData[] = Object.values(data.data as Record<string, ChampData>);
        setChampions(list.sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return champions.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.title.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "all" || c.tags.includes(roleFilter);
      let matchDiff = true;
      if (diffFilter === "Fácil") matchDiff = c.info.difficulty <= 3;
      else if (diffFilter === "Medio") matchDiff = c.info.difficulty > 3 && c.info.difficulty <= 6;
      else if (diffFilter === "Difícil") matchDiff = c.info.difficulty > 6;
      return matchSearch && matchRole && matchDiff;
    });
  }, [champions, search, roleFilter, diffFilter]);

  return (
    <div className="min-h-screen bg-[#050E1A] pt-20">
      {/* Header */}
      <div
        className="relative py-16 px-4 text-center border-b border-[#C8AA6E]/20"
        style={{ background: "linear-gradient(180deg, #091428 0%, #050E1A 100%)" }}
      >
        <p className="font-sans text-[#C8AA6E] text-xs tracking-[0.5em] uppercase mb-3">El Roster Completo</p>
        <h1 className="font-serif text-5xl md:text-6xl font-black text-[#F0E6D3] uppercase">Campeones</h1>
        <p className="font-sans text-[#F0E6D3]/50 mt-3 text-base">
          {loading ? "Cargando..." : `${champions.length} campeones listos para la batalla`}
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#050E1A]/95 backdrop-blur-md border-b border-[#C8AA6E]/10 px-4 py-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="search"
              placeholder="Buscar campeón..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-[#091428] border border-[#C8AA6E]/20 focus:border-[#C8AA6E]/60 outline-none px-4 py-2 font-sans text-sm text-[#F0E6D3] placeholder:text-[#F0E6D3]/30"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-2 border transition-colors ${viewMode === "grid" ? "border-[#C8AA6E] text-[#C8AA6E]" : "border-[#C8AA6E]/20 text-[#F0E6D3]/40"}`}
                aria-label="Grid view"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="0" y="0" width="7" height="7"/><rect x="9" y="0" width="7" height="7"/>
                  <rect x="0" y="9" width="7" height="7"/><rect x="9" y="9" width="7" height="7"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-2 border transition-colors ${viewMode === "list" ? "border-[#C8AA6E] text-[#C8AA6E]" : "border-[#C8AA6E]/20 text-[#F0E6D3]/40"}`}
                aria-label="List view"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="0" y="1" width="16" height="2"/><rect x="0" y="7" width="16" height="2"/><rect x="0" y="13" width="16" height="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Role filters */}
          <div className="flex gap-2 flex-wrap">
            {[{ key: "all", label: "Todos" }, ...Object.entries(TAG_LABELS).map(([k, v]) => ({ key: k, label: v }))].map((r) => (
              <button
                key={r.key}
                onClick={() => setRoleFilter(r.key)}
                className={`px-3 py-1 text-xs font-sans font-bold tracking-wider uppercase transition-all ${
                  roleFilter === r.key
                    ? "bg-[#C8AA6E] text-[#050E1A]"
                    : "border border-[#C8AA6E]/20 text-[#F0E6D3]/50 hover:border-[#C8AA6E]/50 hover:text-[#C8AA6E]"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Difficulty filters */}
          <div className="flex gap-2 flex-wrap">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.label}
                onClick={() => setDiffFilter(d.label)}
                className={`px-3 py-1 text-xs font-sans tracking-wider transition-all ${
                  diffFilter === d.label
                    ? "text-[#C8AA6E] border-b border-[#C8AA6E]"
                    : "text-[#F0E6D3]/30 hover:text-[#F0E6D3]/60"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Champions grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="bg-[#091428] animate-pulse" style={{ aspectRatio: "2/3" }} />
            ))}
          </div>
        ) : (
          <>
            <p className="font-sans text-[#F0E6D3]/30 text-sm mb-4">{filtered.length} campeones</p>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {filtered.map((c, i) => (
                  <ChampionCard key={c.id} id={c.id} name={c.name} title={c.title} tags={c.tags} index={i % 24} />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {filtered.map((c, i) => (
                  <motion.a
                    key={c.id}
                    href={`/campeon/${c.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i % 20) * 0.02 }}
                    className="flex items-center gap-4 p-3 border border-[#C8AA6E]/10 hover:border-[#C8AA6E]/40 hover:bg-[#091428]/60 transition-all group"
                  >
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/${DDV}/img/champion/${c.id}.png`}
                      alt={c.name}
                      className="w-12 h-12 object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-[#F0E6D3] font-bold group-hover:text-[#C8AA6E] transition-colors">{c.name}</div>
                      <div className="font-sans text-[#F0E6D3]/40 text-xs truncate">{c.title}</div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {c.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-sans border border-[#C8AA6E]/20 text-[#C8AA6E]/70">
                          {TAG_LABELS[t] || t}
                        </span>
                      ))}
                    </div>
                    <div className="text-[#F0E6D3]/30 text-xs font-sans shrink-0">
                      Dif: {c.info.difficulty}/10
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
