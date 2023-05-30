const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/donors", dataController.getAllDonor);
router.get("/donors/:uuid", dataController.getDonorById);
router.post("/donors", dataController.createDonor);

module.exports = router;
