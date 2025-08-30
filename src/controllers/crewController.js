const { fetchCrewByMovieId } = require("../services/crewService");

const getCrewByMovieId = async (req, res) => {
  try {
    const crew = await fetchCrewByMovieId(req.params.id);
    if (!crew) return res.status(404).json({ error: "Crew not found" });
    res.json(crew);
  } catch (err) {
    console.error("❌ Error fetching crew:", err);
    res.status(500).json({ error: "Failed to fetch crew" });
  }
};

module.exports = { getCrewByMovieId };
