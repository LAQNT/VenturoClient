import { React, useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";

const SearchResult = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <CommonSection title={"Tour Search Results"}>
        <section>
          <Container>
            <Row>
              {data.length === 0 ? (
                <h4 className="text-center">No tour found</h4>
              ) : (
                data?.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </section>
      </CommonSection>
    </>
  );
};

export default SearchResult;
