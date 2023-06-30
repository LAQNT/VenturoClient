import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import axios from "axios";
import { Col } from "react-bootstrap";
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
        <>
          {data &&
            data.map((tour) => (
              <Col xs="12" md="6" xl="4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
        </>
      )}
    </>
  );
};

export default FeaturedToursList;
