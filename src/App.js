import "./index.css";
import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

// components
// import LisTodos from "./ListTodos";
import FirstPage from "./first-page";
// import InputTodo from "./InputTodo";
// import DeleteCategory from "./DeleteCategory";

function App() {
  return (
    <>
      <Navbar id="navi">
        <h3 className="nav-paragraph">This is a notebook</h3>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Row></Row>
            <Row></Row>
            <Row>
              <p id="addall">Add task</p>
              <p id="addall">Add task</p>
            </Row>
          </Col>
          <Col sm={8}>
            <FirstPage />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
