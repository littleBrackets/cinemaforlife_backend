const express = require("express");
const { getAkasForMovie } = require("../controllers/akaController");

const router = express.Router();

router.get("/:id", getAkasForMovie);

module.exports = router;
