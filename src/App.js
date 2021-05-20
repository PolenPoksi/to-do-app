import "./index.css";
import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

// components
// import LisTodos from "./ListTodos"; can do better
// import FirstPage from "./first-page"; Check
// import InputTodo from "./InputTodo";  Check
import DeleteCategory from "./DeleteCategory";

function App() {
  return (
    <>
      <Navbar id="navi">
        <h3 className="nav-paragraph">This is a notebook</h3>
      </Navbar>
      <Container>
        <Row>
          <Col id="addall">
            <Row>
              <button className="butonatFillestare">All Tasks</button>
            </Row>
            <Row>
              <button className="butonatFillestare">Add Task</button>{" "}
            </Row>
          </Col>
          <Col sm={8}>
            <DeleteCategory />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
