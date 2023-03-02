import React from 'react';

// import { Container, Nav, Navbar } from 'react-bootstrap';



function Header(props) {
    return (
        <div>
        <nav className = "my-navbar">
        <p className = "nav-title"href="#home" onClick={() => {props.setCurrentPage("Home")}} >Developer Portfolio</p>
        <div className="nav-navs">
        <p className="nav-item" href="#About" onClick={() => {props.setCurrentPage("About")}} >About</p>
        <p className="nav-item" href="#work" onClick={() => {props.setCurrentPage("Work")}}>Work</p>
        <p className="nav-item" href="#resume" onClick={() => {props.setCurrentPage("Resume")}}>Resume</p>
        <p className="nav-item" href="#connect" onClick={() => {props.setCurrentPage("Connect")}}>Connect</p>  
        </div>
        </nav> 
  {/* <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" onClick={() => {props.setCurrentPage("Home")}} >Developer Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About" onClick={() => {props.setCurrentPage("About")}} >About</Nav.Link>
      <Nav.Link href="#work" onClick={() => {props.setCurrentPage("Work")}}>Work</Nav.Link>
      <Nav.Link href="#connect" onClick={() => {props.setCurrentPage("Connect")}}>Connect</Nav.Link>
      <Nav.Link href="#resume" onClick={() => {props.setCurrentPage("Resume")}}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
        </div>
    );
}

export default Header;