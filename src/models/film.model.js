module.exports = (sequelize, Sequelize) => {
    const Film = sequelize.define("Film", {
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
    },
    {
      associate: function(){
        Film.hasOne(Rating, {as: 'Rating'});
      }
    }
    );

    return Film;
  };