import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMapModal from '../subcomponents/footer/GoogleMapModal';
import Iframe from 'react-iframe';

//===============================================================================================//

class Footer extends Component {
    state = { googleMapShow: false };

    render() {
        return (
            <div className="footer">
                <hr />

                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={1}></Col>
                        <Col sm={6} md={3}>
                            <div className="thumbPhoto">
                                <img alt="googleMap" onClick={()=>this.setState({ googleMapShow: true })} src="http://is4.mzstatic.com/image/thumb/Purple128/v4/0d/72/94/0d729415-5f42-91c4-9c98-b9cb529819bc/source/175x175bb.jpg" />
                                <GoogleMapModal show={this.state.googleMapShow} onHide={()=>this.setState({ googleMapShow: false })} />
                            </div>
                        </Col>
                        <div className="footerOffset">
                            <Col sm={6} md={3}>

                                <ul>92552 Market St</ul>
                                <ul>San Francisco, CA 94442</ul>
                                <ul>© 2017 Hotel NoMas</ul>
                                    <ul><img src="http://optinflow.com/wp-content/uploads/2017/03/fbinstatwitter.png" id="social_links" alt="social_links"/></ul>
                            </Col>
                            <Col sm={6} md={3}>

                                <ul><Link to="/about">About Us</Link></ul>
                                <ul><Link to="/contact">Contact Us</Link></ul>
                                <ul><Link to="/terms">Terms of Use</Link></ul>
                            </Col>
                    </div>
                        <Col sm={6} md={1}></Col>
                    </Row>
                </Grid>
                golden gate bridge graphic by <a href="https://thenounproject.com/prosymbols">tnp_prosymbols</a> from <a href="https://thenounproject.com/">TheNounProject</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a>
            </div>
        );
    }
}

export default Footer;