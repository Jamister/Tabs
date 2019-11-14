/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Part from './Part';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
	useDispatch: ()=> {},
	useSelector: () => ({
		all_ids: ['1-1', '1-2'],
		by_id: {
			'1-1': {
				part_id: 1,
				id: '1-1',
			},
			'1-2': {
				part_id: 1,
				id: '1-2',
			},
		},
	}),
}));

describe('Part', () => {
	it('should render Part component', () => {
		const wrapper = shallow(<Part part={{}} />);
		const html_elem = wrapper.find('[data-test="part-render"]');
		expect(html_elem).toHaveLength(1);
	});

	// it('dispatch search action to store', () => {
	// 	const actions = store.getActions();
	// 	expect(actions).toEqual([{ type: "SEARCH", query: "cream" }]);
	// });

	// it('should render Part component', () => {
	// 	const wrapper = mount(<Part part={{ id: 1 }} />);
	// 	const html_elem = wrapper.find('[data-test="part-render"]');
	// 	expect(html_elem).toHaveLength(1);
	// });
});

// import React from 'react';
// import Enzyme, { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import configureStore from "redux-mock-store";

// import * as ReactReduxHooks from "./react-redux-hooks";

// // Components
// import Part from './Part';

// Enzyme.configure({ adapter: new Adapter() });

// describe('Part', () => {
// 	let wrapper;
// 	let useEffect;
// 	let store;

// 	const mockUseEffect = () => {
// 		useEffect.mockImplementationOnce(f => f());
// 	};

// 	beforeEach(() => {
// 		store = configureStore()({
// 			recipies: [{id: 1, title: 'Ice Cream'}, {id: 2, title: 'Soup Cream'}, {id:3, title: 'Cream with fruits'}],
// 			isLoading: false,
// 			error: null
// 		});

// 		jest
// 			.spyOn(ReactReduxHooks, 'useSelector')
// 			.mockImplementation(state => store.getState());

// 		wrapper = shallow(<Part store={store} />);
// 	});

// 	describe("on start", () => {
// 		it("dispatch search action to store", () => {
// 			const actions = store.getActions();
// 			expect(actions).toEqual([{ type: "SEARCH", query: "cream" }]);
// 		});
// 	});

// 	it("should render RecipeItem components if gets recipies array from store", () => {
// 		expect(wrapper.find(RecipeItem)).toHaveLength(3);
// 	});
// });
