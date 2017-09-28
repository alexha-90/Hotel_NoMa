import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleToken } from '../../../actions';

//import * as actions from '../../../actions';

//import { handleToken } from '../../../actions';
//import { Redirect} from 'react-router';
//import { Link } from 'react-router-dom';


// push info after stripe to props.intinerary. if props... = true, then redirect.
//to-do: let stringVar = this.props. if equal to moment().utc420 today, then set stringVar = ''
//===============================================================================================//

class CheckoutForm extends Component {

    render(){

        return(
            <div>
                <StripeCheckout
                    name='Hotel NoMa'
                    amount={this.props.itinerary.totalCostOfStay * 100}
                    token={token => console.log(token)}
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


export default connect(mapStateToProps, handleToken)(CheckoutForm);


/*
                    <Button bsStyle="success" onClick={testAction()}>

        //let description = 'Please enter total: $' + this.props.itinerary.totalCostOfStay;
        description={description}

                    token={token => this.props.handleToken(token)}


// token used to be  token={token => console.log(token)}
//maybe change to toekn => handleToken(token)


sample output


d: "tok_1B6tsHAOi1ThesMxwUnZjro4", object: "token", card: {…}, client_ip: "73.162.49.12", created: 1506573829, …}
card
:
{id: "card_1B6tsHAOi1ThesMxpKRBfeeZ", object: "card", address_city: "Union City", address_country: "United States", address_line1: "31355 Santa Ana Way", …}
client_ip
:
"73.162.49.12"
created
:
1506573829
email
:
"chowyows@gmail.com"
id
:
"tok_1B6tsHAOi1ThesMxwUnZjro4"
livemode
:
false
object
:
"token"
type
:
"card"
used
:
false
__proto__
:
Object


 */