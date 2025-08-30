const { fetchAllMovies, fetchMovieById } = require("../services/movieService");
const logger = require("../utils/logger");

const getAllMovies = async (req, res) => {
  try {
    const movies = await fetchAllMovies();
    res.json(movies);
  } catch (err) {
    console.error("❌ Error fetching movies:", err);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await fetchMovieById(req.params.id);
    if (!movie) {
      logger.warn("Movie not found", { requestId: req.requestId, movieId: req.params.id });
      return res.status(404).json({ error: "Movie not found" });
    } 
    logger.info("Fetched movie", { requestId: req.requestId, movieId: req.params.id });
    res.json(movie);
  } catch (err) {
    logger.error("Error fetching movie", { requestId: req.requestId, error: err });
    res.status(500).json({ error: "Failed to fetch movie" });
  }
};

module.exports = { getAllMovies, getMovieById };
