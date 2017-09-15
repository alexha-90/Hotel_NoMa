import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import 'react-dom';
import { Link } from 'react-router-dom';

class ListResults extends Component {
    render () {
        return (
            <div>
                <p>Results that match 1 adult guest from 12/25/2017 to 12/31/2017:</p>
                <Button bsStyle="primary">Modify Search</Button>
                <div id="excaliburResult">
                    <Grid>
                        <Row className="resultsGrid">
                            <Col id="thumbResult" sm={4} md={4}>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                                <br />
                                <br />
                                <p><img src="http://cdn.linkresearchtools.com/wp-content/uploads/2014/09/10-rated-on-tripadvisor-badge.png" alt="tripadvisor" /></p>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>
                                Excalibur
                                Starting at $99.99/night
                                {/*
                                <div id="priceResult">
                                    Starting at $99.99/night
                                </div>
                                */}
                                <div className="amenities">
                                    <Grid>
                                        <Row className="amenityText">
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.whotelsnewyork.com/wp-content/uploads/2016/11/Wifi-icon.png" alt="wifi" />
                                                <p>Wifi</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="https://www.thekitchenmagpie.com/wp-content/themes/restored316-divine/tr-images/icon-cutlery-white.png" alt="wifi" />
                                                <p>Breakfast</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.suncityorovalley.com/wp-content/plugins/wunderground/assets/img/icons/i/clear.gif" alt="wifi" />
                                                <p>View</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="https://cdn.thingiverse.com/renders/d7/1b/96/4d/7d/130Animals-Dog-Track-icon_thumb_small.jpg" alt="wifi" />
                                                <p>Pets OK</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.bluechipholidays.co.uk/sites/default/files/Parking-Icon_0.png" alt="wifi" />
                                                <p>Parking</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.whotelsnewyork.com/wp-content/uploads/2016/11/Wifi-icon.png" alt="wifi" />
                                                <p>Wifi</p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <Link to="#">More details&nbsp;&nbsp;</Link>
                                <Link to="#">Room size: 986 sq. ft&nbsp;&nbsp;</Link>
                                <Button bsStyle="success" href="/checkout">See available rooms</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div id="excaliburResult">
                    <Grid>
                        <Row className="resultsGrid">
                            <Col id="thumbResult" sm={4} md={4}>
                                <img src="https://tcoyd.org/media/uploads/image-panel/ComplimentaryBreakfast_Lunch-icon_klGOWgZ.png.100x100_q85_scale.png" alt="breakfast_icon" />
                                <br />
                                <br />
                                <p><img src="http://cdn.linkresearchtools.com/wp-content/uploads/2014/09/10-rated-on-tripadvisor-badge.png" alt="tripadvisor" /></p>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>
                                <h3>Nugget</h3>
                                <div id="priceResult">
                                    <h3>Starting at $67.99/night</h3>
                                </div>
                                <div className="amenities">
                                    <Grid>
                                        <Row className="amenityText">
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.whotelsnewyork.com/wp-content/uploads/2016/11/Wifi-icon.png" alt="wifi" />
                                                <p>Wifi</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="https://www.thekitchenmagpie.com/wp-content/themes/restored316-divine/tr-images/icon-cutlery-white.png" alt="wifi" />
                                                <p>Breakfast</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.bluechipholidays.co.uk/sites/default/files/Parking-Icon_0.png" alt="wifi" />
                                                <p>Parking</p>
                                            </Col>
                                            <Col id="thumbResult" sm={2} md={2}>
                                                <img src="http://www.whotelsnewyork.com/wp-content/uploads/2016/11/Wifi-icon.png" alt="wifi" />
                                                <p>Wifi</p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <Link to="#">Room size: 775 sq. ft&nbsp;&nbsp;</Link>
                                <Button bsStyle="success" href="/checkout">See available rooms</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default ListResults;
