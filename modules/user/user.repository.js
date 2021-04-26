const bcrypt = require('bcryptjs');
const User = require('../../models/User');

/**
 * Register User repo
 * @param email{String}
 * @returns {Promise<Query<Document<any, {}> | null, Document<any, {}>, {}>>}
 */
const registerUserRepo = async (email) => {
    return User.findOne({email: email})
}

/**
 * Create new user repo
 * @param newUser {Object}
 * @returns {Promise<unknown>}
 */
const createNewUserRepo = async (newUser) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(newUser.password, 5, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(newUser.password = hash,
                    newUser.save()
                );
            }
        });
    });
}

module.exports = {
    registerUserRepo: registerUserRepo,
    createNewUserRepo: createNewUserRepo
}