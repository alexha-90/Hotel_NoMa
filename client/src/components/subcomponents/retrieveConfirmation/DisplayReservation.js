import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//===============================================================================================//

class DisplayReservation extends Component {


    componentWillMount() {
        if (!this.props.itinerary.confirmationNumber) {
            throw new Error("You attempted to retrieve an itinerary before entering a reservation number. Please retrace your steps!");
        }
    }



    render() {
        return (
            <div>
                <ul>
                    <li>Confirmation number: {this.props.itinerary.confirmationNumber}</li>
                    <li>addons tbd: {this.props.itinerary.addons.toString()}</li>
                    <li>cancel by date: {this.props.itinerary.cancelByDate}</li>
                    <li>email: {this.props.itinerary.contactInfo.email}</li>
                    <li>total cost: {this.props.itinerary.totalCostOfStay}</li>
                    <li>room type: {this.props.itinerary.roomType}</li>
                    <li>number of adult guests: {this.props.itinerary.numAdults}</li>
                    <li>enter date: {this.props.itinerary.enterDate}</li>
                    <li>exit date: {this.props.itinerary.exitDate}</li>
                    <li>length of stay: {this.props.itinerary.numNights}</li>
                </ul>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(DisplayReservation);


/*
addons:
:
breakfast
:
true
carePackage
:
true
lateCheckout
:
true
shuttleRide
:
false
__proto__
:
Object
bookTime
:
"09/29/2017 @ 02:36 pm (PST)"
cancelByDate
:
"10/29/2017"
confirmationNumber
:
"3A12FU9484"
contactInfo
:
customerAddress
:
"31355 Santa Ana Way"
customerCity
:
"Union City"
customerCountry
:
"US"
customerName
:
"Alex Ha"
customerZip
:
94587
email
:
"chowyows@gmail.com"
__proto__
:
Object
enterDate
:
"10/18/2017"
exitDate
:
"10/30/2017"
numAdults
:
3
numNights
:
12
roomType
:
"frugalTraveler"
totalCostOfStay
:
1481.56
 */