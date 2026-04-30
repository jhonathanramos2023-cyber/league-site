import { motion } from "framer-motion";
import { Link } from "wouter";
import { getChampionName } from "@/data/championNames";

interface ChampionCardProps {
  id: string;
  title: string;
  tags: string[];
  index?: number;
}

const TAG_LABELS: Record<string, string> = {
  Assassin: "Asesino",
  Fighter: "Luchador",
  Mage: "Mago",
  Marksman: "Tirador",
  Support: "Soporte",
  Tank: "Tanque",
};

const TAG_COLORS: Record<string, string> = {
  Assassin: "#C8542A",
  Fighter: "#DAA520",
  Mage: "#9B5CD4",
  Marksman: "#0BC4E3",
  Support: "#2E7D32",
  Tank: "#1E90FF",
};

export function ChampionCard({ id, title, tags, index = 0 }: ChampionCardProps) {
  const name = getChampionName(id);
  const loadingUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative cursor-pointer overflow-hidden"
      style={{ aspectRatio: "2/3" }}
    >
      <Link to={`/campeon/${id}`} className="block w-full h-full">
        <div className="absolute inset-0 bg-[#091428]">
          <img
            src={loadingUrl}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ objectPosition: "center 15%" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-[#050E1A]/10 to-transparent" />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "inset 0 0 0 1px #C8AA6E, 0 0 30px rgba(200,170,110,0.3)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-1 mb-1 flex-wrap">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] font-sans font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: TAG_COLORS[tag] + "33",
                  color: TAG_COLORS[tag] || "#C8AA6E",
                  border: `1px solid ${TAG_COLORS[tag] || "#C8AA6E"}55`,
                }}
              >
                {TAG_LABELS[tag] || tag}
              </span>
            ))}
          </div>
          <h3 className="text-[#F0E6D3] font-serif font-bold text-sm leading-tight">{name}</h3>
          <p className="text-[#C8AA6E]/70 text-xs font-sans leading-tight mt-0.5 truncate">{title}</p>
        </div>
      </Link>
    </motion.div>
  );
}
