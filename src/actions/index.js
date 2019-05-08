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
                    name: doc.data().name
                })
            });
            console.log(lists)
            dispatch(listsIsLoading(false));
            dispatch(listsFetchSuccess(lists));
        }).catch(error => {
            console.error(error);
            dispatch(listsHasErrored(true));
        })
    }
}