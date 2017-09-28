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


export const pushItinerary = (userInput) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itinerary";
    //console.log(userInput);
    return axios({
        url: serverAPI,
        method: 'POST',
        data: {
            numAdults: userInput.numAdults,
            enterDate: userInput.enterDate,
            exitDate: userInput.exitDate,
            cancelByDate: userInput.cancelByDate,
            numNights: userInput.numNights,
            roomType: userInput.roomType,
        },
    })
    // segment below isn't actually used
    .then(res => {
        dispatch({ type: "ITINERARY_TO_DB", payload: res.data })
    });

};


// pushItinerary method credit to: https://github.com/mzabriskie/axios/issues/196
// https://stackoverflow.com/questions/38798451/how-to-catch-and-handle-error-response-422-with-redux-axios

