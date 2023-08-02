import React from "react";
import { Container, Col } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/imgs/venturo-logo.png";

export const Footer = () => {
  return (
    <footer className="pt-3">
      <Container>
        <div className="footer-top mb-3"></div>
        <div className="footer-middle">
          {/* <Row> */}
          <Col>
            <img src={logo} alt="" />
            <p>Find your next adventure.</p>
          </Col>
          <Col>
            <div className="footer-icons">
              <a
                href="https://www.linkedin.com/in/laura-quintero-agudelo-a576a111a/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/LAQNT"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.instagram.com/lauraquinteroa/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          <Col>
            <ul>
              <li>Contact us</li>
              <li>
                <span> +39 3494958977</span>
                <i className="bi bi-telephone"> </i>
              </li>
              <li>
                <span> laura.quintero.a@hotmail.com</span>
                <i className="bi bi-envelope"> </i>
              </li>
              <li>
                <span> Milano, Italy</span>
                <i className="bi bi-geo"> </i>
              </li>
            </ul>
          </Col>
          {/* </Row> */}
        </div>
        <div className="footer-bottom container-fluid">
          © 2023 Copyright: Laura Quintero Agudelo
        </div>
      </Container>
    </footer>
  );
};
