import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";

function BackOffice() {
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center">Venturo Back Office</h2>
        <Row>
          <Col sm="10" className="m-auto">
            <Form>
              <Form.Group className=" mt-5">
                <Form.Label>Tour Title:</Form.Label>
                <Form.Control type="text" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Location (town, city):</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Country:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Distance:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Number of participants:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Difficulty:</Form.Label>
                <Form.Select>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Challenging</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-5" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Best Deal" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BackOffice;
