/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import Note from './Note';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Note 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => (null))
	});

	it('should not crash Note component', () => {
		const wrapper = shallow(
			<Note
				part_id={1}
				block_id={1}
				column_id={1}
				line_id={1}
			/>
		);
		const html_elem = wrapper.find('[data-test="note-render"]');
		expect(html_elem).toHaveLength(1);
	});
});

describe('Note 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			p: 1, b: 1, c: 1, l: 1,
		}))
	});

	it('should render NoteValue', () => {
		const wrapper = shallow(
			<Note
				part_id={1}
				block_id={1}
				column_id={1}
				line_id={1}
			/>
		);
		const html_elem = wrapper.find('NoteValue');
		expect(html_elem).toHaveLength(1);
	});
});
