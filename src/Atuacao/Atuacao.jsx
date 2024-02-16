import Servico from "../Home/Servicos/Servico";
import './Atuacao.css';

const Atuacao = () => {
    return (
        <div className="container p-5">
            <h1>Áreas de Atuação</h1>
            <p>Conheça as soluções jurídicas que podemos oferecer a você e/ou sua empresa.</p>
                <div className="d-flex wrap justify-content-around">
                    <div className="description">
                        <Servico showDescription={true} />
                    </div>
                </div>
            </div>
    );
}

export default Atuacao;
