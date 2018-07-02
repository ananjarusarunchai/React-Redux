import * as types  from './actionTypes';
import AuthorApi from '../api/mockAuthorAPI';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
    return function(dispatch){
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    }
}   