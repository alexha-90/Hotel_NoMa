const keys = require ('../config/keys');
const nodemailer = require('nodemailer');

// help for understanding import syntax: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// arguments received: enterDate, exitDate, email, confirmationNumber, totalCostOfStay (from axios's req.body)
//===============================================================================================//

exports.sendConfirmation = function(enterDate, exitDate, email, confirmationNumber, totalCostOfStay) {

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
        text: 'Thanks for booking your upcoming stay in San Francisco with us! We look forward to seeing you. ' +
        'if you need suggestions for activities in the area, please visit TBD. Your confirmation number is ' + confirmationNumber + '.',
        html: '<h4>Thanks for booking your upcoming stay in San Francisco with us! We look forward to seeing you. If you need suggestions ' +
        'for activities in the area, please visit TBD. Your confirmation number is</h4>' + confirmationNumber +
        '<h4>. You paid $</h4>' + totalCostOfStay + '<h4>. if you chose breakfast, you will get a voucher at check in. if not, stay hungry my friend. shuttle ride</h4>'
    };

    // send email with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        return console.log('Message sent: %s', info.messageId);
    });
};