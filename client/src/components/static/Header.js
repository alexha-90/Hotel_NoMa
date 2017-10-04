import React, { Component } from 'react';
import { MenuItem, NavDropdown, Nav, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//future feature: login

//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="headerFull">
                    <a href="/">
                        <img id="hotelNomaLogoLeft" src="https://i.imgur.com/w7vxAMG.png" alt="logo"/>
                    </a>
                    <div className="headerMenuRight">
                        <div className="headerDropdown">
                            <Nav>
                                <NavDropdown eventKey="1" title="Our Other Properties" id="dropdownNav">
                                    <MenuItem eventKey={1.1}>
                                        <img src="https://png.icons8.com/market-square/office/16" alt="HotelMarketplace" />
                                        &nbsp;&nbsp;<Link to="#">Hotel Marketplace</Link>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={1.2}>
                                        <img src="https://png.icons8.com/puffin-bird/color/16" alt="HotelNorthBeach" />
                                        &nbsp;&nbsp;<Link to="#">Hotel North Beach</Link>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={1.3}>
                                        <img src="https://png.icons8.com/beach/dusk/16" alt="HotelSouthBeach"/>
                                        &nbsp;&nbsp;<Link to="#">Hotel South Beach</Link>
                                    </MenuItem>
                                    <MenuItem divider />
                                </NavDropdown>
                            </Nav>
                        </div>
                        |&nbsp;&nbsp;
                        <Link to="/reservations" id="dropdownNav">Retrieve Reservation</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

// logo color: #ffd100







/*
            <div className="headerFull">
                <a href="/">
                    <img id="hotelNomaLogoLeft" src="https://i.imgur.com/vOE0t4m.png" alt="logo"/>
                </a>
                <div className="headerMenuRight">
                    <div className="headerDropdown">
                        <Nav>
                            <NavDropdown eventKey="1" title="Our Other Properties" id="dropdownNav">
                                <MenuItem eventKey={1.1}>
                                    <img src="https://png.icons8.com/market-square/office/16" alt="HotelMarketplace" />
                                    &nbsp;&nbsp;<Link to="#">Hotel Marketplace</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2}>
                                    <img src="https://png.icons8.com/puffin-bird/color/16" alt="HotelNorthBeach" />
                                    &nbsp;&nbsp;<Link to="#">Hotel North Beach</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.3}>
                                    <img src="https://png.icons8.com/beach/dusk/16" alt="HotelSouthBeach"/>
                                    &nbsp;&nbsp;<Link to="#">Hotel South Beach</Link>
                                </MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
                        </Nav>
                    </div>
                    |&nbsp;&nbsp;
                    <Link to="/reservations" id="dropdownNav">Retrieve Reservation</Link>
                </div>
            </div>
 */