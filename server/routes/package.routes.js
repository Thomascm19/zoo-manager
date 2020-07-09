const express = require('express');
const router = express.Router();

const package = require('../controllers/package.controller');

router.get('/', package.getPackages);
router.post('/', package.createPackage);
router.get('/:id', package.getPackage);
router.put('/:id', package.editPackage);
router.delete('/:id', package.deletePackage);

module.exports = router;