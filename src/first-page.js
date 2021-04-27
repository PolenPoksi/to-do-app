import React, { Fragment } from "react";
import { Container, Media } from "react-bootstrap";
import "./firstpage.css";
import fotofaqja1 from "./images/fotofaqja1.svg";

const FirstPage = () => {
  return (
    <Fragment>
      <Container id="faqja1">
        <div>
          <Media id="media">
            <a href="/">
              {/* do vendos linkun e faqes add to do  */}
              <img width={400} height={500} src={fotofaqja1} />
            </a>
          </Media>
          <p className="texti">
            There is no note available, press on "+" to add new
          </p>
        </div>
      </Container>
    </Fragment>
  );
};

export default FirstPage;
