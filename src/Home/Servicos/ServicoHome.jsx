import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bancario from '../../assets/Bancario.png'
import Agricultura from '../../assets/Agricultura.png'
import Trabalhista from '../../assets/trabalhista.png'

const ServicoHome = ({ showDescription }) => {
    const services = [
        { id: 'bancario', name: 'TRABALHISTA BANCÁRIO', simbolo: <img src={Bancario} width={120} alt="Imagem direito bancario" />, description: 'Descrição do serviço trabalhista bancário...' },
        { id: 'trabalhista', name: 'DIREITO TRABALHISTA', simbolo: <img src={Trabalhista} width={100} alt="Imagem direito Trabalhista" />, description: 'Descrição do serviço trabalhista...'},
        { id: 'agronegocio', name: 'DIREITO DO AGRONEGÓCIO', simbolo: <img src={Agricultura} width={100} alt="Imagem direito do agronegocio"/>, description: 'Descrição do serviço de agronegócio...' },
    ];

    return (
        <div className="d-flex flex-wrap">
            {services.map((service, index) => (
               <Link key={index} to={`/servico/${service.id}`}>
                    <div className="servico-item">
                        <div className="balance">{service.simbolo}</div>
                        <span className="name-service">{service.name}</span>
                        {showDescription && (
                            <div className="d-flex flex-column">
                                <span>{service.description}</span>
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

ServicoHome.propTypes = {
    showDescription: PropTypes.bool,
};

ServicoHome.defaultProps = {
    showDescription: false,
};

export default ServicoHome;
