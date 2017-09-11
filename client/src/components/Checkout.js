import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Checkout extends Component {
    render() {
        return (
            <div>
                <h1>You chose room #TBD, Excalibur Suite with travel dates 12/25/2017 - 12/31/2017. We hope you enjoy your stay! Please consider the following add-ons before checking out:</h1>
                <form action="">
                    <label>
                        <input type="checkbox" name="carepackage" />
                        &nbsp; (+$5.00) Carepackage (toothbrush, toothpaste, water, gum)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="carepackage" />
                        &nbsp; (+$10.00) Late checkout (2pm PST)
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="carepackage" />
                        &nbsp; (+10.00/guest) Continential Breakfast
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="carepackage" />
                        &nbsp; (+$25.00) San Francisco Airport shuttle
                    </label>
                </form>

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