const express = require("express");
const {
  verifyAdminPassword,
  upsertCertificate,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/verify", verifyAdminPassword);
router.post("/certificates", upsertCertificate);

module.exports = router;
