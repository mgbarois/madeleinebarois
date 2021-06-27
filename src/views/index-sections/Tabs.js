import React from "react";
import './education.css';
import './Tabs.scss';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

const skillsCol1 = [
  {
    icon: (<i class="fab fa-html5" style={{ fontSize: "30px" }} />),
    name: "HTML5"
  },
  {
    icon: (<i class="fab fa-css3-alt" style={{ fontSize: "30px" }} />),
    name: "CSS§"
  },
  {
    icon: (<i class="fab fa-sass" style={{ fontSize: "30px" }} />),
    name: "Sass"
  },
  {
    icon: (<img className="tool-icon" src={require("assets/img/bootstrap-brands.svg")} alt="Bootstrap logo" />),
    name: "Bootstrap"
  },
  {
    icon: (<i class="fab fa-js" style={{ fontSize: "30px" }} />),
    name: "Javascript (ES6+)"
  },
  {
    icon: (<i class="fab fa-html5" style={{ fontSize: "30px" }} />),
    name: "HTML5"
  }
];


const skillsCol2 = [
  {
    icon: (<i class="fab fa-react" style={{ fontSize: "30px" }} />),
    name: "React JS"
  },
  {
    icon: (<i class="fab fa-server" style={{ fontSize: "30px" }} />),
    name: "Node.js, Express.js"
  },
  {
    icon: (<i class="fab fa-database" style={{ fontSize: "30px" }} />),
    name: "PostgreSQL, MongoDB"
  },
  {
    icon: (<img className="tool-icon" src={require("assets/img/visual_studio_logo.png")} alt="Visual Studio logo" />),
    name: "Visual Studio"
  },
  {
    icon: (<i class="fab fa-git" style={{ fontSize: "30px" }} />),
    name: "Git (GitHub, BitBucket)"
  }
];

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>

            <Col className="ml-auto mr-auto" md="10" lg="7">
              <h3 className='title'>Skillsets</h3>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons tech_laptop"></i>
                        Development
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons business_globe"></i>
                        Localization
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                        Other
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-left"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">

                      <div style={{ display: 'flex', justifyContent: 'space-around' }} className="stack">
                        <div style={{ display: 'flex', flexDirection:'column'}}>
                          {skillsCol1.map((skill) => {
                            return (
                              <div style={{ display: 'flex', alignItems:'left', justifyContent: 'flex-start' }}>
                                <div className="tool-icon" style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>{skill.icon}</div>
                                <div style={{marginLeft: '2rem'}}><p>{skill.name}</p></div>
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ display: 'flex', flexDirection:'column'}}>
                          {skillsCol2.map((skill) => {
                            return (
                              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div>{skill.icon}</div>
                                <div><p>{skill.name}</p></div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                          <h4>Other Specialties</h4>
                          <p><img className="tool-icon" src={require('assets/img/csharp_crop.png')} alt='C#' /> C# (.NET)</p>
                          <p><i className='fas fa-code'></i> XML, XPath</p>
                          <p> <img className="tool-icon" src={require('assets/img/regex_crop.png')} alt='Regex' /> Regex</p>
                        </div>
                        <div>
                          <h4>Basic Knowledge</h4>
                          <p> <img className="tool-icon" src={require('assets/img/blogdown.png')} alt='blogdown logo' /> blogdown, Hugo</p>
                          <p>PHP</p>
                          <p>Python</p>
                        </div>
                      </div>

                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <div class="row row-loc-tools">
                        <div class="col-md-3 col-sm-6">
                          <div class="img sdl">
                            <img src={require('assets/img/sdl_logo.png')} alt="SDL Studio logo" />
                          </div>
                          <p>SDL Trados Studio<br /><span class="sub">Content</span></p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="img">
                            <img src={require('assets/img/memsource.jpg')} alt="Memsource logo" />
                          </div>
                          <p>Memsource<br /><span class="sub">Content</span></p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="img">
                            <img src={require('assets/img/memoq.svg')} alt="MemoQ logo" />
                          </div>
                          <p>MemoQ<br /><span class="sub">Content</span></p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="img">
                            <img src={require('assets/img/okapi_logo.png')} alt="Okapi logo" />
                          </div>
                          <p>Okapi<br /><span class="sub">Content</span></p>
                        </div>
                        <p>File manipulation/process</p>
                        <p>CAT tool configuration</p>
                        <p>Mangement/development of SDL API Connectors/plugins</p>
                        <p>Technical support</p>
                        <p>Debugging, problem analysis and solving</p>
                        <p>Process documentation</p>
                      </div>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

            <Col className="ml-auto mr-auto" md="10" lg="5">
              <h3 className='title'>Education & Training</h3>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
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
                        <i className="now-ui-icons education_hat"></i> Education
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
                        <i className="fas fa-certificate"></i> Training & Certifications
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <div class="education-timeline main-timeline">

                        <div class="education-item">
                          <div class="timeline-icon">
                            <a href="https://mastercaweb.u-strasbg.fr/?lang=en">
                              <img class="timeline-image" src={require('assets/img/education/master-caweb.png')} alt="CAWEB logo" />
                            </a>
                          </div>
                          <div class="timeline-content">
                            <p>
                              <span class="degree">CAWEB Master's</span><br />
                              <span class="institution"> University of Strasbourg</span><br />
                              <span class="year">2016-2018</span><br />
                            </p>
                          </div>
                        </div>
                        <div class="education-item">
                          <div class="timeline-icon">
                            <a href="https://www.unistra.fr/index.php?id=19612">
                              <img class="timeline-image" src={require('assets/img/education/strasbourg_logo.png')} alt="Unistra logo" />
                            </a>
                          </div>
                          <div class="timeline-content">
                            <p>
                              <span class="degree">Master 1 - Plurilingualism & Interculturality</span><br />
                              <span class="institution">University of Strasbourg</span><br />
                              <span class="year">2015-2016</span><br />
                            </p>
                          </div>
                        </div>
                        <div class="education-item">
                          <div class="timeline-icon">
                            <a href="https://www.ubc.ca/">
                              <img class="timeline-image" src={require('assets/img/education/ubc_logo.jpg')} alt="UBC logo" />
                            </a>
                          </div>
                          <div class="timeline-content">
                            <p>
                              <span class="degree">Bacherlor's in Linguistics</span><br />
                              <span class="institution">University of British Columbia</span><br />
                              <span class="year">2010-2014</span><br />
                            </p>
                          </div>
                        </div>
                        <div class="education-item">
                          <div class="timeline-icon">
                            <a href="https://www.ugr.es/">
                              <img class="timeline-image" src={require('assets/img/education/granada_logo.png')} alt="UGR logo" />
                            </a>
                          </div>
                          <div class="timeline-content">
                            <p>
                              <span class="degree">Go Global Exchange Program</span><br />
                              <span class="institution">University of Granada</span><br />
                              <span class="year">2012-2013</span><br />
                            </p>
                          </div>
                        </div>
                      </div>

                    </TabPane>
                    <TabPane tabId="pills2">
                      <p><i className='fab fa-free-code-camp'></i></p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
