import axios from 'axios';
import store from '../index';
// Note: payment and backend submissions are handled separately in ./checkoutButton.js

// some redundant verbiage but I think it helps clarify actions.
// same return action.payload for: "SEND_CONTACT_US_EMAIL", "FETCH_EXISTING_ITINERARY", "FETCH_ALL_ITINERARIES", "DELETE_EXISTING_ITINERARY":
//rename to standard dispatch
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


// update total cost every time an addon is toggled on the checkout page
export const sendContactUsEmail = (formData) => async dispatch => {
    console.log('sending contact us email!!');
    try {
        // .post search term to query database
        const req = formData;
        const res = await axios.post('api/contactUsEmail',
            dispatch({
                type: "SEND_CONTACT_US_EMAIL",
                payload: req
            })
        );
        await store.dispatch({ type: "RESULTS_TO_REDUX_STORE", payload: res.data[0] });
        await alert('Your message has been sent!');
        await window.location.reload();
    } catch(res) {
        console.log(res.err);
    }
};


// Fetch one - search database for a single existing itinerary. Returns itinerary or undefined if not found
export const fetchExistingItinerary = (confirmationNum, email) => async dispatch => {
    try {
        // .post search term to query database
        const req = [confirmationNum, email];
        const res = await axios.post('/api/itineraryRead',
            dispatch({
                type: "FETCH_EXISTING_ITINERARY",
                payload: req
            })
        );
        await console.log(res.data[0]);
        await store.dispatch({ type: "RESULTS_TO_REDUX_STATE", payload: res.data[0] });
    } catch(res) {
        console.log(res.err);
    }
};


// Fetch all - search database for all existing itineraries. Returns itineraries
export const fetchAllItineraries = () => async dispatch => {
    try {
        // .post search term to query database
        const res = await axios.get('/api/itineraryReadAll');
        dispatch({ type: "FETCH_ALL_ITINERARIES", payload: res.data });
        await console.log(res.data);
        await store.dispatch({ type: "RESULTS_TO_REDUX_STORE", payload: res.data })
    } catch(res) {
        console.log(res.err);
    }
};




// Delete one - search database for existing itinerary. Return string describes if query was successful
export const deleteExistingItinerary = (confirmationNum, email) => async dispatch => {
    try {
        const req = [confirmationNum, email];
        const res = await axios.post('api/itineraryDelete',
            dispatch({
                type: "DELETE_EXISTING_ITINERARY",
                payload: req
            })
        );
        await console.log(res.data);
        await store.dispatch({ type: "RESULTS_TO_REDUX_STORE", payload: res.data });
    } catch(res) {
        console.log(res.err);
    }
};