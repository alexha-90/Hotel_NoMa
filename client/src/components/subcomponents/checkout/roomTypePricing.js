import { connect } from 'react-redux';
import Checkout from '../../Checkout';


function roomTypePricing() {
    switch (this.props.itinerary.roomType) {
        case 'executiveSuite': {
            this.roomCostPerNight = this.props.pricing.executiveSuite;
            break;
        }

        case 'familyAccommodation': {
            this.roomCostPerNight = this.props.pricing.familyAccommodation;
            break;
        }

        case 'den': {
            this.roomCostPerNight = this.props.pricing.den;
            break;
        }

        case 'frugalTraveler': {
            this.roomCostPerNight = this.props.pricing.frugalTraveler;
            break;
        }

        default: {
            //throw new Error("We did not receive a room type for your trip. Please return to the homepage and start a new search");
            alert('worlks');
            console.log('Placeholder for throw error. If removed, unable to access this page directly');
        }
    }
}


export default roomTypePricing;