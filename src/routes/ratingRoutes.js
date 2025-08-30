const express = require("express");
const { getMovieRating } = require("../controllers/ratingController");

const router = express.Router();

router.get("/:id", getMovieRating);

module.exports = router;
