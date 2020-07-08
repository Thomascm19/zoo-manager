const express = require('express');
const router = express.Router();

const vet = require('../controllers/vet.controller');

router.get('/', vet.getVets);
router.post('/', vet.createVet);
router.get('/:id', vet.getVet);
router.put('/:id', vet.editVet);
router.delete('/:id', vet.deleteVet);

module.exports = router;