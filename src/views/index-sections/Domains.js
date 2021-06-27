import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import './Domains.scss';

import Slide from 'react-reveal/Slide';

// core components

function Images() {
  return (
    <>
<Slide left>
      <div className='domain-containers'>
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
      </div>
      </Slide>
    </>
  );
}

export default Images;
