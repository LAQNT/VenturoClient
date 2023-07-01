import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const apiToursURL = `http://localhost:3001/tours`;

const FeaturedToursList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiToursURL);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status" variant="warning" />
      ) : (
        <Container className="mt-3">
          <Row className="gy-4">
            {data &&
              data.map((tour) => (
                <Col
                  sm="9"
                  md="6"
                  lg="4"
                  xl="4"
                  xxl="3"
                  className="mx-sm-auto mx-md-0"
                  key={tour.id}
                >
                  <TourCard tour={tour} />
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default FeaturedToursList;
