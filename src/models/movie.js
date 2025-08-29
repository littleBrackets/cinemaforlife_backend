const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  imdb_id: { type: DataTypes.STRING, primaryKey: true },
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  genre: DataTypes.STRING,
  rating: DataTypes.FLOAT,
  director: DataTypes.STRING,
  plot: DataTypes.TEXT,
});

module.exports = Movie;