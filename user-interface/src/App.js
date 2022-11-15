import "./style/App.css";
import { Container, Row, Col } from "react-bootstrap";
import CreatePost from "./components/CreatePost";
import { Posts } from "./components/Posts";

function App() {
  return (
    <Container fluid>
      <div className="jumbotron text-center my-3 ">
        <div
          className="container bg-color rounded"
          style={{ borderRadius: "5px" }}
        >
          <div className="display-6" style={{ fontWeight: "400" }}>
            Posts
          </div>
        </div>
      </div>
      <Row>
        <Col md={8}>{<Posts />}</Col>
        <Col md={4}>{<CreatePost />}</Col>
      </Row>
    </Container>
  );
}

export default App;
