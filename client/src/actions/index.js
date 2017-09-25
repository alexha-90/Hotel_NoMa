export function updateNumAdults(inputNumAdults) {
    console.log('updating number adults!!');
    return {
        type: "UPDATE_NUM_ADULTS",
        payload: inputNumAdults
    };
}


export function updateRoomType(roomSelection) {
    console.log('updating room selection!!');
    return {
        type: "UPDATE_ROOM_TYPE",
        payload: roomSelection
    };
}


export function updateCalendarDates(dates){
    console.log('updating calendar dates!!');
    return {
        type: "UPDATE_CALENDAR_DATES",
        payload: dates
    };
}

export function updateItineraryTotalCost(cost){
    console.log('updating total itinerary cost!!');
    return {
        type: "UPDATE_ITINERARY_TOTAL_COST",
        payload: cost
    };
}


/*
export function fetchItinerary() {
    console.log('fetch data imminent!!');
    return {
        type: "FETCH_DATA_FULFILLED",
        payload: {
            numAdults: 4,
            numNights: 4,
        }
    };
}
*/



// more actions to come
























/* from bucky tutorial */
export const selectUser = (user) => {
    console.log("You clciked on user :", user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
