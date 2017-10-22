import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';

//===============================================================================================//


class Confirmation extends Component {
    render() {
        const replyEmail = 'hotelnoma@example.com';
        let emailRef = 'mailto:' + replyEmail + '?subject=Inquiry about Reservation#' + this.props.itinerary.enterDate;
        window.scrollTo(0, 0);

        return (

            <div className="container">

                <div>
                    <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Confirmation</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>


                <div id="confirmationContainer">
                    <h4>Your reservation has been booked! We hope you look forward to your stay at Hotel NoMa, San Francisco. A copy of your receipt has been
                        sent to your email ({this.props.itinerary.email}). Your stay confirmation number is #{this.props.itinerary.confirmationNumber}.
                        Please feel free to contact us by phone at (555) 415-5104 or by email at <a href={emailRef}>hotelnomaSF@gmail.com</a> if
                        you have any questions or concerns. We look forward to your stay!
                    </h4>
                    <br />

                    <p>
                        Like Hotel NoMa? Follow us on social media to find out about exclusive promotions and events:
                        <br />
                        <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
                            <img src="https://png.icons8.com/facebook/dusk/40" title="Facebook" alt="facebook"/>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a target="_blank" href="https://www.twitter.com" rel="noopener noreferrer">
                            <img src="https://png.icons8.com/twitter/dusk/40" title="Twitter" alt="twitter"/>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                            <img src="https://png.icons8.com/instagram-old/dusk/40" title="Instagram Old" alt="instagram"/>
                        </a>
                    </p>
                </div>

                <div className="itineraryTable">

                    <h3>Your Itinerary:</h3>
                    <Table striped bordered condensed>
                        <tbody>
                        <tr>
                            <td>Confirmation number</td>
                            <td id="costAlignRight">{this.props.itinerary.confirmationNumber}</td>
                        </tr>
                        <tr>
                            <td>Email address</td>
                            <td id="costAlignRight">{this.props.itinerary.email}</td>
                        </tr>
                        <tr>
                            <td>Time at booking</td>
                            <td id="costAlignRight">{this.props.itinerary.bookTime}</td>
                        </tr>
                        <tr>
                            <td>Total cost of stay</td>
                            <td id="costAlignRight">${this.props.itinerary.totalCostOfStay}</td>
                        </tr>
                        <tr>
                            <td>Room type</td>
                            <td id="costAlignRight">{this.props.itinerary.roomType}</td>
                        </tr>
                        <tr>
                            <td>Number of adult guests</td>
                            <td id="costAlignRight">{this.props.itinerary.numAdults}</td>
                        </tr>
                        <tr>
                            <td>Check-in Date:</td>
                            <td id="costAlignRight">{this.props.itinerary.enterDate}</td>
                        </tr>
                        <tr>
                            <td>Check-out Date</td>
                            <td id="costAlignRight">{this.props.itinerary.exitDate}</td>
                        </tr>
                        <tr>
                            <td>Length of stay</td>
                            <td id="costAlignRight">{this.props.itinerary.numNights} nights</td>
                        </tr>
                        </tbody>
                    </Table>

                    <Table striped bordered condensed>
                        <tbody>
                        <tr>
                            <td><h4>Optional addons:</h4></td>
                            <td>{' '}</td>

                        </tr>
                        <tr>
                            <td>Breakfast</td>
                            <td id="costAlignRight">{this.props.itinerary.breakfast.toString()}</td>
                        </tr>
                        <tr>
                            <td>Care Package</td>
                            <td id="costAlignRight">{this.props.itinerary.carePackage.toString()}</td>
                        </tr>
                        <tr>
                            <td>Late Checkout</td>
                            <td id="costAlignRight">{this.props.itinerary.lateCheckout.toString()}</td>
                        </tr>
                        <tr>
                            <td>Shuttle Ride</td>
                            <td id="costAlignRight">{this.props.itinerary.shuttleRide.toString()}</td>
                        </tr>
                        <tr>
                            <td>Luggage Hold</td>
                            <td id="costAlignRight">{this.props.itinerary.luggageHold.toString()}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <br />

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
        pricing: state.pricingReducer
    };
}

export default connect(mapStateToProps)(Confirmation);

