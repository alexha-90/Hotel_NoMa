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