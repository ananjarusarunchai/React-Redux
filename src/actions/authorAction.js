import * as types  from './actionTypes';
import AuthorApi from '../api/mockAuthorAPI';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
    return function(dispatch){
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    }
}   