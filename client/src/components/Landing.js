import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';


import { Jumbotron, Button, Grid, Row, Col, Glyphicon, Form, FormGroup, FormControl } from 'react-bootstrap';

import { updateNumAdults } from "../actions";


//bug: when number of adults changed, automatically cycles back to first pic. May not be fixable
//===============================================================================================//

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: null,
            to: null,
            selectedDays: [],
        }
    }

    handleResetClick = event => {
        event.preventDefault();
        this.setState({
            from: null,
            to: null,
            selectedDays: []
        });
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        this.state.selectedDays.push(range);
    };






    handleChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }

    render () {
        console.log(this.state);
        return (
            <div className="container">

                <img id="citySkyline" alt="citySkyline" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F25583989%2F101442659479%2F1%2Foriginal.jpg?s=f5f3b6dd921089d2208a4fa7034f7407" />

                <div className="userInput">
                    <h1 id="welcomeMsg">Welcome to Hotel NoMa</h1>

                    <div className="formArea">
                        { /* User inputs required: start of stay, end of stay, # of adults */ }
                        <div>
                            {!this.state.from && !this.state.to && <p>Interested in lodging with us? Tell us when you plan on visiting...</p>}
                            {this.state.from && !this.state.to && <p>How delightful. Now when do you plan on departing?</p>}
                            {this.state.from &&
                            this.state.to &&
                            <p>
                                You will be staying from
                                {' '}
                                {moment(this.state.from).format('L')}
                                {' '}
                                to
                                {' '}
                                {moment(this.state.to).format('L')}
                                . Is this correct?
                                {' '}<a href="." onClick={this.handleResetClick}>(change)</a>
                            </p>}
                            <div className="calendar">
                                <DayPicker
                                    numberOfMonths={2}
                                    fromMonth={new Date(moment())}
                                    toMonth={new Date(moment().add(2, 'months'))}
                                    selectedDays={this.state.selectedDays}
                                    onDayClick={this.handleDayClick}
                                    fixedWeeks
                                />
                            </div>
                        </div>


                        <Form inline onSubmit={this.handleChange.bind(this)}>
                            <FormGroup controlId="formControlsSelect" bsSize="large">
                                <FormControl name="numAdults" value={this.props.itinerary.numAdults} onChange={this.handleChange.bind(this)} componentClass="select">
                                    <option value="1">1 Adult</option>
                                    <option value="2">2 Adults</option>
                                    <option value="3">3 Adults</option>
                                    <option value="4">4 Adults</option>
                                </FormControl>
                            </FormGroup>
                            {' '}
                            <Link to="/results/:id"><Button type="submit" bsStyle="success" bsSize="large">Go!</Button></Link>
                        </Form>

                        <hr />
                        The local time in San Francisco, CA is: {moment().utcOffset(-420).format('hh:mm a')}. Local temperature is TBD. Number of adults (should match dropdown): {this.props.itinerary.numAdults}
                    </div>




                </div>


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
                            <img alt="temp1" src="https://images.trvl-media.com/hotels/1000000/700000/690700/690688/690688_4_z.jpg" />
                        </div>
                        <div>
                            <img alt="temp2" src="https://images.trvl-media.com/hotels/16000000/15830000/15822500/15822448/c0b95839_z.jpg" />
                        </div>
                        <div>
                            <img alt="temp3" src="https://exp.cdn-hotels.com/hotels/18000000/17930000/17924300/17924225/dfea48a7_z.jpg" />
                        </div>
                        <div>
                            <img alt="temp4" src="https://exp.cdn-hotels.com/hotels/16000000/15830000/15822500/15822448/07e0aea9_z.jpg" />
                        </div>
                        <div>
                            <img alt="temp5" src="https://storage.googleapis.com/cdncontent/web2/crestonbarkly/images/slider/crest-on-barkly-hotel-room-st-kilda-10.jpg" />
                        </div>
                        <div>
                            <img alt="temp6" src="https://static1.squarespace.com/static/52e665a0e4b0b788a312e25b/53038575e4b0f8636b5f97a9/53038576e4b07a6f640a3911/1392739703363/hotel-chelton-photos-rooftop-terrace-header.jpg" />
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