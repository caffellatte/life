import Backbone from "backbone";
import CellModel from "./cell";

const GridModel = Backbone.Collection.extend({
  model: CellModel,

  initialize: function (attemptedSize) {
    this.attemptedSize = attemptedSize;
    this.reset();
  },

  reset: function () {
    const width = this.attemptedSize.width;
    const height = this.attemptedSize.height;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.add({ x, y });
      }
    }

    this.trigger("change");
  },

  shouldBeAlive: function (cell) {
    const neighbors = this.countNeighbors(cell);
    return cell.get("alive") ? cell.shouldBeAlive(neighbors) : false;
  },

  countNeighbors: function (cell) {
    const grid = this;
    const width = grid.attemptedSize.width;
    const height = grid.attemptedSize.height;

    let count = 0;
    for (
      let i = Math.max(0, cell.get("x") - 1);
      i <= Math.min(width - 1, cell.get("x") + 1);
      i++
    ) {
      for (
        let j = Math.max(0, cell.get("y") - 1);
        j <= Math.min(height - 1, cell.get("y") + 1);
        j++
      ) {
        if (
          (i !== cell.get("x") || j !== cell.get("y")) &&
          grid.get(i, j).get("alive")
        ) {
          count++;
        }
      }
    }
    return count;
  },
});

export default GridModel;
