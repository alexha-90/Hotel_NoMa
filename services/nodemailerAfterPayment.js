const keys = require ('../config/keys');
const nodemailer = require('nodemailer');

// help for understanding import syntax: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
//==============================================================================================//

exports.sendConfirmation = function(customerName, confirmationNumber, email, bookTime, totalCostOfStay,
                                    roomType, numAdults, enterDate, exitDate, numNights, carePackage, lateCheckout, breakfast, shuttleRide) {

    // confirmation email setup (SMTP gmail host)
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


    // email message formatting
    let mailOptions = {
        from: '"Hotel NoMa" <hotelnomaSF@gmail.com>',
        to: email,
        subject: 'Your upcoming stay in San Francisco, CA (' + enterDate + '- ' + exitDate + ')',
        text: 'Thank you for booking your upcoming stay in San Francisco with us! We look forward to seeing you. If you purchased the breakfast ' +
        'addon, you will receive vouchers upon checking in at the front desk. If you purchased the shuttle ride addon, a transportation specialist ' +
        'will contact you shortly before your arrival. Please feel free to call us at (555) 415-5104 or simply respond back to this email if you have any ' +
        'questions or concerns. For activity suggestions in the area, please visit http://www.sftravel.com/explore for a great resource of local activities.' +
        'Your itinerary: confirmation number: ' + confirmationNumber + ' time at booking: ' + bookTime + 'blah blah blah. Finish later',

        html: '<h4>' + customerName + ', <br/><br/>' + 'Thank you for booking your upcoming stay in San Francisco with us! We look forward to seeing you. If you purchased the breakfast ' +
        'addon, you will receive vouchers upon checking in at the front desk. If you purchased the shuttle ride addon, a transportation specialist ' +
        'will contact you shortly before your arrival. Please feel free to call us at (555) 415-5104 or simply respond back to this email if you have any ' +
        'questions or concerns. For activity suggestions in the area, please visit <a href="http://www.sftravel.com/explore">http://www.sftravel.com/explore</a> for a great resource of local activities. </h4>' +
        '<img src="https://i.imgur.com/dhenj1R.jpg?1" alt="goldenGate" align="center"/> <br /><br /> <h3>Your itinerary:</h3>' +
        '<hr /> Confirmation number: ' + confirmationNumber + '<hr />' +
        'Time at booking: ' + bookTime + '<hr />' +
        'Total amount paid: $' + totalCostOfStay + '<hr />' +
        'Room choice: ' + roomType + '<hr />' +
        'Number of adults: ' + numAdults + '<hr />' +
        'Check-in Date: ' + enterDate + '<hr />' +
        'Check-out Date: ' + exitDate + '<hr />' +
        'Number of nights: ' + numNights + '<hr /><br />' +
        '<h3>Optional addons: </h3> <hr />' +
        'Care Package: ' + carePackage + '<hr />' +
        'Late Check-out: ' + lateCheckout + '<hr />' +
        'Breakfast: ' + breakfast + '<hr />' +
        'Shuttle ride: ' + shuttleRide + '<hr /><br/><br/>' +
        'Sincerely, <br/>Hotel NoMa Management<br/>(555) 415-5104<br/>' +
        '<a target="_blank" href="https://www.facebook.com"><img src="https://png.icons8.com/facebook/dusk/20" title="Facebook" alt="facebook"/></a> ' +
        '<a target="_blank" href="https://www.twitter.com"><img src="https://png.icons8.com/twitter/dusk/20" title="Twitter" alt="twitter"/></a> ' +
        '<a target="_blank" href="https://www.instagram.com"><img src="https://png.icons8.com/instagram-old/dusk/20" title="Instagram Old" alt="instagram"/></a>'
    };

    // send email with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        return console.log('Message sent: %s', info.messageId);
    });
};