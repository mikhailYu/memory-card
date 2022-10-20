let pokemonInput = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "ivysaur",
  "venusaur",
  "charmeleon",
  "charizard",
  "wartortle",
  "blastoise",
  "chikorita",
  "bayleef",
  "meganium",
  "cyndaquil",
  "quilava",
  "typhlosion",
  "totodile",
  "croconaw",
  "feraligatr",
  "treecko",
  "grovyle",
  "sceptile",
  "torchic",
  "combusken",
  "blaziken",
  "mudkip",
  "marshtomp",
  "swampert",
  "turtwig",
  "grotle",
  "torterra",
  "chimchar",
  "monferno",
  "infernape",
  "piplup",
  "prinplup",
  "empoleon",
];

let pokemonStorage = createStorageArr();

function createStorageArr() {
  let count = -1;
  let arr = pokemonInput.map((pkmnInput) => {
    {
      count++;
      return { ID: count, pkmnName: pkmnInput };
    }
  });

  return arr;
}

export default pokemonStorage;
