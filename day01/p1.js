const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

const sum = lines
  .map((line) => {
    const firstNumber = [...line].find((char) => !isNaN(parseInt(char)));
    const lastNumber = [...line]
      .reverse()
      .find((char) => !isNaN(parseInt(char)));
    return parseInt(firstNumber + lastNumber);
  })
  .reduce((a, b) => a + b, 0);

console.log("part 1 :", sum);
