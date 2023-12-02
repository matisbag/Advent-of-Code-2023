const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

const availableTotalCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const sumGameIds = lines.reduce((sum, line) => {
  const gameId = parseInt(line.match(/\d+/)[0]);

  const newLine = line
    .slice(line.indexOf(":") + 2)
    .match(/(\d+) (red|green|blue)/g);

  const isValidGame = newLine.every((cube) => {
    const [count, color] = cube.split(" ");
    return availableTotalCubes[color] >= parseInt(count);
  });

  return isValidGame ? sum + gameId : sum;
}, 0);

console.log("part 1:", sumGameIds);
