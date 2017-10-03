const keys = require ('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// help for understanding import syntax: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// arguments received: source, amount (from axios's req.body)
//===============================================================================================//

exports.processPayment = function(source, amount, confirmationNumber) {
    try {
        stripe.charges.create({
            amount: amount,
            currency: 'usd',
            description: 'Hotel NoMa SF - (Confirmation#: ' + confirmationNumber + ')',
            source: source.id
        });
    }
    catch (res) {
        console.log(res.err);
    }
};

/*
refund customer not working properly yet. can delete reservation refund manually using stripe website though
exports.refundPayment = function(source, confirmationNumber) {
    try {
        stripe.refunds.create({
            amount: amount,
            currency: 'usd',
            description: 'Hotel NoMa SF - REFUND - (Confirmation#: ' + confirmationNumber + ')',
            source: source.id
        });
    }
    catch (res) {
        console.log(res.err);
    }
};
*/
