const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

sum = 1;

const races = lines.map((line) => line.match(/(\d+)/g).map(Number));

for (let i = 0; i < races[0].length; i++) {
  const time = races[0][i];
  const distance = races[1][i];

  let nbSolutions = 0;
  for (let l = 0; l < time; l++) {
    const newDistance = (time - l) * l;

    if (newDistance > distance) {
      nbSolutions += 1;
    }
  }
  sum *= nbSolutions;
}

console.log(sum);
