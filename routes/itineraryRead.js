const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
// route for retrieving reservations
//===============================================================================================//

module.exports = app => {
    app.route('/api/itineraryRead')
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
};