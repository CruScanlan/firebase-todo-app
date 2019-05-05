import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';

const reducers = combineReducers({
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;