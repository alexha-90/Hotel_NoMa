import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//to-do: add room number after selection?
// bug: all items change together
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
            roomSelection: 'executiveSuite',
            selectedDates: '',
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            carePackage: !this.state.carePackage,
            lateCheckout: !this.state.lateCheckout,
            shuttleRide: !this.state.shuttleRide,
            breakfast: !this.state.breakfast,
        });
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h1>You chose room {this.state.roomSelection} with travel dates 12/25/2017 - 12/31/2017
                    and {this.state.numAdults} adults. We hope you enjoy your stay!
                    Please consider the following add-ons before checking out:
                </h1>
                <div className="optionalAddons">
                    <label>
                        <input type="checkbox" onChange={this.handleChange} value={this.state.carePackage} />
                        &nbsp; (+$5.00) Carepackage (toothbrush, toothpaste, water, gum)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" onChange={this.handleChange} value={this.state.lateCheckout} />
                        &nbsp; (+$10.00) Late checkout (2:00pm PST)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" onChange={this.handleChange} value={this.state.shuttleRide} />
                        &nbsp; (+$25.00) San Francisco Airport shuttle
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" onChange={this.handleChange} value={this.state.breakfast} />
                        &nbsp; (+10.00/guest) Continential Breakfast
                    </label>
                </div>


                Room cost: $99.99 x 6 nights
                Cleaning fee: $15.00 x 6 nights
                S.F. occupancy tax (14%): $42.00
                S.F. tourism tax (1.5%): $35.23
                <h3>Total cost of your stay: $765.23</h3>
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