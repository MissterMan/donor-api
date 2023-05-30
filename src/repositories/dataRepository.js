const db = require("../config/database");

const getAllDonor = (callback) => {
  const query = "SELECT * FROM donors";
  db.query(query, (error, results) => {
    if (error) {
      console.error(`Error retrieving data: ${error}`);
      return callback({ error: "Error retrieving data" });
    }
    callback(null, results);
  });
};

module.exports = {
  getAllDonor,
};
