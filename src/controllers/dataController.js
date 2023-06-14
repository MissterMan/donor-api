const dataRepository = require("../repositories/dataRepository");
const { v4: uuidv4 } = require("uuid");
const response = require("../utils/response");

const getAllDonor = (req, res) => {
  const userId = req.user.uid;
  dataRepository.getAllDonor(userId, (error, data) => {
    if (error) {
      return response(
        500,
        "Data Error",
        "An error occured while retrieving data",
        res
      );
    }
    response(200, data, "Get All User Transaction Donor or Recipt", res);
  });
};

const getDonorById = (req, res) => {
  const userId = req.user.uid;
  const { uuid } = req.params;

  dataRepository.getDonorById(userId, uuid, (error, data) => {
    if (error) {
      return response(
        500,
        "Data Error",
        "An error occured while retrieving data",
        res
      );
    }
    if (data === null || data === "" || !data) {
      return response(404, "Data Error", "Data Not Found", res);
    }
    response(200, data, "Get Transaction Data by ID", res);
  });
};

const createDonor = (req, res) => {
  const userId = req.user.uid;
  const {
    name,
    age,
    religion,
    health_condition,
    is_smoke,
    blood_type,
    phone,
    dietary,
    address,
    latitude,
    longitude,
    role,
  } = req.body;

  if (
    !name ||
    !age ||
    !religion ||
    !health_condition ||
    !is_smoke ||
    !blood_type ||
    !phone ||
    !dietary ||
    !address ||
    !role
  ) {
    return response(400, "Data Error", "All data are required", res);
  }

  const uuid = uuidv4();
  const insertedAt = new Date().toJSON().slice(0, 19).replace("T", " ");
  const updatedAt = insertedAt;

  const newDonor = {
    userId,
    uuid,
    name,
    age,
    religion,
    health_condition,
    is_smoke,
    blood_type,
    phone,
    dietary,
    address,
    latitude,
    longitude,
    role,
    insertedAt,
    updatedAt,
  };

  dataRepository.createDonor(newDonor, (error, result) => {
    if (error) {
      return response(
        500,
        "Server Error",
        "An error occured while creating data",
        res
      );
    }

    response(201, result.affectedRows, "Data Added Successfuly", res);
  });
};

const updateDonor = (req, res) => {
  const { uuid } = req.params;
  const { name, phone, address } = req.body;

  if (!name || !phone || !address) {
    return response(400, "Data Error", "All data are required", res);
  }

  const updatedAt = new Date().toJSON().slice(0, 19).replace("T", " ");

  const updateDonor = {
    uuid,
    name,
    phone,
    address,
    updatedAt,
  };

  dataRepository.updateDonor(updateDonor, (error, result) => {
    if (error) {
      response(500, "Data Error", "An error occurred while updating data", res);
    }
    if (result.affectedRows === 0) {
      return response(404, "Data Error", "Data not found", res);
    }
    response(200, result.affectedRows, "Data updated Successfuly", res);
  });
};

const deleteDonor = (req, res) => {
  const { uuid } = req.params;

  dataRepository.deleteDonor(uuid, (error, result) => {
    if (error) {
      response(500, "Data Error", "An error occured while deleting data", res);
    }
    if (result.affectedRows === 0) {
      return response(404, "Data Error", "Data not found", res);
    }
    response(200, result.affectedRows, "Data Deleted Successfuly", res);
  });
};

module.exports = {
  getAllDonor,
  getDonorById,
  createDonor,
  updateDonor,
  deleteDonor,
};
