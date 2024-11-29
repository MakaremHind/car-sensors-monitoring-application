const express = require("express");
const { check } = require("express-validator");
const carController = require("../controllers/carController");

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
  carController.createCar
);

router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
