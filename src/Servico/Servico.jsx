import ServicoHome from "../Home/Servicos/ServicoHome";
import './Servico.css'
import AnimatedComponent from "../AnimatedComponent";

const Servico = () => {
    return (
        <div className="servico container p-5">
            <AnimatedComponent>
                <h1>Áreas de Atuação</h1>
                <span>Conheça as soluções jurídicas que podemos oferecer a você e/ou sua empresa.</span>
            </AnimatedComponent>
            <AnimatedComponent animationType={'scale'} className=" flex-wrap d-flex pb-5">
                <ServicoHome showDescription={true} />
            </AnimatedComponent>
        </div>
    );
}

export default Servico;
