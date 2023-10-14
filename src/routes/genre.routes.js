module.exports = app => {
    const genres = require("../controllers/genre.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", genres.create);
  
    // Retrieve all Tutorials
    router.get("/", genres.findAll);
  
    // Retrieve all published Tutorials
    router.get("/year", genres.findAllYear);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", genres.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", genres.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", genres.delete);
  
    // Delete all Tutorials
    router.delete("/", genres.deleteAll);
  
    app.use('/api/genres', router);
  };