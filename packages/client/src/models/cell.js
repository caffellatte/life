const Cell = Backbone.Model.extend({
  defaults: {
    alive: false,
  },

  toggle() {
    this.set("alive", !this.get("alive"));
  },
});

export default Cell;
