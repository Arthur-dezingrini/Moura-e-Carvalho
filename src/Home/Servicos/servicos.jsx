import Servico from './Servico';
import './servicos.css'

const Servicos = () => {
    return (
        <div className="pt-5 mt-5 pb-5 servicos">
             <div className="container">
                <div className="title">
                    <h2>Nossos Serviços</h2>
                </div>
                <Servico showDescription={false} ></Servico>
            </div>
        </div>
    );
};

export default Servicos;