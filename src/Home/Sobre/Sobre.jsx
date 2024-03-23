import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedComponent from '../../AnimatedComponent'; 
import Equipe from '../../assets/Equipe.jpg'

import "./Sobre.css"

const Sobre = () => {
    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="container p-5">
                <div className='d-flex justify-content-center align-items-center'>
                    <AnimatedComponent>
                    <div className="d-flex flex-column gap-3 sobre me-5">
                        <p>CONHEÇA A</p>
                        <h2>Valdéris Moüra & Carvalho advogados</h2>
                        <div className="d-flex flex-column gap-3">
                            <span>
                                Dra. Valderis Ott de Moura advogada de formação e militância voltada para a areia trabalhista bancaria, com mais de 21 anos de vasta experiencia e atuação em vários estados da federação, pós-graduada em gestão de pessoas, liderança e coaching pela pontifícia Universidade Católica do Rio Grande Do Sul, pós-graduada em direito empresarial pela Fundação Getúlio Vargas Goiânia e pós-graduanda em direito ambiental e gestão estratégica de sustentabilidade, pela Pontifícia Universidade Católica de São Paulo.
                            </span>
                            <span>
                                Dr. Thiago Junior Carvalho advogado trabalhista há mais de 10 anos, com atuação em diversos estados da federação. Graduado em direto pela Universidade Salgado de Oliveira e pós-graduando em Direito e Processo do Trabalho, pela Universidade Federal de Goiás.
                            </span>
                            <span>
                                 O escritório Valderis Moura & Carvalho, foi fundada final de 2023, com a junção de dois perfis totalmente diferentes, com o intuito de prestar uma advocacia de excelência. Em projeto de expansão, centralizando toda a parte operacional do escritório em sua matriz em Goiânia, conta com filiais em Brasilia-DF, Belo Horizonte-MG, São Paulo-SP, Rio de Janeiro-RJ e Joao Pessoa-PB.
                            </span>
                        </div>
                        <Link to="/sobre"><button onClick={handleButtonClick} className="btn-sobre">Saiba mais</button></Link>
                    </div>
                    </AnimatedComponent>
                    <AnimatedComponent animationType2='scale(0.1)' animationType={'scale'}>
                        <div>
                            <img className="image-sobre" src={Equipe} alt="Imagem"/>
                        </div>
                    </AnimatedComponent>
                </div>
        </div>
    );
}

export default Sobre;
