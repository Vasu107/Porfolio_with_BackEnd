const express = require("express");
const router = express.Router();
const { getSkills, getSkill, createSkill, updateSkill, deleteSkill } = require("../controllers/skillController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getSkills);
router.get("/:id", getSkill);
router.post("/", protectAdmin, createSkill);
router.put("/:id", protectAdmin, updateSkill);
router.delete("/:id", protectAdmin, deleteSkill);

module.exports = router;
