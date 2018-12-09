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
            <a href="/">
                <img alt="tialogo" className="tialogo" src={'https://github.com/DarkArtistry/nano-tia/blob/master/src/navbar/tialogo.png?raw=true'} />
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
            <a add a target="_blank"  to="https://www.kennethgzh.com">Kenneth Goh Zhen Hao . 振豪 . 恭一</a>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }

}

export default NavbarComponent;
