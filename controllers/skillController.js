const Skill = require("../models/Skill");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const normalizeCategory = (value) => {
  if (typeof value !== "string") return value;
  return value.trim().toLowerCase();
};

const createSkill = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.category) data.category = normalizeCategory(data.category);
    const skill = await Skill.create(data);
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateSkill = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.category) data.category = normalizeCategory(data.category);
    const skill = await Skill.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSkills, getSkill, createSkill, updateSkill, deleteSkill };
