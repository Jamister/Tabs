import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../Column';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Column 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => (null))
	});

	it('should not crash Column component', () => {
		const wrapper = shallow(
			<Column column_full_id="" />
		);
		const html_elem = wrapper.find('[data-test="column-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Column 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ([
			1, 2, 3, 4, 5, 6,
		]))
	});

	it('should render 6 empty Notes', () => {
		const wrapper = shallow(
			<Column column_full_id="1-1-1" />
		);
		const html_elem = wrapper.find('[data-test="notes-render"]');
		expect(html_elem).toHaveLength(6);
	});
});
