const CellView = Backbone.View.extend({
  tagName: "li",

  render() {
    this.$el.text(this.model.get("name"));
    return this;
  },
});

export default CellView;
