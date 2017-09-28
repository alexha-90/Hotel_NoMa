const mongoose = require('mongoose');
const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const itinerary = require('../models/itinerary');

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        console.log('test****************');
        console.log(req.body);

        const charge = await stripe.charges.create({
            amount: 500, //500 cents
            currency: 'usd',
            description: '$5 for 5 marketing campaign credits',
            source: req.body
        });

        console.log(charge);


        try {
            console.log('try to push billing');
            await charge.save();
            //this route needs to be changed for production
            res.redirect('http://localhost:3000/confirmation');
        }
        catch (err)
        {
            console.log(err);
            //res.status(422).send(err);
        }

    });

};
        /*
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
    });



    // post itinerary as a entry in mongoDB
    app.post('/api/stripe', async (req, res) => {
        console.log('attempt to post billing to DB');
        const { numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay } = req.body;

        // data from front end should be available at this point. Will be assigned to new schema instance below
        console.log('req.body is (should not be empty): ');
        console.log(req.body);


        const itinerary = new Itinerary({
            numAdults: numAdults,
            enterDate: enterDate,
            exitDate: exitDate,
            cancelByDate: cancelByDate,
            numNights: numNights,
            roomType: roomType,
            totalCostOfStay: totalCostOfStay
        });

        // grabs data from instance above.
        console.log('itinerary is: ' + itinerary);


        try {
            console.log('in try to push');
            await itinerary.save();
            //this route needs to be changed for production
            res.redirect('http://localhost:3000/confirmation');
        }
        catch (err)
        {
            console.log(err);
            //res.status(422).send(err);
        }

    });
    */









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
