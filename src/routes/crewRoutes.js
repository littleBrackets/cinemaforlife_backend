const express = require("express");
const { getCrewByMovieId } = require("../controllers/crewController");

const router = express.Router();

router.get("/:id", getCrewByMovieId);

module.exports = router;
