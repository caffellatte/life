const x = 10;
const y = 10;

function emptyGrid() {
  const grid = [];

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      grid.push({ x: i, y: j, alive: false });
    }
  }

  return grid;
}

function setInitial(grid) {
  /**
   * First test
   */
  // grid[33].alive = true;
  // grid[34].alive = true;
  // grid[35].alive = true;

  /**
   * Glider
   */
  grid[13].alive = true;
  grid[21].alive = true;
  grid[23].alive = true;
  grid[32].alive = true;
  grid[33].alive = true;
}

function displayGrid(grid) {
  let layout = "   ";

  for (let j = 0; j < y; j++) {
    layout += j.toString();
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      layout += grid[j + i * x].alive ? "X" : " ";
    }
    layout += "\n" + i + " |";
  }

  return layout;
}

function getNeighbours(cell) {
  const { x, y } = cell;
  /**
   * 1
   */
  const neighbourOne = grid.find((cell) => {
    return cell.x === x - 1 && cell.y === y - 1;
  })?.alive;
  /**
   * 2
   */
  const neighbourTwo = grid.find((cell) => {
    return cell.x === x && cell.y === y - 1;
  })?.alive;
  /**
   * 3
   */
  const neighbourThree = grid.find((cell) => {
    return cell.x === x + 1 && cell.y === y - 1;
  })?.alive;
  /**
   * 4
   */
  const neighbourFour = grid.find((cell) => {
    return cell.x === x - 1 && cell.y === y;
  })?.alive;
  /**
   * 5
   */
  const neighbourFive = grid.find((cell) => {
    return cell.x === x + 1 && cell.y === y;
  })?.alive;
  /**
   * 6
   */
  const neighbourSix = grid.find((cell) => {
    return cell.x === x - 1 && cell.y === y + 1;
  })?.alive;
  /**
   * 7
   */
  const neighbourSeven = grid.find((cell) => {
    return cell.x === x && cell.y === y + 1;
  })?.alive;
  /**
   * 8
   */
  const neighbourEight = grid.find((cell) => {
    return cell.x === x + 1 && cell.y === y + 1;
  })?.alive;

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

let grid = emptyGrid();

setInitial(grid);

function tick() {
  console.log(displayGrid(grid));
  const newGrid = emptyGrid();
  for (const cell of grid) {
    const { x, y } = cell;
    // console.log("x=", x);
    // console.log("y=", y);
    const indexOfCell = grid.findIndex((cell) => cell.x === x && cell.y === y);
    // console.log("indexOfCell=", indexOfCell);
    const neighbours = getNeighbours(cell);
    // console.log("neighbours=", neighbours);
    if (cell.alive === false && neighbours === 3) {
      newGrid[indexOfCell].alive = true;
      continue;
    }
    if (cell.alive === true && (neighbours === 3 || neighbours === 2)) {
      newGrid[indexOfCell].alive = true;
    } else {
      newGrid[indexOfCell].alive = false;
    }
  }
  return newGrid;
}

setInterval(() => {
  console.clear();
  grid = tick();
}, 2000);
