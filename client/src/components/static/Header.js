import React, { Component } from 'react';
import { MenuItem, NavDropdown, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//future feature: login
//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div>
                <span id="blackHeader">
                .
                </span>

                <Navbar className="navBar">
                    <Navbar.Header id="headerContent">
                        <Navbar.Brand>
                            <a href="/">
                                <img src="https://i.imgur.com/w7vxAMG.png" alt="logo" id="headerImage"/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <div className="mobileComponents">
                        <h3>
                            <Link to="/reservations">&nbsp;&nbsp;Existing Itinerary Lookup&nbsp;&nbsp;</Link>
                        </h3>

                    </div>

                    <Navbar.Collapse className="navBarRightContent">
                        <Nav pullRight>
                            <NavDropdown eventKey="1" title="Our Other Properties" id="dropdownNav">
                                <MenuItem eventKey={1.1}>
                                    <img src="https://png.icons8.com/market-square/office/30" alt="HotelMarketplace" />
                                    &nbsp;&nbsp;&nbsp;<a href="/">Hotel Marketplace</a>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2}>
                                    <img src="https://png.icons8.com/puffin-bird/color/30" alt="HotelNorthBeach" />
                                    &nbsp;&nbsp;&nbsp;<a href="/">Hotel North Beach</a>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.3}>
                                    <img src="https://png.icons8.com/beach/dusk/30" alt="HotelSouthBeach"/>
                                    &nbsp;&nbsp;&nbsp;<a href="/">Hotel South Beach</a>
                                </MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
                            <NavItem eventKey={2} href="/reservations">Itinerary Lookup</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;