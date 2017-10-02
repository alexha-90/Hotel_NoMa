import axios from 'axios';
import store from '../index';
import { createStore } from 'redux'
import allReducers from "../reducers/index";

// Note: payment and backend submissions are handled separately in ./checkoutButton.js
// to-do: refactor server address as an environment/global variable

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

// find existing itinerary. Post request to search database, get request to retrieve result
export const searchExistingItinerary = (confirmationNum, email) => async dispatch => {
    const serverAPI = "http://localhost:5000/api/itinerarySearch";

    //store.dispatch({type: "INC", payload: 1});


    try {
        // .post search term to query database
        const req = [confirmationNum, email];
        alert(req);
        await axios.post(serverAPI,
            dispatch({
                type: "SEARCH_EXISTING_ITINERARY",
                payload: req
        }));

        // .get response back from database query
        const res = await axios.get(serverAPI);
        dispatch({
                type: "FETCH_EXISTING_ITINERARY",
                payload: res
        });

        // server response with itinerary. Empty if no match.
        console.log(res.data.res[0]);
        //dispatch itinerary to redux store state
        store.dispatch({type: "EXISTING_ITINERARY_TO_REDUX_STORE", payload: res.data.res[0]});

    } catch(res) {
        console.log(res.err);
    }
};
