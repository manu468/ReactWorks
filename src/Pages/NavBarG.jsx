import React from "react";
import "../assets/main.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"

const NavBarG = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark width"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img
            src="https://gurupalacerestaurant.com/wp-content/uploads/2019/04/logo-1.png"
            alt="logo"
            style={{ height: "auto", width: "60%" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Brand >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{color:"white"}}>
            <Link style={{color:"white",padding:"10px"}} to="/contactus">About Us</Link>
            <Link style={{color:"white",padding:"10px"}} to="/gallery">Gallery</Link>
            <Link style={{color:"white",padding:"10px"}} to="/pricing">Banquet Facility</Link>
            <Link style={{color:"white",padding:"10px"}} >Catering</Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Book A Banquet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBarG;
