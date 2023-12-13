const db = require("../models");
const Receipt = db.receipt;
const Op = db.Sequelize.Op;

// Create and Save a new Receipt
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

     // Create a Receipt
  const receipt = {
    name: req.body.name,
    notes: req.body.notes
  };

  // Save Receipt in the database
  Receipt.create(receipt)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Receipt."
      });
    });

};

// Retrieve all Receipts from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Receipt.findAll({ include: [] })
      .then(data => {
        console.log('All data:\n' + data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving receipts."
        });
      });
  };

// Find a single Receipt with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Receipt.findByPk(id, 
      { include: [ ] })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Receipt with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Receipt with id=" + id
        });
      });
};

// Update a Receipt by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Receipt.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Receipt was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Receipt with id=${id}. Maybe Receipt was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Receipt with id=" + id
        });
      });
};

// Delete a Receipt with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Receipt.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Receipt was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Receipt with id=${id}. Maybe Receipt was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Receipt with id=" + id
        });
      });
};

// Delete all Receipt from the database.
exports.deleteAll = (req, res) => {
    Receipt.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Receipts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all receipts."
          });
        });
};