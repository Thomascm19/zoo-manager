const express = require('express');
const router = express.Router();

const animals = require('../controllers/animals.controller');

router.get('/', animals.getAnimals);
router.post('/', animals.createAnimal);
router.get('/:id', animals.getAnimal);
router.put('/:id', animals.editAnimal);
router.delete('/:id', animals.deleteAnimal);

module.exports = router;