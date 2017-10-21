import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import { updateItineraryTotalCost } from '../actions';
import CheckoutButton from '../actions/checkoutButton';
import { loadRoomPrice} from './subcomponents/checkout/LoadRoomPrice';
import { addonCost } from './subcomponents/checkout/AddonCost';
import { pricingTable } from './subcomponents/checkout/PricingTable';

//to-do: change grammar if single adult
//===============================================================================================//

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCost: 0,
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
            luggageHold: false,
            carePackageCost: null,
            lateCheckoutCost: null,
            shuttleRideCost: null,
            breakfastCost: null,
            luggageHoldCost: null,
        };
        this.handleAddonChange = this.handleAddonChange.bind(this);
    }


    componentWillMount() {
        if (!this.props.itinerary.numNights || !this.props.itinerary.exitDate) {
            // redundancy to show error in production environment
            alert("Hmm... it appears something went wrong. Please restart your booking. Sorry for the inconvenience.");
            throw new Error("Hmm... it appears something went wrong. Please restart your booking. Sorry for the inconvenience.")
        }

        window.scrollTo(0, 0);
        // associate a price with room type selected in previous results page.
        this.setState({ roomCost: loadRoomPrice(this.props.itinerary, this.props.pricing, this.state.roomCost) });
    }


    // retrieve default total cost of reservation upon loading component, no addons
    componentDidMount(){
        this.props.dispatch(updateItineraryTotalCost(this.totalCostDynamic()));
    }


    // determine if checkbox is selected for each individual addon. If yes, dynamically update the itinerary's total cost
    // price is grabbed from the props.pricing reducer. This makes it extremely easy for management to update prices
    handleAddonChange(event) {
        switch (event.target.name) {
            case 'carePackage' : {
                this.setState({carePackage: !this.state.carePackage});
                setTimeout(() => {
                    if (this.state.carePackage) {
                        this.setState({carePackageCost: '$' + this.props.pricing.carePackageCost.toFixed(2)});
                        this.props.itinerary.carePackage = true;
                    } else {
                        this.setState({carePackageCost: null});
                    }
                }, 200);
                break;
            }

            case 'lateCheckout' : {
                this.setState({lateCheckout: !this.state.lateCheckout});
                setTimeout(() => {
                    if (this.state.lateCheckout) {
                        this.setState({lateCheckoutCost: '$' + this.props.pricing.lateCheckoutCost.toFixed(2)});
                        this.props.itinerary.lateCheckout = true;
                    } else {
                        this.setState({lateCheckoutCost: null});
                    }
                }, 200);
                break;
            }

            case 'shuttleRide' : {
                this.setState({shuttleRide: !this.state.shuttleRide});
                setTimeout(() => {
                    if (this.state.shuttleRide) {
                        this.setState({shuttleRideCost: '$' + (this.props.pricing.shuttleRideCost * this.props.itinerary.numAdults).toFixed(2)});
                        this.props.itinerary.shuttleRide = true;
                    } else {
                        this.setState({shuttleRideCost: null});
                    }
                }, 200);
                break;
            }

            case 'breakfast' : {
                this.setState({breakfast: !this.state.breakfast});
                setTimeout(() => {
                    if (this.state.breakfast) {
                        this.setState({breakfastCost: '$' + (this.props.pricing.breakfastCost * this.props.itinerary.numNights * this.props.itinerary.numAdults).toFixed(2)});
                        this.props.itinerary.breakfast = true;
                    } else {
                        this.setState({breakfastCost: null});
                    }
                }, 200);
                break;
            }

            case 'luggageHold' : {
                this.setState({luggageHold: !this.state.luggageHold});
                setTimeout(() => {
                    if (this.state.luggageHold) {
                        this.props.itinerary.luggageHold = true;
                        this.setState({luggageHoldCost: '$' + this.props.pricing.luggageHoldCost.toFixed(2)});
                    } else {
                        this.setState({luggageHoldCost: null});
                    }
                }, 200);
                break;
            }


            // Prevent unexpected addon behavior
            default: {
                this.setState({
                    carePackageCost: null,
                    lateCheckoutCost: null,
                    shuttleRideCost: null,
                    breakfastCost: null,
                    luggageHold: null,
                });
            }
        }
        // update total cost every time an addon is toggled
        setTimeout(() => {
            this.props.dispatch(updateItineraryTotalCost(this.totalCostDynamic()));
        }, 200);
    }

    // dynamically update price with addon selections
    totalCostDynamic() {
        return (//'$' +
            ((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights
                + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.occupancyTax)
                + (((this.state.roomCost + this.props.pricing.cleaningCost) * this.props.itinerary.numNights) * this.props.pricing.tourismTax)
                + addonCost(this.props.pricing, this.state)).toFixed(2)
        );
    }

    render() {
        // initiated after successful stripe payment checkout
        /// NOT CURRENTLY USED
        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }

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

                <br />


                <div className="resultsBanner">
                    <span>
                        {this.props.itinerary.numAdults} Adult(s)
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        {this.props.itinerary.enterDate} - {this.props.itinerary.exitDate}
                    </span>
                    <br />
                    <div id="secondRow">
                        <span>
                            {this.props.itinerary.numNights} Nights
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            {this.props.itinerary.roomType} Room
                        </span>
                    </div>
                    <br />
                    <div id="thirdRow">
                        <span>
                            <Link to="/">Modify Dates</Link>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <Link to="/results">Modify Room</Link>
                        </span>
                    </div>
                </div>

                <br />


                <div>
                    <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Payment</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                <h3 style={{ textAlign: 'center'}}>
                    We hope you enjoy your stay at Hotel NoMa, San Francisco! Please ensure the
                    itinerary above is accurate before proceeding.
                </h3>

                <div id="resultContainer">
                    {/* Imported component: entire table output */}
                    {pricingTable(this.state, this.props.itinerary, this.props.pricing, this.handleAddonChange, this.totalCostDynamic())}
                    {/* Imported component: entire table output */}
                </div>
                <div id="checkoutButton">
                    <h3 id="fakeCCText">
                        Note: for testing please use credit card
                        <br/>
                        #4242424242424242. Exp 4/22. CVC 222
                    </h3>
                    {/* Imported component: Stripe billing */}
                    <CheckoutButton />
                    {/* Imported component: Stripe billing */}

                </div>
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