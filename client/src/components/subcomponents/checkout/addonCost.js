const addonCost = (pricing, state) => {
    let carePackageCost = pricing.carePackageCost;
    let lateCheckoutCost = pricing.lateCheckoutCost;
    let shuttleRideCost = pricing.shuttleRideCost;
    let breakfastCost = pricing.breakfastCost;

    // if addon option is not selected, default to zero. Else get price from redux store. Sum is added to total
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
};

export default addonCost;