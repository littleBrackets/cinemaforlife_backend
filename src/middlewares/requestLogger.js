const morgan = require("morgan");
const logger = require("../utils/logger");

// stream logs from morgan → winston
const stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

const requestLogger = morgan(
  ":method :url :status :response-time ms - :res[content-length] :remote-addr :user-agent",
  { stream }
);

module.exports = requestLogger;
