import axios from 'axios'

export const handleToken = (token) => async dispatch => {
    alert('handleToken action!!');
    const res = await axios.post('/api/stripe', token);
    dispatch({
        type: "OBTAIN_STRIPE_OUTPUT",
        payload: res.data
    });
};



export const updateNumAdults = (inputNumAdults) => {
    console.log('updating number adults!!');
    return {
        type: "UPDATE_NUM_ADULTS",
        payload: inputNumAdults
    };
};


export const updateRoomType = (roomSelection) => {
    console.log('updating room selection!!');
    return {
        type: "UPDATE_ROOM_TYPE",
        payload: roomSelection
    };
};


export const updateCalendarDates = (dates) => {
    console.log('updating calendar dates!!');
    return {
        type: "UPDATE_CALENDAR_DATES",
        payload: dates
    };
};

export const updateItineraryTotalCost = (cost) => {
    console.log('updating total itinerary cost!!');
    return {
        type: "UPDATE_ITINERARY_TOTAL_COST",
        payload: cost
    };
};


//async and .then statement required or else code breaks.
export const pushItinerary = (testNumAdults) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itinerary";
    //successfully grabs testNumAdults from checkout page
    alert('you\'re in');
    console.log(testNumAdults);

    return axios({
        url: serverAPI,
        method: 'post',
        data: {
            numAdults: testNumAdults,
        },
    })
    .then(res => {
        dispatch({ type: "ITINERARY_TO_DB", payload: res.data })
    });

};


// pushItinerary method credit to: https://github.com/mzabriskie/axios/issues/196

