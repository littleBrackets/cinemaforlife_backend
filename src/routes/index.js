const express = require("express");
const movieRoutes = require("./movieRoutes");
const personRoutes = require("./personRoutes");
const ratingRoutes = require("./ratingRoutes");
const akaRoutes = require("./akaRoutes");
const crewRoutes = require("./crewRoutes");
const principalRoutes = require("./principalRoutes");
const episodeRoutes = require("./episodeRoutes");
const referenceRoutes = require("./routes/referenceRoutes");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/people", personRoutes);
router.use("/ratings", ratingRoutes);
router.use("/akas", akaRoutes);
router.use("/crew", crewRoutes);
router.use("/principals", principalRoutes);
router.use("/episodes", episodeRoutes);
router.use("/api/reference", referenceRoutes);

module.exports = router;
