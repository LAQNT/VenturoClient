import React, { useRef } from "react";

import { Container, Col, Form, FormGroup, Button } from "react-bootstrap";
import "./search-bar.css";

const SearchBar = () => {
  const locationRef = useRef();
  const distanceRef = useRef();
  const groupRef = useRef();

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const group = groupRef.current.value;

    if (location === "" || distance === "" || group === "") {
      return alert("All fields are required");
    }
  };

  return (
    <Container>
      <Col lg="12">
        <div className="search-bar">
          <Form className="search-form">
            <FormGroup className="form-group">
              <span>
                <i class="bi bi-geo-alt"></i>
              </span>

              <div className="input-label">
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="form-group">
              <span>
                <i class="bi bi-broadcast"></i>
              </span>

              <div className="input-label">
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance km"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="form-group">
              <span>
                <i class="bi bi-person-add"></i>
              </span>

              <div className="input-label">
                <h6>Max. people</h6>
                <input type="numer" placeholder="0" ref={groupRef} />
              </div>
            </FormGroup>
            <Button
              variant="warning"
              id="search-button"
              onClick={searchHandler}
            >
              <i class="bi bi-search"></i>
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
};

export default SearchBar;
