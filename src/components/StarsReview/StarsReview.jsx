import React from "react";
import "./stars-review.css";

const StarsReview = ({ avgRating, singleRating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? "bi bi-star-fill" : "bi bi-star";
      stars.push(<i className={starClassName} key={i} />);
    }
    return stars;
  };

  if (avgRating !== null && singleRating == undefined) {
    return <div className="tour-rating">{renderStars(avgRating)}</div>;
  } else if (singleRating !== undefined && avgRating == undefined) {
    return <div className="tour-rating">{renderStars(singleRating)}</div>;
  } else {
    return null;
  }
};

export default StarsReview;
