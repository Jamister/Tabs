import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducers
import tab from '../store/tab/reducers';

const reducers = combineReducers({ tab });

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
