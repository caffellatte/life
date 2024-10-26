import $ from "jquery";
import _ from "underscore";

import { Cell } from "./models";
import { GridView } from "./views";
import { Grid } from "./collections";

$(function () {
  var width = 20,
    height = 20;
  var cells = _.times(width * height, function () {
    return new Cell();
  });

  var grid = new Grid(cells, { width: width, height: height });
  var gridView = new GridView({ collection: grid });

  $("body").append(gridView.render().el);

  // Start the game
  setInterval(function () {
    console.log("grid.nextGeneration()");
    grid.nextGeneration();
  }, 10000);
});
