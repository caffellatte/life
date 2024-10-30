const width = 10;
const height = 10;

function emptyGrid(width, height) {
  const grid = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
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

function displayGrid(grid, width, height) {
  let layout = "   ";

  for (let j = 0; j < height; j++) {
    layout += j.toString();
  }
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      layout += grid[j + i * width].alive ? "X" : " ";
    }
    layout += "\n" + i + " |";
  }

  return layout;
}

function getNeighbours(cell, width, height) {
  const { x, y } = cell;
  /**
   * 1
   */
  const neighbourOne = grid.find((cell) => {
    let neighbourOneX = x - 1;
    let neighbourOneY = y - 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 2
   */
  const neighbourTwo = grid.find((cell) => {
    let neighbourOneX = x;
    let neighbourOneY = y - 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 3
   */
  const neighbourThree = grid.find((cell) => {
    let neighbourOneX = x + 1;
    let neighbourOneY = y - 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 4
   */
  const neighbourFour = grid.find((cell) => {
    let neighbourOneX = x - 1;
    let neighbourOneY = y;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 5
   */
  const neighbourFive = grid.find((cell) => {
    let neighbourOneX = x + 1;
    let neighbourOneY = y;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 6
   */
  const neighbourSix = grid.find((cell) => {
    let neighbourOneX = x - 1;
    let neighbourOneY = y + 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 7
   */
  const neighbourSeven = grid.find((cell) => {
    let neighbourOneX = x;
    let neighbourOneY = y + 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
  })?.alive;
  /**
   * 8
   */
  const neighbourEight = grid.find((cell) => {
    let neighbourOneX = x + 1;
    let neighbourOneY = y + 1;

    if (neighbourOneX < 0) {
      neighbourOneX = width - 1;
    }

    if (neighbourOneY < 0) {
      neighbourOneY = height - 1;
    }

    if (neighbourOneX > width + 1) {
      neighbourOneX = 0;
    }

    if (neighbourOneY > height + 1) {
      neighbourOneY = 0;
    }

    return cell.x === neighbourOneX && cell.y === neighbourOneY;
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

let grid = emptyGrid(width, height);

setInitial(grid);

function tick(width, height) {
  console.log(displayGrid(grid, width, height));
  const newGrid = emptyGrid(width, height);
  for (const cell of grid) {
    const { x, y } = cell;
    // console.log("x=", x);
    // console.log("y=", y);
    const indexOfCell = grid.findIndex((cell) => cell.x === x && cell.y === y);
    // console.log("indexOfCell=", indexOfCell);
    const neighbours = getNeighbours(cell, width, height);
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
  grid = tick(width, height);
}, 2000);
