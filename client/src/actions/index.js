import axios from 'axios'

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

export const handleToken = (token) => async dispatch => {
    alert('handleToken action!!');
    const res = await axios.post('/api/stripe', token);
    dispatch({
        type: "OBTAIN_STRIPE_OUTPUT",
        payload: res.data
    });
};

export const pushItinerary = (testNumAdults) => async dispatch => {
    //const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const serverURL = "http://localhost:5000/api/itinerary";
    const res = await axios.post(serverURL, testNumAdults);
    //const res = await axios.post('/api/itinerary', values);
    dispatch({ type: "PUSH_ITINERARY", payload: res.data })

};


/*
http://localhost:5000/api/itinerary
*/