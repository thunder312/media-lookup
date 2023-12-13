module.exports = (sequelize, Sequelize) => {

    const Location = sequelize.define("Location", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
      }
    },
    {
      tableName: 'Location',
      timestamps: false,
      freezeTableName: true
    }, {
      
    });

    return Location;
  };

  