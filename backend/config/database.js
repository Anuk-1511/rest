import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'A@anuk1511',
    database: "db_restaurant"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;