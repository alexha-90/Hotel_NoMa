const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        emailAddress: String,
        phoneNumber: Number
});

mongoose.model('contactInfo', contactInfoSchema);