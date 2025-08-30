const {Episode} = require("../models");

const fetchEpisodesForSeries = async (parentTconst) => {
  return await Episode.findAll({
    where: { parentTconst },
    order: [["seasonnumber", "ASC"], ["episodenumber", "ASC"]],
  });
};

module.exports = { fetchEpisodesForSeries };
