const mongoose = require("mongoose");
const { Schema } = mongoose;

const yarnSchema = new Schema({
  name: {
    type: String,
    required: [true, "Yarn name is required"],
    unique: true,
  },
  type: {
    type: String,
    required: [true, "Yarn type is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Yarn description is required"],
  },
  suitable: {
    type: String,
    required: [true, "Yarn suitability is required"],
  },
});

const Yarn = mongoose.model("Yarn", yarnSchema);

module.exports = Yarn;
