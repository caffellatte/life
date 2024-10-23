const Cell = Backbone.Model.extend({
  defaults: {
    alive: false,
  },

  toggle() {
    this.set("alive", !this.get("alive"));
  },

  /**
   * Example of jQuery AJAX replacment
   */

  // urlRoot: "/api/my-resource",

  // sync: function (method, model, options) {
  //   options = options || {};
  //   if (method === "create") {
  //     return fetch(this.urlRoot, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(model.toJSON()),
  //     });
  //   }
  //   // Handle other methods (read, update, delete) similarly
  // },
});

export default Cell;
