module.exports = (sequelize, Sequelize) => {
   
    const Genre = sequelize.define("Genre", {
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
      timestamps: false,
      freezeTableName: true
    });
    return Genre;
  };

  