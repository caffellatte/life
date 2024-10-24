import { Grid } from "./collections";
import { GridView } from "./views";

const rows = 20;
const cols = 20;
const grid = new Grid(rows, cols);
const gridView = new GridView({ collection: grid });

function updateGame() {
  grid.updateGrid();
}

setInterval(updateGame, 1000);

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(gridView.el);
});
