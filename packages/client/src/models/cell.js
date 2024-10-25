const Cell = Backbone.Model.extend({
  defaults: {
    alive: false,
    x: null,
    y: null,
  },

  initialize(position) {
    console.log("Cell.initialize x=", position.x, "y=", position.y);

    this.set("x", position.x);
    this.set("y", position.y);
  },

  toggle() {
    this.set("alive", !this.get("alive"));
  },
});

export default Cell;
