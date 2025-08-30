const { fetchPrincipalsByMovieId } = require("../services/principalService");

const getPrincipalsByMovieId = async (req, res) => {
  try {
    const principals = await fetchPrincipalsByMovieId(req.params.id);
    if (!principals || principals.length === 0) {
      return res.status(404).json({ error: "No principals found for this movie" });
    }
    res.json(principals);
  } catch (err) {
    console.error("❌ Error fetching principals:", err);
    res.status(500).json({ error: "Failed to fetch principals" });
  }
};

module.exports = { getPrincipalsByMovieId };
