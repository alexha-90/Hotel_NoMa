//================================Welcome Hotel NoMa management!!!!===============================//
// Adjust all pricing here. Cents can be added, but will be rounded and only two digits displayed //
//================================================================================================//

export default function(state={
    // Room rates (adjust digits below):
    executiveSuite: 150.00,
    familyAccommodation: 120.00,
    den: 100.00,
    frugalTraveler: 75.00,

    // Tax rates (adjust digits below):
    occupancyTax: 0.0525,
    tourismTax: 0.03125,

    // Service charges (adjust digits below):
    cleaningCost: 12.00,

    // Addon services (adjust digits below):
    carePackageCost: 5.00,
    lateCheckoutCost: 10.00,
    shuttleRideCost: 25.00,
    breakfastCost: 10.00,
}, ) {
        return state;
    }