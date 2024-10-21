import Cell from "../models/cell";

const Cells = Backbone.Collection.extend({
  model: Cell,
});

export default Cells;
