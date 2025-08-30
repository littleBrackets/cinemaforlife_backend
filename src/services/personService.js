const {Person} = require("../models");

const fetchAllPeople = async (limit = 50) => {
  return await Person.findAll({ limit });
};

const fetchPersonById = async (nconst) => {
  return await Person.findByPk(nconst);
};

module.exports = { fetchAllPeople, fetchPersonById };
