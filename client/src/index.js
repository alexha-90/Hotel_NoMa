import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import 'react-bootstrap';

// linking react to redux
import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
