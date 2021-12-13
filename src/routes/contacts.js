const express = require('express');

const contacts = require('../db/contacts.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(contacts);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = contacts.find((contact) => contact.id === id);
  res.json(result);
});

module.exports = router;
