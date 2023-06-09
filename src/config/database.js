const mysql = require("mysql");

const db_connection = mysql.createConnection({
  host: "{CHANGE TO THE HOST NAME}",
  user: "{USERNAME}",
  password: "{PASSWORD}",
  database: "{DATABASE NAME}",
});

db_connection.connect((error) => {
  if (error) {
    console.error(`Error connecting to MySQL: ${error}`);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db_connection;
