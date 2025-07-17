const mongoose = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect(
    'mongodb+srv://learnnodejs:%40bhanu2000@learnjs.xmoejnl.mongodb.net/devTinder'
);
};

module.exports = connectDB;

