import './Servicesstyle.css'
import { FaCheck } from "react-icons/fa";

const Bancario = () => {
    return (
        <div>
            <div className='top p-2 text-white'>
                <h3 className='ms-5'>TRABALHISTA BANCARIO</h3>  
            </div>
           
             <div className="container p-5">
                <div className='d-flex flex-column gap-4'>
                    <h3>TRABALHISTA BANCARIO</h3>
                    <span>Ao longo dos anos, as instituições bancárias vêm passando por inúmeras mudanças, entre privatizações, incorporações, fusões, reestruturações, fechamento de agencias,  abalando o cotidiano dos bancários, que sofrem pressões psicológicas, carga excessiva de trabalho e sobrejornada, acarretando consequências muitas vezes irreparáveis. Visando resguardar e pleitear os direitos suprimidos, possuímos profissionais capacitados para orientá-los e esclarecer dúvidas quanto ao contrato de trabalho, ativo ou rescindido.</span>
                    <p>Dentre os direitos dos bancários, podemos destacar:</p>
                </div>
                <ul className="d-flex flex-column gap-3 mt-5 list">
                    <li>
                        <FaCheck className='icon-contato'/> <span>Horas extras;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span> Horas extras pela supressão parcial ou integral do intervalo de almoço;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/> <span>Intervalo determinado no artigo 384 da CLT;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Sétima e oitava horas;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Acúmulo de funções;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Reembolso de quilometragem e depreciação de veículo;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Dano moral por cobrança abusiva de metas;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Danos morais e materiais por acidente do trabalho;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Lucros cessantes pela perda da capacidade (parcial ou total) laborativa;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Reintegração; </span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Integração do pagamento de luvas;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Pré-contratação de horas extras;</span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Pagamento de comissões sobre remuneração varial; </span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Pagamento de premios; </span>
                    </li>
                    <li>
                        <FaCheck  className='icon-contato'/>  <span>Pagamento de diferenças salariais devido ao enquadramento em grades ou aplicabilidade de normativos;</span>
                    </li>            
                </ul>
            </div>
        </div>
    )
}

export default Bancario