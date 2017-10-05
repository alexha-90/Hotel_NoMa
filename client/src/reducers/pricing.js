//================================Welcome Hotel NoMa management!!!!===============================//
// Adjust all pricing here. Cents can be added, but will be rounded and only two digits displayed //
//================================================================================================//

export default function(state={
    // Room rates (adjust digits below):
    executiveSuite: 399.00,
    bachelorSuite: 325.00,
    miniatureSuite: 299.00,
    familySpecialSuite: 250.00,
    villaSanctuary: 199.00,
    prioritySanctuary: 175.00,
    viewStandard: 125.00,
    noViewStandard: 100.00,
    expressThrifty: 75.00,

    // Tax rates (adjust digits below):
    occupancyTax: 0.0525,
    tourismTax: 0.03125,

    // Service charges (adjust digits below):
    cleaningCost: 12.00,

    // Addon services (adjust digits below):
    carePackageCost: 7.00,
    lateCheckoutCost: 10.00,
    shuttleRideCost: 25.00,
    breakfastCost: 10.00,
    luggageHoldCost: 0.00
}, ) {
        return state;
    }