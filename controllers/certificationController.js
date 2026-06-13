const Certification = require("../models/Certification");

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
    const data = { ...req.body };
    if (data.issueDate) data.issueDate = parseDate(data.issueDate);
    if (data.expiryDate) data.expiryDate = parseDate(data.expiryDate);
    
    const certification = await Certification.create(data);
    res.status(201).json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCertification = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.issueDate) data.issueDate = parseDate(data.issueDate);
    if (data.expiryDate) data.expiryDate = parseDate(data.expiryDate);
    
    const certification = await Certification.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
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
