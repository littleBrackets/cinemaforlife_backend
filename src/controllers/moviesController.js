const Movie = require('../models/movie');

exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

exports.getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    next(err);
  }
};