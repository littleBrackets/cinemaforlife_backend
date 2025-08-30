const express = require("express");
const { getPrincipalsByMovieId } = require("../controllers/principalController");

const router = express.Router();

router.get("/:id", getPrincipalsByMovieId);

module.exports = router;
