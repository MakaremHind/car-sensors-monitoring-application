// CarRoutes.js
const express = require("express");
const { check } = require("express-validator");
const carController = require("../controllers/carController");
const logger = require("../logger");  // Import the logger

const router = express.Router();

// Define routes
router.post(
  "/",
  [
    check("model", "Model is required").not().isEmpty(),
    check("year", "Year must be a number").isNumeric(),
    check("sensors.*.type", "Sensor type is required").not().isEmpty(),
    check("sensors.*.value", "Sensor value must be a number").isNumeric(),
  ],
  (req, res, next) => {
    logger.info("Received POST request for /api/cars with data:", req.body);
    next();
  },
  carController.createCar
);

router.get("/", (req, res, next) => {
  logger.info("Received GET request for /api/cars");
  next();
}, carController.getCars);

router.get("/:id", (req, res, next) => {
  logger.info(`Received GET request for /api/cars/${req.params.id}`);
  next();
}, carController.getCarById);

router.put("/:id", (req, res, next) => {
  logger.info(`Received PUT request for /api/cars/${req.params.id} with data:`, req.body);
  next();
}, carController.updateCar);

router.delete("/:id", (req, res, next) => {
  logger.info(`Received DELETE request for /api/cars/${req.params.id}`);
  next();
}, carController.deleteCar);

module.exports = router;
