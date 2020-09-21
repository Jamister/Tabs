import 'tests/matchMedia.mock';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, wait, waitForElement, act } from '@testing-library/react';
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
    newData: jest.fn(() => ({
        data: {
            myTabs: [
                {
                    hashId: '4h3j4n',
                    title: 'MyTabTitle',
                    artist: '',
                    tuning: '',
                    private: false,
                }
            ],
        },
    })),
};

describe('MyTabs', () => {
    it('should not break', async () => {
        const { getByTestId } = render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <Router>
                    <MyTabs />
                </Router>
            </MockedProvider>,
        );

        await new Promise(resolve => setTimeout(resolve, 0));
        screen.getByText(/Loading.../i);
        // await new Promise(resolve => setTimeout(resolve, 0));

        const addBookMutationMock = mocks.newData;
        await wait(() => expect(addBookMutationMock).toHaveBeenCalled());
        screen.getByText(/Minhas tablaturas/i);

        // await waitForElement(() => getByTestId('lis'));
        // screen.getByText(/MyTabTitle/i);
        // console.log(screen);

        // screen.queryAllByText('Loading...');

        
        // expect(
        //     screen.queryAllByText('Loading...')
        // ).toHaveLength(0);
        // expect(
        //     screen.queryAllByText('MyTabTitle1')
        // ).toHaveLength(1);
    });

//   it("should show error in the card number field", async () => {
//     render(<App />);
//     const cardNumberInput = screen.getByLabelText("Card number");
//     fireEvent.change(cardNumberInput, { target: { value: "" } });
//     fireEvent.blur(cardNumberInput);
//     expect(
//       screen.queryAllByText("Please provide a valid credit card number")
//     ).toHaveLength(1);
//     fireEvent.change(cardNumberInput, { target: { value: "432565" } });
//     expect(
//       screen.queryAllByText("Please provide a valid credit card number")
//     ).toHaveLength(0);
//     fireEvent.blur(cardNumberInput);
//     expect(
//       screen.queryAllByText("Please provide a valid credit card number")
//     ).toHaveLength(1);
//   });
});
