import React from 'react';
import { useTranslation } from 'react-i18next';


// https://dzone.com/articles/how-to-use-owl-carousel-in-reactjs
// https://www.npmjs.com/package/react-owl-carousel

import {
    Container,
    Card,
    CardImg,
    CardBody
} from "reactstrap";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Experience.scss';

const Employment = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="section section-experience" id="experience">
                <Container>
                    <h3 className="title">{t('experience.title')}</h3>
                    {/* <div class='container-fluid' > */}
                    <OwlCarousel items={3}
                        className="owl-theme"
                        loop='false'
                        nav
                        margin={15}
                        responsiveClass="true"
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 2
                            },
                            700: {
                                items: 3
                            },
                            1000: {
                                items: 3
                            }
                        }}
                    >
                        {
                            t("experience.relevant").map(job => {
                                return (
                                    <div className="item">
                                        <Card id="experience-card">
                                            <div className="img-container">
                                                <CardImg className='img' src={require("../../assets/img/experience/" + job.logo)} alt={job.company + " logo"} style={{ width: '100%' }} /></div>
                                            <CardBody>
                                                <p className="jobtitle">{job.title}</p>
                                                <a href={job.link} target="_blank" rel="noopener noreferrer" className="company"><p>{job.company}</p>
                                                </a>
                                                <span className="date">{job.location} | {job.dates}</span>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    {/* </div> */}
                </Container>
            </div>
        </>
    )
}


export default Employment;