import './Why.css'
import { ImHammer2 } from "react-icons/im"
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedComponent from '../../AnimatedComponent';

const Why = () => {
    const items = [
        {name: "Profissionais Especializados", simbolo: <ImHammer2 />},
        {name: "Profissionais Especializados", simbolo: <ImHammer2 />},
        {name: "Profissionais Especializados", simbolo: <ImHammer2 />},
        {name: "Profissionais Especializados", simbolo: <ImHammer2 />}
    ]

        return (
            <div className='why p-5 mb-5'>
                <div className='container'>
                <Container fluid>
                    <div className='ms-5'>
                        <h3>AO ESCOLHER A</h3>
                        <h1 className='mb-5'>MOURA ADVOGADOS</h1>
                    </div>
                    <Row className='mt-5 pt-5'>
                        <Col  className="p-5 bg-dark"> 
                            <span> Com equipe especializada, trabalhando com pessoalidade e foco no cliente, o escritório Moura Advogados, conta hoje com serviços de advocacia trabalhista especializada em diversos ramos, sempre com foco na qualidade dos serviços e em busca do melhor resultado.</span>
                        </Col>
                        <Col sm={6} className="bg items p-5">
                            {items.map((item, index) => (
                                <div key={index} className='d-flex align-items-center item'>
                                        <div className='simbolo'><AnimatedComponent animationType={'scale'}>{item.simbolo}</AnimatedComponent></div>
                                        <div className='name'><AnimatedComponent animationType={'scale'}>{item.name}</AnimatedComponent></div>
                                </div>
                                )
                            )}
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
      };

export default Why;
