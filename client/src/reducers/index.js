import { combineReducers } from 'redux';
import itineraryReducerSource from './itinerary';
import pricingReducerSource from './pricing';


const allReducers = combineReducers({
    itineraryReducer: itineraryReducerSource,
    pricingReducer: pricingReducerSource,
});

export default allReducers;








/* probably needed later for checkout and/or contact page
import { reducer as formReducer } from 'redux-form';
form: formReducer,
*/
