const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }), // include stack traces
    format.json() // structured JSON logs
  ),
  transports: [
    new transports.Console() // logs go to stdout (Docker/K8s friendly)
  ]
});

module.exports = logger;
