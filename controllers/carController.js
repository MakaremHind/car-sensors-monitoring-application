const Car = require("../models/Car");
const { validationResult } = require("express-validator");
const logger = require("../config/logger");

/**
 * Create a new car.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.createCar = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { model, year, sensors } = req.body;

  try {
    const car = new Car({ model, year, sensors });
    await car.save();
    logger.info(`Car created: ${car.model} (${car.year})`);
    res.status(201).json(car);
  } catch (error) {
    logger.error("Error creating car:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get all cars.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    logger.info("Fetched all cars");
    res.json(cars);
  } catch (error) {
    logger.error("Error fetching cars:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get a car by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      logger.warn(`Car with ID ${req.params.id} not found`);
      return res.status(404).json({ message: "Car not found" });
    }
    logger.info(`Fetched car with ID ${req.params.id}`);
    res.json(car);
  } catch (error) {
    logger.error("Error fetching car by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Update a car by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!car) {
      logger.warn(`Car with ID ${req.params.id} not found`);
      return res.status(404).json({ message: "Car not found" });
    }
    logger.info(`Updated car with ID ${req.params.id}`);
    res.json(car);
  } catch (error) {
    logger.error("Error updating car:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Delete a car by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      logger.warn(`Car with ID ${req.params.id} not found`);
      return res.status(404).json({ message: "Car not found" });
    }
    logger.info(`Deleted car with ID ${req.params.id}`);
    res.json({ message: "Car deleted" });
  } catch (error) {
    logger.error("Error deleting car:", error);
    res.status(500).json({ message: "Server error" });
  }
};
