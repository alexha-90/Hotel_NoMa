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
                /*from itinerary:*/ numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay,
                /*from stripe checkout:*/ email, customerName, customerAddress, customerCity, customerZip, customerCountry,
                /*helper info:*/ bookTime, confirmationNumber
                } = req.body;


            // data from front end should be available at this point. Will be assigned to new schema instance below
            //console.log(req.body);

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
                //this route needs to be changed for production
                //res.redirect('http://localhost:3000/confirmation');
            }
            catch (res)
            {
                console.log(res.err);
                //res.status(422).send(err);
            }


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
                    '<h4>. You paid $</h4>' + totalCostOfStay + '<h4>.</h4>'
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Message sent: %s', info.messageId);
            });

        });
};
