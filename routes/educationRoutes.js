const express = require("express");
const router = express.Router();
const { getEducations, getEducation, createEducation, updateEducation, deleteEducation } = require("../controllers/educationController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", protectAdmin, createEducation);
router.put("/:id", protectAdmin, updateEducation);
router.delete("/:id", protectAdmin, deleteEducation);

module.exports = router;
