import Backbone from "backbone";
import CellView from "./cellView";

var GridView = Backbone.View.extend({
  className: "grid",

  initialize: function () {
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    this.$el.empty();
    this.collection.each(function (cell) {
      var cellView = new CellView({ model: cell });
      this.$el.append(cellView.render().el);
    }, this);
    return this;
  },
});

export default GridView;
