const express = require('express');
const router = express.Router();

const date = require('../controllers/date.controller');

router.get('/', date.getDates);
router.post('/', date.createDate);
router.get('/:id', date.getDate);
router.put('/:id', date.editDate);
router.delete('/:id', date.deleteDate);

module.exports = router;