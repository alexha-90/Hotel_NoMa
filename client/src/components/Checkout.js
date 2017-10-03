import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { updateItineraryTotalCost } from '../actions';
import CheckoutButton from '../actions/checkoutButton';
import { addonCost } from './subcomponents/checkout/AddonCost';
import { pricingTable } from './subcomponents/checkout/PricingTable';
//to-do: add luggage hold (free!) to optional addons
//to-do: change grammar for adults
//to-do: change {this.state.roomCost} to {(this.roomCostPerNight)} when ready. Has error when attempting to calculate NaN
//to-do check if roomType exists. if not, alert stop trying to cheat system and link back to homepage
//to-do: change {this.state.roomCost} to {(this.roomCostPerNight)} when ready. Has error when attempting to calculate NaN

//===============================================================================================//

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCost: 100, //temporary. Just for testing. Can remove entirely later.
            carePackage: false,
            lateCheckout: false,
            shuttleRide: false,
            breakfast: false,
            carePackageCost: null,
            lateCheckoutCost: null,
            shuttleRideCost: null,
            breakfastCost: null,

        };
        this.handleAddonChange = this.handleAddonChange.bind(this);
    }


    componentWillMount() {
        window.scrollTo(0, 0);

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


    // retrieve default total cost of reservation upon loading component, no addons
    componentDidMount(){
        this.props.dispatch(updateItineraryTotalCost(this.totalCostDynamic()));
    }


    // determine if checkbox is selected for each individual addon. If yes, dynamically update the itinerary's total cost
    // price is grabbed from the props.pricing reducer. This makes it extremely easy for management to update prices
    // NOTE: having issues refactoring and exporting this function due to event argument and amount of references
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

            // Prevent unexpected addon behavior
            default: {
                this.setState({
                    carePackageCost: null,
                    lateCheckoutCost: null,
                    shuttleRideCost: null,
                    breakfastCost: null
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

                <h4>Temporary. Your room cost is ${this.roomCostPerNight}/night for {this.props.itinerary.roomType}.
                    Total cost is ${this.roomCostPerNight * this.props.itinerary.numNights}. Staying {this.props.itinerary.numNights} nights</h4>



                <div>
                    <Grid>
                        <Row>
                            <Col sm={0} md={4}><hr /></Col>
                            <Col sm={12} md={4}>
                                <div id="roomTypeHeading">
                                    <h3>Itinerary</h3>
                                </div>
                            </Col>
                            <Col sm={0} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>


                <div className="searchBanner">
                    <Grid>
                        <Row>
                            <Col sm={12} md={12}>
                                <h3>
                                    <Button bsStyle="primary" id="grayed">{this.props.itinerary.numAdults} Adult(s)</Button>
                                    {' '}
                                    <Button bsStyle="primary" id="grayed">{this.props.itinerary.numNights} Nights</Button>
                                    {' '}
                                    <Button bsStyle="primary" id="grayed">{this.props.itinerary.enterDate} - {this.props.itinerary.exitDate}</Button>
                                    {' '}
                                    <Button bsStyle="primary" id="grayed">{this.props.itinerary.roomType} Room</Button>
                                    <br />
                                    <br />
                                    <Link to="/"><Button bsStyle="warning">Modify dates</Button></Link>
                                    {' '}
                                    <Link to="/results"><Button bsStyle="warning">Modify room</Button></Link>
                                </h3>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div>
                    <Grid>
                        <Row>
                            <Col sm={0} md={4}><hr /></Col>
                            <Col sm={12} md={4}>
                                <div id="roomTypeHeading">
                                    <h3>Payment</h3>
                                </div>
                            </Col>
                            <Col sm={0} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                <h3>We hope you enjoy your stay at Hotel NoMa, San Francisco! Please ensure the itinerary above is accurate
                    before proceeding.
                </h3>

                <div id="resultContainer">
                    {/* Imported component: entire table output */}
                    {pricingTable(this.state, this.props.itinerary, this.props.pricing, this.handleAddonChange, this.totalCostDynamic())}
                    {/* Imported component: entire table output */}
                </div>


                    Note: for the sake of testing, please use credit card # 4242424242
                    stripe still doesn't actually go to backend
                    {/* Imported component: Stripe billing */}
                    <CheckoutButton />
                    {/* Imported component: Stripe billing */}
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