const mongoose = require("mongoose");

const metaseedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    leadID:{
        type: mongoose.ObjectId
    }
});

const metaseed = mongoose.model("metaseed", metaseedSchema);

module.exports = metaseed