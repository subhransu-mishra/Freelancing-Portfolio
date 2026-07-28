const express = require("express");
const {
  verifyAdminPassword,
  upsertCertificate,
  listCertificates,
  deleteCertificate,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/verify", verifyAdminPassword);
router.post("/certificates", upsertCertificate);
router.get("/certificates", listCertificates);
router.post("/certificates/list", listCertificates);
router.delete("/certificates/:certificateNumber", deleteCertificate);
router.post("/certificates/delete/:certificateNumber", deleteCertificate);

module.exports = router;

