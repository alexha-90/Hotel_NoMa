import React, { Component } from 'react';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';
import 'react-dom';
import { Link } from 'react-router-dom';
import Landing from './Landing';

//===============================================================================================//

class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAdults: props.numAdults,
            expandRoomExcalibur: false,
            expandRoomNugget: false
        };


    }

    render () {
        console.log(Landing.props);

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
                                <h1>Excalibur</h1>
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
                                <Button bsStyle="success" onClick={ ()=> this.setState({ expandRoomExcalibur: !this.state.expandRoomExcalibur })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandRoomExcalibur}>
                                    <div>
                                        <h1>Executive Suite (Room size: 986 sq) $154.99/night</h1>
                                        <Button bsStyle="success" href="/checkout">Book now</Button>
                                        <p>One king bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Family Accommodation (Room size: 700 sq) $120.00/night</h1>
                                        <Button bsStyle="success" href="/checkout">Book now</Button>
                                        <p>Two Double beds, swimming pool view. Pictures TBD</p>
                                        Number of form groups, we recommend building a higher-level component encapsulating a complete field
                                        group that renders the label, the control, and any other necessary components. We don't provide this
                                        out-of-the-box.
                                    </div>
                                </Panel>
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
                                <h1>Nugget</h1>
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
                                <Button bsStyle="success" onClick={ ()=> this.setState({ expandRoomNugget: !this.state.expandRoomNugget })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandRoomNugget}>
                                    <div>
                                        <h1>Den (Room size: 650 sq) $99.99/night</h1>
                                        <Button bsStyle="success" href="/checkout">Book now</Button>
                                        <p>One queen bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Frugal Traveler (Room size: 500 sq) $74.99/night</h1>
                                        <Button bsStyle="success" href="/checkout">Book now</Button>
                                        <p>One Double bed, swimming pool view. Pictures TBD</p>
                                        Number of form groups, we recommend building a higher-level component encapsulating a complete field
                                        group that renders the label, the control, and any other necessary components. We don't provide this
                                        out-of-the-box.
                                    </div>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default ListResults;

//                                <Button bsStyle="success" href="/checkout">See available rooms</Button>
