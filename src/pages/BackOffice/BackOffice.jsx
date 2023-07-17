import { React, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/back-office.css";
import { Container, Button, Image, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function BackOffice() {
  const [Tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/tours`);
      setTours(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleDelete = async (tourId, tourTitle) => {
    if (
      window.confirm(
        `Are you sure you want to delete tour ${'"' + tourTitle + '"'}? `
      )
    ) {
      try {
        const res = await axios.delete(
          `http://localhost:3001/api/v1/tours/${tourId}`
        );
        console.log("Tour deleted:", res.data);
        fetchData();
      } catch (err) {
        console.error("Error deleting tour:", err);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Container className="fluid">
          <Spinner
            animation="border"
            role="status"
            variant="warning"
            className="mx-auto mt-5"
          />
        </Container>
      ) : (
        <>
          <Container className="mt-5">
            <h2 className="text-center">Tours Data Base</h2>
            <Button className="mt-3" variant="warning">
              <Link to="/backoffice/addTour">
                {" "}
                <i className="bi bi-plus-circle"></i> Add Tour
              </Link>{" "}
            </Button>

            <Table className="mt-5 mb-5" bordered hover responsive>
              <thead className="text-center">
                <tr>
                  <th>Position</th>

                  <th>Image</th>
                  <th>Title</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Distance</th>

                  <th>Price</th>
                  <th>Participants</th>
                  <th>Difficulty</th>
                  <th>Best Deal</th>
                  <th>Date Uploaded</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-nowrap ">
                {Tours.map((tour, i) => (
                  <tr key={tour._id}>
                    <td>{i + 1}</td>
                    {/* <td>{tour._id}</td> */}
                    <td className="p-0 text-center">
                      <Image src={tour.photo} thumbnail className=" h-50" />
                    </td>
                    <td>{tour.title}</td>
                    <td>{tour.city}</td>
                    <td>{tour.country}</td>
                    <td>{tour.distance} km</td>
                    {/* <td>{tour.desc}</td> */}
                    <td>€ {tour.price}</td>
                    <td>{tour.numberOfPeople}</td>
                    <td>{tour.dificulty}</td>
                    <td className="text-center">{tour.bestDeal ? "✓" : ""}</td>
                    <td>{tour.createdAt.toLocaleString()}</td>
                    <td className="actions">
                      <Button variant="success">
                        <Link to={`/backoffice/editTour/${tour._id}`}>
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(tour._id, tour.title)}
                      >
                        <i className=" bi bi-trash3"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </>
  );
}

export default BackOffice;
