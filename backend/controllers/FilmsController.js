// Import function from Film Model
import { getFilms, getFilmById, insertFilm, updateFilmById, deleteFilmById } from "../models/filmModel.js";
  
// Get All Films
export const showFilms = (req, res) => {
    getFilms((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Film 
export const showFilmById = (req, res) => {
    getFilmById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Film
export const createFilm = (req, res) => {
    const data = req.body;
    insertFilm(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Film
export const updateFilm = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateFilmById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Film
export const deleteFilm = (req, res) => {
    const id = req.params.id;
    deleteFilmById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}