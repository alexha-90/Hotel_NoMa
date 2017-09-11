import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr />

                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={1}></Col>
                        <Col sm={6} md={3}>
                            <img src="https://www.mailinglists.com/sites/default/files/GoogleMap2_small.gif" id="googleMap" alt="location_map" />
                        </Col>
                        <div className="footerOffset">
                            <Col sm={6} md={3}>

                                <ul>92552 Market St</ul>
                                <ul>San Francisco, CA 94442</ul>
                                <ul>© 2017 Hotel NoMas</ul>
                                    <ul><img src="http://optinflow.com/wp-content/uploads/2017/03/fbinstatwitter.png" id="social_links" alt="social_links"/></ul>
                            </Col>
                            <Col sm={6} md={3}>
                                <ul><Link to="/">About Us</Link></ul>
                                <ul><Link to="/">Contact Us</Link></ul>
                                <ul><Link to="/Terms">Terms of Use</Link></ul>
                            </Col>
                        </div>
                        <Col sm={6} md={1}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;