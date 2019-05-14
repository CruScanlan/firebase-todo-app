import firebase, {firestore} from '../firebase';

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

export const LISTS_SET_NAME = 'lists_set_name';
export const LISTS_ADD_LIST = 'lists_add_list';
export const LISTS_ADD_LIST_SUCCESS = 'lists_add_list_success';
export const LISTS_SET_OLD = 'lists_set_old';

export function listsSetName(listId, name) {
    firestore.collection('lists').doc(listId).update({name});

    return {
        type: LISTS_SET_NAME,
        listId
    }
}

export function listsAddListSuccess(list) {
    return {
        type: LISTS_ADD_LIST_SUCCESS,
        list
    }
}

export function listsAddList() {
    return dispatch => {
        firestore.collection('lists').add({
            name: ''
        }).then(ref => {
            ref.get().then(snapshot => {
                dispatch(listsAddListSuccess({
                    id: ref.id,
                    ...snapshot.data()
                }));
            });
        }).catch(error => {
            console.error(error);
        })
    }
}

export function listsSetOld(listId) {
    return {
        type: LISTS_SET_OLD,
        listId
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

        firestore.collection('lists').doc(listId).collection('items').orderBy('created').get().then(snapshot => {
            let items = [];
            snapshot.forEach(doc => {
                items.push({
                    id: doc.id,
                    completed: doc.data().completed,
                    name: doc.data().name,
                    created: doc.data().created
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

export const LIST_ITEMS_SET_COMPLETED = 'list_items_set_completed';
export const LIST_ITEMS_ADD = 'list_items_add';
export const LIST_ITEMS_ADD_SUCCESS = 'list_items_add_success';

export function listItemsSetCompleted(listId, itemId, completed) {
    firestore.collection('lists').doc(listId).collection('items').doc(itemId).update({completed});

    return {
        type: LIST_ITEMS_SET_COMPLETED,
        listId,
        itemId,
        completed
    }
}

export function listItemsAddSuccess(listId, item) {
    return {
        type: LIST_ITEMS_ADD_SUCCESS,
        listId,
        item
    }
}

export function listItemsAdd(listId, name) {
    return dispatch => {
        firestore.collection('lists').doc(listId).collection('items').add({
            name,
            created: firebase.firestore.Timestamp.now(),
            completed: false
        }).then(ref => {
            dispatch(listItemsAddSuccess(listId, {id: ref.id, name, completed: false}));
        })
    }
}