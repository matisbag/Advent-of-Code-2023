const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

const sumPower = lines.reduce((sum, line) => {
  const cubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const newLine = line
    .slice(line.indexOf(":") + 2)
    .match(/(\d+) (red|green|blue)/g);

  newLine.forEach((cube) => {
    const [count, color] = cube.split(" ");
    if (cubes[color] < parseInt(count)) {
      cubes[color] = parseInt(count);
    }
  });

  return sum + cubes.red * cubes.green * cubes.blue;
}, 0);

console.log("part 2:", sumPower);
