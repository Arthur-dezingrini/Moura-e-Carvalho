import "./Sobre.css"
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

const Sobre = () => {

    const [showContent, setShowContent] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const animationProps = useSpring({
        config: { duration: 500 },
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translatex(0)' : 'translatex(-100%)',
    });

    const imageAnimation = useSpring({
        config: { duration: 500 },
        opacity: showImage ? 1 : 0,
        transform: showImage ? 'scale(1)' : 'scale(0.6)',
    });

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('sobre');
            if (element) {
                const boundingBox = element.getBoundingClientRect();
                const isElementVisible = boundingBox.top >= 0 && boundingBox.top < window.innerHeight * 0.75;

                if (isElementVisible) {
                    setShowContent(true);
                    setShowImage(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    if (isMobile) {
        return (
            <div className="container pt-5">
                <div className="d-flex justify-content-between">
                    <div id="sobre" className="d-flex flex-column justify-content-center align-items-center gap-3 sobre">
                        <p>CONHEÇA A</p>
                        <h2>Valderis Moura e Carvalho</h2>
                        <span className="tracking-widest">Fundado em 2015, com foco de atuação nas demandas relativas à área trabalhista bancária, o escritório Moura Advogados, administrado e fundado pela Drª Valdéris Ott de Moura, trilhou um caminho de sucesso, sempre com olhos voltados para a evolução dos serviços e identificando a necessidade de uma advocacia personalizada.</span>
                        <span className="tracking-widest">Logrando êxito em inúmeras ações do ramo, tornou-se referência em todo o Estado de Goiás.</span>
                        <span className="tracking-widest">No ano de 2020, em uma visita inusitada à cidade de Brumadinho/MG, a sócia fundadora comoveu-se com a história das famílias enlutadas pela perda de seus entes queridos na tragédia do rompimento da barragem ocorrida em 25.01.2019, e assim, estabeleceu uma filial naquela cidade, para demandas cíveis e trabalhistas, exclusivas e relativas à tragedia. Assumiu a gestão da referida filial, o advogado e sócio, Dr. Marcos Ribeiro Bernadi.</span>
                        <button className="btn-sobre">Saiba mais</button>
                    </div>
                </div>
                <div>
                        <img className="mobile-image" src="./src/assets/Escritorio.jpeg" alt="Imagem"/>
                  </div>
            </div>
        );
    }

    return (
        <div className="container pt-5 pb-5">
            <div style={animationProps} className="d-flex justify-content-between">
                <animated.div id="sobre" style={animationProps} className="w-50 d-flex flex-column justify-content-center gap-3 animated">
                    <p>CONHEÇA A</p>
                    <h2>Valderis Moura e Carvalho</h2>
                    <span className="tracking-widest">Fundado em 2015, com foco de atuação nas demandas relativas à área trabalhista bancária, o escritório Moura Advogados, administrado e fundado pela Drª Valdéris Ott de Moura, trilhou um caminho de sucesso, sempre com olhos voltados para a evolução dos serviços e identificando a necessidade de uma advocacia personalizada.</span>
                    <span className="tracking-widest">Logrando êxito em inúmeras ações do ramo, tornou-se referência em todo o Estado de Goiás.</span>
                    <span className="tracking-widest">No ano de 2020, em uma visita inusitada à cidade de Brumadinho/MG, a sócia fundadora comoveu-se com a história das famílias enlutadas pela perda de seus entes queridos na tragédia do rompimento da barragem ocorrida em 25.01.2019, e assim, estabeleceu uma filial naquela cidade, para demandas cíveis e trabalhistas, exclusivas e relativas à tragedia. Assumiu a gestão da referida filial, o advogado e sócio, Dr. Marcos Ribeiro Bernadi.</span>
                    <button className="btn-sobre">Saiba mais</button>
                </animated.div>
                <animated.div style={imageAnimation}>
                    <img className="animated" src="./src/assets/Escritorio.jpeg" alt="" width={450} height={430} />
                </animated.div>
            </div>
        </div>
    );
}

export default Sobre;
