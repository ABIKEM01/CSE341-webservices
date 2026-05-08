const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getSingleContact
} = require('../controllers/contacts');

// GET all contacts
router.get('/', getAllContacts);

// GET single contact by ID
router.get('/:id', getSingleContact);

module.exports = router;