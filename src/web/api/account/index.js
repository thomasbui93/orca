const { Router } = require('express');
const create = require('./create');
const remove = require('./remove');

const router = Router();
router.post('/create', create);
router.delete('/:id', remove);

module.exports = router;