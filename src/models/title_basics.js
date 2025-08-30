module.exports = (sequelize, DataTypes) => {
  return sequelize.define("title_basics", {
    tconst: { type: DataTypes.STRING, primaryKey: true },
    titletype: DataTypes.STRING,
    primarytitle: DataTypes.STRING,
    originaltitle: DataTypes.STRING,
    isadult: DataTypes.BOOLEAN,
    startyear: DataTypes.INTEGER,
    endyear: DataTypes.INTEGER,
    runtimeminutes: DataTypes.INTEGER,
    genres: DataTypes.STRING,
  }, {
    tableName: "title_basics",
    timestamps: false
  });
};
