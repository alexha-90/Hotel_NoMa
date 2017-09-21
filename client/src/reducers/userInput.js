import moment from 'moment';

// to-do: limit stay to 30 days max
// to-do: can only start stay 1 month in advance. Ending past is ok

// Default input upon visiting app: one adult, staying one night based on current date in San Francisco, CA


export default function (state={
    itinerary: {
        numAdults: 1,
        numNights: (moment().utcOffset(-420).add(1, 'days')).diff(moment().utcOffset(-420), 'days'),
        enterDate: moment().utcOffset(-420).format("MM/DD/YYYY"),
        exitDate: moment().utcOffset(-420).add(1, 'days').format("MM/DD/YYYY"),
        furthestAllowedEnterDate: moment().utcOffset(-420).add(1, 'months').format("MM/DD/YYYY"),
    },
    fetching: false,
    fetched: false,
    error: null,
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
            }
        }

        // more cases to come

        default: {
            //alert('default case reached');
            return state;
        }
    }

}