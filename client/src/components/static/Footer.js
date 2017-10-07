import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

//===============================================================================================//

class Footer extends Component {
    state = { googleMapShow: false };

    render() {
        const googleMapURL='https://www.google.com/maps/embed/v1/place?q=37.788383%2C%20-122.407793&key=' + process.env.REACT_APP_GOOGLE_MAPS_KEY;

        return (
            <div className="footerContainer">

                    test
            </div>
        );
    }
}

export default Footer;