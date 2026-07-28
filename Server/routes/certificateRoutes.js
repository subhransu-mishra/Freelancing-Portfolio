const express = require("express");
const { lookupCertificate } = require("../controllers/certificateController");

const router = express.Router();

router.get("/lookup/:certificateNumber", lookupCertificate);
router.get("/:certificateNumber", lookupCertificate);

module.exports = router;
