const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

let sum = 0;

for (const line of lines) {
  let calibration_value = "";

  // get first number from line
  for (const char of line) {
    if (!isNaN(parseInt(char))) {
      calibration_value = char;
      break;
    }
  }

  // get last number from line
  for (let i = line.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(line[i]))) {
      calibration_value += line[i];
      break;
    }
  }

  sum += parseInt(calibration_value);
}

console.log("part 1 :", sum);
