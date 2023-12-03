const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const lines = data.split("\n");

let sum = 0;

const array = lines.map((l) => [...l]);

for (let y = 0; y < array.length; y++) {
  let numberToAdd = "";
  let valid = false;
  for (let x = 0; x < array[y].length; x++) {
    const currentElement = array[y][x];

    // Vérifie si l'élément est un nombre
    if (!isNaN(currentElement)) {
      numberToAdd += currentElement;

      if (hasAdjacentSymbol(x, y, array)) {
        valid = true;
      }

      // Si dernier nombre (pas de nombre a droite)
      if (isNaN(array[y][x + 1])) {
        if (valid) {
          sum += Number(numberToAdd);
          valid = false;
          numberToAdd = "";
        } else {
          numberToAdd = "";
          valid = false;
        }
      }
    }
  }
}

function hasAdjacentSymbol(x, y, matrix) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ]; // haut, bas, gauche, droite, diagonale haut gauche, diagonale haut droite, diagonale bas gauche, diagonale bas droite

  for (let [dx, dy] of directions) {
    const newRow = y + dx;
    const newCol = x + dy;

    if (
      newRow >= 0 &&
      newRow < matrix.length &&
      newCol >= 0 &&
      newCol < matrix[0].length &&
      matrix[newRow][newCol] !== "." &&
      isNaN(matrix[newRow][newCol])
    ) {
      return true;
    }
  }

  return false;
}

console.log(sum);

// TODO: se renseigner sur les Set
