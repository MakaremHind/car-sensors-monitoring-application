// logger.js
const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",  // Default log level is debug, can be changed based on the environment
  format: winston.format.combine(
    winston.format.colorize(),  // Add colors for logs in the console
    winston.format.timestamp(), // Add timestamp for each log
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;  // Custom log format
    })
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }), // Log to console
  ],
});

module.exports = logger;
