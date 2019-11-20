import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingPage from './LoadingPage';

Enzyme.configure({ adapter: new Adapter() });

it('LoadingPage should render without crashing', () => {
	const wrapper = shallow(<LoadingPage />);
	const html_elem = wrapper.find('[data-test="loading-page-render"]');
	expect(html_elem).toHaveLength(1);
});
