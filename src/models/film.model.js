module.exports = (sequelize, DataTypes) => {
  
    const Rating = sequelize.define('Rating', {
      description: {type: DataTypes.STRING},
      name: {type: DataTypes.STRING}
    },
    {
      tableName: 'Rating',
      timestamps: false,
      freezeTableName: true
    });

    const Genre = sequelize.define('Genre', {
      description: {type: DataTypes.STRING},
      name: {type: DataTypes.STRING}
    },
    {
      tableName: 'Genre',
      timestamps: false,
      freezeTableName: true
    });

    const FilmsGenres = sequelize.define('FilmsGenres', {
      filmId: {
        type: DataTypes.INTEGER
      },
      genreId: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'FilmsGenres',
      timestamps: false,
      freezeTableName: true
    });

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
      year: {
        type: DataTypes.DATEONLY
      },
      notes: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
     rating:{
        type: DataTypes.VIRTUAL,
        get() {
            return this.Rating?.get().description;
        },
        set(value) {
            throw new Error('Versuch nicht ein Rating (' + value + ') anzugeben!');
        }
      },
      ratingPoints:{
        type: DataTypes.VIRTUAL,
        get() {
            return this.Rating?.get().id + " / 10 ";
        },
        set(value) {
            throw new Error('Versuch nicht ein Rating (' + value + ') anzugeben!');
        }
      },
      genre:{
        type: DataTypes.VIRTUAL,
        get() {  
          var result = "";
          for (let i = 0; i < this.Genres.length; i++) {
            if(i > 0) {
              result = result + ", ";
            }
            result = result + this.Genres[i].name;
          }
          return result;
        },
        set(value) {
            throw new Error('Versuch nicht ein Genre (' + value + ') anzugeben!');
        }
      },
    },
    {
      tableName: 'Films',
      timestamps: false,
      freezeTableName: true
    });

    Film.hasOne(Rating, {
      foreignKey: 'id', // Rating.id
      sourceKey: 'rating' // Film.rating
    });

    Film.belongsToMany(Genre, { through: FilmsGenres }),
    Genre.belongsToMany(Film, { through: FilmsGenres });

    return Film;
};