const express = require("express");
const router = express.Router();
const { getEducations, getEducation, createEducation, updateEducation, deleteEducation } = require("../controllers/educationController");

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
