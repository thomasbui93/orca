const { Router } = require('express');
const passport = require('passport');
const create = require('./create');
const login = require('./login');
const me = require('./me');

const router = Router();
router.post('/create', create);
router.post('/auth', login);
router.get('/me', passport.authenticate('bearer', { session: false }), me);

module.exports = router;