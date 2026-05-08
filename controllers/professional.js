const Professional = require('../models/Professional');

// GET all professionals
const getAllProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find({});
    res.status(200).json(professionals[0]);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET single professional
const getProfessional = async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id);
    if (!professional) {
      return res.status(404).json({ success: false, message: 'Not found' });
    }
    res.status(200).json({ success: true, data: professional });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST create professional
const createProfessional = async (req, res) => {
  try {
    const professional = await Professional.create(req.body);
    res.status(201).json({ success: true, data: professional });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PATCH update professional
const updateProfessional = async (req, res) => {
  try {
    const professional = await Professional.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!professional) {
      return res.status(404).json({ success: false, message: 'Not found' });
    }
    res.status(200).json({ success: true, data: professional });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE professional
const deleteProfessional = async (req, res) => {
  try {
    const professional = await Professional.findByIdAndDelete(req.params.id);
    if (!professional) {
      return res.status(404).json({ success: false, message: 'Not found' });
    }
    res.status(200).json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProfessionals,
  getProfessional,
  createProfessional,
  updateProfessional,
  deleteProfessional
};