module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {description: DataTypes.STRING});
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
        type: DataTypes.INTEGER,
      },
      year: {
        type: DataTypes.DATEONLY
      },
      notes: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
      bewertung:{
        type: DataTypes.VIRTUAL,
        get() {
            return this.Rating?.get().description;
        },
        set(/*value*/) {
            throw new Error('Versuch nicht ein Rating anzugeben!');
        }
      }
    },
    {
      tableName: 'Films',
      timestamps: false,
      freezeTableName: true
    });

    Film.hasOne(Rating, {
      foreignKey: 'rating',
    });
    Rating.belongsTo(Film,{
      foreignKey: 'id',
    });

    return Film;
};