const mongoose = require('mongoose');
const ContactUsEmail = mongoose.model('contactUsEmail');
const mailForward = require('../services/nodemailerContactForm');
// post route for sending a email via Contact Us form
// note: in a production environment, this would probably tie in a customer service ticketing system such as Zendesk
//===============================================================================================//

module.exports = app => {
    app.post('/api/contactUsEmail', async (req, res) => {
        console.log('attempt to send email');

        // format input request from front-end
        const message = req.body.payload[0];
        const emailAddress = req.body.payload[1];

        // create new contactUsEmail instance
        const contactUsEmail = new ContactUsEmail({
            textContent: message,
            emailAddress: emailAddress
        });

        // grab data from instance above.
        console.log('contact us email details are: ' + contactUsEmail);

        // save form submission to database for record keeping
        try {
            console.log('in try to push contact us email content');
            const messageToDB= await contactUsEmail.save();
            res.send(messageToDB);
        }
        catch (res)
        {
            console.log(res.err);
        }


        // execute import function - send letter to Hotel NoMa customer service account
        mailForward.forwardContactUsEmail(message, emailAddress);
    });
};