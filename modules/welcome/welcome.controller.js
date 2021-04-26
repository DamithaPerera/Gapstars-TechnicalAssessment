/**
 * Welcome controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const welcomeController = async (req, res, next) => {
    res.render('welcome');
};


module.exports = {
    welcomeController: welcomeController,
}