const {Rating} = require("../models");

const fetchMovieRating = async (tconst) => {
  return await Rating.findByPk(tconst);
};

module.exports = { fetchMovieRating };
