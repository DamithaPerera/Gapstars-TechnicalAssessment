const mongoose = require("mongoose");

/**
 * Database connection
 * @returns {Promise<void>}
 */
const connectDB = async () => {
    try {
        //construct the db connection uri
        const connectionURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@gapstars.kofwq.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

        //connect to the mongodb database
        await mongoose.connect(connectionURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
    } catch (error) {
        //log the database error
        console.log('error=>', error)
    }
};

module.exports = connectDB;
