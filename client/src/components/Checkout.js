import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';


import { updateItineraryTotalCost} from '../actions';

//to-do: add luggage hold (free!) to optional addons
//to-do: integrate stripe
//to-do: change grammar for adults
//to-do: change {this.state.roomCost} to {(this.roomCostPerNight)} when ready. Has error when attempting to calculate NaN
//future feature: dynamic pricing. Increase by a % factor if date lands on weekend
//to-do: was unable to refactor handleAddonChange function. Was having issues with improper use of global 'event.'


//===============================================================================================//

//to-do: change {this.state.roomCost} to {(this.roomCostPerNight)} when ready. Has error when attempting to calculate NaN


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCost: 100, //temporary. Just for testing
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
            carePackageTogglePrice: null,
            lateCheckoutTogglePrice: null,
            shuttleTogglePrice: null,
            breakfastTogglePrice: null,

        };
        this.addonCost = this.addonCost.bind(this);
        this.handleAddonChange = this.handleAddonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // Associating a price with room type selected in previous results page.
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
                //throw new Error("We did not receive a room type for your trip. Please return to the homepage and start a new search");
                console.log('Placeholder for throw error. If removed, unable to access this page directly');
            }
        }
    }

    addonCost() {
        let carePackageCost = this.props.pricing.carePackageCost;
        let lateCheckoutCost = this.props.pricing.lateCheckoutCost;
        let shuttleRideCost = this.props.pricing.shuttleRideCost;
        let breakfastCost = this.props.pricing.breakfastCost;

        // If addon option is not selected, default to zero. Else get price from redux store. Sum is added to total
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

    handleAddonChange(event) {
        switch (event.target.name) {
            case 'carePackage' : {
                this.setState({carePackage: !this.state.carePackage});

                setTimeout(() => {
                    if (this.state.carePackage) {
                        this.setState({carePackageTogglePrice: '$' + this.props.pricing.carePackageCost.toFixed(2)});
                    } else {
                        this.setState({carePackageTogglePrice: null});
                    }
                }, 100);
                break;
            }

            case 'lateCheckout' : {
                this.setState({lateCheckout: !this.state.lateCheckout});

                setTimeout(() => {
                    if (this.state.lateCheckout) {
                        this.setState({lateCheckoutTogglePrice: '$' + this.props.pricing.lateCheckoutCost.toFixed(2)});
                    } else {
                        this.setState({lateCheckoutTogglePrice: null});
                    }
                }, 100);
                break;
            }

            case 'shuttleRide' : {
                this.setState({shuttleRide: !this.state.shuttleRide});

                setTimeout(() => {
                    if (this.state.shuttleRide) {
                        this.setState({shuttleTogglePrice: '$' + (this.props.pricing.shuttleRideCost * this.props.itinerary.numAdults).toFixed(2)});
                    } else {
                        this.setState({shuttleTogglePrice: null});
                    }
                }, 100);
                break;
            }

            case 'breakfast' : {
                this.setState({breakfast: !this.state.breakfast});

                setTimeout(() => {
                    if (this.state.breakfast) {
                        this.setState({breakfastTogglePrice: '$' + (this.props.pricing.breakfastCost * this.props.itinerary.numNights * this.props.itinerary.numAdults).toFixed(2)});
                    } else {
                        this.setState({breakfastTogglePrice: null});
                    }
                }, 100);
                break;
            }

            // Prevent unexpected addon behavior
            default: {
                this.setState({
                    carePackageTogglePrice: null,
                    lateCheckoutTogglePrice: null,
                    shuttleTogglePrice: null,
                    breakfastTogglePrice: null
                });
            }
        }
    }

    totalCostDynamic() {
        return ('$' +
            ((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights
            + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.occupancyTax)
            + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.tourismTax)
            + this.addonCost()).toFixed(2)
        );
    }

    handleSubmit() {
        this.props.dispatch(updateItineraryTotalCost(this.totalCostDynamic()));
        this.setState({redirect: true});
    }


    render() {
        //console.log(this.state);
        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }

        return (
            <div>

                <h1>You chose room {this.props.itinerary.roomType} with travel
                    dates {this.props.itinerary.enterDate} - {this.props.itinerary.exitDate}!
                    There are {this.props.itinerary.numAdults} adult(s). Not correct? Please make a change below:
                </h1>
                <Link to="/"><Button bsStyle="primary">Modify dates</Button></Link>
                <Link to="/results/:id"><Button bsStyle="info">Modify room</Button></Link>


                <h1>We hope you enjoy your stay!
                    Please consider the following add-ons before checking out:
                </h1>

                <h4>Temporary. Your room cost is ${this.roomCostPerNight}/night for {this.props.itinerary.roomType}.
                    Total cost is ${this.roomCostPerNight * this.props.itinerary.numNights}. Staying {this.props.itinerary.numNights} nights</h4>

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
                        <td>Optional addons (all prices includes sales tax):</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input name="carePackage" type="checkbox" onChange={this.handleAddonChange} />
                                &nbsp;Care package (toothbrush, toothpaste, water, gum)
                            </label>
                        </td>
                        <td>{this.state.carePackageTogglePrice}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input name="lateCheckout" type="checkbox" onChange={this.handleAddonChange} />
                                &nbsp;Late checkout (2:00pm PST, day of departure)
                            </label>
                        </td>
                        <td>{this.state.lateCheckoutTogglePrice}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input name="shuttleRide" type="checkbox" onChange={this.handleAddonChange} />
                                &nbsp;San Francisco Airport shuttle (charged per guest, roundtrip)
                            </label>
                        </td>
                        <td>{this.state.shuttleTogglePrice}</td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input name="breakfast" type="checkbox" onChange={this.handleAddonChange} />
                                &nbsp;Continental Breakfast (charged per guest, per day)
                            </label>
                        </td>
                        <td>{this.state.breakfastTogglePrice}</td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>{this.totalCostDynamic()}
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