const mongoose = require("mongoose");

const userSchama = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    company: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchama);

module.exports = User;