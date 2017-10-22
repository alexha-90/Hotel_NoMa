import React from 'react';
import { Table } from 'react-bootstrap';

// feature: sort displayed itineraries
// argument received: this.props.itinerary
//===============================================================================================//

export function listAllItinerariesTable(itinerary) {
    return (
        <Table striped bordered condensed key={itinerary.confirmationNumber} id="displayAllItineraries">
            <thead id="tableHeader">
            <tr>
                <th>Confirmation #: { itinerary.confirmationNumber } - { itinerary.contactInfo.customerName }</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Customer email</td>
                <td>{ itinerary.contactInfo.email }</td>
            </tr>
            <tr>
                <td>Customer address</td>
                <td>{ itinerary.contactInfo.customerAddress }, { itinerary.contactInfo.customerCity }, { itinerary.contactInfo.customerZip }, { itinerary.contactInfo.customerCountry }</td>
            </tr>
            <tr>
                <td>Time at booking</td>
                <td>{ itinerary.bookTime }</td>
            </tr>
            <tr>
                <td>Total cost of stay</td>
                <td>${ itinerary.totalCostOfStay }</td>
            </tr>
            <tr>
                <td>Room choice</td>
                <td>{ itinerary.roomType }</td>
            </tr>
            <tr>
                <td>Number of adults</td>
                <td>{ itinerary.numAdults }</td>
            </tr>
            <tr>
                <td>Check-in date</td>
                <td>{ itinerary.enterDate }</td>
            </tr>
            <tr>
                <td>Check-out date</td>
                <td>{ itinerary.exitDate }</td>
            </tr>
            <tr>
                <td>Number of nights</td>
                <td>{ itinerary.numNights }</td>
            </tr>
            <tr>
                <td>Check-out date</td>
                <td>{ itinerary.exitDate }</td>
            </tr>
            <tr>
                <td>{' '}</td>
                <td>{' '}</td>
            </tr>
            <tr>
                <td>Optional addons:</td>
                <td>{' '}</td>
            </tr>
            <tr>
                <td>Care Package</td>
                <td>{ itinerary.addons.carePackage.toString() }</td>
            </tr>
            <tr>
                <td>Late Checkout</td>
                <td>{ itinerary.addons.carePackage.toString() }</td>
            </tr>
            <tr>
                <td>Breakfast</td>
                <td>{ itinerary.addons.breakfast.toString() }</td>
            </tr>
            <tr>
                <td>Shuttle Ride</td>
                <td>{ itinerary.addons.shuttleRide.toString() }</td>
            </tr>
            <tr>
                <td>Luggage Hold</td>
                <td>{ itinerary.addons.luggageHold.toString() }</td>
            </tr>
            </tbody>
        </Table>
    );
}