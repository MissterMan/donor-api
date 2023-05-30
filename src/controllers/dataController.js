const dataRepository = require("../repositories/dataRepository");

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

module.exports = {
  getAllDonor,
};
