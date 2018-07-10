import expect from 'expect';
import { authorFormattedForDropDown } from './selectors';

describe('Author Selectors', () => {
    describe('authorFormattedForDropDown', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                { id: 'scot-allen', firstName: 'Scott', lastName: 'Allen'},
            ];

            const expected = [
                { value: 'cory-house', text: 'Cory House'},
                { value: 'scot-allen', text: 'Scott Allen'},
            ];

            expect(authorFormattedForDropDown(authors)).toEqual(expected);
        })
    })
})