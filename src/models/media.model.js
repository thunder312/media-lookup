module.exports = (sequelize, Sequelize) => {

    const Media = sequelize.define("Media", {
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
      tableName: 'Media',
      timestamps: false,
      freezeTableName: true
    }, {
      
    });

    return Media;
  };

  