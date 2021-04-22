import "./index.css";
import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

// components
import LisTodos from "./ListTodos";
// import FirstPage from "./first-page";

function App() {
  return (
    <>
      <Navbar id="navi">
        <h3 className="nav-paragraph">This is a notebook</h3>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Row>Add task</Row>
            <Row>All tasks</Row>
          </Col>
          <Col sm={8}>
            <LisTodos />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
