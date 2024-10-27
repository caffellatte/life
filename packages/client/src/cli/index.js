const x = 10;
const y = 10;

const grid = [];

for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    grid.push({ x: i, y: j, alive: false });
  }
}

function setInitial(grid) {
  grid[10].alive = true;
  grid[11].alive = true;
  grid[12].alive = true;
}

function displayGrid(grid) {
  let layout = "";

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      layout += grid[j + i * x].alive ? "X" : " ";
    }
    layout += "\n";
  }

  return layout;
}

function getNeighbours(cell) {
  const { x, y } = cell;
  /**
   * 1
   */
  const neighbourOne = grid.find(
    (cell) => cell.x === x - 1 && cell.y === y - 1
  )?.alive;
  /**
   * 2
   */
  const neighbourTwo = grid.find(
    (cell) => cell.x === x && cell.y === y - 1
  )?.alive;
  /**
   * 3
   */
  const neighbourThree = grid.find(
    (cell) => cell.x === x + 1 && cell.y === y - 1
  )?.alive;
  /**
   * 4
   */
  const neighbourFour = grid.find(
    (cell) => cell.x === x - 1 && cell.y === y
  )?.alive;
  /**
   * 5
   */
  const neighbourFive = grid.find(
    (cell) => cell.x === x + 1 && cell.y === y
  )?.alive;
  /**
   * 6
   */
  const neighbourSix = grid.find(
    (cell) => cell.x === x - 1 && cell.y === y + 1
  )?.alive;
  /**
   * 7
   */
  const neighbourSeven = grid.find(
    (cell) => cell.x === x && cell.y === y + 1
  )?.alive;
  /**
   * 8
   */
  const neighbourEight = grid.find(
    (cell) => cell.x === x + 1 && cell.y === y + 1
  )?.alive;

  const neighbours = [
    neighbourOne,
    neighbourTwo,
    neighbourThree,
    neighbourFour,
    neighbourFive,
    neighbourSix,
    neighbourSeven,
    neighbourEight,
  ];

  return neighbours
    .map((neighbour) => Boolean(neighbour))
    .reduce((previousValue, currentValue) => {
      return previousValue + Number(currentValue);
    }, 0);
}

setInitial(grid);

console.log(displayGrid(grid));

grid.forEach((cell) => {
  const neighbours = getNeighbours(cell);
  if (cell.alive === false && neighbours === 3) {
    cell.alive = true;
  }
});
