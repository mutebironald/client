import * as types from '../actions/actionTypes.js';
const initialState = {
    people: []
}

const peopleReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOAD_PEOPLE_SUCCESS:
            return action.people;
        default:
            return state;
    }
}

export default peopleReducer;
