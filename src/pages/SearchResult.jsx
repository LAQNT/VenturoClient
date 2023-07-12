import { React, useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";

const SearchResult = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <CommonSection />
      <section>
        <Container>
          <Row>
            <h2 className="text-center mb-5 mt-3">Search Results</h2>
            {!data || data.length === 0 ? (
              <h4 className="text-center">No tours found</h4>
            ) : (
              data.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResult;
