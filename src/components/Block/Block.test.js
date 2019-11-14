/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Block from './Block';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-css-modules', () => Block => Block);

const setup = (props = {}, state = null) => {
	return shallow(<Block {...props} />);
};

const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

test('Block render ok', () => {
	// const wrapper = setup();
	// expect(
	// 	findByTestAttr(wrapper, 'component-bookedition').length
	// ).toBe(1);
});
