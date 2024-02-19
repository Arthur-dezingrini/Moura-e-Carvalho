import './Servicesstyle.css'
import { FaCheck } from "react-icons/fa";

const Agronegocio = () => {
    return (
        <div>
            <div className='top p-2 text-white'>
                <h3 className='ms-5'>DIREITO DO AGRONEGÓCIO</h3>  
            </div>
           
             <div className="container p-5">
                <div className='d-flex flex-column gap-4'>
                    <h3>DIREITO DO AGRONEGÓCIO</h3>
                    <span>Como se sabe, o Agronegócio é umas das áreas com maior crescimento no ordenamento jurídico e econômico, assim, uma gestão de qualidade faz toda a diferença na prevenção e solução de demandas extrajudiciais e judicias. Com este intuito, a Moura Advogados, oferece mão de obra qualificada, com experiência e vivência de campo, para assessoramento aos pequenos, médios e grandes produtores rurais.</span>
                    <span>Dentre os nossos serviços no ramo do Direito do Agronegócio, destacamos:</span>
                </div>
                <ul className="d-flex flex-column gap-3 mt-5 list">
                    <li>
                        <FaCheck className='icon-contato'/> <span>Contratos agrários (arrendamento rural, parceria rural, pastoreio, compra e venda e outros);</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Negociação e defesa em execuções rurais;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/> <span>Negociações extrajudiciais;;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Crédito Rural;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Holding rural;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Gestão e Direito Trabalhista Rural;</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Agronegocio