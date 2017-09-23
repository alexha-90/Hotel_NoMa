import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNumAdults } from "../actions";

import { Jumbotron, Button, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class Landing extends Component {

    handleChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }

    render () {
        return (
            <div className="container">

                {/*
                <div className="extended-content-container">
                    <div className="extended-content">
                    */}

                        <div className="userInput">
                            <div className="formArea">
                                <h4>Welcome to Hotel NoMa. We are a premier hotel located in the heart of San Francisco. Tell us about your stay...</h4>
                                { /* User inputs required: start of stay, end of stay, # of adults */ }
                                <form onSubmit={this.handleChange.bind(this)}>
                                    <select name="numAdults" value={this.props.itinerary.numAdults} onChange={this.handleChange.bind(this)}>
                                        <option value="1">1 Adult</option>
                                        <option value="2">2 Adults</option>
                                        <option value="3">3 Adults</option>
                                        <option value="4">4 Adults</option>
                                    </select>
                                    <Link to="/results/:id"><Button type="submit" bsStyle="success" id="homeSearchButton">Go!</Button></Link>
                                </form>

                                <hr />
                                Local time. Local temperature is TBD. Number of adults (should match dropdown): {this.props.itinerary.numAdults}
                            </div>
                        </div>

                        {/*
                    </div>
                </div>
                */}

                <Jumbotron>
                    <h2>The best amenities. Hands down.</h2>
                    <p>Our hotel features a world-class auditorium, newly remodeled fitness facility, and the best downtown views of San Francisco's historic Market Street. Fantastic restaurants are plentiful and only short walks away. Public transportation via BART and MUNI are very accessible.</p>
                    <div className="learnMoreButton">
                        <Link to="/amenities"><Button bsStyle="success">Learn more</Button></Link>
                    </div>
                </Jumbotron>

                <div>
                    <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                        <div>
                            <img src="http://embassysuites3.hilton.com/resources/media/es/HSVESES/en_US/img/shared/full_page_image_gallery/main/ES_extnight001_2_712x342_FitToBoxSmallDimension_Center.jpg" alt="temp1"/>
                        </div>
                        <div>
                            <img src="http://embassysuites3.hilton.com/resources/media/es/HSVESES/en_US/img/shared/full_page_image_gallery/main/ES_extnight001_2_712x342_FitToBoxSmallDimension_Center.jpg" alt="temp2"/>
                        </div>
                        <div>
                            <img src="http://embassysuites3.hilton.com/resources/media/es/HSVESES/en_US/img/shared/full_page_image_gallery/main/ES_extnight001_2_712x342_FitToBoxSmallDimension_Center.jpg" alt="temp3"/>
                        </div>
                    </Carousel>
                </div>



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
                    <Grid>
                        <Row>
                            <Col sm={6} md={4}>
                                <div className="highlightText">
                                    <h3>Hourly SFO shuttle service</h3><br/><p>We are at the heart of San Francisco. Market Street, close to BART. You can't beat us.Donec hendrerit tempor tellus. t, convallis nec, purus</p>
                                </div>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <div className="highlightText">
                                <h3>Complementary breakfast</h3><br/><p>ndrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis</p>
                                </div>
                                    <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <h3>Automatic late checkout</h3><br/><p>amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                        </Row>
                    </Grid>
 */