import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Tabs from "./index-sections/Tabs.js";
import Experience from "./index-sections/Experience.js";
import AboutMe from "./index-sections/AboutMe.js";
import Portfolio from "./index-sections/Portfolio.js";
import Contact from "./index-sections/Contact.js";
import ScrollButton from "./index-sections/ScrollButton.js";

import './index.scss';



function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      
      <div className="wrapper">
        <IndexHeader />
        <div className="main long">
          <AboutMe />    
          <Tabs />
          <Experience />
          <Portfolio />
          <Contact />
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
        <DarkFooter />
      </div>
      
    </>
  );
}

export default Index;
