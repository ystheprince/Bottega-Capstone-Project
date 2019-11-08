import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Audio from "../Audio";
import NavItem from "react-bootstrap/NavItem";
import {Link} from 'react-router-dom';

export default function NavBars() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Dark Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
              <NavDropdown.Item href="/women">Women</NavDropdown.Item>
              <NavDropdown.Item href="/home">All</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            { window.location.href.includes('admin') && <Nav.Link href="/admin/orders">Orders</Nav.Link> }
          </Nav>

          <Nav className="pull-right">
            <NavItem href="#" onClick={(e)=>{ e.preventDefault();}}><Audio/></NavItem>
            <Link to="/cart">
              <Button variant="outline-dark">Cart</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
