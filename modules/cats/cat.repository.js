const request = require('request');


/**
 * Random first cat details
 * @param queryData {Object}
 * @returns {Promise<{img, data: unknown}>}
 */
const randomFirstCatRepo = async (queryData) => {
    const greeting = queryData.greetingsFirstImage
    const width = queryData.widthFirstImage
    const height = queryData.heightFirstImage
    const color = queryData.colorFirstImage
    const size = queryData.sizeFirstImage

    const data = await new Promise((resolve, reject) => {
        request.get({
            url: `https://cataas.com/cat/says/${greeting}?width=${width}&height=${height}&c=${color}&s=${size}`,
            encoding: 'binary'
        }, (error, res, body) => {
            if (!error) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });

    const img = request.get({
        url: `https://cataas.com/cat/says/${greeting}?width=${width}&height=${height}&c=${color}&s=${size}`,
        encoding: 'binary'
    })
    return {
        data,
        img
    }

};

/**
 * Random second cat details
 * @param queryData {Object}
 * @returns {Promise<{img, data: unknown}>}
 */
const randomSecondCatRepo = async (queryData) => {

    const who = queryData.greetingSecondImage
    const width = queryData.widthSecondImage
    const height = queryData.heightSecondImage
    const color = queryData.colorSecondImage
    const size = queryData.sizeSecondImage

    const data = await new Promise((resolve, reject) => {
        request.get({
            url: `https://cataas.com/cat/says/${who}?width=${width}&height=${height}&c=${color}&s=${size}`,
            encoding: 'binary'
        }, (error, res, body) => {
            if (!error) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
    const img = request.get({
        url: `https://cataas.com/cat/says/${who}?width=${width}&height=${height}&c=${color}&s=${size}`,
        encoding: 'binary'
    })
    return {
        data,
        img
    }

};
module.exports = {
    randomFirstCatRepo: randomFirstCatRepo,
    randomSecondCatRepo: randomSecondCatRepo
}