import { combineReducers } from 'redux';
//import UserReducer from './users';
import itineraryReducerSource from './itinerary';
import pricing from './pricing';


const allReducers = combineReducers({
    //users: UserReducer,
    itineraryReducer: itineraryReducerSource,
    pricing: pricing,
});

export default allReducers;








/* probably needed later for checkout page
import { reducer as formReducer } from 'redux-form';
form: formReducer,
*/
