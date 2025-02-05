const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
const url = process.env.url;

const connection = () => {
    mongoose.connect(url).then(() => {
        console.log("database connected successfully");
    }).catch((err) => {
        console.log(err);
        console.log("database not connected");
    })
}

// connection();

module.exports = { connection };

// mongodb username - pcinsightsyt

// ahIs3GcxXmLhLdh5 - mongodb password