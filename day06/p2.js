const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

let sum = 0;

const time = Number(lines[0].match(/\d+/g).join(""));
const distance = Number(lines[1].match(/\d+/g).join(""));

for (let l = 0; l < time; l++) {
  const newDistance = (time - l) * l;

  if (newDistance > distance) {
    sum += 1;
  }
}

console.log(sum);
