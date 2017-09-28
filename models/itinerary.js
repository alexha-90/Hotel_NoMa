const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    numAdults: Number,
    enterDate: String,
    /*
    exitDate: String,
    cancelByDate: String,
    numNights: Number,
    roomType: String,
    totalCostOfStay: Number
    */
});

mongoose.model('itinerary', itinerarySchema);