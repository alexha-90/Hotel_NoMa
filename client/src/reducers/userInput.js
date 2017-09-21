import moment from 'moment';


// Default entry upon visiting app (one adult, staying one night based on current date in San Francisco, CA)
const initialState = {
    numAdults: 1,
    enterDate: moment().utcOffset(-420).format("MM/DD/YYYY"),
    exitDate: moment().utcOffset(-420).add(1, 'days').format("MM/DD/YYYY"),
    numNights: (moment().utcOffset(-420).add(1, 'days')).diff(moment().utcOffset(-420), 'days')
};

const userInputReducer = (state=initialState, actions) => {
    return state;
};

export default userInputReducer;


/*
const userInputReducer = (state, actions) => {
    return [
        {
            numAdults: 1,
            enterDate: moment().utcOffset(-420).format("MM/DD/YYYY"),
            exitDate: moment().utcOffset(-420).add(1, 'days').format("MM/DD/YYYY"),
            numNights: (moment().utcOffset(-420).add(1, 'days')).diff(moment().utcOffset(-420), 'days')
        },
    ]
};
 */