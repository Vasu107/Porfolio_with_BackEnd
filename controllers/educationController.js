const Education = require("../models/Education");

const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: "Education not found" });
    res.json({ message: "Education deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getEducations, getEducation, createEducation, updateEducation, deleteEducation };
