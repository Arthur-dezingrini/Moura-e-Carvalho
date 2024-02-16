import { LiaBalanceScaleSolid } from "react-icons/lia";
import { PiBank } from "react-icons/pi";
import { GiFarmTractor } from "react-icons/gi";
import PropTypes from 'prop-types';

const Servico = ({showDescription}) => {

    const services = [
        { name: "DIREITO TRABALHISTA", simbolo: <LiaBalanceScaleSolid />, description: "Diversos direitos são negligenciados pelas empresas, em total prejuízo ao trabalhador, que por ser a parte hipossuficiente da relação, deve recorrer ao judiciário, com o auxílio de um advogado, para cumprimento da Lei."},
        { name: "DIREITO DO AGRONEGOCIO", simbolo: <GiFarmTractor />, description: "Os caminhos mais eficazes e menos onerosos não vêm de uma só pessoa. O sucesso de uma empresa depende de apoio na realização de suas tarefas."},
        { name: "DIREITO BANCARIO", simbolo: <PiBank />, description: "Visando resguardar e pleitear os direitos suprimidos, possuímos profissionais capacitados para orientá-los e esclarecer dúvidas quanto ao contrato de trabalho, ativo ou rescindido."},
    ];

    return (
        <div className="d-flex flex-wrap">
            {services.map((service, index) => (
                <div 
                key={index} 
                className="servico-item"
                >
                    <div className="balance">{service.simbolo}</div>
                    <span className="name-service">{service.name}</span>
                    {showDescription && <div className="d-flex flex-column"><span>{service.description}</span><a href="">Saiba mais</a></div>}
                </div>
            ))}
    </div>
    )
}

Servico.propTypes = {
    showDescription: PropTypes.bool
}

Servico.defaultProps = {
    showDescription: false
}

export default Servico;
