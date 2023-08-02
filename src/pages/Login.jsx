import { React, useState, useContext } from "react";
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
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
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: result });
      navigate("/backoffice");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container">
              <h2>Log-In</h2>
              <div className="login-icon">
                <i className="bi bi-person-square"></i>
              </div>
              <div className="login-form">
                <div className="user"></div>
              </div>

              <Form onSubmit={handleClick} className="login-form">
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
