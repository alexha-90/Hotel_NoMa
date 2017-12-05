import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { Redirect} from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios'
import moment from 'moment';

// ******** very helpful guide: https://www.robinwieruch.de/react-express-stripe-payment/
// to-do: maybe add description back into stripe
// to-do: get customer phone number

// this component handles submitting the payment to backend and dispatching action for posting itinerary to db. Found it simpler to batch these actions here
//===============================================================================================//

class CheckoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.onToken = this.onToken.bind(this);
    }


    onToken(token, billingAddress) {
        console.log('token is:');
        console.log(token);
        console.log(token.id);

        // fetch time of payment submission in PST
        const bookTime = moment().utcOffset(-480).format("MM/DD/YYYY") + ' @ ' + moment().utcOffset(-480).format('hh:mm a') + ' (PST)';

        // generate a confirmation number upon payment submission
        const confirmationNumber = this.props.itinerary.numAdults + billingAddress.billing_name.slice(0,1) + this.props.itinerary.numNights
            + (this.props.itinerary.roomType.slice(0,1)).toUpperCase() + billingAddress.billing_address_country_code.slice(0,1)
            + (billingAddress.billing_address_zip.slice(0,2)).toUpperCase() + Math.floor(Math.random()* 10) + Math.floor(Math.random()* 10);

        // save booking info into redux store to display on upcoming confirmation page (avoid doing an additional api request)
        this.props.itinerary.confirmationNumber = confirmationNumber;
        this.props.itinerary.bookTime = bookTime;
        this.props.itinerary.email = token.email;

        // submit all info to backend at once
        axios.post('api/itineraryCreate',
            {
                // from stripe checkout
                source: token,
                amount: this.props.itinerary.totalCostOfStay * 100,
                email: token.email,
                customerName: billingAddress.billing_name,
                customerCountry: billingAddress.billing_address_country_code,
                customerAddress: billingAddress.billing_address_line1,
                customerCity: billingAddress.billing_address_city,
                customerZip: billingAddress.billing_address_zip,

                // from redux store
                numAdults: this.props.itinerary.numAdults,
                enterDate: this.props.itinerary.enterDate,
                exitDate: this.props.itinerary.exitDate,
                cancelByDate: this.props.itinerary.cancelByDate,
                numNights: this.props.itinerary.numNights,
                roomType: this.props.itinerary.roomType,
                totalCostOfStay: this.props.itinerary.totalCostOfStay,
                carePackage: this.props.itinerary.carePackage,
                lateCheckout: this.props.itinerary.lateCheckout,
                breakfast: this.props.itinerary.breakfast,
                shuttleRide: this.props.itinerary.shuttleRide,
                luggageHold: this.props.itinerary.luggageHold,

                // newly generated booking info
                bookTime: bookTime,
                confirmationNumber: confirmationNumber
            })
            .catch(console.log('entry submitted'));

        // delay one second before loading confirmation page
        setTimeout(() => {
            this.setState({redirect: true});
        }, 1000);
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }

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
                    image= 'https://png.icons8.com/hotel-star/office/120'
                >
                    <Button bsStyle="success">
                        Book my stay now!
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


export default connect(mapStateToProps)(CheckoutButton);