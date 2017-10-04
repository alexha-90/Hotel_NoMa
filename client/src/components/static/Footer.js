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

                    <Grid id="centeredGoogleMap">
                        <Row id="black">
                            <Col sm={2} md={2}>{' '}</Col>
                            <Col sm={8} md={8}>
                                <Iframe url={ googleMapURL }
                                        width="100%"
                                        height="100px"
                                        position="static"
                                        allowFullScreen />
                            </Col>
                            <Col sm={2} md={2}>{' '}</Col>
                        </Row>
                    </Grid>
                    <Grid id="centeredFooterText">
                        <Row>
                            <Col sm={2} md={2}>{' '}</Col>
                            <Col sm={8} md={8}>
                                <Link to="/about">About Us</Link>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="/contact">Contact Us</Link>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="/terms">Terms of Use</Link>
                                <br />
                                82796 Market St, San Francisco, CA 94442
                                <br />
                                Follow us on social media:&nbsp;
                                <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
                                    <img src="https://png.icons8.com/facebook/dusk/20" title="Facebook" alt="facebook"/>
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="https://www.twitter.com" rel="noopener noreferrer">
                                    <img src="https://png.icons8.com/twitter/dusk/20" title="Twitter" alt="twitter"/>
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                                    <img src="https://png.icons8.com/instagram-old/dusk/20" title="Instagram Old" alt="instagram"/>
                                </a>
                                <br />
                                © 2017 Alex Ha
                                <br />
                                <hr id="footerBar"/>
                            </Col>
                            <Col sm={2} md={2}>{' '}</Col>
                        </Row>
                    </Grid>




                    <div id="footerLicensingColor">
                        <h6 id="footerLicensing">
                        golden gate bridge graphic by <a href="https://thenounproject.com/prosymbols">tnp_prosymbols</a>
                        from <a href="https://thenounproject.com/">TheNounProject</a> is licensed
                        under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>.
                        Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">
                        LogoMaker.com. </a><a href="https://icons8.com">Icon pack by Icons8</a>
                        </h6>
                    </div>

            </div>
        );
    }
}

export default Footer;