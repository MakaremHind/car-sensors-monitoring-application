// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const logger = require("./config/logger");  // Import the logger

mongoose.set("strictQuery", true);

const app = express();

app.use(express.json());

// Log when connecting to the database
logger.info("Connecting to MongoDB...");
connectDB()
  .then(() => {
    logger.info("MongoDB connected successfully.");
  })
  .catch(error => {
    logger.error("MongoDB connection error:", error);
  });

// Log incoming requests
app.use((req, res, next) => {
  logger.debug(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

// Route for /api/cars with a log statement
app.use(
  "/api/cars",
  (req, res, next) => {
    logger.debug("Request received on /api/cars route with data:", req.body);
    next();
  },
  require("./routes/carRoutes")
);

// Error handling with logging
app.use((err, req, res, next) => {
  logger.error("Error encountered:", err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});

app.use(express.static("./public"));
const path = require("path");

// Serve the car_sensors_api_tester.html file
app.use(express.static(path.join(__dirname, "./public")));

app.get("/tester", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "car_sensors_api_tester.html"));
});
