const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

// const url = 'mongodb+srv://pcinsightsyt:EA3UeH7qCRIYEx4l@cluster0.r8x19y7.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb+srv://pcinsightsyt:ahIs3GcxXmLhLdh5@cluster0.6gnho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const url = process.env.url;

// console.log(url);
// console.log(process.env.PORT);


const connection = () => {
    mongoose.connect(url).then(() => {
        console.log("database connected successfully");
    }).catch(() => {
        console.log("database not connected");
    })
}

connection();

module.exports = { connection };

// mongodb username - pcinsightsyt

// ahIs3GcxXmLhLdh5 - mongodb password