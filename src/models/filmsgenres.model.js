module.exports = (sequelize, Sequelize) => {
   
    const FilmsGenres = sequelize.define("FilmsGenres", {
      filmId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
    });

    FilmsGenres.associate = models => {};
    return FilmsGenres;
  };

  