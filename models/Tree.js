const mongoose = require("mongoose");

const treeSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

const Tree = mongoose.model("Tree", treeSchema);

module.exports = Tree;
