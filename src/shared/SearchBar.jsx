import React, { useRef } from "react";

import { Container, Col, Form, FormGroup, Button } from "react-bootstrap";
import "./search-bar.css";

const SearchBar = () => {
  const locationRef = useRef();
  const distanceRef = useRef();
  const groupRef = useRef();
  const difficultyRef = useRef();

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    // const group = groupRef.current.value;
    // const difficulty = difficultyRef.current.value;

    if (location === "" || distance === "") {
      return alert("All fields are required");
    }
  };

  return (
    <Container>
      <Col lg="12">
        <div className="search-bar">
          <Form className="search-form">
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i class="bi bi-geo-alt"></i>
                </span>

                <h6>Location</h6>
              </div>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i class="bi bi-broadcast"></i>
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
                  <i class="bi bi-person-add"></i>
                </span>
                <h6>Traveler/s</h6>
              </div>
              <input type="numer" placeholder="0" ref={groupRef} />
            </FormGroup>
            <FormGroup className="form-group">
              <div className="input-label">
                <span>
                  <i class="bi bi-bar-chart"></i>
                </span>

                <h6>Difficulty</h6>
              </div>
              <input type="text" placeholder="" ref={difficultyRef} />
            </FormGroup>
            <Button
              variant="warning"
              id="search-button"
              onClick={searchHandler}
            >
              <i class="bi bi-search"></i> <span>Search</span>
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
};

export default SearchBar;
