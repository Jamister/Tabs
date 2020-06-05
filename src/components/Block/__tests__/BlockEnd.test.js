import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector } from 'react-redux';
import BlockEnd from '../BlockEnd';

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
			<BlockEnd block_full_id="1-1" />
		);
		const html_elem = wrapper.find('[data-test="blockend-render"]');
		expect(html_elem).toHaveLength(1);
	});
});
