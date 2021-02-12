import React from 'react';
import { Container } from '@material-ui/core';
import { Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/header.css';
import { Fade } from 'react-awesome-reveal';

export default function Header(props: any) {
  const { location } = props;
  console.log(location);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        variant='dark'
        className='header'
      >
        <Col className=''>
          <Navbar.Brand href='/'>
            <div className='header-title'>Luke Weathington</div>
          </Navbar.Brand>
          <p className='header-subtitle'>woodwinds / educator / etc.</p>
        </Col>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Col className='d-flex justify-content-end'>
            <Nav activeKey={location.pathname}>
              <Nav.Link href='/about'>About</Nav.Link>
              <NavDropdown title='Music' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='/music'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/projects'>Projects</Nav.Link>
              <Nav.Link href='/lessons'>Lessons</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
}
