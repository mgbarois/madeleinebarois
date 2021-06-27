/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";


import Zoom from 'react-reveal/Zoom';
import AboutMe from '../../views/index-sections/AboutMe';

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/fishes.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
        
          <div className="content-center brand">
          
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo_circuit_white.png")}
            />
            
            <h1 className="h1-seo">Madeleine Barois</h1>
            <h3>Web developer & Localization Engineer</h3>
          </div>
          
          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6> */}
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
