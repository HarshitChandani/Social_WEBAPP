import "./style/App.css";
import { Container, Row, Col } from "react-bootstrap";
import CreatePost from "./components/CreatePost";
import { Posts } from "./components/Posts";
// import Subscribe from "./components/Subscribe";

function App() {
  return (
    <Container fluid>
      <div className="jumbotron text-left mt-1">
        <div className="container rounded" style={{ borderRadius: "5px" }}>
          <div style={{ fontWeight: "400", fontSize: "1.5rem" }}>Posts</div>
        </div>
      </div>
      <Row>
        <Col md={8}>{<Posts />}</Col>
        {/* <Col md={8}>{<Login />}</Col> */}
        <Col md={4}>{<CreatePost />}</Col>
      </Row>
      {/* {<Subscribe />} */}
    </Container>
  );
}

export default App;
