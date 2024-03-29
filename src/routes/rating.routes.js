module.exports = app => {
    const ratings = require("../controllers/rating.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ratings.create);
  
    // Retrieve all Tutorials
    router.get("/", ratings.findAll);
  
    // Retrieve all published Tutorials
    router.get("/year", ratings.findAllYear);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ratings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ratings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ratings.delete);
  
    // Delete all Tutorials
    router.delete("/", ratings.deleteAll);
  
    app.use('/api/ratings', router);
  };