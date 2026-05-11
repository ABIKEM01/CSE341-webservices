const express = require('express');
const router = express.Router();

const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts');

// GET all contacts
router.get('/', getAllContacts);

// GET single contact
router.get('/:id', getSingleContact);

// POST new contact
router.post('/', createContact);

// PUT update contact
router.put('/:id', updateContact);

// DELETE contact
router.delete('/:id', deleteContact);

module.exports = router;