import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedComponent from '../../AnimatedComponent'; 
import ImageSobre from '../../assets/Escritorio.jpeg'

import "./Sobre.css"

const Sobre = () => {
    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="container d-flex p-5">
                <div className='d-flex'>
                    <AnimatedComponent>
                    <div className="d-flex flex-column gap-3 sobre me-5">
                        <p>CONHEÇA A</p>
                        <h2>Valderis Moura e Carvalho</h2>
                        <div className="d-flex flex-column gap-3">
                            <span>Fundado em 2015, com foco de atuação nas demandas relativas à área trabalhista bancária, o escritório Moura Advogados, administrado e fundado pela Drª Valdéris Ott de Moura, trilhou um caminho de sucesso, sempre com olhos voltados para a evolução dos serviços e identificando a necessidade de uma advocacia personalizada.</span>
                            <span>Logrando êxito em inúmeras ações do ramo, tornou-se referência em todo o Estado de Goiás.</span>
                            <span>No ano de 2020, em uma visita inusitada à cidade de Brumadinho/MG, a sócia fundadora comoveu-se com a história das famílias enlutadas pela perda de seus entes queridos na tragédia do rompimento da barragem ocorrida em 25.01.2019, e assim, estabeleceu uma filial naquela cidade, para demandas cíveis e trabalhistas, exclusivas e relativas à tragedia. Assumiu a gestão da referida filial, o advogado e sócio, Dr. Marcos Ribeiro Bernadi.</span>
                        </div>
                        <Link to="/sobre"><button onClick={handleButtonClick} className="btn-sobre">Saiba mais</button></Link>
                    </div>
                    </AnimatedComponent>
                    <AnimatedComponent animationType2='scale(0)' animationType={'scale'}>
                        <div>
                            <img className="image-sobre" src={ImageSobre} alt="Imagem" width={450}/>
                        </div>
                    </AnimatedComponent>
                </div>

        </div>
    );
}

export default Sobre;
