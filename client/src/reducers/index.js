import { combineReducers } from 'redux';
import itineraryReducerSource from './itinerary';
import pricingReducerSource from './pricing';
import itineraryViewSource from './itineraryView';

const allReducers = combineReducers({
    itineraryReducer: itineraryReducerSource,
    itineraryView: itineraryReducerSource,
    pricingReducer: pricingReducerSource,
});

export default allReducers;
