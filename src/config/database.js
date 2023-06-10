const mysql = require("mysql");
require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_donor",
  });

  db_connection.connect((error) => {
    if (error) {
      console.error(`Error connecting to MySQL: ${error}`);
      return;
    }

    console.log("Connected to MySQL database");
  });

  module.exports = db_connection;
}

// PRODUCTION ONLY (DONT FORGET TO START THE MACHINE)
if (process.env.NODE_ENV === "production") {
  const db_connection = mysql.createConnection({
    host: process.env.HOST,
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
}
