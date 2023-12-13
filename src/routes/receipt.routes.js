module.exports = app => {
    const receipts = require("../controllers/receipt.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", receipts.create);
  
    // Retrieve all Tutorials
    router.get("/", receipts.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", receipts.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", receipts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", receipts.delete);
  
    // Delete all Tutorials
    router.delete("/", receipts.deleteAll);
  
    app.use('/api/receipts', router);
  };