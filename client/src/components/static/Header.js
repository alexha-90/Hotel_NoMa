import React, { Component } from 'react';
import { MenuItem, NavDropdown, Nav, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//future feature: login

//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div className="headerBlackout">
                    <div className="headerContainer">
                        <Grid id="headerRow">
                            <Row id="black">
                                <Col sm={12} md={4} lg={4}>
                                    <a href="/">
                                        <img id="hotelNomaLogoLeft" src="https://i.imgur.com/w7vxAMG.png" alt="logo"/>
                                    </a>
                                </Col>
                                <Col sm={0} md={0} lg={1}>

                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="headerRightContent">
                                        <Nav>
                                            <NavDropdown eventKey="1" title="Our Other Properties" id="dropdownNav">
                                                <MenuItem eventKey={1.1}>
                                                    <img src="https://png.icons8.com/market-square/office/30" alt="HotelMarketplace" />
                                                    &nbsp;&nbsp;&nbsp;<Link to="#">Hotel Marketplace</Link>
                                                </MenuItem>
                                                <MenuItem divider />
                                                <MenuItem eventKey={1.2}>
                                                    <img src="https://png.icons8.com/puffin-bird/color/30" alt="HotelNorthBeach" />
                                                    &nbsp;&nbsp;&nbsp;<Link to="#">Hotel North Beach</Link>
                                                </MenuItem>
                                                <MenuItem divider />
                                                <MenuItem eventKey={1.3}>
                                                    <img src="https://png.icons8.com/beach/dusk/30" alt="HotelSouthBeach"/>
                                                    &nbsp;&nbsp;&nbsp;<Link to="#">Hotel South Beach</Link>
                                                </MenuItem>
                                                <MenuItem divider />
                                            </NavDropdown>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col sm={12} md={4} lg={3}>
                                    <div id="retrieveReservationsText">
                                        <Link to="/reservations" id="dropdownNav">
                                            Reservation Lookup
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
            </div>
        );
    }
}

export default Header;