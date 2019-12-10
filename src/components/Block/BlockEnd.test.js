import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector } from 'react-redux';
import BlockEnd from './BlockEnd';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
}));

describe('BlockEnd 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({}))
	});

	it('should not crash BlockEnd component', () => {
		const wrapper = shallow(
			<BlockEnd
				part_id={1}
				block_id={1}
			/>
		);
		const html_elem = wrapper.find('[data-test="blockend-render"]');
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
