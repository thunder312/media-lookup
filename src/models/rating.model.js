module.exports = (sequelize, Sequelize) => {
   
    const Rating = sequelize.define("Rating", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING
      },
    });

    return Rating;
  };