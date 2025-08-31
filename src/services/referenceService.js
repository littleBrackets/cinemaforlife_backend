const { title_basics: Movie, title_akas: Aka, name_basics: Person } = require("../models");
const cache = require("./redisCache");
const logger = require("../utils/logger");

const TTL_LONG = 24 * 3600; 
const TTL_MEDIUM = 6 * 3600;
const TTL_SHORT = 3600;

async function getMovieTypes(requestId) {
  const key = "movieTypes";
  const cached = await cache.get(key);
  if (cached) return cached;

  const types = await Movie.findAll({ attributes: ["titleType"], group: ["titleType"] });
  await cache.set(key, types, TTL_LONG);
  logger.info("Cached movieTypes", { requestId });
  return types;
}

async function getRegions(requestId) {
  const key = "regions";
  const cached = await cache.get(key);
  if (cached) return cached;

  const regions = await Aka.findAll({ attributes: ["region"], group: ["region"] });
  await cache.set(key, regions, TTL_LONG);
  logger.info("Cached regions", { requestId });
  return regions;
}

async function getLanguages(requestId) {
  const key = "languages";
  const cached = await cache.get(key);
  if (cached) return cached;

  const languages = await Aka.findAll({ attributes: ["language"], group: ["language"] });
  await cache.set(key, languages, TTL_LONG);
  logger.info("Cached languages", { requestId });
  return languages;
}

async function getProfessions(requestId) {
  const key = "professions";
  const cached = await cache.get(key);
  if (cached) return cached;

  const professions = await Person.findAll({ attributes: ["primaryProfession"], group: ["primaryProfession"] });
  await cache.set(key, professions, TTL_MEDIUM);
  logger.info("Cached professions", { requestId });
  return professions;
}

async function getTopMovies(requestId) {
  const key = "topMovies";
  const cached = await cache.get(key);
  if (cached) return cached;

  const movies = await Movie.findAll({ order: [["averageRating", "DESC"]], limit: 100 });
  await cache.set(key, movies, TTL_SHORT);
  logger.info("Cached topMovies", { requestId });
  return movies;
}

// Additional helpers for controllers
async function getRegionsMap(requestId) {
  const regions = await getRegions(requestId);
  return regions.reduce((map, r) => {
    if (r.region) map[r.region] = r.region;
    return map;
  }, {});
}

async function getLanguagesMap(requestId) {
  const langs = await getLanguages(requestId);
  return langs.reduce((map, l) => {
    if (l.language) map[l.language] = l.language;
    return map;
  }, {});
}

module.exports = {
  getMovieTypes,
  getRegions,
  getLanguages,
  getProfessions,
  getTopMovies,
  getRegionsMap,
  getLanguagesMap
};
