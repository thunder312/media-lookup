module.exports = app => {
    const films = require("../controllers/film.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", films.create);
  
    // Retrieve all Tutorials
    router.get("/", films.findAll);
  
    // Retrieve all published Tutorials
    router.get("/year", films.findAllYear);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", films.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", films.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", films.delete);
  
    // Delete all Tutorials
    router.delete("/", films.deleteAll);
  
    app.use('/api/films', router);
  };