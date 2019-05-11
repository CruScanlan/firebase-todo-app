import {firestore} from '../firebase';
import { list } from 'postcss';

export const LISTS_FETCH = 'lists_fetch';
export const LISTS_HAS_ERROED = 'lists_has_erroed';
export const LISTS_IS_LOADING = 'lists_is_loading';
export const LISTS_FETCH_SUCCESS = 'lists_fetch_success';

export function listsHasErrored(hasErrored) {
    return {
        type: LISTS_HAS_ERROED,
        hasErrored
    }
}

export function listsIsLoading(isLoading) {
    return {
        type: LISTS_IS_LOADING,
        isLoading
    }
}

export function listsFetchSuccess(lists) {
    return {
        type: LISTS_FETCH_SUCCESS,
        lists
    }
}

export function listsFetch() {
    return dispatch => {
        dispatch(listsIsLoading(true));

        firestore.collection('lists').get().then(snapshot => {
            const lists = [];
            snapshot.forEach(doc => {
                lists.push({
                    id: doc.id,
                    items: [],
                    itemsHasErrored: false,
                    itemsIsLoading: false,
                    name: doc.data().name
                })
            });
            dispatch(listsIsLoading(false));
            dispatch(listsFetchSuccess(lists));
        }).catch(error => {
            console.error(error);
            dispatch(listsHasErrored(true));
        })
    }
}

export const LIST_ITEMS_FETCH = 'list_items_fetch';
export const LIST_ITEMS_HAS_ERROED = 'list_items_has_erroed';
export const LIST_ITEMS_IS_LOADING = 'list_items_is_loading';
export const LIST_ITEMS_FETCH_SUCCESS = 'list_items_fetch_success';

export function listItemsHasErrored(listId, itemsHasErrored) {
    return {
        type: LIST_ITEMS_HAS_ERROED,
        listId,
        itemsHasErrored
    }
}

export function listItemsIsLoading(listId, itemsIsLoading) {
    return {
        type: LIST_ITEMS_IS_LOADING,
        listId,
        itemsIsLoading
    }
}

export function listItemsFetchSuccess(listId, items) {
    return {
        type: LIST_ITEMS_FETCH_SUCCESS,
        listId,
        items
    }
}

export function listItemsFetch(listId) {
    return dispatch => {
        dispatch(listItemsIsLoading(listId, true));

        firestore.collection('lists').doc(listId).collection('items').get().then(snapshot => {
            let items = [];
            snapshot.forEach(doc => {
                items.push({
                    id: doc.id,
                    completed: doc.data().completed,
                    name: doc.data().name
                })
            });
            dispatch(listItemsIsLoading(listId, false));
            dispatch(listItemsFetchSuccess(listId, items));
        }).catch(error => {
            console.error(error);
            dispatch(listItemsHasErrored(listId, true));
        })
    }
}