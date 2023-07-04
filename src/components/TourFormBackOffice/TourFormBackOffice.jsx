import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TourFormBackOffice({
  formActual,
  formData,
  formSubmitted,
  handleInputChange,
  handleSubmit,
  variantButton,
}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className=" mt-3">
          <Form.Label>Tour Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder={formActual.title}
            value={formData.title}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.title}
          />

          {/* TODO: HOW TO REPLACE DATA WHERE VALUE IS EMPTY WITH THE EXISTING ONE */}

          <Form.Control.Feedback type="invalid">
            A title is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder={formActual.photo}
            value={formData.photo}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.photo}
          />
          <Form.Control.Feedback type="invalid">
            An image url is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Location (town, city):</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder={formActual.city}
            value={formData.city}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.city}
          />
          <Form.Control.Feedback type="invalid">
            A location is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder={formActual.address}
            value={formData.address}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.address}
          />
          <Form.Control.Feedback type="invalid">
            A country is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Distance (km):</Form.Label>
          <Form.Control
            type="text"
            name="distance"
            placeholder={formActual.distance}
            value={formData.distance}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.distance}
          />
          <Form.Control.Feedback type="invalid">
            A distance is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            as="textarea"
            rows={3}
            placeholder={formActual.desc}
            value={formData.desc}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.desc}
          />
          <Form.Control.Feedback type="invalid">
            A description is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Price (€):</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder={formActual.price}
            value={formData.price}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.price}
          />
          <Form.Control.Feedback type="invalid">
            A price is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Max. number of participants:</Form.Label>
          <Form.Control
            type="text"
            name="numberOfPeople"
            placeholder={formActual.numberOfPeople}
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.numberOfPeople}
          />
          <Form.Control.Feedback type="invalid">
            An amount of persons is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Difficulty:</Form.Label>
          <Form.Select
            name="dificulty"
            placeholder={formActual.dificulty}
            value={formData.dificulty}
            onChange={handleInputChange}
            isInvalid={formSubmitted && !formData.dificulty}
          >
            <option disabled value="default">
              Select difficulty
            </option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Challenging</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Difficulty is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-5" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Best Deal"
            name="featured"
            checked={formData.featured}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Row className="my-5">
          <Button
            variant={variantButton}
            type="submit"
            className="col-2 mx-2"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button variant="secondary" className="col-2">
            <Link to="/backoffice"> Go Back</Link>
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default TourFormBackOffice;
