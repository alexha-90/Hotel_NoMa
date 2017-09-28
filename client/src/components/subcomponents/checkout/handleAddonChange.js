export function handleAddonChange(event) {
    switch (event.target.name) {
        case 'carePackage' : {
            this.setState({carePackage: !this.state.carePackage});

            setTimeout(() => {
                if (this.state.carePackage) {
                    this.setState({carePackageTogglePrice: '$' + this.props.pricing.carePackageCost.toFixed(2)});
                } else {
                    this.setState({carePackageTogglePrice: null});
                }
            }, 100);
            break;
        }

        case 'lateCheckout' : {
            this.setState({lateCheckout: !this.state.lateCheckout});

            setTimeout(() => {
                if (this.state.lateCheckout) {
                    this.setState({lateCheckoutTogglePrice: '$' + this.props.pricing.lateCheckoutCost.toFixed(2)});
                } else {
                    this.setState({lateCheckoutTogglePrice: null});
                }
            }, 100);
            break;
        }

        case 'shuttleRide' : {
            this.setState({shuttleRide: !this.state.shuttleRide});

            setTimeout(() => {
                if (this.state.shuttleRide) {
                    this.setState({shuttleTogglePrice: '$' + (this.props.pricing.shuttleRideCost * this.props.itinerary.numAdults).toFixed(2)});
                } else {
                    this.setState({shuttleTogglePrice: null});
                }
            }, 100);
            break;
        }

        case 'breakfast' : {
            this.setState({breakfast: !this.state.breakfast});

            setTimeout(() => {
                if (this.state.breakfast) {
                    this.setState({breakfastTogglePrice: '$' + (this.props.pricing.breakfastCost * this.props.itinerary.numNights * this.props.itinerary.numAdults).toFixed(2)});
                } else {
                    this.setState({breakfastTogglePrice: null});
                }
            }, 100);
            break;
        }

        // Prevent unexpected addon behavior
        default: {
            this.setState({
                carePackageTogglePrice: null,
                lateCheckoutTogglePrice: null,
                shuttleTogglePrice: null,
                breakfastTogglePrice: null
            });
        }
    }
    // update total cost every time an addon is toggled

}

