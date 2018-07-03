import { combineReducers } from "redux";
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxCallsInprogress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    numAjaxCallsInprogress
});

export default  rootReducer;