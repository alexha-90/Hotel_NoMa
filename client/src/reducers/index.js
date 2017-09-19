import { combineReducers } from 'redux';
import UserReducer from './users';
import { reducer as reduxFormReducer } from 'redux-form';


const allReducers = combineReducers({
    //users: UserReducer
    form: reduxFormReducer
});

export default allReducers;
