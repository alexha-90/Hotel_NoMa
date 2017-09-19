import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import 'react-bootstrap';

// linking react to redux
import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import showResults from './actions';
import Landing from './components/Landing';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <App />

        </div>
    </Provider>,
    document.getElementById('root')
);


/*

div

<App />
 */