module.exports = (sequelize, Sequelize) => {
    const Film = sequelize.define("film", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING,
        foreignKey: true
      },
      year: {
        type: Sequelize.STRING
      }
    });

    const Rating = sequelize.define("r", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING
      },
    });

    Film.hasOne(Rating, {
      foreignKey: 'rating',
      constraints: false
    });
    Rating.belongsTo(Film);
  
    return Film;
  };