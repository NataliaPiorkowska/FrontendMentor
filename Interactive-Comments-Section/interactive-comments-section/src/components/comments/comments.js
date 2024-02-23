import React from "react";
import Card from "react-bootstrap/Card";
import "./comments.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MojaKomponent() {
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={10} lg={14}>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default MojaKomponent;
