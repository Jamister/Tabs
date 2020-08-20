import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import AddBlockButton from './AddBlockButton';
import expectExport from 'expect';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('AddBlockButton 1', () => {
    beforeAll(() => {
        useSelector.mockImplementation(() => (null))
    });

    it('should not crash AddBlockButton component', () => {
        const wrapper = shallow(
            <AddBlockButton part_id={1} />
        );
        expect(wrapper.find('button')).toHaveLength(1);
    });
});

// describe('AddBlockButton 2', () => {
// 	beforeAll(() => {
// 		useDispatch.mockImplementation(() => () => {})
// 	});

// 	it('should return click', () => {
// 		const wrapper = shallow(
// 			<AddBlockButton part_id={1} />
// 		);
// 		wrapper.find('button').simulate('click');
// 		expect(useDispatch).toHaveBeenCalledTimes(2);
// 	});
// });
