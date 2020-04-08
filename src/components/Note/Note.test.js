import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../tests/setupReduxTests';

// Store
import tab from '../../store/tab/store';

// Components
import Note from './Note';

describe('Note', () => {
	it('should not crash component', async () => {
		const props = {
			part_id: 1,
			block_id: 1,
			column_id: 1,
			line_id: 1,
		};
		const { getByTestId } = renderWithRedux(
			<Note {...props} />,
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


// describe('Note 1', () => {
// 	beforeAll(() => {
// 		useSelector.mockImplementation(() => (null))
// 	});

// 	it('should not crash Note component', () => {
// 		const wrapper = shallow(
// 			<Note
// 				part_id={1}
// 				block_id={1}
// 				column_id={1}
// 				line_id={1}
// 			/>
// 		);
// 		const html_elem = wrapper.find('[data-test="note-render"]');
// 		expect(html_elem).toHaveLength(1);
// 	});
// });

// describe('Note 2', () => {
// 	beforeAll(() => {
// 		useSelector.mockImplementation(() => ({
// 			p: 1, b: 1, c: 1, l: 1,
// 		}))
// 	});

// 	it('should render NoteValue', () => {
// 		const wrapper = shallow(
// 			<Note
// 				part_id={1}
// 				block_id={1}
// 				column_id={1}
// 				line_id={1}
// 			/>
// 		);
// 		const html_elem = wrapper.find('NoteValue');
// 		expect(html_elem).toHaveLength(1);
// 	});
// });
