import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./firstpage.css";

const FirstPage = () => {
  return (
    <Fragment>
      <Container id="faqja1">
        <div>
          <img src="./images/fotoja.png" />
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Container>
    </Fragment>
  );
};

export default FirstPage;
