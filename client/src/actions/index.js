
export function fetchItinerary() {
    console.log('update imminent!!');
    return {
        type: "FETCH_DATA_FULFILLED",
        payload: {
            numAdults: 4,
            numNights: 4,
            deepTest: 'hi from inside the itinerary inside the userInput reducer',
        }
    };
}


// more actions to come



/*

export function fetchItinerary() {
    console.log('update imminent!!');
    return {
        type: "FETCH_DATA",
        payload: {
            injectTest: 'successfully injected via index',
            numAdults: 4,
            numNights: 4,
        }
    };
}

 */








/*

export default (async function showResults(values) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
*/

/* from bucky tutorial */
export const selectUser = (user) => {
    console.log("You clciked on user :", user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
