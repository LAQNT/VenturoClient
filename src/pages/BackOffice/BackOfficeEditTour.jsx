import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/back-office.css";
import { BASE_URL } from "../../utils/config";
import TourFormBackOffice from "../../components/TourFormBackOffice/TourFormBackOffice";

function BackOfficeEditTour() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formActual, setFormActual] = useState({});
  const { tourId } = useParams();

  const [formData, setFormData] = useState({
    title: formActual.title,
    city: formActual.city,
    country: formActual.country,
    distance: formActual.distance,
    photo: formActual.photo,
    desc: formActual.desc,
    price: formActual.price,
    numberOfPeople: formActual.numberOfPeople,
    dificulty: formActual.dificulty,
    bestDeal: formActual.bestDeal,
  });

  const fetchTourData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/tours/${tourId}`);
      const tourData = response.data.data;
      setFormActual(tourData);
      setFormData({
        title: tourData.title,
        city: tourData.city,
        country: tourData.country,
        distance: tourData.distance,
        photo: tourData.photo,
        desc: tourData.desc,
        price: tourData.price,
        numberOfPeople: tourData.numberOfPeople,
        dificulty: tourData.dificulty,
        bestDeal: tourData.bestDeal,
      });
    } catch (error) {
      console.error("Error fetching tour data:", error);
    }
  };

  useEffect(() => {
    fetchTourData();
    // eslint-disable-next-line
  }, [tourId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    setFormSubmitted(true);
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3001/api/v1/tours/${tourId}`,
        formData
      );
      console.log("Tour updated:", response.data);
      window.location.href = "/backOffice";
    } catch (error) {
      console.error("Error making PATCH request:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Edit Tour</h2>
      <h6 className="text-center">Tour id: {tourId}</h6>
      <Row>
        <Col sm="10" className="m-auto">
          <TourFormBackOffice
            formActual={formActual}
            formData={formData}
            formSubmitted={formSubmitted}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            variantButton="success"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BackOfficeEditTour;
