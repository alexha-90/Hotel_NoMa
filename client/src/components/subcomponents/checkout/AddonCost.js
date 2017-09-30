// arguments received: this.props.pricing, this.state
//===============================================================================================//

export function addonCost(pricing, state) {
    // pricing obtained from reducers/pricing.js file. Very easy for hotel management to adjust prices.
    let carePackageCost = pricing.carePackageCost;
    let lateCheckoutCost = pricing.lateCheckoutCost;
    let shuttleRideCost = pricing.shuttleRideCost;
    let breakfastCost = pricing.breakfastCost;

    // this approach avoids attempting to sum null values in total itinerary cost
    if (!state.carePackage) {
        carePackageCost = 0;
    }
    if (!state.lateCheckout) {
        lateCheckoutCost = 0;
    }
    if (!state.shuttleRide) {
        shuttleRideCost = 0;
    }
    if (!state.breakfast) {
        breakfastCost = 0;
    }
    return carePackageCost + lateCheckoutCost + shuttleRideCost + breakfastCost;
}