import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';


// import dynamic page routes for application
import Landing from './components/Landing';
import ListResults from './components/Results';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import RetrieveConfirmation from './components/RetrieveConfirmation';
import DisplayReservation from './components/subcomponents/retrieveConfirmation/DisplayReservation';
import DisplayAllReservations from './components/subcomponents/retrieveConfirmation/DisplayAllReservations';


// import static page routes for application
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Terms from './components/static/Terms';
import Amenities from './components/static/Amenities';
import About from './components/static/About';
import ContactUs from './components/ContactUs';

// test page(s)
import BlankPageTemplate from './components/static/Page2';
//import FourOhFour from './components/static/FourOhFour';


//===============================================================================================//

class App extends Component {
  render() {
        return (
          <div>
              <BrowserRouter>
                  <div>

                      <Header/>

                      { /* Define dynamic page routes */ }
                      <Route path='/results/' component={ListResults} />
                      <Route exact path='/' component={Landing} />
                      <Route exact path='/checkout' component={Checkout} />
                      <Route exact path='/confirmation' component={Confirmation} />
                      <Route exact path='/reservations' component={RetrieveConfirmation} />
                      <Route exact path='/displayReservation' component={DisplayReservation} />
                      <Route exact path='/displayAllReservations' component={DisplayAllReservations} />


                      { /* Define static page routes */ }
                      <Route exact path='/terms' component={Terms} />
                      <Route exact path='/amenities' component={Amenities} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/contact' component={ContactUs} />

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