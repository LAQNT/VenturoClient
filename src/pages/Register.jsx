import { React, useState, useContext } from "react";
import "../styles/register.css";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(res);
      const result = await res.json();
      if (!res.ok) alert(result.message);
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register-container">
              <h2>Register</h2>
              <div className="register-icon">
                <i className="bi bi-person-square"></i>
              </div>
              <div className="register-form">
                <div className="user"></div>
              </div>

              <Form onSubmit={handleClick} className="register-form">
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="username"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button variant="success" type="submit">
                  Create Account
                </Button>
              </Form>
              <p>
                Already have an account?{" "}
                <Link to={"/login"}>Access to your account</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
