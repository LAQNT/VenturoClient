import React from "react";
import "./common-section.css";
import { Container, Row } from "react-bootstrap";
import commonSectionImage from "../assets/imgs/CommonSection.jpg";
import SearchBar from "../shared/SearchBar";

const CommonSection = () => {
  return (
    <section className="common-section mb-5">
      <Container fluid>
        <Row>
          <div className="common-img-container p-0">
            <img src={commonSectionImage} alt="" />
          </div>
        </Row>
        <SearchBar />
      </Container>
    </section>
  );
};

export default CommonSection;
