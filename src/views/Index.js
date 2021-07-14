import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
// import BilliardsCarousel from "./index-sections/BilliardsCarousel.js";
//import OwlyCarousel from "./index-sections/OwlyCarousel.js";
import Experience from "./index-sections/Experience.js";
import Domains from "./index-sections/Domains.js";
import AboutMe from "./index-sections/AboutMe.js";
import Portfolio from "./index-sections/Portfolio.js";
import PortfolioCarousel from "./index-sections/PortfolioCarousel.js";
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
          {/* <Carousel /> */}
          <Contact />
          {/* <BasicElements />
          <Navbars />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />        
          <NucleoIcons />
          <CompleteExamples />
          
          <Examples />
          <Download /> */}
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
        <DarkFooter />
      </div>
      
    </>
  );
}

export default Index;
