//goal: get all itinerary details from this.props (redux store) and post into mongoDB. Excluding billing at this time
const mongoose = require('mongoose');

const Itinerary = mongoose.model('itinerary');

module.exports = app => {


        // post itinerary as a entry in mongoDB
        app.post('/api/itinerary', async (req, res) => {
        console.log('attempt to post itinerary to DB');
        //const { numAdults, enterDate, exitDate, cancelByDate, numNights, roomType, totalCostOfStay } = req.body;
        const { numAdults } = req.body;

        // data from front end should be available at this point. Will be assigned to new schema instance below
        console.log('req.body is (should not be empty): ');
        console.log(req.body);


        const itinerary = new Itinerary({
            numAdults: numAdults,
            enterDate: '10/30/17',
            /*
            exitDate: exitDate,
            cancelByDate: cancelByDate,
            numNights: numNights,
            roomType: roomType,
            totalCostOfStay: totalCostOfStay
            */
        });

        // grabs data from instance above. Works with static values
        console.log('itinerary is: ' + itinerary);

        // try is successful with static values inside new itinerary instance. Still get error 422 regardless though
        try {
            console.log('in try to push');
            await itinerary.save();
            res.send(data);
        }
        catch (err)
        {
            res.status(422).send(err);
        }

    });



    // test route to confirm connection (successful)
    app.get('/api/test', (req, res) => {
        res.send('test page accessed');
    });

};
