const certification = require("../models/certification");

// Helper function to parse DD-MM-YYYY date format to Date object
const parseDate = (dateString) => {
  if (!dateString) return null;
  if (dateString instanceof Date) return dateString;
  
  // Try to parse DD-MM-YYYY format
  const ddmmyyyyMatch = dateString.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (ddmmyyyyMatch) {
    const [, day, month, year] = ddmmyyyyMatch;
    return new Date(`${year}-${month}-${day}`);
  }
  
  // Try ISO format or other standard formats
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

const getcertifications = async (req, res) => {
  try {
    const certifications = await certification.find().sort({ issueDate: -1 });
    res.json(certifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getcertification = async (req, res) => {
  try {
    const certification = await certification.findById(req.params.id);
    if (!certification) return res.status(404).json({ message: "certification not found" });
    res.json(certification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createcertification = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.issueDate) data.issueDate = parseDate(data.issueDate);
    if (data.expiryDate) data.expiryDate = parseDate(data.expiryDate);
    
    const certification = await certification.create(data);
    res.status(201).json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatecertification = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.issueDate) data.issueDate = parseDate(data.issueDate);
    if (data.expiryDate) data.expiryDate = parseDate(data.expiryDate);
    
    const certification = await certification.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!certification) return res.status(404).json({ message: "certification not found" });
    res.json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletecertification = async (req, res) => {
  try {
    const certification = await certification.findByIdAndDelete(req.params.id);
    if (!certification) return res.status(404).json({ message: "certification not found" });
    res.json({ message: "certification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getcertifications, getcertification, createcertification, updatecertification, deletecertification };
