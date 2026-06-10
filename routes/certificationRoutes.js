const express = require("express");
const router = express.Router();
const { getCertifications, getCertification, createCertification, updateCertification, deleteCertification } = require("../controllers/certificationController");

router.get("/", getCertifications);
router.get("/:id", getCertification);
router.post("/", createCertification);
router.put("/:id", updateCertification);
router.delete("/:id", deleteCertification);

module.exports = router;
