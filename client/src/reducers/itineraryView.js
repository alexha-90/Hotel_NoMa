// maybe change state to object?

export default function(state = [], action) {

    switch (action.type) {
        case "FETCH_ITINERARY":
            return action.payload;

        default:
            return state;
    }
}