const { db_pool } = require("../config/database");

const getAllDonor = (userId, callback) => {
  db_pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(true);
      return;
    }
    const db_query = "SELECT * FROM donors WHERE userId = ?";
    connection.query(db_query, [userId], (err, results) => {
      connection.release();
      if (err) {
        console.log(err);
        callback(true);
        return;
      }
      callback(false, results);
    });
  });
};

const getDonorById = (userId, uuid, callback) => {
  db_pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(true);
      return;
    }
    const db_query = `SELECT * FROM donors WHERE userId = ? AND uuid = ?`;
    connection.query(db_query, [userId, uuid], (err, results) => {
      connection.release();
      if (err) {
        console.log(err);
        callback(true);
        return;
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      callback(null, results[0]);
    });
  });
};

const createDonor = (data, callback) => {
  db_pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(true);
      return;
    }
    const db_query =
      "INSERT INTO donors (userId, uuid, name, age, religion, health_condition, is_smoke, blood_type, phone, dietary, address, latitude, longitude, role, insertedAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(
      db_query,
      [
        data.userId,
        data.uuid,
        data.name,
        data.age,
        data.religion,
        data.health_condition,
        data.is_smoke,
        data.blood_type,
        data.phone,
        data.dietary,
        data.address,
        data.latitude,
        data.longitude,
        data.role,
        data.insertedAt,
        data.updatedAt,
      ],
      (err, results) => {
        connection.release();
        if (err) {
          console.log(err);
          callback(true);
          return;
        }
        callback(false, results);
      }
    );
  });
};

const updateDonor = (data, callback) => {
  db_pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(true);
      return;
    }
    const db_query =
      "UPDATE donors SET name = ?, phone = ?, address = ?, updatedAt = ? WHERE uuid = ?";
    connection.query(
      db_query,
      [data.name, data.phone, data.address, data.updatedAt, data.uuid],
      (err, results) => {
        connection.release();
        if (err) {
          console.log(err);
          callback(true);
          return;
        }
        callback(false, results);
      }
    );
  });
};

const deleteDonor = (uuid, callback) => {
  db_pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(true);
      return;
    }
    const db_query = "DELETE FROM donors WHERE uuid = ?";

    connection.query(db_query, [uuid], (err, results) => {
      connection.release();
      if (err) {
        console.log(err);
        callback(true);
        return;
      }
      callback(false, results);
    });
  });
};

module.exports = {
  getAllDonor,
  getDonorById,
  createDonor,
  updateDonor,
  deleteDonor,
};
