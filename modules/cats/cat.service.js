const repo = require('./cat.repository');
const fs = require('fs');
const {join} = require('path');
const blend = require('@mapbox/blend');


/**
 * Random cat service
 * @param queryData {Object}
 * @returns {Promise<{secondData: string, firstData: string}>}
 */
const randomCatService = async (queryData) => {
    
    const requestData = {
         greeting : queryData.greetingsFirstImage,
         width : queryData.widthFirstImage,
         height : queryData.heightFirstImage,
         color : queryData.colorFirstImage,
         size : queryData.sizeFirstImage
    }
    const requestSecondData = {
        greeting : queryData.greetingSecondImage,
        width : queryData.widthSecondImage,
        height : queryData.heightSecondImage,
        color : queryData.colorSecondImage,
        size : queryData.sizeSecondImage
    }

    const firstData = await repo.randomCatRepo(requestData)
    const secondData = await repo.randomCatRepo(requestSecondData)

    blend([{
        buffer: new Buffer(firstData.data, 'binary'),
        x: 0,
    }, {
        buffer: new Buffer(secondData.data, 'binary'),
        x: 400,
    }], {
        width: 800,
        height: 500,
        format: 'jpeg',
    }, (err, data) => {
        const fileOut = join(process.cwd(), `/cat-card.jpeg`);
        fs.writeFile(fileOut, data, 'binary', (err, result) => {
            if (err) return err
            console.log("The file was saved!", result);
        });
    });

    return {firstData: firstData.img.uri.href, secondData: secondData.img.uri.href}
};


module.exports = {
    randomCatService: randomCatService
}