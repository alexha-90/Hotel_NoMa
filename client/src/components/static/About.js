import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <Carousel>
                    <div>
                        <img src="https://tpc.googlesyndication.com/simgad/1986230107212960889" alt="temp1"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://tpc.googlesyndication.com/simgad/1986230107212960889" alt="temp2"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://tpc.googlesyndication.com/simgad/1986230107212960889" alt="temp3"/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default About;