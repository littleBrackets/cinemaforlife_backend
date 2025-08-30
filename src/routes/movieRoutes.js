const express = require("express");
const { getAllMovies, getMovieById } = require("../controllers/movieController");
const { getMovieRating } = require("../controllers/ratingController");
const { getEpisodesForSeries } = require("../controllers/episodeController");
const { getAkasForMovie } = require("../controllers/akaController");
const { getCrewByMovieId } = require("../controllers/crewController");
const { getPrincipalsByMovieId } = require("../controllers/principalController");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.get("/:id/rating", getMovieRating);
router.get("/:id/episodes", getEpisodesForSeries);
router.get("/:id/akas", getAkasForMovie);
router.get("/:id/crew", getCrewByMovieId);
router.get("/:id/principals", getPrincipalsByMovieId);

module.exports = router;
