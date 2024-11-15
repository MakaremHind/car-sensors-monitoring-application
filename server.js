require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");

mongoose.set("strictQuery", true);

const app = express();

const unusedVariable = 42;

app.use(express.json());

// Log when connecting to the database
console.log("Connecting to MongoDB...");
connectDB().then(() => {
  console.log("MongoDB connected successfully.");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.use((req, res, next) => {
  // Log each incoming request with the method and URL
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

// Route for /api/cars with a log statement
app.use("/api/cars", (req, res, next) => {
  console.log("Request received on /api/cars route with data:", req.body);
  next();
}, require("./routes/carRoutes"));

// Error handling with logging
app.use((err, req, res, next) => {
  console.error("Error encountered:", err.stack);
  res.status(500).send("Something went wrong!");
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.static('./public'));

const path = require('path');

// Serve the car_sensors_api_tester.html file
app.use(express.static(path.join(__dirname, './public'))); // Update with the correct path if needed

app.get('/tester', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'car_sensors_api_tester.html')); // Update with the correct path if needed
});
