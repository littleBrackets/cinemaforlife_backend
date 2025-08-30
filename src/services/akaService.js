const {Aka} = require("../models");

const fetchAkasForMovie = async (tconst) => {
  return await Aka.findAll({ where: { tconst } });
};

module.exports = { fetchAkasForMovie };
