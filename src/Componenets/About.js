import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">About</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>What is this?</Card.Title>
              <Card.Text>
                This is a platform where you can create notes, write diaries,
                and organize your thoughts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>How does it work?</Card.Title>
              <Card.Text>
                Simply sign up, and you'll have access to all the features.
                Create, edit, and delete your notes and diaries with ease.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Why choose us?</Card.Title>
              <Card.Text>
                We provide a secure and user-friendly platform for all your
                note-taking and diary-writing needs. Our intuitive interface and
                powerful features make organizing your thoughts a breeze.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
