import _ from "underscore";
import Backbone from "backbone";
import { Cell } from "../models";

var Grid = Backbone.Collection.extend({
  model: Cell,

  initialize: function (options) {
    this.width = options.width;
    this.height = options.height;
  },

  getCell: function (x, y) {
    return this.at(y * this.width + x);
  },

  getNeighbors: function (x, y) {
    var neighbors = [];
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        var nx = x + i;
        var ny = y + j;
        if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
          neighbors.push(this.getCell(nx, ny));
        }
      }
    }
    return neighbors;
  },

  nextGeneration: function () {
    var nextGen = this.map(function (cell, index) {
      var x = index % this.width;
      var y = Math.floor(index / this.width);
      var aliveNeighbors = _.filter(
        this.getNeighbors(x, y),
        function (neighbor) {
          return neighbor.get("alive");
        }
      ).length;

      var alive = cell.get("alive");
      if (alive && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        return new Cell({ alive: false });
      } else if (!alive && aliveNeighbors === 3) {
        return new Cell({ alive: true });
      }
      return new Cell({ alive: alive });
    }, this);

    this.reset(nextGen); // Update the collection with the next generation of cells
  },
});

export default Grid;
