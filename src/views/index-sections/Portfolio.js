import React from 'react';

// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    TabContent,
    TabPane,
    UncontrolledTooltip,
} from "reactstrap";

import './Portfolio.scss';
import PortfolioCarousel from './PortfolioCarousel.js';
import Contact from './Contact.js';



const Portfolio = () => {
    const [pills, setPills] = React.useState("1");
    //     React.useEffect(() => {
    //     document.body.classList.add("profile-page");
    //     document.body.classList.add("sidebar-collapse");
    //     document.documentElement.classList.remove("nav-open");
    //     window.scrollTo(0, 0);
    //     document.body.scrollTop = 0;
    //     return function cleanup() {
    //       document.body.classList.remove("profile-page");
    //       document.body.classList.remove("sidebar-collapse");
    //     };
    //   }, []);
    return (
        <>
            <div className="section portfolio-section" id="portfolio">
                <Container className='profile-page'>
                    <Row>
                        <Col className="ml-auto mr-auto" md="12">
                            <h3 className="title text-center">Portfolio</h3>
                            <div className="nav-align-center">
                                <Nav
                                    className="nav-pills-info nav-pills-just-icons"
                                    pills
                                    role="tablist"
                                >
                                    <NavItem>
                                        <NavLink
                                            className={pills === "1" ? "active" : ""}
                                            href="#pablo"
                                            style={{opacity:"1"}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("1");
                                            }}
                                        >
                                            <i className="fab fa-github"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={pills === "2" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("2");
                                            }}
                                        >
                                            <i className="fab fa-codepen"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={pills === "3" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("3");
                                            }}
                                        >
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={require('assets/img/repl_crop_black.png')} alt='repl logo' style={{ width: '25px', display: 'block' }} />
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                        <TabContent className="gallery" style={{ width: '100%' }} activeTab={"pills" + pills}>
                            <TabPane tabId="pills1">
                                <Col className="ml-auto mr-auto" md="12">
                                    <Row className="collections">
                                        <Col md="12">
                                            <PortfolioCarousel />
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                            <TabPane tabId="pills2">
                                <Col className="ml-auto mr-auto" md="10">
                                    <Row className="collections codepen">
                                        <Col md="6">
                                            <div class="thumbnail">
                                                <iframe className='img-raised' scrolling="no" title="Random Quote Machine" src="https://codepen.io/mgbarois/embed/ExWPbWZ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                    See the Pen <a href='https://codepen.io/mgbarois/pen/ExWPbWZ'>Random Quote Machine</a> by mgbarois
                                                    (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                                </iframe>
                                            </div>
                                            <div class="thumbnail">

                                                <iframe className='img-raised' scrolling="no" title="Markdown Previewer" src="https://codepen.io/mgbarois/embed/QWpyXyo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                    See the Pen <a href='https://codepen.io/mgbarois/pen/QWpyXyo'>Markdown Previewer</a> by mgbarois
                                                    (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                                </iframe>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="thumbnail">

                                                <iframe className='img-raised' scrolling="no" title="25 + 5 Clock" src="https://codepen.io/mgbarois/embed/yLMJOKE?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                    See the Pen <a href='https://codepen.io/mgbarois/pen/yLMJOKE'>25 + 5 Clock</a> by mgbarois
                                                    (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                                </iframe>
                                            </div>
                                            <div class="thumbnail">

                                                <iframe className='img-raised' scrolling="no" title="Javascript Calculator" src="https://codepen.io/mgbarois/embed/eYvZjBY?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                    See the Pen <a href='https://codepen.io/mgbarois/pen/eYvZjBY'>Javascript Calculator</a> by mgbarois
                                                    (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                                </iframe>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="thumbnail">

                                                <iframe className='img-raised' scrolling="no" title="Drum Machine" src="https://codepen.io/mgbarois/embed/NWpNaXX?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                    See the Pen <a href='https://codepen.io/mgbarois/pen/NWpNaXX'>Drum Machine</a> by mgbarois
                                                    (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                                </iframe>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                            <TabPane tabId="pills3">
                                <Col className="ml-auto mr-auto" md="10">
                                    <Row className="collections repl">
                                        <Col md="6">
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/mr-cup-fabien-barral-o6GEPQXnqMY-unsplash.jpg")}
                                            ></img>
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/aron-visuals-BXOXnQ26B7o-unsplash.jpg")}
                                            ></img>
                                        </Col>
                                        <Col md="6">
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg")}
                                            ></img>
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/markus-winkler-jid7TSoa02c-unsplash.jpg")}
                                            ></img>
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                        </TabContent>
                    </Row>
                </Container>

            </div>
        </>
    )
}
export default Portfolio;