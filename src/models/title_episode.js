module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_episode", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    parenttconst: DataTypes.STRING,
    seasonnumber: DataTypes.INTEGER,
    episodenumber: DataTypes.INTEGER,
  }, {
    tableName: "title_episode",
    timestamps: false
  });
};
