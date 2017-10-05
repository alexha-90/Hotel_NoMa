const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
const mailer = require('../services/nodemailerAfterPayment');
const stripe = require('../services/stripeBilling');


// post route for saving itinerary as an entry in mongoDB
//===============================================================================================//

module.exports = app => {
    app.post('/api/itineraryCreate', async (req, res) => {
        console.log('attempt to post itinerary to DB');

        const {
            /* from itinerary:*/ numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay, carePackage, lateCheckout, breakfast, shuttleRide, luggageHold,
            /* from stripe checkout:*/ source, amount, email, customerName, customerAddress, customerCity, customerZip, customerCountry,
            /* helper info:*/ bookTime, confirmationNumber
            } = req.body;

        // data from front end should be available at this point. Will be assigned to new schema instance below
        //console.log(req.body.confirmationNumber);

        // execute import function - authorize bill charge for customer
        stripe.processPayment(source, amount, confirmationNumber);

        // define new DB entry in accordance with mongoose model schema. Intake req.body from front-end axios request as defined above
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
                shuttleRide: shuttleRide,
                luggageHold: luggageHold
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

        // execute import function - confirmation email sender
        mailer.sendConfirmation(customerName, confirmationNumber, email, bookTime, totalCostOfStay,
            roomType, numAdults, enterDate, exitDate, numNights, carePackage.toString(), lateCheckout.toString(), breakfast.toString(), shuttleRide.toString());
    });
};