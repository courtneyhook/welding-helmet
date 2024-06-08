const { Schema, model } = require("mongoose");

const helmetSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Helmet = model("Helmet", helmetSchema);

module.exports = Helmet;
