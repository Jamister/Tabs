import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import NoteWidthSpace from './NoteWidthSpace';
import expectExport from 'expect';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('NoteWidthSpace 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => (null))
	});

	it('should not crash NoteWidthSpace component', () => {
		const wrapper = shallow(
			<NoteWidthSpace note_id={'1-1-1-1'} />
		);
		expect(wrapper.equals(null)).toBe(true);
	});
});

describe('NoteWidthSpace 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			value: '1',
		}))
	});

	it('should note value be 1', () => {
		const wrapper = shallow(
			<NoteWidthSpace note_id={'1-1-1-1'} />
		);
		expect(wrapper.find('div')).toHaveLength(1);
	});
});
