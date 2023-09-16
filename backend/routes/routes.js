// import express
import express from "express";
  
// import function from controller
import { showFilms, showFilmById, createFilm, updateFilm, deleteFilm } from "../../backend/controllers/product.js";
  
// init express router
const router = express.Router();
  
// Get All Films
router.get('/films', showFilms);
  
// Get Single Film
router.get('/films/:id', showFilmById);
  
// Create New Film
router.post('/films', createFilm);
  
// Update Film
router.put('/films/:id', updateFilm);
  
// Delete Film
router.delete('/films/:id', deleteFilm);
  
// export default router
export default router;