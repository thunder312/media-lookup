const db = require("../models");
const Media = db.Media;
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

     // Create a Media
  const media = {
    name: req.body.name

  };

  // Save Media in the database
  Media.create(media)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Media."
      });
    });

};

// Retrieve all Medias from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Media.findAll({ where: condition },)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving medias."
        });
      });
  };

// Find a single Media with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Media.findByPk(id, )
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Media with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Media with id=" + id
        });
      });
};

// Update a Media by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Media.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Media was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Media with id=${id}. Maybe Media was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Media with id=" + id
        });
      });
};

// Delete a Media with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Media.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Media was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Media with id=${id}. Maybe Media was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Media with id=" + id
        });
      });
};

// Delete all Media from the database.
exports.deleteAll = (req, res) => {
    Media.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Medias were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all medias."
          });
        });
};