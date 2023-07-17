import { React, useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";

const SearchResult = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);

  useEffect(() => {
    setData(location.state);
  }, [location.state]);

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
                <Col
                  xs="8"
                  sm="8"
                  md="6"
                  lg="4"
                  xl="4"
                  xxl="3"
                  className="mx-sm-auto mx-xs-auto "
                  key={tour._id}
                >
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
