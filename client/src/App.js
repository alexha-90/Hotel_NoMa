import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// page linking imports
import Header from './components/Header';
import Footer from "./components/Footer";
import Landing from './components/Landing';
import Amenities from './components/Amenities';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

////////////////////////////////////////////////////////////////////////////////////////////////


class App extends Component {

  render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route exact path='/' component={Landing} />
                      <Route exact path='/Page1' component={Page1} />
                      <Route exact path='/Page2' component={Page2} />
                      <Route exact path='/Amenities' component={Amenities} />
                      <Footer/>
                  </div>
              </BrowserRouter>
          </div>
        );
  }
}

export default App;