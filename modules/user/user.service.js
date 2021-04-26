const repo = require('./user.repository');
const User = require("../../models/User");
const passport = require('passport');
const lang = require('../../lib/messages');

/**
 * Login service
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const loginService = async (req, res) => {
    res.render('login')
};

/**
 * Registration page service
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registerSPageService = async (req, res) => {
    res.render('register')
};


/**
 * Register User service
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registerUserService = async (req, res) => {
    const {name, email, password, password2} = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) errors.push({msg: lang.FILL_ALL_DETAILS})

    if (password !== password2) errors.push({msg: lang.PASSWORD_NOT_MATCH});

    if (password.length < 6) errors.push({msg: lang.PASSWORD_LENGTH})

    if (errors.length > 0) {
        res.render('register', {errors, name, email, password, password2})
    } else {
        const data = await repo.registerUserRepo(email)

        if (data) {
            errors.push({msg: lang.EMAIL_ALREADY_USED})
            res.render('register', {errors, name, email, password, password2})
        } else {
            const newUser = new User({name, email, password});
            const data = await repo.createNewUserRepo(newUser, req, res)
            if (data) {
                req.flash('success_msg', lang.YOU_ARE_REGISTERED)
                res.redirect('/users/login')
            } else {
                errors.push({msg: lang.USER_CANNOT_BE_CREATED})
            }
        }
    }

};

/**
 * Login authentication service
 * @param req
 * @param res
 * @param next
 */
const loginAuthenticationService = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/cats/random',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
};

/**
 * User logout service
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const userLogOutService = async (req, res) => {
    req.logout()
    req.flash('success_msg', lang.LOG_OUT)
    res.redirect('/users/login');
};

module.exports = {
    loginService: loginService,
    registerSPageService: registerSPageService,
    registerUserService: registerUserService,
    loginAuthenticationService: loginAuthenticationService,
    userLogOutService: userLogOutService
}