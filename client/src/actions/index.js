import axios from 'axios';
// Note: payment and backend submissions are handled separately in ./checkoutButton.js

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


export const searchExistingItinerary = (testConfirmationNum) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itinerarySearch";

    try {
        await axios.post(serverAPI,
        dispatch({
            type: "SEARCH_EXISTING_ITINERARY",
            payload: testConfirmationNum
        }))
    } catch(error) {
        console.log(error);
    }
};





/*
export const fetchItinerary = (testConfirmationNum) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itinerarySearch";

    try {
        await axios.post(serverAPI,
            dispatch({
                type: "FETCH_ITINERARY",
                payload: testConfirmationNum
            }))
    } catch(error) {
        console.log(error);
    }
};
*/






/*
export const fetchItinerary = (testConfirmationNum) => async dispatch => {
    await axios.post('/api/itineraryz');
    dispatch({ type: "FETCH_ITINERARY", payload: testConfirmationNum });
};
*/


/*
export const fetchItinerary = () => async dispatch => {
    const res = await axios.get('/api/itinerary');
    dispatch({ type: "FETCH_ITINERARY", payload: res.data });
};
*/