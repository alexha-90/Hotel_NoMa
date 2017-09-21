import { combineReducers } from 'redux';
import UserReducer from './users';
import userInputReducer from './userInput';
//import { reducer as formReducer } from 'redux-form';


const allReducers = combineReducers({
    users: UserReducer,
    userInput: userInputReducer,


    //form: formReducer,
});

export default allReducers;
