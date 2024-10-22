const CellView = Backbone.View.extend({
  tagName: "li",

  render() {
    const name = this.model.get("name");
    const textNode = document.createTextNode(name);
    this.el.appendChild(textNode);
    return this;
  },
});

export default CellView;
