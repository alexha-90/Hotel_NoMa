import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm} from 'redux-form';


class Landing extends Component {

    // initial state for calendar

    constructor(props) {
        super(props);
        this.state = {
            numAdults: '1'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    // Temporary. Used to explicitly print form inputs
    onSubmit(event) {
        event.preventDefault();
        alert('Number of adults is: ' + this.state.numAdults);
        console.log(this.state);
    }


    handleChange(event) {
        this.setState({
            numAdults: event.target.value
        });
    }


    render() {
        return (
            <div className="landingMain">

                { /* User input required: start of stay, end of stay, # of adults */ }
                <div className="userInput">
                    <div className="formArea">
                        <h4>A worthwhile rendezvous. Tell us about your stay...</h4>

                        <form onSubmit={this.onSubmit}>
                            <select name="numAdults" value={this.state.numAdults} onChange={this.handleChange}>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                            </select>
                            <input type="submit" value="Submit"/>
                        </form>

                        <Button bsStyle="success" id="homeSearchButton" href="/results">Go!</Button>
                        <hr />
                        Local time. Local temperature
                    </div>

                </div>

                <Jumbotron>

                    <h3>The best amenities. Hands down.</h3>
                    <p>World class meeting rooms, restaurant, and fitness facilities all on-site and complimentary for our guests.</p>
                    <p><Button bsStyle="primary"><Link to="/amenities">Learn more</Link></Button></p>
                </Jumbotron>
                <div className="threeBlurbs">

                    <Grid>
                        <Row className="landingHighlights">
                            <Col sm={6} md={4}>
                                <h3>Hourly SFO shuttle service</h3><br/><p>We are at the heart of San Francisco. Market Street, close to BART. You can't beat us.Donec hendrerit tempor tellus. t, convallis nec, purus</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <h3>Complementary breakfast</h3><br/><p>ndrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis</p>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                            </Col>
                            <Col sm={6} md={4}>
                                <h3>Automatic late checkout</h3><br/><p>amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam</p>
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