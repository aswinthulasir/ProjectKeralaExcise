import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import SubNavbar from './SubNavbar';

export default class NavbarComp extends Component {
  render() {
    return (
      <>
      <SubNavbar></SubNavbar>

      <Navbar expand="lg" fixed="top" className="bg-body-white custom-navbar" >
        <Container fluid> 
        <div className="d-flex align-items-center">
            
            <div className="d-flex align-items-center logo-container">
              <img src="\Government_of_India_logo.webp" alt="India Govt Logo" className="navbar-logo1" />
              <img src="\kerala-government-142856 transparent.png" alt="Kerala Govt Logo" className="navbar-logo mx-2" />
              <img src="\Kerala_Excise_Logo.png" alt="Excise Logo" className="navbar-logo2" />
              <Navbar.Brand href="/" className="logo-text">KERALA EXCISE DEPARTMENT</Navbar.Brand>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-listbar">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="E-Services" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/privacy-policy">Service Plus</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/security">E-Office</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/money-back">E-Arms</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/money-back">E-Treasury</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/money-back">E-Tender</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/money-back">E-Vacancy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/transactions">SEEC</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">ECURB</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">FLEET</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">PRISM</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">VEELS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">SPARK</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">CMO</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transactions">VARAM</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/logout" >Gallery</Nav.Link>
              <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/transactions">General</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">Abkari Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">Employee Corner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">Training</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">License Fee</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">Plan Fund</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={Link} to="/transactions">RTI</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Downloads" id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to="/Enforcement">Enforcement Activities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Enforcement">Orders & Tenders</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Enforcement">Forms</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Enforcement">Acts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Enforcement">Karuthal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Enforcement">Kavacham</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Enforcement">Unarvu</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/logout" >Contact</Nav.Link>
              <Nav.Link as={Link} to="/login" className='login-btn'>Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }
}
