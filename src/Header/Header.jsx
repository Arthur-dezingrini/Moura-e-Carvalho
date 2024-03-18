import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useState, useEffect  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import AnimatedComponent from '../AnimatedComponent';
import { FaHouse } from "react-icons/fa6";
import Logo from '../assets/Logo.jpg'


const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='p-3 header'>
      <nav>
        <AnimatedComponent animationType={'slideTop'} className='w-100'>
        <ul className={'menu-desktop container d-flex align-items-center'}>
          <li>
            <ul className='gap-5'>
              <li><Link to="/" className={location.pathname === "/" ? "selected" : ""}> <FaHouse style={{fontSize: '1.5rem'}}/> </Link></li>
              <li><Link to="/Sobre" className={location.pathname === "/Sobre" ? "selected" : ""}>Sobre</Link></li>
              <li><Link to="/Servico" className={location.pathname === "/Servico" ? "selected" : ""}>Areas de atuação</Link></li>
              
            </ul>
          </li>
          <li>
            <img src={Logo} alt="Logo" width={350}/>
          </li>
          <li>
            <ul className='gap-5'>
            <li><Link to="/Noticias" className={location.pathname === "/Noticias" ? "selected" : ""}>Noticias</Link></li> 
            <li><Link to="/Contato" className={location.pathname === "/Contato" ? "selected" : ""}>Contato</Link></li>
            </ul>
          </li>
          <li className={`d-flex align-items-center social`}>
              <a href="https://www.instagram.com/vmecadvogados/"><FaInstagram style={{ fontSize: '1.6em', marginRight: '2px' }}></FaInstagram></a>
              <a href=""><RiFacebookCircleLine style={{ fontSize: '1.7em' }}></RiFacebookCircleLine></a>
          </li>
        </ul>

        <ul className={`menu-mobile ${isOpen ? "is-open" : ""}`}>
          <button className='btn-menu-mobile' onClick={toggleMenu}>
            <CiMenuBurger></CiMenuBurger>
          </button>
          <img  src={Logo} alt="Logo" width={320}/>
          <ul className={`menu-mobile-items ${isOpen ? "is-open" : ""}`}>
          <li><Link to="/" className={location.pathname === "/" ? "selected" : ""}>Home</Link></li>
          <li><Link to="/Servico" className={location.pathname === "./Servico" ? "selected" : ""}>Areas de atuação</Link></li>
          <li><Link to="/Noticias" className={location.pathname === "/Noticias" ? "selected" : ""}>Noticias</Link></li> 
          <li><Link to="/Sobre" className={location.pathname === "/Sobre" ? "selected" : ""}>Sobre</Link></li>
          <li><Link to="/Contato" className={location.pathname === "/Contato" ? "selected" : ""}>Contato</Link></li>
            <li>
              <a href="https://www.instagram.com/vmecadvogados/" target="_blank"><FaInstagram style={{ fontSize: '1.6em', marginRight: '2px' }}></FaInstagram></a> 
              <a href=""><RiFacebookCircleLine style={{ fontSize: '1.7em' }}></RiFacebookCircleLine></a> 
            </li>
          </ul>
        </ul>
        </AnimatedComponent>
      </nav>
    </header>
  );
}

export default Header;