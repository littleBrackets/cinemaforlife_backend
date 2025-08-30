const { fetchMovieRating } = require("../services/ratingService");

const getMovieRating = async (req, res) => {
  try {
    const rating = await fetchMovieRating(req.params.id);
    if (!rating) return res.status(404).json({ error: "Rating not found" });
    res.json(rating);
  } catch (err) {
    console.error("❌ Error fetching rating:", err);
    res.status(500).json({ error: "Failed to fetch rating" });
  }
};

module.exports = { getMovieRating };
