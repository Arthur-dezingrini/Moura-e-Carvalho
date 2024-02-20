import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Servico from './Servico/Servico';
import Contato from './Contato/Contato';
import Sobre from './Sobre/Sobre';
import Footer from './Footer/Footer';
import Trabalhista from './Servico/OurServices/Trabalhista'; 
import Agronegocio from './Servico/OurServices/Agronegocio'; 
import Bancario from './Servico/OurServices/Bancario'; 
import NewsList from './Noticias/NewsList';
import NewsDetails from './Noticias/NewsDetails';
import './global.css';

const App = () => {

  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/Servico" element={<Servico/>} />
          <Route exact path="/Contato" element={<Contato/>} />
          <Route exact path="/servico/trabalhista" element={<Trabalhista />} />
          <Route exact path="/servico/agronegocio" element={<Agronegocio />} />
          <Route exact path="/servico/bancario" element={<Bancario />} />
          <Route path="/Noticias" element={<NewsList/>} />
          <Route path="/Noticias/:id" element={<NewsDetails />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
