import Backbone from "backbone";
import $ from "jquery";

// Define a model
const Item = Backbone.Model.extend({
  defaults: {
    name: "Item Name",
  },
});

// Define a collection
const ItemCollection = Backbone.Collection.extend({
  model: Item,
});

// Define a view
const ItemView = Backbone.View.extend({
  tagName: "li",

  render() {
    this.$el.text(this.model.get("name"));
    return this;
  },
});

// Initialize the collection and view
const items = new ItemCollection([{ name: "Item 1" }, { name: "Item 2" }]);

const App = Backbone.View.extend({
  el: "#app",

  initialize() {
    this.render();
  },

  render() {
    const ul = $("<ul></ul>");
    items.each((item) => {
      const itemView = new ItemView({ model: item });
      ul.append(itemView.render().el);
    });
    this.$el.append(ul);
  },
});

new App();
