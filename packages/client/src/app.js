import Backbone from "backbone";
import $ from "jquery";

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
    const ul = $("<ul></ul>");
    cells.each((cell) => {
      const cellView = new CellView({ model: cell });
      ul.append(cellView.render().el);
    });
    this.$el.append(ul);
  },
});

new App();
