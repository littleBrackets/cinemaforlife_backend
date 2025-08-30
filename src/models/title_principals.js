module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_principals", {
    tconst: { type: DataTypes.STRING },
    ordering: DataTypes.INTEGER,
    nconst: DataTypes.STRING,
    category: DataTypes.STRING,
    job: DataTypes.STRING,
    characters: DataTypes.STRING
  }, {
    tableName: "title_principals",
    timestamps: false
  });
};
