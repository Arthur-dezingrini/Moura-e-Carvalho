import ServicoHome from './ServicoHome';
import './ServicosHome.css'
import AnimatedComponent from '../../AnimatedComponent';

const Servicos = () => {
    return (
        <div className="pt-5 mt-5 pb-5 servicos">
                <div className="container">
                        <AnimatedComponent className='m-auto'>
                            <h2> Nossos Serviços </h2>
                        </AnimatedComponent>
                        <div className='d-flex justify-content-center align-items-center'>
                            <AnimatedComponent> <ServicoHome showDescription={false} ></ServicoHome></AnimatedComponent>
                        </div>
                </div>
        </div>
    );
};

export default Servicos;