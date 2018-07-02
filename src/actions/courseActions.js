import * as types  from './actionTypes';
import CourseApi from '../api/mockCourseAPI';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses}
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course}
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course}
}

export function loadCourses() {
    return function(dispatch){
        return CourseApi.getAllCourses().then(course => {
            dispatch(loadCoursesSuccess(course));
        }).catch(error => {
            throw(error);
        });
    };
}   

export function saveCourse(course) {
    return function(dispatch, getState){
        return CourseApi.saveCourse(course).then(saveCourses => {
            course.id ? dispatch(updateCourseSuccess(saveCourses)) :
             dispatch(createCourseSuccess(saveCourses)) ;
        }).catch(error => {
            throw(error);
        });
    };
}   