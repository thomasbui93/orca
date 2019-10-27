const { Router } = require('express');
const passport = require('passport');
const create = require('./create');
const login = require('./login');
const me = require('./me');
const logout = require('./logout');

const router = Router();
router.post('/create', create);
router.post('/auth', login);
router.get('/me', passport.authenticate('bearer', { session: false }), me);
router.get('/logout', passport.authenticate('bearer', { session: false }), logout);

module.exports = router;