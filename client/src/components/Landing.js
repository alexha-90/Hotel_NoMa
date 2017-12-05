import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { Jumbotron, Button } from 'react-bootstrap';


import InputCalendar from './subcomponents/landing/InputCalendar';
import { updateNumAdults } from '../actions';
import LandingCarousel from './subcomponents/landing/MainCarousel';
import { inputAdults } from './subcomponents/landing/InputAdults';

// weather is static at the moment
//feature: validate for max stay of 30 days.
//feature: remove need for alert message when blacked out date selected
//===============================================================================================//

class Landing extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    handleNumAdultChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }


    render () {
        return (
            <div className="landingContainer">
                <div className="splashContent">
                    <div id="centerWelcomeAndCalendar">
                        <h1>Welcome to Hotel NoMa</h1>
                        <h4>A premier hotel in the heart of Downtown San Francisco, CA</h4>

                        <div id="calendarPicker">
                            {/* Imported component - dynamic calendar */}
                            <InputCalendar />
                            {/* Imported component - dynamic calendar*/}

                            {/* Imported component - adult guests input & submit button */}
                            {inputAdults(this.props, this.handleNumAdultChange.bind(this))}
                            {/* Imported component - adult guests input & submit button */}
                        </div>
                    </div>
                </div>

                <div className="weatherAndTimeBannerContainer">
                    <h1>
                        Local conditions in San Francisco, CA
                    </h1>
                    <h2>
                        {/* weather is static for right now */}
                        Time: {moment().utcOffset(-480).format('hh:mm a')} Weather: 68°F <img src="https://png.icons8.com/partly-cloudy-day/office/50" title="Partly Cloudy Day" alt="cloudWeather"/>
                    </h2>
                </div>

                <div className="jumbotronContainer">
                    <div>
                        <Jumbotron style={{ marginBottom: '0' }}>
                            <h2>The best amenities. Hands down.</h2>
                            <h4>
                                Our hotel features a world-class auditorium, newly remodeled fitness facility, and the best downtown views of
                                San Francisco's historic Market Street. Fantastic restaurants are plentiful and only short walks away.
                                Public transportation via BART and MUNI are very accessible.
                            </h4>
                            <br />
                            <div className="learnMoreButton">
                                <Link to="/amenities"><Button bsStyle="primary">Learn more</Button></Link>
                            </div>
                        </Jumbotron>
                    </div>
                </div>

                <div className="carouselContainer">
                    <div id="carouselLanding">
                    {/* Imported component - large image carousel */}
                    <LandingCarousel />
                    {/* Imported component - large image carousel */}
                    </div>
                </div>


                <div id="threeBlurbsContainer">

                    <h2 id="blurbHeader">Make your experience extraordinary</h2>
                    <br />

                    <div className="threeBlurbs">
                        <div id="leftBlurb">
                            <div className="blurbBG1">
                                <h3>Breakfast</h3>
                                <p>Start your morning right with a delicious bite in our downstairs lobby. We have exquisite chefs that prepare fresh, quality breakfasts every morning. Meals can be brought up to your room and even delivered upon request!</p>
                                <img src="https://png.icons8.com/toaster/color/70" alt="breakfast" title="Toaster" />
                            </div>
                        </div>
                        <div id="middleBlurb">
                            <div className="blurbBG2">
                                <h3>SFO Shuttle</h3>
                                <p>Simplify your travel experience by taking our shuttle directly from the San Francisco Airport to our hotel. We operate on a bi-hourly schedule and our courteous staff will always arrive early and be ready to handle your luggage.</p>
                                <img src="https://png.icons8.com/shuttle/color/70" alt="shuttleRide" title="Shuttle" />
                            </div>
                        </div>
                        <div id="rightBlurb">
                            <div className="blurbBG1">
                                <h3>Late Checkout</h3>
                                <p>Late risers, busy morning people, and delayed flights victims rejoice. We offer a 2pm checkout for those that need their room longer than most. Our maids will not visit your room until after the allotted time has passed.</p>
                                <img src="https://png.icons8.com/lamp/color/70" alt="lateCheckout" title="Lamp" />
                            </div>
                        </div>
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