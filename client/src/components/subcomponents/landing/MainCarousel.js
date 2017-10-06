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
                             src="https://i.imgur.com/45skKIK.jpg"/>
                    </div>
                    <div>
                        <img alt="temp2"
                             src="https://i.imgur.com/4PLUyt2.jpg"/>
                    </div>
                    <div>
                        <img alt="temp3"
                             src="https://i.imgur.com/Ofk9AAr.jpg"/>
                    </div>
                    <div>
                        <img alt="temp4"
                             src="https://i.imgur.com/mlvCGdB.jpg"/>
                    </div>
                    <div>
                        <img alt="temp5"
                             src="https://i.imgur.com/8yKSFv9.jpg"/>
                    </div>
                    <div>
                        <img alt="temp6"
                             src="https://i.imgur.com/0hRKoFZ.jpg"/>
                    </div>
                    <div>
                        <img alt="temp7"
                             src="https://i.imgur.com/bkSu5QJ.jpg"/>
                    </div>
                    <div>
                        <img alt="temp8"
                             src="https://i.imgur.com/F1tdHX1.jpg"/>
                    </div>
                    <div>
                        <img alt="temp9"
                             src="https://i.imgur.com/Vi17yoO.jpg"/>
                    </div>
                </Carousel>
                <br />
            </div>
        );
}