// Adjust room pricing here. Cents can be added, but will be rounded and only two digits displayed

export default function(state={
    // Room rates
    executiveSuite: 150.00,
    familyAccommodation: 120.00,
    den: 100.00,
    frugalTraveler: 75.00,


    // Tax rates
    occupancyTax: 0.0525,
    tourismTax: 0.03125,

    // Service charges
    cleaningCost: 12.00,

    // Addon services
    carePackageCost: 5.00,
    lateCheckoutCost: 10.00,
    shuttleRideCost: 25.00,
    breakfastCost: 10.00,
    }, ) {
        return state;
    }