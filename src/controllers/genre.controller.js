const db = require("../models");
const Genre = db.Genre;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

     // Create a Genre
  const genre = {
    name: req.body.name,
    description: req.body.description,
    notes: req.body.notes,

  };

  // Save Genre in the database
  Genre.create(genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Genre."
      });
    });

};

// Retrieve all Genres from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Genre.findAll({ where: condition },)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving genres."
        });
      });
  };

// Find a single Genre with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Genre.findByPk(id, )
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Genre with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Genre with id=" + id
        });
      });
};

// Update a Genre by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Genre.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Genre was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Genre with id=${id}. Maybe Genre was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Genre with id=" + id
        });
      });
};

// Delete a Genre with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Genre.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Genre was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Genre with id=${id}. Maybe Genre was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Genre with id=" + id
        });
      });
};

// Delete all Genre from the database.
exports.deleteAll = (req, res) => {
    Genre.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Genres were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all genres."
          });
        });
};