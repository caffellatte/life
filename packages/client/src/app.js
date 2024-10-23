import Backbone from "backbone";

import { Cells } from "./collections";
import { CellView } from "./views";

// import Grid from './collections/grid';
// import GridView from './views/gridView';

// const rows = 20;
// const cols = 20;
// const grid = new Grid(rows * cols);
// const gridView = new GridView({ collection: grid });

// function updateGame() {
//     grid.updateGrid();
// }

// setInterval(updateGame, 1000); // Update the game every second

// document.addEventListener('DOMContentLoaded', () => {
//     document.body.appendChild(gridView.el);
// });

// Initialize the collection and view
const cells = new Cells([{ name: "Item 1" }, { name: "Item 2" }]);

const App = Backbone.View.extend({
  el: "#app",

  initialize() {
    this.render();
  },

  render() {
    const ul = document.createElement("ul");
    cells.each((cell) => {
      const cellView = new CellView({ model: cell });
      const cellComponent = cellView.render();
      ul.appendChild(cellComponent.el);
    });
    this.el.appendChild(ul);
  },
});

new App();
