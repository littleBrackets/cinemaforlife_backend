const {Movie, Rating, Aka, Crew, Principal, Person} = require("../models");

const fetchAllMovies = async (limit = 50) => {
  return await Movie.findAll({
    limit,
    include: [{ model: Rating, attributes: ["averagerating", "numvotes"] }],
  });
};

const fetchMovieById = async (tconst) => {
  return await Movie.findByPk(tconst, {
    include: [
      { model: Rating },
      { model: Aka },
      { model: Crew },
      {
        model: Principal,
        include: [{ model: Person }],
      },
    ],
  });
};

module.exports = { fetchAllMovies, fetchMovieById };
