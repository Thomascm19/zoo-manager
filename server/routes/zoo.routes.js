const express = require('express');
const router = express.Router();

const zoo = require('../controllers/zoo.controller');

router.get('/', zoo.getZoo);
router.post('/', zoo.createZoo)
router.delete('/:id', zoo.deletezoo)
router.put('/:id', zoo.editZoo)

module.exports = router;