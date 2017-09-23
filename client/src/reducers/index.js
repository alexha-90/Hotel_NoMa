import { combineReducers } from 'redux';
//import UserReducer from './users';
import itineraryReducerSource from './itinerary';
import pricingReducerSource from './pricing';


const allReducers = combineReducers({
    //users: UserReducer,
    itineraryReducer: itineraryReducerSource,
    pricingReducer: pricingReducerSource,
});

export default allReducers;








/* probably needed later for checkout page
import { reducer as formReducer } from 'redux-form';
form: formReducer,
*/
