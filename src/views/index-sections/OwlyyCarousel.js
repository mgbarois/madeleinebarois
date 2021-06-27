import React from 'react';
import $ from 'jquery';

import 'react-owl-carousel2/src/owl-carousel-classic';


const OwlyyCarousel = () => {
    $(document).ready(function () {
        $("#news-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsMobile: [550, 1],
            navigation: true,
            navigationText: ["", ""],
            autoPlay: false
        });
    });



    $(document).ready(function () {

        $("#jobs").owlCarousel({
            items: 4,
            navigation: true,
            navigationText: ["", ""],
            nav: false,
            autoPlay: false,
        });

    });
    return (

        <div id="experience">
            <div className="overlay">
                <div className="container">
                    <div id="jobs" className="owl-carousel owl-theme">

                        <div className="item">
                            <img src="images/acolad_gray9.png" alt="Acolad logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2018-2020</p>
                            <a href="https://www.acolad.com/"><i className="fa fa-globe"></i></a>
                        </div>
                        <div className="item">
                            <img src="images/telelingua_logo_gray.png" alt="Telelingua logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2017-2018</p>
                            <a href="http://www.telelingua.com/en/"><i className="fa fa-globe"></i></a>
                        </div>
                        <div className="item">
                            <img src="images/smartkyc_logo_gray.png" alt="SmartKYC logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2017-2018</p>
                            <a href="https://smartkyc.com/"><i className="fa fa-globe"></i></a>
                        </div>
                        <div className="item">
                            <img src="images/tcloc_logo_gray.png" alt="TCLoc logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2016-2017</p>
                            <a href="https://mastertcloc.unistra.fr/"><i className="fa fa-globe"></i></a>
                        </div>
                        <div className="item">
                            <img src="images/chacunsoncourt_logo_gray.png" alt="Chacun Son Court logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2016-2017</p>
                            <a href="http://chacunsoncourt.eu/"><i className="fa fa-globe"></i></a>

                        </div>
                        <div className="item">
                            <img src="images/berlitz_logo_gray.png" alt="Berlitz logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2014-2016</p>
                            <a href="https://www.berlitz.com/"><i className="fa fa-globe"></i></a>

                        </div>
                        <div className="item">
                            <img src="images/ubc_logo_gray.png" alt="UBC logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2013-2014</p>
                            <a href="https://linguistics.ubc.ca/"><i className="fa fa-globe"></i></a>
                        </div>
                        <div className="item">
                            <img src="images/moa (3).png" alt="MOA logo" style={{ width: '100%' }} />
                            <p className="company">Content</p>
                            <p className="date">2012-2014</p>
                            <a href="https://moa.ubc.ca/"><i className="fa fa-globe"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwlyyCarousel;