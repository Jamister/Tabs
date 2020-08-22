import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import removePropTypesAlerts from 'tests/removePropTypesAlerts';
import renderWithRedux from 'tests/setupReduxTests';

// Store
import tab from 'modules/tab/store/store';

// Components
import TablaturePart from '../TablaturePart';

describe('TablaturePart', () => {
    it('should not crash with blank props', async () => {
        removePropTypesAlerts(jest);
        renderWithRedux(
            <TablaturePart />,
            { initialState: {} },
        );
    });

    it('should render blocks', async () => {
        const mocked_store = {
            ...tab,
            parts: {
                all_ids: [1],
                by_id: {
                    1: { type: 'tablature' },
                },
            },
            blocks: {
                all_ids: ['1-1', '1-2'],
                by_id: {
                    '1-1': { id: '1-1' },
                    '1-2': { id: '1-2' },
                },
            },
        };
        renderWithRedux(
            <TablaturePart part_id="1" />,
            { initialState: { tab: mocked_store } },
        );
        const block_end = await screen.getAllByTestId('blockend-render');
        const part_end = await screen.getAllByTestId('partend-render');
        expect(block_end).toHaveLength(1);
        expect(part_end).toHaveLength(1);
    });
});