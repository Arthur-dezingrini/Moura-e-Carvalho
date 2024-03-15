import './Servicesstyle.css'
import { FaCheck } from "react-icons/fa";

const Trabalhista = () => {
    return (
        <div>
            <div className='top p-2 text-white'>
                <h3 className='ms-5'>DIREITO TRABALHISTA</h3>  
            </div>
           
             <div className="container p-5">
                <div className='d-flex flex-column gap-4'>
                    <h3>DIREITO TRABALHISTA</h3>
                    <span>Defendo o direito dos trabalhadores, em especial a grandes grupos varejistas, somos especialista, buscando suprimir direitos que foram suprimidos durante o contrato de trabalho.</span>
                    <p>podemos destacar os principais pedidos:</p>
                </div>
                <ul className="d-flex flex-column gap-3 mt-5 list">
                    <li>
                        <FaCheck className='icon-contato'/> <span>Recalculo de verbas rescisorias;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Horas extras;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/> <span>Intervalo para almoço e descanso;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Acumulo de função;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Pagamento de comissões;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Danos morais por assedio;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Danos morais por venda casada;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Desfio de função;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Adicional de insalubridade;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Adicional de periculosidade;</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Trabalhista