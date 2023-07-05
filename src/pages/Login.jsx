import { React, useState } from "react";
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <h2>Log-In</h2>

        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container">
              <div className="login-icon">
                <i className="bi bi-person-square"></i>
              </div>
              <div className="login-form">
                <div className="user"></div>
              </div>

              <Form onSubmit={handleClick}>
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
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account?{" "}
                <Link to={"/register"}>Create account</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
