require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const logger = require("./config/logger"); // Import the logger

mongoose.set("strictQuery", true);

const app = express();
app.use(express.json());

// Log database connection
logger.info("Connecting to MongoDB...");
connectDB()
  .then(() => {
    logger.info("MongoDB connected successfully.");
  })
  .catch((error) => {
    logger.error("MongoDB connection error:", error);
  });

// Log incoming requests
app.use((req, _res, next) => {
  logger.debug(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next(); // Continue middleware
});

// Route for /api/cars
app.use(
  "/api/cars",
  (req, _res, next) => {
    logger.debug("Request received on /api/cars route with data:", req.body);
    next(); // Continue middleware
  },
  require("./routes/carRoutes")
);

// Error handling middleware
app.use((err, req, res, _next) => {
  logger.error("Error encountered:", err.stack);
  res.status(500).send("Something went wrong!");
});

// Serve static files
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));

app.get("/tester", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "car_sensors_api_tester.html"));
});

// Export the app without listening
module.exports = app;
