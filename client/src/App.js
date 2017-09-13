import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import and define page routes for entire application
import Header from './components/Header';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Landing from './components/Landing';
import Amenities from './components/Amenities';
import ListResults from './components/Results';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
//import FourOhFour from './components/FourOhFour';
import Page2 from './components/Page2';

//===============================================================================================//

class App extends Component {
  render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route exact path='/' component={Landing} />
                      <Route exact path='/Terms' component={Terms} />
                      <Route exact path='/Page2' component={Page2} />
                      <Route exact path='/Amenities' component={Amenities} />
                      <Route exact path='/Results' component={ListResults} />
                      <Route exact path='/Checkout' component={Checkout} />
                      <Route exact path='/Confirmation' component={Confirmation} />
                      <Footer/>
                  </div>
              </BrowserRouter>
          </div>
        );
  }
}

export default App;

// <Route path ='/' component={FourOhFour} />
