import 'tests/matchMedia.mock';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';

import MyTabs from '../MyTabs';
import { MY_TABS } from 'modules/tab/api';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    }),
    useLocation: () => ({
        pathname: ''
    })
}));

const mocks = {
    request: {
        query: MY_TABS,
    },
    result: {
        data: {
            myTabs: [
                {
                    hashId: '4h3j4n',
                    title: 'MyTabTitle',
                    artist: 'My Artist 1',
                    tuning: 'e B G D A D',
                    instrument: 'guitar',
                    private: false,
                }
            ],
        },
    },
};

describe('MyTabs', () => {
    it('should not break', async () => {
        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <Router>
                    <MyTabs />
                </Router>
            </MockedProvider>,
        );
        screen.getByText(/Minhas tablaturas/i);
        await waitForElement(() => screen.queryAllByText('MyTabTitle'));
        await waitForElement(() => screen.getByText(/My Artist 1/i));
        await waitForElement(() => screen.getByText(/e B G D A D/i));
    });
});
