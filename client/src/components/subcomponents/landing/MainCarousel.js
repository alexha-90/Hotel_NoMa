import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

export default () => {
        return (
            <div>
                <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"}
                          useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img alt="temp1"
                             src="https://images.trvl-media.com/hotels/1000000/700000/690700/690688/690688_4_z.jpg"/>
                    </div>
                    <div>
                        <img alt="temp2"
                             src="https://images.trvl-media.com/hotels/16000000/15830000/15822500/15822448/c0b95839_z.jpg"/>
                    </div>
                    <div>
                        <img alt="temp3"
                             src="https://exp.cdn-hotels.com/hotels/18000000/17930000/17924300/17924225/dfea48a7_z.jpg"/>
                    </div>
                    <div>
                        <img alt="temp4"
                             src="https://exp.cdn-hotels.com/hotels/16000000/15830000/15822500/15822448/07e0aea9_z.jpg"/>
                    </div>
                    <div>
                        <img alt="temp5"
                             src="https://storage.googleapis.com/cdncontent/web2/crestonbarkly/images/slider/crest-on-barkly-hotel-room-st-kilda-10.jpg"/>
                    </div>
                    <div>
                        <img alt="temp6"
                             src="https://static1.squarespace.com/static/52e665a0e4b0b788a312e25b/53038575e4b0f8636b5f97a9/53038576e4b07a6f640a3911/1392739703363/hotel-chelton-photos-rooftop-terrace-header.jpg"/>
                    </div>
                </Carousel>
            </div>
        );
}