import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/imgs/venturo-logo.png";

export const Footer = () => {
  return (
    <footer className="mt-5 pt-5">
      <Container>
        {/* <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subscribe to our newsletter</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Row>

        <Row></Row> */}
        <div className="footer-top mb-3">
          <span>Get connected with us on social networks:</span>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/laura-quintero-agudelo-a576a111a/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/LAQNT" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-google"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-middle">
          {/* <Row> */}
          <Col>
            <img src={logo} alt="" />
            <p>Find your next adventure.</p>
          </Col>
          <Col className="column-list">
            <ul>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
            </ul>
          </Col>
          <Col className="column-list">
            <ul>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
            </ul>
          </Col>
          <Col className="column-list">
            <ul>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Contact us</li>
              <li>
                <i className="bi bi-telephone"> </i>
                <span> +39 3494958977</span>
              </li>
              <li>
                <i className="bi bi-envelope"> </i>
                <span> laura.quintero.a@hotmail.com</span>
              </li>
              <li>
                <i className="bi bi-geo"> </i>
                <span> Milano, Italy</span>
              </li>
            </ul>
          </Col>
          {/* </Row> */}
        </div>
      </Container>
      <div className="footer-bottom container-fluid">
        © 2023 Copyright: Laura Quintero Agudelo
      </div>
    </footer>
  );
};
