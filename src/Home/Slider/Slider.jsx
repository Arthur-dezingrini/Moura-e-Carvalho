import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './Slider.css';
import { Link } from 'react-router-dom';
import Slide1 from '../../assets/Slides/Slider.jpg'
import Slide2 from '../../assets/Slides/Slider2.jpg'
import Slide3 from '../../assets/Slides/Slider3.jpg'

const MySlider = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
    };

    const slides = [
      {
        img: Slide1,
        content: (
          <div className='container d-flex flex-column justify-contenter-center align-items-center'>
            <img src="./src/assets/Logo-2.png" alt="" width={100}/>
            <h1 className='roboto-thin'>Direito Trabalhista</h1>
            <Link to={'./Servico/trabalhista'}><button className='button-slider'>Saiba mais</button></Link>
          </div>
        ),
      },
      {
        img: Slide2,
        content: (
          <div className='container d-flex flex-column justify-contenter-center align-items-center'>
            <img src="./src/assets/Logo-2.png" alt="" width={100}/>
            <h1>Direito Do Agronegocio</h1>
            <Link to={'./Servico/agronegocio'}><button className='button-slider'>Saiba mais</button></Link>
          </div>
        ),
      },
  
      {
        img: Slide3,
        content: (
          <div className='container d-flex flex-column justify-contenter-center align-items-center'>
            <img src="./src/assets/Logo-2.png" alt="" width={100}/>
            <h1>Direito Bancario</h1>
            <Link to={'./Servico/bancario'}><button className='button-slider'>Saiba mais</button></Link>
          </div>
        ),
      },
    ];
  
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