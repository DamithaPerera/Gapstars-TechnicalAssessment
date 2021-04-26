const express = require('express');
const router = express.Router();
const controller = require('./welcome.controller');


router.get('/', controller.welcomeController);


module.exports = router;
