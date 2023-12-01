const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

const numbers = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
];

let sum = 0;

for (const line of lines) {
  indexFirst = line.length;
  first = "";
  indexLast = -1;
  last = "";

  for (const number of numbers) {
    indexF = line.indexOf(number[0]);
    if (indexF !== -1 && indexF < indexFirst) {
      indexFirst = indexF;
      first = number[1];
    }
    indexF = line.indexOf(number[1]);
    if (indexF !== -1 && indexF < indexFirst) {
      indexFirst = indexF;
      first = number[1];
    }

    indexL = line.lastIndexOf(number[0]);
    if (indexL !== -1 && indexL > indexLast) {
      indexLast = indexL;
      last = number[1];
    }
    indexL = line.lastIndexOf(number[1]);
    if (indexL !== -1 && indexL > indexLast) {
      indexLast = indexL;
      last = number[1];
    }
  }

  sum += parseInt(first + last);
}

console.log("part 2 :", sum);
