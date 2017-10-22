import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function excaliburRooms(pricing, submit) {
    return (
        <div className="excaliburContainer">
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Executive Suite
                        <div id="roomPrice">
                            ${(pricing.executiveSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 986 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="executiveSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        One king bed, city view. Free $50 bar voucher, concierge service and exclusive valet parking.
                        Hot tub inside of room. A stay you will remember.Enim eiusmod high life accusamus terry ad squid.
                        d nunc. Nulla feugiat aliquam mollis. Maecenas eget volutpat nisi. Aliquam eget purus lacus.
                        Phasellus at fermentum sapien. Mauris posuere sapien non turpis gravida, et blandit justo
                        auctor. Praesent vel dolor vitae nibh viverra ultrices. In varius posuere varius. Pellentesque
                        convallis venenatis neque at pellentesque.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Bachelor Suite
                        <div id="roomPrice">
                            ${(pricing.bachelorSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 875 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="bachelorSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Great for accommodating a large number of guests. Complimentary bottle of champagne.
                        One king bed, city view. Free $25 bar voucher, concierge service.
                        Phasellus id justo volutpat, sollicitudin odio vitae, finibus libero. Nullam aliquet aliquet tempor.
                        Ut ipsum dui, semper eu ex a, facilisis sollicitudin orci. Nulla porta nisi sit amet finibus fringilla.
                        Nullam posuere blandit leo. Duis laoreet congue justo sit amet placerat. Nullam sit amet orci eu lacus
                        efficitur placerat eget et nunc. Mauris mattis tincidunt neque, uam eget purus lacus. Phasellus at fermen
                        nec hendrerit nibh pellentesque vitae. Curabitur nec feugiat urna. Praesent faucibus iaculis purus at maximus.
                    </p>
                </div>
            </div>
        </div>
    );
}