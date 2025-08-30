const { Sequelize, DataTypes } = require("sequelize");
const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = require("../config/database");
const logger = require("../utils/logger");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
  logging: (msg, timing) => {
    // msg: the SQL query
    // timing: time in ms if benchmark: true
    logger.info("Sequelize query", { sql: msg, duration: timing });
  },
});

// Import models
const title_basics = require("./title_basics")(sequelize, DataTypes);
const title_akas = require("./title_akas")(sequelize, DataTypes);
const title_crew = require("./title_crew")(sequelize, DataTypes);
const title_episode = require("./title_episode")(sequelize, DataTypes);
const title_principals = require("./title_principals")(sequelize, DataTypes);
const title_ratings = require("./title_ratings")(sequelize, DataTypes);
const name_basics = require("./name_basics")(sequelize, DataTypes);

// -------------------------
// Define Associations
// -------------------------

// Basics ↔ Ratings (1:1)
title_basics.hasOne(title_ratings, { foreignKey: "tconst" });
title_ratings.belongsTo(title_basics, { foreignKey: "tconst" });

// Basics ↔ Akas (1:N)
title_basics.hasMany(title_akas, { foreignKey: "titleid" });
title_akas.belongsTo(title_basics, { foreignKey: "titleid" });

// Basics ↔ Crew (1:1)
title_basics.hasOne(title_crew, { foreignKey: "tconst" });
title_crew.belongsTo(title_basics, { foreignKey: "tconst" });

// Basics ↔ Episodes (1:N)
title_basics.hasMany(title_episode, { foreignKey: "parenttconst" });
title_episode.belongsTo(title_basics, { foreignKey: "parenttconst" });

// Basics ↔ Principals (1:N)
title_basics.hasMany(title_principals, { foreignKey: "tconst" });
title_principals.belongsTo(title_basics, { foreignKey: "tconst" });

// Principals ↔ Names (N:1)
name_basics.hasMany(title_principals, { foreignKey: "nconst" });
title_principals.belongsTo(name_basics, { foreignKey: "nconst" });

// Export
module.exports = {
  sequelize,
  Sequelize,
  Movie: title_basics,
  Aka: title_akas,
  Crew: title_crew,
  Episode: title_episode,
  Principal: title_principals,
  Rating: title_ratings,
  Person: name_basics,
};
