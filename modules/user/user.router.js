const express = require('express');
const router = express.Router();
const controller = require('./user.controller');


router.get('/login', controller.login);

router.get('/register', controller.registerPage);

router.post('/register', controller.registerUser);

router.post('/login', controller.loginAuthentication)

router.get('/logout', controller.userLogOut)


module.exports = router;
