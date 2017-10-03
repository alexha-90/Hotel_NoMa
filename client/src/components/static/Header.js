import React, { Component } from 'react';
import { DropdownButton, Dropdown, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//future feature: login

//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div className="headerFull">
                <a href="/">
                    <img id="hotelNomaLogoLeft" src="https://i.imgur.com/vOE0t4m.png" alt="logo"/>
                </a>
                <div className="headerMenuRight">
                    <div className="headerDropdown">
                        <Nav>
                            <NavDropdown eventKey="1" title="Dropdown">
                                <MenuItem eventKey={1.1}>
                                    <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast" />
                                    &nbsp;&nbsp;<Link to="#">Hotel Marketplace</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.2}>
                                    <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast" />
                                    &nbsp;&nbsp;<Link to="#">Hotel North Beach</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.3}>
                                    <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast"/>
                                    &nbsp;&nbsp;<Link to="#">Hotel South Beach</Link>
                                </MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
                        </Nav>
                    </div>
                    {' | '}
                    <Link to="/reservations">Retrieve Reservation</Link>
                </div>
            </div>
        );
    }
}

export default Header;

// logo color: #ffd100




// <NavItem eventKey={3} href="/login">Sign In</NavItem>

// https://codepen.io/bootstrapped/pen/KwYGwq?editors=1010   take example 3

/*
                <Navbar id="navTop">
                    <div className="logoLeft">
                        <Navbar.Header>
                            <Navbar.Brand>
<a href="/">Hotel NoMa</a>
</Navbar.Brand>
</Navbar.Header>
</div>
<div className="menuRight">
    <Nav>
        <NavDropdown eventKey={1} title="Our Other Properties" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>
                <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast" />
                &nbsp;&nbsp;<Link to="#">Hotel Marketplace</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>
                <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast" />
                &nbsp;&nbsp;<Link to="#">Hotel North Beach</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.3}>
                <img src="https://tbcdn.talentbrew.com/company/1065/img/favicon/favicon-3974.png" alt="temp_breakfast"/>
                &nbsp;&nbsp;<Link to="#">Hotel South Beach</Link>
            </MenuItem>
            <MenuItem divider />
        </NavDropdown>
        <NavItem eventKey={2} href="/reservations">Retrieve Reservation</NavItem>
    </Nav>
</div>
</Navbar>
 */