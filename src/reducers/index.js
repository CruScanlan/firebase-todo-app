import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';

import {lists, listsHasErrored, listsIsLoading} from './lists';

const reducers = combineReducers({
    lists,
    listsHasErrored,
    listsIsLoading
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;