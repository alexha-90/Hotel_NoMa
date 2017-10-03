const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
// route for deleting reservations. Refund customer.
//===============================================================================================//

module.exports = app => {
    app.route('/api/itineraryDelete')
        .post(async (req,res) => {
            try {
                console.log("reached post api route for deleting");
                console.log(req.body.payload[0]);


                // intake token # for stripe, not properly integrated yet
                //stripe.refundPayment(source, req.body.payload[0]);


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