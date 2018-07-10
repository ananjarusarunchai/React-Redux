import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock'; //mocking http call
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('Should create a CREATE_COURSE_SUCCESS action', () => {
            const course = { id: 'clean-code', title: 'Clean Code' };
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };
            const action = courseActions.createCourseSuccess(course);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('Async Action', () => {
        const middleware = [thunk];
        const nockStore = configureMockStore(middleware);

        it('Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
            // Here's an example call to nock.
            // nock('http://example.com/')
            // .get('/courses')
            // .reply(200, {body: {course: [{id: 'clean-code', title: 'Clean Code'}]}}) 
            const expectedActions = [
                {type: types.BEGIN_AJAX_CALL},
                {type: types.LOAD_COURSES_SUCCESS, body : { courses: [{id: 'clean-code', title: 'Clean Code'}] }},
            ];

            const store = nockStore({course: []}, expectedActions);
            store.dispatch(courseActions.loadCourses()).then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
                done();
            }).catch((err) => {});
        });

        afterEach(() => {
            nock.cleanAll();
        })
    })

});



