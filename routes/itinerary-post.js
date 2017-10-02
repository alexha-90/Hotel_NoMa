const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
const nodemailer = require('nodemailer');
const keys = require ('../config/keys');

//===============================================================================================//

module.exports = app => {

        // post itinerary as a entry in mongoDB
        app.post('/api/itinerary', async (req, res) => {
            console.log('attempt to post itinerary to DB');

            const {
                /* from itinerary:*/ numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay, carePackage, lateCheckout, breakfast, shuttleRide,
                /* from stripe checkout:*/ email, customerName, customerAddress, customerCity, customerZip, customerCountry,
                /* helper info:*/ bookTime, confirmationNumber
                } = req.body;

            // data from front end should be available at this point. Will be assigned to new schema instance below
            //console.log(req.body.confirmationNumber);

            // define new entry in accordance with model schema and req.body result from front-end axios post request
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

            //refactor out below:


            // send confirmation email
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'hotelnomaSF@gmail.com',
                    pass: keys.emailPassword
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Hotel NoMa" <hotelnomaSF@gmail.com>',
                to: email,
                subject: 'Your upcoming stay in San Francisco, CA (' + enterDate + '- ' + exitDate + ')',
                text: 'Thanks for booking your upcoming stay in San Francisco with us! We look forward to seeing you. ' +
                    'if you need suggestions for activities in the area, please visit TBD. Your confirmation number is ' + confirmationNumber + '.',
                html: '<h4>Thanks for booking your upcoming stay in San Francisco with us! We look forward to seeing you. If you need suggestions ' +
                    'for activities in the area, please visit TBD. Your confirmation number is</h4>' + confirmationNumber +
                    '<h4>. You paid $</h4>' + totalCostOfStay + '<h4>. if you chose breakfast, you will get a voucher at check in. if not, stay hungry my friend. shuttle ride</h4>'
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Message sent: %s', info.messageId);
            });

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


    // route for deleting reservations
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

            } catch (res) {
                console.log(res.err);
            }
        })
};