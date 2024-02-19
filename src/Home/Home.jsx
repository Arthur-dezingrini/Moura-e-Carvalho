import Slider from './Slider/Slider'
import Sobre from './Sobre/Sobre'
import Servicos from './Servicos/servicos';
import Why from './Why/Why';
import Blog from './Blog/Blog';
import Contato from './Contato/Contato'
import Social from './Social/Social'
import { Link } from 'react-router-dom';



const Home = () => {
    const slides = [
        {
          img: './src/assets/Slides/Slider.jpg',
          content: (
            <div className='container d-flex flex-column justify-contenter-center align-items-center'>
              <img src="./src/assets/Logo-2.png" alt="" width={100}/>
              <h1 className='roboto-thin'>Direito Trabalhista</h1>
              <Link to={'./Servico/trabalhista'}><button className='button-slider'>Saiba mais</button></Link>
            </div>
          ),
        },
        {
          img: './src/assets/Slides/Slider2.jpg',
          content: (
            <div className='container d-flex flex-column justify-contenter-center align-items-center'>
              <img src="./src/assets/Logo-2.png" alt="" width={100}/>
              <h1>Direito Do Agronegocio</h1>
              <Link to={'./Servico/agronegocio'}><button className='button-slider'>Saiba mais</button></Link>
            </div>
          ),
        },
    
        {
          img: './src/assets/Slides/Slider3.jpg',
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
      <div>
        <Slider slides={slides}></Slider>
        <Sobre></Sobre>
        <Servicos></Servicos>
        <Why></Why>
        <Blog></Blog>
        <Contato></Contato>
        <Social></Social>
      </div>
    )
}

export default Home