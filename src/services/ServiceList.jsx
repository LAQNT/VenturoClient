import React from "react";
import { Col } from "react-bootstrap";
import "./service-card.css";

import weatherImg from "../assets/imgs/ServiceWeather.jpg";
import customImg from "../assets/imgs/ServiceCustom.jpg";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Weather",
    desc: "Calculate the weather for your trip.",
  },

  {
    imgUrl: customImg,
    title: "Aditional Services",
    desc: "Customize your trip for your needs.",
  },
];

const ServiceList = () => {
  return (
    <Col className="services-list">
      {servicesData.map((item, i) => (
        <Col key={i}>
          {" "}
          <ServiceCard item={item} />{" "}
        </Col>
      ))}
    </Col>
  );
};

export default ServiceList;
