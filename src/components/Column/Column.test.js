/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Column from './Column';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-css-modules', () => Column => Column);

const setup = (props = {}, state = null) => {
	return shallow(<Column {...props} />);
};

const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`);
};

test('Column render ok', () => {
	// const wrapper = setup();
	// expect(
	// 	findByTestAttr(wrapper, 'component-bookedition').length
	// ).toBe(1);
});

