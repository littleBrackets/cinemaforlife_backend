module.exports = (sequelize, DataTypes) => {
  return sequelize.define("name_basics", {
    nconst: { type: DataTypes.STRING, primaryKey: true },
    primaryname: DataTypes.STRING,
    birthyear: DataTypes.INTEGER,
    deathyear: DataTypes.INTEGER,
    primaryprofession: DataTypes.STRING,
    knownfortitles: DataTypes.STRING,
  }, {
    tableName: "name_basics",
    timestamps: false
  });
};
