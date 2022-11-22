import react from "react";
import { Row, Form, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = (props) => {
  return (
    <Container>
      <Row
        className="my-3 w-50 justify-content-center"
        style={{ margin: "0 auto" }}
        sm={12}
      >
        <div>
          <h3 className="py-3">Sign-Up</h3>
          <Row className="my-2 w-100">
            <Col>
              <Form.Group>
                <Form.Label className="Form-Lables"> First Name </Form.Label>
                <Form.Control
                  type="text"
                  className="Form-Fields"
                  value={props.user.f_name}
                  onChange={(e) =>
                    props.handleUser({ ...props.user, f_name: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="Form-Lables"> Last Name </Form.Label>
                <Form.Control
                  type="text"
                  className="Form-Fields"
                  value={props.user.l_name}
                  onChange={(e) =>
                    props.handleUser({ ...props.user, l_name: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="my-2 w-100">
            <Form.Group>
              <Form.Label className="Form-Lables"> Username </Form.Label>
              <Form.Control
                type="text"
                className="Form-Fields"
                value={props.user.username}
                onChange={(e) =>
                  props.handleUser({ ...props.user, username: e.target.value })
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
                value={props.user.password}
                onChange={(e) =>
                  props.handleUser({ ...props.user, password: e.target.value })
                }
                required
              />
            </Form.Group>
          </Row>
          <div
            className="msg"
            style={{
              fontSize: "0.8rem",
              //   color: `${isLoginSucced.isLoggedIn ? "green" : "red"}`,
            }}
          ></div>
          <hr className="w-100 my-3" />
        </div>
        <div
          className="d-flex align-items-center"
          style={{ justifyContent: "space-between" }}
        >
          <Button variant="outline-dark" onClick={props.handleRegister}>
            Register
          </Button>
          <Link
            to="/login"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        </div>
      </Row>
    </Container>
  );
};
