import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import fotofaqja1 from "./images/fotofaqja1.svg";

const Home = () => {
  return (
    <>
      <Container id="faqja1">
        <Router>
          <Row>
            <Col xs={4} md={2}></Col>
            <Col id="media">
              <Link to="/NewTask">
                <img width={420} height={500} src={fotofaqja1} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={2}></Col>
            <Col>
              <p className="texti">
                There is no note available, press on "+" to add new
              </p>
            </Col>
          </Row>
        </Router>
      </Container>
    </>
  );
};

export default Home;
