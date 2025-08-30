module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_akas", {
    titleid: { type: DataTypes.STRING, primaryKey: true },
    ordering: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    region: DataTypes.STRING,
    language: DataTypes.STRING,
    types: DataTypes.STRING,
    attributes: DataTypes.STRING,
    isoriginaltitle: DataTypes.BOOLEAN,
  }, {
    tableName: "title_akas",
    timestamps: false
  });
};
