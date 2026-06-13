const express = require("express");
const router = express.Router();
const { getProjects, getProject, createProject, updateProject, deleteProject } = require("../controllers/projectController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", protectAdmin, createProject);
router.put("/:id", protectAdmin, updateProject);
router.delete("/:id", protectAdmin, deleteProject);

module.exports = router;
