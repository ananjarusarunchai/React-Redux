import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('courseReducer', () => {
    it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            { id: 'A', title: 'A' },
            { id: 'B', title: 'B' }
        ];

        const newCourse = { title: 'C' };
        const action = actions.createCourseSuccess(newCourse);
        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('Should update course when passed UPDATE_COURSE_SUCCESS', () => {
        const initialState = [
            { id: 'A', title: 'A' },
            { id: 'B', title: 'B' },
            { id: 'C', title: 'C' },
        ];
        const courseUpdated = { id: 'C', title: 'New title C' };
        const action = actions.updateCourseSuccess(courseUpdated);
        const newState = courseReducer(initialState, action);

        expect(newState[2].title).toEqual('New title C');
        expect(newState[1].title).toEqual('B');
        expect(newState[0].title).toEqual('A');
        expect(newState.length).toEqual(3);

    });
});