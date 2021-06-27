import React from "react";
// react plugins that creates an input with a date picker
// reactstrap components
import {
  Container,
  UncontrolledTooltip
} from "reactstrap";

import Domains from './Domains';

import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


import './AboutMe.scss';


// core components

function AboutMe() {
  return (
    <>
      <div className="section section-about-me" id="about-me">
        <Container className='text-center'>
          <h3 className="title">About Me</h3>
          <p>Hi here, welcome to my website. I'm a web developer with a background in localization engineering and linguistics.
            <br /> I combine creativity with analysis and problem solving to create solutions.</p>
<div className="domain-containers">
<Slide left >
          <div className="domain-container" id='analysis-domain'>
            <img
              alt="..."
              src={require("assets/img/loca_eng_gray.png")}
            ></img>
          </div>
          <UncontrolledTooltip placement="bottom" target="analysis-domain" delay={0}>
            Analysis and problem solving
          </UncontrolledTooltip>
          <div className="domain-container" id="linguistic-domain">
            <img
              alt="..."
              src={require("assets/img/lang_gray.png")}
            ></img>
          </div>
          <UncontrolledTooltip placement="bottom" target="linguistic-domain" delay={0}>
            Linguistic and cultural knowledge
          </UncontrolledTooltip>
          </Slide>
          <Zoom>
          <img
            alt="..."
            className="rounded-circle img-raised"
            style={{ maxWidth: '10rem', filter: 'grayscale(100%)' }}
            src={require("assets/img/me.jpg")}
          ></img>
</Zoom>
<Slide right>
          <div className="domain-container" id="quality-domain">
            <img
              alt="..."
              src={require("assets/img/web_gray.png")}
            ></img>
          </div>
          <UncontrolledTooltip placement="bottom" target="quality-domain" delay={0}>
            Quality and meticulousness
          </UncontrolledTooltip>
          <div className="domain-container" id="creativity-domain">
            <img
              alt="..."
              src={require("assets/img/art_gray.png")}
            ></img>

          </div>
          <UncontrolledTooltip placement="bottom" target="creativity-domain" delay={0}>
            Creativity and design
          </UncontrolledTooltip>
          </Slide>
          </div>
        </Container>
    </div>
    </>
  );
}

export default AboutMe;
