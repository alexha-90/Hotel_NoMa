import React, { Component } from 'react';
import { connect } from 'react-redux';

// to-do: randomly generated confirmation number.
// to-do: update text with generated confirmation number

//===============================================================================================//


class Confirmation extends Component {


    render() {
        const replyEmail = 'hotelnoma@example.com';
        let emailRef = 'mailto:' + replyEmail + '?subject=Inquiry about Reservation#' + this.props.itinerary.enterDate;

        return (
            <div className="container">
                    <div className="userInput">
                    <h3>Your reservation has been booked! Your stay confirmation number is #TBD. A receipt has been sent to your email (testuser@example.com).
                    </h3>
                    <h4>
                        Your stay details: {this.props.itinerary.enterDate} to {this.props.itinerary.exitDate} for
                        a total cost of {this.props.itinerary.totalCostOfStay}. To cancel and receive a full refund for your stay, please
                        cancel by {this.props.itinerary.cancelByDate}.
                    </h4>

                    Please feel free to contact us by phone at (555) 415-5104 or by
                    email at <a href={emailRef}>HotelNoMa@example.com</a> if
                    you have any questions or concerns. We look forward to your stay!

                    <p>
                        Like Hotel NoMa? Follow us on social media to find out about exclusive promotions and events:
                        <img src="http://optinflow.com/wp-content/uploads/2017/03/fbinstatwitter.png" id="social_links" alt="social_links"/>
                    </p>
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

export default connect(mapStateToProps)(Confirmation);

