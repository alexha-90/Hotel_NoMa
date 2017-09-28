const mongoose = require('mongoose');
const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

    //try to integrate below. and get stripe charge working. error in console is from the stripe charge
    const postStripeCharge = res => (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    };

    app.post('/api/stripe', (req, res) => {
        console.log('in stripe post');
        console.log(req.body);
        console.log('***********');
        console.log(req.body.amount);
        console.log(req.body.customerName);
        console.log(req.body.email);
        //stripe.charges.create(req.body, postStripeCharge(res));
        stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'test',
            source: req.body
        });
    });

    return app;




    /*
    app.post('/api/stripe', (req, res) => {
        console.log('in stripe post');
        console.log(req.body);
        stripe.charges.create(req.body, postStripeCharge(res));
    });

    return app;
    */
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
