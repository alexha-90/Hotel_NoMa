const mongoose = require('mongoose');
const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

//===============================================================================================//

module.exports = app => {

    //try to integrate below. and get stripe charge working. error in console is from the stripe charge
    const postStripeCharge = res => (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({success: stripeRes});
        }
    };

    app.post('/api/stripe', (req, res) => {
        console.log('in stripe post');
        console.log(req.body);
        console.log('***********');
        console.log(req.body.amount);
        console.log(req.body.customerName);
        const myTest = req.body.email;
        console.log(req.body.email);
        console.log(req.body.customerCountry);
        console.log(req.body.customerAddress);
        console.log(req.body.customerCity);
        console.log(req.body.customerZip);
        //stripe.charges.create(req.body, postStripeCharge(res));
        stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'test',
            source: req.body
        });

        // define schema. find by ??? . update entry on db

    });

    return app;
};