const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   
  const Film = sequelize.define('Film', {name: DataTypes.STRING});
  const Genre = sequelize.define('Genre', {name: DataTypes.STRING});
  const FilmsGenres = sequelize.define("FilmsGenres", {
    filmId: {
      type: DataTypes.INTEGER,
      references: {
        model: Film,
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: Genre,
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });
}