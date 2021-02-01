import React from "react";
import { Form, Card, Button } from "react-bootstrap";
export const Booking = () => {
  return (
    <Card style={{ width: "20rem", marginLeft: "80%" }}>
      <Form>
        <h3>Booking System</h3>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label> Buesness Name</Form.Label>
          <Form.Control type="text" placeholder="enter Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>select Buesness</Form.Label>
          <Form.Control as="select">
            <option>Hostel Booking</option>
            <option>Hospital Booking</option>
            <option>Hotel Booking</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter Floor</Form.Label>
          <Form.Control type="text" placeholder="enter available floor" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Rooms</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter available Rooms on floor"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bed</Form.Label>
          <Form.Control type="text" placeholder="enter available Bed in Room" />
        </Form.Group>
        <Button>Submit</Button>
        <Button style={{ marginLeft: "30px" }}>Cancel</Button>
      </Form>
    </Card>
  );
};
