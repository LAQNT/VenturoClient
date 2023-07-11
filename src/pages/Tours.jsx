import { React, useEffect, useState } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import "../styles/tours.css";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCounter } = useFetch(
    `${BASE_URL}/tours/search/getToursCount`
  );

  useEffect(() => {
    const pages = Math.ceil(tourCounter / 8);
    setPageCount(pages);
    window.scrollTo(0, 0, 0);
  }, [page, tourCounter, tours]);

  return (
    <>
      <CommonSection title={""} />
      <h2 className="text-center">All Tours</h2>
      <section className="all-tours">
        <Container className="">
          {!loading && !error && (
            <Row className="gy-4">
              {tours?.map((tour) => (
                <Col
                  sm="9"
                  md="6"
                  lg="4"
                  xl="4"
                  xxl="3"
                  className="mx-sm-auto mx-md-0"
                  key={tour._id}
                >
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination text-center mt-5">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active-page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Tours;
