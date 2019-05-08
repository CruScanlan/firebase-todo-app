import {
    LISTS_FETCH_SUCCESS,
    LISTS_HAS_ERROED,
    LISTS_IS_LOADING
} from '../actions/index';

export function listsHasErrored(state = false, action) {
    switch (action.type) {
        case LISTS_HAS_ERROED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function listsIsLoading(state = false, action) {
    switch (action.type) {
        case LISTS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function lists(state = [], action) {
    switch (action.type) {
        case LISTS_FETCH_SUCCESS:
            return action.lists;

        default:
            return state;
    }
}