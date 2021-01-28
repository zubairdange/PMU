import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
export const Acadmics = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <ListGroup className="list-group-flush">
          <ListGroupItem>COLLEGE OF ENGINEERING</ListGroupItem>
          <ListGroupItem>
            COLLEGE OF COMPUTER ENGINEERING & SCIENCES
          </ListGroupItem>
          <ListGroupItem>COLLEGE OF BUSINESS ADMINISTRATION</ListGroupItem>
          <ListGroupItem>COLLEGE OF LAW</ListGroupItem>
          <ListGroupItem>COLLEGE OF ARCHITECTURE AND DESIGN</ListGroupItem>
          <ListGroupItem>COLLEGE OF SCIENCES & HUMAN STUDIES</ListGroupItem>
          <ListGroupItem>PREPARATORY PROGRAM</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
      </Card>
    </div>
  );
};
