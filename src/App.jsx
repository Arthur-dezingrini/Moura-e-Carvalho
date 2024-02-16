import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import Atuacao from './Atuacao/Atuacao';
import Contato from './Contato/Contato';
import Sobre from './Sobre/Sobre';
import Footer from './Footer/Footer';
import './global.css'

const App = () => {
 
  return (
      <Router>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Sobre" element={<Sobre/>}/>
            <Route exact path="/Atuacao" element={<Atuacao/>}/>
            <Route exact path="/Contato" element={<Contato/>}/>
          </Routes>
          <Footer></Footer>
      </Router>
  )
}

export default App
