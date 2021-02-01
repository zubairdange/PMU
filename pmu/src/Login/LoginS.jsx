import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
export const LoginS = () => {
  const [email, setemail] = useState(" ");
  const [pwd, setpwd] = useState(" ");
  return (
    <React.Fragment>
      <Form style={{ width: "25rem", marginLeft: "80%" }}>
        <h3>Sign In</h3>

        <Row>
          <Col>
            <Form.Label> Email Id</Form.Label>
            <Form.Control
              type="email"
              size="lg"
              padding="15 rem"
              value={email}
              placeholder="Enter email id"
              onChange={(e) => setemail(e.target.value)}
              onFocus={() => setemail(" ")}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              value={pwd}
              placeholder="Enter Your pawword"
              onChange={(e) => setpwd(e.target.value)}
              onFocus={() => setpwd(" ")}
            />
          </Col>
          <Col></Col>
        </Row>

        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>

        <Row>
          <Col>
            <Button
              type="submit"
              style={{ marginLeft: "60px", marginTop: "50px" }}
            >
              LogIn
            </Button>
            <p>
              Forgot <a href="#">password?</a>
            </p>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};
