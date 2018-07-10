import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';
import { Provider } from 'react-redux';
import { saveCourse } from '../../actions/courseActions';

describe('Manage Course Page', () => {

    it('sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve(); } },
            course: {
                id: '',
                watchHref: '',
                title: '',
                authorId: '',
                length: '',
                category: ''
            }
        };
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButon = wrapper.find('input').last();
        expect(saveButon.prop('type')).toBe('submit');
        saveButon.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });

})
