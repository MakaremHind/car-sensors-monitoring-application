const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
  try {
    // Log environment and Mongo URI
    logger.info(`Connecting to MongoDB at ${process.env.MONGODB_URI}`);
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connected successfully.");
  } catch (error) {
    logger.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
};

module.exports = connectDB;
