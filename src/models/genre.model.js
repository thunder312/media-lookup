module.exports = (sequelize, Sequelize) => {
   
    const Genre = sequelize.define("Genre", {
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

    Genre.associate = models => {
      Genre.belongsTo(models.Film, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Genre;
  };

  