const db = require("../config/database");

const getAllDonor = (userId, callback) => {
  const query = "SELECT * FROM donors WHERE userId = ?";
  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error(`Error retrieving data: ${error}`);
      return callback({ error: "Error retrieving data" });
    }
    callback(null, results);
  });
};

const getDonorById = (userId, uuid, callback) => {
  const query = `SELECT * FROM donors WHERE userId = ? AND uuid = ?`;

  db.query(query, [userId, uuid], (error, results) => {
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

const createDonor = (data, callback) => {
  const query =
    "INSERT INTO donors (userId, uuid, name, age, religion, phone, dietary, address, role, insertedAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      data.userId,
      data.uuid,
      data.name,
      data.age,
      data.religion,
      data.phone,
      data.dietary,
      data.address,
      data.role,
      data.insertedAt,
      data.updatedAt,
    ],
    (error, result) => {
      if (error) {
        console.error(`Error creating data: ${error}`);
        return callback({ error: "Error creating data" });
      }
      callback(null, result);
    }
  );
};

const updateDonor = (data, callback) => {
  const query =
    "UPDATE donors SET name = ?, phone = ?, address = ?, updatedAt = ? WHERE uuid = ?";
  db.query(
    query,
    [data.name, data.phone, data.address, data.updatedAt, data.uuid],
    (error, result) => {
      if (error) {
        console.error(`Error updating data: ${error}`);
        return callback({ error: "Error updating data" });
      }
      callback(null, result);
    }
  );
};

const deleteDonor = (uuid, callback) => {
  const query = "DELETE FROM donors WHERE uuid = ?";
  db.query(query, [uuid], (error, result) => {
    if (error) {
      console.error(`Error deleting data: ${error}`);
      return callback({ error: "Error deleting data" });
    }
    callback(null, result);
  });
};

module.exports = {
  getAllDonor,
  getDonorById,
  createDonor,
  updateDonor,
  deleteDonor,
};
