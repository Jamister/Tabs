/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Part from './Part';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Part 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({}))
	});

	it('should not crash Part component', () => {
		const wrapper = shallow(<Part part={{}} />);
		const html_elem = wrapper.find('[data-test="part-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Part 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			all_ids: ['1-1', '1-2'],
			by_id: {
				'1-1': {
					part_id: 1,
					id: '1-1',
				},
				'1-2': {
					part_id: 1,
					id: '1-2',
				},
			},
		}))
	});

	it('should find Blocks components', () => {
		const wrapper = shallow(<Part part={{ id: 1 }} />);
		const html_elem = wrapper.find('[data-test="blocks-render"]');
		expect(html_elem).toHaveLength(2);
	});
});
