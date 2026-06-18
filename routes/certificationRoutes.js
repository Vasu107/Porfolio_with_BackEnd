const express = require("express");
const router = express.Router();
const { getCertifications, getCertification, createCertification, updateCertification, deleteCertification } = require("../controllers/certificationController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getCertifications);
router.get("/:id", getCertification);
router.post("/", protectAdmin, createCertification);
router.put("/:id", protectAdmin, updateCertification);
router.delete("/:id", protectAdmin, deleteCertification);

module.exports = router;
