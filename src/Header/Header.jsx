import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import './Header.css';
import { useState, useEffect  } from 'react';
import { useSpring, animated } from 'react-spring';
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [showContent, setShowContent] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const animationProps = useSpring({
    config: { duration: 500 },
    opacity: showContent ? 1 : 0,
    transform: showContent ? 'translateY(0)' : 'translateY(-100%)',
  });

  useEffect(() => {
    setShowContent(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='p-3 header'>
      <animated.nav style={animationProps} >
        <ul className={'menu-desktop container d-flex align-items-center justify-content-evenly'}>
          <li>
            <ul className='gap-6'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Atuacao">Areas de atuação</Link></li>
            </ul>
          </li>
          <li>
            <img src="/src/assets/Logo.jpg" alt="" width={350}/>
          </li>
          <li>
            <ul className='gap-6'>
              <li><Link to="/sobre">Sobre</Link></li>
              <li> <Link to="/Contato">Contato</Link></li>
            </ul>
          </li>
          <li className={`d-flex align-items-center social`}>
              <a href=""><FaInstagram style={{ fontSize: '1.6em', marginRight: '2px' }}></FaInstagram></a>
              <a href=""><RiFacebookCircleLine style={{ fontSize: '1.7em' }}></RiFacebookCircleLine></a>
          </li>
        </ul>

        <ul className={`menu-mobile ${isOpen ? "is-open" : ""}`}>
          <button className='btn-menu-mobile' onClick={toggleMenu}>
            <CiMenuBurger></CiMenuBurger>
          </button>
          <img  src="/src/assets/Logo.jpg" alt="Logo" width={320}/>
          <ul className={`menu-mobile-items ${isOpen ? "is-open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Atuacao">Areas de atuação</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li> <Link to="/Contato">Contato</Link></li>
            <li>
              <a href=""><FaInstagram style={{ fontSize: '1.6em', marginRight: '2px' }}></FaInstagram></a> 
              <a href=""><RiFacebookCircleLine style={{ fontSize: '1.7em' }}></RiFacebookCircleLine></a> 
            </li>
          </ul>
        </ul>
      </animated.nav>
    </header>
  );
}

export default Header;