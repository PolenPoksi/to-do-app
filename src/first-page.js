import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import fotofaqja1 from "./images/fotofaqja1.svg";

const FirstPage = () => {
  return (
    <Fragment>
      <Container id="faqja1">
        <Row>
          <Col xs={4} md={2}></Col>
          <Col id="media">
            <a href="/">
              <img width={420} height={500} src={fotofaqja1} />
            </a>
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
      </Container>
    </Fragment>
  );
};

export default FirstPage;
