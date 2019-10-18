const { Router } = require('express');
const pingController = require('./ping');

const router = Router();
router.get('/', pingController);

module.exports = router;
