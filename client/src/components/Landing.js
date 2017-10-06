import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { Jumbotron, Button, Grid, Row, Col, Glyphicon } from 'react-bootstrap';


import InputCalendar from './subcomponents/landing/InputCalendar';
import { updateNumAdults } from '../actions';
import LandingCarousel from './subcomponents/landing/MainCarousel';
import { inputAdults } from './subcomponents/landing/InputAdults';

//bug: when number of adults changed, automatically cycles back to first pic
//feature: validate for max stay of 30 days.
//feature: remove need for alert message when blacked out date selected
//===============================================================================================//

class Landing extends Component {

    handleNumAdultChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }

    render () {
        return (
            <div className="fullImageLanding">


                <Grid style={{ width: '100%'}}>
                    <Row>
                        <Col sm={12} md={12}>
                            <img id="splashImageLanding" alt="backgroundSplash" src="https://static.pexels.com/photos/61111/pexels-photo-61111.jpeg" />

                            <div className="landingMainContainer">

                                <div className="centerWelcome">
                                    <h1>Welcome to Hotel NoMa</h1>
                                    <h4>A premier hotel in the heart of Downtown San Francisco, CA</h4>
                                </div>


                                <Grid>
                                    <Row>
                                        <Col sm={12} md={12}>
                                            <div className="calendarPicker">

                                                {/* Imported component - dynamic calendar */}
                                                <InputCalendar />
                                                {/* Imported component - dynamic calendar*/}


                                                {/* Imported component - adult guests input & submit button */}
                                                {inputAdults(this.props, this.handleNumAdultChange.bind(this))}
                                                {/* Imported component - adult guests input & submit button */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <div className="timeBanner">
                    The local time in San Francisco, CA is currently: {moment().utcOffset(-420).format('hh:mm a')}. Local temperature is TBD.

                </div>






                <div className="container">


                    <div className="userInput">
                        <h1 id="welcomeMsg">Welcome to Hotel NoMa</h1>

                        <div className="formArea">


                            <hr />
                            The local time in San Francisco, CA is currently: {moment().utcOffset(-420).format('hh:mm a')}. Local temperature is TBD.
                        </div>
                    </div>

                    <Jumbotron>
                        <h2>The best amenities. Hands down.</h2>
                        <p>Our hotel features a world-class auditorium, newly remodeled fitness facility, and the best downtown views of San Francisco's historic Market Street. Fantastic restaurants are plentiful and only short walks away. Public transportation via BART and MUNI are very accessible.</p>
                        <div className="learnMoreButton">
                            <Link to="/amenities"><Button bsStyle="success">Learn more</Button></Link>
                        </div>
                    </Jumbotron>

                    {/* Imported component - large image carousel */}
                    <LandingCarousel />
                    {/* Imported component - large image carousel */}

                    <div className="threeBlurbs">
                        <div className="blurbHeader">
                            <h2>Make your experience extraordinary with our optional amenities:</h2>
                        </div>
                        <Grid>
                            <Row>
                                <Col sm={4} md={4}>
                                    <div className="blurbBG1">
                                        <h3>SFO Shuttle</h3>
                                        <p>Simplify your travel experience by taking our shuttle directly from the San Francisco Airport to our hotel. We operate on a bi-hourly schedule and our courteous staff will always arrive early and be ready to handle your luggage.</p>
                                        <br />
                                        <h9><Glyphicon glyph="plane" /></h9>
                                    </div>
                                </Col>
                                <Col sm={4} md={4}>
                                    <div className="blurbBG2">
                                        <h3>Breakfast</h3>
                                        <p>Start your morning right with a delicious bite in our downstairs lobby. We have exquisite chefs that prepare fresh, quality breakfasts every morning. Meals can be brought up to your room and even delivered upon request!</p>
                                        <br />
                                        <h9><Glyphicon glyph="apple" /></h9>
                                    </div>
                                </Col>

                                <Col sm={4} md={4}>
                                    <div className="blurbBG1">
                                        <h3>Late Checkout</h3>
                                        <p>Late risers, busy morning people, and delayed flights victims rejoice. We offer a 2pm checkout for those that need their room longer than most. Our maids will not visit your room until after the allotted time has passed.</p>
                                        <br />
                                        <h9><Glyphicon glyph="lamp" /></h9>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(Landing);


/*

            <div className="fullImageLanding">


                <img id="splashImageLanding" alt="backgroundSplash" src="https://static.pexels.com/photos/61111/pexels-photo-61111.jpeg" />
                <div className="calendarPicker">

                    <Grid>
                        <Row>
                            <Col sm={1} md={4}><hr /></Col>
                            <Col sm={10} md={4}>
                                <div id="centeredHeading">
                                    <h3>Guest Rooms</h3>
                                </div>
                            </Col>
                            <Col sm={1} md={4}><hr /></Col>
                        </Row>
                    </Grid>



                </div>

 */