const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    fullName: {
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
    comment: {
        type: String,
        required: true
    }
})

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;