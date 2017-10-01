import { updateItineraryTotalCost } from '../../../actions';

// not used i think

export function handleAddonChange(event, b, state, pricing, itinerary) {
    switch (event.target.name) {
        case 'carePackage' : {
            this.setState({carePackage: !state.carePackage});
            setTimeout(() => {
                if (state.carePackage) {
                    this.setState({carePackageCost: '$' + pricing.carePackageCost.toFixed(2)});
                    itinerary.carePackage = true;
                } else {
                    this.setState({carePackageCost: null});
                }
            }, 200);
            break;
        }

        case 'lateCheckout' : {
            this.setState({lateCheckout: !state.lateCheckout});
            setTimeout(() => {
                if (state.lateCheckout) {
                    this.setState({lateCheckoutCost: '$' + pricing.lateCheckoutCost.toFixed(2)});
                    itinerary.lateCheckout = true;
                } else {
                    this.setState({lateCheckoutCost: null});
                }
            }, 200);
            break;
        }

        case 'shuttleRide' : {
            this.setState({shuttleRide: !state.shuttleRide});
            setTimeout(() => {
                if (state.shuttleRide) {
                    this.setState({shuttleRideCost: '$' + (pricing.shuttleRideCost * itinerary.numAdults).toFixed(2)});
                    itinerary.shuttleRide = true;
                } else {
                    this.setState({shuttleRideCost: null});
                }
            }, 200);
            break;
        }

        case 'breakfast' : {
            this.setState({breakfast: !state.breakfast});
            setTimeout(() => {
                if (state.breakfast) {
                    this.setState({breakfastCost: '$' + (pricing.breakfastCost * itinerary.numNights * itinerary.numAdults).toFixed(2)});
                    itinerary.breakfast = true;
                } else {
                    this.setState({breakfastCost: null});
                }
            }, 200);
            break;
        }

        // Prevent unexpected addon behavior
        default: {
            this.setState({
                carePackageCost: null,
                lateCheckoutCost: null,
                shuttleRideCost: null,
                breakfastCost: null
            });
        }
    }
    // update total cost every time an addon is toggled
    setTimeout(() => {
        this.props.dispatch(updateItineraryTotalCost(b));
    }, 200);
}