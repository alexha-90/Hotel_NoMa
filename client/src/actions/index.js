import axios from 'axios';
import store from '../index';
// Note: payment and backend submissions are handled separately in ./checkoutButton.js
// to-do: refactor server address as an environment/global variable
//===============================================================================================//


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


// update total cost every time an addon is toggled on the checkout page
export const updateItineraryTotalCost = (cost) => {
    console.log('updating total itinerary cost!!');
    return {
        type: "UPDATE_ITINERARY_TOTAL_COST",
        payload: cost
    };
};


// Fetch one - search database for a single existing itinerary. Returns itinerary or undefined if not found
export const fetchExistingItinerary = (confirmationNum, email) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itineraryRead";
    try {
        // .post search term to query database
        const req = [confirmationNum, email];
        const res = await axios.post(serverAPI,
            dispatch({
                type: "FETCH_EXISTING_ITINERARY",
                payload: req
            })
        );
        await console.log(res.data[0]);
        await store.dispatch({ type: "ITINERARY_RESULTS_TO_REDUX_STORE", payload: res.data[0] });
    } catch(res) {
        console.log(res.err);
    }
};


// Fetch all - search database for all existing itineraries. Returns itineraries
export const fetchAllItineraries = () => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itineraryReadAll";
    try {
        // .post search term to query database
        const res = await axios.get(serverAPI);
        dispatch({ type: "FETCH_ALL_ITINERARIES", payload: res.data });
        await console.log(res.data);


        await store.dispatch({ type: "ALL_ITINERARIES_TO_REDUX_STORE", payload: res.data });
    } catch(res) {
        console.log(res.err);
    }
};




// Delete one - search database for existing itinerary. Return string describes if query was successful
export const deleteExistingItinerary = (confirmationNum, email) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itineraryDelete";
    try {
        const req = [confirmationNum, email];
        const res = await axios.post(serverAPI,
            dispatch({
                type: "DELETE_EXISTING_ITINERARY",
                payload: req
            })
        );
        await console.log(res.data);
        await store.dispatch({ type: "ITINERARY_RESULTS_TO_REDUX_STORE", payload: res.data });
    } catch(res) {
        console.log(res.err);
    }
};