import * as types from './actionTypes';
import * as peopleApi from '../../api/peopleApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadPeopleSucess = (people) => {
    return {type: types.LOAD_PEOPLE_SUCCESS, people}
}

export const loadPeople = (page) => {
    return function(dispatch){
        dispatch(beginApiCall());
        return peopleApi.getPeople(page)
        .then(people => {
            dispatch(loadPeopleSucess(people));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}
