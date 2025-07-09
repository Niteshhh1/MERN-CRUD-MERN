const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crud');
        console.log("database connected successfully")
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect