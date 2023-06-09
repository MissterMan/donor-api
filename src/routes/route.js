const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.get(
  "/donors",
  authenticationMiddleware.authenticateUser,
  dataController.getAllDonor
);
router.get(
  "/donors/:uuid",
  authenticationMiddleware.authenticateUser,
  dataController.getDonorById
);
router.post(
  "/donors",
  authenticationMiddleware.authenticateUser,
  dataController.createDonor
);
router.put(
  "/donors/:uuid",
  authenticationMiddleware.authenticateUser,
  dataController.updateDonor
);
router.delete(
  "/donors/:uuid",
  authenticationMiddleware.authenticateUser,
  dataController.deleteDonor
);

module.exports = router;
