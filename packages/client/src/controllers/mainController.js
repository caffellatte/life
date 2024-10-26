import Backbone from "backbone";
import GridModel from "../models/grid";
import GridView from "../views/gridView";

const MainController = Backbone.Controller.extend({
  initialize: function () {
    this.gridModel = new GridModel({
      attemptedSize: { width: 100, height: 100 },
    });
    this.gridView = new GridView({ collection: this.gridModel });

    this.gridView.on("change", () => {
      this.gridView.render();
    });

    this.startGame();
  },

  startGame: function () {
    setInterval(() => {
      this.gridView.tick();
    }, 100);
  },
});

export default MainController;
