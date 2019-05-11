import _ from 'lodash';

import {
    LISTS_FETCH_SUCCESS,
    LISTS_HAS_ERROED,
    LISTS_IS_LOADING,
    LIST_ITEMS_HAS_ERROED,
    LIST_ITEMS_IS_LOADING,
    LIST_ITEMS_FETCH_SUCCESS
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

        case LIST_ITEMS_FETCH_SUCCESS:
            return state.map(list => {
                if(list.id !== action.listId) return list;
                return Object.assign({}, list, {
                    items: action.items
                });
            })

        case LIST_ITEMS_HAS_ERROED:
            return state.map(list => {
                if(list.id !== action.listId) return list;
                return Object.assign({}, list, {
                    itemsHasErrored: action.itemsHasErrored
                });
            })

        case LIST_ITEMS_IS_LOADING:
            return state.map(list => {
                if(list.id !== action.listId) return list;
                return Object.assign({}, list, {
                    itemsIsLoading: action.itemsIsLoading
                });
            })

        default:
            return state;
    }
}