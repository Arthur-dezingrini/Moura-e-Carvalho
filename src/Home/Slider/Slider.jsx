import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './Slider.css';

const MySlider = ({ slides }) => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
    };
  
    return (
      <div >
          <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <div className="image-overlay" style={{ backgroundImage: `url(${slide.img})`}} />
            <div className="content"> {slide.content}</div>
          </div>
      ))}
    </Slider>
      </div>
    
    );
  };

export default MySlider;