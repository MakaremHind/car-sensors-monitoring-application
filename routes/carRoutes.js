/**
 * @file CarRoutes.js
 * @description Defines routes for managing car data in the Car Sensors Monitoring App.
 * Includes routes for creating, reading, updating, and deleting car data.
 * 
 * @module CarRoutes
 * 
 * @requires express
 * @requires express-validator
 * @requires ../controllers/carController
 * @requires ../config/logger
 */

const express = require("express");
const { check } = require("express-validator");
const carController = require("../controllers/carController");
const logger = require("../config/logger");

const router = express.Router();

/**
 * Middleware to validate car data for creation or update.
 * 
 * @function validateCarData
 * @description Validates the car data in the request body.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Callback to the next middleware.
 * @public
 */
function validateCarData(req, res, next) {
  logger.info("Validating car data:", req.body);
  next();
}

/**
 * Middleware to log incoming requests for debugging.
 * 
 * @function logRequest
 * @description Logs the HTTP method and URL of incoming requests.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Callback to the next middleware.
 * @public
 */
function logRequest(req, res, next) {
  logger.info(`[${new Date().toISOString()}] ${req.method} request to ${req.originalUrl}`);
  next();
}

/**
 * Handles creating a new car record.
 * 
 * @function createCarRoute
 * @description Handles the creation of a new car record.
 * @route POST /api/cars
 * @returns {Object} The created car object.
 * @public
 */
function createCarRoute(req, res, next) {
  logger.info("Handling POST /api/cars");
  carController.createCar(req, res, next);
}

/**
 * Handles retrieving all car records.
 * 
 * @function getCarsRoute
 * @description Retrieves all car records from the database.
 * @route GET /api/cars
 * @returns {Array} Array of car objects.
 * @public
 */
function getCarsRoute(req, res, next) {
  logger.info("Handling GET /api/cars");
  carController.getCars(req, res, next);
}

/**
 * Handles retrieving a car record by ID.
 * 
 * @function getCarByIdRoute
 * @description Retrieves a specific car record by its ID.
 * @route GET /api/cars/:id
 * @param {string} id - The ID of the car to retrieve.
 * @returns {Object} The car object if found.
 * @public
 */
function getCarByIdRoute(req, res, next) {
  logger.info(`Handling GET /api/cars/${req.params.id}`);
  carController.getCarById(req, res, next);
}

/**
 * Handles updating a car record by ID.
 * 
 * @function updateCarRoute
 * @description Updates a car record identified by its ID.
 * @route PUT /api/cars/:id
 * @param {string} id - The ID of the car to update.
 * @param {Object} body - The updated car data.
 * @returns {Object} The updated car object.
 * @public
 */
function updateCarRoute(req, res, next) {
  logger.info(`Handling PUT /api/cars/${req.params.id}`);
  carController.updateCar(req, res, next);
}

/**
 * Handles deleting a car record by ID.
 * 
 * @function deleteCarRoute
 * @description Deletes a car record identified by its ID.
 * @route DELETE /api/cars/:id
 * @param {string} id - The ID of the car to delete.
 * @returns {Object} A message confirming the deletion.
 * @public
 */
function deleteCarRoute(req, res, next) {
  logger.info(`Handling DELETE /api/cars/${req.params.id}`);
  carController.deleteCar(req, res, next);
}

// Define routes
router.post(
  "/",
  [
    check("model", "Model is required").not().isEmpty(),
    check("year", "Year must be a number").isNumeric(),
    check("sensors.*.type", "Sensor type is required").not().isEmpty(),
    check("sensors.*.value", "Sensor value must be a number").isNumeric(),
  ],
  validateCarData,
  createCarRoute
);

router.get("/", logRequest, getCarsRoute);
router.get("/:id", logRequest, getCarByIdRoute);
router.put(
  "/:id",
  [
    check("model", "Model is required").optional().not().isEmpty(),
    check("year", "Year must be a number").optional().isNumeric(),
    check("sensors.*.type", "Sensor type is required").optional().not().isEmpty(),
    check("sensors.*.value", "Sensor value must be a number").optional().isNumeric(),
  ],
  validateCarData,
  updateCarRoute
);
router.delete("/:id", logRequest, deleteCarRoute);

module.exports = router;
