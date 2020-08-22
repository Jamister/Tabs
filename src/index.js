import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// styles
// import 'styles/foundation/foundation.scss';
// import 'styles/app.scss';
import 'styles/fonts.css';
import 'styles/button-more-type-antd.css';

import StoreProvider from 'utils/redux/StoreProvider';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const app = (
    <StoreProvider>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
