import React, { Fragment } from "react";
import { Container, Media } from "react-bootstrap";
import "./firstpage.css";
import fotofaqja1 from "./images/fotofaqja1.svg";

const FirstPage = () => {
  return (
    <Fragment>
      <Container id="faqja1">
        <div>
          <row>
            <Media id="media">
              <img width={400} height={500} src={fotofaqja1} />
            </Media>
            <p id="texti">
              There is no note available, press on "+" to add new
            </p>
          </row>
        </div>
      </Container>
    </Fragment>
  );
};

export default FirstPage;
