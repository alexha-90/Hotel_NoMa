import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';


class App extends Component {
  render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header/>
                      <hr/>
                      <Landing/>
                  </div>
              </BrowserRouter>
          </div>
        );
  }
}

export default App;
