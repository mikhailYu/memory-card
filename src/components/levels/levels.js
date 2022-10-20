let levelInput = [
  ["charmander", "bulbasaur", "empoleon", "torterra"],
  ["charmander", "bulbasaur", "empoleon"],
  ["charmander", "bulbasaur"],
  ["charmander", "bulbasaur"],
  ["charmander", "bulbasaur"],
  ["charmander", "charmander"],
];

let levelStorage = sortLevels();
console.log(levelStorage);

function sortLevels() {
  let count = 0;

  let arr = levelInput.map((input) => {
    count++;

    return { level: count, cards: input };
  });

  return arr;
}

export default levelStorage;
