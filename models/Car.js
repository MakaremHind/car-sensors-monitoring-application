const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: Number, required: true },
});

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  sensors: [sensorSchema],
});

module.exports = mongoose.model("Car", carSchema);
