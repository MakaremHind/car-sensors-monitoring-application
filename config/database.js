const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGODB_URI);

    logger.info("MongoDB connected successfully."); 
  } catch (error) {
    logger.error("Database connection error:", error);

    // Throw error instead of exiting the process
    throw new Error("Database connection failed");
  }
};

// Export the connection function
module.exports = connectDB;
