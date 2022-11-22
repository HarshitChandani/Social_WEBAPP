import { Row, Form, Button, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

const LoginForm = ({
  attemptLogin,
  isLoginSucced,
  loginCredentials,
  handleLoginCredentials,
}) => {
  return (
    <Container>
      <Row
        className="my-3 w-50 justify-content-center"
        style={{ margin: "0 auto" }}
        sm={12}
      >
        <div>
          <h3 className="py-3">Login</h3>
          <Row className="my-2 w-100">
            <Form.Group>
              <Form.Label className="Form-Lables"> Username </Form.Label>
              <Form.Control
                type="text"
                className="Form-Fields"
                value={loginCredentials.username}
                onChange={(e) =>
                  handleLoginCredentials({
                    ...loginCredentials,
                    username: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
          </Row>
          <Row className="my-2 w-100">
            <Form.Group>
              <Form.Label className="Form-Lables"> Password </Form.Label>
              <Form.Control
                type="password"
                className="Form-Fields"
                value={loginCredentials.password}
                onChange={(e) =>
                  handleLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
          </Row>
          <div
            className="msg"
            style={{
              fontSize: "0.8rem",
              color: `${isLoginSucced.isLoggedIn ? "green" : "red"}`,
            }}
          >
            {isLoginSucced.msg}
          </div>
          <hr className="w-100 my-3" />
        </div>
        <div
          className="d-flex align-items-center"
          style={{ justifyContent: "space-between" }}
        >
          <Button variant="outline-dark" onClick={attemptLogin}>
            Login
          </Button>
          <Link
            to="/register"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            Register
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default LoginForm;
