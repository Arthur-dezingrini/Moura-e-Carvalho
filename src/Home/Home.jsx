import Slider from './Slider/Slider'
import Sobre from './Sobre/Sobre'
import Servicos from './Servicos/servicos';
import Why from './Why/Why';
import Blog from './Blog/Blog';
import Contato from './Contato/Contato'
import Social from './Social/Social'



const Home = () => {
    const slides = [
        {
          img: './src/assets/Slides/Slider.jpg',
          content: (
            <div className='container d-flex flex-column justify-contenter-center align-items-center'>
              <img src="./src/assets/Logo-2.png" alt="" width={100}/>
              <h1 className='roboto-thin'>Direito Trabalhista</h1>
              <button className='button-slider'>Saiba mais</button>
            </div>
          ),
        },
        {
          img: './src/assets/Slides/Slider2.jpg',
          content: (
            <div className='container d-flex flex-column justify-contenter-center align-items-center'>
              <img src="./src/assets/Logo-2.png" alt="" width={100}/>
              <h1>Direito Trabalhista</h1>
              <button className='button-slider'>Saiba mais</button>
            </div>
          ),
        },
    
        {
          img: './src/assets/Slides/Slider3.jpg',
          content: (
            <div className='container d-flex flex-column justify-contenter-center align-items-center'>
              <img src="./src/assets/Logo-2.png" alt="" width={100}/>
              <h1>Direito Trabalhista</h1>
              <button className='button-slider'>Saiba mais</button>
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