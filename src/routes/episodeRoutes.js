const express = require("express");
const { getEpisodesForSeries } = require("../controllers/episodeController");

const router = express.Router();

router.get("/:id", getEpisodesForSeries);

module.exports = router;
