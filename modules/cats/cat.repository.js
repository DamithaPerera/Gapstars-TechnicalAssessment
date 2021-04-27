const request = require('request');


/**
 * Random first cat details
 * @param queryData {Object}
 * @returns {Promise<{img, data: unknown}>}
 */
const randomCatRepo = async (queryData) => {
    
    const greeting = queryData.greeting
    const width = queryData.width
    const height = queryData.height
    const color = queryData.color
    const size = queryData.size

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


module.exports = {
    randomCatRepo: randomCatRepo
}