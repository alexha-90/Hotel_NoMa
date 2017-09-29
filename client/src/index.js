import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import './styles/carousel.css';
import App from './App';
import 'react-bootstrap';

// linking react to redux
import allReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

//----------------------------------------------------------------//
//****************************************************************//
// for learning and debugging. subscribe = listen to store

store.subscribe(() => {
    console.log("Current state of store is:", store.getState())
});

store.dispatch({type: "INC", payload: 1});


window.axios = axios;
//****************************************************************//
//----------------------------------------------------------------//



ReactDOM.render(
    <Provider store={ store }>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);