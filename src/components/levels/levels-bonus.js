let levelInputBonus1 = [
  [],
  ["mew", "mew-alt", "mewtwo", "mewtwo-alt", "ditto", "ditto-alt"],

  ["pichu", "pichu-shiny", "pikachu", "pikachu-shiny"],
  [
    "slowpoke",
    "slowpoke-alt",
    "slowpoke-shiny",
    "slowpoke-alt-shiny",
    "slowbro",
    "slowbro-alt",
    "slowking",
    "slowking-alt",
  ],
  [
    "unown-l-shiny",
    "unown-h-shiny",
    "unown-c-shiny",
    "unown-t",
    "unown-q",
    "unown-em",
  ],
  [
    "manaphy",
    "manaphy-alt",
    "manaphy-shiny",
    "manaphy-alt-shiny",
    "phione",
    "phione-shiny",
    "phione-alt",
    "phione-alt-shiny",
  ],
];

let levelInputBonus2 = [
  [],
  ["pikachu", "pikachu-f", "raichu", "raichu-f"],

  [
    "unown-t-shiny",
    "unown-t",
    "unown-q",
    "unown-q-shiny",
    "unown-em",
    "unown-l-shiny",
    "unown-h-shiny",
    "unown-c-shiny",
    "unown-a",
    "unown-c",
  ],
  [
    "arceus-fire",
    "arceus-grass",
    "arceus-water",
    "arceus-curse",
    "arceus-normal-shiny",
    "arceus-fighting-shiny",
    "arceus-fire-shiny",
    "arceus-ice-shiny",
  ],
  [
    "pichu-spiky-eared",
    "pichu",
    "pichu-shiny",
    "pikachu-f",
    "pikachu-shiny",
    "raichu",
    "raichu-f",
    "raichu-shiny",
  ],
  [
    "deoxys-normal",
    "deoxys-speed",
    "deoxys-attack",
    "deoxys-defense",
    "deoxys-normal-shiny",
    "deoxys-speed-shiny",
    "deoxys-attack-shiny",
    "deoxys-defense-shiny",
  ],

  [
    "arceus-fire-shiny",
    "arceus-ice-shiny",
    "arceus-curse-shiny",
    "arceus-rock-shiny",
    "arceus-steel-shiny",
    "arceus-bug",
    "arceus-dark",
    "arceus-steel",
    "arceus-dragon",
    "arceus-electric",
  ],
];

let levelStorageBonus1 = sortLevels(levelInputBonus1);
let levelStorageBonus2 = sortLevels(levelInputBonus2);

function sortLevels(arrName) {
  let count = 0;

  let arr = arrName.map((input) => {
    count++;

    return { level: count, cards: input };
  });

  return arr;
}

export { levelStorageBonus1, levelStorageBonus2 };
