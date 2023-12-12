const db = require("../models");
const Film = db.films;
const Rating = db.rating;
const Genre = db.genre;
const FilmsGenres = db.filmsgenres;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

     // Create a Film
  const film = {
    name: req.body.name,
    notes: req.body.notes,
    year: req.body.year
  };

  // Save Film in the database
  Film.create(film)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Film."
      });
    });

};

// Retrieve all Films from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Film.findAll({ include: [{model: Rating},{model: Genre}] })
      .then(data => {
        console.log('All data:\n' + data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving films."
        });
      });
  };

// Find a single Film with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Film.findByPk(id, 
      { include: [ { model: Rating, where: { id: Film.rating } }] })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Film with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Film with id=" + id
        });
      });
};

// Update a Film by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Film.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Film was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Film with id=${id}. Maybe Film was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Film with id=" + id
        });
      });
};

// Delete a Film with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Film was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Film with id=${id}. Maybe Film was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Film with id=" + id
        });
      });
};

// Delete all Film from the database.
exports.deleteAll = (req, res) => {
    Film.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Films were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all films."
          });
        });
};

// Find all Films by year
exports.findAllYear = (req, res) => {
    Film.findAll({ where: { year: req} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films by year."
      });
    });
};