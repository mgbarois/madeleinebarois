import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; //Allows for server-side rendering.


const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};



// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

// <OwlCarousel ref="car" options={options} events={events} > 

const OwlyCarousel = () => {
    const carRef = React.useRef('car');
    return (

<OwlCarousel ref={carRef} options={options} >
    <div><img src={require('assets/img/companies/telelingua_logo_gray.png')} alt="The Last of us"/></div>
    <div><img src={require('assets/img/companies/telelingua_logo_gray.png')} alt="GTA V"/></div>
    <div><img src={require('assets/img/companies/telelingua_logo_gray.png')} alt="Mirror Edge"/></div>
</OwlCarousel>
    )
}
 
export default OwlyCarousel;