module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_crew", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    directors: DataTypes.STRING,
    writers: DataTypes.STRING,
  }, {
    tableName: "title_crew",
    timestamps: false
  });
};
