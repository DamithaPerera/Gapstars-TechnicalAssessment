const express = require('express');
const router = express.Router();
const controller = require('./cat.controller');
const {ensureAuthenticated} = require('../../config/auth');


router.get('/random', ensureAuthenticated, controller.randomCatGet);

router.post('/random', ensureAuthenticated, controller.randomCatPost);


module.exports = router;
