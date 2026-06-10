const express = require("express");
const router = express.Router();
const { getSkills, getSkill, createSkill, updateSkill, deleteSkill } = require("../controllers/skillController");

router.get("/", getSkills);
router.get("/:id", getSkill);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

module.exports = router;
