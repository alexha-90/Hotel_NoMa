import { combineReducers } from 'redux';
import UserReducer from './users';


const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;