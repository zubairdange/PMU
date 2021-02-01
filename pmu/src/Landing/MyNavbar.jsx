import React from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Dropdown,
  NavItem,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "../Landing/logo.png";
import { Acadmics } from "./Acadmics";
import { LoginS } from "../Login/LoginS";
import { Booking } from "../Booking/Booking";
import { Mycarousel } from "../Landing/Mycarousel";
import { Aboutus } from "../Landing/Aboutus";

export const MyNavbar = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <i>PMU </i>
          <img src={logo} style={{ width: 60, marginTop: -10 }} />
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/Carousels">Home</Nav.Link>
          {/* <Nav.Link href="/Carousels">Carousels</Nav.Link> */}

          <Nav.Link href="#">Study at PMU</Nav.Link>
          {/* <Nav.Link href="/Acadmics">Acadmics</Nav.Link> */}
          <NavDropdown title="Acadmics" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              COLLEGE OF ENGINEERING
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              COLLEGE OF COMPUTER ENGINEERING & SCIENCES
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              COLLEGE OF BUSINESS ADMINISTRATION
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              COLLEGE OF LAW
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              COLLEGE OF ARCHITECTURE AND DESIGN
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              COLLEGE OF SCIENCES & HUMAN STUDIES
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              PREPARATORY PROGRAM
            </NavDropdown.Item>
          </NavDropdown>

          <Form inline>
            <FormControl
              style={{ marginLeft: 500 }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Sign In</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/LoginS">Student </Dropdown.Item>
              <Dropdown.Item href="/Booking">Parent</Dropdown.Item>
              <Dropdown.Item>Guest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/Aboutus">About US</Nav.Link>
        </Nav>
      </Navbar>

      <Router>
        <Switch>
          <Route path="/Carousels">
            <Mycarousel />
          </Route>
          <Route path="/LoginS">
            <LoginS />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
