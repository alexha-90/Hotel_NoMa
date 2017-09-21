import { combineReducers } from 'redux';
//import UserReducer from './users';
import userInputReducer from './userInput';


const allReducers = combineReducers({
    //users: UserReducer,
    userInput: userInputReducer,
});

export default allReducers;








/* probably needed later for checkout page
import { reducer as formReducer } from 'redux-form';
form: formReducer,
*/
