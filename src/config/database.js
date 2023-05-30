const mysql = require("mysql");

const db_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "donor_db",
});

db_connection.connect((error) => {
  if (error) {
    console.error(`Error connecting to MySQL: ${error}`);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db_connection;
