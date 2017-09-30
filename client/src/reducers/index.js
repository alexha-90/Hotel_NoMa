import { combineReducers } from 'redux';
import itineraryReducerSource from './itinerary';
import pricingReducerSource from './pricing';

const allReducers = combineReducers({
    itineraryReducer: itineraryReducerSource,
    pricingReducer: pricingReducerSource,
});

export default allReducers;
