import React from "react";
import { useTranslation } from 'react-i18next';

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

import SkillStackProgress from "./SkillStackProgess";
import LocalizationSkills from './LocalizationSkills';
import {Education, Certifications} from "./Education"

import "./Tabs.scss";

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  const { t } = useTranslation();

  return (
    <>
      <div className="section section-tabs" id="tabs-section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" lg="8">
              <h3 className='title'>{t('skills.title')}</h3>
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
                        className={iconPills === "1" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons tech_laptop"></i>
                        {t('skills.dev')}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <img src={require('assets/img/languages_white.png')} style={{ width: '20px', marginRight:"3px" }} alt={t("indexNavBar.langSelector")} />
                        {t('skills.loc')}
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                        {t('skills.other')}
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-left"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      {/* <div className="main-stack-title">
                        <h4>Main Stack</h4>
                      </div> */}
                      <SkillStackProgress />
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <LocalizationSkills />
                    </TabPane>
                    {/* <TabPane tabId="iconPills3">
                      <ul>
                        <li><p>{t('skills.jira')}</p></li>
                        <li><p>{t('skills.confluence')}</p></li>
                        <li><p>{t('skills.adobe')}</p></li>
                      </ul>
                    </TabPane> */}
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

            <Col className="ml-auto mr-auto" md="10" lg="4">
              <h3 className='title'>{t('education.title')}</h3>
              {/* <Card>
                <CardHeader> */}
              <Nav className="justify-content-center" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={pills === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("1");
                    }}
                  >
                    <i className="now-ui-icons education_hat"></i> {t('education.edu')}
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
                    <i className="fas fa-certificate"></i> {t('education.cert')}
                  </NavLink>
                </NavItem>
              </Nav>
              {/* </CardHeader>
                <CardBody> */}
              <TabContent
                className="text-center"
                activeTab={"pills" + pills}
              >
                <TabPane tabId="pills1">
                  <Education />
                </TabPane>
                <TabPane tabId="pills2">
                  <Certifications />
                </TabPane>
              </TabContent>
              {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
