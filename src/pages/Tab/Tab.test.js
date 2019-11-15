/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Tab from './Tab';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Tab', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({}))
	});

	it('should not crash Tab component', () => {
		const wrapper = shallow(<Tab />);
		const html_elem = wrapper.find('[data-test="tab-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Tab', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			all_ids: [],
			by_id: {},
		}))
	});

	it('should render Tab component', () => {
		const wrapper = shallow(<Tab />);
		const html_elem = wrapper.find('[data-test="tab-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Tab 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			all_ids: [1, 2],
			by_id: {
				1: { id: 1 },
				2: { id: 2 },
			},
		}))
	});

	it('should render Tab with parts', () => {
		const wrapper = shallow(<Tab />);
		const html_elem = wrapper.find('[data-test="parts-render"]');
		expect(html_elem).toHaveLength(2);
	});
});
