import React from "react";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;

  return (
    <div className="service-card">
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
