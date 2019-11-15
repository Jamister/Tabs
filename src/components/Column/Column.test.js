import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Column from './Column';

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
			<Column
				part_id={1}
				block_id={1}
				column={{}}
			/>
		);
		const html_elem = wrapper.find('[data-test="column-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

// describe('Block 2', () => {
// 	beforeAll(() => {
// 		useSelector.mockImplementation(() => ({
// 			all_ids: [
// 				'1-1-1',
// 				'1-1-2',
// 				'1-1-3',
// 			],
// 			by_id: {
// 				'1-1-1': {
// 					part_id: 1,
// 					block_id: 1,
// 					id: '1-1-1',
// 				},
// 				'1-1-2': {
// 					part_id: 1,
// 					block_id: 1,
// 					id: '1-1-2',
// 				},
// 				'1-1-3': {
// 					part_id: 1,
// 					block_id: 1,
// 					id: '1-1-3',
// 				},
// 			},
// 		}))
// 	});

// 	it('should render 3 Columns', () => {
// 		const wrapper = shallow(
// 			<Block
// 				part_id="1"
// 				block={{
// 					part_id: 1,
// 					id: '1-1',
// 				}}
// 			/>
// 		);
// 		const html_elem = wrapper.find('[data-test="columns-render"]');
// 		expect(html_elem).toHaveLength(3);
// 	});
// });
