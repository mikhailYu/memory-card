let levelInput = [
  [],
  ["charmander", "bulbasaur"],
  ["squirtle", "wartortle"],
  ["charmander", "charmeleon"],
  ["bulbasaur", "ivysaur", "venusaur"],
  ["charmander", "charmeleon", "charizard"],
  ["moltres", "zapdos", "articuno"],
  ["chikorita", "cyndaquil", "totodile"],
  ["bayleef", "meganium", "quilava", "typhlosion"],
  ["kyogre", "groudon", "rayquaza"],
  ["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile"],
  ["wartortle", "blastoise", "quilava", "typhlosion", "croconaw", "feraligatr"],
  ["treecko", "grovyle", "torchic", "combusken", "mudkip", "marshtomp"],
  ["torterra", "infernape", "empoleon", "charizard", "feraligatr", "sceptile"],
  ["regirock", "regice", "registeel", "regigigas"],
  ["turtwig", "grotle", "chimchar", "monferno", "piplup", "prinplup"],
  ["caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill"],
  [
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "starly",
    "staravia",
    "staraptor",
    "wingull",
    "pelipper",
  ],
  ["wurmple", "silcoon", "beautifly", "cascoon", "dustox", "mothim"],
  [
    "rattata",
    "raticate",
    "zigzagoon",
    "linoone",
    "bidoof",
    "bibarel",
    "sentret",
    "furret",
  ],
  ["charmander", "charmeleon", "charizard", "charizard-shiny"],

  [
    "spearow",
    "fearow",
    "taillow",
    "swellow",
    "swablu",
    "altaria",
    "natu",
    "xatu",
  ],
  ["combee", "combee-f", "vespiquen"],
  ["electrode", "electrode-shiny", "voltorb", "voltorb-shiny"],
  [
    "geodude",
    "graveler",
    "golem",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "politoed",
    "lapras",
  ],
  [
    "manaphy",
    "phione",
    "cresselia",
    "uxie",
    "azelf",
    "mesprit",
    "arceus-normal",
    "darkrai",
  ],

  [
    "buneary",
    "lopunny",
    "kangaskhan",
    "pinsir",
    "aipom",
    "ambipom",
    "spoink",
    "grumpig",
  ],
  ["pichu", "pikachu", "raichu", "plusle", "minun", "pachirisu"],
  ["arceus-dragon", "arceus-bug", "arceus-dark"],
  [
    "charmander",
    "squirtle",
    "chimchar",
    "chikorita",
    "treecko",
    "cyndaquil",
    "piplup",
    "mudkip",
  ],
  [
    "burmy-plant",
    "burmy-sandy",
    "burmy-trash",
    "wormadam-plant",
    "wormadam-sandy",
    "wormadam-trash",
  ],

  [
    "sceptile",
    "blaziken",
    "swampert",
    "charizard",
    "meganium",
    "feraligatr",
    "typhlosion",
    "venusaur",
  ],

  [
    "suicune",
    "entei",
    "raikou",
    "ho-oh",
    "lugia",
    "latias",
    "latios",
    "darkrai",
  ],
  ["deoxys-normal", "deoxys-speed", "deoxys-attack", "deoxys-defense"],

  [
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",

    "wobbuffet",
    "wobbuffet-f",
  ],
  [
    "venusaur",
    "venusaur-shiny",
    "charizard",
    "charizard-shiny",
    "blastoise",
    "blastoise-shiny",
  ],
  [
    "dialga",
    "palkia",
    "shaymin-land",
    "shaymin-sky",
    "giratina-origin",
    "giratina-altered",
  ],

  [
    "rotom",
    "rotom-fan",
    "rotom-frost",
    "rotom-heat",
    "rotom-mow",
    "rotom-wash",
  ],

  [
    "eevee",
    "espeon",
    "umbreon",
    "leafeon",
    "glaceon",
    "vaporeon",
    "jolteon",
    "flareon",
  ],
  [
    "arceus-dragon",
    "arceus-electric",
    "arceus-fire",
    "arceus-grass",
    "arceus-water",
    "arceus-curse",
  ],

  [
    "unown-a",
    "unown-c",
    "unown-h",
    "unown-d",
    "unown-n",
    "unown-m",
    "unown-o",
    "unown-u",
    "unown-qm",
    "unown-z",
  ],
];

let levelStorage = sortLevels();

function sortLevels() {
  let count = 0;

  let arr = levelInput.map((input) => {
    count++;

    return { level: count, cards: input };
  });

  return arr;
}

export default levelStorage;
