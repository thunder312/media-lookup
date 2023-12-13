const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
  max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle 
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.films = require("./film.model.js")(sequelize, Sequelize);
db.rating = require("./rating.model.js")(sequelize, Sequelize);
db.filmsgenres = require("./filmsgenres.model.js")(sequelize, Sequelize);
db.genre = require("./genre.model.js")(sequelize, Sequelize);
db.media = require("./media.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);

module.exports = db;