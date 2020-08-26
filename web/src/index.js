import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

// styles
import 'styles/fonts.css';
import 'styles/button-more-type-antd.css';

import client from 'services';

import StoreProvider from 'utils/redux/StoreProvider';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const app = (
    <ApolloProvider client={client}>
        <StoreProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </StoreProvider>
    </ApolloProvider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
