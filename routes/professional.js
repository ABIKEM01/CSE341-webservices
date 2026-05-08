const express = require('express');
const router = express.Router();
const {
  getAllProfessionals,
  getProfessional,
  createProfessional,
  updateProfessional,
  deleteProfessional
} = require('../controllers/professional');

router.route('/').get(getAllProfessionals).post(createProfessional);
router.route('/:id').get(getProfessional).patch(updateProfessional).delete(deleteProfessional);

module.exports = router;