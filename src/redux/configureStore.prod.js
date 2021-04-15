import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import client from '../graphql/client'

const configureStore = (initialState) => 
    createStore(rootReducer, initialState, applyMiddleware(client.middleware(), thunk))

export default configureStore;
