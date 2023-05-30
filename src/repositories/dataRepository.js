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

const getDonorById = (uuid, callback) => {
  const query = `SELECT * FROM donors WHERE uuid = ?`;

  db.query(query, [uuid], (error, results) => {
    if (error) {
      console.log(`Error retrieving data by uuid: ${error}`);
      return callback({ error: "Error retrieving data by uuid" });
    }
    if (results.length === 0) {
      return callback(null, null);
    }
    callback(null, results[0]);
  });
};

// const createDonor = (data, callback) => {
//   const query = 'INSERT '
// };

module.exports = {
  getAllDonor,
  getDonorById,
};
