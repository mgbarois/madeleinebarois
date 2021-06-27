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
            <div className="section" id="portfolio">
                <Container className='profile-page'>
                    <Row>
                        <Col className="ml-auto mr-auto" md="12">
                            <h4 className="title text-center">Portfolio</h4>
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
                                    <Row className="collections">
                                        <Col md="6">
                                            <iframe height="265" className='img-raised' scrolling="no" title="Random Quote Machine" src="https://codepen.io/mgbarois/embed/preview/ExWPbWZ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                See the Pen <a href='https://codepen.io/mgbarois/pen/ExWPbWZ'>Random Quote Machine</a> by mgbarois
                                                (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                            </iframe>
                                            <iframe height="265" className='img-raised' scrolling="no" title="Markdown Previewer" src="https://codepen.io/mgbarois/embed/preview/QWpyXyo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                See the Pen <a href='https://codepen.io/mgbarois/pen/QWpyXyo'>Markdown Previewer</a> by mgbarois
                                                (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                            </iframe>
                                        </Col>
                                        <Col md="6">
                                            <iframe height="265" className='img-raised' scrolling="no" title="25 + 5 Clock" src="https://codepen.io/mgbarois/embed/preview/yLMJOKE?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                See the Pen <a href='https://codepen.io/mgbarois/pen/yLMJOKE'>25 + 5 Clock</a> by mgbarois
                                                (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                            </iframe>
                                            <iframe height="265" className='img-raised' scrolling="no" title="Javascript Calculator" src="https://codepen.io/mgbarois/embed/preview/eYvZjBY?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                See the Pen <a href='https://codepen.io/mgbarois/pen/eYvZjBY'>Javascript Calculator</a> by mgbarois
                                                (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                            </iframe>
                                        </Col>
                                        <Col md="6">
                                            <iframe height="265" className='img-raised' scrolling="no" title="Drum Machine" src="https://codepen.io/mgbarois/embed/preview/NWpNaXX?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                                See the Pen <a href='https://codepen.io/mgbarois/pen/NWpNaXX'>Drum Machine</a> by mgbarois
                                                (<a href='https://codepen.io/mgbarois'>@mgbarois</a>) on <a href='https://codepen.io'>CodePen</a>.
                                            </iframe>
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                            <TabPane tabId="pills3">
                                <Col className="ml-auto mr-auto" md="10">
                                    <Row className="collections">
                                        <Col md="12">
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/bg3.jpg")}
                                            ></img>
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/bg8.jpg")}
                                            ></img>
                                        </Col>
                                        <Col md="12">
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/bg7.jpg")}
                                            ></img>
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={require("assets/img/bg6.jpg")}
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