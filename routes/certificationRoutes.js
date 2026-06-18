const express = require("express");
const router = express.Router();
const { getcertifications, getcertification, createcertification, updatecertification, deletecertification } = require("../controllers/certificationController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getcertifications);
router.get("/:id", getcertification);
router.post("/", protectAdmin, createcertification);
router.put("/:id", protectAdmin, updatecertification);
router.delete("/:id", protectAdmin, deletecertification);

module.exports = router;
