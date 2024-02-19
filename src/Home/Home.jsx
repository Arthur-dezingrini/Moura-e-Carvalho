import Slider from './Slider/Slider'
import Sobre from './Sobre/Sobre'
import Servicos from './Servicos/servicos';
import Why from './Why/Why';
import Blog from './Blog/Blog';
import Contato from './Contato/Contato'
import Social from './Social/Social'
import { Link } from 'react-router-dom';



const Home = () => {
        
    return ( 
      <div>
        <Slider></Slider>
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