import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import { DateRangePicker } from 'react-dates';
//import { Carousel } from 'react-responsive-carousel';
import 'react-dates/lib/css/_datepicker.css';


//carousel not working. images loaded stacked on each other.
// https://github.com/leandrowd/react-responsive-carousel


// https://stackoverflow.com/questions/28511207/react-js-onclick-event-handler


/*
calendar references:
https://github.com/airbnb/react-dates/tree/master/examples
https://www.npmjs.com/package/react-dates
http://airbnb.io/react-dates/?selectedKind=DateRangePicker

want to set default dates of today to tomorrow
 */



class Landing extends Component {


    // temporary room type retrieval
    excal(event) {
        alert('can\'t get data yet, excalibur');
    }
    nugg(event) {
        alert('can\'t get data yet, nugget');
    }

    // initial state for calendar
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            date: props.initialDate,
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ date });
        alert("test");
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }





    render() {
        return (
            <div className="landingMain">

                { /* User input to obtain: length of stay, # of adults*/ }
                <div className="userInput">
                    <div className="formArea">
                        <h4>A worthwhile rendezvous. Tell us about your stay...</h4>

                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />

                        <select name="numGuests" className="adultCount">
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                        </select>
                        <Button bsStyle="success" id="homeSearchButton" href="/results">Go!</Button>
                    </div>

                    { /*
                    <h2>Room type:</h2>
                    <Button
                        id="excalibur"
                        name="excalibur"
                        value="testval"
                        className="btn btn-primary"
                        onClick={this.excal.bind(this)}
                        >Excalibur
                    </Button>
                    <Button
                        id="nugget"
                        name="nugget"
                        value="testval"
                        className="btn btn-success"
                        onClick={this.nugg.bind(this)}
                        >Nugget
                    </Button>
                    */ }

                </div>

                <Jumbotron>
                    <h3>The best amenities. Hands down.</h3>
                    <p>World class meeting rooms, restaurant, and fitness facilities all on-site and complimentary for our guests.</p>
                    <p><Button Style="primary"><Link to="/amenities">Learn more</Link></Button></p>
                </Jumbotron>
                <div className="threeBlurbs">

                    <Grid>
                        <Row className="show-grid">
                            <Col sm={6} md={4}>
                                <p><h3>Hourly SFO shuttle service</h3><br/>We are at the heart of San Francisco. Market Street, close to BART. You can't beat us.Donec hendrerit tempor tellus. t, convallis nec, purus</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <p><h3>Complementary breakfast</h3><br/>ndrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <p><h3>Automatic late checkout</h3><br/>amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                        </Row>
                    </Grid>
                </div>



            </div>
        );
    }
}



export default Landing;
