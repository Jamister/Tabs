/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';

// sagas
import rootSaga from './combineSagas';
// reducers
import combinedReducers from './combinedReducers';

const reducers = combineReducers(combinedReducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [loggerMiddleware, sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const store = createStore(reducers, composedEnhancers);

sagaMiddleware.run(rootSaga);

const StoreProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

StoreProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default StoreProvider;
