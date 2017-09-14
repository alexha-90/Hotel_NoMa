import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';




// Import dynamic page routes for application
import Landing from './components/Landing';
import Login from './components/Login';
import ListResults from './components/Results';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

// Import static page routes for application
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Terms from './components/static/Terms';
import Amenities from './components/static/Amenities';
import About from './components/static/About';
import Page2 from './components/Page2';
//import FourOhFour from './components/static/FourOhFour';


//===============================================================================================//

class App extends Component {
  render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header/>
                      { /* Define dynamic page routes */ }
                      <Route exact path='/' component={Landing} />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/results' component={ListResults} />
                      <Route exact path='/checkout' component={Checkout} />
                      <Route exact path='/confirmation' component={Confirmation} />

                      { /* Define static page routes */ }
                      <Route exact path='/terms' component={Terms} />
                      <Route exact path='/amenities' component={Amenities} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/page2' component={Page2} />
                      <Footer/>
                  </div>
              </BrowserRouter>
          </div>
        );
  }
}

export default App;

// <Route path ='/' component={FourOhFour} />
