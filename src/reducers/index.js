import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import {lists, listsHasErrored, listsIsLoading} from './lists';

const reducers = combineReducers({
    lists,
    listsHasErrored,
    listsIsLoading
});

const middleware = [
    reduxThunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;