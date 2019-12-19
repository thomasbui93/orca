const { Router } = require('express');
const create = require('./create');

const router = Router();
router.post('/create', create);

module.exports = router;