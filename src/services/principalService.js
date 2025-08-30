const {Principal, Person} = require("../models");

const fetchPrincipalsByMovieId = async (tconst) => {
  return await Principal.findAll({
    where: { tconst },
    include: [
      {
        model: Person,
        attributes: ["nconst", "primaryname", "birthyear", "deathyear", "primaryprofession"],
      },
    ],
    order: [["ordering", "ASC"]],
  });
};

module.exports = { fetchPrincipalsByMovieId };
