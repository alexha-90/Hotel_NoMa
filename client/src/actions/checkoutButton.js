import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { Redirect} from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios'
import moment from 'moment';

//import { Redirect} from 'react-router';
// refactor to make action here and updating in reducer.
// ******** very helpful guide: https://www.robinwieruch.de/react-express-stripe-payment/
// to-do: maybe add description back into stripe
// to-do: get customer phoen number
//to-do: let stringVar = this.props. if equal to moment().utc420 today, then set stringVar = ''
//to-do: want to set this up as an async/dispatch. Catch is firing upon success instead of failure

// this component handles submitting the payment to backend and dispatching action for posting itinerary to db. Found it simpler to batch these actions here

//===============================================================================================//

class CheckoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.onToken = this.onToken.bind(this);
    }


    onToken(token, billingAddress) {
        console.log('testdeploy');
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }

        return(
            <div>
                hello
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


export default connect(mapStateToProps)(CheckoutButton);