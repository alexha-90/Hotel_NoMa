import React, { Component } from 'react';
import { MenuItem, NavDropdown, Nav, Navbar, NavItem } from 'react-bootstrap';

//future feature: login
//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navBar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <img src="https://i.imgur.com/w7vxAMG.png" alt="logo"/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
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
                            <NavItem eventKey={2} id="test" href="/reservations">Itinerary Lookup</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;