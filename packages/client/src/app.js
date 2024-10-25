import { Grid } from "./collections";
import { GridView } from "./views";

const rows = 10;
const cols = 10;
const grid = new Grid(rows, cols);
console.log("App.grid:", grid);
const gridView = new GridView({ collection: grid });

function updateGame() {
  grid.updateGrid();
}

setInterval(updateGame, 1000);

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(gridView.el);
});
