import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRoomType } from '../actions';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';

import ExcaliburPhotoModal from './subcomponents/results/ExcaliburPhotoModal';
import MardiGrasPhotoModal from './subcomponents/results/MardiGrasPhotoModal';
import SanctuaryPhotoModal from './subcomponents/results/SanctuaryPhotoModal';
import StandardPhotoModal from './subcomponents/results/StandardPhotoModal';
import ThriftyPhotoModal from './subcomponents/results/ThriftyPhotoModal';

import { excaliburAmenities } from './subcomponents/results/ExcaliburAmenities';
import { mardiGrasAmenities } from './subcomponents/results/MardiGrasAmenities';
import { sanctuaryAmenities } from './subcomponents/results/SanctuaryAmenities';
import { standardAmenities } from './subcomponents/results/StandardAmenities';
import { thriftyAmenities } from './subcomponents/results/ThriftyAmenities';

import { excaliburRooms } from './subcomponents/results/ExcaliburRooms';
import { mardiGrasRooms } from './subcomponents/results/MardiGrasRooms';
import { sanctuaryRooms } from './subcomponents/results/SanctuaryRooms';
import { standardRooms } from './subcomponents/results/StandardRooms';
import { thriftyRooms } from './subcomponents/results/ThriftyRooms';


// imgur photo links: https://imgur.com/a/wwfXK, https://imgur.com/a/oNr4d, https://imgur.com/a/roguQ
//===============================================================================================//

// maybe remove props from constructor

