import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import PropTypes from 'prop-types';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux'

import reducers from './reducers/index'

import App from './App'

const loggerMiddleware = createLogger();
const store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware) 
);
ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider> ,document.getElementById('root'))