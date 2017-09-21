import React, { Component } from 'react';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';
import 'react-dom';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Landing from './Landing';

//to-do: define number of rooms available per day, see if available. If conditions not met, remove from results
//to-do: link action to pressing room button

//===============================================================================================//

class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAdults: 2,
            roomSelection: '',
            selectedDates: '',
            expandExcaliburView: false,
            expandNuggetView: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.numAdults > 3) {
            console.log('remove smaller room options');
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            roomSelection: event.target.value
        });
    }


    render () {
        console.log(this.state);

        return (
            <div>
                <h1>Testing temp: {this.props.testvalue}</h1>

                <p>Results that match {this.state.numAdults} adult guest from 12/25/2017 to 12/31/2017:</p>
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
                                <Button bsStyle="success" onClick={ ()=> this.setState({ expandExcaliburView: !this.state.expandExcaliburView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandExcaliburView}>
                                    <div>
                                        <h1>Executive Suite (Room size: 986 sq) $150.00/night</h1>
                                        <Button bsStyle="success" value="executiveSuite" onClick={this.handleSubmit}>Book now</Button>
                                        <p>One king bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Family Accommodation (Room size: 700 sq) $120.00/night</h1>
                                        <Button bsStyle="success" value="familyAccommodation" onClick={this.handleSubmit}>Book now</Button>
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
                                <Button bsStyle="success" onClick={ ()=> this.setState({ expandNuggetView: !this.state.expandNuggetView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandNuggetView}>
                                    <div>
                                        <h1>Den (Room size: 650 sq) $100.00/night</h1>
                                        <Button bsStyle="success" value="den" onClick={this.handleSubmit}>Book now</Button>
                                        <p>One queen bed, city view. Pictures TBD</p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                    <hr />
                                    <div>
                                        <h1>Frugal Traveler (Room size: 500 sq) $75.00/night</h1>
                                        <Button bsStyle="success" value="frugalTraveler" onClick={this.handleSubmit}>Book now</Button>
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

export default connect()(ListResults);


//                                <Button bsStyle="success" href="/checkout">See available rooms</Button>
