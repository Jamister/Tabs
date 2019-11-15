/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Block from './Block';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Block 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({}))
	});

	it('should not crash Block component', () => {
		const wrapper = shallow(
			<Block
				part_id="1"
				block={{}}
			/>
		);
		const html_elem = wrapper.find('[data-test="block-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Block 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			all_ids: [
				'1-1-1',
				'1-1-2',
				'1-1-3',
			],
			by_id: {
				'1-1-1': {
					part_id: 1,
					block_id: 1,
					id: '1-1-1',
				},
				'1-1-2': {
					part_id: 1,
					block_id: 1,
					id: '1-1-2',
				},
				'1-1-3': {
					part_id: 1,
					block_id: 1,
					id: '1-1-3',
				},
			},
		}))
	});

	it('should render 3 Columns', () => {
		const wrapper = shallow(
			<Block
				part_id="1"
				block={{
					part_id: 1,
					id: '1-1',
				}}
			/>
		);
		const html_elem = wrapper.find('[data-test="columns-render"]');
		expect(html_elem).toHaveLength(3);
	});
});
