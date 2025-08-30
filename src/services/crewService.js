const {Crew, Person} = require("../models");

const fetchCrewByMovieId = async (tconst) => {
  const crew = await Crew.findOne({ where: { tconst } });
  if (!crew) return null;

  const directors = crew.directors
    ? await Person.findAll({ where: { nconst: crew.directors } })
    : [];
  const writers = crew.writers
    ? await Person.findAll({ where: { nconst: crew.writers } })
    : [];

  return { tconst, directors, writers };
};

module.exports = { fetchCrewByMovieId };
