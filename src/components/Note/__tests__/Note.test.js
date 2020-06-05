import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../../tests/setupReduxTests';

// Store
import tab from '../../../store/tab/store';

// Components
import Note from '../Note';

describe('Note', () => {
	it('should not crash component', async () => {
		const props = {
			column_full_id: '1-1-1',
			line_id: 1,
		};
		const { getByTestId } = renderWithRedux(
			<Note {...props} />,
			{ initialState: { tab: tab } },
		);
	});
});
