const express = require('express');
const router = express.Router();

const zoo = require('../controllers/zoo.controller');

router.get('/', zoo.getZoo);
router.post('/', zoo.createZoo)
router.put('/:id', zoo.editZoo)
router.delete('/:id', zoo.deleteZoo)

module.exports = router;