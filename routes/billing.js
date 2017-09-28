const express = require('express');
const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const itinerary = require('../models/itinerary');

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        console.log('test');
        console.log('body is: ' + req.body);
        const charge = await stripe.charges.create({
            amount: 500, //500 cents
            currency: 'usd',
            description: '$5 for 5 marketing campaign credits',
            source: req.body.id
        }).catch(function () {
            console.log("Catch case. Promise Rejected");
        });


        //req.user.credits += 5;
        //const user = await req.itinerary.save();
        //res.send(user);
        /*

        const newItinerary = { enterDate: 'test', exitDate: 'test', cancelByDate: 'test', numNights: 5, roomType: 'test', totalCostOfStay: 522};

        itinerary.create(newItinerary, function(err, newlyCreated){
            if(err){
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
        */
    });
};



/*

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        //console.log(req.body);
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 marketing campaign credits',
            source: req.body.id
        });

        console.log(charge);
    });
};
*/



/*
module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        console.log('test');
        const enterDate = 'testenter';
        const exitDate = 'testexit';
        const cancelByDate = 'testcancel';
        const numNights = 99;
        const roomType = 'testroomtype';
        const totalCostOfStay = 9999;


        const newItinerary = { enterDate: enterDate, exitDate: exitDate, cancelByDate: cancelByDate, numNights: numNights, roomType: roomType, totalCostOfStay: totalCostOfStay};

        const reservation = req.save();
        res.send(reservation);


        itinerary.create(newItinerary, function(err, newlyCreated){
            if(err){
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
});
};


 */