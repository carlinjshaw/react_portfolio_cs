import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';



function Header(props) {
    return (
        <div>
            

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Hello, I'm Carlin</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About" onClick={() => {props.setCurrentPage("About")}} >About</Nav.Link>
      <Nav.Link href="#work" onClick={() => {props.setCurrentPage("Work")}}>Work</Nav.Link>
      <Nav.Link href="#connect" onClick={() => {props.setCurrentPage("Connect")}}>Connect</Nav.Link>
      <Nav.Link href="#resume" onClick={() => {props.setCurrentPage("Resume")}}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


        </div>
    );
}

export default Header;