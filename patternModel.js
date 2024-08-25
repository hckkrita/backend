const mongoose = require("mongoose");
const { Schema } = mongoose;

const instructionSchema = new Schema({
  stepNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const patternSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  materials: {
    type: String,
    required: true,
  },
  instructions: [instructionSchema],
});

const Pattern = mongoose.model('Pattern', patternSchema);
module.exports = Pattern;
