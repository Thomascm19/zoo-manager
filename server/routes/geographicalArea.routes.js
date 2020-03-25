const express = require('express');
const router = express.Router();

const geographicalArea = require('../controllers/geographicalArea.controller');

router.get('/', geographicalArea.getGeographicalAreas);
router.post('/', geographicalArea.createGeographicalArea);
router.get('/:id', geographicalArea.getGeographicalArea);
router.put('/:id', geographicalArea.editGeographicalArea);
router.delete('/:id', geographicalArea.deleteGeographicalArea);

module.exports = router;