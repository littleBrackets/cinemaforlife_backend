const { fetchAkasForMovie } = require("../services/akaService");

const getAkasForMovie = async (req, res) => {
  try {
    const akas = await fetchAkasForMovie(req.params.id);
    if (!akas || akas.length === 0) {
      return res.status(404).json({ error: "No alternate titles found" });
    }
    res.json(akas);
  } catch (err) {
    console.error("❌ Error fetching akas:", err);
    res.status(500).json({ error: "Failed to fetch akas" });
  }
};

module.exports = { getAkasForMovie };
