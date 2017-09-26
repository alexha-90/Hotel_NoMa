import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
//import { Redirect} from 'react-router';
//import { Link } from 'react-router-dom';


// push info after stripe to props.intinerary. if props... = true, then redirect.
//to-do: let stringVar = this.props. if equal to moment().utc420 today, then set stringVar = ''
//===============================================================================================//

class CheckoutForm extends Component {
    render(){
        let description = 'Reservation total: $' + this.props.itinerary.totalCostOfStay;

        return(
            <div>
                <StripeCheckout
                    name='Hotel NoMa'
                    description={description}
                    amount={this.props.itinerary.totalCostOfStay}
                    token={token => console.log(token)}
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                    billingAddress={true}
                    zipCode={true}
                    allowRememberMe={false}
                    panelLabel="Submit reservation!"
                    image= 'https://us.123rf.com/450wm/djvstock/djvstock1511/djvstock151102927/48451966-hotel-services-and-travel-graphic-design-vector-illustration-eps10.jpg?ver=6'
                >
                    <Button bsStyle="success">Book Now (free cancellations until {this.props.itinerary.cancelByDate}!)</Button>

                </StripeCheckout>
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

export default connect(mapStateToProps)(CheckoutForm);