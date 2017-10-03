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
        console.log('token is:');
        console.log(token);
        console.log(token.id);
        // fetch time of payment submission in PST
        const bookTime = moment().utcOffset(-420).format("MM/DD/YYYY") + ' @ ' + moment().utcOffset(-420).format('hh:mm a') + ' (PST)';

        // generate a confirmation number upon payment submission
        const confirmationNumber = this.props.itinerary.numAdults + billingAddress.billing_name.slice(0,1) + this.props.itinerary.numNights
            + (this.props.itinerary.roomType.slice(0,1)).toUpperCase() + billingAddress.billing_address_country_code.slice(0,1)
            + (billingAddress.billing_address_zip.slice(0,2)).toUpperCase() + Math.floor(Math.random()* 10) + Math.floor(Math.random()* 10);

        // save booking info into redux store to display on upcoming confirmation page (avoid doing an additional api request)
        this.props.itinerary.confirmationNumber = confirmationNumber;
        this.props.itinerary.bookTime = bookTime;
        this.props.itinerary.email = token.email;

        const serverAPI = 'http://localhost:5000/api/itineraryCreate';

        // submit all info to backend at once
        axios.post(serverAPI,
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
                    image= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC30lEQVRoQ+1YTWsTQRh+JskhRmnrqYgBDY2C3YLNRXpT8OjBXKygB+MviAhehEAh4EWQ5h/Ug4L10h48ivYmXlKhaUET2kJFejIUP3JIduTtzqRL2E1m4mxpYOaUDTPzPl/vzLIMIz7YiOOHJdDPwS3ghgs0HWA9KqcjdWADWCLgM0DhxBIgla8AH/0AN4BFBlwHMCv+X+fA2gzwyD8vaK0u0f92oAbsxDwSO7L4NjDxB1iBR4LGWgrIZ4CmnLMFXHSBDw6Q0QXtnz80gZoH8IJQmRRuxoGHkohwoUjFOFCR6gvgFK1xuRbArgPkhyGiRGBTbD7tgT4cAghFh0jQyPmbtQYsxEQPuEDBARbk2poXrap43u11MKheGLm+BESh2zhShwisSqAUH1KeAVdTwFkZkValfIm3Y/cZ2B3PAf6WJdxXyWLpGz2LiP3kwBcGjMsYDaoXRGKgA3SSMOCBiMJLeaIIEHkHWKJmPD2XG5u8O5/jLp8Hw3SgYhybLMaW998sV39/qh5Q89eAQgpYkeTD6g3lAC2iAgAW6TcDCv4YkdLMTdzrBc07nQbf/7HXqX9N07p49vIemzyXZvH4VBeIIMNj7dfSmUH1hnKA1E2Ki6gFzGYq5e/9QPNGPc0PmkdAfVXZ2ESDTWX7ktkuls776/Ue0b0kBkaIFgxSuh/oUOsVyPid0Y5QFKCjIBPqQOvFMy4LykwPo7Tu2R4Ws+Tjp4FYQwn8fV6uUyMeB2gVZ049KWW1mvjXzWtdB3RVjGL+mfef9RywBAzbYB0wLKj2dkYcSNwKfuNtv+u+pB4CMz2P9rQEolBW1SnrgOw4VcVMzzPmgPbRYXCBkSY2iEd7K0tA9RQKy7+U3H9nqPaKsR5QKWgJAOi92a0DOvfAiY6QytmnQ0BlPznn2I5RSyDEFuuAal5thExFyP9lTlX9KOdpf5kbeQJRqmlyb6XP6yYLmt7LEjCtqO5+I+/AP09m7EDFcoUsAAAAAElFTkSuQmCC'
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