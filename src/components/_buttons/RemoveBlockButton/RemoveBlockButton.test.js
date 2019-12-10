import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import RemoveBlockButton from './RemoveBlockButton';
import expectExport from 'expect';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('RemoveBlockButton 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => (null))
	});

	it('should not crash RemoveBlockButton component', () => {
		const wrapper = shallow(
			<RemoveBlockButton part_id={1} />
		);
		expect(wrapper.find('button')).toHaveLength(1);
	});
});
