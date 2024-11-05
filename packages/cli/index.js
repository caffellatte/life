import chalk from "chalk";
import readline from "readline";

const TIMER = 2000;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log(chalk.bgGreenBright('Press "p" to Play'));
console.log(chalk.bgRedBright('Press "s" to Stop'));

const width = 10;
const height = 10;

const stats = {
  population: 0,
};

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
  grid[33].alive = true;
  grid[34].alive = true;
  grid[35].alive = true;

  /**
   * Glider
   */
  // grid[1].alive = true;
  // grid[12].alive = true;
  // grid[20].alive = true;
  // grid[21].alive = true;
  // grid[22].alive = true;
}

function displayGrid(grid, width, height) {
  const area = defineArea(grid);
  console.log("area", area);

  let layout = "   ";

  for (let k = 0; k < width; k++) {
    layout += k.toString();
  }

  for (let i = 0; i < height; i++) {
    layout += "\n" + i + " |";
    for (let j = 0; j < width; j++) {
      const index = j + i * height;
      if (grid[index].alive) {
        console.log(grid[index], index);
        layout += "#";
      } else {
        const areaCell = area.find((cell) => cell.x === j && cell.y === i);
        if (areaCell) {
          layout += "*";
        } else {
          layout += " ";
        }
      }
    }
  }

  return layout;
}

function getNeighboursCount(grid, cell, width, height) {
  console.log("cell", cell);

  const neighbours = getNeighbours(grid, cell, width, height);

  console.log("neighbours:", neighbours);

  console.log(
    "neighbours map:",
    neighbours.map((neighbour) => Boolean(neighbour.alive))
  );

  return neighbours
    .map((neighbour) => Boolean(neighbour.alive))
    .reduce((previousValue, currentValue) => {
      return previousValue + Number(currentValue);
    }, 0);
}

function getNeighbours(grid, cell, width, height) {
  const { x, y } = cell;

  /**
   * 1
   */
  const neighbourOne = grid.find((cell) => {
    let positionX = x - 1;
    let positionY = y - 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 2
   */
  const neighbourTwo = grid.find((cell) => {
    let positionX = x;
    let positionY = y - 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 3
   */
  const neighbourThree = grid.find((cell) => {
    let positionX = x + 1;
    let positionY = y - 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 4
   */
  const neighbourFour = grid.find((cell) => {
    let positionX = x - 1;
    let positionY = y;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 5
   */
  const neighbourFive = grid.find((cell) => {
    let positionX = x + 1;
    let positionY = y;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 6
   */
  const neighbourSix = grid.find((cell) => {
    let positionX = x - 1;
    let positionY = y + 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 7
   */
  const neighbourSeven = grid.find((cell) => {
    let positionX = x;
    let positionY = y + 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });
  /**
   * 8
   */
  const neighbourEight = grid.find((cell) => {
    let positionX = x + 1;
    let positionY = y + 1;

    if (positionX < 0) {
      positionX = width - 1;
    }

    if (positionY < 0) {
      positionY = height - 1;
    }

    if (positionX > width - 1) {
      positionX = 0;
    }

    if (positionY > height - 1) {
      positionY = 0;
    }

    return cell.x === positionX && cell.y === positionY;
  });

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

  return neighbours;
}

function defineArea(grid) {
  const alive = grid.filter((cell) => cell.alive);
  console.log("alive", alive);

  let temp = [];

  for (const cell of alive) {
    const neighbours = getNeighbours(grid, cell, width, height);
    temp = temp.concat(temp, neighbours);
  }

  const area = temp
    .filter((item) => item.alive === false)
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.x === item.x && t.y === item.y)
    );

  return area;
}

function tick(grid, width, height) {
  stats.population = 0;

  const newGrid = emptyGrid(width, height);

  for (let i = 0; i < grid.length; i++) {
    const neighbours = getNeighboursCount(grid, grid[i], width, height);
    if (grid[i].alive === false && neighbours === 3) {
      newGrid[i].alive = true;
      stats.population++;
    } else {
      if (grid[i].alive === true && (neighbours === 3 || neighbours === 2)) {
        newGrid[i].alive = true;
        stats.population++;
      } else {
        newGrid[i].alive = false;
      }
    }
  }

  return newGrid;
}
let grid = emptyGrid(width, height);

setInitial(grid);

const gameLoop = () => {
  console.clear();
  grid = tick(grid, width, height);

  console.log(chalk.blue(displayGrid(grid, width, height)));
  console.log(chalk.green("POPULATION = ", stats.population));
};

let intervalId;

const startGame = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      gameLoop();
    }, TIMER);
    console.log("Game started.");
  } else {
    console.log("Game is already running.");
  }
};

const stopGame = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Game stopped.");
  } else {
    console.log("No game is currently running.");
  }
};

process.stdin.on("keypress", (str, key) => {
  if (key.name === "p") {
    console.log('You pressed "p"!');
    startGame();
  } else if (key.name === "s") {
    console.log('You pressed "s". Stopping...');
    stopGame();
  } else if (key.ctrl && key.name === "c") {
    console.log("Exiting...");
    process.exit();
  } else {
    console.log(`You pressed "${str}"`);
  }
});
