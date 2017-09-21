// Adjust room pricing here. Cents can be added, but will be rounded and only two digits displayed

export default function(state={
    executiveSuite: (150).toFixed(2),
    familyAccommodation: (120).toFixed(2),
    den: (100).toFixed(2),
    frugalTraveler: (75).toFixed(2),
    }, ) {
        return state;
    }