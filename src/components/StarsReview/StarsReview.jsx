import React from "react";
import "./stars-review.css";

const StarsReview = ({ avgRating, totalRating }) => {
  if (avgRating !== null && totalRating === undefined) {
    const renderAvgStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= avgRating) {
          stars.push(<i className="bi bi-star-fill" key={i} />);
        } else {
          stars.push(<i className="bi bi-star" key={i} />);
        }
      }
      return stars;
    };
    return <div className="tour-rating">{renderAvgStars()}</div>;
  } else if (totalRating !== undefined && avgRating === null) {
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= totalRating) {
          stars.push(<i className="bi bi-star-fill" key={i} />);
        } else {
          stars.push(<i className="bi bi-star" key={i} />);
        }
      }
      return stars;
    };
    return (
      <div className="tour-rating">
        {renderStars()} ({totalRating})
      </div>
    );
  } else {
    return null;
  }
};

export default StarsReview;
