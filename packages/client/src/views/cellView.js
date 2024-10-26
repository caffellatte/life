var CellView = Backbone.View.extend({
  tagName: "div",
  className: "cell",

  events: {
    click: "toggleCell",
  },

  initialize: function () {
    this.listenTo(this.model, "change:alive", this.render);
  },

  toggleCell: function () {
    this.model.toggle();
  },

  render: function () {
    this.$el.toggleClass("alive", this.model.get("alive"));
    return this;
  },
});

export default CellView;
