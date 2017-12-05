import moment from 'moment';

// some redundant action dispatch cases but I think it helps with clarification
// lifecycle explanation: user input transferred here (itinerary reducer) as action.payload, received as req.body (backend via bodyParser), then back to action creator (actions/index.js) as res.data
//===============================================================================================//

const itineraryReducerSource = (state={
    // all customer info batched together here. Reorganized once entry is saved into DB
    itinerary: {
        // default input parameters: one adult, staying one night based on current date in San Francisco, CA
        numAdults: 1,
        enterDate: moment().utcOffset(-480).format("MM/DD/YYYY"),
        exitDate: moment().utcOffset(-480).add(1, 'days').format("MM/DD/YYYY"),
        cancelByDate: moment().utcOffset(-480).subtract(1, 'days').format("MM/DD/YYYY"),
        numNights: (moment().utcOffset(-480).add(1, 'days')).diff(moment().utcOffset(-480), 'days'),
        roomType: '',
        totalCostOfStay: null,
        confirmationNumber: null,
        bookTime: null,
        email: null,
        carePackage: false,
        lateCheckout: false,
        breakfast: false,
        shuttleRide: false,
        luggageHold: false
    }},

    action) => {

    switch (action.type) {

        case "UPDATE_NUM_ADULTS": {
            // console.log('update number of adults reached');
            return {
                ...state,
                itinerary: {...state.itinerary, numAdults: parseInt(action.payload, 10)}
            };
        }


        case "UPDATE_CALENDAR_DATES": {
            // console.log('update calendar dates reached');
            const enterDate = action.payload[0];
            const exitDate = action.payload[2];
            const numNights = moment(exitDate).diff(moment(enterDate), 'days');

            // initially creates an deprecation error since attempting to parse a null time. Ignore the error.
            const cancelByDate = moment(exitDate).subtract(1, 'days').format("MM/DD/YYYY");
            return {
                ...state,
                itinerary: {
                    ...state.itinerary,
                    enterDate: enterDate,
                    exitDate: exitDate,
                    cancelByDate: cancelByDate,
                    numNights: numNights
                }
            };
        }


        case "UPDATE_ROOM_TYPE": {
            // console.log('update room type reached');
            return {
                ...state,
                itinerary: {...state.itinerary, roomType: action.payload}
            };
        }


        case "UPDATE_ITINERARY_TOTAL_COST": {
            //console.log('update itinerary total cost reached');
            return {
                ...state,
                itinerary: {...state.itinerary, totalCostOfStay: parseFloat(action.payload)}
            };
        }


        case "SEND_CONTACT_US_EMAIL":
            //console.log('search existing itinerary reached');
            return action.payload;


        case "FETCH_EXISTING_ITINERARY":
            //console.log('search existing itinerary reached');
            return action.payload;


        case "FETCH_ALL_ITINERARIES":
            //console.log('fetch ALL existing itineraries reached');
            return action.payload;


        case "DELETE_EXISTING_ITINERARY":
            //console.log('delete existing itinerary reached');
            return action.payload;


        case "RESULTS_TO_REDUX_STATE": {
            //console.log('itinerary results to redux store state reached');
            return {
                ...state,
                itinerary: action.payload
            };
        }


        // cases involving backend (itinerary to db, payment) are handled separately in actions/checkoutButton.js


        default: {
            return state;
        }
    }
};


export default itineraryReducerSource;