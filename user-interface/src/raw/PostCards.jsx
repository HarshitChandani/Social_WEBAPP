import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";

const PostCards = ({ data }) => {
  return (
    <Container className="my-2">
      <Row>
        {/* <div class="card-columns"> */}
        {data.map((d) => {
          return (
            <Col md={5} className="my-1">
              <Card>
                <Card.Img
                  variant="top"
                  src={d.banner}
                  className="border w-100"
                  style={{ height: "34vh", opacity: "0.8" }}
                />
                <Card.ImgOverlay>
                  <Card.Title
                    className="text-light"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {d.title}
                  </Card.Title>
                </Card.ImgOverlay>

                <Card.Body className="p-1">
                  <Card.Text style={{ fontSize: ".7rem" }}>
                    {d.description}
                    <div className="mt-3" style={{ fontSize: ".6rem" }}>
                      Creator:{" "}
                      <span className="text-success font-weight-bold">
                        {d.creator}
                      </span>
                    </div>
                  </Card.Text>
                  <Card.Title
                    className="w-25"
                    style={{
                      backgroundColor: "rgb(212 212 255)",
                      borderRadius: "5%",
                      padding: "0 0 4px 4px",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineLike />
                    <span style={{ fontSize: ".9rem" }}>Like</span>
                    <div
                      className="like_count text-center"
                      style={{ fontSize: "0.6rem" }}
                    ></div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {/* </div> */}
      </Row>
    </Container>
  );
};
export default PostCards;
