import React, { Component } from 'react';
import { connect } from 'react-redux';

// to-do: randomly generated confirmation number. Retrieve email
// to-do: Social media links
// to-do: retrieve total cost of reservation


//===============================================================================================//


class Confirmation extends Component {
    render() {
        return (
            <div>
                <h3>Your reservation has been booked! Your stay confirmation number is #TBD. Please contact us at (555) 555-5555 if you have any
                    questions or concerns. A receipt has been sent to your email (testuser@example.com).
                </h3>
                <h4>
                    Your stay details: {this.props.itinerary.enterDate} to {this.props.itinerary.exitDate} for
                    a total cost of $765.23. To cancel and receive a full refund for your stay, please
                    cancel by {this.props.itinerary.cancelByDate}. Thank you! We look forward to your stay.
                </h4>
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

export default connect(mapStateToProps)(Confirmation);

