import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux';
import NoteValue from './NoteValue';
import expectExport from 'expect';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('NoteValue 1', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => (null))
	});

	it('should not crash NoteValue component', () => {
		const wrapper = shallow(
			<NoteValue note_id={'1-1-1-1'} />
		);
		expect(wrapper.equals(null)).toBe(true);
	});
});

describe('NoteValue 2', () => {
	beforeAll(() => {
		useSelector.mockImplementation(() => ({
			value: '21',
		}))
	});

	it('should note value be 21', () => {
		const wrapper = shallow(
			<NoteValue note_id={'1-1-1-1'} />
		);
		expect(wrapper.equals(<span>21</span>)).toBe(true);
	});
});
