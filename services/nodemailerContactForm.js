const keys = require ('../config/keys');
const nodemailer = require('nodemailer');

// help for understanding import syntax: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// note: in a production environment, this would probably tie in a customer service ticketing system such as Zendesk
//==============================================================================================//

exports.forwardContactUsEmail = function(message, emailAddress) {

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


    // formatting forwarded email output.
    // NOTE: For the sake of testing, the email will be sent directly to the requester
    let mailOptions = {
        from: '"Hotel NoMa Automated Services" <hotelnomaSF@gmail.com>',
        to: emailAddress,
        subject: 'New customer inquiry',
        text: 'Dear Staff Member, a message was received on our website. Please do your best to assist the customer. The customer wrote:: ' + message,
        html: 'Dear Staff Member,<br /> A message was received on our website. The customer (' + emailAddress + ') wrote:<br/><br/>' + '<i><h3>"' + message + '"</h3></i>' +
        '<br/><br/>Please do your best to assist the customer.<br/><br/>Sincerely, <br/>Hotel NoMa Automated Services<br/>(555) 415-5104<br/>' +
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