import React, { Component } from 'react';
import { Jumbotron, Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'react-dom';
//import { Link } from 'react-router-dom';

// https://react-bootstrap.github.io/components.html

class Header extends Component {
    render() {
        return (
            <div>

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;