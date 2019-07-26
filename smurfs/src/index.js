import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// creates the store that will take in reducers and hold the state tree of the app
import { createStore, applyMiddleware } from 'redux';
// makes the store available to nested components wrapped in the connect() function
import { Provider } from 'react-redux';
// reducer
import reducer from './reducers';

// applyMiddleware to add thunk to store
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
