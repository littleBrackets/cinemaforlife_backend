const logger = require("../utils/logger");

function errorHandler(err, req, res, next) {
  logger.error("Unhandled error", {
    requestId: req.requestId,
    message: err.message,
    stack: err.stack
  });

  res.status(500).json({ 
    requestId: req.requestId,
    message: "Internal Server Error" 
  });
}

module.exports = errorHandler;
