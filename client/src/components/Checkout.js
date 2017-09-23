import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';
import { Button, Table } from 'react-bootstrap';

//to-do: integrate stripe
//to-do: show pricing each day
//to-do: change grammar for adults
//to-do: bill shuttle and breakfast per person
//to-do: change {this.state.roomCost} to {(this.roomCostPerNight)} when ready. Has error when attempting to calculate NaN
//future feature: dynamic pricing. Increase by a % factor if date lands on weekend
// bug: all addons change together
// checkbox reference: https://stackoverflow.com/questions/32923255/react-checkbox-doesnt-toggle


//===============================================================================================//



class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAdults: 2,
            roomCost: 100,
            selectedDates: '',
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
        };
        this.addonCost = this.addonCost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
    // Associating a price with room type. Will find refactor later
        switch (this.props.itinerary.roomType) {
            case 'executiveSuite': {
                this.roomCostPerNight = this.props.pricing.executiveSuite;
                break;
            }

            case 'familyAccommodation': {
                this.roomCostPerNight = this.props.pricing.familyAccommodation;
                break;
            }

            case 'den': {
                this.roomCostPerNight = this.props.pricing.den;
                break;
            }

            case 'frugalTraveler': {
                this.roomCostPerNight = this.props.pricing.frugalTraveler;
                break;
            }

            default: {
                //throw new Error("No room type was entered. Please return to the homepage and start a new search");
                console.log(' ');
            }
        }
    }

    addonCost() {
        // broken. all items turn on/off together. Tax is not added for these.
        let carePackageCost = 5;
        let lateCheckoutCost = 10;
        let shuttleRideCost = 25;
        let breakfastCost = 10;

        if (!this.state.carePackage) {
            carePackageCost = 0;
        }
        if (!this.state.lateCheckout) {
            lateCheckoutCost = 0;
        }
        if (!this.state.shuttleRide) {
            shuttleRideCost = 0;
        }
        if (!this.state.breakfast) {
            breakfastCost = 0;
        }
        return carePackageCost + lateCheckoutCost + shuttleRideCost + breakfastCost;
    }

    handleChange(event) {
        //broken. changes all at once
        this.setState({
            carePackage: !this.state.carePackage,
            lateCheckout: !this.state.lateCheckout,
            shuttleRide: !this.state.shuttleRide,
            breakfast: !this.state.breakfast,
        });
        /* use this to inject addons into table and update total
        return (
            <li>{alert('hello')}</li>
        );
        */

    }

    handleSubmit() {
        this.setState({redirect: true});
    }



    render() {
        console.log(this.state);

        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }

        return (
            <div>

                <h1>You chose room {this.props.itinerary.roomType} with travel
                    dates {this.props.itinerary.enterDate} - {this.props.itinerary.exitDate}!
                    There are {this.props.itinerary.numAdults} adult(s). We hope you enjoy your stay!
                    Please consider the following add-ons before checking out:
                </h1>

                <h1>Temporary. Your room cost is ${this.roomCostPerNight} for {this.props.itinerary.roomType}</h1>

                Your stay:
                <Table striped bordered condensed>
                    <thead>
                    <tr>
                        <th>Item/Description</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Room base charge (${this.state.roomCost.toFixed(2)} x {this.props.itinerary.numNights} nights)</td>
                        <td>${(this.state.roomCost * this.props.itinerary.numNights).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Cleaning fee (${this.props.pricing.cleaningCost.toFixed(2)} x {this.props.itinerary.numNights} nights)</td>
                        <td>${(this.props.pricing.cleaningCost * this.props.itinerary.numNights).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>S.F. occupancy tax ({(this.props.pricing.occupancyTax * 100).toFixed(3)}%)</td>
                        <td>${(((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.occupancyTax).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>S.F. tourism tax ({(this.props.pricing.tourismTax * 100).toFixed(3)}%)</td>
                        <td>${(((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.tourismTax).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Optional addons:</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" onChange={this.handleChange} value={this.state.carePackage} />
                                &nbsp;Carepackage (toothbrush, toothpaste, water, gum)
                            </label>
                        </td>
                        <td>{this.addonCost()}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" onChange={this.handleChange} value={this.state.lateCheckout} />
                                &nbsp;Late checkout (2:00pm PST)
                            </label>
                        </td>
                        <td>{this.addonCost()}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" onChange={this.handleChange} value={this.state.shuttleRide} />
                                &nbsp;San Francisco Airport shuttle
                            </label>
                        </td>
                        <td>{this.addonCost()}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" onChange={this.handleChange} />
                                &nbsp;Continental Breakfast (charged per guest)
                            </label>
                        </td>
                        <td>{this.props.pricing.breakfast}</td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>${(((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights)
                            + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.occupancyTax)
                            + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.tourismTax)
                            + this.addonCost()).toFixed(2)}
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <h2>Enter credit card information</h2>
                <Button bsStyle="success" onClick={this.handleSubmit}>Book Now (free cancellations until {this.props.itinerary.cancelByDate})</Button>

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

export default connect(mapStateToProps)(Checkout);