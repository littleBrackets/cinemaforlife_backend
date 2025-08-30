module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_crew", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    directors: DataTypes.STRING,  // comma-separated list
    writers: DataTypes.STRING
  }, {
    tableName: "title_crew",
    timestamps: false
  });
};
