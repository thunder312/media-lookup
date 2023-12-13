module.exports = (sequelize, Sequelize) => {

    const Rating = sequelize.define("Rating", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING
      },
    },
    {
      tableName: 'Rating',
      timestamps: false,
      freezeTableName: true
    }, {
      
    });

    return Rating;
  };

  