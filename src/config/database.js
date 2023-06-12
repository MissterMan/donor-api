const mysql = require("mysql");
require("dotenv").config();

const db_pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_donor",
});

db_pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }

  console.log("Connected to the database!");
  connection.release();
});

module.exports = { db_pool };
