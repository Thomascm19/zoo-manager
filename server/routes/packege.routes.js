const express = require('express');
const router = express.Router();

const packege = require('../controllers/packege.controller');

router.get('/', packege.getPackege);
router.get('/:id', packege.getPackege);
router.post('/', packege.createPackege);
router.delete('/:id', packege.deletePackege);
router.put('/:id', packege.editPackege);

module.exports = router;