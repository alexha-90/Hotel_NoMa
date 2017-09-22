import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNumAdults } from "../actions";

import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

//===============================================================================================//

class Landing extends Component {

    handleChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }

    render() {
        return (
            <div className="landingMain">

                <div className="userInput">
                    <div className="formArea">
                        <h4>A worthwhile rendezvous. Tell us about your stay...</h4>
                        { /* User inputs required: start of stay, end of stay, # of adults */ }
                        <form onSubmit={this.handleChange.bind(this)}>
                            <select name="numAdults" value={this.props.itinerary.numAdults} onChange={this.handleChange.bind(this)}>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                            </select>
                            <Button type="submit" bsStyle="success" id="homeSearchButton"><Link to="/results/:id">Go!</Link></Button>
                        </form>

                        <hr />
                        Local time. Local temperature is TBD. Number of adults (should match dropdown): {this.props.itinerary.numAdults}
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

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(Landing);