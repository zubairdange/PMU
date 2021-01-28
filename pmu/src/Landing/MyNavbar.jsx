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

export const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <i>PMU </i>
          <img src={logo} style={{ width: 60, marginTop: -10 }} />
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
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
              <Dropdown.Item onClick={ LoginS}>Student</Dropdown.Item>
              <Dropdown.Item>Parent</Dropdown.Item>
              <Dropdown.Item>Guest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/Aboutus">About US</Nav.Link>
        </Nav>
      </Navbar>

      <Router>
        <Switch>
          <Route path="/LoginS">
            <LoginS />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
