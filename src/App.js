import "./index.css";
import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from "./Home";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import TasksByCategory from "./TasksByCategory";

function App() {
  return (
    <>
      <Navbar id="navi">
        <h3 className="nav-paragraph">This is a notebook</h3>
      </Navbar>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
