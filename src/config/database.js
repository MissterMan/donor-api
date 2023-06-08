const mysql = require("mysql");

// DEVELOPMET RUNNING ON CONTAINER
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
