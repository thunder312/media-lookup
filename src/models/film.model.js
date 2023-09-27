module.exports = (sequelize, Sequelize) => {
    const Film = sequelize.define("film", {
      name: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      }
    });
  
    return Film;
  };