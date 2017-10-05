import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function thriftyRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <p className="roomExpandedLeftHeadline">
                        Express ${(pricing.expressThrifty).toFixed(2)}/night
                        <h4>(Room size: 200 sq. ft)</h4>
                    </p>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="express" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        There is no better way to truly experience living on a budget in San Francisco than staying a night in this room.
                        The shower head and toilet will barely work. Bring your own towels and toiletries. We purposely situated these rooms
                        adjacent to the laundry machines that are available for our most expensive options.
                        By booking this room you agree to not complain about bed bugs.
                    </p>
                </div>
            </div>
        </div>
    );
}