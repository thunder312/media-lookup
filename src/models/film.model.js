module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define("Film", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
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
      }
    });

    Film.associate = models => {
      Film.hasOne(models.Rating, {
        onDelete: "cascade"
      });

      Film.hasMany(models.Genre, {});
    }

    return Film;
  };