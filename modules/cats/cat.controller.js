const service = require('./cat.service');
const lang = require('../../lib/messages');
/**
 * Get random cat controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const randomCatGet = async (req, res, next) => {
    res.render('dashboard', {name: req.user.name})
};

/**
 * Random cat post controller
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const randomCatPost = async (req, res, next) => {
    let errors = [];

    try {
        const queryData = req.body
        const data = await service.randomCatService(queryData);
        const success_msg = lang.THE_FILE_DOWNLOADED
        res.render('dashboard', {name: req.user.name, img1: data.firstData, img2: data.secondData, success_msg})
    } catch (e) {
        errors.push({msg: e})
        res.render('dashboard', {name: req.user.name, errors})
    }
};

module.exports = {
    randomCatGet: randomCatGet,
    randomCatPost: randomCatPost
}