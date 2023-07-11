import React, { useRef } from "react";
import { Container, Col, Form, FormGroup, Button } from "react-bootstrap";
import "./search-bar.css";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const countryRef = useRef("");
  const distanceRef = useRef(0);
  const groupRef = useRef(0);
  // const difficultyRef = useRef();
  const navigate = useNavigate();

  const searchHandler = async () => {
    const country = countryRef.current.value;
    const distance = distanceRef.current.value;
    const group = groupRef.current.value;
    // const difficulty = difficultyRef.current.value;

    if (country === "" || distance === "" || group === "") {
      return alert("All fields are required");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/searchTour?country=${country}&distance=${distance}&numberOfPeople=${group}`
    );

    if (!res.ok) alert("something went wrong");

    const result = await res.json();

    navigate(
      `/tours/search?country=${country}&distance=${distance}&numberOfPeople=${group}`,
      { state: result.data }
    );
  };

  return (
    <Container>
      <Col lg="12">
        <div className="search-bar">
          <Form className="search-form">
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i className="bi bi-geo-alt"></i>
                </span>

                <h6>Country</h6>
              </div>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={countryRef}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i className="bi bi-broadcast"></i>
                </span>
                <h6>Max. Distance</h6>
              </div>
              <input
                type="number"
                placeholder="Distance km"
                ref={distanceRef}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i className="bi bi-person-add"></i>
                </span>
                <h6>Traveler/s</h6>
              </div>
              <input type="numer" placeholder="0" ref={groupRef} />
            </FormGroup>

            <Button variant="dark" id="search-button" onClick={searchHandler}>
              <i className="bi bi-search"></i> <span>Search</span>
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
};

export default SearchBar;
