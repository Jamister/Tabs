/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';

// sagas
import rootSaga from './combineSagas';

// reducers
import tab from 'modules/tab/store/reducers';

const reducers = combineReducers({
    tab,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [loggerMiddleware, sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const store = createStore(reducers, composedEnhancers);

sagaMiddleware.run(rootSaga);

const withStore = Page => (props) => (
    <Provider store={store}>
        <Page {...props} />
    </Provider>
);

export default withStore;
