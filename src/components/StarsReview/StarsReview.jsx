import React from "react";
import "./stars-review.css";

const StarsReview = ({ avgRating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= avgRating) {
        stars.push(<i class="bi bi-star-fill" key={i} />);
      } else {
        stars.push(<i class="bi bi-star" key={i} />);
      }
    }
    return stars;
  };
  return <div className="tour-rating">{renderStars()}</div>;
};

export default StarsReview;
