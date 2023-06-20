import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import axios from "axios";
import { Col } from "react-bootstrap";

const FeaturedToursList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      {data.map((tour) => (
        <Col></Col>
      ))}
    </>
  );
};

export default FeaturedToursList;
