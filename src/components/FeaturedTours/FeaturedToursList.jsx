import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import axios from "axios";
import { Col } from "react-bootstrap";

const apiToursURL = `http://localhost:3001/tours`;

const FeaturedToursList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiToursURL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      {data.map((tour) => (
        <Col lg="3" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedToursList;
