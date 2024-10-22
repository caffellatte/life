import Backbone from "backbone";

import { Cells } from "./collections";
import { CellView } from "./views";

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
