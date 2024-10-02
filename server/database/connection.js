const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database');
    }
}
module.exports = dbConnection;