import { combineReducers } from 'redux';
import people from './peopleReducer';
import apiCallsInProgress from './apiStatusReducer'


const rootReducer = combineReducers({
    people,
    apiCallsInProgress
});
export default rootReducer;
