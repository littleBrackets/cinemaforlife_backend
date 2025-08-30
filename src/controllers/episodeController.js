const { fetchEpisodesForSeries } = require("../services/episodeService");

const getEpisodesForSeries = async (req, res) => {
  try {
    const episodes = await fetchEpisodesForSeries(req.params.id);
    if (!episodes || episodes.length === 0) {
      return res.status(404).json({ error: "No episodes found for this series" });
    }
    res.json(episodes);
  } catch (err) {
    console.error("❌ Error fetching episodes:", err);
    res.status(500).json({ error: "Failed to fetch episodes" });
  }
};

module.exports = { getEpisodesForSeries };
