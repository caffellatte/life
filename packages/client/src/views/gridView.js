import Backbone from "backbone";

const GridView = Backbone.View.extend({
  el: "#grid",

  initialize() {
    this.listenTo(this.collection, "change", this.render);
    this.render();
  },

  render() {
    this.$el.empty();
    this.collection.each((cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.className = cell.get("alive") ? "cell alive" : "cell";
      cellElement.addEventListener("click", () => cell.toggle());
      this.$el.append(cellElement);
    });
    return this;
  },
});

export default GridView;
