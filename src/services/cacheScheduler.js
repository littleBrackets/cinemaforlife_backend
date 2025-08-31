const cron = require("node-cron");
const referenceService = require("./referenceService");
const logger = require("../utils/logger");

function startCacheScheduler() {
  cron.schedule("0 * * * *", async () => {
    const requestId = "cache-scheduler";
    try {
      logger.info("Starting automatic cache refresh", { requestId });

      await referenceService.getMovieTypes(requestId);
      await referenceService.getRegions(requestId);
      await referenceService.getLanguages(requestId);
      await referenceService.getProfessions(requestId);
      await referenceService.getTopMovies(requestId);

      logger.info("Automatic cache refresh completed", { requestId });
    } catch (err) {
      logger.error("Error during automatic cache refresh", { requestId, error: err });
    }
  });
}

module.exports = { startCacheScheduler };
