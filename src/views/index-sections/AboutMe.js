import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Container,
  UncontrolledTooltip,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";


import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import './AboutMe.scss';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <>
      <div className="section section-about-me" id="about-me">
        <Container className='text-center'>
          <h3 className="title">{t('aboutMe.title')}</h3>
          <Row>
            {/* <Col className="ml-auto mr-auto" md="10" lg="6">
              <p>{t('aboutMe.text')}</p>
            </Col>
            <Col className="ml-auto mr-auto" md="10" lg="3">
              

                <Zoom>
                  <img
                    alt={t('aboutMe.myPictureAlt')}
                    className="rounded-circle img-raised"
                    style={{ maxWidth: '10rem' }}
                    src={require("assets/img/me.jpg")}
                  ></img>
                </Zoom>
             
            </Col> */}
            <Col className="ml-auto mr-auto" md="10" lg="8">
              <Card id="about-me-card">
                <CardHeader>
                <Zoom>
                    <img
                      alt={t('aboutMe.myPictureAlt')}
                      id="my-photo"
                      className="rounded-circle img-raised"
                      src={require("assets/img/me.jpg")}
                    ></img>
                  </Zoom>
                </CardHeader>
                <CardBody>
                  <p>{t('aboutMe.text')}</p>
                </CardBody>
              </Card>
              <div className="domain-containers">
                <Slide left >
                  <div className="domain-container" id='analysis-domain'>
                    <img
                      alt={t('aboutMe.domEngAlt')}
                      src={require("assets/img/loca_eng_gray.png")}
                    ></img>
                  </div>
                  <UncontrolledTooltip placement="bottom" target="analysis-domain" delay={0}>
                    {t('aboutMe.domEngName')}
                  </UncontrolledTooltip>
                  <div className="domain-container" id="quality-domain">
                    <img
                      alt={t('aboutMe.domWebAlt')}
                      src={require("assets/img/web_gray.png")}
                    ></img>
                  </div>
                  <UncontrolledTooltip placement="bottom" target="quality-domain" delay={0}>
                    {t('aboutMe.domWebName')}
                  </UncontrolledTooltip>
                </Slide>
           <Slide right>
                <div className="domain-container" id="linguistic-domain">
                  <img
                    alt={t('aboutMe.domLangAlt')}
                    src={require("assets/img/lang_gray.png")}
                  ></img>
                </div>
                <UncontrolledTooltip placement="bottom" target="linguistic-domain" delay={0}>
                  {t('aboutMe.domLangName')}
                </UncontrolledTooltip>
                <div className="domain-container" id="creativity-domain">
                  <img
                    alt={t('aboutMe.domDesAlt')}
                    src={require("assets/img/art_gray.png")}
                  ></img>
                </div>
                <UncontrolledTooltip placement="bottom" target="creativity-domain" delay={0}>
                  {t('aboutMe.domDesName')}
                </UncontrolledTooltip>

              </Slide>
              </div>

              
            </Col>




              {/* <div className="badges-container">
            <div className="domain-badges">
              <Badge color="success">Web development</Badge>
              <Badge color="success">Software engineering</Badge>
              <Badge color="success">Localization</Badge>
              <Badge color="success">Linguistics</Badge>
            </div>
            <div className="domain-badges">
            <Badge color="info">Problem solving</Badge>
            <Badge color="info">Pattern recognition</Badge>
            <Badge color="info">Debugging</Badge>
            <Badge color="info">Design</Badge>
            <Badge color="info">Customer service</Badge>
            <Badge color="info">Leadership</Badge>
          </div>
          <div className="domain-badges">

            <Badge color="primary">Resourceful</Badge>
            <Badge color="primary">Creative</Badge>
            <Badge color="primary">Autonomous</Badge>
            <Badge color="primary">Hardworking</Badge>
            <Badge color="primary">Observant</Badge>
            <Badge color="primary">Attentive</Badge>
            <Badge color="primary">Analytical</Badge>
            <Badge color="primary">Meticulous</Badge>
            <Badge color="primary">Friendly</Badge>
          </div>
      </div> */}

          </Row>
        </Container>
      </div>
    </>
      );
}

      export default AboutMe;
