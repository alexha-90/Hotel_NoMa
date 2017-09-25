import moment from 'moment';

// to-do: limit stay to 30 days max



export default function (state={
    itinerary: {
        // Default input upon visiting app: one adult, staying one night based on current date in San Francisco, CA
        numAdults: 1,
        enterDate: moment().utcOffset(-420).format("MM/DD/YYYY"),
        exitDate: moment().utcOffset(-420).add(1, 'days').format("MM/DD/YYYY"),
        cancelByDate: moment().utcOffset(-420).subtract(1, 'days').format("MM/DD/YYYY"),
        numNights: (moment().utcOffset(-420).add(1, 'days')).diff(moment().utcOffset(-420), 'days'),
        roomType: '',
        totalCostOfStay: null
    },
    //fetching: false,
    //fetched: false,
    //error: null,
    }, action) {

    switch (action.type) {
        /* may be able to delete these cases
        case "FETCH_DATA": {
            //successfully accessed. updates fetching in props
            console.log('fetch data reached');
            return {...state, fetching: true}
        }

        case "FETCH_DATA_FULFILLED": {
            console.log('fetch data entry reached');
            return {
                ...state,
                itinerary: action.payload
            }
        }
        */

        case "UPDATE_NUM_ADULTS": {
            console.log('update number of adults reached');
            return {
                ...state,
                itinerary: {...state.itinerary, numAdults: action.payload}
            };
        }

        case "UPDATE_ROOM_TYPE": {
            console.log('update room type reached');
            return {
                ...state,
                itinerary: {...state.itinerary, roomType: action.payload}
            };
        }

        case "UPDATE_CALENDAR_DATES": {
            console.log('update calendar dates reached');
            const enterDate = action.payload[0];
            const exitDate = action.payload[2];
            const numNights = moment(exitDate).diff(moment(enterDate), 'days');

            // initially creates an deprecation error since attempting to parse a null time. Timeout does not solve.
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

        case "UPDATE_ITINERARY_TOTAL_COST": {
            console.log('update itinerary total cost reached');
            return {
                ...state,
                itinerary: {...state.itinerary, totalCostOfStay: action.payload}
            };
        }

        // more cases to come

        default: {
            return state;
        }
    }

}