class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandExcaliburView: false,
            expandMardiGrasShowView: false,
            expandSanctuaryShowView: false,
            expandQuartersShowView: false,
            expandStandardShowView: false,
            expandThriftyShowView: false,

            excaliburShow: false,
            mardiGrasShow: false,
            sanctuaryShow: false,
            quartersShow: false,
            standardShow: false,
            thriftyShow: false,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }


    handleSubmit(event) {
        event.preventDefault();
        let roomSelection = event.target.value;
        this.props.dispatch(updateRoomType(roomSelection));
        this.setState({redirect: true});
    }


    render () {
        if (this.state.redirect) {
            return <Redirect push to="/checkout" />;
        }

        return (
            <div className="container">

                <div>
                    <Grid>
                        <Row>
                            <Col sm={1} md={4}><hr /></Col>
                            <Col sm={10} md={4}>
                                <div id="centeredHeading">
                                    <h3>Itinerary</h3>
                                </div>
                            </Col>
                            <Col sm={1} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                <div className="searchBanner">
                    <span>
                        {this.props.itinerary.numAdults} Adult(s)
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        {this.props.itinerary.numNights} Nights
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                        {this.props.itinerary.enterDate} - {this.props.itinerary.exitDate}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <br />
                    <div id="secondRow">
                        <span>
                            <Link to="/">Modify Dates</Link>
                        </span>
                    </div>
                </div>


                <div>
                    <Grid>
                        <Row>
                            <Col sm={1} md={4}><hr /></Col>
                            <Col sm={10} md={4}>
                                <div id="centeredHeading">
                                    <h3>Guest Rooms</h3>
                                </div>
                            </Col>
                            <Col sm={1} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>


                <h2 id="roomTypeHeading">Premier Suites:</h2>
                <div id="resultContainer">
                    <Grid id="fullResultSpan">
                        <Row>
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="excaliburPreview" onClick={()=>this.setState({ excaliburShow: true })} src="https://i.imgur.com/yiLu7Pc.jpg" />
                                    <ExcaliburPhotoModal show={this.state.excaliburShow} onHide={()=>this.setState({ excaliburShow: false })} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>

                                {/* imported component - Excalibur amenities */}
                                {excaliburAmenities(this.props.pricing)}

                                <Button bsStyle="default" block onClick={ ()=> this.setState({ expandExcaliburView: !this.state.expandExcaliburView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandExcaliburView}>

                                    {/* imported component - Excalibur rooms */}
                                    {excaliburRooms(this.props.pricing, this.handleSubmit)}

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div id="resultContainer">
                    <Grid id="fullResultSpan">
                        <Row>
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="mardiGrasPreview" onClick={()=>this.setState({ mardiGrasShow: true })} src="https://i.imgur.com/2bh5ZWF.jpg" />
                                    <MardiGrasPhotoModal show={this.state.mardiGrasShow} onHide={()=>this.setState({ mardiGrasShow: false })} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>

                                {/* imported component - Mardi Gras amenities */}
                                {mardiGrasAmenities(this.props.pricing)}

                                <Button bsStyle="default" block onClick={ ()=> this.setState({ expandMardiGrasView: !this.state.expandMardiGrasView })}>
                                    See available rooms
                                </Button>

                                <Panel collapsible expanded={this.state.expandMardiGrasView}>

                                    {/* imported component - Mardi Gras rooms */}
                                    {mardiGrasRooms(this.props.pricing, this.handleSubmit)}

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <br />


                <h2 id="roomTypeHeading">Traditional Rooms:</h2>
                <div id="resultContainer">
                    <Grid id="fullResultSpan">
                        <Row>
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="sanctuaryPreview" onClick={()=>this.setState({ sanctuaryShow: true })} src="https://i.imgur.com/5RUIngv.jpg" />
                                    <SanctuaryPhotoModal show={this.state.sanctuaryShow} onHide={()=>this.setState({ sanctuaryShow: false })} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>

                                {/* imported component - Sanctuary amenities */}
                                {sanctuaryAmenities(this.props.pricing)}

                                <Button bsStyle="default" block onClick={ ()=> this.setState({ expandSanctuaryShowView: !this.state.expandSanctuaryShowView })}>
                                    See available rooms
                                </Button>
                                <Panel collapsible expanded={this.state.expandSanctuaryShowView}>

                                    {/* imported component - Sanctuary rooms */}
                                    {sanctuaryRooms(this.props.pricing, this.handleSubmit)}

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div id="resultContainer">
                    <Grid id="fullResultSpan">
                        <Row>
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="sanctuaryPreview" onClick={()=>this.setState({ standardShow: true })} src="https://i.imgur.com/6Rw90rg.jpg" />
                                    <StandardPhotoModal show={this.state.standardShow} onHide={()=>this.setState({ standardShow: false })} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>

                                {/* imported component - Standard amenities */}
                                {standardAmenities(this.props.pricing)}

                                <Button bsStyle="default" block onClick={ ()=> this.setState({ expandStandardShowView: !this.state.expandStandardShowView })}>
                                    See available rooms
                                </Button>

                                <Panel collapsible expanded={this.state.expandStandardShowView}>

                                    {/* imported component - Standard rooms */}
                                    {standardRooms(this.props.pricing, this.handleSubmit)}

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>




                <div id="resultContainer">
                    <Grid id="fullResultSpan">
                        <Row>
                            <Col id="thumbResult" sm={4} md={4}>
                                <div className="thumbPhoto">
                                    <img alt="sanctuaryPreview" onClick={()=>this.setState({ thriftyShow: true })} src="https://i.imgur.com/B5NCCYV.jpg" />
                                    <ThriftyPhotoModal show={this.state.thriftyShow} onHide={()=>this.setState({ thriftyShow: false })} />
                                </div>
                            </Col>
                            <Col id="highlightResult" sm={8} md={8}>

                                {/* imported component - Thrifty amenities */}
                                {thriftyAmenities(this.props.pricing)}

                                <Button bsStyle="default" block onClick={ ()=> this.setState({ expandThriftyShowView: !this.state.expandThriftyShowView })}>
                                    See available rooms
                                </Button>

                                <Panel collapsible expanded={this.state.expandThriftyShowView}>

                                    {/* imported component - Thrifty rooms */}
                                    {thriftyRooms(this.props.pricing, this.handleSubmit)}

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <br />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
        pricing: state.pricingReducer
    };
}

export default connect(mapStateToProps)(ListResults);