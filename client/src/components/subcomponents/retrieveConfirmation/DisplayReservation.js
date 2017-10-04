import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Grid, Row, Col } from 'react-bootstrap';

//===============================================================================================//

class DisplayReservation extends Component {

    componentWillMount() {
        if (!this.props.itinerary.confirmationNumber) {
            throw new Error("You attempted to retrieve an itinerary before entering a reservation number. Please retrace your steps!");
        }
    }

    render() {
        return (
            <div className="container">

                <div>
                    <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Itinerary</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                <div>
                    <Grid>
                        <Row>
                            <Col sm={1} md={2}>{' '}</Col>
                            <Col sm={10} md={8}>
                                <Table striped bordered condensed>
                                    <tbody>
                                    <tr>
                                        <td>Confirmation number</td>
                                        <td id="costAlignRight">{this.props.itinerary.confirmationNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Email address</td>
                                        <td id="costAlignRight">{this.props.itinerary.contactInfo.email}</td>
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
                                        <td id="costAlignRight">{this.props.itinerary.addons.breakfast.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Care Package</td>
                                        <td id="costAlignRight">{this.props.itinerary.addons.carePackage.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Late Checkout</td>
                                        <td id="costAlignRight">{this.props.itinerary.addons.lateCheckout.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td>shuttleRide</td>
                                        <td id="costAlignRight">{this.props.itinerary.addons.shuttleRide.toString()}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={1} md={2}>{' '}</Col>
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

export default connect(mapStateToProps)(DisplayReservation);