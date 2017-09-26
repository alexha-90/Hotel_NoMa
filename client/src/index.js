import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import './styles/carousel.css';
import App from './App';
import 'react-bootstrap';

// linking react to redux
import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import showResults from './actions';
//import Landing from './components/Landing';

const store = createStore(allReducers);

//----------------------------------------------------------------//
// for learning and debugging. subscribe = listen to store

store.subscribe(() => {
    console.log("Current state of store is:", store.getState())
});

store.dispatch({type: "INC", payload: 1});
//----------------------------------------------------------------//



ReactDOM.render(
    <Provider store={ store }>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);

/*
console.log('stripe key is:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log('node env key is: ' + process.env.NODE_ENV);
console.log('google key is: ', process.env.REACT_APP_GOOGLE_MAPS_KEY);
*/