module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define("Film", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING
      },
      notes: {
        type: DataTypes.STRING
      },
      rating: {
        type: DataTypes.STRING,
        foreignKey: true
      },
      year: {
        type: DataTypes.STRING
      },
      notes: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      }
    });

    Film.associate = models => {
      Film.hasOne(models.Rating, {
        onDelete: "cascade"
      });

      Film.belongsToMany(
        Genre, 
        {
            // this can be string (model name) or a Sequelize Model Object Class
            // through is compulsory since v2
            through: 'FilmsGenres',
    
            // GOTCHA
            // note that this is the Parent's Id, not Child. 
            foreignKey: 'id'
        }
    );    
    }

    return Film;
  };