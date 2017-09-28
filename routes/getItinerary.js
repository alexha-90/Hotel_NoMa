//goal: get all itinerary details from this.props (redux store) and post into mongoDB. Excluding billing at this time
const mongoose = require('mongoose');
const moment = require('moment');
const Itinerary = mongoose.model('itinerary');


//===============================================================================================//

module.exports = app => {

        // post itinerary as a entry in mongoDB
        app.post('/api/itinerary', async (req, res) => {
        console.log('attempt to post itinerary to DB');

        const {
            /*from itinerary:*/ numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay,
            /*from stripe checkout:*/ customerName, customerAddress, customerCity, customerZip, customerCountry
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
            bookTime: moment().utcOffset(-420).format("MM/DD/YYYY") + ' @ ' + moment().utcOffset(-420).format('hh:mm a') + ' (PST)',
            contactInfo: {
                customerName: customerName,
                customerAddress: customerAddress,
                customerCity: customerCity,
                customerZip: customerZip,
                customerCountry: customerCountry
            }
        });

        // grab data from instance above.
        console.log('itinerary is: ' + itinerary);


        try {
            console.log('in try to push');
            await itinerary.save();
            //this route needs to be changed for production
            //res.redirect('http://localhost:3000/confirmation');
        }
        catch (res)
        {
            console.log(res.err);
            //res.status(422).send(err);
        }

        });

};
