const express = require("express");
const { getAllPeople, getPersonById } = require("../controllers/personController");

const router = express.Router();

router.get("/", getAllPeople);
router.get("/:id", getPersonById);

module.exports = router;
