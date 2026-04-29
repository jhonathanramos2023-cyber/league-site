export interface Region {
  id: string;
  nombre: string;
  subtitulo: string;
  color: string;
  clima: string;
  descripcion: string;
  campeones: string[];
  conflictos: string[];
  curiosidades: string[];
  imagenChampion?: string;
}

export const REGIONS: Region[] = [
  {
    id: "demacia",
    nombre: "Demacia",
    subtitulo: "El Reino de la Justicia y el Honor",
    color: "#1E90FF",
    clima: "Templado, bosques y montañas nevadas",
    descripcion: "Demacia es un reino poderoso y orgulloso, famoso por sus principios de honor, virtud y desconfianza hacia la magia. Sus ciudades están construidas con piedra pétrima, un material que suprime la magia. El reino fue fundado por refugiados que huían de guerras mágicas, y ese trauma colectivo creó una sociedad que ve la magia como una amenaza existencial.",
    campeones: ["Garen", "Lux", "JarvanIV", "Fiora", "Galio", "Poppy", "Quinn", "Sona", "Vayne", "XinZhao"],
    conflictos: ["Guerra centenaria contra Noxus", "Persecución interna de magos", "Revuelta de los Liberados"],
    curiosidades: [
      "La piedra pétrima de Demacia suprime la magia activamente",
      "Lux y Garen son hermanos y pertenecen a la familia Crownguard",
      "Jarvan IV es el príncipe heredero del reino"
    ],
    imagenChampion: "Garen"
  },
  {
    id: "noxus",
    nombre: "Noxus",
    subtitulo: "El Imperio del Poder Sin Límites",
    color: "#C8542A",
    clima: "Variado según la región conquistada",
    descripcion: "Noxus es el imperio más poderoso y expansionista de Runeterra. Su filosofía es simple pero brutal: el poder lo es todo. Cualquiera puede ascender en Noxus si demuestra suficiente fuerza, sin importar su origen. Sus legiones son temidas en todo el mundo conocido.",
    campeones: ["Darius", "Katarina", "Draven", "Swain", "Riven", "Talon", "Vladimir", "Mordekaiser", "Cassiopeia", "Sion"],
    conflictos: ["Invasión de Ionia", "Conflicto centenario con Demacia", "Luchas internas por el Trifarí"],
    curiosidades: [
      "Swain es el actual Gran General de Noxus tras un golpe de estado",
      "Noxus tiene tres tipos de poder: fuerza bruta, astucia y voluntad de hierro",
      "El Trifarí es la cúpula gobernante formada por tres líderes"
    ],
    imagenChampion: "Darius"
  },
  {
    id: "ionia",
    nombre: "Ionia",
    subtitulo: "El Primer Continente, Tierra de la Magia y el Espíritu",
    color: "#9B5CD4",
    clima: "Templado húmedo, bosques milenarios y archipiélagos",
    descripcion: "Ionia es quizás la región más mágicamente dotada de Runeterra. Sus habitantes viven en armonía con el Espíritu de Runeterra, una red invisible de magia que conecta todos los seres vivos. Fue invadida por Noxus, dejando cicatrices que aún no sanan.",
    campeones: ["Yasuo", "Yone", "Ahri", "Zed", "LeeSin", "Karma", "Akali", "Irelia", "MasterYi", "Shen", "Wukong", "Jhin"],
    conflictos: ["Secuelas de la invasión noxiana", "Orden de las Sombras vs Ojo de Twilight", "El retorno de Viego"],
    curiosidades: [
      "Ionia es un archipiélago de islas conectadas por magia",
      "La magia espiritual ioniana es única: conecta a los seres con el Nexo Natural",
      "El equilibrio entre luz y oscuridad es fundamental en su filosofía"
    ],
    imagenChampion: "Yasuo"
  },
  {
    id: "freljord",
    nombre: "Freljord",
    subtitulo: "Las Tierras Eternas del Hielo y la Tormenta",
    color: "#87CEEB",
    clima: "Ártico extremo, tormentas eternas",
    descripcion: "El Freljord es una vasta extensión helada al norte de Runeterra donde solo los más fuertes sobreviven. Tres tribus compiten por el control: los Avarosa liderados por Ashe, los Inuit de la Tormenta y los Espíritus de las Nieves de Lissandra.",
    campeones: ["Ashe", "Tryndamere", "Sejuani", "Lissandra", "Braum", "Olaf", "Volibear", "Anivia", "Gnar"],
    conflictos: ["Guerra de las Tres Tribus", "Amenaza de los Watchers bajo el hielo", "Incursiones del Vacío"],
    curiosidades: [
      "Braum es el héroe más querido del Freljord, conocido por su bondad infinita",
      "Volibear es una deidad antigua que precede a la humanidad",
      "Los Watchers son seres del Void atrapados bajo el hielo por Lissandra"
    ],
    imagenChampion: "Ashe"
  },
  {
    id: "piltover",
    nombre: "Piltóver / Zaun",
    subtitulo: "La Ciudad del Progreso y sus Sombras",
    color: "#F0C040",
    clima: "Templado industrial, siempre cubierto por smog de fábrica",
    descripcion: "Piltóver es la ciudad más avanzada tecnológicamente de Runeterra. Hogar de la tecnología hextech, tiene dos caras: la brillante Piltóver arriba y la oscura y contaminada Zaun en los niveles inferiores. La tensión entre ambas ciudades es constante.",
    campeones: ["Caitlyn", "Vi", "Jinx", "Ezreal", "Heimerdinger", "Jayce", "Viktor", "Blitzcrank", "Ekko", "Warwick"],
    conflictos: ["Tensión Piltóver/Zaun", "Criminalidad en el Underground", "Revolución hextech"],
    curiosidades: [
      "La tecnología hextech combina magia y ciencia",
      "Vi y Caitlyn son los sheriffs más famosos de Piltóver",
      "Arcane (Netflix) se centra en esta región"
    ],
    imagenChampion: "Jinx"
  },
  {
    id: "islas-de-las-sombras",
    nombre: "Islas de las Sombras",
    subtitulo: "La Tierra de la Muerte y el Dolor Eterno",
    color: "#228B22",
    clima: "Niebla eterna, muerte y penumbra",
    descripcion: "Antes llamadas Islas de la Fortuna, fueron corrompidas por una catástrofe mágica. Ahora son hogar de los muertos que no pueden descansar, envueltas en la Niebla Negra que corrompe todo lo que toca.",
    campeones: ["Thresh", "Yorick", "Karthus", "Hecarim", "Elise", "Mordekaiser", "Kalista", "Viego", "Gwen"],
    conflictos: ["La Ruina de Viego", "Expansión de la Niebla Negra", "Almas atrapadas eternamente"],
    curiosidades: [
      "El Rey Viego fue quien desató la corrupción con su amor por su reina muerta",
      "La Niebla Negra puede corromper a los vivos al contacto",
      "Thresh colecciona almas en su linterna por placer eterno"
    ],
    imagenChampion: "Thresh"
  },
  {
    id: "shurima",
    nombre: "Shurima",
    subtitulo: "El Imperio del Sol Perdido",
    color: "#DAA520",
    clima: "Desierto abrasador, tormentas de arena",
    descripcion: "Un vasto desierto que esconde las ruinas del mayor imperio que existió en Runeterra. Shurima fue destruida por la traición pero sus guardianes Ascendidos aún caminan buscando restaurar la gloria perdida.",
    campeones: ["Nasus", "Renekton", "Azir", "Xerath", "Sivir", "Cassiopeia", "Taliyah", "Rammus", "Amumu"],
    conflictos: ["Renacimiento del Imperio Shurimano", "Ascendidos vs Darkin", "Conflicto con el Vacío"],
    curiosidades: [
      "Azir resucitó el Imperio de Shurima desde las ruinas",
      "Los Darkin son Ascendidos corrompidos encerrados en armas",
      "Nasus y Renekton son hermanos Ascendidos separados por la traición"
    ],
    imagenChampion: "Nasus"
  },
  {
    id: "bilgewater",
    nombre: "Bilgewater",
    subtitulo: "Puerto de Piratas y Cazadores de Monstruos",
    color: "#1C7BC0",
    clima: "Tropical húmedo, tormentas marinas",
    descripcion: "Ciudad portuaria sin ley en el Estrecho de los Muertos. Comerciantes, piratas, cazadores de monstruos y contrabandistas conviven en este caótico puerto donde todo tiene un precio.",
    campeones: ["MissFortune", "Gangplank", "Fizz", "Nautilus", "Pyke", "Illaoi", "TwistedFate", "Graves"],
    conflictos: ["Poder entre Gangplank y Miss Fortune", "Cazas en el Mar de los Muertos", "Deudas y venganzas"],
    curiosidades: [
      "Miss Fortune fue la que hundió el barco de Gangplank",
      "Los monstruos marinos del estrecho son una amenaza constante",
      "Bilgewater no tiene ninguna ley oficial, solo poder"
    ],
    imagenChampion: "MissFortune"
  },
  {
    id: "targon",
    nombre: "Targón",
    subtitulo: "Las Cumbres de los Dioses",
    color: "#C0C0C0",
    clima: "Glacial en las alturas, templado en valles",
    descripcion: "El Monte Targón es el pico más alto del mundo, hogar de los Celestiales y puerta entre el mundo mortal y los cielos. Solo aquellos elegidos por las estrellas sobreviven la ascensión.",
    campeones: ["Leona", "Diana", "Pantheon", "Taric", "Soraka", "Kayle", "Morgana", "Zoe", "Aphelios"],
    conflictos: ["Celestiales vs Solari vs Lunari", "El Oscuro Astro", "Invasión del Vacío"],
    curiosidades: [
      "Los Celestiales son seres de luz que habitan más allá del mundo",
      "Leona y Diana representan el conflicto entre el sol y la luna",
      "Ascender el Monte Targón es casi siempre fatal"
    ],
    imagenChampion: "Leona"
  },
  {
    id: "void",
    nombre: "El Vacío",
    subtitulo: "La Oscuridad que Devora Todo",
    color: "#6A0DAD",
    clima: "No-existencia, hambre pura",
    descripcion: "El Vacío es una dimensión de pura corrupción y hambre, anterior a la existencia misma. Sus criaturas devoran todo ser vivo. Es la amenaza más existencial para toda Runeterra.",
    campeones: ["Chogath", "Kogmaw", "Velkoz", "Khazix", "Reksai", "Kassadin", "Malzahar", "Belveth"],
    conflictos: ["Invasión constante de Runeterra", "Corrupción de portales en el Freljord", "El plan de Bel'Veth"],
    curiosidades: [
      "El Vacío existía antes que el universo mismo",
      "Kassadin sacrificó su humanidad para combatir el Vacío",
      "Bel'Veth quiere reemplazar Runeterra con una nueva dimensión void"
    ],
    imagenChampion: "Chogath"
  },
  {
    id: "ixtal",
    nombre: "Ixtal",
    subtitulo: "La Jungla Oculta de los Elementalistas",
    color: "#2E7D32",
    clima: "Tropical exuberante, lluvias torrenciales",
    descripcion: "Una nación oculta en la selva más densa del mundo. Los ixtalianos dominan la magia elemental y se aislaron del mundo durante siglos para sobrevivir a las guerras del exterior.",
    campeones: ["Qiyana", "Neeko", "Nidalee", "Rengar", "Zyra", "Milio"],
    conflictos: ["Aislamiento vs apertura al mundo", "Conflictos con Shurima", "La corrupción elemental"],
    curiosidades: [
      "Ixtal desarrolló magia elemental sin paralelo en el mundo",
      "Su aislamiento fue una respuesta a la destrucción de Shurima",
      "Qiyana es la princesa más ambiciosa de Ixtal"
    ],
    imagenChampion: "Qiyana"
  },
  {
    id: "bandle-city",
    nombre: "Bandle City",
    subtitulo: "El Hogar Mágico de los Yordles",
    color: "#FF69B4",
    clima: "Mágicamente cambiante, siempre agradable",
    descripcion: "Bandle City es la dimensión hogar de los yordles, criaturas mágicas pequeñas y adorables. Nadie sabe exactamente dónde está, pero todos los yordles la consideran hogar y pueden encontrarla instintivamente.",
    campeones: ["Teemo", "Lulu", "Tristana", "Gnar", "Heimerdinger", "Corki", "Rumble", "Veigar"],
    conflictos: ["Portales interdimensionales incontrolables", "Yordles perdidos en Runeterra", "La protección del hogar"],
    curiosidades: [
      "Los yordles que permanecen demasiado tiempo fuera olvidarán Bandle City",
      "Veigar fue un yordle que se corrompió con magia oscura",
      "Teemo es secretamente uno de los yordles más peligrosos"
    ],
    imagenChampion: "Teemo"
  }
];
