export function handleAddonChange(event) {
    switch (event.target.name) {
        case 'carePackage' : {
            this.setState({carePackage: !this.state.carePackage});

            setTimeout(() => {
                if (this.state.carePackage) {
                    this.setState({carePackageCost: '$' + this.props.pricing.carePackageCost.toFixed(2)});
                } else {
                    this.setState({carePackageCost: null});
                }
            }, 100);
            break;
        }

        case 'lateCheckout' : {
            this.setState({lateCheckout: !this.state.lateCheckout});

            setTimeout(() => {
                if (this.state.lateCheckout) {
                    this.setState({lateCheckoutCost: '$' + this.props.pricing.lateCheckoutCost.toFixed(2)});
                } else {
                    this.setState({lateCheckoutCost: null});
                }
            }, 100);
            break;
        }

        case 'shuttleRide' : {
            this.setState({shuttleRide: !this.state.shuttleRide});

            setTimeout(() => {
                if (this.state.shuttleRide) {
                    this.setState({shuttleRideCost: '$' + (this.props.pricing.shuttleRideCost * this.props.itinerary.numAdults).toFixed(2)});
                } else {
                    this.setState({shuttleRideCost: null});
                }
            }, 100);
            break;
        }

        case 'breakfast' : {
            this.setState({breakfast: !this.state.breakfast});

            setTimeout(() => {
                if (this.state.breakfast) {
                    this.setState({breakfastCost: '$' + (this.props.pricing.breakfastCost * this.props.itinerary.numNights * this.props.itinerary.numAdults).toFixed(2)});
                } else {
                    this.setState({breakfastCost: null});
                }
            }, 100);
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

}

