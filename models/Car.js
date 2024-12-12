const mongoose = require("mongoose");

/**
 * Schema for car sensors.
 * @typedef {Object} Sensor
 * @property {string} type - The type of the sensor.
 * @property {number} value - The value of the sensor.
 */
const sensorSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: Number, required: true },
});

/**
 * Schema for car.
 * @typedef {Object} Car
 * @property {string} model - The car model.
 * @property {number} year - The manufacturing year.
 * @property {Sensor[]} sensors - The sensors of the car.
 */
const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  sensors: [sensorSchema],
});

module.exports = mongoose.model("Car", carSchema);
