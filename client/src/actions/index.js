export function updateNumAdults (inputNumAdults) {
    console.log('update number adults imminent!!');
    return {
        type: "UPDATE_NUM_ADULTS",
        payload: inputNumAdults
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
