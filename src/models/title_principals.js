module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_principals", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    ordering: { type: DataTypes.INTEGER, primaryKey: true },
    nconst: DataTypes.STRING,
    category: DataTypes.STRING,
    job: DataTypes.STRING,
    characters: DataTypes.STRING,
  }, {
    tableName: "title_principals",
    timestamps: false
  });
};
