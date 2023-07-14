import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedToursList = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours`);

  const bestDealTours = featuredTours?.filter((tour) => tour.bestDeal === true);

  return (
    <>
      {loading && <Spinner />}
      {error && <h5>error</h5>}
      <Container className="mt-3 mb-5">
        <Row className="gy-4">
          {!loading &&
            !error &&
            bestDealTours?.map((tour) => {
              return (
                <Col
                  xs="8"
                  sm="8"
                  md="6"
                  lg="4"
                  xl="4"
                  xxl="3"
                  className="mx-sm-auto mx-xs-auto mx-md-0"
                  key={tour._id}
                >
                  <TourCard tour={tour} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default FeaturedToursList;
