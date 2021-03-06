import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutablrStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


const configureStore = (initialState) => {
    const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutablrStateInvariant())
        )
    )
}

export default configureStore;
