const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n").map((l) =>
  l
    .match(/Card +\d+: (.*)/)[1]
    .split(" | ")
    .map((p) => p.trim().split(/\s+/))
);

let sum = 0;

for (const [winningNumbers, numbers] of lines) {
  const validNumbers = winningNumbers.filter((n) => numbers.includes(n));

  let points = 0;
  for (let _ of validNumbers) {
    points = !points ? points + 1 : points * 2;
  }
  sum += points;
}

console.log(sum);
