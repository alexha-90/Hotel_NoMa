import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function sanctuaryRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        <div id="roomPrice">
                            Villa ${(pricing.villaSanctuary).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 466 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="villaSanctuary" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Ideal for a getaway in the city. Has two very comfortable beds. Free access to our gym.
                        ed vel odio at massa tempor luctus eu sit amet arcu. Nam et libero venenatis, sodales elit in,
                        blandit mi. Morbi at nunc vel neque convallis tincidunt. Donec feugiat mi eu enim maximus volutpat.
                        Maecenas accumsan tortor nulla, eu mattis tortor consectetur sollicitudin. Sed ut lacinia enim,
                        ac ultrices massa. In sed justo sit amet augue pulvinar vestibulum. Curabitur mattis nulla nec
                        eros tempus euismod. Mauris luctus lacinia tellus, at ultrices felis placerat eget.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Priority
                        <div id="roomPrice">
                            ${(pricing.prioritySanctuary).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 424 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="prioritySanctuary" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Nice room on a budget. Not remodeled like our Villa rooms but still nice. Free access to our gyms.
                        Nullam molestie, dui eget vulputate suscipit, tortor libero semper dolor, eget maximus velit nibh
                        ut lectus. Duis a libero a turpis vehicula hendrerit. Sed sed enim justo. Donec vulputate rutrum
                        nunc, id faucibus enim ornare ac. Nam auctor nisi quam, id ornare tortor mollis non. Nunc orci mauris,
                        suscipit nec feugiat ut, porttitor ut ligula. Quisque porttitor dui eget rutrum bibendum. Curabitur
                        eu augue vestibulum, ultricies metus non, fermentum nisi.
                    </p>
                </div>
            </div>
        </div>
    );
}