import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { listAllItinerariesTable } from './DisplayAllReservations-Table';

// feature: sort displayed itineraries
//===============================================================================================//

class DisplayAllReservations extends Component {
    constructor() {
        super();
        this.listAllCurrentItineraries = this.listAllCurrentItineraries.bind(this);
        this.listAllPastItineraries = this.listAllPastItineraries.bind(this);
    }


    componentWillMount() {
        if (!this.props.itinerary[1]) {
            // redundancy to show error in production environment
            alert("Please click the orange 'All reservations (no input req.)' " +
                "button on the previous page before attempting to access all records in the database. This ensures you will receive the most recent data.");
            throw new Error("Please click the orange 'All reservations (no input req.)' " +
                "button on the previous page before attempting to access all records in the database. This ensures you will receive the most recent data.");
        }
        window.scrollTo(0, 0);
        alert('DEMO NOTE: Past itineraries are listed in red font below the active ones.')
    }

    // map every itinerary in the database and for each one, see if user's enter date is the same as current date or further out. Display results in a table with JSX
    listAllCurrentItineraries() {
        return this.props.itinerary.map((itinerary) => {
            if (moment(itinerary.enterDate).isSameOrAfter(moment().utcOffset(-480).subtract(1, 'days'))) {
                return listAllItinerariesTable(itinerary);
            } else {
                return '';
            }
        });
    }


    // map every itinerary in the database and for each one, see if user's enter date is before the current date. Display results in a table with JSX
    listAllPastItineraries() {
        return this.props.itinerary.map((itinerary) => {
            if (moment(itinerary.enterDate).isBefore(moment().utcOffset(-480).subtract(1, 'days'))) {
                return listAllItinerariesTable(itinerary);
            } else {
                return '';
            }
        });
    }


    render() {
        return (
            <div className="container">

                <div>
                    <Grid>
                        <Row>
                            <Col sm={1} md={2}><hr /></Col>
                            <Col sm={10} md={8}>
                                <div id="centeredHeading">
                                    <h3>All Future and Current Itineraries</h3>
                                </div>
                            </Col>
                            <Col sm={1} md={2}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                {this.listAllCurrentItineraries()}


                <div className="pastItineraries">
                    <Grid>
                        <Row>
                            <Col sm={1} md={2}><hr id="pastItineraryLine"/></Col>
                            <Col sm={10} md={8}>
                                <div id="centeredHeading">
                                    <h3>All Past Itineraries</h3>
                                </div>
                            </Col>
                            <Col sm={1} md={2}><hr id="pastItineraryLine"/></Col>
                        </Row>
                    </Grid>
                </div>

                <div className="pastItineraries">
                    {this.listAllPastItineraries()}
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

export default connect(mapStateToProps)(DisplayAllReservations);