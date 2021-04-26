const service = require('./user.service');

/**
 * Login
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const login = async (req, res, next) => {
    await service.loginService(req, res)
};

/**
 *  Registration page controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const registerPage = async (req, res, next) => {
    await service.registerSPageService(req, res)
};

/**
 * Register User controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const registerUser = async (req, res, next) => {
    await service.registerUserService(req, res)
};

/**
 * Login authentication controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const loginAuthentication = async (req, res, next) => {
    await service.loginAuthenticationService(req, res, next)
}

/**
 * Logout controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const userLogOut = async (req, res, next) => {
    await service.userLogOutService(req, res)
};


module.exports = {
    login: login,
    registerPage: registerPage,
    registerUser: registerUser,
    loginAuthentication: loginAuthentication,
    userLogOut: userLogOut
}