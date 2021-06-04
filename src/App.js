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
        <Router>
          <Row>
            <Col id="addall">
              <Row>
                <Link to="/">
                  <button className="butonatFillestare">Home</button>
                </Link>
              </Row>

              <Row>
                <Link to="/NewTask">
                  <button className="butonatFillestare">Add Task</button>
                </Link>
              </Row>
              <Row>
                <Link to="/AllTasks">
                  <button className="butonatFillestare">All Tasks</button>
                </Link>
              </Row>
              <Row>
                <Link to="/TasksByCategory">
                  <button className="butonatFillestare">
                    Tasks By Category
                  </button>
                </Link>
              </Row>
            </Col>
            <Col sm={9}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/NewTask">
                  <NewTask />
                </Route>
                <Route exact path="/AllTasks">
                  <AllTasks />
                </Route>
                <Route exact path="/TasksByCategory">
                  <TasksByCategory />
                </Route>
              </Switch>
            </Col>
            <Col></Col>
          </Row>
        </Router>
      </Container>
    </>
  );
}

export default App;
