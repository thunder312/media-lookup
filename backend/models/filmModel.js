// import connection
import db from "../config/database.js";
  
// Get All Films
export const getFilms = (result) => {
    db.query("SELECT * FROM Films", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Film
export const getFilmById = (id, result) => {
    db.query("SELECT * FROM Films WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Film to Database
export const insertFilm = (data, result) => {
    db.query("INSERT INTO Films SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Film to Database
export const updateFilmById = (data, id, result) => {
    db.query("UPDATE Films SET name = ? WHERE id = ?", [data.name, id], (err, results) => {             


        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Film to Database
export const deleteFilmById = (id, result) => {
    db.query("DELETE FROM Films WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}