const mysql = require("mysql");
require("dotenv").config();

// PRODUCTION ONLY (DONT FORGET TO START THE MACHINE)
const db_connection = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db_connection.connect((error) => {
  if (error) {
    console.error(`Error connecting to MySQL: ${error}`);
    return;
  }

  console.log("Connected to MySQL database");
});

module.exports = db_connection;
