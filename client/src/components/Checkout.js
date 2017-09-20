import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

//to-do: integrate stripe
// bug: all addons change together
// checkbox reference: https://stackoverflow.com/questions/32923255/react-checkbox-doesnt-toggle
// price sheet:
//      frugal traveler: 75,
//      den: 100,
//      family accommodation: 120,
//      executive suite: 150


//===============================================================================================//


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAdults: 2,
            numNights: 6,
            roomCost: 150,
            cleaningCost: 12,
            occupancyTax: 0.0525,
            tourismTax: 0.03125,
            roomSelection: 'executiveSuite',
            selectedDates: '',
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.addonCost = this.addonCost.bind(this);
    }

    handleChange(event) {
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

    render() {
        console.log(this.state);

        return (
            <div>
                <h1>You chose room {this.state.roomSelection} with travel dates 12/25/2017 - 12/31/2017
                    and {this.state.numAdults} adults. We hope you enjoy your stay!
                    Please consider the following add-ons before checking out:
                </h1>

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
                        <td>Room base charge (${this.state.roomCost.toFixed(2)} x {this.state.numNights} nights)</td>
                        <td>${(this.state.roomCost * this.state.numNights).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Cleaning fee (${this.state.cleaningCost.toFixed(2)} x {this.state.numNights} nights)</td>
                        <td>${(this.state.cleaningCost * this.state.numNights).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>S.F. occupancy tax ({(this.state.occupancyTax * 100).toFixed(3)}%</td>
                        <td>${(((this.state.roomCost + this.state.cleaningCost) * this.state.numNights) * this.state.occupancyTax).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>S.F. tourism tax ({(this.state.tourismTax * 100).toFixed(3)}%)</td>
                        <td>${(((this.state.roomCost + this.state.cleaningCost) * this.state.numNights) * this.state.tourismTax).toFixed(2)}</td>
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
                                <input type="checkbox" onChange={this.handleChange} value={this.state.breakfast} />
                                &nbsp;Continential Breakfast (charged per guest)
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>${(((this.state.roomCost + this.state.cleaningCost) * this.state.numNights)
                            + (((this.state.roomCost + this.state.cleaningCost) * this.state.numNights) * this.state.occupancyTax)
                            + (((this.state.roomCost + this.state.cleaningCost) * this.state.numNights) * this.state.tourismTax)
                            + this.addonCost()).toFixed(2)}
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <h2>Enter credit card information</h2>
                <Button bsStyle="primary" href="/confirmation">Pay Later (cancel by 12/24/2017)</Button>
                <Button bsStyle="success" href="/confirmation">Pay Now</Button>
            </div>
        );
    }
}

export default Checkout;

/*


                Room cost: $99.99 x 6 nights
                Cleaning fee: $15.00 x 6 nights
                S.F. occupancy tax (14%): $42.00
                S.F. tourism tax (1.5%): $35.23
                <h3>Total cost of your stay: $765.23</h3>
                <h2>Enter credit card information</h2>
                <Button bsStyle="primary" href="/confirmation">Pay Later (cancel by 12/24/2017)</Button>
                <Button bsStyle="success" href="/confirmation">Pay Now</Button>
 */