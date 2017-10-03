const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
const mailer = require('../services/nodemailer');
const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

//const json2csv = require('json2csv');
//const fs = require('fs'); //node filesystem
//===============================================================================================//

module.exports = app => {

        // post route for saving itinerary as an entry in mongoDB
        app.post('/api/itinerary', async (req, res) => {
            console.log('attempt to post itinerary to DB');

            const {
                /* from itinerary:*/ numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay, carePackage, lateCheckout, breakfast, shuttleRide,
                /* from stripe checkout:*/ source, amount, email, customerName, customerAddress, customerCity, customerZip, customerCountry,
                /* helper info:*/ bookTime, confirmationNumber
                } = req.body;

            console.log('WwwWWWwwWWW');
            console.log(source.id);
            console.log(amount);

            // data from front end should be available at this point. Will be assigned to new schema instance below
            //console.log(req.body.confirmationNumber);

            // initiate charge on customer's credit card using Stripe
            stripe.charges.create({
                amount: amount,
                currency: 'usd',
                description: 'Hotel NoMa SF (' + enterDate + '- ' + exitDate + ')',
                source: source.id
            });


            const postStripeCharge = res => (stripeErr, stripeRes) => {
                if (stripeErr) {
                    res.status(500).send({error: stripeErr});
                } else {
                    res.status(200).send({success: stripeRes});
                }
            };



            // define new DB entry in accordance with mongoose model schema. Intake req.body from front-end axios request
            const itinerary = new Itinerary({
                numAdults: numAdults,
                enterDate: enterDate,
                exitDate: exitDate,
                cancelByDate: cancelByDate,
                numNights: numNights,
                roomType: roomType,
                totalCostOfStay: totalCostOfStay,
                bookTime: bookTime,
                confirmationNumber: confirmationNumber,
                addons: {
                    carePackage: carePackage,
                    lateCheckout: lateCheckout,
                    breakfast: breakfast,
                    shuttleRide: shuttleRide
                },
                contactInfo: {
                    email: email,
                    customerName: customerName,
                    customerAddress: customerAddress,
                    customerCity: customerCity,
                    customerZip: customerZip,
                    customerCountry: customerCountry
                }
            });

            // grab data from instance above.
            console.log('itinerary is: ' + itinerary);


            // send itinerary details to database
            try {
                console.log('in try to push');
                const itineraryToDB= await itinerary.save();
                res.send(itineraryToDB);
            }
            catch (res)
            {
                console.log(res.err);
            }

            // import function - confirmation email sender
            mailer.sendConfirmation(enterDate, exitDate, email, confirmationNumber, totalCostOfStay);
        });


    // route for retrieving reservations
    app.route('/api/itinerarySearch')
        .post(async (req,res) => {
            try {
                console.log("reached post api route for retrieving");
                console.log(req.body.payload[1]);
                const getItinerary = await Itinerary.find({confirmationNumber: req.body.payload[0], ["contactInfo.email"]: req.body.payload[1] });
                res.send(getItinerary);
            } catch (res) {
                console.log(res.err);
            }
        });


    // route for deleting reservations. Refund customer.
    app.route('/api/itineraryDelete')
        .post(async (req,res) => {
            try {
                console.log("reached post api route for deleting");
                console.log(req.body.payload[1]);
                const deleteItinerary = await Itinerary.remove({confirmationNumber: req.body.payload[0], ["contactInfo.email"]: req.body.payload[1] });

                // mongoose returns 1 if entry is deleted, 0 if not
                //console.log(deleteItinerary.result.n);
                if (deleteItinerary.result.n === 1) {
                    res.send({res: 'YES DELETED' });
                } else {
                    res.send({res: 'NOT DELETED' });
                }

                /*
                https://stripe.com/docs/refunds
                var stripe = require("stripe")("sk_test_PWYhqRAZ4oIHbBXTm3dYGLrw");

                stripe.refunds.create({
                  charge: "ch_ATbgYw7MpO4hlv",
                }, function(err, refund) {
                  // asynchronously called
                });


                 */

            } catch (res) {
                console.log(res.err);
            }
        })
};