import Backbone from "backbone";

var Cell = Backbone.Model.extend({
  defaults: {
    alive: false,
  },

  toggle: function () {
    this.set("alive", !this.get("alive"));
  },
});

export default Cell;
