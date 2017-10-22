import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function standardRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        With View
                        <div id="roomPrice">
                            ${(pricing.viewStandard).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 375 sq. ft)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="viewStandard" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        This is a basic hotel room. Has the amenities you would typically expect. has a view of street.
                        volutpat consequat. Nullam tincidunt ligula neque, ac aliquam odio interdum vitae. Nam at cursus leo.
                        Donec vel tincidunt velit. Donec sit amet ex efficitur, volutpat neque nec, placerat metus.
                        Pellentesque pulvinar auctor nibh, vel sollicitudin libero sollicitudin eget. Curabitur eu sapien orci.
                        Curabitur consectetur suscipit euismod. In mattis lobortis porttitor. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut quis facilisis justo. Morbi euismod sapien sit amet ultrices tristique.
                        Ut imperdiet mollis tortor in lobortis.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        No View
                        <div id="roomPrice">
                            ${(pricing.noViewStandard).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 325 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="noViewStandard" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Basic room for those on the go. Has the same layout and amenities as the room with view.
                        Praesent dictum bibendum eros, nec facilisis tellus consequat vel. Morbi pharetra elit vitae
                        elit molestie, eget maximus tortor vehicula. Sed placerat in ligula non feugiat. In nec elementum
                        lorem. Etiam malesuada lorem quis ullamcorper aliquam. Suspendisse sit amet augue mollis, accumsan
                        lectus nec, rhoncus augue. Nulla id augue ante. Morbi n
                    </p>
                </div>
            </div>
        </div>
    );
}