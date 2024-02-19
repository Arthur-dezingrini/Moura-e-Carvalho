import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { PiBank } from 'react-icons/pi';
import { GiFarmTractor } from 'react-icons/gi';

const ServicoHome = ({ showDescription }) => {
    const services = [
        { id: 'trabalhista', name: 'DIREITO TRABALHISTA', simbolo: <LiaBalanceScaleSolid />, description: 'Descrição do serviço trabalhista...'},
        { id: 'agronegocio', name: 'DIREITO DO AGRONEGÓCIO', simbolo: <GiFarmTractor />, description: 'Descrição do serviço de agronegócio...' },
        { id: 'bancario', name: 'TRABALHISTA BANCÁRIO', simbolo: <PiBank />, description: 'Descrição do serviço trabalhista bancário...' },
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
