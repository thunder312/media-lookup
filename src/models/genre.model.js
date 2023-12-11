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
      },
      description: {
        type: Sequelize.STRING
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    Genre.associate = models => {
      Genre.belongsToMany(
        Films, 
        {
            through: 'FilmsGenres',
    
            // GOTCHA
            // note that this is the Child's Id, not Parent.
            foreignKey: 'id'
        }
    )
    };
    return Genre;
  };

  