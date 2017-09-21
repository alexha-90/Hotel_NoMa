import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'react-dom';
import { Link } from 'react-router-dom';


//===============================================================================================//

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navTop">
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/* maybe change this to Link */}
                            <a href="/">Hotel NoMas</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight={true}>
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
                        <NavItem eventKey={2} href="#">Retrieve Reservation</NavItem>
                        <NavItem eventKey={3} href="/login">Sign In</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;


/*
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
 */