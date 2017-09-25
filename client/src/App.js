import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';


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
//import FourOhFour from './components/static/FourOhFour';

// testing pages
import BlankPageTemplate from './components/static/Page2';


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
                      <Route exact path='/results/:id' component={ListResults} />
                      <Route exact path='/checkout' component={Checkout} />
                      <Route exact path='/confirmation' component={Confirmation} />
                      {/*
                      <Route exact path='/confirmation' component={Confirmation} />
                      */}

                      { /* Define static page routes */ }
                      <Route exact path='/terms' component={Terms} />
                      <Route exact path='/amenities' component={Amenities} />
                      <Route exact path='/about' component={About} />

                      { /* Define test page routes */ }
                      <Route path='/blank' component={BlankPageTemplate} />

                      <Footer/>
                  </div>
              </BrowserRouter>
          </div>
        );
  }
}

export default connect(null, actions)(App);