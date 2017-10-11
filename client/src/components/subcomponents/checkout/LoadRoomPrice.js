// arguments received: this.props.itinerary, this.props.pricing, this.state.roomCost
//===============================================================================================//


export function loadRoomPrice(itinerary, pricing, roomCost) {
    // associate a price with room type selected in previous results page.
    switch (itinerary.roomType) {
        case 'executiveSuite': {
            return roomCost = pricing.executiveSuite;

        }

        case 'bachelorSuite': {
            return roomCost = pricing.bachelorSuite;

        }

        case 'miniatureSuite': {
            return roomCost = pricing.miniatureSuite;

        }

        case 'familySpecialSuite': {
            return roomCost = pricing.familySpecialSuite;

        }

        case 'villaSanctuary': {
            return roomCost = pricing.villaSanctuary;

        }

        case 'prioritySanctuary': {
            return roomCost = pricing.prioritySanctuary;

        }

        case 'viewStandard': {
            return roomCost = pricing.viewStandard;

        }

        case 'noViewStandard': {
            return roomCost = pricing.noViewStandard;

        }

        case 'expressThrifty': {
            return roomCost = pricing.expressThrifty;

        }

        default: {
            //console.log('Placeholder for throw error. If removed, unable to access this page directly');
            // redundancy to show error in production environment
            alert("We did not receive a room type for your trip. Please return to the homepage and start a new search");
            throw new Error("We did not receive a room type for your trip. Please return to the homepage and start a new search");
        }
    }
}