import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import './styles/carousel.css';
import App from './App';
import 'react-bootstrap';
//import axios from 'axios';

// linking react to redux
import allReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider
        store={ store }>
        <App />
    </Provider>,
    document.querySelector('#root')
);

export default store;