import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
const tialogo = require('./tialogo.png');

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
                <img classname="tialogo" src={'https://github.com/DarkArtistry/nano-tia/blob/master/src/navbar/tialogo.png?raw=true'} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <Link to="/news">NEWS</Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <Link to="/bio">Kenneth Goh Zhen Hao . 振豪 . 恭一</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }

}

export default NavbarComponent;
