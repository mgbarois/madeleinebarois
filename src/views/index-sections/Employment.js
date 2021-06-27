import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';
import './Employment.scss';

// https://dzone.com/articles/how-to-use-owl-carousel-in-reactjs
// https://www.npmjs.com/package/react-owl-carousel

import {
    Container
} from "reactstrap";

export class Employment extends Component {
    render() {
        return (
            <>
                <div className="section section-experience" id="experience">
                    <Container>
                        <h3 className="title">Employment</h3>
                        <div class='container-fluid' >
                            <OwlCarousel items={4}
                                className="owl-theme"
                                loop='false'c
                                nav
                                margin={8} >
                                {/* <div className="item">
                                    <img className='img' src={require('assets/img/experience/NADA_logo.png')} alt="NADA logo" style={{ width: '90%' }} />
                                    <p className="company">Nsombou Abalghe-Dzal Association</p>
                                    <p className="date">2021-Present</p>
                                    <a href="https://www.nadagagon.org/"><i className="fa fa-globe"></i></a>
                                </div> */}
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/acolad_gray9.png')} alt="Acolad logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2018-2020</p>
                                    {/*<a href="https://www.acolad.com/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/telelingua_logo_gray.png')} alt="Telelingua logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2017-2018</p>
                                    {/*<a href="http://www.telelingua.com/en/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/smartkyc_logo_gray.png')} alt="SmartKYC logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2017-2018</p>
                                    {/*<a href="https://smartkyc.com/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/tcloc_logo_gray.png')} alt="TCLoc logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2016-2017</p>
                                    {/*<a href="https://mastertcloc.unistra.fr/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/chacunsoncourt_logo_gray.png')} alt="Chacun Son Court logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2016-2017</p>
                                    {/*<a href="http://chacunsoncourt.eu/"><i className="fa fa-globe"></i></a>*/}

                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/berlitz_logo_gray.png')} alt="Berlitz logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2014-2016</p>
                                    {/*<a href="https://www.berlitz.com/"><i className="fa fa-globe"></i></a>*/}

                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/ubc_logo_gray.png')} alt="UBC logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2013-2014</p>
                                    {/*<a href="https://linguistics.ubc.ca/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                                <div className="item">
                                    <img className='img' src={require('assets/img/experience/moa (3).png')} alt="MOA logo" style={{ width: '100%' }} />
                                    <p className="company">Content</p>
                                    <p className="date">2012-2014</p>
                                    {/*<a href="https://moa.ubc.ca/"><i className="fa fa-globe"></i></a>*/}
                                </div>
                            </OwlCarousel>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}


export default Employment;