/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Note from './Note';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-css-modules', () => Note => Note);

const setup = (props = {}, state = null) => {
	return shallow(<Note {...props} />);
};

const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

test('Note render ok', () => {
	// const wrapper = setup();
	// expect(
	// 	findByTestAttr(wrapper, 'note').length
	// ).toBe(1);
});
