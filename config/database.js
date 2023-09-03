const mongoose = require ('mongoose');
const { MONGO_URI } = process.env;

exports.connect = () => {

    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreareIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Successfully Connected to Database!")
        })
        .catch((error) =>{
            console.log("Database Connection Failed. Exiting Now...");
            console.error(error);
            process.exit(1);
        });
};  