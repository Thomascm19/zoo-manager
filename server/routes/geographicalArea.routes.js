const express = require('express');
const router = express.Router();

const geographicalArea = require('../controllers/geographicalArea.controller');

router.get('/', geographicalArea.getGeographicalAreas);
router.get('/:id', geographicalArea.getGeographicalArea);
router.post('/', geographicalArea.createGeographicalArea);
router.delete('/:id', geographicalArea.deleteGeographicalArea);

module.exports = router;