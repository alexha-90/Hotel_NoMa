const mongoose = require('mongoose');
const Itinerary = mongoose.model('itinerary');
// route for retrieving reservations
//===============================================================================================//

module.exports = app => {

    // find single itinerary that matches query
    app.route('/api/itineraryRead')
        .post(async (req,res) => {
            try {
                console.log("reached post api route for retrieving single itinerary");
                console.log(req.body.payload[1]);
                const getItinerary = await Itinerary.find({confirmationNumber: req.body.payload[0], ["contactInfo.email"]: req.body.payload[1] });
                res.send(getItinerary);
            } catch (res) {
                console.log(res.err);
            }
        });

    // find all itineraries
    app.route('/api/itineraryReadAll')
        .get(async (req,res) => {
            try {
                console.log("reached post api route for retrieving all itineraries");
                const getItinerary = await Itinerary.find({});
                console.log(getItinerary);
                console.log(getItinerary.contactInfo);
                res.send(getItinerary);
            } catch (res) {
                console.log(res.err);
            }
        });



};