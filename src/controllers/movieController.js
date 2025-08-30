const { fetchAllMovies, fetchMovieById } = require("../services/movieService");

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
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  } catch (err) {
    console.error("❌ Error fetching movie:", err);
    res.status(500).json({ error: "Failed to fetch movie" });
  }
};

module.exports = { getAllMovies, getMovieById };
