import { React, useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";

import "../styles/tours.css";

const Tours = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tours");
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection />
      <section className="all-tours">
        <>
          {isLoading ? (
            <Spinner animation="border" role="status" variant="warning" />
          ) : (
            <Container className="mt-3">
              <Row className="gy-4">
                {data.length > 0 &&
                  data.map((tour) => (
                    <Col
                      sm="9"
                      md="6"
                      lg="4"
                      xl="4"
                      xxl="3"
                      className="mx-sm-auto mx-md-0"
                      key={tour.id}
                    >
                      <TourCard tour={tour} />
                    </Col>
                  ))}

                <Col lg="12">
                  <div className="pagination text-center">
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
            </Container>
          )}
        </>
      </section>
    </>
  );
};

export default Tours;
