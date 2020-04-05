import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducers
import combined_reducers from '../utils/redux/combinedReducers';

const reducers = combineReducers(combined_reducers);

function renderWithRedux(
	comp,
	{ initialState, store = createStore(reducers, initialState) } = {},
) {
	return {
		...render(<Provider store={store}>{comp}</Provider>),
		store,
	};
}

export default renderWithRedux;
