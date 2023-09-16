import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mediaLookup'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
export default db;