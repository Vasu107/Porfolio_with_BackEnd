const Certification = require("../models/Certification");

const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ issueDate: -1 });
    res.json(certifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCertification = async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    if (!certification) return res.status(404).json({ message: "Certification not found" });
    res.json(certification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCertification = async (req, res) => {
  try {
    const certification = await Certification.create(req.body);
    res.status(201).json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!certification) return res.status(404).json({ message: "Certification not found" });
    res.json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) return res.status(404).json({ message: "Certification not found" });
    res.json({ message: "Certification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCertifications, getCertification, createCertification, updateCertification, deleteCertification };
