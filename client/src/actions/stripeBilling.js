import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios'


//import { Redirect} from 'react-router';
//import { Link } from 'react-router-dom';

// ******** very helpful guide: https://www.robinwieruch.de/react-express-stripe-payment/
// to-do: maybe add description back into stripe
//to-do: let stringVar = this.props. if equal to moment().utc420 today, then set stringVar = ''
//===============================================================================================//

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.onToken = this.onToken.bind(this);
    }

    // billingAddress, customerName, email are all optional inputs
    onToken(token, billingAddress) {
        console.log(token);
        console.log(billingAddress);
        const serverAPI = "http://localhost:5000/api/stripe";
        axios.post(serverAPI,
            {
                source: token,
                amount: this.props.itinerary.totalCostOfStay * 100,
                customerName: billingAddress.billing_name,
                email: token.email
            })
            .then(console.log('test then'))
            .catch(console.log('test catch'));
        alert('next up');
    }


    render(){

        return(
            <div>
                <StripeCheckout
                    name='Hotel NoMa'
                    amount={this.props.itinerary.totalCostOfStay * 100}
                    token={ (token, billingAddress) => this.onToken(token, billingAddress) }
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                    billingAddress={true}
                    zipCode={true}
                    allowRememberMe={false}
                    panelLabel="Reservation total: "
                    image= 'https://us.123rf.com/450wm/djvstock/djvstock1511/djvstock151102927/48451966-hotel-services-and-travel-graphic-design-vector-illustration-eps10.jpg?ver=6'
                >
                    <Button bsStyle="success">
                        Book Now (free cancellations until {this.props.itinerary.cancelByDate}!)
                    </Button>
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