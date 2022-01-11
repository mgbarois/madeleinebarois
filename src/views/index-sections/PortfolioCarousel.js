import React from "react";

// reactstrap components
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

import './PortfolioCarousel.scss'

// core components

const items = [
  {
    src: "https://nadagabon.org/",
    title: "Nsombou Abalghe-Dzal Association Website",
    tech: "blogdown, scss"
  },
  {
    src: "https://mgbarois.github.io/german-cheat-sheet/",
    title: "German Cheat-Sheet",
    tech: "React, Bootstrap, LinguaTools API",
    githubLink: "https://github.com/mgbarois/german-cheat-sheet"
  },
  {
    src: "https://clarifaiapp.herokuapp.com/",
    title: "Clarifai Face Detection App",
    tech: "React, Node.js, Express.js, PostgeSQL, Clarifai API",
    githubLink: "https://github.com/mgbarois/clarifaiapp"
  },
  {
    src: "https://mgbarois.github.io/landscape-picker/",
    title: "Landscape Picker",
    tech: "React, Unsplash API",
    githubLink: "https://github.com/mgbarois/landscape-picker"
  },
];

function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {/* <div className="section" id="carousel">  */}
      <div id="carousel" className="portfolio-carousel">

        {/* <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12"> */}
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <div className="iframe-wrapper">

                  <iframe frameBorder='0' scrolling='yes' src={item.src} title={item.title}></iframe>
                  {/* <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div> */}

                  <div className="carousel-outer-caption">
                    <div className="carousel-outer-title">
                      <p><span className="title">{item.title}</span> | <span className="tech"> {item.tech}</span>
                        <a className="carousel-outer-link" href={item.src} target="_blank" rel="noopener noreferrer">
                          <Button className="btn-round btn-icon carousel-link-button" color="primary" size="sm">
                            <i class="fas fa-external-link-square-alt" />
                          </Button>
                        </a>
                        <a className="carousel-outer-link" href={item.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button className="btn-round btn-icon carousel-link-button" color="primary" size="sm">
                            <i className="fab fa-github" />
                          </Button>
                        </a></p>
                    </div>
                    {/* <div className="carousel-outer-links">
                  <p></p>
                  </div> */}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
        {/* </Col>
          </Row> 
          </Container> */}
      </div>
    </>
  );
}

export default PortfolioCarousel;
