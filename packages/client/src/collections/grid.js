import Backbone from "backbone";
import { Cell } from "../models";

const Grid = Backbone.Collection.extend({
  model: Cell,

  initialize(rows, cols) {
    console.log("Grid.initialize -> rows:", rows);
    console.log("Grid.initialize -> cols:", cols);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        this.add(new Cell());
      }
    }
  },

  getAliveNeighbors(index) {
    const neighbors = [
      index - 1,
      index + 1,
      index - this.cols,
      index + this.cols,
      index - this.cols - 1,
      index - this.cols + 1,
      index + this.cols - 1,
      index + this.cols + 1,
    ];
    console.log("Grid.getAliveNeighbors -> neighbors:", neighbors);
    return neighbors.filter((i) => this.at(i) && this.at(i).get("alive"))
      .length;
  },

  updateGrid() {
    const newStates = this.map((cell, index) => {
      const aliveNeighbors = this.getAliveNeighbors(index);
      console.log("Grid.updateGrid -> aliveNeighbors:", aliveNeighbors);
      if (cell.get("alive")) {
        return aliveNeighbors === 2 || aliveNeighbors === 3;
      } else {
        return aliveNeighbors === 3;
      }
    });

    newStates.forEach((state, index) => {
      this.at(index).set("alive", state);
    });
  },
});

export default Grid;
