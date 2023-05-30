const dataRepository = require("../repositories/dataRepository");
const { v4: uuidv4 } = require("uuid");

const getAllDonor = (req, res) => {
  dataRepository.getAllDonor((error, data) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "An error occured while retrieving data" });
    }
    res.json(data);
  });
};

const getDonorById = (req, res) => {
  const { uuid } = req.params;

  dataRepository.getDonorById(uuid, (error, data) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "An error occured while retrieving data" });
    }
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(data);
  });
};

const createDonor = (req, res) => {
  const { name, age, religion, phone, address } = req.body;

  if (!name || !age || !religion || !phone || !address) {
    return res.status(400).json({ error: "All data are required" });
  }

  const uuid = uuidv4();
  const insertedAt = new Date().toJSON().slice(0, 19).replace("T", " ");
  const updatedAt = insertedAt;

  const newDonor = {
    uuid,
    name,
    age,
    religion,
    phone,
    address,
    insertedAt,
    updatedAt,
  };

  dataRepository.createDonor(newDonor, (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "An error occured while creating data" });
    }
    res.status(201).json(result);
  });
};

const updateDonor = (req, res) => {
  const { uuid } = req.params;
  const { name, age, religion, phone, address } = req.body;

  if (!name || !age || !religion || !phone || !address) {
    return res.status(400).json({ error: "All data are required" });
  }

  const updatedAt = new Date().toJSON().slice(0, 19).replace("T", " ");

  const updateDonor = {
    uuid,
    name,
    age,
    religion,
    phone,
    address,
    updatedAt,
  };

  dataRepository.updateDonor(updateDonor, (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating data" });
    }
    res.json(result);
  });
};

module.exports = {
  getAllDonor,
  getDonorById,
  createDonor,
  updateDonor,
};
