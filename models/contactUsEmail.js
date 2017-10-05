const mongoose = require('mongoose');

const contactUsEmailSchema = new mongoose.Schema({
    textContent: String,
    emailAddress: String,
});

mongoose.model('contactUsEmail', contactUsEmailSchema);