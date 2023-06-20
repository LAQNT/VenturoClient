import { React } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";

import CarouselHome from "../components/Carousel/Carousel";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return (
    <>
      <section className="section-carousel">
        <Container fluid>
          <Row>
            <Col lg="12" id="jumbotron">
              <div className="carousel-subtitle">
                <Container>
                  <div className="subtitle">
                    <Subtitle subtitle={"Explore the world"} />
                  </div>
                  <div className="subtitle-container"></div>
                </Container>
                <CarouselHome />
              </div>
            </Col>
          </Row>
        </Container>
        <SearchBar className="search-bar" />
      </section>
      <section className="services-section">
        <Container>
          <Row>
            <Col lg="3">
              <h3 className="category-title">Our additional services</h3>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section className="featured-section">
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={"Explore"} /> */}
              <h2 className="category-title">Featured Tours</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
