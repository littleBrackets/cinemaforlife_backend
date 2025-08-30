module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_ratings", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    averagerating: DataTypes.FLOAT,
    numvotes: DataTypes.INTEGER,
  }, {
    tableName: "title_ratings",
    timestamps: false
  });
};
