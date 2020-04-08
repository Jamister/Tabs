import '../../tests/matchMedia.mock';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import renderWithRedux from '../../tests/setupReduxTests';

// Store
import tab from '../../store/tab/store';

// Components
import Tab from './Tab';

describe('Tab', () => {
	it('should not crash component', async () => {
		const { getByTestId } = renderWithRedux(
			<Router><Tab /></Router>,
			{ initialState: { tab: tab } },
		);
	});

	// it('should press number 2', async () => {
	// 	const { getByTestId } = renderWithRedux(
	// 		<Router><Tab /></Router>,
	// 		{ initialState: { tab: tab } },
	// 	);

	// 	const wrapper = getByTestId('wrapper');
	// 	fireEvent.keyDown(wrapper, { key: '2', code: '50' });
	// 	expect(getByTestId('tab-button-active')).toHaveTextContent('Vendas');
	// });
});
